import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Separator, Tooltip } from '@venator-ui/ui';
import ParticleBackground from '../components/ParticleBackground';
import { GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from '../components/icons';

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

      <ParticleBackground />
      <nav className="nav">
        <Link className="brand" href="/"><span className="brand-accent">~/</span>jmelop</Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link className="nav-link is-active" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/projects">Projects</Link></li>
          </ul>
          <Separator orientation="vertical" className="nav-divider" />
          <ul className="nav-socials">
            <li>
              <Tooltip content="GitHub" side="bottom">
                <a href="https://github.com/jmelop" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="LinkedIn" side="bottom">
                <a href="https://linkedin.com/in/jmelop" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="Twitter" side="bottom">
                <a href="https://x.com/jmelop_" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
              </Tooltip>
            </li>
          </ul>
        </div>
      </nav>

      <main className="page">
        <header className="hero">
          <h1 className="hero-title">Juan Melo</h1>
          <p className="hero-tagline">Software Engineer focused on developer tooling, open-source packages and scalable front-ends.</p>
        </header>

        <section className="row">
          <h2 className="row-label">building →</h2>
          <div className="row-body">
            <ul className="chips">
              <li><a className="chip" href="https://venatorui.com" target="_blank" rel="noopener noreferrer"><Image className="chip-icon" src="/logos/venator-favicon-32.png" width={18} height={18} alt="" />Venator UI</a></li>
              <li><a className="chip" href="https://github.com/jmelop/enclave" target="_blank" rel="noopener noreferrer"><Image className="chip-icon" src="/logos/enclave-favicon-32.png" width={18} height={18} alt="" />Enclave</a></li>
            </ul>
          </div>
        </section>

        <section className="row row--tight">
          <h2 className="row-label">published →</h2>
          <div className="row-body">
            <ul className="chips">
              <li><a className="chip" href="https://www.npmjs.com/package/es-regional-holidays" target="_blank" rel="noopener noreferrer"><Image className="chip-icon" src="/logos/npm-favicon-32.png" width={14} height={14} alt="" />es-regional-holidays</a></li>
            </ul>
          </div>
        </section>

        <section className="row">
          <h2 className="row-label">about</h2>
          <div className="row-body prose">
            <p>I&apos;m Juan Melo, a software engineer passionate about open source, who enjoys building things from scratch and experimenting with new ideas.</p>
            <p>These days I&apos;m focused on building <a className="link" href="https://venatorui.com" target="_blank" rel="noopener noreferrer">Venator UI</a>, a React + TypeScript component system, and exploring new ideas around personal tooling and automation.</p>
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
                <Button variant="ghost" size="sm" className="contact" onClick={() => window.open('https://github.com/jmelop', '_blank', 'noopener,noreferrer')}>
                  <GitHubIcon width={13} height={13} />GitHub
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="contact" onClick={() => window.open('https://linkedin.com/in/jmelop', '_blank', 'noopener,noreferrer')}>
                  <LinkedInIcon width={13} height={13} />LinkedIn
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="contact" onClick={() => window.open('https://x.com/jmelop_', '_blank', 'noopener,noreferrer')}>
                  <TwitterIcon width={13} height={13} />Twitter
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="contact" onClick={() => { window.location.href = 'mailto:jmelopdev@gmail.com'; }}>
                  <EmailIcon />email
                </Button>
              </li>
            </ul>
          <p className="find-me-note">Or mail me at <code className="find-me-code">jmelopdev@gmail.com</code></p>
          </div>
        </section>

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
