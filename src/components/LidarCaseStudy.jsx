import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { publications } from "../data/publications";
import { filterPubsByKeywords } from "../utils/relatedPubs";
import { perspectives } from "../data/perspectives";
import CaseStudyShell from "./casestudy/CaseStudyShell";
import MetricCard from "./casestudy/MetricCard";
import PhaseCard from "./casestudy/PhaseCard";
import BlockDiagramSvg from "./casestudy/BlockDiagramSvg";
import RelatedPubs from "./casestudy/RelatedPubs";
import Perspective from "./Perspective";

const RELATED_KEYWORDS = ["LiDAR", "FMCW", "Phase Shifter", "Hybrid Coupler", "Frequency Sweep"];
const relatedPubs = filterPubsByKeywords(publications, RELATED_KEYWORDS);

const CHAIN_BLOCKS = [
  { x: 0, label: "TUNABLE\nLASER", sub: "FMCW chirp", color: "#00C8FF", w: 100 },
  { x: 120, label: "SPLITTER", sub: "LO tap", color: "#00C8FF", w: 90 },
  { x: 230, label: "OPA\nTRANSMITTER", sub: "Beam steering", color: "#00C8FF", w: 100 },
  { x: 350, label: "TARGET", sub: "Reflection", color: "#e8edf5", w: 80 },
  { x: 450, label: "COHERENT\nRECEIVER", sub: "90° hybrid + BPD", color: "#00C8FF", w: 110 },
  { x: 580, label: "DIGITAL\nBACK-END", sub: "FFT: range + velocity", color: "#e8edf5", w: 90 },
];

// Radar-style sweep with an accumulating point cloud — the LiDAR
// counterpart to the space study's starfield.
function LidarSweepCanvas({ reduced }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = reduced ? 260 : 0;

    const points = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W * 0.5;
      const cy = H * 0.98;
      const maxR = Math.max(W, H) * 0.95;

      // range arcs
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR * i) / 4, Math.PI, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 200, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // bearing lines
      for (let i = 0; i <= 6; i++) {
        const a = Math.PI + (Math.PI * i) / 6;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.strokeStyle = "rgba(0, 200, 255, 0.04)";
        ctx.stroke();
      }

      // sweeping beam: back and forth across the upper half-plane
      const phase = (t * 0.008) % 2;
      const sweep = phase < 1 ? phase : 2 - phase;
      const beamA = Math.PI + Math.PI * sweep;

      const grad = ctx.createLinearGradient(
        cx, cy,
        cx + Math.cos(beamA) * maxR,
        cy + Math.sin(beamA) * maxR
      );
      grad.addColorStop(0, "rgba(0, 200, 255, 0.35)");
      grad.addColorStop(1, "rgba(0, 200, 255, 0)");
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, beamA - 0.06, beamA + 0.06);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // spawn echo points near the beam
      if (!reduced && t % 3 === 0 && points.length < 220) {
        points.push({
          a: beamA + (Math.random() - 0.5) * 0.1,
          r: maxR * (0.25 + Math.random() * 0.65),
          born: t,
        });
      }
      if (reduced && points.length === 0) {
        for (let i = 0; i < 120; i++) {
          points.push({
            a: Math.PI + Math.random() * Math.PI,
            r: maxR * (0.25 + Math.random() * 0.65),
            born: t,
          });
        }
      }

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        const age = t - p.born;
        const life = reduced ? 1 : Math.max(0, 1 - age / 500);
        if (life <= 0) {
          points.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(cx + Math.cos(p.a) * p.r, cy + Math.sin(p.a) * p.r, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 255, ${(reduced ? 0.35 : 0.6) * life})`;
        ctx.fill();
      }

      t++;
      if (!reduced) {
        animFrame = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="cs-hero-canvas" />;
}

// TX/RX chirps on a frequency-time plot — the one diagram that explains
// FMCW ranging to a non-specialist.
function FmcwChirpSvg({ animate }) {
  return (
    <svg viewBox="0 0 600 280" className="cs-chip-svg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frequency versus time plot of FMCW LiDAR: a transmitted chirp ramps up in frequency, the received echo is a time-delayed copy, and their constant difference — the beat frequency — encodes target distance.">
      {/* axes */}
      <line x1="60" y1="230" x2="560" y2="230" stroke="#8a9bb8" strokeWidth="0.8" opacity="0.5" />
      <line x1="60" y1="230" x2="60" y2="30" stroke="#8a9bb8" strokeWidth="0.8" opacity="0.5" />
      <text x="545" y="248" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#8a9bb8" opacity="0.6">TIME</text>
      <text x="30" y="40" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#8a9bb8" opacity="0.6">FREQ</text>

      {/* TX chirp: two up-ramps */}
      <path d="M 60 210 L 280 60 L 280 210 L 500 60" stroke="#00C8FF" strokeWidth="1.8" fill="none">
        {animate && <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />}
      </path>
      {/* RX chirp: delayed copy */}
      <path d="M 120 210 L 340 60 L 340 210 L 560 60" stroke="#8B5CF6" strokeWidth="1.8" strokeDasharray="6 4" fill="none">
        {animate && <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />}
      </path>

      {/* time-of-flight delay marker */}
      <line x1="60" y1="210" x2="120" y2="210" stroke="#e8edf5" strokeWidth="0.8" opacity="0.4" />
      <line x1="60" y1="205" x2="60" y2="215" stroke="#e8edf5" strokeWidth="0.8" opacity="0.4" />
      <line x1="120" y1="205" x2="120" y2="215" stroke="#e8edf5" strokeWidth="0.8" opacity="0.4" />
      <text x="72" y="202" fontFamily="monospace" fontSize="8" fill="#e8edf5" opacity="0.55">τ = 2R/c</text>

      {/* beat frequency between the curves */}
      <line x1="230" y1="94" x2="230" y2="135" stroke="#00C8FF" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.7" />
      <text x="240" y="120" fontFamily="monospace" fontSize="9" fill="#00C8FF" opacity="0.8">f_beat ∝ distance</text>

      {/* legend */}
      <line x1="380" y1="240" x2="404" y2="240" stroke="#00C8FF" strokeWidth="1.8" />
      <text x="410" y="243" fontFamily="Space Grotesk, sans-serif" fontSize="8" fill="#00C8FF" opacity="0.8">TRANSMITTED</text>
      <line x1="478" y1="240" x2="502" y2="240" stroke="#8B5CF6" strokeWidth="1.8" strokeDasharray="6 4" />
      <text x="508" y="243" fontFamily="Space Grotesk, sans-serif" fontSize="8" fill="#8B5CF6" opacity="0.8">RECEIVED</text>
    </svg>
  );
}

// Optical phased array: emitter column launching a steered wavefront.
function OpaChipSvg({ animate }) {
  const emitters = [70, 105, 140, 175, 210];
  return (
    <svg viewBox="0 0 600 280" className="cs-chip-svg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an optical phased array: laser light is split into channels, each channel passes a phase shifter, and an array of optical antennas emits a combined wavefront steered off-axis.">
      <defs>
        <linearGradient id="opaChip" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#0d2848" />
          <stop offset="1" stopColor="#081830" />
        </linearGradient>
        <linearGradient id="opaWg" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#00C8FF" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#00C8FF" stopOpacity="0.8" />
          <stop offset="1" stopColor="#00C8FF" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="opaBeam" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#00C8FF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#00C8FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="30" y="20" width="330" height="240" rx="3" fill="url(#opaChip)" stroke="#00C8FF" strokeWidth="0.8" opacity="0.8" />
      <text x="40" y="42" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#00C8FF" opacity="0.6" letterSpacing="0.15em">SILICON PHOTONIC OPA</text>

      {/* laser input + splitter tree */}
      <line x1="10" y1="140" x2="60" y2="140" stroke="#00C8FF" strokeWidth="1.5" opacity="0.5" />
      <text x="2" y="132" fontFamily="monospace" fontSize="6" fill="#00C8FF" opacity="0.5">IN</text>
      {emitters.map((y, i) => (
        <path
          key={`split-${i}`}
          d={`M 60 140 C 100 140 110 ${y} 150 ${y}`}
          stroke="url(#opaWg)" strokeWidth="1.2" fill="none" opacity="0.6"
        />
      ))}

      {/* phase shifters + antennas */}
      {emitters.map((y, i) => (
        <g key={`ch-${i}`}>
          <rect x="150" y={y - 6} width="26" height="12" rx="2" fill="none" stroke="#00C8FF" strokeWidth="0.5" opacity="0.5" />
          <text x="155" y={y + 3} fontFamily="monospace" fontSize="5" fill="#00C8FF" opacity="0.4">φ{i + 1}</text>
          <path d={`M 176 ${y} L 300 ${y}`} stroke="url(#opaWg)" strokeWidth="1.4" fill="none">
            {animate && <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur={`${2 + i * 0.25}s`} repeatCount="indefinite" />}
          </path>
          {/* grating antenna */}
          {[0, 1, 2, 3].map((k) => (
            <line key={k} x1={304 + k * 8} y1={y - 5} x2={304 + k * 8} y2={y + 5} stroke="#00C8FF" strokeWidth="1.2" opacity="0.55" />
          ))}
        </g>
      ))}
      <text x="290" y="240" fontFamily="monospace" fontSize="6" fill="#00C8FF" opacity="0.4">ANTENNA ARRAY</text>

      {/* steered wavefront */}
      <polygon points="340,60 590,20 590,180 340,225" fill="url(#opaBeam)" opacity="0.5">
        {animate && <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />}
      </polygon>
      {[0, 1, 2].map((k) => (
        <line
          key={`wf-${k}`}
          x1={400 + k * 60} y1={45 - k * 8}
          x2={385 + k * 60} y2={205 + k * 8}
          stroke="#00C8FF" strokeWidth="0.8" opacity={0.35 - k * 0.08}
        />
      ))}
      <text x="480" y="250" fontFamily="Space Grotesk, sans-serif" fontSize="7" fill="#00C8FF" opacity="0.4" letterSpacing="0.12em">STEERED BEAM</text>
    </svg>
  );
}

export default function LidarCaseStudy() {
  useScrollReveal();
  const reduced = usePrefersReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <CaseStudyShell>
      {/* ── HERO ── */}
      <section className="cs-hero">
        <LidarSweepCanvas reduced={reduced} />
        <div className="cs-hero-content" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="cs-hero-eyebrow reveal">Case Study · Autonomous Sensing</div>
          <h1 className="cs-hero-title reveal">
            Solid-State <span>FMCW LiDAR</span><br />
            on a Chip
          </h1>
          <p className="cs-hero-sub reveal">
            Designing the photonic building blocks of a coherent LiDAR system —
            replacing spinning scanners with silicon circuits that steer light,
            and measure distance and velocity in a single shot.
          </p>
          <div className="cs-hero-meta reveal">
            <div className="cs-meta-item">
              <div className="cs-meta-label">Program</div>
              <div className="cs-meta-value">imec R&amp;D</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Duration</div>
              <div className="cs-meta-value">2023 – 2024</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Role</div>
              <div className="cs-meta-value">Photonic Designer</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="cs-section">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">01 — The Challenge</div>
          <h2 className="section-title">Why Solid-State Coherent LiDAR?</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-col reveal">
            <p>
              Autonomous vehicles, robots, and industrial systems need to perceive
              the world in 3D — reliably, at range, in any lighting. LiDAR is the
              sensor of choice, but most systems still rely on mechanically rotating
              optics and pulsed time-of-flight detection.
            </p>
            <p>
              Mechanical scanners wear out, cost too much, and don't survive
              automotive qualification easily. Pulsed direct detection struggles
              with sunlight and interference from other LiDARs, and says nothing
              about how fast a target is moving.
            </p>
            <p>
              The alternative: frequency-modulated continuous-wave (FMCW) operation
              with coherent detection, built on silicon photonics — no moving parts,
              velocity in every pixel, and wafer-scale manufacturability.
            </p>
          </div>
          <div className="cs-col cs-challenge-cards reveal">
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="16" cy="16" r="11" />
                  <path d="M16 5 A11 11 0 0 1 27 16" strokeWidth="2.5" />
                  <line x1="16" y1="16" x2="23" y2="9" />
                </svg>
              </div>
              <h4>No Moving Parts</h4>
              <p>Mechanical scanning limits lifetime and cost — optical phased arrays steer the beam electronically, on-chip.</p>
            </div>
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="16" cy="10" r="5" />
                  <line x1="16" y1="18" x2="16" y2="28" />
                  <line x1="9" y1="21" x2="23" y2="21" />
                </svg>
              </div>
              <h4>Interference Immunity</h4>
              <p>Coherent detection only amplifies light that matches the local oscillator — sunlight and other LiDARs are rejected by physics.</p>
            </div>
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 24 L12 12 L20 18 L28 6" />
                  <polyline points="22 6 28 6 28 12" />
                </svg>
              </div>
              <h4>Velocity Per Pixel</h4>
              <p>FMCW measures the Doppler shift directly — every point in the cloud carries its own speed, not just position.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ── */}
      <section className="cs-section cs-section--dark">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">02 — The Approach</div>
          <h2 className="section-title">Ranging with Frequency, Steering with Phase</h2>
        </div>
        <p className="cs-lead reveal">
          An FMCW LiDAR sweeps the laser frequency and mixes the returning echo
          with a copy of the transmitted light. The delay shows up as a beat
          frequency — distance becomes a spectral measurement, and Doppler shift
          reveals velocity.
        </p>
        <div className="cs-chip-diagram reveal">
          <FmcwChirpSvg animate={!reduced} />
        </div>
        <div className="cs-platform-grid reveal">
          <div className="cs-platform-card">
            <div className="cs-platform-tag" style={{ color: "#00C8FF", borderColor: "#00C8FF" }}>FMCW + Coherent Detection</div>
            <p>The receive chain mixes echo and local oscillator in an optical hybrid, extracting range and velocity from the beat spectrum.</p>
            <ul>
              <li>Distance and Doppler in a single measurement</li>
              <li>Heterodyne gain lifts weak echoes above noise</li>
              <li>Wavelength-independent 90° hybrid couplers</li>
            </ul>
          </div>
          <div className="cs-platform-card">
            <div className="cs-platform-tag" style={{ color: "#8B5CF6", borderColor: "#8B5CF6" }}>Solid-State Beam Steering</div>
            <p>Optical phased arrays replace the spinning mirror: phase shifters set the wavefront tilt, optical antennas launch the beam.</p>
            <ul>
              <li>Optical phased arrays with dense emitter pitch</li>
              <li>Energy-efficient thermo-optic phase shifters</li>
              <li>Directional couplers and optical antennas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SYSTEM DESIGN ── */}
      <section className="cs-section">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">03 — System Design</div>
          <h2 className="section-title">End-to-End Signal Chain</h2>
        </div>
        <p className="cs-lead reveal">
          A chirped laser feeds the transmitter; a tapped copy becomes the local
          oscillator. The optical phased array launches the beam, and the echo is
          mixed coherently on-chip before digital processing turns beat spectra
          into a 3D point cloud.
        </p>
        <div className="cs-arch-diagram reveal">
          <BlockDiagramSvg blocks={CHAIN_BLOCKS} domain={{ x: -2, width: 564, label: "OPTICAL DOMAIN" }} />
        </div>
        <div className="cs-scope-list reveal">
          <h3>My Contributions</h3>
          <div className="cs-scope-grid">
            <div className="cs-scope-item">
              <span className="cs-scope-num">01</span>
              <div>
                <h4>Device Architectures</h4>
                <p>Designed core building blocks — optical phased arrays, phase shifters, directional couplers, and optical antennas — across multiple architecture variants.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">02</span>
              <div>
                <h4>Coherent Receive Path</h4>
                <p>Contributed to the coherent-detection chain, including tunable 90° hybrid couplers for wavelength-independent receivers.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">03</span>
              <div>
                <h4>Simulation to Tape-Out</h4>
                <p>Owned the full design pipeline: photonic simulation, layout, and verification through to fabrication-ready tape-out.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">04</span>
              <div>
                <h4>Demonstrator Support</h4>
                <p>Supported bring-up and validation of the first functional end-to-end FMCW LiDAR prototype.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILDING BLOCKS ── */}
      <section className="cs-section cs-section--dark">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">04 — Building Blocks</div>
          <h2 className="section-title">From Component Library to System</h2>
        </div>
        <p className="cs-lead reveal">
          Solid-state LiDAR lives or dies on its components: every dB of loss in a
          phase shifter, every degree of beam divergence in an antenna, multiplies
          across hundreds of channels. The work progressed from a validated
          component library to an integrated system.
        </p>
        <div className="cs-chip-diagram reveal">
          <OpaChipSvg animate={!reduced} />
        </div>
        <div className="cs-phases">
          <PhaseCard
            phase="I"
            title="Validated Component Library"
            period="2023"
            description="Device-level design and validation of the beam-steering toolkit — phased arrays, phase shifters, couplers, and antennas — proven in silicon."
            points={[
              "Multiple device architectures designed and validated",
              "Ultralow-loss, energy-efficient thermo-optic phase shifters",
              "Tunable 90° hybrid couplers for coherent receivers",
            ]}
          />
          <PhaseCard
            phase="II"
            title="Integrated LiDAR Demonstrator"
            period="2023 – 2024"
            description="Components assembled into a working coherent LiDAR system — combining silicon photonics with InP gain elements for a complete transmit-receive chain."
            points={[
              "First functional end-to-end FMCW prototype",
              "Hybrid SOI-InP integration for on-chip gain",
              "System results published at OFC and ECOC",
            ]}
          />
        </div>
      </section>

      {/* ── KEY METRICS ── */}
      <section className="cs-section">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">05 — Results</div>
          <h2 className="section-title">Key Outcomes</h2>
        </div>
        <div className="cs-metrics-grid">
          <MetricCard value="4" unit="+" label="Device architectures designed" />
          <MetricCard value="2" unit="" label="Platforms combined (SOI + InP)" />
          <MetricCard value="1" unit="st" label="End-to-end FMCW demonstrator" />
          <MetricCard value={relatedPubs.length} unit="" label="Related publications" />
        </div>
        <div className="cs-outcome-bar reveal">
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Beam-steering component library designed and validated in silicon</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Coherent-detection LiDAR results published at OFC (postdeadline) and ECOC</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Hybrid SOI-InP integration demonstrated for the receive chain</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Full design pipeline established from simulation through tape-out</span>
          </div>
        </div>
        <Perspective>{perspectives.lidar}</Perspective>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section className="cs-section cs-section--dark">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">06 — Publications</div>
          <h2 className="section-title">Related Research</h2>
        </div>
        <RelatedPubs pubs={relatedPubs} />
      </section>
    </CaseStudyShell>
  );
}
