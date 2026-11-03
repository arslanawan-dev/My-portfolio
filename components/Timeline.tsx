import { JOURNEY } from "@/data/site";
const L: Record<string, string> = { done: "Done", now: "In progress", next: "Up next" };
export default function Timeline() {
  return (
    <section id="journey" className="alt"><div className="wrap">
      <h2>Learning Today. Building for Tomorrow.</h2>
      <ol className="tl">{JOURNEY.map(([t, d, s]) => <li key={t} className={s}><small>{L[s]}</small><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>
  );
}
