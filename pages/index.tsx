import Head from 'next/head';
import Link from 'next/link';
import BadgeRow from '../components/BadgeRow';

const GitHubSVG = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.572C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInSVG = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterSVG = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailSVG = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>jmelop — Juan Melo</title>
        <meta
          name="description"
          content="Frontend Software Engineer building user interfaces for the web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">jmelop</Link>
          <div className="nav-right">
            <ul className="nav-links">
              <li><Link href="/" className="active">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
            <div className="nav-socials">
              <a href="https://github.com/jmelop" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubSVG />
              </a>
              <a href="https://linkedin.com/in/jmelop" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInSVG />
              </a>
              <a href="https://x.com/jmelop_" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterSVG />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="page">
        <main>
          <section className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 className="hero-name">Juan Melo</h1>
            <p className="hero-subtitle">Software Engineer focused on front-end architecture, systems and developer tooling.</p>

            <div className="tag-rows" style={{ alignSelf: 'flex-start', marginLeft: 0, textAlign: 'left' }}>
              <BadgeRow
                label="Building"
                items={[
                  { name: 'Venator UI' },
                  { name: 'Enclave' },
                ]}
              />
              <BadgeRow
                label="Published"
                items={[{ name: 'es-regional-holidays' }]}
              />
            </div>
          </section>

          <div className="bio">
            <p>
              I&apos;m Juan Melo, a software engineer passionate about open source and full stack
              development, always trying to build new things.
            </p>
            <p>
              These days I&apos;m focused on building <a href="#">Venator UI</a>, a React +
              TypeScript component system, and exploring new ideas around personal tooling and
              automation.
            </p>
          </div>

          <div className="sep" />

          <div className="meta-strip">
            <div className="meta-item">
              <span>LOC:</span>
              <span className="meta-value">Las Palmas, Canary Islands</span>
            </div>
            <div className="meta-item">
              <span>STATUS:</span>
              <span className="meta-status-available">AVAILABLE</span>
            </div>
            <div className="meta-item">
              <span>EST:</span>
              <span className="meta-value">2019</span>
            </div>
          </div>

          <div className="sep" />
        </main>
      </div>

      <footer>
        <div className="footer-inner">
          <span className="footer-label">Find me on →</span>
          <div className="footer-links">
            <a
              href="https://github.com/jmelop"
              className="footer-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubSVG />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jmelop"
              className="footer-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSVG />
              LinkedIn
            </a>
            <a
              href="https://x.com/jmelop_"
              className="footer-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSVG />
              Twitter
            </a>
            <a href="mailto:jmelopdev@gmail.com" className="footer-btn">
              <EmailSVG />
              email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
