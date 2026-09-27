const projects = [
  {
    title: "HookLens",
    label: "Flagship developer tool",
    description: "A self-hosted webhook inspector with live capture, HMAC verification, structural schema-drift detection, and guarded replay. Explore the synthetic browser sandbox or run the real HTTP service locally.",
    stack: ["TypeScript", "React", "Node.js", "SSE"],
    repo: "https://github.com/merak-max/hooklens",
    demo: "https://merak-max.github.io/hooklens/",
    linkLabel: "Try sandbox",
  },
  {
    title: "Auction Engine",
    label: "Measured backend systems",
    description: "Second-price and GSP auctions with budget pacing and shared PostgreSQL reservations. Published local run: 5.51 ms p99 over 50,000 requests at eight clients. Same-host closed-loop measurement, not a production latency guarantee.",
    stack: ["Go", "PostgreSQL", "Concurrency", "Load testing"],
    repo: "https://github.com/merak-max/auction-engine",
    demo: "https://github.com/merak-max/auction-engine/tree/main/benchmarks",
    linkLabel: "Benchmark evidence",
  },
  {
    title: "Blue Carbon Registry",
    label: "Full-stack workflow prototype",
    description: "A TypeScript interface and Express API for project records, verification states, credit accounting, and stakeholder dashboards.",
    stack: ["TypeScript", "React", "Express", "MongoDB"],
    repo: "https://github.com/merak-max/blue-carbon-registry",
    demo: "https://merak-max.github.io/blue-carbon-registry/",
    linkLabel: "UI demo",
  },
];

const skills = [
  ["Frontend", "React, TypeScript, JavaScript, HTML, CSS, Vite, Next.js"],
  ["Backend", "Node.js, Go, Express, REST APIs, validation, authentication"],
  ["Data", "PostgreSQL, MongoDB, bounded JSON storage"],
  ["Systems", "Server-Sent Events, concurrency, replay controls, budget pacing"],
  ["Quality", "Playwright, Node.js tests, ESLint, GitHub Actions"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top">HKS<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="https://github.com/merak-max" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <p className="eyebrow">Hemant Kumar Singh · Full-stack developer</p>
        <h1>I build developer tools and measurable backend systems.</h1>
        <p className="intro">
          I work across TypeScript, Node.js, Go, and React—building useful interfaces,
          testing failure paths, and documenting what the measurements actually show.
        </p>
        <div className="actions">
          <a className="primaryAction" href="#work">Explore my work</a>
          <a className="secondaryAction" href="https://github.com/merak-max" target="_blank" rel="noreferrer">
            View GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="signalRow" aria-label="Current focus">
          <span>Currently focused on</span>
          <strong>Developer tools · reliable APIs · reproducible measurements</strong>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="sectionHeading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that show the engineering, not just the interface.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="projectIndex">0{index + 1}</div>
              <p className="projectLabel">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags" aria-label={project.title + " technologies"}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="projectLinks">
                <a href={project.demo} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>
                <a href={project.repo} target="_blank" rel="noreferrer">Source ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section shell split">
        <div className="sectionHeading">
          <p className="eyebrow">Technical toolkit</p>
          <h2>From the interface to the request path.</h2>
          <p className="sectionCopy">
            I care about useful interfaces, explicit system boundaries, safe configuration,
            automated verification, and documentation another developer can follow.
          </p>
        </div>
        <dl className="skillList">
          {skills.map(([name, detail]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section shell">
        <div className="principles">
          <p className="eyebrow">How I work</p>
          <div className="principleGrid">
            <div><strong>Build honestly</strong><span>Claims should match running code.</span></div>
            <div><strong>Test risky paths</strong><span>Failures and edge cases deserve coverage.</span></div>
            <div><strong>Document decisions</strong><span>Good software should be understandable.</span></div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p className="eyebrow">Let&apos;s build something useful</p>
          <h2>Open to learning, collaboration, and software opportunities.</h2>
        </div>
        <a className="primaryAction" href="https://github.com/merak-max" target="_blank" rel="noreferrer">
          Connect on GitHub ↗
        </a>
      </footer>
    </main>
  );
}
