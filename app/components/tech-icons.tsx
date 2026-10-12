"use client";

import React from "react";

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
      badgeLabel: "Instructional Quality QA",
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
      iconType: "STEM",
      badgeLabel: "Govt / Academic Leadership",
      themeColor: "gold",
    };
  }

  return {
    iconType: "Analytics",
    badgeLabel: "Operations & Delivery",
    themeColor: "teal",
  };
}
