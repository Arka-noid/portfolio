import { useEffect, useRef } from "react";

function WaveguideCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width;
      const H = canvas.height;

      for (let i = 0; i < 4; i++) {
        const yBase = H * (0.3 + i * 0.12);
        const amp = 18 + i * 6;
        const freq = 0.008 - i * 0.001;
        const speed = 0.012 + i * 0.003;
        const alpha = 0.12 - i * 0.025;

        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= W; x += 2) {
          const y = yBase + Math.sin(x * freq + t * speed) * amp;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(0,200,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const pulseX = ((t * 2.5) % (W + 80)) - 40;
      const pulseY =
        H * 0.3 + Math.sin(pulseX * 0.008 + t * 0.012) * 18;
      const grad = ctx.createRadialGradient(
        pulseX, pulseY, 0,
        pulseX, pulseY, 20
      );
      grad.addColorStop(0, "rgba(0,200,255,0.7)");
      grad.addColorStop(1, "rgba(0,200,255,0)");
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 20, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="hero">
      <WaveguideCanvas />
      <div className="hero-content">
        <div className="hero-eyebrow">
          Optical Systems Engineer · Product Integrator
        </div>
        <h1 className="hero-title">
          Engineering
          <br />
          <span>Light</span> into Systems
        </h1>
        <p className="hero-sub">
          10+ years bridging photonic devices, system architecture, and product
          integration — from cleanroom to TRL 6 prototypes.
        </p>
        <a className="hero-cta" onClick={() => scrollTo("experience")}>
          View experience ↓
        </a>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">
            10<span>+</span>
          </div>
          <div className="stat-label">Years experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            TRL <span>6</span>
          </div>
          <div className="stat-label">Product readiness</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            3<span>+</span>
          </div>
          <div className="stat-label">EU projects</div>
        </div>
      </div>
    </div>
  );
}
