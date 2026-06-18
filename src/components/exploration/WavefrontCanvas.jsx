import { useEffect, useRef, useState } from "react";
import { Slider } from "./Figure";

// Two coherent point sources on the left edge. Each pixel shows the intensity
// of their interfering waves. Adjusting the relative phase swings the bright
// lobes — the core idea behind beam steering.
export default function WavefrontCanvas() {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState(0); // degrees
  const [sepLambda, setSepLambda] = useState(3); // separation in wavelengths

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const render = () => {
      const W = (canvas.width = canvas.offsetWidth);
      const H = (canvas.height = canvas.offsetHeight);
      const lambda = 16; // px per wavelength
      const k = (2 * Math.PI) / lambda;
      const phi = (phase * Math.PI) / 180;
      const sep = sepLambda * lambda;

      const sx = 4;
      const cy = H / 2;
      const s1 = { x: sx, y: cy - sep / 2 };
      const s2 = { x: sx, y: cy + sep / 2 };

      const img = ctx.createImageData(W, H);
      const data = img.data;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const r1 = Math.hypot(x - s1.x, y - s1.y);
          const r2 = Math.hypot(x - s2.x, y - s2.y);
          // intensity of coherent sum, normalised to [0,1]
          const inten = (1 + Math.cos(k * (r1 - r2) - phi)) / 2;
          // gentle distance falloff so the near field doesn't blow out
          const fall = Math.min(1, 120 / (40 + Math.min(r1, r2)));
          const v = inten * (0.35 + 0.65 * fall);
          const idx = (y * W + x) * 4;
          data[idx] = v * 0; // R
          data[idx + 1] = v * 200; // G
          data[idx + 2] = v * 255; // B
          data[idx + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);

      // mark the two emitters
      [s1, s2].forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x + 2, s.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      });
    };

    render();
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [phase, sepLambda]);

  return (
    <div className="ln-canvas-block">
      <canvas ref={canvasRef} className="ln-canvas" style={{ height: 280 }} />
      <div className="ln-controls">
        <Slider
          label="Phase offset between sources"
          value={phase}
          min={-180}
          max={180}
          step={1}
          unit="°"
          onChange={setPhase}
        />
        <Slider
          label="Separation"
          value={sepLambda}
          min={1}
          max={6}
          step={0.5}
          unit="λ"
          onChange={setSepLambda}
        />
      </div>
    </div>
  );
}
