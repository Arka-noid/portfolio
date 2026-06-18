const sections = ["experience", "projects", "competencies", "publications", "contact"];

export default function Nav() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav>
      <div className="nav-logo">MR</div>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s}>
            <a onClick={() => scrollTo(s)}>{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
