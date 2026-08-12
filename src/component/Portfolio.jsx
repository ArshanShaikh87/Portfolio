import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme, ThemeToggleButton } from "./ThemeToggle";

/* ============================================================
   Arshan Shaikh — Portfolio (JSX version)
   Same exact visual style as the original HTML/CSS file.
   Sections are split into separate components below.
   ============================================================ */

const GlobalStyles = () => (
  <style>{`
  :root{
    --blueprint: #020304;
    --blueprint-deep: #071b30;
    --grid-line: rgba(245,245,240,0.07);
    --grid-line-strong: rgba(245,245,240,0.14);
    --paper: #F5F5F0;
    --paper-dim: rgba(245,245,240,0.62);
    --paper-faint: rgba(245,245,240,0.38);
    --signal: #FF6B35;
    --signal-dim: rgba(255,107,53,0.15);
    --mint: #7FE7C4;
    --display: 'Space Grotesk', sans-serif;
    --body: 'Inter', sans-serif;
    --mono: 'JetBrains Mono', monospace;
  }

  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  .portfolio-root{
    background:var(--blueprint);
    color:var(--paper);
    font-family:var(--body);
    overflow-x:hidden;
    position:relative;
  }
  @media (prefers-reduced-motion: reduce){
    .portfolio-root *{animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important; scroll-behavior:auto !important;}
  }

  /* ---------- Blueprint grid backdrop ---------- */
  .grid-bg{
    position:fixed; inset:0; z-index:0; pointer-events:none;
    background-image:
      linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size:48px 48px;
    opacity:0;
    animation:gridFadeIn 1.8s ease forwards 0.2s;
  }
  .grid-bg::before{
    content:"";
    position:absolute; inset:0;
    background-image:
      linear-gradient(var(--grid-line-strong) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line-strong) 1px, transparent 1px);
    background-size:240px 240px;
  }
  @keyframes gridFadeIn{ to{opacity:1;} }

  .portfolio-root section, .portfolio-root header, .portfolio-root footer{ position:relative; z-index:1; }

  /* corner registration marks */
  .reg-mark{position:fixed; width:22px; height:22px; z-index:5; pointer-events:none; opacity:0.5;}
  .reg-mark::before,.reg-mark::after{content:"";position:absolute;background:var(--paper-dim);}
  .reg-mark::before{width:100%;height:1px;top:50%;}
  .reg-mark::after{height:100%;width:1px;left:50%;}
  .reg-tl{top:24px;left:24px;} .reg-tr{top:24px;right:24px;}
  .reg-bl{bottom:24px;left:24px;} .reg-br{bottom:24px;right:24px;}

  .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
  .eyebrow{
    font-family:var(--mono); font-size:12px; letter-spacing:0.14em; text-transform:uppercase;
    color:var(--signal); display:flex; align-items:center; gap:10px;
  }
  .eyebrow::before{content:""; width:6px; height:6px; background:var(--signal); border-radius:50%; box-shadow:0 0 0 3px var(--signal-dim);}

  /* ---------- Nav ---------- */
  header{
    position:sticky; top:0; z-index:20;
    background:rgba(12, 15, 17, 0.82); backdrop-filter:blur(10px);
    border-bottom:1px solid var(--grid-line-strong);
  }
  nav{ display:flex; align-items:center; justify-content:space-between; padding:18px 32px; max-width:1180px; margin:0 auto; }
  .logo{ font-family:var(--display); font-weight:700; font-size:19px; letter-spacing:-0.01em; display:flex; align-items:center; gap:9px;}
  .logo .dot{width:9px;height:9px;background:var(--signal);border-radius:1px;transform:rotate(45deg);}
  .nav-links{ display:flex; gap:34px; list-style:none; font-size:14px; font-family:var(--mono);}
  .nav-links a{ color:var(--paper-dim); text-decoration:none; transition:color .2s; position:relative;}
  .nav-links a:hover, .nav-links a:focus-visible{ color:var(--paper); }
  .nav-links a::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:1px;background:var(--signal);transition:width .25s;}
  .nav-links a:hover::after{width:100%;}
  .btn{
    font-family:var(--mono); font-size:13px; letter-spacing:0.03em;
    padding:10px 20px; border-radius:2px; text-decoration:none; cursor:pointer;
    display:inline-flex; align-items:center; gap:8px; border:1px solid transparent;
    transition:all .25s ease;
  }
  .btn-primary{ background:var(--signal); color:var(--blueprint-deep); font-weight:600;}
  .btn-primary:hover{ background:#ff7f52; transform:translateY(-2px); box-shadow:0 8px 20px rgba(255,107,53,0.3);}
  .btn-outline{ border-color:var(--grid-line-strong); color:var(--paper); }
  .btn-outline:hover{ border-color:var(--signal); color:var(--signal); }
  .nav-cta{display:flex; align-items:center; gap:18px;}
  .nav-toggle{display:none;}

  /* ---------- Hero ---------- */
  .hero{ padding:120px 0 100px; }
  .hero .wrap{ display:grid; grid-template-columns:1.15fr 0.85fr; gap:56px; align-items:center; }
  .hero h1{
    font-family:var(--display); font-weight:700; font-size:clamp(38px,5vw,64px);
    line-height:1.05; letter-spacing:-0.02em; margin:20px 0 22px;
  }
  .hero h1 em{ font-style:normal; color:var(--signal); position:relative;}
  .hero h1 .underline{
    display:block; height:10px; margin-top:-6px;
  }
  .hero p.lead{ font-size:17px; color:var(--paper-dim); max-width:490px; line-height:1.65; margin-bottom:34px;}
  .hero-ctas{ display:flex; gap:16px; align-items:center; flex-wrap:wrap;}
  .hero-ctas .btn-primary{ padding:14px 26px; font-size:14px;}
  .scroll-hint{ font-family:var(--mono); font-size:12px; color:var(--paper-faint); display:flex; align-items:center; gap:8px;}

  .fade-up{ opacity:0; transform:translateY(22px); animation:fadeUp .8s ease forwards; }
  @keyframes fadeUp{ to{opacity:1; transform:translateY(0);} }

  /* schematic drawing on the right */
  .schematic{ position:relative; aspect-ratio:1/1; }
  .schematic svg{ width:100%; height:100%; }
  .draw-line{
    stroke-dasharray:1000; stroke-dashoffset:1000;
    animation:draw 2.6s cubic-bezier(.65,0,.35,1) forwards;
  }
  @keyframes draw{ to{ stroke-dashoffset:0; } }
  .dim-label{ font-family:var(--mono); font-size:10px; fill:var(--paper-faint); letter-spacing:0.05em;}
  .pulse-dot{ animation:pulse 2.4s ease-in-out infinite; }
  @keyframes pulse{ 0%,100%{opacity:1;} 50%{opacity:0.25;} }

  /* ---------- Stats / trust bar ---------- */
  .stats{ border-top:1px solid var(--grid-line-strong); border-bottom:1px solid var(--grid-line-strong); padding:36px 0; }
  .stats .wrap{ display:grid; grid-template-columns:repeat(4,1fr); }
  .stat{ text-align:center; padding:0 12px; position:relative; }
  .stat:not(:last-child)::after{ content:""; position:absolute; right:0; top:10%; height:80%; width:1px; background:var(--grid-line-strong);}
  .stat .num{ font-family:var(--display); font-size:34px; font-weight:700; color:var(--paper);}
  .stat .num span{ color:var(--signal); }
  .stat .label{ font-family:var(--mono); font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--paper-faint); margin-top:6px;}

  /* ---------- Section heading pattern ---------- */
  .section{ padding:120px 0; }
  .section-head{ display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:56px; flex-wrap:wrap;}
  .section-head h2{ font-family:var(--display); font-size:clamp(28px,3.4vw,42px); font-weight:600; letter-spacing:-0.01em; margin-top:14px; max-width:560px;}
  .section-head p{ color:var(--paper-dim); max-width:340px; font-size:14.5px; line-height:1.6; }

  .reveal{ opacity:0; transform:translateY(30px); transition:opacity .8s ease, transform .8s ease; }
  .reveal.in{ opacity:1; transform:translateY(0); }

  /* ---------- Services ---------- */
  .services-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--grid-line-strong); border:1px solid var(--grid-line-strong);}
  .service-card{
    background:var(--blueprint); padding:34px 28px; transition:background .3s ease;
    position:relative; overflow:hidden;
  }
  .service-card:hover{ background:#0d2e4d; }
  .service-card .sc-code{ font-family:var(--mono); font-size:11px; color:var(--signal); letter-spacing:0.1em;}
  .service-card h3{ font-family:var(--display); font-size:20px; font-weight:600; margin:14px 0 10px;}
  .service-card p{ font-size:13.5px; color:var(--paper-dim); line-height:1.6; }
  .service-card .corner{
    position:absolute; top:0; right:0; width:0; height:0;
    border-top:26px solid var(--signal-dim); border-left:26px solid transparent;
    transition:border-color .3s;
  }
  .service-card:hover .corner{ border-top-color:var(--signal); }

  /* ---------- Work ---------- */
  .work-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:28px; }
  .work-card{
    border:1px solid var(--grid-line-strong); padding:0; overflow:hidden; position:relative;
    transition:transform .35s ease, border-color .35s ease; text-decoration:none; color:inherit; display:block;
    background:none; font:inherit; text-align:left; width:100%; cursor:pointer;
  }
  .work-card:hover{ transform:translateY(-6px); border-color:var(--signal); }
  .work-card:focus-visible{ outline:2px solid var(--signal); outline-offset:3px; }
  .work-visual{
    height:230px; position:relative; overflow:hidden;
    display:flex; align-items:center; justify-content:center;
    background:
      repeating-linear-gradient(135deg, rgba(245,245,240,0.035) 0 2px, transparent 2px 14px);
  }
  .work-visual .glyph{ font-family:var(--display); font-size:88px; font-weight:700; color:rgba(245,245,240,0.08); }
  .work-visual .tag-float{
    position:absolute; font-family:var(--mono); font-size:10px; padding:5px 9px;
    border:1px solid var(--grid-line-strong); border-radius:20px; color:var(--paper-dim);
    background:rgba(10,37,64,0.7);
  }
  .work-body{ padding:22px 24px 26px; border-top:1px solid var(--grid-line-strong); }
  .work-body .wk-top{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px;}
  .work-body h3{ font-family:var(--display); font-size:19px; font-weight:600; }
  .work-body .wk-arrow{ font-family:var(--mono); color:var(--signal); font-size:16px; transition:transform .25s;}
  .work-card:hover .wk-arrow{ transform:translate(3px,-3px); }
  .work-body p{ font-size:13.5px; color:var(--paper-dim); line-height:1.55; margin-bottom:12px;}
  .stack{ display:flex; gap:8px; flex-wrap:wrap; }
  .stack span{ font-family:var(--mono); font-size:10.5px; color:var(--mint); border:1px solid rgba(127,231,196,0.25); padding:3px 8px; border-radius:20px;}

  /* ---------- Process ---------- */
  .process{ display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--grid-line-strong); border:1px solid var(--grid-line-strong);}
  .proc-step{ background:var(--blueprint); padding:30px 24px; }
  .proc-step .pn{ font-family:var(--mono); font-size:13px; color:var(--signal); }
  .proc-step h4{ font-family:var(--display); font-size:17px; font-weight:600; margin:12px 0 8px;}
  .proc-step p{ font-size:13px; color:var(--paper-dim); line-height:1.55; }

  /* ---------- Testimonials ---------- */
  .testi-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .testi-card{ border:1px solid var(--grid-line-strong); padding:28px 26px; position:relative; }
  .stamp{
    position:absolute; top:20px; right:20px; width:52px; height:52px; border-radius:50%;
    border:1.5px solid var(--mint); display:flex; align-items:center; justify-content:center;
    transform:rotate(-12deg); font-family:var(--mono); font-size:8px; color:var(--mint);
    text-align:center; line-height:1.2; letter-spacing:0.05em;
  }
  .testi-card p.quote{ font-size:14.5px; line-height:1.7; color:var(--paper); margin:8px 0 20px; padding-right:50px;}
  .testi-who{ font-family:var(--mono); font-size:12px; color:var(--paper-faint);}
  .testi-who b{ color:var(--paper); font-weight:600; display:block; font-family:var(--body); font-size:14px; margin-bottom:2px;}

  /* ---------- CTA ---------- */
  .cta-section{ padding:110px 0; text-align:center; position:relative;}
  .cta-section .frame{
    border:1px solid var(--grid-line-strong); padding:70px 40px; position:relative;
  }
  .cta-section h2{ font-family:var(--display); font-size:clamp(30px,4.6vw,52px); font-weight:700; letter-spacing:-0.02em; margin-bottom:16px;}
  .cta-section p{ color:var(--paper-dim); max-width:460px; margin:0 auto 34px; font-size:15px;}
  .cta-tick{ position:absolute; width:16px; height:16px; }
  .cta-tick::before,.cta-tick::after{content:"";position:absolute;background:var(--signal);}
  .cta-tick::before{width:100%;height:1px;top:50%;} .cta-tick::after{height:100%;width:1px;left:50%;}
  .ct-tl{top:-8px;left:-8px;} .ct-tr{top:-8px;right:-8px;} .ct-bl{bottom:-8px;left:-8px;} .ct-br{bottom:-8px;right:-8px;}

  /* ---------- Footer ---------- */
  footer{ border-top:1px solid var(--grid-line-strong); padding:44px 0; }
  footer .wrap{ display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:18px;}
  footer .f-links{ display:flex; gap:26px; list-style:none; font-family:var(--mono); font-size:12.5px;}
  footer .f-links a{ color:var(--paper-faint); text-decoration:none; transition:color .2s;}
  footer .f-links a:hover{ color:var(--signal); }
  footer .f-note{ font-family:var(--mono); font-size:11.5px; color:var(--paper-faint);}

  @media (max-width: 900px){
    .nav-links{ display:none; }
    .hero .wrap{ grid-template-columns:1fr; }
    .schematic{ max-width:340px; margin:0 auto; }
    .services-grid, .work-grid, .process, .testi-grid, .stats .wrap{ grid-template-columns:1fr 1fr; }
    .process{ grid-template-columns:1fr 1fr; }
  }
  @media (max-width: 600px){
    .wrap{ padding:0 20px; }
    nav{ padding:16px 20px; }
    .services-grid, .work-grid, .process, .testi-grid, .stats .wrap{ grid-template-columns:1fr; }
    .stat:not(:last-child)::after{ display:none; }
    .section{ padding:80px 0; }
    .cta-section .frame{ padding:50px 22px; }
  }
 
  @media (max-width: 400px){
    .wrap{ padding:0 16px; }
    nav{ padding:14px 16px; gap:10px; }
    .logo{ font-size:16px; }
    .nav-cta .btn-primary{ padding:9px 14px; font-size:12px; white-space:nowrap; }
    .hero{ padding:70px 0 60px; }
    .hero h1{ font-size:32px; margin:16px 0 18px; }
    .hero p.lead{ font-size:15.5px; }
    .hero-ctas{ gap:12px; }
    .hero-ctas .btn{ padding:12px 18px; font-size:13px; flex:1 1 100%; justify-content:center; }
    .schematic{ max-width:260px; }
    .stats{ padding:28px 0; }
    .stat .num{ font-size:26px; }
    .stat .label{ font-size:10px; }
    .section{ padding:60px 0; }
    .section-head{ margin-bottom:36px; }
    .section-head h2{ font-size:26px; }
    .service-card{ padding:26px 20px; }
    .work-visual{ height:180px; }
    .work-visual .glyph{ font-size:64px; }
    .work-body{ padding:18px 18px 20px; }
    .proc-step{ padding:22px 18px; }
    .testi-card{ padding:22px 18px; }
    .testi-card p.quote{ padding-right:0; font-size:13.5px; }
    .stamp{ position:static; margin-bottom:14px; transform:rotate(-6deg); }
    .cta-section{ padding:70px 0; }
    .cta-section .frame{ padding:40px 18px; }
    .cta-section h2{ font-size:28px; }
    footer .wrap{ flex-direction:column; align-items:flex-start; gap:14px; }
    footer .f-links{ flex-wrap:wrap; gap:16px 20px; }
  }

  /* ---------- Project detail modal ---------- */
  .modal-overlay{
    position:fixed; inset:0; z-index:100;
    background:rgba(2,3,4,0.72); backdrop-filter:blur(4px);
    display:flex; align-items:center; justify-content:center;
    padding:24px; animation:modalFadeIn .25s ease forwards;
  }
  @keyframes modalFadeIn{ from{opacity:0;} to{opacity:1;} }
  [data-theme="light"] .modal-overlay{ background:rgba(2,3,4,0.55); }
  .modal-panel{
    background:var(--blueprint); border:1px solid var(--grid-line-strong);
    max-width:640px; width:100%; max-height:86vh; overflow-y:auto;
    padding:40px; position:relative;
    animation:modalRise .3s cubic-bezier(.2,.8,.2,1) forwards;
  }
  @keyframes modalRise{ from{opacity:0; transform:translateY(18px) scale(.98);} to{opacity:1; transform:translateY(0) scale(1);} }
  .modal-close{
    position:absolute; top:18px; right:18px; width:34px; height:34px;
    border:1px solid var(--grid-line-strong); background:none; color:var(--paper);
    border-radius:50%; cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center;
    transition:border-color .2s ease, color .2s ease;
  }
  .modal-close:hover{ border-color:var(--signal); color:var(--signal); }
  .modal-head{ padding-right:40px; margin-bottom:18px; }
  .modal-head h3{ font-family:var(--display); font-size:26px; font-weight:600; margin:12px 0 14px; }
  .modal-desc{ font-size:14.5px; line-height:1.75; color:var(--paper-dim); margin-bottom:26px; }
  .modal-link{ display:inline-flex; margin-bottom:30px; padding:12px 22px; font-size:13.5px; }
  .modal-shots{ display:flex; flex-direction:column; gap:16px; }
  .modal-shot{
    border:1px solid var(--grid-line-strong); overflow:hidden; border-radius:2px;
    background:var(--blueprint-deep);
  }
  .modal-shot img{ width:100%; height:auto; display:block; }
  .modal-shot-empty{
    height:160px; display:flex; align-items:center; justify-content:center;
    font-family:var(--mono); font-size:12px; color:var(--paper-faint); letter-spacing:0.05em;
  }
  @media (max-width:600px){
    .modal-panel{ padding:26px 20px; max-height:90vh; }
    .modal-head h3{ font-size:22px; }
  }

  /* ============================================================
     LIGHT THEME — black becomes white, white becomes black.
     Toggled via [data-theme="light"] on the root wrapper.
     ============================================================ */
  [data-theme="light"]{
    --blueprint: #FFFFFF;
    --blueprint-deep: #ECECE6;
    --grid-line: rgba(2,3,4,0.06);
    --grid-line-strong: rgba(2,3,4,0.13);
    --paper: #020304;
    --paper-dim: rgba(2,3,4,0.64);
    --paper-faint: rgba(2,3,4,0.42);
    --signal: #E85A2A;
    --signal-dim: rgba(232,90,42,0.13);
    --mint: #1E9E74;
  }

  /* hardcoded (non-variable) colors that also need swapping in light mode */
  [data-theme="light"] header{ background:rgba(255,255,255,0.86); }
  [data-theme="light"] .service-card:hover{ background:#f3ede6; }
  [data-theme="light"] .work-visual{
    background: repeating-linear-gradient(135deg, rgba(2,3,4,0.035) 0 2px, transparent 2px 14px);
  }
  [data-theme="light"] .work-visual .glyph{ color:rgba(2,3,4,0.08); }
  [data-theme="light"] .work-visual .tag-float{ background:rgba(255,255,255,0.85); }
  [data-theme="light"] .stack span{ border-color:rgba(30,158,116,0.3); }
  [data-theme="light"] .reg-mark::before,
  [data-theme="light"] .reg-mark::after{ background:var(--paper-dim); }

  /* ---------- Theme toggle button ---------- */
  .theme-toggle-btn{
    background:none; border:1px solid var(--grid-line-strong); border-radius:20px;
    padding:3px; cursor:pointer; display:inline-flex; align-items:center;
    transition:border-color .25s ease;
  }
  .theme-toggle-btn:hover{ border-color:var(--signal); }
  .theme-toggle-track{
    width:44px; height:24px; border-radius:20px; background:var(--grid-line-strong);
    position:relative; display:flex; align-items:center; padding:2px;
    transition:background .25s ease;
  }
  .theme-toggle-thumb{
    width:20px; height:20px; border-radius:50%; background:var(--signal);
    color:var(--blueprint-deep); display:flex; align-items:center; justify-content:center;
    font-size:11px; transform:translateX(0); transition:transform .3s cubic-bezier(.65,0,.35,1), background .25s ease;
  }
  .theme-toggle-thumb.is-light{ transform:translateX(20px); }

  @media (max-width: 400px){
    .theme-toggle-btn{ padding:2px; }
    .theme-toggle-track{ width:38px; height:21px; }
    .theme-toggle-thumb{ width:17px; height:17px; font-size:10px; }
    .theme-toggle-thumb.is-light{ transform:translateX(17px); }
  }
  `}</style>
);

/* ---------- Fonts loader (equivalent of <link> tags) ---------- */
const FontsLoader = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </>
);

/* ---------- Reusable hook: scroll reveal ---------- */
function useScrollReveal() {
  const containerRef = useRef(null);
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const revealEls = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return containerRef;
}

/* ============================================================
   SECTION COMPONENTS
   ============================================================ */

const RegistrationMarks = () => (
  <>
    <div className="reg-mark reg-tl"></div>
    <div className="reg-mark reg-tr"></div>
    <div className="reg-mark reg-bl"></div>
    <div className="reg-mark reg-br"></div>
  </>
);

const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <span className="dot"></span>Arshan&nbsp;Shaikh
      </div>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#testimonials">Reviews</a></li>
      </ul>
      <div className="nav-cta">
        <ThemeToggleButton />
        <a href="#contact" className="btn btn-primary">Start a project</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="wrap">
      <div>
        <div className="eyebrow fade-up">Open for new projects   Ahmednagar, IN</div>
        <h1 className="fade-up" style={{ animationDelay: ".1s" }}>
          I design and build websites &amp; Apps that <em>look sharp</em> and hold up under real use.
        </h1>
        <p className="lead fade-up" style={{ animationDelay: ".2s" }}>
          Frontend & full-stack developer crafting modern, fast, responsive websites   from landing pages to full product interfaces. Every project ships with clean code, considered motion, and a design system that scales.
        </p>
        <div className="hero-ctas fade-up" style={{ animationDelay: ".3s" }}>
          <a href="#contact" className="btn btn-primary">Get a free consultation →</a>
          <a href="#work" className="btn btn-outline">View selected work</a>
        </div>
      </div>
      <div className="schematic fade-up" style={{ animationDelay: ".25s" }}>
        <svg viewBox="0 0 400 400" fill="none">
          <rect x="40" y="60" width="320" height="220" rx="2" stroke="var(--grid-line-strong)" strokeWidth="1"/>
          <path className="draw-line" d="M40 100 H360" stroke="var(--grid-line-strong)" strokeWidth="1"/>
          <path className="draw-line" d="M160 60 V280" stroke="var(--grid-line-strong)" strokeWidth="1" style={{ animationDelay: ".3s" }}/>
          <rect className="draw-line" x="60" y="120" width="80" height="16" rx="2" stroke="var(--signal)" strokeWidth="1.5" style={{ animationDelay: ".5s" }}/>
          <rect className="draw-line" x="60" y="150" width="80" height="60" rx="2" stroke="var(--mint)" strokeWidth="1.5" style={{ animationDelay: ".7s" }}/>
          <rect className="draw-line" x="180" y="120" width="160" height="140" rx="2" stroke="var(--paper-dim)" strokeWidth="1.5" style={{ animationDelay: ".9s" }}/>
          <circle className="pulse-dot" cx="220" cy="150" r="4" fill="var(--signal)"/>
          <path className="draw-line" d="M220 150 h60" stroke="var(--signal)" strokeWidth="1" style={{ animationDelay: "1.1s" }}/>
          <text className="dim-label" x="60" y="112">HEADER   1440×72</text>
          <text className="dim-label" x="60" y="240">NAV</text>
          <text className="dim-label" x="184" y="112">MAIN CANVAS</text>
          <text className="dim-label" x="230" y="146">◎ live component</text>
          <path className="draw-line" d="M40 300 H360 M40 300 V292 M360 300 V292" stroke="var(--paper-faint)" strokeWidth="1" style={{ animationDelay: "1.3s" }}/>
          <text className="dim-label" x="170" y="316">1200px MAX-WIDTH</text>
        </svg>
      </div>
    </div>
  </section>
);

const STATS = [
  { num: "10", suffix: "+", label: "Projects shipped" },
  { num: "8", suffix: "+", label: "Clients served" },
  { num: "3", suffix: "yrs", label: "Building on the web" },
  { num: "98", suffix: "%", label: "On-time delivery" },
];

const Stats = () => (
  <section className="stats">
    <div className="wrap">
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <div className="num"><span>{s.num}</span>{s.suffix}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const SERVICES = [
  { code: "SRV / 01", title: "Website Design", desc: "Custom UI design in Figma   modern layouts, real typography systems, and a look that's distinct to your brand, not a theme." },
  { code: "SRV / 02", title: "Frontend Development", desc: "Pixel-accurate, responsive builds in React or plain HTML/CSS/JS, with motion and interaction done with restraint." },
  { code: "SRV / 03", title: "Full-Stack Builds", desc: "End-to-end products   auth, databases, dashboards, payments   wired up and deployed, not just prototyped." },
  { code: "SRV / 04", title: "Landing Pages", desc: "Conversion-focused single pages for launches and campaigns, live in days, built to load fast and rank." },
  { code: "SRV / 05", title: "Website Revamp", desc: "Take an existing site from dated to current   same content, new structure, modern performance." },
  { code: "SRV / 06", title: "Care & Maintenance", desc: "Ongoing updates, fixes, and small feature work after launch, so the site keeps working as your business grows." },
];

const Services = () => (
  <section className="section" id="services">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">What I do</div>
          <h2>Services built around what your site actually needs to do.</h2>
        </div>
        <p>No bloated packages   pick a service, or combine a few. Every engagement starts with a scope, not a guess.</p>
      </div>
      <div className="services-grid reveal">
        {SERVICES.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="corner"></div>
            <div className="sc-code">{s.code}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WORK = [
{
    glyph: "01",
    tag: "AI TOOL",
    title: "CoverLetters",
    desc: "A login-free tool that turns a resume and job description into a tailored cover letter in seconds — no account, no friction, just paste and generate.",
    fullDesc: "Built to remove every bit of friction between a job seeker and a finished cover letter. There's no sign-up and no account — the user pastes their resume and the job description, and the tool generates a tailored letter that matches the role's language and requirements. The focus was on speed, privacy (nothing is stored), and getting the tone right without sounding generic or robotic.",
    link: "https://aiclrm.vercel.app",
    stack: ["React", "Node.js", "Gemini API"],
    screenshots: [],
  },
  {
    glyph: "02",
    tag: "AGENCY PORTFOLIO",
    title: "The Wedding Tree",
    desc: "Portfolio website built for Wedding Tree to showcase their event and wedding-planning work to prospective clients in one polished, browsable place.",
    fullDesc: "Wedding Tree needed a home online that reflected the quality of their event work. The site is built around a visual, browsable gallery of past weddings and events, structured so prospective clients can quickly get a feel for the company's style and scale of work before reaching out.",
    link: "https://the-wedding-tree-react-spring-cuf91e6vs.vercel.app",
    stack: ["React", "JavaScript", "Vercel"],
    screenshots: [],
  },
  {
    glyph: "03",
    tag: "PRODUCTIVITY TOOL",
    title: "NeverDesk",
    desc: "A workspace for handling multiple tasks at once — every task's status and performance shows up in a single unified dashboard so nothing gets lost.",
    fullDesc: "NeverDesk is built for people juggling several tasks at once. Instead of switching between tools to check progress, everything — task status, performance, and history — lives in one dashboard. The goal was to cut down on context-switching and give a single, honest view of where everything stands.",
    link: "https://neverdesk.vercel.app",
    stack: ["React", "Node.js", "MongoDB"],
    screenshots: [],
  },
  { glyph: "03", tag: "PRODUCT MAINTAINANCE", title: "Entgra", desc: "Contributing to Entgra's Quality Process module maintaining existing functionality, fixing issues, and building new features to support the team's quality workflows as the product evolves", stack: ["React js", "Node.js", "WinSCP"] },
];

const Work = ({ onOpenProject }) => (
  <section className="section" id="work">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Selected work</div>
          <h2>A few projects that show the range   commerce, product, and content.</h2>
        </div>
        <p>Each one shipped to a real client, with real constraints and a real deadline.</p>
      </div>
      <div className="work-grid reveal">
        {WORK.map((w, i) => (
          <button
            type="button"
            className="work-card"
            key={i}
            onClick={() => onOpenProject(w)}
          >
            <div className="work-visual">
              <span className="glyph">{w.glyph}</span>
              <span className="tag-float" style={{ top: "18px", left: "18px" }}>{w.tag}</span>
            </div>
            <div className="work-body">
              <div className="wk-top">
                <h3>{w.title}</h3>
                <span className="wk-arrow">↗</span>
              </div>
              <p>{w.desc}</p>
              <div className="stack">
                {w.stack.map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-head">
          <span className="tag-float" style={{ position: "static" }}>{project.tag}</span>
          <h3>{project.title}</h3>
          <div className="stack">
            {project.stack.map((s, j) => (
              <span key={j}>{s}</span>
            ))}
          </div>
        </div>

        <p className="modal-desc">{project.fullDesc || project.desc}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary modal-link"
          >
            Visit live project →
          </a>
        )}

        <div className="modal-shots">
          {project.screenshots && project.screenshots.length > 0 ? (
            project.screenshots.map((src, i) => (
              <div className="modal-shot" key={i}>
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
              </div>
            ))
          ) : (
            <div className="modal-shot modal-shot-empty">
              <span>Screenshots coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PROCESS = [
  { stage: "STAGE 01", title: "Discover", desc: "We define the goal, audience, and scope in a short call   you get a written plan, not a guess." },
  { stage: "STAGE 02", title: "Design", desc: "Wireframes, then a full visual design in Figma, reviewed with you before a line of code is written." },
  { stage: "STAGE 03", title: "Build", desc: "Development in weekly checkpoints   you see progress live, not just at the end." },
  { stage: "STAGE 04", title: "Launch", desc: "QA, performance pass, deployment, and a short handover so you can manage the site with confidence." },
];

const Process = () => (
  <section className="section" id="process">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">How it runs</div>
          <h2>A straightforward process, start to launch.</h2>
        </div>
        <p>Four stages, clear checkpoints, no surprise revisions.</p>
      </div>
      <div className="process reveal">
        {PROCESS.map((p, i) => (
          <div className="proc-step" key={i}>
            <div className="pn">{p.stage}</div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TESTIMONIALS = [
  { quote: "Arshan rebuilt our storefront in three weeks and load times dropped by half. Communication was clear the entire way.", name: "Tosif Shaikh", role: "Founder, The Wedding Tree" },
  { quote: "Genuinely one of the few developers who designs and codes well. The dashboard he built is still our internal favorite tool.", name: "Shruti Salve", role: "Technical Account Manager, EPL" },
  { quote: "Fast, precise, and easy to brief. Our new site brought in more inbound leads in the first month than the old one did all year.", name: "Apeksha Singh", role: "Cordinator, Kosqu & EPL" },
];

const Testimonials = () => (
  <section className="section" id="testimonials">
    <div className="wrap">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Client feedback</div>
          <h2>What it's like to work together.</h2>
        </div>
      </div>
      <div className="testi-grid reveal">
        {TESTIMONIALS.map((t, i) => (
          <div className="testi-card" key={i}>
            <div className="stamp">VERIFIED<br />CLIENT</div>
            <p className="quote">{t.quote}</p>
            <div className="testi-who">
              <b>{t.name}</b>{t.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="cta-section" id="contact">
    <div className="wrap">
      <div className="frame">
        <div className="cta-tick ct-tl"></div>
        <div className="cta-tick ct-tr"></div>
        <div className="cta-tick ct-bl"></div>
        <div className="cta-tick ct-br"></div>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Let's build something</div>
        <h2>Have a website in mind?<br />Let's put it on paper.</h2>
        <p>Tell me what you're building   I'll reply within a day with a scope and a straight answer on timeline and cost.</p>
        <a href="mailto:arshanmunirsahikh@gmail.com" className="btn btn-primary" style={{ padding: "15px 30px", fontSize: "14.5px" }}>
          hello@arshansmunirhaikh.dev →
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="f-note">© 2026 Arshan Shaikh. Designed & built by hand.</div>
      <ul className="f-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="mailto:arshanmunirshaikh@gmail.com">Email</a></li>
        <li><a href="https://github.com/ArshanShaikh87">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/arshanshaikh/">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
);

/* ============================================================
   ROOT APP
   ============================================================ */

function PortfolioInner() {
  const containerRef = useScrollReveal();
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="portfolio-root" data-theme={theme} ref={containerRef}>
      <FontsLoader />
      <GlobalStyles />
      <div className="grid-bg"></div>
      <RegistrationMarks />

      <Header />
      <Hero />
      <Stats />
      <Services />
      <Work onOpenProject={setActiveProject} />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider defaultTheme="dark">
      <PortfolioInner />
    </ThemeProvider>
  );
}