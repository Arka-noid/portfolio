import { useEffect, useRef, useState } from "react";
import { Slider } from "./Figure";

// Far-field intensity of an N-element phased array vs. emission angle.
//   psi(t) = 2*pi*dLambda*(sin t - sin t0)
//   AF(t)  = sin(N*psi/2) / (N*sin(psi/2))   -> 1 as psi -> 0
// Steering angle t0 tilts the main lobe; more elements narrow it;
// wide pitch makes grating lobes (ghost beams) appear.
export default function ArrayFactorCanvas() {
  const canvasRef = useRef(null);
  const [n, setN] = useState(8);
  const [steer, setSteer] = useState(0); // degrees
  const [pitch, setPitch] = useState(0.5); // d / lambda

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const render = () => {
      const W = (canvas.width = canvas.offsetWidth);
      const H = (canvas.height = canvas.offsetHeight);
      ctx.clearRect(0, 0, W, H);

      const padL = 38;
      const padR = 12;
      const padT = 14;
      const padB = 26;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;

      const t0 = (steer * Math.PI) / 180;
      const af = (tDeg) => {
        const t = (tDeg * Math.PI) / 180;
        const psi = 2 * Math.PI * pitch * (Math.sin(t) - Math.sin(t0));
        const half = psi / 2;
        const denom = n * Math.sin(half);
        const val = Math.abs(denom) < 1e-6 ? 1 : Math.sin(n * half) / denom;
        return val * val;
      };

      const xOf = (tDeg) => padL + ((tDeg + 90) / 180) * plotW;
      const yOf = (inten) => padT + (1 - inten) * plotH;

      // grid + axis ticks
      ctx.strokeStyle = "rgba(138,155,184,0.15)";
      ctx.fillStyle = "rgba(138,155,184,0.7)";
      ctx.font = "10px 'Space Grotesk', sans-serif";
      ctx.lineWidth = 1;
      for (let a = -90; a <= 90; a += 30) {
        ctx.beginPath();
        ctx.moveTo(xOf(a), padT);
        ctx.lineTo(xOf(a), padT + plotH);
        ctx.stroke();
        ctx.textAlign = "center";
        ctx.fillText(`${a}°`, xOf(a), H - 10);
      }

      // steering marker
      ctx.strokeStyle = "rgba(0,200,255,0.35)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(xOf(steer), padT);
      ctx.lineTo(xOf(steer), padT + plotH);
      ctx.stroke();
      ctx.setLineDash([]);

      // intensity curve (filled)
      ctx.beginPath();
      ctx.moveTo(xOf(-90), yOf(0));
      for (let a = -90; a <= 90; a += 0.5) ctx.lineTo(xOf(a), yOf(af(a)));
      ctx.lineTo(xOf(90), yOf(0));
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, padT, 0, padT + plotH);
      grad.addColorStop(0, "rgba(0,200,255,0.45)");
      grad.addColorStop(1, "rgba(0,200,255,0.02)");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      for (let a = -90; a <= 90; a += 0.5) {
        const x = xOf(a);
        const y = yOf(af(a));
        a === -90 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#00c8ff";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // y label
      ctx.fillStyle = "rgba(138,155,184,0.7)";
      ctx.save();
      ctx.translate(12, padT + plotH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center";
      ctx.fillText("intensity", 0, 0);
      ctx.restore();
    };

    render();
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [n, steer, pitch]);

  return (
    <div className="ln-canvas-block">
      <canvas ref={canvasRef} className="ln-canvas" style={{ height: 240 }} />
      <div className="ln-controls">
        <Slider
          label="Number of emitters"
          value={n}
          min={2}
          max={32}
          step={1}
          onChange={setN}
        />
        <Slider
          label="Steering angle"
          value={steer}
          min={-60}
          max={60}
          step={1}
          unit="°"
          onChange={setSteer}
        />
        <Slider
          label="Emitter pitch"
          value={pitch}
          min={0.3}
          max={3}
          step={0.1}
          unit="λ"
          onChange={setPitch}
        />
      </div>
    </div>
  );
}
