import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";

// sin(theta_m) = (n_eff - m * lambda0 / period) / n_clad
// Diffraction order m couples out of the waveguide mode only while
// |sin(theta_m)| <= 1; outside that range the order is evanescent and
// stays bound to the grating instead of radiating.
function diffractionOrder({ nEff, wavelength, period, nClad, m }) {
  const sinTheta = (nEff - (m * wavelength) / period) / nClad;
  const propagating = Math.abs(sinTheta) <= 1;
  const angleDeg = propagating ? (Math.asin(sinTheta) * 180) / Math.PI : null;
  return { m, sinTheta, angleDeg, propagating };
}

const CLAD_PRESETS = [
  { label: "Air", value: 1.0 },
  { label: "SiO₂", value: 1.44 },
  { label: "Index-matched", value: 1.46 },
];

function SliderRow({ id, label, value, onChange, min, max, step, unit, format }) {
  return (
    <div className="gc-slider-row">
      <div className="gc-slider-head">
        <label htmlFor={id}>{label}</label>
        <span className="gc-slider-value">
          {format ? format(value) : value}
          {unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}

function GratingDiagram({ orders, maxOrder }) {
  const cx = 150;
  const cy = 130;
  const rayLength = 110;
  const teeth = 9;
  const toothSpan = 140;

  return (
    <svg
      className="gc-diagram"
      viewBox="0 0 300 200"
      role="img"
      aria-label="Diffraction angles for each grating order, measured from the surface normal"
    >
      <line x1={cx} y1={cy} x2={cx} y2={10} className="gc-diagram-normal" />
      <text x={cx + 8} y={cy - 16} className="gc-diagram-label">
        normal
      </text>

      {orders
        .filter((order) => order.propagating)
        .map((order) => {
          const theta = (order.angleDeg * Math.PI) / 180;
          const x2 = cx + rayLength * Math.sin(theta);
          const y2 = cy - rayLength * Math.cos(theta);
          const isPrimary = Math.abs(order.m) === 1;
          return (
            <g key={order.m} className={isPrimary ? "gc-ray gc-ray--primary" : "gc-ray"}>
              <line x1={cx} y1={cy} x2={x2} y2={y2} />
              <text x={x2} y={y2 - (y2 < cy ? 4 : -10)} textAnchor="middle">
                m={order.m}
              </text>
            </g>
          );
        })}

      <g className="gc-diagram-chip">
        <rect x={cx - toothSpan / 2} y={cy} width={toothSpan} height="40" />
        {Array.from({ length: teeth }).map((_, i) => (
          <rect
            key={i}
            x={cx - toothSpan / 2 + (i * toothSpan) / teeth}
            y={cy - 8}
            width={toothSpan / teeth / 2}
            height="8"
          />
        ))}
      </g>
      <text x={cx} y={cy + 56} textAnchor="middle" className="gc-diagram-label">
        waveguide / grating
      </text>
    </svg>
  );
}

export default function GratingCouplerCalculator() {
  useScrollReveal();
  useSEO({
    title: "Grating Coupler Calculator | Merilight",
    description:
      "Interactive grating coupler diffraction-angle calculator, including higher-order modes, for photonic IC design.",
    path: "/tools/grating-coupler-calculator",
    noindex: true,
  });

  const [nEff, setNEff] = useState(2.85);
  const [period, setPeriod] = useState(630);
  const [wavelength, setWavelength] = useState(1550);
  const [nClad, setNClad] = useState(1.44);
  const [maxOrder, setMaxOrder] = useState(3);

  const orders = useMemo(() => {
    const list = [];
    for (let m = -maxOrder; m <= maxOrder; m += 1) {
      list.push(diffractionOrder({ nEff, wavelength, period, nClad, m }));
    }
    return list;
  }, [nEff, wavelength, period, nClad, maxOrder]);

  return (
    <section id="grating-coupler-calculator" className="gc-page reveal">
      <div className="section-eyebrow">Engineering Tool</div>
      <h1 className="section-title">Grating Coupler Calculator</h1>
      <p className="gc-intro">
        Solves the grating coupler phase-matching condition for every diffraction order at once,
        so you can see which higher-order modes stay bound to the grating and which ones radiate
        alongside the design order. Drag the sliders — the result updates live.
      </p>

      <div className="gc-layout">
        <div className="gc-panel gc-controls">
          <SliderRow
            id="gc-neff"
            label="Effective index nₑₑ"
            value={nEff}
            onChange={setNEff}
            min={1.4}
            max={3.5}
            step={0.01}
            format={(v) => v.toFixed(2)}
          />
          <SliderRow
            id="gc-period"
            label="Grating period Λ"
            value={period}
            onChange={setPeriod}
            min={300}
            max={1200}
            step={1}
            unit=" nm"
          />
          <SliderRow
            id="gc-wavelength"
            label="Wavelength λ₀"
            value={wavelength}
            onChange={setWavelength}
            min={1260}
            max={1650}
            step={1}
            unit=" nm"
          />
          <SliderRow
            id="gc-nclad"
            label="Cladding index n_clad"
            value={nClad}
            onChange={setNClad}
            min={1.0}
            max={1.6}
            step={0.01}
            format={(v) => v.toFixed(2)}
          />
          <div className="gc-presets">
            {CLAD_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className={nClad === preset.value ? "gc-preset gc-preset--active" : "gc-preset"}
                onClick={() => setNClad(preset.value)}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <SliderRow
            id="gc-maxorder"
            label="Highest order shown"
            value={maxOrder}
            onChange={(v) => setMaxOrder(Math.round(v))}
            min={1}
            max={4}
            step={1}
          />
        </div>

        <div className="gc-panel gc-output">
          <GratingDiagram orders={orders} maxOrder={maxOrder} />

          <table className="gc-table">
            <thead>
              <tr>
                <th>Order m</th>
                <th>sin θ</th>
                <th>θ (deg)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.m}
                  className={Math.abs(order.m) === 1 ? "gc-row-primary" : undefined}
                >
                  <td>{order.m}</td>
                  <td>{order.sinTheta.toFixed(3)}</td>
                  <td>{order.propagating ? order.angleDeg.toFixed(2) : "—"}</td>
                  <td>
                    {order.propagating ? (
                      <span className="gc-status gc-status--propagating">Propagating</span>
                    ) : (
                      <span className="gc-status gc-status--evanescent">Evanescent</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="gc-formula">
        sin θ<sub>m</sub> = (nₑₑ &minus; m &middot; λ₀ / Λ) / n_clad, evaluated for each order m. m
        = 0 is the guided mode itself and only radiates once nₑₑ drops below n_clad; |m| = 1 is
        the order most gratings are designed around, and any other propagating order is
        out-of-band loss the design has to suppress.
      </p>

      <Link className="cs-back-cta" to="/">
        ← Back to Merilight
      </Link>
    </section>
  );
}
