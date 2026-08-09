import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { publications } from "../data/publications";
import { filterPubsByKeywords } from "../utils/relatedPubs";
import CaseStudyShell from "./casestudy/CaseStudyShell";
import MetricCard from "./casestudy/MetricCard";
import PhaseCard from "./casestudy/PhaseCard";
import BlockDiagramSvg from "./casestudy/BlockDiagramSvg";
import RelatedPubs from "./casestudy/RelatedPubs";
import HeroPhoto from "./casestudy/HeroPhoto";
import Perspective from "./Perspective";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";

const RELATED_KEYWORDS = ["Radar", "Aperture", "Satellite", "Spaceborne", "Beamform"];
const relatedPubs = filterPubsByKeywords(publications, RELATED_KEYWORDS);

const ARCH_BLOCKS = [
  { x: 0, label: "ANTENNA\nARRAY", sub: "X-band", color: "#e8edf5", w: 90 },
  { x: 110, label: "RF\nFRONT-END", sub: "LNA + Filter", color: "#e8edf5", w: 90 },
  { x: 220, label: "E/O\nCONVERSION", sub: "MZM", color: "#00C8FF", w: 90 },
  { x: 330, label: "PHOTONIC\nBEAMFORMER", sub: "SiN + InP", color: "#00C8FF", w: 110 },
  { x: 460, label: "O/E\nDETECTION", sub: "Balanced PD", color: "#00C8FF", w: 90 },
  { x: 570, label: "DIGITAL\nBACK-END", sub: "ADC + DSP", color: "#e8edf5", w: 90 },
];

function StarfieldCanvas({ reduced }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;

    const stars = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.3,
          speed: Math.random() * 0.3 + 0.05,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        const flicker = 0.5 + 0.5 * Math.sin(t * s.speed * 0.05 + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${0.3 + flicker * 0.5})`;
        ctx.fill();
      }

      const cx = canvas.width * 0.7;
      const cy = canvas.height * 0.85;
      const earthR = Math.min(canvas.width, canvas.height) * 0.55;
      const grad = ctx.createRadialGradient(cx, cy + earthR * 0.3, earthR * 0.6, cx, cy + earthR * 0.3, earthR * 1.2);
      grad.addColorStop(0, "rgba(0, 60, 120, 0.15)");
      grad.addColorStop(0.6, "rgba(0, 30, 80, 0.08)");
      grad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy + earthR * 0.3, earthR * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy + earthR * 0.3, earthR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 200, 255, 0.06)";
      ctx.lineWidth = 1;
      ctx.stroke();

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

function SatelliteSvg({ animate }) {
  return (
    <svg viewBox="0 0 480 320" className="cs-satellite-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="beam1" x1="240" y1="130" x2="140" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C8FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#00C8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="beam2" x1="240" y1="130" x2="340" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C8FF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#00C8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1a3a6a" />
          <stop offset="1" stopColor="#0d1f3d" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <polygon points="180,140 240,130 300,140 240,310" fill="url(#beam1)" opacity="0.5">
        {animate && <animate attributeName="opacity" values="0.3;0.55;0.3" dur="4s" repeatCount="indefinite" />}
      </polygon>
      <polygon points="200,140 260,130 320,140 300,310" fill="url(#beam2)" opacity="0.35">
        {animate && <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" />}
      </polygon>

      <g>
        <rect x="100" y="88" width="55" height="28" fill="url(#panel)" stroke="#00C8FF" strokeWidth="0.5" opacity="0.7" />
        <rect x="160" y="88" width="55" height="28" fill="url(#panel)" stroke="#00C8FF" strokeWidth="0.5" opacity="0.7" />
        <line x1="110" y1="88" x2="110" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="125" y1="88" x2="125" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="140" y1="88" x2="140" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="170" y1="88" x2="170" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="185" y1="88" x2="185" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="200" y1="88" x2="200" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />

        <rect x="270" y="88" width="55" height="28" fill="url(#panel)" stroke="#00C8FF" strokeWidth="0.5" opacity="0.7" />
        <rect x="330" y="88" width="55" height="28" fill="url(#panel)" stroke="#00C8FF" strokeWidth="0.5" opacity="0.7" />
        <line x1="280" y1="88" x2="280" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="295" y1="88" x2="295" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="310" y1="88" x2="310" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="340" y1="88" x2="340" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="355" y1="88" x2="355" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />
        <line x1="370" y1="88" x2="370" y2="116" stroke="#00C8FF" strokeWidth="0.3" opacity="0.3" />

        <rect x="220" y="80" width="45" height="44" rx="2" fill="#111827" stroke="#00C8FF" strokeWidth="0.8" />
        <rect x="225" y="85" width="35" height="12" rx="1" fill="#0a0f1e" stroke="#00C8FF" strokeWidth="0.3" opacity="0.5" />
        <circle cx="242" cy="112" r="3" fill="#00C8FF" opacity="0.6" filter="url(#glow)">
          {animate && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />}
        </circle>

        <rect x="222" y="124" width="40" height="8" rx="1" fill="#111827" stroke="#00C8FF" strokeWidth="0.5" opacity="0.6" />
        <line x1="215" y1="102" x2="220" y2="102" stroke="#3a4560" strokeWidth="1.5" />
        <line x1="265" y1="102" x2="270" y2="102" stroke="#3a4560" strokeWidth="1.5" />
      </g>

      <g opacity="0.3">
        <circle cx="80" cy="50" r="1" fill="#e8edf5" />
        <circle cx="420" cy="30" r="0.8" fill="#e8edf5" />
        <circle cx="60" cy="150" r="0.6" fill="#e8edf5" />
        <circle cx="440" cy="120" r="1.2" fill="#e8edf5" />
        <circle cx="30" cy="90" r="0.5" fill="#e8edf5" />
        <circle cx="460" cy="70" r="0.7" fill="#e8edf5" />
      </g>

      <path d="M 0 300 Q 120 280 240 290 Q 360 300 480 285" stroke="#00C8FF" strokeWidth="0.5" opacity="0.1" fill="none" />
    </svg>
  );
}

function PhotonicChipSvg({ animate }) {
  return (
    <svg viewBox="0 0 600 280" className="cs-chip-svg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a hybrid photonic module: RF inputs enter a silicon nitride chip through phase shifters into a combiner, then cross a bond interface into an indium phosphide chip with modulator, amplifier, and photodetector stages.">
      <defs>
        <linearGradient id="sinChip" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#0d2848" />
          <stop offset="1" stopColor="#081830" />
        </linearGradient>
        <linearGradient id="inpChip" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1a0d3d" />
          <stop offset="1" stopColor="#100828" />
        </linearGradient>
        <linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#00C8FF" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#00C8FF" stopOpacity="0.8" />
          <stop offset="1" stopColor="#00C8FF" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="wgInp" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect x="30" y="20" width="260" height="240" rx="3" fill="url(#sinChip)" stroke="#00C8FF" strokeWidth="0.8" opacity="0.8" />
      <text x="40" y="42" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#00C8FF" opacity="0.6" letterSpacing="0.15em">SILICON NITRIDE</text>

      <rect x="310" y="20" width="260" height="240" rx="3" fill="url(#inpChip)" stroke="#8B5CF6" strokeWidth="0.8" opacity="0.8" />
      <text x="320" y="42" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#8B5CF6" opacity="0.6" letterSpacing="0.15em">INDIUM PHOSPHIDE</text>

      {[70, 110, 150, 190].map((y, i) => (
        <g key={`sin-wg-${i}`}>
          <line x1="10" y1={y} x2="50" y2={y} stroke="#00C8FF" strokeWidth="1.5" opacity="0.4" />
          <text x="2" y={y + 3} fontFamily="monospace" fontSize="6" fill="#00C8FF" opacity="0.4">RF{i + 1}</text>

          <path
            d={`M 50 ${y} C 80 ${y} 90 ${y + (i % 2 ? 5 : -5)} 120 ${y}`}
            stroke="url(#wg)" strokeWidth="1.5" fill="none"
          />
          <path
            d={`M 120 ${y} L 180 ${y}`}
            stroke="url(#wg)" strokeWidth="1.5" fill="none"
          >
            {animate && <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />}
          </path>

          <rect x="170" y={y - 6} width="20" height="12" rx="2" fill="none" stroke="#00C8FF" strokeWidth="0.5" opacity="0.5" />
          <text x="174" y={y + 3} fontFamily="monospace" fontSize="5" fill="#00C8FF" opacity="0.4">φ{i + 1}</text>

          <path
            d={`M 190 ${y} C 220 ${y} 240 ${130} 270 ${130}`}
            stroke="url(#wg)" strokeWidth="1.2" fill="none" opacity="0.6"
          />
        </g>
      ))}

      <rect x="255" y="118" width="30" height="24" rx="3" fill="none" stroke="#00C8FF" strokeWidth="0.8" opacity="0.7" />
      <text x="259" y="134" fontFamily="monospace" fontSize="6" fill="#00C8FF" opacity="0.5">Σ</text>

      <line x1="290" y1="130" x2="310" y2="130" stroke="#00C8FF" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 2" />

      {[90, 130, 170].map((y, i) => (
        <g key={`inp-wg-${i}`}>
          <path
            d={`M 320 ${y} L 430 ${y}`}
            stroke="url(#wgInp)" strokeWidth="1.5" fill="none"
          >
            {animate && <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />}
          </path>
          <rect x="350" y={y - 6} width="24" height="12" rx="2" fill="none" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.5" />
          <text x="354" y={y + 3} fontFamily="monospace" fontSize="5" fill="#8B5CF6" opacity="0.4">{["MOD", "SOA", "PD"][i]}</text>

          <line x1="430" y1={y} x2="590" y2={y} stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
          <circle cx="590" cy={y} r="2.5" fill="#8B5CF6" opacity="0.4" />
        </g>
      ))}

      <text x="520" y="78" fontFamily="monospace" fontSize="6" fill="#8B5CF6" opacity="0.3">OUT</text>

      <rect x="295" y="120" width="20" height="20" rx="0" fill="none" stroke="#e8edf5" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.3" />
      <text x="298" y="145" fontFamily="monospace" fontSize="4" fill="#e8edf5" opacity="0.25">BOND</text>
    </svg>
  );
}

export default function SpaceRadarCaseStudy() {
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
        <HeroPhoto src={siteImages.spaceRadarHero} />
        <StarfieldCanvas reduced={reduced} />
        <div className="cs-hero-content" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="cs-hero-eyebrow reveal">Case Study · Aerospace</div>
          <h1 className="cs-hero-title reveal">
            Photonic Beamforming<br />
            for <span>Space Radar</span>
          </h1>
          <p className="cs-hero-sub reveal">
            Designing light-based signal processing for next-generation
            Earth observation from orbit — replacing bulky electronics
            with a chip-scale photonic receiver.
          </p>
          <div className="cs-hero-meta reveal">
            <div className="cs-meta-item">
              <div className="cs-meta-label">Program</div>
              <div className="cs-meta-value">EU Space Program</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Duration</div>
              <div className="cs-meta-value">3 Years</div>
            </div>
            <div className="cs-meta-item">
              <div className="cs-meta-label">Role</div>
              <div className="cs-meta-value">Photonic Architect</div>
            </div>
          </div>
        </div>
        <div className="cs-hero-illustration" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
          <SatelliteSvg animate={!reduced} />
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="cs-section">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">01 — The Challenge</div>
          <h2 className="section-title">Why Photonics in Space?</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-col reveal">
            <p>
              Synthetic aperture radar satellites are workhorses of Earth observation —
              mapping terrain, monitoring climate, and tracking changes across the planet
              with all-weather, day-and-night imaging.
            </p>
            <p>
              But as missions demand higher resolution and wider swath coverage, conventional
              electronic receivers hit a fundamental wall: bulky RF distribution networks,
              power-hungry analog-to-digital conversion, and bandwidth limitations that
              constrain the number of simultaneous beams.
            </p>
            <p>
              The question driving this project: could integrated photonics — processing
              radar signals with light instead of electrons — unlock a new class of
              lightweight, wideband spaceborne receivers?
            </p>
          </div>
          <div className="cs-col cs-challenge-cards reveal">
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <rect x="4" y="8" width="24" height="16" rx="2" />
                  <line x1="4" y1="14" x2="28" y2="14" />
                  <line x1="4" y1="18" x2="28" y2="18" />
                  <line x1="16" y1="8" x2="16" y2="24" />
                </svg>
              </div>
              <h4>Size &amp; Weight</h4>
              <p>Traditional RF beamformers scale poorly — every added beam means more hardware, more mass, more power.</p>
            </div>
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z" />
                  <line x1="16" y1="4" x2="16" y2="28" />
                  <line x1="4" y1="10" x2="28" y2="10" />
                </svg>
              </div>
              <h4>Bandwidth</h4>
              <p>Electronic systems struggle above a few GHz of instantaneous bandwidth — photonic links handle tens of GHz natively.</p>
            </div>
            <div className="cs-challenge-card">
              <div className="cs-challenge-icon">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#00C8FF" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="16" cy="16" r="10" />
                  <path d="M16 6 A10 10 0 0 1 26 16" strokeWidth="2.5" />
                  <circle cx="16" cy="16" r="2" fill="#00C8FF" />
                </svg>
              </div>
              <h4>Multi-Beam</h4>
              <p>Scan-on-receive architectures need simultaneous beam steering — photonic true-time delays enable this without squint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ── */}
      <section className="cs-section cs-section--dark">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">02 — The Approach</div>
          <h2 className="section-title">Hybrid Photonic Architecture</h2>
        </div>
        <p className="cs-lead reveal">
          The core innovation was a multi-chip photonic module combining two
          complementary integrated photonics platforms — each bringing strengths
          the other lacked.
        </p>
        <div className="cs-chip-diagram reveal">
          <PhotonicChipSvg animate={!reduced} />
        </div>
        <div className="cs-platform-grid reveal">
          <div className="cs-platform-card">
            <div className="cs-platform-tag" style={{ color: "#00C8FF", borderColor: "#00C8FF" }}>Silicon Nitride</div>
            <p>Ultra-low optical losses for passive signal routing, splitting, and delay lines. The backbone of the beamforming network.</p>
            <ul>
              <li>Propagation loss &lt; 0.1 dB/cm</li>
              <li>Wideband optical transparency</li>
              <li>Phase shifters for beam control</li>
            </ul>
          </div>
          <div className="cs-platform-card">
            <div className="cs-platform-tag" style={{ color: "#8B5CF6", borderColor: "#8B5CF6" }}>Indium Phosphide</div>
            <p>Active photonic functions: modulation, amplification, and detection. The engine that drives the signal chain.</p>
            <ul>
              <li>High-speed Mach-Zehnder modulators</li>
              <li>Semiconductor optical amplifiers</li>
              <li>Balanced photodetectors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SYSTEM ARCHITECTURE ── */}
      <section className="cs-section">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">03 — System Design</div>
          <h2 className="section-title">End-to-End Signal Chain</h2>
        </div>
        <p className="cs-lead reveal">
          Radar returns captured by the antenna array are converted to optical signals,
          processed through the photonic beamforming network, and converted back to
          the electrical domain for digital processing.
        </p>
        <div className="cs-arch-diagram reveal">
          <BlockDiagramSvg blocks={ARCH_BLOCKS} domain={{ x: 218, width: 340, label: "PHOTONIC DOMAIN" }} />
        </div>
        <div className="cs-scope-list reveal">
          <h3>My Contributions</h3>
          <div className="cs-scope-grid">
            <div className="cs-scope-item">
              <span className="cs-scope-num">01</span>
              <div>
                <h4>Architecture Design</h4>
                <p>Defined the photonic receiver architecture from first principles, selecting components and topology for a scan-on-receive SAR.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">02</span>
              <div>
                <h4>Link Budget Simulation</h4>
                <p>Built full analog link-budget models combining optical, RF, and noise analysis to validate system performance before fabrication.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">03</span>
              <div>
                <h4>Component Characterization</h4>
                <p>Measured and validated individual photonic components — modulators, filters, amplifiers — against simulation targets.</p>
              </div>
            </div>
            <div className="cs-scope-item">
              <span className="cs-scope-num">04</span>
              <div>
                <h4>Module Integration</h4>
                <p>Guided the multi-chip assembly from die-level bonding through to a packaged module ready for space-compliance testing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 2: CONSTELLATION ── */}
      <section className="cs-section cs-section--dark">
        <div className="cs-section-header reveal">
          <div className="section-eyebrow">04 — Scaling Up</div>
          <h2 className="section-title">From One Satellite to a Constellation</h2>
        </div>
        <p className="cs-lead reveal">
          Building on the single-satellite beamformer, the research expanded to a
          multi-static radar system — multiple satellites working coherently as a
          distributed synthetic aperture, with photonics enabling the precision
          signal distribution that makes it possible.
        </p>
        <div className="cs-phases">
          <PhaseCard
            phase="I"
            title="Single-Satellite Photonic Receiver"
            period="2020 – 2022"
            description="A hybrid SiN-InP beamforming module for scan-on-receive SAR. The foundation — proving photonics could handle the signal chain in a space-qualified package."
            points={[
              "Hybrid multi-chip assembly validated",
              "Full analog link budget simulation framework",
              "Module packaged for space compliance testing",
            ]}
          />
          <PhaseCard
            phase="II"
            title="Coherent Multi-Satellite Network"
            period="2021 – 2023"
            description="Photonic integrated circuits for signal generation, distribution, and down-conversion across a satellite constellation — enabling coherent radar imaging from multiple orbital positions."
            points={[
              "Advanced SOI platform with micro-transfer printed amplifiers",
              "System spanning optical, RF, and free-space links",
              "Multi-band operation for enhanced imaging capability",
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
          <MetricCard value="3" unit="" label="Photonic platforms integrated" />
          <MetricCard value="X" unit="-band" label="Operating frequency" />
          <MetricCard value="2" unit="" label="Chip architectures designed" />
          <MetricCard value="8" unit="+" label="Peer-reviewed publications" />
        </div>
        <div className="cs-outcome-bar reveal">
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Hybrid module fabricated and packaged for space compliance</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Simulation framework validated against measured data</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Results published in top-tier photonics and radar venues</span>
          </div>
          <div className="cs-outcome">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            <span>Collaboration with major European aerospace industry partners</span>
          </div>
        </div>
        <Perspective>{perspectives.spaceRadar}</Perspective>
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
