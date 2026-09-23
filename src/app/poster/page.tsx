/**
 * /poster — SANGYAN Hackathon Poster · "Meridian" minimal
 * 1080 × 1080 px · Cormorant Garamond + DM Mono
 * Export: DevTools → right-click #poster-root → "Capture node screenshot"
 */
import Image from "next/image";
import DownloadButton from "./DownloadButton";

export const metadata = { title: "SANGYAN Poster – 1080×1080" };

const C = {
  bg: "#0C0A08",
  bone: "#EAE3D8",
  boneMid: "#A89F92",
  boneDim: "#5C5650",
  crimson: "#B8291A",
  crimsonBr: "#D4321F",
  rule: "rgba(234,227,216,0.12)",
  ruleStrong: "rgba(234,227,216,0.20)",
};

const PAD = 58;

/* ── Grain ──────────────────────────────────────────────────── */
function Grain() {
  return (
    <svg style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", opacity: 0.028
    }}>
      <filter id="gr">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="1080" height="1080" filter="url(#gr)" />
    </svg>
  );
}

/* ── Chart line ─────────────────────────────────────────────── */
function Chart() {
  const pts: [number, number][] = [
    [0, 80], [28, 72], [52, 76], [76, 64], [104, 58], [132, 62],
    [158, 50], [186, 42], [212, 38], [240, 44], [268, 30],
    [294, 20], [318, 11], [338, 4], [358, 0],
  ];
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const fd = `${d} L ${pts[pts.length - 1][0]} 82 L 0 82 Z`;
  return (
    <svg width="358" height="82" viewBox="0 0 358 82" fill="none" style={{ display: "block" }}>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.crimson} stopOpacity="0.28" />
          <stop offset="100%" stopColor={C.crimson} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fd} fill="url(#cg)" />
      <path d={d} stroke={C.crimson} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4.5" fill={C.crimson} />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="10" fill={C.crimson} opacity="0.18" />
    </svg>
  );
}

/* ── Multiple ₹ watermark symbols ──────────────────────────── */
function RupeeWatermarks() {
  const items = [
    { top: 80, left: 560, size: 360, opacity: 0.07, rotate: 0 },
    { top: 150, left: -90, size: 300, opacity: 0.065, rotate: 0 },
    { top: 40, left: 860, size: 160, opacity: 0.055, rotate: 12 },
    { top: 440, left: 700, size: 200, opacity: 0.05, rotate: -8 },
    { top: 640, left: -30, size: 180, opacity: 0.045, rotate: 0 },
    { top: 780, left: 780, size: 220, opacity: 0.04, rotate: 0 },
  ];
  return (
    <>
      {items.map((r, i) => (
        <div key={i} style={{
          position: "absolute", top: r.top, left: r.left,
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontWeight: 300, fontSize: r.size,
          color: `rgba(234,227,216,${r.opacity})`,
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.04em",
          transform: r.rotate ? `rotate(${r.rotate}deg)` : undefined,
          transformOrigin: "center center",
        }}>₹</div>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   POSTER — 1080 × 1080 px
   ═══════════════════════════════════════════════════════════════
   Zone 1  Logo bar     0   → 104
   Zone 2  SANGYAN      104 → 520   (centred just above mid)
     glow blob + big type
     subtitle rule
     tagline + chart
   Zone 3  Date strip   520 → 640
   Zone 4  CTA band     800 → 1080
   ═══════════════════════════════════════════════════════════════ */
function SangyanPoster() {
  return (
    <div id="poster-root" style={{
      width: 1080, height: 1080,
      background: C.bg,
      position: "relative", overflow: "hidden",
      color: C.bone, flexShrink: 0,
    }}>
      <Grain />
      <RupeeWatermarks />

      {/* Soft vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 95% 70% at 50% 42%, transparent 25%, rgba(5,3,2,0.65) 100%)"
      }} />

      {/* ══ ZONE 1 — Logo bar ════════════════════════════════════ */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 104,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `0 ${PAD}px 0 ${PAD + 4}px`,
      }}>
        {/* Left: organiser logos */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ width: 106, height: 56, position: "relative" }}>
            <Image src="/cops-logo.png" alt="COPS" fill sizes="106px" style={{ objectFit: "contain" }} />
          </div>
          <div style={{
            width: 130, height: 130, position: "relative",
            filter: "brightness(0) invert(1)", opacity: 0.82
          }}>
            <Image src="/sntc-logo.png" alt="SNTC" fill sizes="130px" style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Centre: hackathon label */}
        {/* <div style={{
          textAlign: "center",
          fontFamily: "'DM Mono','Courier New',monospace",
          fontSize: 8.5, letterSpacing: "0.28em", color: C.boneDim, lineHeight: 1.9
        }}>
          <div style={{ color: C.crimson, letterSpacing: "0.32em", fontSize: 9.5 }}>SANGYAN</div>
          <div>INVESTOR RESILIENCE HACKATHON</div>
        </div> */}

        {/* Right: collab logos */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ width: 120, height: 50, position: "relative" }}>
            <Image src="/sebi.png" alt="SEBI" fill sizes="96px" style={{ objectFit: "contain" }} />
          </div>
          <div style={{ width: 150, height: 50, position: "relative" }}>
            <Image src="/nsdl.svg" alt="NSDL" fill sizes="116px" style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* ══ ZONE 2 — SANGYAN + content ═══════════════════════════ */}

      {/* Crimson glow behind SANGYAN */}
      <div style={{
        position: "absolute", top: 190, left: 0, right: 0, height: 240, pointerEvents: "none",
        background: `radial-gradient(ellipse 60% 90% at 50% 55%, ${C.crimson}14 0%, transparent 70%)`
      }} />

      {/* SANGYAN */}
      <div style={{
        position: "absolute", top: 202, left: 0, right: 0,
        textAlign: "center",
        fontFamily: "'Cormorant Garamond',Georgia,serif",
        fontWeight: 600, fontSize: 210,
        lineHeight: 0.87, letterSpacing: "-0.03em",
        color: C.bone, userSelect: "none", whiteSpace: "nowrap",
        textShadow: `0 2px 50px rgba(81, 0, 255, 0.28)`,
      }}>
        SANGYAN
      </div>

      {/* Subtitle — centred */}
      <div style={{
        position: "absolute", top: 416,
        left: PAD, right: PAD,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          padding: "0 26px",
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontStyle: "italic", fontWeight: 600,
          fontSize: 22, color: C.boneMid,
          letterSpacing: "0.05em", whiteSpace: "nowrap"
        }}>
          an investor resilience hackathon
        </div>
      </div>

      {/* ══ ZONE 3 — Tagline (Left) & Date strip (Right) ══════════════════════════════════ */}
      <div style={{
        position: "absolute", top: 560,
        left: PAD, right: PAD,
        display: "flex", alignItems: "flex-end",
        justifyContent: "space-between", gap: 32,
      }}>
        {/* Left: Tagline */}
        <p style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontWeight: 300, fontStyle: "italic",
          fontSize: 24, lineHeight: 1.58,
          color: C.boneMid, margin: 0, maxWidth: 440,
        }}>
          &ldquo;Build technology that helps India{" "}
          <span style={{ color: C.bone, fontStyle: "normal", fontWeight: 500 }}>
            lose less, decide rationally,
          </span>
          {" "}and understand what they&apos;re getting into.&rdquo;
        </p>

        {/* Right: Date strip */}
        <div style={{ textAlign: "right", paddingBottom: 6 }}>
          <div style={{
            fontFamily: "'DM Mono','Courier New',monospace", fontSize: 13,
            letterSpacing: "0.26em", color: C.crimson, marginBottom: 10,
            textTransform: "uppercase" as const
          }}>
            Build Sprint
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: 16 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontWeight: 600, fontSize: 72, lineHeight: 0.9,
              letterSpacing: "-0.025em", color: C.bone
            }}>01 - 04</span>
            <span style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontWeight: 400, fontSize: 30, color: C.boneMid
            }}>Oct 2026</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono','Courier New',monospace",
            fontSize: 9, color: C.boneDim,
            letterSpacing: "0.12em", marginTop: 12
          }}>
            Registration Opens: 27 Sep 2026  ·  5 Tracks + 1 Open Innovation
          </div>
        </div>
      </div>

      {/* ══ ZONE 4 — CTA band (800 → 1080 = 280px) ═════════════ */}
      <div style={{
        position: "absolute", top: 800, left: 0, right: 0, bottom: 0,
        background: C.crimson,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `0 ${PAD}px`,
        overflow: "hidden",
      }}>
        {/* ↗ watermark */}
        <div style={{
          position: "absolute", right: -24, top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontWeight: 700, fontSize: 420,
          color: "rgba(0,0,0,0.09)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none"
        }}>↗</div>

        {/* Left */}
        <div style={{ position: "relative" }}>
          <div style={{
            fontFamily: "'DM Mono','Courier New',monospace",
            fontSize: 9.5, letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.48)",
            marginBottom: 10, textTransform: "uppercase" as const
          }}>
            Open to all college students · Teams of 2–4 · Free Entry
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontWeight: 600, fontSize: 80,
            lineHeight: 0.88, letterSpacing: "-0.025em",
            color: "#FFFFFF"
          }}>
            Register Now
          </div>
        </div>

        {/* Right */}
        <div style={{ textAlign: "right", flexShrink: 0, position: "relative" }}>
          <div style={{
            fontFamily: "'DM Mono','Courier New',monospace",
            fontSize: 15, color: "#FFFFFF",
            fontWeight: 500, letterSpacing: "0.05em", marginBottom: 14
          }}>
            sangyan.copsiitbhu.co.in
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            justifyContent: "flex-end", marginBottom: 8
          }}>
            <div style={{ height: 1, width: 32, background: "rgba(255,255,255,0.3)" }} />
            <div style={{
              fontFamily: "'DM Mono','Courier New',monospace",
              fontSize: 9, color: "rgba(255,255,255,0.48)", letterSpacing: "0.18em"
            }}>
              REGISTRATION OPENS
            </div>
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontWeight: 600, fontSize: 42, color: "#FFFFFF",
            letterSpacing: "-0.01em", lineHeight: 1
          }}>
            27 September 2026
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: "#8B1A0F"
      }} />
    </div>
  );
}

/* ── Page wrapper ──────────────────────────────────────────── */
export default function PosterPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Mono:wght@0,300;0,400;0,500&display=swap"
        rel="stylesheet" />
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        body{background:#141010;display:flex;flex-direction:column;
          align-items:center;padding:28px 20px 60px;gap:18px;min-height:100vh;
          font-family:'DM Mono','Courier New',monospace;}
        .ctl{display:flex;align-items:center;gap:14px;
          background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
          padding:10px 20px;font-size:11px;color:rgba(255,255,255,0.35);
          letter-spacing:0.12em;}
        @media(max-width:1140px){
          #poster-root{transform:scale(calc((100vw - 40px)/1080));
            transform-origin:top center;
            margin-bottom:calc(-1080px * (1 - (100vw - 40px)/1080));}
        }
      `}</style>
      <div className="ctl">
        <span>SANGYAN · POSTER · 1080 × 1080 px</span>
        <span style={{ opacity: 0.35 }}>|</span>
        <span>DevTools → right-click <code>#poster-root</code> → &quot;Capture node screenshot&quot;</span>
        <span style={{ opacity: 0.35 }}>|</span>
        <DownloadButton targetId="poster-root" filename="sangyan-poster.png" />
      </div>
      <SangyanPoster />
    </>
  );
}
