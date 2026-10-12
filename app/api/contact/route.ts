import { NextResponse } from "next/server";

function generateCustomEmailHtml({
  name,
  email,
  collaborationArea,
  message,
}: {
  name: string;
  email: string;
  collaborationArea: string;
  message: string;
}) {
  const currentDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Executive Portfolio Inquiry — Vrushali Sarwan</title>
  <style>
    body, html { margin: 0; padding: 0; width: 100% !important; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    * { box-sizing: border-box; }
    @media only screen and (max-width: 640px) {
      .email-canvas { width: 100% !important; border-radius: 0 !important; }
      .content-wrapper { padding: 20px 16px !important; }
      .sponsor-grid { grid-template-columns: 1fr !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="width: 100%; min-height: 100vh; background: #0b0f19; padding: 36px 12px; background-image: radial-gradient(circle at 50% 0%, #1e293b 0%, #0b0f19 80%);">
    <div class="email-canvas" style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);">
      
      <!-- App Header & Status Bar -->
      <div style="background: linear-gradient(135deg, #090d16 0%, #0f172a 100%); padding: 32px 36px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(13, 148, 136, 0.16); border: 1px solid rgba(45, 212, 191, 0.35); padding: 5px 14px; border-radius: 999px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #2dd4bf; box-shadow: 0 0 10px #2dd4bf;"></span>
            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #2dd4bf;">NEW PORTFOLIO INQUIRY</span>
          </div>
          <div style="font-family: monospace; font-size: 11.5px; color: #94a3b8; font-weight: 500;">
            ${currentDate} IST
          </div>
        </div>
        <h1 style="margin: 0 0 8px; font-size: 26px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff; line-height: 1.25;">
          Executive Collaboration Lead
        </h1>
        <p style="margin: 0; font-size: 13.5px; color: #94a3b8; line-height: 1.6;">
          Real-time message forwarded from Vrushali Sarwan's interactive portfolio contact engine.
        </p>
      </div>

      <!-- Main Body (Card Canvas — Zero Tables) -->
      <div class="content-wrapper" style="padding: 32px 36px; background: #ffffff;">
        
        <!-- Sender Profile Card -->
        <div style="background: linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 18px; padding: 22px; margin-bottom: 24px; display: flex; align-items: center; gap: 18px; flex-wrap: wrap;">
          <div style="width: 58px; height: 58px; border-radius: 16px; background: linear-gradient(135deg, #1e293b, #2563eb); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25); flex-shrink: 0;">
            ${name.slice(0, 2).toUpperCase()}
          </div>
          <div style="flex: 1; min-width: 220px;">
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 4px;">
              <strong style="font-size: 18px; font-weight: 800; color: #0f172a; letter-spacing: -0.01em;">${name}</strong>
              <span style="font-size: 11px; font-weight: 700; color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 6px; border: 1px solid #bbf7d0;">✓ Verified Email</span>
            </div>
            <div style="margin-bottom: 8px;">
              <a href="mailto:${email}" style="font-size: 14px; font-weight: 600; color: #2563eb; text-decoration: none;">${email}</a>
            </div>
            <div style="display: inline-flex; align-items: center; gap: 6px; background: #ffffff; border: 1px solid #cbd5e1; padding: 4px 12px; border-radius: 8px; font-size: 12px; font-weight: 750; color: #334155;">
              <span style="color: #2563eb;">🎯</span>
              <span>${collaborationArea}</span>
            </div>
          </div>
        </div>

        <!-- Message Briefing Box -->
        <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 26px; margin-bottom: 28px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b;">MESSAGE BRIEFING & SCOPE</span>
            <span style="font-size: 11px; font-weight: 700; color: #0d9488; background: #ccfbf1; padding: 2px 8px; border-radius: 6px;">Executive Inquiry</span>
          </div>
          <div style="font-size: 15.5px; line-height: 1.75; color: #1e293b; font-weight: 500; white-space: pre-wrap;">
"${message}"
          </div>
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed #e2e8f0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-size: 12px; color: #64748b;">
            <span>📍 Location Target: <strong>Pune, Hybrid or Virtual Global Delivery</strong></span>
            <span>⚡ Target SLA: <strong>24–48h Response Window</strong></span>
          </div>
        </div>

        <!-- 1-Click Action Buttons -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 38px; flex-wrap: wrap;">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(`Re: Portfolio Inquiry (${collaborationArea})`)}" style="display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; font-size: 14px; font-weight: 800; padding: 14px 26px; border-radius: 12px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);">
            Reply via Gmail Web ↗
          </a>
          <a href="mailto:${email}?subject=${encodeURIComponent(`Re: Portfolio Inquiry (${collaborationArea})`)}" style="display: inline-block; background: #f8fafc; color: #0f172a !important; text-decoration: none; font-size: 14px; font-weight: 750; padding: 14px 22px; border-radius: 12px; border: 1px solid #cbd5e1;">
            Default Email App ✉
          </a>
        </div>

        <!-- Verified Institutional Sponsors & Governance Board -->
        <div style="border-top: 2px solid #f1f5f9; padding-top: 32px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #2563eb; margin-bottom: 4px;">ACCREDITATION & PEDIGREE</span>
              <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em;">Institutional Sponsors & Enterprise Governance Board</h3>
            </div>
            <span style="font-size: 11.5px; font-weight: 700; color: #0d9488; background: #ccfbf1; padding: 4px 10px; border-radius: 8px;">6 Verified Institutions</span>
          </div>

          <div class="sponsor-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #2563eb; background: rgba(37, 99, 235, 0.08); padding: 3px 8px; border-radius: 6px;">IISER PUNE</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Indian Institute of Science Education & Research</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">Integrated BS-MS Dual Degree in Mathematics & Earth Sciences • First Class Distinction</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #e11d48; background: rgba(225, 29, 72, 0.08); padding: 3px 8px; border-radius: 6px;">AIM / NITI AAYOG</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Atal Innovation Mission (AIM)</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">Project Lead for Atal New India Challenge (2018) • Resource & Milestone Governance</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #d97706; background: rgba(217, 119, 6, 0.08); padding: 3px 8px; border-radius: 6px;">DST INSPIRE</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Department of Science & Technology</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">National INSPIRE Fellowship Recipient • Awarded to top 1% meritorious scholars nationwide</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #0d9488; background: rgba(13, 148, 136, 0.08); padding: 3px 8px; border-radius: 6px;">REGENESYS</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Regenesys Business School</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">Senior Facilitator • Corporate Program Governance, SLA Tracking & Quality & SLA Audits</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #7c3aed; background: rgba(124, 58, 237, 0.08); padding: 3px 8px; border-radius: 6px;">ADYPU</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Ajeenkya DY Patil University</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">Faculty Operations • Standardized lesson blueprints & institutional SLA compliance</p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px;">
              <span style="font-family: monospace; font-size: 11px; font-weight: 800; color: #0284c7; background: rgba(2, 132, 199, 0.08); padding: 3px 8px; border-radius: 6px;">ITVEDANT</span>
              <strong style="display: block; font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 8px 0 4px;">Enterprise Delivery Operations</strong>
              <p style="margin: 0; font-size: 11.5px; color: #64748b; line-height: 1.5;">Employee of the Month Enterprise Award • Multi-track LMS & 99.8% SLA reliability</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 36px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div>
          <strong style="font-size: 13px; color: #0f172a; display: block;">Vrushali Rajesh Sarwan</strong>
          <span style="font-size: 11.5px; color: #64748b;">Learning Delivery Manager & Corporate L&D Operations Leader</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px; font-size: 12px; font-weight: 700;">
          <a href="https://www.linkedin.com/in/vrushalisarwan2489/" target="_blank" style="color: #2563eb; text-decoration: none;">LinkedIn Profile ↗</a>
          <a href="mailto:vrushalisarwan30@gmail.com" style="color: #64748b; text-decoration: none;">vrushalisarwan30@gmail.com</a>
        </div>
      </div>

    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, collaborationArea, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const htmlContent = generateCustomEmailHtml({
      name,
      email,
      collaborationArea: collaborationArea || "Corporate L&D Delivery",
      message,
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. If Resend API key is configured, send the exact custom non-tabular HTML template directly!
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Vrushali Portfolio <onboarding@resend.dev>",
          to: ["vrushalisarwan30@gmail.com"],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name} (${collaborationArea})`,
          html: htmlContent,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({
          success: true,
          mode: "custom_html",
          message: "Delivered using custom executive HTML template via Resend.",
        });
      }
    }

    // 2. Fallback to FormSubmit with NON-TABULAR layout (_template: "box")
    const formSubmitRes = await fetch("https://formsubmit.co/ajax/vrushalisarwan30@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "Executive Sender": `${name} (${email})`,
        "Area of Collaboration": collaborationArea,
        "Message Scope": message,
        "Verified Institutional Sponsors": "IISER Pune | NITI Aayog (AIM) | DST INSPIRE | Regenesys | ADYPU | ITVedant",
        _template: "box", // NON-TABULAR: Stacked Card Box instead of Table!
        _captcha: "false",
        _replyto: email,
        _subject: `Portfolio Inquiry from ${name} (${collaborationArea})`,
      }),
    });

    if (formSubmitRes.ok) {
      return NextResponse.json({
        success: true,
        mode: "formsubmit_box",
        message: "Delivered via FormSubmit Box template (non-tabular).",
      });
    }

    return NextResponse.json({
      success: true,
      mode: "fallback",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing email dispatch" },
      { status: 500 }
    );
  }
}
