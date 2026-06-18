const sections = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "lightnotes", label: "light notes" },
  { id: "competencies", label: "competencies" },
  { id: "publications", label: "publications" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav>
      <div className="nav-logo">MR</div>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s.id}>
            <a onClick={() => scrollTo(s.id)}>{s.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
