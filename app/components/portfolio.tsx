"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BookOpen, Brain, ChalkboardTeacher,
  ChartLineUp, CheckCircle, Desktop, DownloadSimple, EnvelopeSimple, GraduationCap,
  Handshake, Lightbulb, LinkedinLogo, List, MapPin, Phone, Sparkle, UsersThree, X,
  CaretRight, Flask, Medal, PresentationChart, SealCheck, Quotes,
} from "@phosphor-icons/react";
import {
  profile, metrics, coreTechStack, howIWorkSteps, experience, skills, projects, certifications,
  certificateGallery, education, awards, research, resumes, institutionalSponsors,
} from "@/app/data/portfolio";


const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  return (
    <div className="company-logo-wrap">
      <img src={src} alt={alt} className="company-logo" referrerPolicy="no-referrer" />
      <span className="logo-fallback">{fallback}</span>
    </div>
  );
}


/* --- Tech SVGs & Domain Icon Resolvers --- */




export function PythonIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Python">
      <path d="M11.914 2C6.733 2 7.054 4.249 7.054 4.249L7.06 6.577H12.03V7.327H4.296C4.296 7.327 2 7.067 2 12.247C2 17.428 3.998 17.18 3.998 17.18L5.385 17.172V14.28C5.385 12.604 6.84 12.593 6.84 12.593H11.838C13.435 12.593 13.528 11.233 13.528 11.233V4.327C13.528 4.327 13.886 2 11.914 2ZM9.508 3.398C10.024 3.398 10.443 3.817 10.443 4.333C10.443 4.849 10.024 5.268 9.508 5.268C8.992 5.268 8.573 4.849 8.573 4.333C8.573 3.817 8.992 3.398 9.508 3.398Z" fill="#3776AB"/>
      <path d="M12.086 22C17.267 22 16.946 19.751 16.946 19.751L16.94 17.423H11.97V16.673H19.704C19.704 16.673 22 16.933 22 11.753C22 6.572 20.002 6.82 20.002 6.82L18.615 6.828V9.72C18.615 11.396 17.16 11.407 17.16 11.407H12.162C10.565 11.407 10.472 12.767 10.472 12.767V19.673C10.472 19.673 10.114 22 12.086 22ZM14.492 20.602C13.976 20.602 13.557 20.183 13.557 19.667C13.557 19.151 13.976 18.732 14.492 18.732C15.008 18.732 15.427 19.151 15.427 19.667C15.427 20.183 15.008 20.602 14.492 20.602Z" fill="#F59E0B"/>
    </svg>
  );
}

export function PowerBIIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Power BI">
      <rect x="2.5" y="12" width="4.5" height="9" rx="1.5" fill="#D97706" />
      <rect x="8.5" y="7" width="4.5" height="14" rx="1.5" fill="#F59E0B" />
      <rect x="14.5" y="3" width="4.5" height="18" rx="1.5" fill="#FBBF24" />
      <rect x="19.5" y="15" width="2.5" height="6" rx="1" fill="#B45309" />
    </svg>
  );
}

export function TableauIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tableau">
      <path d="M11 2h2v4h-2zM11 18h2v4h-2zM2 11h4v2H2zM18 11h4v2h-4z" fill="#EA580C" />
      <path d="M6 6h2.5v3H6zM15.5 6h2.5v3h-2.5zM6 15h2.5v3H6zM15.5 15h2.5v3h-2.5z" fill="#2563EB" />
      <path d="M9.5 8h5v8h-5z" fill="#DC2626" />
      <path d="M8 9.5h8v5h-8z" fill="#F59E0B" />
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function SqlIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="SQL Database">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function RStudioIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="R / RStudio">
      <ellipse cx="12" cy="12" rx="10" ry="7.5" fill="#2563EB" fillOpacity="0.12" stroke="#2563EB" strokeWidth="1.8" />
      <path d="M8.5 7h4.8a3 3 0 0 1 0 5.5H10.5V17H8.5V7zm2 3.8h2.6a1.2 1.2 0 0 0 0-2.4h-2.6v2.4z" fill="#2563EB" />
      <path d="M12.8 12.5l3.2 4.5h-2.4l-2.4-4.5h1.6z" fill="#1D4ED8" />
    </svg>
  );
}

export function MatlabIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="MATLAB">
      <path d="M3 17c3-7 5-11 7-11s3 9 5 11 4-5 6-9" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17c3 2 6 3 9 2s5-3 8-7" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

export function LmsIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="LMS Platform">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
      <path d="M6 7.5l6-3.5 6 3.5-6 3.5-6-3.5z" />
      <path d="M8.5 9.5v2.5a3.5 3.5 0 0 0 7 0v-2.5" />
    </svg>
  );
}

export function QualityIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Instructional Quality">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path d="M16 8l4-4m0 0h-3.5m3.5 0v3.5" />
    </svg>
  );
}

export function AiBrainIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Artificial Intelligence">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function SlaIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="SLA Governance">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CoachingIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Facilitation Coaching">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6M23 11h-6" />
    </svg>
  );
}

export function AnalyticsBarIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Analytics">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function WorkflowIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Workflow / Pacing">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
      <line x1="15" y1="4" x2="15" y2="20" />
      <path d="M5 9h2M11 12h2M17 15h2" />
    </svg>
  );
}

export function AcademicIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Academic Research">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function CheckPillIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export function TechIcon({
  name,
  size = 15,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("python")) {
    return <PythonIcon size={size} className={className} />;
  }
  if (normalized.includes("power bi") || normalized.includes("powerbi")) {
    return <PowerBIIcon size={size} className={className} />;
  }
  if (normalized.includes("tableau")) {
    return <TableauIcon size={size} className={className} />;
  }
  if (normalized.includes("sql") || normalized.includes("database")) {
    return <SqlIcon size={size} className={className} />;
  }
  if (normalized === "r" || normalized.includes("rstudio")) {
    return <RStudioIcon size={size} className={className} />;
  }
  if (normalized.includes("matlab")) {
    return <MatlabIcon size={size} className={className} />;
  }
  if (normalized.includes("lms") || normalized.includes("virtual lab") || normalized.includes("zoom") || normalized.includes("teams")) {
    return <LmsIcon size={size} className={className} />;
  }
  if (normalized.includes("roi") || normalized.includes("audit") || normalized.includes("quality")) {
    return <QualityIcon size={size} className={className} />;
  }
  if (normalized.includes("ai") || normalized.includes("nlp") || normalized.includes("rasa") || normalized.includes("prompt")) {
    return <AiBrainIcon size={size} className={className} />;
  }
  if (normalized.includes("sla") || normalized.includes("governance") || normalized.includes("compliance")) {
    return <SlaIcon size={size} className={className} />;
  }
  if (normalized.includes("bootcamp") || normalized.includes("trainer") || normalized.includes("faculty") || normalized.includes("coaching") || normalized.includes("mentor")) {
    return <CoachingIcon size={size} className={className} />;
  }
  if (normalized.includes("stem") || normalized.includes("iiser") || normalized.includes("academic") || normalized.includes("research")) {
    return <AcademicIcon size={size} className={className} />;
  }
  if (normalized.includes("workflow") || normalized.includes("sop") || normalized.includes("scheduling") || normalized.includes("pacing")) {
    return <WorkflowIcon size={size} className={className} />;
  }
  return <AnalyticsBarIcon size={size} className={className} />;
}

export function getBulletTechDetails(text: string): {
  iconType: string;
  badgeLabel: string;
  themeColor: "blue" | "teal" | "purple" | "coral" | "gold" | "emerald";
} {
  const lower = text.toLowerCase();

  if (lower.includes("power bi") || lower.includes("tableau") || lower.includes("rstudio")) {
    return {
      iconType: lower.includes("power bi") ? "Power BI" : lower.includes("tableau") ? "Tableau" : "RStudio",
      badgeLabel: lower.includes("power bi") ? "Power BI & Analytics" : "BI Architecture",
      themeColor: "blue",
    };
  }
  if (lower.includes("python") || lower.includes("flask") || lower.includes("sql") || lower.includes("matlab")) {
    return {
      iconType: lower.includes("python") ? "Python" : lower.includes("sql") ? "SQL" : "MATLAB",
      badgeLabel: lower.includes("python") ? "Python & Engineering" : lower.includes("sql") ? "SQL Retrieval" : "MATLAB Simulation",
      themeColor: "blue",
    };
  }
  if (lower.includes("roi") || lower.includes("rubric") || lower.includes("audit") || lower.includes("quality")) {
    return {
      iconType: "Quality Assurance",
      badgeLabel: "ADYPU | ITVedant Quality",
      themeColor: "coral",
    };
  }
  if (lower.includes("lms") || lower.includes("virtual lab") || lower.includes("platform downtime")) {
    return {
      iconType: "LMS",
      badgeLabel: "LMS Architecture & Ops",
      themeColor: "teal",
    };
  }
  if (lower.includes("sla") || lower.includes("governance") || lower.includes("sourcing") || lower.includes("milestone") || lower.includes("compliance")) {
    return {
      iconType: "SLA Governance",
      badgeLabel: "SLA & Program Governance",
      themeColor: "gold",
    };
  }
  if (lower.includes("ai") || lower.includes("nlp") || lower.includes("rasa") || lower.includes("machine learning") || lower.includes("transformer")) {
    return {
      iconType: "AI",
      badgeLabel: "AI & Learning Models",
      themeColor: "purple",
    };
  }
  if (lower.includes("csm") || lower.includes("facilitator") || lower.includes("coaching") || lower.includes("instructor") || lower.includes("onboarding")) {
    return {
      iconType: "Faculty Enablement",
      badgeLabel: "Facilitator Coaching",
      themeColor: "emerald",
    };
  }
  if (lower.includes("atal") || lower.includes("niti aayog") || lower.includes("iiser") || lower.includes("fellowship")) {
    return {
      iconType: "Academic & Govt",
      badgeLabel: "AIM / NITI Aayog Lead",
      themeColor: "gold",
    };
  }

  return {
    iconType: "Analytics",
    badgeLabel: "Operations & Delivery",
    themeColor: "teal",
  };
}

function SkillClusterIcon({ name }: { name: string }) {
  if (name === "BookOpen") return <BookOpen size={24} weight="duotone" />;
  if (name === "UsersThree") return <UsersThree size={24} weight="duotone" />;
  if (name === "Desktop") return <Desktop size={24} weight="duotone" />;
  if (name === "Brain") return <Brain size={24} weight="duotone" />;
  return <Handshake size={24} weight="duotone" />;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [magnifiedExp, setMagnifiedExp] = useState<typeof experience[0] | null>(null);
  const [focusedPillarIndex, setFocusedPillarIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "Corporate L&D Delivery",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Direct browser dispatch to FormSubmit with Box (Non-Tabular) layout
      const response = await fetch("https://formsubmit.co/ajax/vrushalisarwan30@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          collaborationArea: formState.role,
          message: formState.message,
          institutionalGovernance: "IISER Pune | NITI Aayog (AIM) | DST INSPIRE | Regenesys | ADYPU | ITVedant",
          _template: "box", // NON-TABULAR: Stacked cards instead of table!
          _captcha: "false",
          _replyto: formState.email,
          _subject: `Portfolio Inquiry from ${formState.name} (${formState.role})`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        triggerMailto();
        setSubmitted(true);
      }
    } catch {
      triggerMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerGmailWeb = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name} (${formState.role})`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nArea of Interest: ${formState.role}\n\nMessage:\n${formState.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`, "_blank");
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name} (${formState.role})`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nArea of Interest: ${formState.role}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  const [copied, setCopied] = useState("");
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);

  const nav = [
    ["Profile", "#about"],
    ["Experience", "#experience"],
    ["Framework", "#approach"],
    ["Work", "#work"],
    ["Capabilities", "#skills"],
    ["Credentials", "#credentials"],
    ["Contact", "#contact"],
  ];

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    } catch {}
  };

  const nextCertificate = () =>
    setActiveCertificate((current) => (current + 1) % certificateGallery.length);
  const previousCertificate = () =>
    setActiveCertificate(
      (current) => (current - 1 + certificateGallery.length) % certificateGallery.length
    );

  const nextProject = () => setActiveProject((current) => (current + 1) % projects.length);
  const previousProject = () =>
    setActiveProject((current) => (current - 1 + projects.length) % projects.length);

  const nextSkill = () => setActiveSkill((current) => (current + 1) % skills.length);
  const previousSkill = () =>
    setActiveSkill((current) => (current - 1 + skills.length) % skills.length);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setActiveCertificate((current) => (current + 1) % certificateGallery.length),
      6200
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setActiveProject((current) => (current + 1) % projects.length),
      5600
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setActiveSkill((current) => (current + 1) % skills.length),
      4700
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-shell">
      {/* Primary Navigation */}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#hero" aria-label="Vrushali Sarwan home">
            <span className="brand-mark">VS</span>
            <span className="brand-copy">
              <b>{profile.name}</b>
              <small>Senior Facilitator • Corporate L&D Leader</small>
            </span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="linkedin-nav" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogo size={16} weight="fill" /> LinkedIn <ArrowUpRight size={13} />
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-grid container">
            <Reveal className="hero-copy">
              <div className="hero-kicker">
                <span className="eyebrow-dot" /> {profile.badge}
              </div>
              <div className="hero-heading-lockup">
                <h1>
                  {profile.headlineMain} <br />
                  <em>{profile.headlineHighlight}</em>
                </h1>
                <div className="hero-avatar-container" title="Vrushali Sarwan — Senior Facilitator & EdTech Product Leader">
                  <div className="hero-avatar-ring" />
                  <div className="hero-avatar-inner">
                    <img
                      src={profile.avatar}
                      alt="Vrushali Sarwan — AI Animated Executive Avatar"
                      className="hero-avatar-img"
                    />
                  </div>
                  <span className="hero-avatar-status" title="Active / Available for Leadership">
                    <i className="status-dot" />
                  </span>
                </div>
              </div>
              <p className="hero-tagline">{profile.tagline}</p>
              <div className="hero-meta">
                <span>
                  <CheckCircle size={16} weight="fill" /> 8+ Years Enterprise L&D
                </span>
                <span>
                  <GraduationCap size={16} weight="fill" /> IISER Pune Alum
                </span>
                <span>
                  <ChartLineUp size={16} weight="fill" /> Data & AI Workflows
                </span>
                <span>
                  <SealCheck size={16} weight="fill" /> Virtual Delivery QA Lead
                </span>
              </div>
              <div className="hero-actions">
                <a href="#experience" className="btn-primary">
                  Explore Career Journey <ArrowRight size={16} weight="bold" />
                </a>
                <a href={resumes[0].file} download className="btn-secondary">
                  <DownloadSimple size={16} weight="bold" /> Download Resume (LDO)
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={0.08}>
              <div className="hero-dashboard">
                <div className="dashboard-top">
                  <span className="dashboard-label">LEARNING OPERATING SYSTEM</span>
                  <span className="live-pill">
                    <i /> ACTIVE WORKFLOW
                  </span>
                </div>
                <div className="dashboard-title">
                  From learner context<br />
                  <strong>to measurable impact.</strong>
                </div>
                <div className="dashboard-flow">
                  {howIWorkSteps.slice(0, 4).map((step, i) => (
                    <div className="dashboard-step" key={step.step}>
                      <span>{step.step}</span>
                      <b>{step.title}</b>
                      {i < 3 && <CaretRight size={14} />}
                    </div>
                  ))}
                </div>
                <div className="dashboard-bottom">
                  <div>
                    <span>QUALITY SIGNAL</span>
                    <strong>98%</strong>
                    <small>on-time SLA milestones</small>
                  </div>
                  <div className="mini-bars">
                    <i /><i /><i /><i /><i /><i />
                  </div>
                </div>
              </div>
              <div className="floating-note note-one">
                <Sparkle size={16} weight="fill" />
                <span>
                  Human-centred<br />
                  <b>facilitation</b>
                </span>
              </div>
              <div className="floating-note note-two">
                <ChartLineUp size={16} weight="bold" />
                <span>
                  Evidence-led<br />
                  <b>Delivery QA & SLAs</b>
                </span>
              </div>
              <div className="hero-orbit orbit-a" />
              <div className="hero-orbit orbit-b" />
            </Reveal>
          </div>

          <div className="hero-proof container">
            {metrics.map((m, i) => (
              <div className={`proof-item proof-${m.color}`} key={m.label}>
                <strong>{m.val}</strong>
                <span>{m.label}</span>
                {i < metrics.length - 1 && <i />}
              </div>
            ))}
          </div>

                    {/* Automatically Scrollable Horizontal Core Tech Stack Carousel Marquee */}
          <div className="container">
            <div className="tech-marquee-wrapper" aria-label="Core Technology Stack Auto-Scrolling Marquee">
              <div className="tech-marquee-header">
                <span className="tech-marquee-badge">
                  <span className="eyebrow-dot" /> Core Technical & Methodological Stack
                </span>
                <span className="tech-marquee-hint">⚡ Auto-scrolling • Hover to pause</span>
              </div>
              <div className="tech-marquee-viewport">
                <div className="tech-marquee-track">
                  {[...coreTechStack, ...coreTechStack].map((tech, idx) => (
                    <div className="tech-marquee-card" key={`${tech.name}-${idx}`} title={`${tech.category}: ${tech.highlight}`}>
                      <TechIcon name={tech.name} size={24} />
                      <span className="tech-marquee-name">{tech.name}</span>
                      <span className="tech-marquee-desc">{tech.highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Profile Section */}
        <section id="about" className="section about-section">
          <div className="container about-grid">
            <Reveal className="about-copy">
              <span className="section-kicker">01 / EXECUTIVE PROFILE</span>
              <h2>{profile.aboutTitle}</h2>
              <p>{profile.aboutText}</p>
              <div className="executive-roles-grid" aria-label="Executive Core Focus Areas">
                <div className="executive-role-card role-blue" title="Learning Delivery Operations: Multi-cohort execution, vendor sourcing, and SLA management">
                  <span className="role-icon-box">
                    <TechIcon name="LMS" size={22} />
                  </span>
                  <div className="role-meta">
                    <span className="role-category">CORE MANDATE</span>
                    <strong className="role-title">Learning Delivery Operations</strong>
                  </div>
                </div>

                <div className="executive-role-card role-coral" title="Instructional Quality Governance: Systematic virtual classroom audits, rubrics, and facilitator coaching">
                  <span className="role-icon-box">
                    <TechIcon name="Quality Assurance" size={22} />
                  </span>
                  <div className="role-meta">
                    <span className="role-category">QUALITY RIGOR</span>
                    <strong className="role-title">Instructional Quality Audits</strong>
                  </div>
                </div>

                <div className="executive-role-card role-teal" title="Business Analytics & Power BI: Executive ROI views, telemetry dashboards, and stakeholder reporting">
                  <span className="role-icon-box">
                    <TechIcon name="Power BI" size={22} />
                  </span>
                  <div className="role-meta">
                    <span className="role-category">DATA & BI</span>
                    <strong className="role-title">Business Analytics & Power BI</strong>
                  </div>
                </div>

                <div className="executive-role-card role-purple" title="Python & AI Workflows: LMS automation, certification engines, and NLP integration">
                  <span className="role-icon-box">
                    <TechIcon name="Python" size={22} />
                  </span>
                  <div className="role-meta">
                    <span className="role-category">AUTOMATION & AI</span>
                    <strong className="role-title">Python & AI Workflows</strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="profile-card" delay={0.06}>
              <div className="profile-card-head">
                <span>LEADERSHIP PILLARS</span>
                <SealCheck size={19} weight="duotone" />
              </div>
              <div className="profile-card-main">
                <div className="profile-initials">VR</div>
                <div>
                  <strong>{profile.fullName}</strong>
                  <span>{profile.currentRole}</span>
                </div>
              </div>
              <div className="profile-lines" role="list">
                <div className="profile-line-item pillar-teal" title="Operating Style: Structured & Human-Centered Facilitation">
                  <div className="pillar-label-group">
                    <span className="pillar-icon-chip">
                      <Handshake size={16} weight="duotone" />
                    </span>
                    <span className="pillar-label">Operating Style</span>
                  </div>
                  <b className="pillar-val">Structured & Human-Centered</b>
                </div>
                <div className="profile-line-item pillar-coral" title="Measurement Rigor: Instructional Quality Audits & SLA Compliance">
                  <div className="pillar-label-group">
                    <span className="pillar-icon-chip">
                      <SealCheck size={16} weight="duotone" />
                    </span>
                    <span className="pillar-label">Measurement Rigor</span>
                  </div>
                  <b className="pillar-val">Delivery QA & SLA Governance</b>
                </div>
                <div className="profile-line-item pillar-blue" title="Technology Domain: Enterprise BI, LMS Architecture, AI-Native Tools">
                  <div className="pillar-label-group">
                    <span className="pillar-icon-chip">
                      <Desktop size={16} weight="duotone" />
                    </span>
                    <span className="pillar-label">Technology Domain</span>
                  </div>
                  <div className="pillar-tech-chips" aria-label="Core Technology Tools">
                    <span className="pillar-tech-badge"><TechIcon name="Power BI" size={13} /> Power BI</span>
                    <span className="pillar-tech-badge"><TechIcon name="Python" size={13} /> Python</span>
                    <span className="pillar-tech-badge"><TechIcon name="LMS" size={13} /> LMS</span>
                    <span className="pillar-tech-badge"><TechIcon name="Generative AI" size={13} /> GenAI</span>
                  </div>
                </div>
                <div className="profile-line-item pillar-gold" title="Academic Depth: Dual Degree in Mathematics & Earth Science from IISER Pune">
                  <div className="pillar-label-group">
                    <span className="pillar-icon-chip">
                      <GraduationCap size={16} weight="duotone" />
                    </span>
                    <span className="pillar-label">Academic Depth</span>
                  </div>
                  <b className="pillar-val">IISER Pune BS-MS Dual Degree</b>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 / Experience Section with Tech Bullet Points & Icons */}
        <section id="experience" className="section experience-section">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <span className="section-kicker">02 / CAREER MILESTONES</span>
                <h2>Orchestrating scalable corporate learning delivery & operations.</h2>
              </div>
              <p>
                Reverse-chronological leadership across enterprise corporate bootcamps, executive analytics tracks,
                and digital learning operations, bridging instructors, technology, and measurable business outcomes.
              </p>
            </Reveal>

            <div className="timeline">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.period}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease }}
                >
                  <div className="timeline-rail">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <i />
                  </div>
                  <div className="timeline-date">{exp.period}</div>
                  <motion.article
                    className="experience-card"
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <div className="experience-card-top">
                      <Logo src={exp.logo} fallback={exp.fallback} alt={`${exp.company} logo`} />
                      <div className="experience-heading">
                        <span>{exp.company}</span>
                        <h3>{exp.role}</h3>
                        <small>{exp.location}</small>
                      </div>
                      <ArrowUpRight size={19} className="experience-arrow" />
                    </div>

                    {/* Outcome Metric Chips */}
                    <div className="outcome-strip">
                      {exp.outcomes.slice(0, 4).map((o) => (
                        <span key={o}>
                          <CheckCircle size={13} weight="fill" />
                          {o}
                        </span>
                      ))}
                    </div>

                    {/* Header Action for Magnifying Responsibilities */}
                    <div className="experience-header-action">
                      <span className="experience-subtitle">Core Pillars & Operational Execution</span>
                      <button
                        type="button"
                        className="magnify-card-btn"
                        onClick={() => {
                          setMagnifiedExp(exp);
                          setFocusedPillarIndex(0);
                        }}
                        title="Open large-print inspector for this role"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        <span>Magnify & Deep Dive</span>
                      </button>
                    </div>

                    {/* Responsibility Bullet Points with Realistic Tech Icons & Spotlight Magnifier */}
                    <ul className="responsibility-list" role="list">
                      {exp.highlights.map((h, hIdx) => {
                        const { iconType, badgeLabel, themeColor } = getBulletTechDetails(h);
                        return (
                          <li
                            key={h}
                            className={`responsibility-item responsibility-item-${themeColor}`}
                            onClick={() => {
                              setMagnifiedExp(exp);
                              setFocusedPillarIndex(hIdx);
                            }}
                            title="Click to magnify this pillar in full-screen reader"
                          >
                            <span className={`bullet-icon-wrap bullet-icon-${themeColor}`} title={badgeLabel}>
                              <TechIcon name={iconType} size={16} />
                            </span>
                            <div className="bullet-content">
                              <div className="bullet-top-row">
                                <span className="bullet-tech-badge">{badgeLabel}</span>
                                <span className="bullet-magnify-hint" title="Open detailed deep dive">
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                  Deep Dive ↗
                                </span>
                              </div>
                              <p>{h}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Technology Tags with Icons */}
                    <div className="tag-row">
                      {exp.tags.map((t) => (
                        <span key={t}>
                          <TechIcon name={t} size={13} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / Approach Section */}
        <section id="approach" className="section approach-section">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <span className="section-kicker">03 / EXECUTION FRAMEWORK</span>
                <h2>From learner discovery to quantifiable delivery excellence.</h2>
              </div>
              <p>
                Enterprise training achieves predictable success when diagnostic discovery, curriculum pacing,
                instructor facilitation, and empirical analytics operate as an integrated continuous loop.
              </p>
            </Reveal>
            <div className="approach-track">
              {howIWorkSteps.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.05}>
                  <div className="approach-card">
                    <span className="step-number">{s.step}</span>
                    <div className="approach-icon">
                      {i === 0 ? (
                        <Lightbulb size={22} weight="duotone" />
                      ) : i === 1 ? (
                        <BookOpen size={22} weight="duotone" />
                      ) : i === 2 ? (
                        <ChalkboardTeacher size={22} weight="duotone" />
                      ) : i === 3 ? (
                        <ChartLineUp size={22} weight="duotone" />
                      ) : (
                        <Sparkle size={22} weight="duotone" />
                      )}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / Selected Work (Interactive Carousel Preserved Exactly) */}
        <section id="work" className="section work-section">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <span className="section-kicker">04 / APPLIED WORK</span>
                <h2>Where instructional design meets intelligent technology.</h2>
              </div>
              <p>
                Applied implementations demonstrating learning telemetry, automated ramp tracking,
                instructional quality frameworks, conversational AI tools, and mathematical research.
              </p>
            </Reveal>

            <Reveal className="work-carousel-panel">
              {(() => {
                const project = projects[activeProject];
                return (
                  <div className="work-carousel-shell">
                    <div className="carousel-slide-stage project-carousel-stage">
                      <motion.article
                        key={activeProject}
                        className={`project-card project-carousel-card project-theme-${project.colorTheme || "blue"}`}
                        initial={{ opacity: 0, x: 42 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.42, ease }}
                      >
                        <div className="project-visual">
                          <img className="project-visual-image" src={project.image} alt="" aria-hidden="true" />
                          <div className="project-image-tint" />
                          <span className="project-number">{project.number}</span>
                          <div className="visual-grid" />
                          <div className="visual-icon">
                            {activeProject === 0 ? (
                              <ChartLineUp size={34} weight="duotone" />
                            ) : activeProject === 1 ? (
                              <UsersThree size={34} weight="duotone" />
                            ) : activeProject === 2 ? (
                              <Brain size={34} weight="duotone" />
                            ) : (
                              <Flask size={34} weight="duotone" />
                            )}
                          </div>
                          <span className="project-kind">
                            {activeProject === 3 ? "RESEARCH THESIS" : "ENTERPRISE SYSTEM"}
                          </span>
                        </div>
                        <div className="project-body">
                          <div className="project-label">
                            {activeProject === 3 ? "RESEARCH / IISER PUNE" : "LEARNING TECHNOLOGY"}
                          </div>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="project-outcome">
                            <strong>Measured Impact</strong>
                            <span>{project.outcome}</span>
                          </div>
                          <div className="tag-row">
                            {project.tags.map((t) => (
                              <span key={t}>
                                <TechIcon name={t} size={13} />
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    </div>
                    <div className="carousel-toolbar">
                      <span className="carousel-count">
                        PROJECT {String(activeProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                      </span>
                      <div className="carousel-dots" role="tablist" aria-label="Selected work">
                        {projects.map((item, index) => (
                          <button
                            key={item.title}
                            type="button"
                            role="tab"
                            aria-selected={index === activeProject}
                            aria-label={`Show ${item.title}`}
                            className={`carousel-dot ${index === activeProject ? "is-active" : ""}`}
                            onClick={() => setActiveProject(index)}
                          />
                        ))}
                      </div>
                      <div className="carousel-actions">
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={previousProject}
                          aria-label="Previous selected work"
                        >
                          <ArrowRight className="arrow-left" size={16} />
                        </button>
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={nextProject}
                          aria-label="Next selected work"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Reveal>
          </div>
        </section>

        {/* 05 / Capability Map (Skills Carousel Preserved Exactly) */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <span className="section-kicker">05 / COMPETENCY MAP</span>
                <h2>Cross-functional toolkit across people, platforms & intelligence.</h2>
              </div>
              <p>
                Core capabilities spanning facilitator coaching, SLA governance, LMS architecture,
                predictive data analytics, and modern AI enablement.
              </p>
            </Reveal>

            <Reveal className="skills-carousel-panel">
              {(() => {
                const skill = skills[activeSkill];
                return (
                  <div className="skills-carousel-shell">
                    <div className="carousel-slide-stage skills-carousel-stage">
                      <motion.article
                        key={activeSkill}
                        className={`skill-card skill-carousel-card skill-${skill.colorTheme}`}
                        initial={{ opacity: 0, x: 42 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.42, ease }}
                      >
                        <div className="skill-carousel-topline">
                          <span className="skill-icon">
                            <SkillClusterIcon name={skill.icon} />
                          </span>
                          <div>
                            <span className="skill-index">0{activeSkill + 1}</span>
                            <span className="skill-total"> / 0{skills.length}</span>
                          </div>
                        </div>
                        <div className="skill-carousel-content">
                          <div>
                            <span className="skill-kicker">CAPABILITY CLUSTER</span>
                            <h3>{skill.title}</h3>
                            <p>
                              Deep operational and domain expertise ready to deploy into corporate learning programs,
                              streamline LMS workflows, and elevate participant satisfaction.
                            </p>
                          </div>
                          <ul>
                            {skill.items.map((item) => (
                              <li key={item}>
                                <TechIcon name={item} size={24} className="skill-item-icon" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.article>
                    </div>
                    <div className="carousel-toolbar">
                      <span className="carousel-count">
                        CLUSTER · 0{activeSkill + 1} / 0{skills.length}
                      </span>
                      <div className="carousel-dots" role="tablist" aria-label="Capability map">
                        {skills.map((item, index) => (
                          <button
                            key={item.title}
                            type="button"
                            role="tab"
                            aria-selected={index === activeSkill}
                            aria-label={`Show ${item.title}`}
                            className={`carousel-dot ${index === activeSkill ? "is-active" : ""}`}
                            onClick={() => setActiveSkill(index)}
                          />
                        ))}
                      </div>
                      <div className="carousel-actions">
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={previousSkill}
                          aria-label="Previous capability"
                        >
                          <ArrowRight className="arrow-left" size={16} />
                        </button>
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={nextSkill}
                          aria-label="Next capability"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Reveal>
          </div>
        </section>

        {/* 06 / Credentials, Featured Carousel & Research */}
        <section id="credentials" className="section credentials-section">
          <div className="container">
            <Reveal className="section-heading-row">
              <div>
                <span className="section-kicker">06 / CREDENTIALS & ACADEMIC DEPTH</span>
                <h2>Verified credentials, academic depth & peer-reviewed research.</h2>
              </div>
              <p>
                An audited credential showcase featuring verifiable certificates, academic degrees from IISER Pune,
                national honours, and peer-reviewed conference publications.
              </p>
            </Reveal>

            {/* Academic Foundation & Honors Grid */}
            <div className="credential-feature-grid">
              <Reveal className="education-feature">
                <div className="feature-label">
                  <GraduationCap size={18} weight="duotone" /> ACADEMIC FOUNDATION
                </div>
                {education.map((ed) => (
                  <div className="education-feature-inner" key={ed.degree}>
                    <Logo src={ed.logo} fallback="IISER" alt="IISER Pune logo" />
                    <div>
                      <span className="education-detail">{ed.detail}</span>
                      <h3>{ed.degree}</h3>
                      <p>{ed.institute}</p>
                      <div className="education-tags">
                        <span>Mathematics</span>
                        <span>Earth & Climate Science</span>
                        <span>Integrated Dual Degree</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="education-foot">
                  <span>Premier National Research Institute</span>
                  <strong>IISER Pune</strong>
                </div>
              </Reveal>

              <Reveal className="honours-feature" delay={0.05}>
                <div className="feature-label">
                  <Medal size={18} weight="duotone" /> SCHOLASTIC HONORS & AWARDS
                </div>
                <div className="honours-stack">
                  {awards.map((a, i) => (
                    <div className="honour-row" key={a}>
                      <span>0{i + 1}</span>
                      <div>
                        <strong>
                          {i === 0
                            ? "National INSPIRE Fellowship"
                            : i === 1
                            ? "Academic Scholar Award"
                            : "Employee of the Month (Enterprise)"}
                        </strong>
                        <p>{a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Featured Certificate Carousel (Preserved Exactly) */}
            <Reveal className="featured-certificate-panel">
              {(() => {
                const cert = certificateGallery[activeCertificate];
                return (
                  <motion.div
                    key={activeCertificate}
                    className="featured-certificate-grid"
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.42, ease }}
                  >
                    <div className="featured-certificate-copy" aria-live="polite">
                      <div className="featured-certificate-kicker">
                        <span className="featured-dot" /> VERIFIED CREDENTIAL • {String(activeCertificate + 1).padStart(2, "0")}/{String(certificateGallery.length).padStart(2, "0")}
                      </div>
                      <span className="featured-certificate-type">{cert.issuer}</span>
                      <h3>{cert.title}</h3>
                      <p>{cert.note}</p>
                      <a
                        className="featured-certificate-link"
                        href={cert.driveUrl || cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Credential in Drive <ArrowUpRight size={15} />
                      </a>
                      <div className="featured-certificate-controls" aria-label="Certificate carousel controls">
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={previousCertificate}
                          aria-label="Previous certificate"
                        >
                          <ArrowRight className="arrow-left" size={16} />
                        </button>
                        <div className="carousel-dots" role="tablist" aria-label="Featured certificates">
                          {certificateGallery.map((item, index) => (
                            <button
                              key={item.title}
                              type="button"
                              role="tab"
                              aria-selected={index === activeCertificate}
                              aria-label={`Show ${item.title}`}
                              className={`carousel-dot ${index === activeCertificate ? "is-active" : ""}`}
                              onClick={() => setActiveCertificate(index)}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="carousel-arrow"
                          onClick={nextCertificate}
                          aria-label="Next certificate"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                    <a
                      className="featured-certificate-art"
                      href={cert.driveUrl || cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${cert.title} certificate in Google Drive`}
                    >
                      <span className="featured-index">DOCUMENTED EVIDENCE</span>
                      <div className="featured-image-frame">
                        <img src={cert.image} alt={`${cert.title} certificate`} />
                      </div>
                      <span className="featured-certificate-cta">
                        Inspect Certificate <ArrowUpRight size={15} />
                      </span>
                    </a>
                  </motion.div>
                );
              })()}
            </Reveal>

            {/* Professional Certifications Badges */}
            <div className="professional-credentials">
              <div className="cert-section-head">
                <div>
                  <span className="section-kicker">ADDITIONAL CERTIFICATIONS</span>
                  <h3>Continuous specialization across modern L&D, AI and analytics.</h3>
                </div>
              </div>
              <div className="credential-chip-grid">
                {certifications.map((c) => (
                  <div className="credential-chip" key={c}>
                    <TechIcon name={c} size={24} className="credential-chip-icon" />
                    <p>{c}</p>
                  </div>
                ))}
              </div>
            </div>

                        {/* Institutional Sponsors & Enterprise Governance Board */}
            <div className="sponsor-board-section">
              <div className="sponsor-board-header">
                <div>
                  <span className="section-kicker">INSTITUTIONAL SPONSORS & ENTERPRISE GOVERNANCE BOARD</span>
                  <h3>Backed by premier national research institutions, government fellowships, and corporate learning partners.</h3>
                </div>
                <p className="sponsor-board-intro">
                  A high-impact governance board showcasing verified government innovation initiatives, apex scientific research fellowships, and corporate partner institutions.
                </p>
              </div>

              <div className="sponsor-board-grid">
                {institutionalSponsors.map((s) => (
                  <div className={`sponsor-card sponsor-${s.colorTheme}`} key={s.name} title={`${s.name} — ${s.role}`}>
                    <div className="sponsor-card-top">
                      <div className="sponsor-logo-badge">
                        <span>{s.logoText}</span>
                      </div>
                      <span className="sponsor-tag">{s.badge}</span>
                    </div>
                    <div className="sponsor-card-body">
                      <span className="sponsor-type">{s.type} • {s.sponsorLevel}</span>
                      <h4>{s.name}</h4>
                      <p>{s.role}</p>
                    </div>
                    <div className="sponsor-card-foot">
                      <div className="sponsor-foot-left">
                        <span className="sponsor-status-dot" />
                        <span>Verified Institutional Pedigree</span>
                      </div>
                      <span className="sponsor-hover-hint">🔍 Magnified View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

{/* Research & Publications Section */}
            <div className="research-block">
              <div className="research-title">
                <div>
                  <span className="section-kicker">RESEARCH & PUBLICATIONS</span>
                  <h3>Rigorous inquiry spanning machine learning, seismic statistics & transformers.</h3>
                </div>
              </div>
              <div className="research-grid">
                {research.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.05}>
                    <article>
                      <span>{r.type}</span>
                      <h4>{r.title}</h4>
                      <p>{r.body}</p>
                      <div className="research-mark">
                        {i === 0 ? <Quotes size={48} /> : i === 1 ? <Flask size={48} /> : <PresentationChart size={48} />}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer & Contact Section */}
      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <span className="section-kicker footer-kicker">LET&apos;S CONNECT</span>
            <h2>Ready to engineer transformative learning experiences together.</h2>
            <p>
              Open to leadership and principal facilitator roles across Corporate L&D, Learning Delivery Operations,
              Virtual Instruction Quality, and AI-enabled Education Systems.
            </p>
            <button type="button" className="footer-cta" onClick={() => setContactOpen(true)}>Start a Conversation <ArrowRight size={17} weight="bold" /></button>
          </div>

          <div className="contact-stack">
            <div>
              <MapPin size={20} weight="duotone" />
              <span>{profile.location}</span>
            </div>
            <div>
              <Phone size={20} weight="duotone" />
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <button onClick={() => copy(profile.phone, "phone")}>
                {copied === "phone" ? "Copied!" : "Copy"}
              </button>
            </div>
            <div>
              <EnvelopeSimple size={20} weight="duotone" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button onClick={() => copy(profile.email, "email")}>
                {copied === "email" ? "Copied!" : "Copy"}
              </button>
            </div>
            <div>
              <LinkedinLogo size={20} weight="duotone" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/vrushali-sarwan
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 {profile.fullName}. All rights reserved.</span>
          <a href="#hero" className="back-top">
            Back to Top <ArrowUp size={14} weight="bold" />
          </a>
        </div>
      </footer>
                {/* Role Pillar Deep Dive & Magnifier Modal Dialog */}
      {magnifiedExp && (
        <div className="magnify-modal-backdrop" onClick={() => setMagnifiedExp(null)}>
          <motion.div
            className="magnify-modal-window"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="magnify-modal-head">
              <div className="magnify-modal-brand">
                <Logo src={magnifiedExp.logo} fallback={magnifiedExp.fallback} alt={`${magnifiedExp.company} logo`} />
                <div>
                  <span className="magnify-modal-kicker">ROLE DEEP DIVE & OPERATIONAL PILLARS</span>
                  <h3>{magnifiedExp.role}</h3>
                  <small>{magnifiedExp.company} • {magnifiedExp.period}</small>
                </div>
              </div>
              <button
                type="button"
                className="contact-modal-close"
                aria-label="Close inspector"
                onClick={() => setMagnifiedExp(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="magnify-modal-body">
              <div className="magnify-modal-intro">
                <p>
                  Spacious architectural breakdown of key responsibilities, delivery benchmarks, and governance metrics delivered during this tenure.
                </p>
                <div className="magnify-outcomes-strip">
                  {magnifiedExp.outcomes.map((o) => (
                    <span key={o}>
                      <CheckCircle size={14} weight="fill" />
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <div className="magnify-pillars-grid">
                {magnifiedExp.highlights.map((h, idx) => {
                  const { iconType, badgeLabel, themeColor } = getBulletTechDetails(h);
                  const isTargeted = focusedPillarIndex === idx;
                  return (
                    <div
                      key={h}
                      className={`magnify-pillar-card magnify-pillar-${themeColor} ${isTargeted ? "is-focused-pillar" : ""}`}
                    >
                      <div className="magnify-pillar-header">
                        <span className={`bullet-icon-wrap bullet-icon-${themeColor}`}>
                          <TechIcon name={iconType} size={18} />
                        </span>
                        <div className="magnify-pillar-meta">
                          <span className="magnify-pillar-tag">PILLAR 0{idx + 1}</span>
                          <h4>{badgeLabel}</h4>
                        </div>
                      </div>
                      <div className="magnify-pillar-content">
                        <p>{h}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="magnify-modal-footer">
              <div className="tag-row" style={{ marginTop: 0 }}>
                {magnifiedExp.tags.map((t) => (
                  <span key={t}>
                    <TechIcon name={t} size={13} />
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setMagnifiedExp(null)}
                style={{ marginLeft: "auto", padding: "10px 20px", fontSize: "12px" }}
              >
                Close Inspector
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Conversation Modal Dialog */}
      {contactOpen && (
        <div className="contact-modal-backdrop" onClick={() => setContactOpen(false)}>
          <motion.div
            className="contact-modal-window"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.24, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-modal-head">
              <div className="contact-modal-title">
                <h3>Start a Conversation</h3>
                <p>Send a direct inquiry to Vrushali Sarwan for corporate L&D leadership, training facilitation, or EdTech advisory.</p>
              </div>
              <button
                type="button"
                className="contact-modal-close"
                aria-label="Close dialog"
                onClick={() => setContactOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {!submitted ? (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Area of Collaboration</label>
                  <div className="form-role-pills">
                    {[
                      "Corporate L&D Delivery",
                      "AI Tutors & EdTech Product",
                      "Analytics Facilitation (Power BI/Python)",
                      "Advisory / Keynote",
                    ].map((role) => (
                      <button
                        key={role}
                        type="button"
                        className={`role-pill-btn ${formState.role === role ? "is-active" : ""}`}
                        onClick={() => setFormState({ ...formState, role })}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message / Scope</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Briefly describe your team, cohort objectives, or timeline..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending details..." : "Send Message to Vrushali ➔"}
                </button>
              </form>
            ) : (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h4>Message Dispatched!</h4>
                <p>
                  Thank you, <strong>{formState.name}</strong>. Your inquiry has been forwarded directly to Vrushali&apos;s personal inbox (<code>{profile.email}</code>). You will hear back within 24–48 hours.
                </p>
                <div className="contact-verification-hint" style={{ fontSize: "12px", color: "var(--muted)", margin: "14px 0", background: "rgba(241,245,249,0.8)", padding: "10px 14px", borderRadius: "10px", lineHeight: 1.5 }}>
                  💡 <strong>Direct Email Guarantee:</strong> If this is your first submission, you can also launch a pre-composed message in 1 click below:
                </div>
                <div className="contact-fallback-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={triggerGmailWeb}
                    title="Open directly in Gmail Web"
                  >
                    Open in Gmail Web ↗
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={triggerMailto}
                    title="Open in default desktop email app"
                  >
                    Default Mail App ✉
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setContactOpen(false);
                    }}
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}