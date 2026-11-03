import { WHY } from "@/data/site";
export default function Why() {
  return (
    <section className="why"><div className="wrap">
      <h2>Why Work With Me?</h2>
      <div className="grid">{WHY.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  );
}
