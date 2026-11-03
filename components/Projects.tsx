"use client";
import { useRef, useState } from "react";
import { PROJECTS } from "@/data/site";
export default function Projects() {
  const r = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const p = PROJECTS[i];
  return (
    <section id="projects"><div className="wrap">
      <h2>Featured Projects</h2>
      <p className="sub">Concept and learning projects. None of these has been delivered to a paying client.</p>
      <div className="grid">
        {PROJECTS.map((x, n) => (
          <article className="card proj" key={x.t}>
            <div className="thumb" style={{ background: `linear-gradient(135deg,${x.c[0]},${x.c[1]})` }} aria-hidden="true">{x.t.split(" ").map((w) => w[0]).join("").slice(0, 3)}</div>
            <span className="badge soon" style={{ alignSelf: "flex-start" }}>{x.k}</span>
            <h3>{x.t}</h3><p>{x.d}</p>
            <ul className="chips" style={{ margin: "0 0 16px" }}>{x.tags.map((t) => <li className="chip" key={t}>{t}</li>)}</ul>
            <button className="btn ghost" onClick={() => { setI(n); r.current?.showModal(); }}>View case study</button>
          </article>
        ))}
      </div>
      <dialog ref={r} aria-labelledby="dt" onClick={(e) => { if (e.target === r.current) r.current?.close(); }}>
        <button className="x" aria-label="Close" onClick={() => r.current?.close()}>✕</button>
        <span className="badge soon">{p.k}</span><h3 id="dt">{p.t}</h3><p>{p.d}</p>
        <h4>Goal</h4><p>{p.goal}</p><h4>Focus</h4><p>{p.focus}</p>
        <h4>Tools</h4><ul className="chips">{p.tags.map((t) => <li className="chip" key={t}>{t}</li>)}</ul>
        <h4>Status</h4><p>Concept or practice work. Not launched and not delivered to a client.</p>
      </dialog>
    </div></section>
  );
}
