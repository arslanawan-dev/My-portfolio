import { SKILLS } from "@/data/site";
export default function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <h2>Skills &amp; Technologies</h2>
      <p className="sub">What I work with, and what I&apos;m still learning. No made-up percentages.</p>
      <div className="key"><span><i></i>Working with</span><span><i className="r"></i>Learning or exploring</span></div>
      <div className="grid">
        {SKILLS.map((g) => (
          <div className="card" key={g.t}><h3>{g.t}</h3>
            <ul className="chips">{g.i.map(([n, s]) => <li key={n} className={"chip" + (s ? " learn" : "")}>{n}{s ? " · " + s : ""}</li>)}</ul>
          </div>
        ))}
      </div>
    </div></section>
  );
}
