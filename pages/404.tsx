import Head from 'next/head';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';

const GitHubSVG = ({ width = 15, height = 15 }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 16 16" width={width} height={height} fill="currentColor">
    <path d="M8 .2C3.6.2 0 3.8 0 8.2c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 2 .1 2.2.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.6 3.9.3.2.6.7.6 1.5v2.2c0 .2.1.5.5.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.8 12.4.2 8 .2z" />
  </svg>
);

const LinkedInSVG = ({ width = 15, height = 15 }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 16 16" width={width} height={height} fill="currentColor">
    <path d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V1.2C16 .5 15.5 0 14.8 0zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z" />
  </svg>
);

const TwitterSVG = ({ width = 15, height = 15 }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 16 16" width={width} height={height} fill="currentColor">
    <path d="M12.6 1H15l-5.2 5.9L16 15h-4.8l-3.7-4.9L3.2 15H.8l5.5-6.3L0 1h4.9l3.4 4.5L12.6 1zm-.8 12.6h1.3L4.3 2.3H2.9l8.9 11.3z" />
  </svg>
);

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 · jmelop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticleBackground />

      <nav className="nav">
        <Link className="brand" href="/"><span className="brand-accent">~/</span>jmelop</Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/projects">Projects</Link></li>
          </ul>
          <span className="nav-divider"></span>
          <ul className="nav-socials">
            <li>
              <a href="https://github.com/jmelop" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubSVG />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jmelop/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInSVG />
              </a>
            </li>
            <li>
              <a href="https://x.com/jmelop_" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterSVG />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="page not-found">
        <div className="not-found-body">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page not found</h1>
          <p className="not-found-desc">Whatever you were looking for isn&apos;t here.</p>
          <Link className="not-found-back" href="/">← back to home</Link>
        </div>

        <footer className="foot">
          <div className="foot-meta">
            <span>© 2026 jmelop</span>
            <p className="status">
              <span className="dot"></span>
              <span className="status-text" data-state="building">Building Venator UI</span>
              <span className="status-sep">·</span>
              <span className="status-text" data-state="coords">LPA · 28.1°N 15.4°W</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
