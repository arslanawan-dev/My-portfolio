"use client";
import { useState } from "react";
const L = ["Home", "About", "Skills", "Services", "Projects", "Contact"];
export default function Navbar() {
  const [o, s] = useState(false);
  return (
    <header><div className="wrap"><nav aria-label="Main">
      <a className="logo" href="#home"><span className="mono">AA</span>Arslan Awan</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={o} onClick={() => s(!o)}>☰</button>
      <ul className={"links" + (o ? " open" : "")} onClick={() => s(false)}>
        {L.map((x) => <li key={x}><a href={"#" + x.toLowerCase()}>{x}</a></li>)}
        <li><a className="btn red" href="#contact">Let&apos;s Work Together</a></li>
      </ul>
    </nav></div></header>
  );
}
