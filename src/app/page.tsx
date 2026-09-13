const projects = [
  {
    title: "Advance Online Chatbot",
    label: "Flagship AI workspace",
    description: "Streaming chat, controlled model selection, document Q&A, versioned backups, defensive validation, and 52 automated checks.",
    stack: ["React", "Express", "OpenAI SDK", "Playwright"],
    repo: "https://github.com/merak-max/advance-online-chatbot",
    demo: "https://merak-max.github.io/advance-online-chatbot/",
  },
  {
    title: "Blue Carbon Registry",
    label: "Full-stack workflow prototype",
    description: "A TypeScript interface and Express API for project records, verification states, credit accounting, and stakeholder dashboards.",
    stack: ["TypeScript", "React", "Express", "MongoDB"],
    repo: "https://github.com/merak-max/blue-carbon-registry",
    demo: "https://merak-max.github.io/blue-carbon-registry/",
  },
  {
    title: "Mini AlgoChat",
    label: "AI integration foundation",
    description: "A focused chatbot that demonstrates secure server-side provider access, local conversation history, responsive design, and CI.",
    stack: ["React", "Vite", "Node.js", "GitHub Actions"],
    repo: "https://github.com/merak-max/mini-algochat",
    demo: "https://merak-max.github.io/mini-algochat/",
  },
];

const skills = [
  ["Frontend", "React, TypeScript, JavaScript, HTML, CSS, Vite, Next.js"],
  ["Backend", "Node.js, Express, REST APIs, validation, authentication"],
  ["Data", "MongoDB, Mongoose, browser storage, JSON workflows"],
  ["AI", "OpenAI-compatible APIs, streaming, context and input safeguards"],
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
        <h1>I build practical web products with reliable AI integrations.</h1>
        <p className="intro">
          I work across React, TypeScript, Node.js, APIs, testing, and deployment—turning
          learning projects into clear, documented, production-minded software.
        </p>
        <div className="actions">
          <a className="primaryAction" href="#work">Explore my work</a>
          <a className="secondaryAction" href="https://github.com/merak-max" target="_blank" rel="noreferrer">
            View GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="signalRow" aria-label="Current focus">
          <span>Currently focused on</span>
          <strong>TypeScript · backend systems · trustworthy AI UX</strong>
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
                <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>
                <a href={project.repo} target="_blank" rel="noreferrer">Source ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section shell split">
        <div className="sectionHeading">
          <p className="eyebrow">Technical toolkit</p>
          <h2>A focused JavaScript and TypeScript stack.</h2>
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
