import { INTERESTS } from "@/data/site";
export default function About() {
  return (
    <section id="about" className="alt"><div className="wrap">
      <h2>A Little About Me</h2>
      <div className="about" style={{ marginTop: 36 }}>
        <div>
          <p>Technology is what I keep coming back to. I like seeing an idea turn into a working website, a store that sells, or a design that makes a product look worth buying.</p>
          <p>I&apos;m a motivated learner and creator. Right now I build responsive business sites and Shopify stores, design marketing creatives, and spend my learning time on AI, from generative AI to agents and automation. I want to build practical tools for businesses in Pakistan.</p>
        </div>
        <ul>{INTERESTS.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </div></section>
  );
}
