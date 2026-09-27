"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Inline SVG icons — terminal-grade, no emoji ─────────────── */
const IconShield = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconAlert = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <polygon points="12 2 22 21 2 21" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconBook = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const IconBrain = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <path d="M9.5 2A2.5 2.5 0 007 4.5v.5A2.5 2.5 0 004.5 7.5a2.5 2.5 0 000 5A2.5 2.5 0 007 15v.5A2.5 2.5 0 009.5 18h5A2.5 2.5 0 0017 15.5V15a2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5 2.5 2.5 0 00-2.5-2.5V7.5A2.5 2.5 0 0012 5a2.5 2.5 0 00-2.5 2.5" />
    <line x1="9.5" y1="10" x2="14.5" y2="10" />
    <line x1="12" y1="7" x2="12" y2="13" />
  </svg>
);

const IconScale = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M6 6l-3 9a3 3 0 006 0L6 6z" />
    <path d="M18 6l-3 9a3 3 0 006 0L18 6z" />
  </svg>
);

const IconCert = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <rect x="2" y="3" width="20" height="14" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="7" y1="8" x2="17" y2="8" />
    <line x1="7" y1="12" x2="13" y2="12" />
  </svg>
);

const IconGift = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <rect x="3" y="8" width="18" height="14" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="8" x2="12" y2="22" />
    <path d="M12 8H7.5a2.5 2.5 0 010-5C11 3 12 8 12 8z" />
    <path d="M12 8h4.5a2.5 2.5 0 000-5C13 3 12 8 12 8z" />
  </svg>
);

const IconNews = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <path d="M4 3h16a1 1 0 011 1v14a2 2 0 01-4 0V5H3v14a2 2 0 002 2h14" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="13" y2="13" />
  </svg>
);

const IconNetwork = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="square">
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <line x1="12" y1="7" x2="5" y2="17" />
    <line x1="12" y1="7" x2="19" y2="17" />
    <line x1="5" y1="19" x2="19" y2="19" />
  </svg>
);

const IconWarning = ({ size = 14, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="square">
    <polygon points="12 2 22 21 2 21" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────
   SANGYAN — Financial Terminal × Brutalist Editorial
   Hackathon by SNTC, IIT (BHU) × SEBI × NSDL
   ───────────────────────────────────────────────────────────────── */

/* ── Registration ────────────────────────────────────────────── */
const REGISTER_URL = "https://unstop.com/p/sangyan-iit-bhu-1761145";
const REGISTER_LABEL = "Register on Unstop";

/* ── Ticker data ─────────────────────────────────────────────── */
const TICKER_ITEMS = [
  { sym: "SANGYAN", val: "OPEN", chg: "LIVE NOW", dir: "up" },
  { sym: "REGISTRATION", val: "OPEN", chg: "UNSTOP", dir: "up" },
  { sym: "PRIZE.1ST", val: "₹1,00,000", chg: "WINNER", dir: "up" },
  { sym: "PRIZE.2ND", val: "₹50,000", chg: "RUNNER-UP", dir: "up" },
  { sym: "PRIZE.3RD", val: "₹20,000", chg: "THIRD", dir: "up" },
  { sym: "PRIZE.POOL", val: "₹1,70,000", chg: "TOP 3", dir: "up" },
  { sym: "CERTIFICATE", val: "ALL", chg: "EVERYONE", dir: "up" },
  { sym: "FRAUD.INDEX", val: "₹12,000CR", chg: "DAILY LOSS", dir: "down" },
  { sym: "DEMAT.ACC", val: "16CR+", chg: "+22% YOY", dir: "up" },
  { sym: "F&O.LOSERS", val: "9/10", chg: "SEBI DATA", dir: "down" },
  { sym: "TRACK.A", val: "FRAUD.RES", chg: "OPEN", dir: "up" },
  { sym: "TRACK.B", val: "GRIEVANCE", chg: "OPEN", dir: "up" },
  { sym: "TRACK.C", val: "EDU.BHARAT", chg: "OPEN", dir: "up" },
  { sym: "TRACK.D", val: "BEH.RESIL", chg: "OPEN", dir: "up" },
  { sym: "TRACK.E", val: "MISMATCH", chg: "OPEN", dir: "up" },
  { sym: "ENTRY.FEE", val: "₹0", chg: "FREE", dir: "up" },
  { sym: "SPRINT.DAYS", val: "7 DAYS", chg: "1-4 OCT", dir: "up" },
  { sym: "TIER2/3.USR", val: "70%+", chg: "NEW DEMAT", dir: "up" },
  { sym: "SNTC.IITBHU", val: "ORGANIZER", chg: "VARANASI", dir: "up" },
];

/* ── Intersection hook ───────────────────────────────────────── */
function useVisible(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ── Track data ──────────────────────────────────────────────── */
const TRACKS = [
  {
    id: "A", code: "TRK-A",
    color: "#FF3B30",
    title: "Digital Fraud & Scam Resilience",
    focus: "Detecting, warning against, and intercepting deceptive financial vectors before money changes hands.",
    ideas: ["Scam & Claim Verifier", "Tip-Group Risk Profiler", "Mule & Phishing Radar"],
  },
  {
    id: "B", code: "TRK-B",
    color: "#ffffff",
    title: "Investor Awareness, Rights & Grievance",
    focus: "Making investor rights, protections, and complaint mechanisms usable by a first-time user.",
    ideas: ["Grievance Assistant", "Nominee & Family Wealth Tracker", "Rights & Process Navigator"],
  },
  {
    id: "C", code: "TRK-C",
    color: "#30D158",
    title: "Investor Education for Bharat",
    focus: "Replacing jargon-heavy disclosures and static PDFs with understanding-first, regional-language learning.",
    ideas: ["Voice-First Explainer", "Consequence Simulator", "Plain-Language Disclosure Reader"],
  },
  {
    id: "D", code: "TRK-D",
    color: "#BF5AF2",
    title: "Financial Habits & Behavioural Resilience",
    focus: "Helping investors pause, reflect, and build discipline instead of acting on impulse.",
    ideas: ["Cooling-Off Circuit Breaker", "Decision Journal", "Goal-Anchored Tracker"],
  },
  {
    id: "E", code: "TRK-E",
    color: "#64b5f6",
    title: "Misinformation & Content Literacy",
    focus: "Helping users evaluate the flood of financial content on WhatsApp, YouTube, and Telegram.",
    ideas: ["Claim Evidence-Checker", "Promotion vs Education Classifier", "Source Tracer"],
  },
  {
    id: "OPEN", code: "TRK-∅",
    color: "#ffffff",
    title: "Open Innovation for Investor Resilience",
    focus: "Any software solution that meaningfully strengthens investor resilience is welcome here.",
    ideas: ["Accessibility-first tools for elderly/low-literacy investors", "Offline / USSD / IVR solutions", "DigiLocker & Account Aggregator integrations"],
  },
];

/* ── Timeline data ───────────────────────────────────────────── */
const TIMELINE = [
  { date: "NOW", phase: "Registration Open", desc: "Team registration is live on Unstop. Register a team of 1–4 — entry is free and every participant gets a certificate.", phase_code: "PHASE_01" },
  { date: "30 SEP", phase: "Orientation", desc: "Teams are walked through the problem statement, tracks, and guardrails to align on scope.", phase_code: "PHASE_02" },
  { date: "01–04 OCT", phase: "Build Sprint", desc: "Teams work on their solution and prepare their submission.", phase_code: "PHASE_03" },
  { date: "05 OCT", phase: "Shortlisting", desc: "Top 5–7 teams are shortlisted from all submissions.", phase_code: "PHASE_04" },
  { date: "06 OCT", phase: "Final Jury Round", desc: "Shortlisted teams present before the jury.", phase_code: "PHASE_05" },
  { date: "07 OCT", phase: "Results", desc: "Top 3 teams announced, each giving a quick presentation of their work.", phase_code: "PHASE_06" },
];

/* ── Prize structure ─────────────────────────────────────────── */
const PRIZES = [
  { rank: "01", label: "1st Place", glyph: "◈", amount: "₹1,00,000", accent: "#ffffff", note: "Grand prize" },
  { rank: "02", label: "2nd Place", glyph: "◇", amount: "₹50,000", accent: "rgba(248,244,236,0.62)", note: "Runner-up" },
  { rank: "03", label: "3rd Place", glyph: "△", amount: "₹20,000", accent: "#b45309", note: "Third place" },
];

/* ── Evaluation criteria ─────────────────────────────────────── */
const CRITERIA = [
  { label: "Resilience & Safety Impact", pct: 30, desc: "Does the product measurably help a user avoid fraud, avoid loss, or build safer financial behaviour?" },
  { label: "Tier-2/3 Usability — Bharat-First", pct: 25, desc: "Regional-language support, low-bandwidth readiness, voice/visual UX, minimal cognitive load." },
  { label: "Guardrail Compliance & Trust", pct: 15, desc: "Strictly non-commercial; no stock tips; transparent about uncertainty; user privacy preserved." },
  { label: "Technical Execution", pct: 15, desc: "Technology (AI/ML, NLP, voice, on-device processing) used effectively rather than added for novelty." },
  { label: "Feasibility & Scalability", pct: 15, desc: "Could this realistically extend beyond the hackathon into a tool used by real investors?" },
];

/* ── FAQ data ────────────────────────────────────────────────── */
const FAQS = [
  { q: "Who can participate?", a: "Open to all college students across India. Teams of 1–4 members." },
  { q: "How do I register?", a: "Registrations are live. Register your team on Unstop using the official SANGYAN listing — it takes a couple of minutes and there is no fee." },
  { q: "Is there a registration fee?", a: "No. Participation is completely free." },
  { q: "What are the prizes?", a: "1st place ₹1,00,000, 2nd place ₹50,000, and 3rd place ₹20,000. On top of cash prizes, every participant receives a certificate of participation." },
  { q: "Do we need financial domain expertise?", a: "No. Curiosity, empathy for the target user, and ability to build a working prototype are sufficient. The orientation session will help you align." },
  { q: "Can we use AI/ML models and third-party APIs?", a: "Yes. Any open-source or commercially available technology is allowed. Disclose third-party components in your submission." },
  { q: "Will all participants receive certificates?", a: "Yes. Every registered participant, winning or not, receives a certificate of participation." },
  { q: "Who owns the IP of submissions?", a: "All intellectual property in submissions vests solely in NSDL upon submission, per the Terms & Conditions." },
  { q: "What is the final presentation format?", a: "Shortlisted teams present before the jury on October 6. Top 3 teams are announced on October 7, each giving a brief demo." },
];

/* ═══════════════════════════════════════════════════════════════ */

/* ── Criterion row component ─────────────────────────────────── */
function CriterionRow({ label, pct, desc }: { label: string; pct: number; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useVisible(ref);
  return (
    <div ref={ref} className="criterion-row">
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--white)", marginBottom: 6 }}>{label}</div>
        <div className="criterion-bar" style={{ width: `${pct * 3}px`, maxWidth: "100%" }}>
          <div className={`criterion-bar-fill ${visible ? "animated" : ""}`} style={{ width: `${pct * 3}px` }} />
        </div>
        <div className="mono-body" style={{ marginTop: 8, fontSize: "0.78rem" }}>{desc}</div>
      </div>
      <div className="criterion-pct" style={{ paddingTop: 4 }}>{pct}%</div>
    </div>
  );
}

/* ── FAQ accordion ───────────────────────────────────────────── */
function FAQRow({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-row">
      <button className="faq-q" onClick={() => setOpen(o => !o)} id={`faq-${index}`}>
        <span>
          <span style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", marginRight: 12 }}>Q{String(index + 1).padStart(2, "0")}</span>
          {q}
        </span>
        <span className="faq-icon" style={{ transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? 240 : 0 }}>
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

/* ── Track panel ─────────────────────────────────────────────── */
function TrackPanel({ t }: { t: typeof TRACKS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="data-panel"
      style={{ cursor: "crosshair", height: "100%" }}
      onClick={() => setOpen(o => !o)}
      id={`track-${t.id.toLowerCase()}`}
    >
      <div className="data-panel-corner" style={{ borderColor: t.color }} />
      {/* Top accent bar */}
      <div style={{ position: "absolute", top: -1, left: 20, width: 60, height: 1, background: t.color }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: t.color, marginBottom: 6 }}>
            {t.code} / TRACK {t.id}
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--white)", lineHeight: 1.25 }}>
            {t.title}
          </div>
        </div>
        <div style={{
          width: 32, height: 32, border: `1px solid ${t.color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-mono)", fontSize: "0.9rem",
          color: t.color, flexShrink: 0,
          transition: "transform 0.3s",
          transform: open ? "rotate(45deg)" : "none",
        }}>+</div>
      </div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontStyle: "italic", color: "var(--white-muted)", lineHeight: 1.7, marginBottom: 0 }}>
        {t.focus}
      </div>

      {/* Expanded ideas */}
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.45s cubic-bezier(0.23,1,0.32,1)" }}>
        <div style={{ paddingTop: 16, borderTop: `1px solid ${t.color}20`, marginTop: 16 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: t.color, marginBottom: 10 }}>
            — Suggested Directions
          </div>
          {t.ideas.map(idea => (
            <div key={idea} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ color: t.color, fontFamily: "var(--font-mono)", fontSize: "0.75rem", flexShrink: 0, lineHeight: 1.6 }}>›</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--white-muted)", lineHeight: 1.6 }}>{idea}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Duplicate ticker for seamless loop */
  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="scanlines noise-grain" style={{ background: "var(--black)", minHeight: "100vh" }}>

      {/* ── TICKER TAPE ────────────────────────────────────────── */}
      <div className="ticker-wrap" id="ticker">
        <div className="ticker-track">
          {allItems.map((item, i) => (
            <span key={i} className="ticker-item">
              <span style={{ color: "rgba(0,0,0,0.5)" }}>{item.sym}</span>
              <span className="sep">·</span>
              <span style={{ fontWeight: 700 }}>{item.val}</span>
              <span className={item.dir}>{item.chg}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
        <a href="#hero" className="nav-logo" style={{ gap: 10 }}>
          <IconShield size={18} color="var(--amber)" />
          SANGYAN
        </a>
        <div className="nav-links">
          {["About", "Tracks", "Timeline", "Prizes", "FAQ"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div style={{ marginLeft: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <div className="status-pill">
            <span className="status-dot" />
            Registrations Open
          </div>
          {/* <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-register"
          >
            <span>Register</span>
            <span aria-hidden="true">↗</span>
          </a> */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: "none", border: "1px solid var(--amber-border)", color: "var(--amber)", padding: "6px 10px", fontSize: "0.8rem", fontFamily: "var(--font-mono)", display: "none" }}
            className="block md:hidden"
            aria-label="Menu"
          >☰</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: "calc(var(--ticker-h) + var(--nav-h))", left: 0, right: 0,
          background: "rgba(8,8,8,0.98)", backdropFilter: "blur(12px)",
          border: "1px solid var(--amber-border)", zIndex: 99, padding: "20px",
        }}>
          {["About", "Tracks", "Timeline", "Prizes", "FAQ"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "12px 0", fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--white-muted)", borderBottom: "1px solid var(--amber-border)" }}
            >{l}</a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn-amber"
            style={{ marginTop: 20, justifyContent: "center", width: "100%" }}
          >
            <span>{REGISTER_LABEL}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        id="hero"
        className="grid-overlay"
        style={{
          minHeight: "100vh",
          paddingTop: "calc(var(--ticker-h) + var(--nav-h) + 80px)",
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big decorative number */}
        <div style={{
          position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)",
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(180px, 25vw, 340px)",
          color: "rgba(255,255,255,0.04)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}>2026</div>

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", position: "relative" }}>
          {/* System label */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div className="mono-label">SYS / HACKATHON / NATIONAL / 2026</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--amber-border), transparent)" }} />
          </div>

          {/* Main headline */}
          <div style={{ marginBottom: 0 }}>
            <div
              className="display-xl outline-text"
              style={{ display: "block", marginBottom: 4, animation: "fade-up 0.7s ease both" }}
            >
              SANGYAN
            </div>
            <div
              className="display-xl amber-fill"
              style={{ display: "block", marginBottom: 0, animation: "fade-up 0.7s 0.1s ease both" }}
            >
              HACKATHON
            </div>
          </div>

          {/* Subtitle */}
          <div style={{
            maxWidth: 680, marginTop: 32, marginBottom: 48,
            animation: "fade-up 0.7s 0.2s ease both",
          }}>
            <p className="serif-quote" style={{ marginBottom: 16 }}>
              &ldquo;The objective is to help users{" "}
              <em>lose less, decide rationally, and understand what they are getting into.</em>&rdquo;
            </p>
            <p className="mono-body">
              Organised by <span style={{ color: "var(--amber)" }}>SNTC, IIT (BHU) Varanasi</span>
              {" "}in collaboration with <span style={{ color: "var(--amber)" }}>SEBI & NSDL.</span>
              {" "}7-day build sprint · 5 focus tracks + 1 open track.
            </p>
          </div>

          {/* Registration live panel ──────────────── */}
          <div style={{ marginBottom: 40, animation: "fade-up 0.7s 0.3s ease both" }}>
            <div className="live-panel">
              <div className="live-panel-head">
                <span className="status-dot" style={{ background: "var(--green)" }} />
                <span className="mono-label" style={{ color: "var(--green)" }}>Registration / Live</span>
                <span className="live-panel-rule" />
                <span className="mono-body" style={{ fontSize: "0.7rem" }}>teams of 1–4</span>
              </div>
              <div className="live-panel-body">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                  id="hero-register-btn"
                >
                  <span>{REGISTER_LABEL}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <div className="live-panel-meta">
                  <div><span className="live-panel-key">Prize pool</span><span className="live-panel-val">₹1,70,000</span></div>
                  <div><span className="live-panel-key">Certificate</span><span className="live-panel-val">All participants</span></div>
                  <div><span className="live-panel-key">Entry fee</span><span className="live-panel-val">Free</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fade-up 0.7s 0.4s ease both" }}>
            <a href="#about" className="btn-outline-amber" id="hero-explore-btn">
              <span>Explore the Challenge</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="/ps.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-amber" id="hero-ps-btn">
              <span aria-hidden="true">↓</span>
              <span>Problem Statement</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--amber-border)", borderBottom: "1px solid var(--amber-border)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {[
            { v: "OPEN", l: "Registrations", s: "Register now" },
            { v: "₹1.7L", l: "Prize Pool", s: "Top 3 rewarded" },
            { v: "ALL", l: "Get a Cert", s: "Every participant" },
            { v: "7", l: "Day Sprint", s: "Build period" },
            { v: "5+1", l: "Tracks", s: "Open to all" },
            { v: "16CR+", l: "Demat Accs", s: "The scale" },
            { v: "FREE", l: "To Enter", s: "No fee" },
          ].map((s, i) => (
            <div key={i} className="stat-cell" style={{ borderRight: i < 6 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
              <div className="stat-sub">{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="grid-halves" style={{ gap: "80px 60px" }}>
          {/* Left */}
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>01 / The Challenge</div>
            <h2 className="display-lg" style={{ marginBottom: 32, lineHeight: 1.05 }}>
              <span className="outline-text">BUILD</span>{" "}
              <span className="amber-fill">FOR</span>{" "}
              <span className="outline-text">BHARAT</span>
            </h2>
            <div className="mono-body" style={{ marginBottom: 20 }}>
              India&rsquo;s retail investor base has grown at an unprecedented pace — Demat accounts crossed{" "}
              <span style={{ color: "var(--amber)", fontWeight: 600 }}>16+ crore</span>, with more than 70% of
              incremental accounts opening from non-metro, Tier-2, and Tier-3 cities. Access to markets has
              outrun access to financial confidence.
            </div>
            <div className="mono-body">
              SEBI&rsquo;s own studies show{" "}
              <span style={{ color: "var(--red)", fontWeight: 600 }}>9 out of 10</span>{" "}
              individual traders in equity F&O incur net losses — a signal that market access alone is not
              building resilience.
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>02 / Mission</div>
            <p className="serif-quote" style={{ marginBottom: 32 }}>
              Build a technology-driven product that strengthens the financial resilience of Indian investors,
              with particular focus on users from Tier-2 and Tier-3 cities and emerging digital-finance users.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--amber-border)" }}>
              {[
                { Icon: IconAlert, label: "Detect Fraud", color: "var(--red)" },
                { Icon: IconBook, label: "Educate Simply", color: "var(--green)" },
                { Icon: IconBrain, label: "Build Habits", color: "var(--amber)" },
                { Icon: IconScale, label: "Know Rights", color: "var(--blue-data)" },
              ].map(c => (
                <div key={c.label} style={{ background: "var(--black-2)", padding: "22px 18px" }}>
                  <div style={{ marginBottom: 10, color: c.color, lineHeight: 0 }}>
                    <c.Icon size={22} color={c.color} />
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", color: c.color }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── GUARDRAILS ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px", maxWidth: 1400, margin: "0 auto" }}>
        <div className="grid-280" style={{ gap: 60 }}>
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>03 / Constraints</div>
            <h2 className="display-md" style={{ color: "var(--red)", marginBottom: 16 }}>WHAT NOT TO BUILD</h2>
            <p className="mono-body">
              This is a public-good hackathon, not a fintech pitch competition.
              Submissions violating these rules are disqualified regardless of technical quality.
            </p>
          </div>
          <div>
            {[
              { icon: "✕", title: "No Commercial / Speculative Outcome", desc: "No stock tips, buy/sell/hold signals, price predictions, trading algorithms, or promotion of a specific instrument or broker." },
              { icon: "✕", title: "No Monetisation Funnels", desc: "No broking commissions, margin-financing nudges, or paid subscription upsells directed at the user." },
              { icon: "✕", title: "Privacy by Design", desc: "No unauthorised harvesting of SMS, OTPs, or personally identifiable financial records." },
              { icon: "✕", title: "Public-Good Ethos", desc: "The product should read as investor-protection infrastructure, not a growth product." },
            ].map(g => (
              <div key={g.title} className="guardrail-row">
                <div className="guardrail-icon" style={{ color: "var(--red)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{g.icon}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--white)", marginBottom: 4 }}>{g.title}</div>
                  <div className="mono-body" style={{ fontSize: "0.78rem" }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TRACKS ─────────────────────────────────────────────── */}
      <section id="tracks" className="section">
        <div className="mono-label" style={{ marginBottom: 24 }}>04 / Challenge Tracks</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <h2 className="display-lg" style={{ lineHeight: 1.0 }}>
            <span className="amber-fill">5</span>{" "}
            <span className="outline-text">TRACKS</span>
            <br />
            <span style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontFamily: "var(--font-mono)", fontWeight: 400, color: "var(--white-muted)" }}>
              + 1 Open Innovation
            </span>
          </h2>
          <p className="mono-body" style={{ maxWidth: 420, textAlign: "right" }}>
            Teams may pick one track, combine tracks, or enter the Open Track.
            Depth on one real user journey is valued over breadth.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 1, background: "var(--amber-border)" }}>
          {TRACKS.map(t => (
            <div key={t.id} style={{ background: "var(--black)", height: "100%" }}>
              <TrackPanel t={t} />
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TIMELINE ───────────────────────────────────────────── */}
      <section id="timeline" className="section">
        <div className="grid-280" style={{ gap: 60 }}>
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>05 / Schedule</div>
            <h2 className="display-md" style={{ marginBottom: 16 }}>HACKATHON<br /><span className="amber">TIMELINE</span></h2>
            <p className="mono-body">Sep–Oct 2026. Pending council confirmation.</p>
          </div>
          <div>
            {TIMELINE.map((item, i) => (
              <div key={i} className="timeline-row">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <div className="timeline-phase">{item.phase}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PRIZES ─────────────────────────────────────────────── */}
      <section id="prizes" className="section">
        <div className="mono-label" style={{ marginBottom: 24 }}>06 / Rewards</div>
        <h2 className="display-lg" style={{ marginBottom: 48 }}>
          <span className="outline-text">PRIZES</span>{" "}
          <span className="amber-fill">&amp;</span>
          <br />
          <span className="outline-text">RECOGNITION</span>
        </h2>
        <div className="grid-thirds" style={{ gap: 1, background: "var(--amber-border)", marginBottom: 32 }}>
          {PRIZES.map(p => (
            <div key={p.rank} className="prize-card" style={{ borderTopColor: p.accent }}>
              <div className="prize-rank">{p.rank}</div>
              <div className="prize-glyph" style={{ color: p.accent }}>{p.glyph}</div>
              <div className="prize-amount" style={{ color: p.accent }}>{p.amount}</div>
              <div className="mono-label" style={{ color: "var(--white-muted)" }}>{p.label}</div>
              <div className="prize-note">{p.note}</div>
            </div>
          ))}
        </div>

        {/* Certificate band — applies to everyone */}
        <div className="cert-band">
          <div className="cert-band-icon"><IconCert size={26} color="var(--amber)" /></div>
          <div>
            <div className="cert-band-title">EVERY participant gets a certificate</div>
            <div className="mono-body" style={{ fontSize: "0.8rem", marginTop: 6 }}>
              Win or lose, every registered participant receives a signed certificate of participation.
              Prizes are for the podium — recognition is for everyone who builds.
            </div>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-amber"
            style={{ flexShrink: 0, alignSelf: "center" }}
          >
            <span>{REGISTER_LABEL}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Benefits */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "var(--amber-border)" }}>
          {[
            { Icon: IconGift, label: "Gifts", desc: "Goodies for all Techathon participants" },
            { Icon: IconNews, label: "Media Coverage", desc: "Winners featured in national publications" },
            { Icon: IconNetwork, label: "Network", desc: "Direct access to SEBI & NSDL officials" },
            { Icon: IconShield, label: "Guardrails", desc: "Real, shippable public-good product" },
          ].map(b => (
            <div key={b.label} style={{ background: "var(--black-2)", padding: "24px 18px" }}>
              <div style={{ marginBottom: 12, color: "var(--amber)", lineHeight: 0 }}>
                <b.Icon size={20} color="var(--amber)" />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem", color: "var(--white)", marginBottom: 4 }}>{b.label}</div>
              <div className="mono-body" style={{ fontSize: "0.75rem" }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── EVALUATION ─────────────────────────────────────────── */}
      <section id="evaluation" style={{ padding: "120px 40px" }}>
        <div className="grid-280" style={{ maxWidth: 1400, margin: "0 auto", gap: 60 }}>
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>07 / Judging</div>
            <h2 className="display-md" style={{ marginBottom: 16 }}>EVALUATION<br /><span className="amber">CRITERIA</span></h2>
          </div>
          <div>
            {CRITERIA.map((c, i) => (
              <CriterionRow key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SUBMISSION ─────────────────────────────────────────── */}
      <section id="submission" className="section">
        <div className="grid-halves" style={{ gap: 60 }}>
          {/* Submit */}
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>08 / Submission</div>
            <h2 className="display-md" style={{ marginBottom: 32 }}>WHAT TO<br /><span className="amber">SUBMIT</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["S.01", "Product", "A working prototype demonstrating core functionality."],
                ["S.02", "Problem Definition", "Who the target user is and what specific problem is solved."],
                ["S.03", "Solution", "How the product improves investor resilience."],
                ["S.04", "Technology", "Architecture, AI/ML components, data sources, key decisions."],
                ["S.05", "Demonstration", "A 3–5 minute demo showing a realistic user scenario."],
                ["S.06", "Impact", "Who benefits, what harm is reduced, scalability for Tier-2/3 India."],
              ].map(([code, label, desc]) => (
                <div key={code} style={{
                  display: "grid", gridTemplateColumns: "60px 1fr",
                  gap: 16, borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 0",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: "var(--amber)", paddingTop: 2 }}>{code}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem", color: "var(--white)", marginBottom: 2 }}>{label}</div>
                    <div className="mono-body" style={{ fontSize: "0.76rem" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personas */}
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>09 / Target Personas</div>
            <h2 className="display-md" style={{ marginBottom: 32 }}>WHO YOU<br /><span className="amber">BUILD FOR</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { name: "Praveen, 22", profile: "Tier-3 graduate / gig worker, new to trading", vuln: "Drawn to Telegram F&O tips; trades on borrowed capital" },
                { name: "Kavita, 39", profile: "Tier-2 homemaker managing family savings, not fluent in English", vuln: "Intimidated by broking apps; susceptible to Ponzi / fake IPO schemes" },
                { name: "Babulal, 63", profile: "Retired pensioner holding old/dormant folios", vuln: "Unaware of nominee process; cannot navigate IEPF/SCORES portals" },
              ].map(p => (
                <div key={p.name} className="persona-card">
                  <div className="persona-name">{p.name}</div>
                  <div className="persona-profile">{p.profile}</div>
                  <div className="persona-vuln" style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                    <span style={{ flexShrink: 0, marginTop: 1 }}><IconWarning size={13} color="var(--red)" /></span>
                    <span>{p.vuln}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="section">
        <div className="grid-280" style={{ gap: 60 }}>
          <div>
            <div className="mono-label" style={{ marginBottom: 24 }}>10 / FAQ</div>
            <h2 className="display-md" style={{ marginBottom: 0 }}>COMMON<br /><span className="amber">QUESTIONS</span></h2>
          </div>
          <div>
            {FAQS.map((f, i) => <FAQRow key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── ORGS ───────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px", maxWidth: 1400, margin: "0 auto" }}>
        <div className="mono-label" style={{ marginBottom: 32, textAlign: "center" }}>Organised by & In collaboration with</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "var(--amber-border)" }}>

          {/* SNTC — uses sntc-logo.png if present, else text fallback */}
          <div style={{ background: "var(--black-2)", padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 80, height: 56, position: "relative", filter: "brightness(0) invert(1)", opacity: 0.85 }}>
              <Image src="/sntc-logo.png" alt="SNTC IIT BHU" fill style={{ objectFit: "contain" }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", padding: "2px 8px", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white-muted)" }}>Organiser</div>
          </div>

          {/* SEBI — real logo */}
          <div style={{ background: "var(--black-2)", padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 100, height: 60, position: "relative" }}>
              <Image src="/sebi.png" alt="SEBI" fill style={{ objectFit: "contain" }} />
            </div>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", padding: "2px 8px", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white-muted)" }}>Collaboration</div>
          </div>

          {/* NSDL */}
          <div style={{ background: "var(--black-2)", padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 120, height: 60, position: "relative" }}>
              <Image src="/nsdl.svg" alt="NSDL" fill style={{ objectFit: "contain" }} />
            </div>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", padding: "2px 8px", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white-muted)" }}>Collaboration</div>
          </div>

        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section style={{
        borderTop: "1px solid var(--amber-border)",
        padding: "100px 40px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        background: "var(--black-2)",
      }}>
        {/* Decorative cross-hair */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <div className="mono-label" style={{ marginBottom: 24 }}>
            <span className="status-dot" style={{ display: "inline-block", marginRight: 8, verticalAlign: "middle" }} />
            Registrations Open
          </div>
          <h2 className="display-lg" style={{ marginBottom: 24 }}>
            <span className="outline-text">MAKE INDIA</span><br />
            <span className="amber-fill">FRAUD-PROOF</span>
          </h2>
          <p className="serif-quote" style={{ marginBottom: 40, fontSize: "1.1rem" }}>
            Build something that could sit in the hands of a first-time investor in Varanasi, Ranchi, or Jaipur
            — and genuinely make their financial journey safer.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber"
              id="cta-registration-btn"
            >
              <span>{REGISTER_LABEL}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="/ps.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-amber" id="cta-ps-btn">
              <span aria-hidden="true">↓</span>
              <span>Problem Statement PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "32px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        background: "var(--black)",
      }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--white-muted)" }}>
          <span style={{ color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem" }}>[SANGYAN]</span>
          {" "}· Investor Resilience Hackathon 2026
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["About", "Tracks", "Timeline", "Problem Statement"].map(l => (
            <a key={l} href={l === "Problem Statement" ? "/ps.pdf" : `#${l.toLowerCase().replace(" ", "-")}`}
              target={l === "Problem Statement" ? "_blank" : undefined}
              rel={l === "Problem Statement" ? "noopener" : undefined}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white-muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--amber)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--white-muted)")}
            >{l}</a>
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>
          © 2026 SNTC, IIT (BHU) · SEBI · NSDL
        </div>
      </footer>
    </div>
  );
}
