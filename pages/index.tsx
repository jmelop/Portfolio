import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

const EmailSVG = () => (
  <svg viewBox="0 0 16 16" width={13} height={13} fill="currentColor">
    <path d="M14 3H2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zM2 4l6 4 6-4v.7L8 8.7 2 4.7V4z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Melo · jmelop</title>
        <meta name="description" content="Juan Melo – Software Engineer focused on front-end architecture, systems and developer tooling." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <nav className="nav">
        <Link className="brand" href="/"><span className="brand-accent">~/</span>jmelop</Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link className="nav-link is-active" href="/">Home</Link></li>
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
              <a href="https://linkedin.com/in/jmelop" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
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

      <main className="page">
        <header className="hero">
          <h1 className="hero-title">Juan Melo</h1>
          <p className="hero-tagline">Software Engineer focused on front-end architecture, open-source packages and developer tooling.</p>
        </header>

        <section className="row">
          <h2 className="row-label">building →</h2>
          <div className="row-body">
            <ul className="chips">
              <li><a className="chip" href="#"><Image className="chip-icon" src="/logos/venator-favicon-32.png" width={18} height={18} alt="" />Venator UI</a></li>
              <li><a className="chip" href="#"><Image className="chip-icon" src="/logos/enclave-favicon-32.png" width={18} height={18} alt="" />Enclave</a></li>
            </ul>
          </div>
        </section>

        <section className="row row--tight">
          <h2 className="row-label">published →</h2>
          <div className="row-body">
            <ul className="chips">
              <li><a className="chip" href="#"><Image className="chip-icon" src="/logos/npm-favicon-32.png" width={14} height={14} alt="" />es-regional-holidays</a></li>
            </ul>
          </div>
        </section>

        <section className="row">
          <h2 className="row-label">about</h2>
          <div className="row-body prose">
            <p>I&apos;m Juan Melo, a software engineer passionate about open source, who enjoys building things from scratch and experimenting with new ideas.</p>
            <p>These days I&apos;m focused on building <a className="link" href="#">Venator UI</a>, a React + TypeScript component system, and exploring new ideas around personal tooling and automation.</p>
            <p>I&apos;m particularly interested in designing systems and architectures, building long-term scalable solutions, and shaping them into reusable tools and packages.</p>
          </div>
        </section>

        <section className="row">
          <h2 className="row-label">now →</h2>
          <div className="row-body">
            <ol className="now-list">
              <li><span className="now-num">01</span><span>Refactoring Venator UI design tokens and base styles.</span></li>
              <li><span className="now-num">02</span><span>Expanding Venator archetypes with new component patterns.</span></li>
              <li><span className="now-num">03</span><span>Drafting a post on concurrent loaders in Angular with RxJS.</span></li>
            </ol>
          </div>
        </section>

        <section className="row" hidden>
          <div className="row-body">
            <ul className="posts">
              <li><a className="post" href="#">
                <span className="post-title">A pragmatic guide to component variants</span>
                <span className="post-meta">2026 · 04 <span className="dot-sep">·</span> 8 min</span>
              </a></li>
              <li><a className="post" href="#">
                <span className="post-title">Why I rebuilt my portfolio (again)</span>
                <span className="post-meta">2026 · 02 <span className="dot-sep">·</span> 4 min</span>
              </a></li>
              <li><a className="post" href="#">
                <span className="post-title">Tokens, themes, and the gap between them</span>
                <span className="post-meta">2025 · 11 <span className="dot-sep">·</span> 12 min</span>
              </a></li>
            </ul>
            <Link className="all-posts" href="/writing">
              All posts
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="row row--last">
          <h2 className="row-label">find me</h2>
          <div className="row-body">
            <ul className="contacts">
              <li>
                <a className="contact" href="https://github.com/jmelop" target="_blank" rel="noopener noreferrer">
                  <GitHubSVG width={13} height={13} />GitHub
                </a>
              </li>
              <li>
                <a className="contact" href="https://linkedin.com/in/jmelop" target="_blank" rel="noopener noreferrer">
                  <LinkedInSVG width={13} height={13} />LinkedIn
                </a>
              </li>
              <li>
                <a className="contact" href="https://x.com/jmelop_" target="_blank" rel="noopener noreferrer">
                  <TwitterSVG width={13} height={13} />Twitter
                </a>
              </li>
              <li>
                <a className="contact" href="mailto:juanmlstm@gmail.com">
                  <EmailSVG />email
                </a>
              </li>
            </ul>
          <p className="find-me-note">Or mail me at <code className="find-me-code">jmelopdev@gmail.com</code></p>
          </div>
        </section>

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
