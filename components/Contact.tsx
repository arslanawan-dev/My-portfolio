"use client";
import { useEffect, useState } from "react";
import { SOCIAL } from "@/data/site";
const TYPES = ["Website development", "Shopify store", "WordPress website", "Graphic design", "AI & automation", "Something else"];
export default function Contact() {
  const [type, setType] = useState(0);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [st, setSt] = useState<{ ok: boolean; msg: string } | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const h = (e: Event) => setType((e as CustomEvent<number>).detail);
    window.addEventListener("service", h);
    return () => window.removeEventListener("service", h);
  }, []);
  const links = Object.entries(SOCIAL).filter(([, u]) => u);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget, d = new FormData(f);
    const name = String(d.get("name")).trim(), email = String(d.get("email")).trim(), message = String(d.get("message")).trim();
    const x: Record<string, string> = {};
    if (!name) x.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) x.email = "Enter a valid email address.";
    if (message.length < 10) x.message = "Describe your project in at least 10 characters.";
    setErrs(x); setSt(null);
    if (Object.keys(x).length) return;
    setBusy(true);
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message, type: TYPES[type], budget: d.get("budget") }) });
      if (!r.ok) throw new Error((await r.json()).error);
      setSt({ ok: true, msg: "Thanks! Your message was sent. I'll reply soon." });
      f.reset(); setType(0);
    } catch (err) {
      setSt({ ok: false, msg: "Couldn't send your message. " + (err instanceof Error ? err.message : "") });
    } finally { setBusy(false); }
  }
  return (
    <section id="contact" className="alt"><div className="wrap">
      <h2>Have a Project in Mind?</h2>
      <p className="sub">Let&apos;s discuss how a website, e-commerce store, creative design, or AI-powered solution could support your business.</p>
      <div className="cgrid" style={{ marginTop: 36 }}>
        <ul className="soc">{links.length ? links.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer">{n}</a></li>) : <li className="sub" style={{ margin: 0, fontSize: 14 }}>Contact links appear here once added in data/site.ts.</li>}</ul>
        <form onSubmit={submit} noValidate>
          <div className="two">
            <label>Name<input name="name" autoComplete="name" /><span className="err">{errs.name}</span></label>
            <label>Email<input name="email" type="email" autoComplete="email" /><span className="err">{errs.email}</span></label>
          </div>
          <div className="two">
            <label>Project type<select value={type} onChange={(e) => setType(+e.target.value)}>{TYPES.map((t, i) => <option key={t} value={i}>{t}</option>)}</select></label>
            <label>Budget range<select name="budget"><option>Not sure yet</option><option>Under PKR 25,000</option><option>PKR 25,000 – 75,000</option><option>PKR 75,000 – 150,000</option><option>PKR 150,000+</option></select></label>
          </div>
          <label>Project details<textarea name="message" rows={5} /><span className="err">{errs.message}</span></label>
          <button className="btn red" type="submit" disabled={busy}>{busy ? "Sending…" : "Send Message"}</button>
          {st && <div id="status" className={st.ok ? "ok" : "bad"} role="status">{st.msg}</div>}
        </form>
      </div>
    </div></section>
  );
}
