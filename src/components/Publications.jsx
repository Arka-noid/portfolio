import { publications } from "../data/publications";

export default function Publications() {
  return (
    <section id="publications">
      <div className="reveal">
        <div className="section-eyebrow">Research</div>
        <h2 className="section-title">Selected Publications</h2>
      </div>
      <div className="pub-list reveal">
        {publications.map((p, i) => (
          <div key={i} className="pub-item">
            <div className="pub-title">{p.title}</div>
            <div className="pub-meta">{p.journal}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
