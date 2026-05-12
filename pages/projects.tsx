import Head from 'next/head';
import Link from 'next/link';
import { Separator, Tooltip } from '@venator-ui/ui';
import ParticleBackground from '../components/ParticleBackground';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../components/icons';

const NpmIconSVG = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <rect width="14" height="14" rx="2" fill="#cb3837" />
    <rect x="2" y="4" width="10" height="6" rx="0.4" fill="white" />
    <rect x="5.5" y="4" width="3" height="4" rx="0.4" fill="#cb3837" />
  </svg>
);

const ArrowSVG = () => (
  <svg className="pj-arrow" viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NpmBadge = ({ version }: { version: string }) => (
  <span className="pj-badge" aria-label="npm package">
    <span className="pj-badge-key"><NpmIconSVG />npm</span>
    <span className="pj-badge-val">{version}</span>
  </span>
);

const GitHubBadge = ({ label }: { label: string }) => (
  <span className="pj-badge pj-badge--gh" aria-label="github repository">
    <span className="pj-badge-key"><GitHubIcon width={11} height={11} />github</span>
    <span className="pj-badge-val">{label}</span>
  </span>
);

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects · Juan Melo · jmelop</title>
        <meta name="description" content="Open-source projects and packages by Juan Melo." />
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
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link is-active" href="/projects">Projects</Link></li>
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
          <p className="status">
            <span className="dot"></span>
            <span>~/projects · ls -la</span>
          </p>
          <h1 className="hero-title">Projects</h1>
          <p className="hero-tagline">Open-source packages, tooling and side projects. Most live on npm; the rest live on GitHub or quietly on a Raspberry Pi somewhere.</p>
        </header>

        {/* venator ecosystem */}
        <section className="pj-section">
          <div className="pj-watermark" aria-hidden="true">venator-ecosystem</div>

          <header className="pj-section-head">
            <span className="pj-section-index">01 →</span>
            <h2 className="pj-section-title"><em>venator</em> ecosystem</h2>
            <span className="pj-section-count">5 packages</span>
          </header>

          <ul className="pj-list">
            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/@venator-ui/ui" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2.5" y="3" width="11" height="2.5" rx="0.6" stroke="#f5b942" strokeWidth="1.1" />
                      <rect x="2.5" y="6.75" width="6" height="6.25" rx="0.6" stroke="#f5b942" strokeWidth="1.1" />
                      <rect x="9.5" y="6.75" width="4" height="2.5" rx="0.6" stroke="#f5b942" strokeWidth="1.1" opacity="0.55" />
                      <rect x="9.5" y="10.5" width="4" height="2.5" rx="0.6" stroke="#f5b942" strokeWidth="1.1" opacity="0.55" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">pkg</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name"><span className="pj-name-scope">@venator-ui/</span>ui</h3>
                  <p className="pj-desc">Core UI components: buttons, inputs, overlays. The base layer everything else builds on.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.1.6" />
                  <ArrowSVG />
                </div>
              </a>
            </li>

            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/@venator-ui/tokens" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="4" cy="8" r="2.2" fill="#f5b942" />
                      <circle cx="8" cy="8" r="2.2" fill="#f5b942" opacity="0.6" />
                      <circle cx="12" cy="8" r="2.2" stroke="#f5b942" strokeWidth="1.1" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">pkg</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name"><span className="pj-name-scope">@venator-ui/</span>tokens</h3>
                  <p className="pj-desc">Design token system covering colors, type, spacing and motion. Exported as CSS, JS and Tailwind presets.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.1.3" />
                  <ArrowSVG />
                </div>
              </a>
            </li>

            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/@venator-ui/patterns" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="3" width="4" height="4" rx="0.6" stroke="#f5b942" strokeWidth="1.1" />
                      <rect x="9" y="3" width="4" height="4" rx="0.6" stroke="#f5b942" strokeWidth="1.1" opacity="0.55" />
                      <rect x="3" y="9" width="4" height="4" rx="0.6" stroke="#f5b942" strokeWidth="1.1" opacity="0.55" />
                      <rect x="9" y="9" width="4" height="4" rx="0.6" fill="#f5b942" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">pkg</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name"><span className="pj-name-scope">@venator-ui/</span>patterns</h3>
                  <p className="pj-desc">Higher-level UI patterns: auth flows, data tables, settings, command palettes.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.1.4" />
                  <ArrowSVG />
                </div>
              </a>
            </li>

            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/@venator-ui/archetypes" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 11l4 2 4-2" stroke="#f5b942" strokeWidth="1.1" strokeLinejoin="round" opacity="0.45" />
                      <path d="M4 8.5l4 2 4-2" stroke="#f5b942" strokeWidth="1.1" strokeLinejoin="round" opacity="0.7" />
                      <path d="M4 6l4 2 4-2-4-2-4 2z" stroke="#f5b942" strokeWidth="1.1" strokeLinejoin="round" fill="#f5b942" fillOpacity="0.1" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">pkg</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name"><span className="pj-name-scope">@venator-ui/</span>archetypes</h3>
                  <p className="pj-desc">Complete app architectures via CLI. Admin, dashboard and marketing setups scaffolded in seconds.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.1.12" />
                  <ArrowSVG />
                </div>
              </a>
            </li>

            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/@venator-ui/cli" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 5l3 3-3 3" stroke="#f5b942" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="8.5" y="10" width="4.5" height="1.4" rx="0.3" fill="#f5b942" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">cli</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name"><span className="pj-name-scope">@venator-ui/</span>cli</h3>
                  <p className="pj-desc">Command-line tool for deploying archetypes and patterns. Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-soft)' }}>npx venator add ...</code> to get started.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.1.5" />
                  <ArrowSVG />
                </div>
              </a>
            </li>
          </ul>
        </section>

        {/* other projects */}
        <section className="pj-section pj-section--other">
          <div className="pj-watermark" aria-hidden="true">other-projects</div>

          <header className="pj-section-head">
            <span className="pj-section-index">02 →</span>
            <h2 className="pj-section-title">other <em>projects</em></h2>
            <span className="pj-section-count">2 things</span>
          </header>

          <ul className="pj-list">
            <li className="pj-item">
              <a className="pj-row" href="https://github.com/jmelop/enclave" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="3" width="10" height="10" rx="1.4" stroke="#f5b942" strokeWidth="1.1" />
                      <rect x="5" y="5.5" width="2.5" height="2.5" rx="0.4" fill="#f5b942" />
                      <rect x="8.5" y="5.5" width="2.5" height="1.2" rx="0.3" fill="#f5b942" opacity="0.55" />
                      <rect x="8.5" y="7.3" width="2.5" height="0.7" rx="0.3" fill="#f5b942" opacity="0.55" />
                      <rect x="5" y="9.2" width="6" height="0.9" rx="0.3" fill="#f5b942" opacity="0.4" />
                      <rect x="5" y="10.7" width="4" height="0.9" rx="0.3" fill="#f5b942" opacity="0.4" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">app</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name">Enclave</h3>
                  <p className="pj-desc">Modular self-hosted personal dashboard. Runs on a Raspberry Pi, tracks my calendar, server health and the weather.</p>
                </div>
                <div className="pj-tags">
                  <GitHubBadge label="self-hosted" />
                  <ArrowSVG />
                </div>
              </a>
            </li>

            <li className="pj-item">
              <a className="pj-row" href="https://www.npmjs.com/package/es-regional-holidays" target="_blank" rel="noopener noreferrer">
                <div className="pj-icon">
                  <span className="pj-icon-mark">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2.8" y="4" width="10.4" height="9" rx="1.2" stroke="#f5b942" strokeWidth="1.1" />
                      <line x1="2.8" y1="6.8" x2="13.2" y2="6.8" stroke="#f5b942" strokeWidth="1.1" />
                      <line x1="5.5" y1="3" x2="5.5" y2="5" stroke="#f5b942" strokeWidth="1.1" strokeLinecap="round" />
                      <line x1="10.5" y1="3" x2="10.5" y2="5" stroke="#f5b942" strokeWidth="1.1" strokeLinecap="round" />
                      <circle cx="10.5" cy="10" r="1.4" fill="#f5b942" />
                    </svg>
                  </span>
                  <span className="pj-icon-tag">pkg</span>
                </div>
                <div className="pj-meta">
                  <h3 className="pj-name">es-regional-holidays</h3>
                  <p className="pj-desc">npm package for Spanish regional holidays: national, autonomous community and local feast days. Fully typed.</p>
                </div>
                <div className="pj-tags">
                  <NpmBadge version="v0.2.1" />
                  <ArrowSVG />
                </div>
              </a>
            </li>
          </ul>
        </section>

        <aside className="pj-outro">
          <p>Everything else is on GitHub. Prototypes, experiments, things still taking shape.</p>
          <a className="pj-outro-cta" href="https://github.com/jmelop?tab=repositories" target="_blank" rel="noopener noreferrer">
            <GitHubIcon width={13} height={13} />
            all repos →
          </a>
        </aside>

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
