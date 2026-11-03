export default function Hero() {
  return (
    <section className="hero" id="home"><div className="wrap hgrid">
      <div>
        <span className="role">AI &amp; Web Solutions Developer</span>
        <h1>Building Digital Experiences with <span className="grad">AI &amp; Modern Web Technology.</span></h1>
        <p className="lead">I&apos;m Arslan Awan, an aspiring AI engineer and web developer from Pakistan. I explore AI-powered solutions, build modern websites, create e-commerce experiences, and develop ideas that help businesses grow.</p>
        <div className="ctas"><a className="btn red" href="#projects">Explore My Work</a><a className="btn ghost" href="#contact">Let&apos;s Connect</a></div>
      </div>
      <div className="visual" aria-hidden="true">
        {/* Replace this block with <Image src="/profile.jpg" ... /> when you have a photo */}
        <div className="photo"><div><b>AA</b>Profile photo placeholder</div></div>
        {["AI", "Web Development", "Shopify", "Automation"].map((x) => <span key={x} className="fc">{x}</span>)}
      </div>
    </div></section>
  );
}
