import { SOCIAL } from "@/data/site";
export default function Footer() {
  const links = Object.entries(SOCIAL).filter(([, u]) => u);
  return (
    <footer><div className="wrap">
      <div className="fgrid">
        <div><a className="logo" href="#home"><span className="mono">AA</span>Arslan Awan</a><p style={{ marginTop: 12, maxWidth: "34ch" }}>Practical websites, stores and AI ideas for growing businesses.</p></div>
        <ul>{["About", "Skills", "Services", "Projects", "Contact"].map((x) => <li key={x}><a href={"#" + x.toLowerCase()}>{x}</a></li>)}</ul>
      </div>
      {links.length > 0 && <ul className="soc">{links.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer">{n}</a></li>)}</ul>}
      <div className="copy"><span>© {new Date().getFullYear()} Arslan Awan. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
    </div></footer>
  );
}
