export default function Figure({ number, caption, children }) {
  return (
    <figure className="ln-figure">
      <div className="ln-figure-body">{children}</div>
      {(number || caption) && (
        <figcaption className="ln-figure-caption">
          {number && <span className="ln-figure-num">Fig. {number}</span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Slider({ label, value, min, max, step = 1, unit = "", onChange }) {
  return (
    <label className="ln-slider">
      <span className="ln-slider-label">
        {label}
        <span className="ln-slider-value">
          {value}
          {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}
