import Head from 'next/head';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../components/icons';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 · Juan Melo · jmelop</title>
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
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jmelop/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://x.com/jmelop_" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
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
              <span className="status-text" data-state="coords">LPA · 28.1°N 15.4°W</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
