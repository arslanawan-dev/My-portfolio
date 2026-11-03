"use client";
import { SERVICES } from "@/data/site";
export default function Services() {
  return (
    <section id="services" className="alt"><div className="wrap">
      <h2>Digital Solutions for Growing Businesses</h2>
      <p className="sub">Services I offer today are marked separately from areas I&apos;m still learning.</p>
      <div className="grid">
        {SERVICES.map((s, i) => (
          <div className="card" key={s.t}>
            <span className={"badge " + (s.now ? "now" : "soon")}>{s.now ? "Available now" : "Still learning"}</span>
            <h3>{s.t}</h3><p>{s.d}</p>
            <a className={"btn " + (s.now ? "red" : "ghost")} href="#contact" onClick={() => window.dispatchEvent(new CustomEvent("service", { detail: i }))}>Discuss Your Project</a>
          </div>
        ))}
      </div>
    </div></section>
  );
}
