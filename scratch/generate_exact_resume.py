import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

os.makedirs("public", exist_ok=True)
pdf_path = "public/Sree_Hari_R_Resume.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Custom styles matching the exact document formatting
name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor('#000000')
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#000000')
)

section_heading_style = ParagraphStyle(
    'SectionHeadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#000000'),
    spaceBefore=8,
    spaceAfter=4
)

body_bold = ParagraphStyle(
    'BodyBold',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor('#000000')
)

body_regular = ParagraphStyle(
    'BodyRegular',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12.5,
    textColor=colors.HexColor('#111111')
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12.5,
    leftIndent=12,
    textColor=colors.HexColor('#222222')
)

story = []

# Title / Header
story.append(Paragraph("SREE HARI R", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("LinkedIn &nbsp;&nbsp;&nbsp; +91 9400635388 &nbsp;&nbsp;&nbsp; sreehari1384@gmail.com &nbsp;&nbsp;&nbsp; GitHub", contact_style))
story.append(Spacer(1, 4))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#000000'), spaceBefore=2, spaceAfter=8))

# OBJECTIVE
story.append(Paragraph("OBJECTIVE", section_heading_style))
story.append(Paragraph(
    "Aspiring Computer Science Engineer with hands-on experience building full-stack web applications using Next.js , AI "
    "tools and modern cloud tooling, complemented by practical exposure to cybersecurity through hands-on internships in "
    "digital investigation and threat awareness. Eager to contribute strong problem-solving skills, designing, adaptability, and "
    "a continuous-learning mindset to a dynamic engineering team, with the versatility to grow across software engineering, "
    "data, and security-focused roles.",
    body_regular
))
story.append(Spacer(1, 6))

# EDUCATION
story.append(Paragraph("EDUCATION", section_heading_style))

edu_data = [
    [
        Paragraph("<b>M.Tech, Computer Science and Engineering</b><br/>Amrita Vishwa Vidyapeetham | Ettimadai, Coimbatore", body_regular),
        Paragraph("<para align='right'>Expected graduation 2028</para>", body_regular)
    ],
    [
        Paragraph("<b>B.E, Computer Science and Engineering &nbsp;-&nbsp; 8.2 CGPA</b><br/>JCT College of Engineering and Technology | Pichanur, Coimbatore", body_regular),
        Paragraph("<para align='right'>2022 - 2026</para>", body_regular)
    ],
    [
        Paragraph("<b>Higher Secondary (HSS) &nbsp;-&nbsp; 83.5%</b><br/>Vijayamatha Convent Higher Secondary School | Ambatpalayam, Chittur", body_regular),
        Paragraph("<para align='right'>2020 - 2022</para>", body_regular)
    ],
    [
        Paragraph("<b>SSLC &nbsp;-&nbsp; 78%</b><br/>St. Francis Central School | Kozhinjampara, Palakkad", body_regular),
        Paragraph("<para align='right'>2019 - 2020</para>", body_regular)
    ],
]

t_edu = Table(edu_data, colWidths=[400, 132])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 2),
]))
story.append(t_edu)
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# PROJECTS
story.append(Paragraph("PROJECTS", section_heading_style))

# Project 1: Expense Tracker
story.append(Paragraph("<b>Expense-Tracker</b> | Next.js, TypeScript, Tailwind CSS, Recharts", body_bold))
story.append(Paragraph("• Designed and built a responsive fintech dashboard for expense tracking, implementing complex UI patterns, interactive charts, and a seamless cross-device user experience.", bullet_style))
story.append(Paragraph("• Utilized the Next.js App Router for optimized serverside rendering and routing, and implemented interactive data visualization with Recharts to track spending habits.", bullet_style))
story.append(Spacer(1, 6))

# Project 2: Trust-Chain Escrow
story.append(Paragraph("<b>Trust-Chain Escrow - Dual-Key Verification System (Final Year Project)</b> | Next.js, TypeScript, Tailwind CSS, Framer Motion", body_bold))
story.append(Paragraph("• Architected a dual portal B2B dashboard using Next.js 14 (App Router) and TypeScript, reducing initial page load times by 30% through server-side rendering (SSR) and dynamic imports.", bullet_style))
story.append(Paragraph("• Implemented secure transaction flows by generating 30day expiry JWT transaction tokens and automated verification checks during the escrow payment process.", bullet_style))
story.append(Paragraph("• Optimized client-side asset delivery and form layout structures using Tailwind CSS and Framer Motion, decreasing page transition latency by 25%.", bullet_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# TECHNICAL EXPERTISE
story.append(Paragraph("TECHNICAL EXPERTISE", section_heading_style))

tech_data = [
    [
        Paragraph("<b>Programming Languages:</b> Python, Java, JavaScript, HTML, CSS", body_regular),
        Paragraph("<b>Frameworks:</b> Next.js, Tailwind CSS", body_regular)
    ],
    [
        Paragraph("<b>Databases:</b> MongoDB, Supabase", body_regular),
        Paragraph("<b>Cloud & Deployment:</b> Vercel", body_regular)
    ],
    [
        Paragraph("<b>Tools:</b> Git, GitHub, REST APIs, VS Code, Cursor, Gemini, Antigravity, ChatGPT, Codex", body_regular),
        Paragraph("<b>Databases:</b> Supabase", body_regular)
    ],
    [
        Paragraph("<b>Security:</b> Cybersecurity Fundamentals, Network Security", body_regular),
        Paragraph("", body_regular)
    ]
]

t_tech = Table(tech_data, colWidths=[330, 202])
t_tech.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 2),
]))
story.append(t_tech)
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# INTERNSHIPS
story.append(Paragraph("INTERNSHIPS", section_heading_style))

# Internship 1
story.append(Paragraph("<b>Cyber Security Internship - The Commissioner of Police | Coimbatore (March - April 2026)</b>", body_bold))
story.append(Paragraph("• Completed an in-person internship focused on the role of cybersecurity in modern policing, gaining exposure to real time investigation procedures, legal frameworks, and digital evidence handling.", bullet_style))
story.append(Paragraph("• Observed cyber-related complaint handling and FIR/CSR registration procedures, and learned the role of telecom data and digital evidence in criminal investigations.", bullet_style))
story.append(Spacer(1, 6))

# Internship 2
story.append(Paragraph("<b>Python Programming Internship - CodSoft (Aug - Sep 2025)</b>", body_bold))
story.append(Paragraph("• Completed a virtual internship building practical Python projects, including a To-Do List application, a Password Generator, and a Basic Arithmetic Calculator.", bullet_style))
story.append(Paragraph("• Strengthened problem-solving and coding skills by applying core Python concepts to real-world tasks, improving efficiency, functionality, and user interaction.", bullet_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# PUBLICATIONS
story.append(Paragraph("PUBLICATIONS", section_heading_style))
story.append(Paragraph("<b>Trust-Chain Escrow - Dual-Key Verification System (Final Year Project)</b> | Next.js, TypeScript, Tailwind CSS, Framer Motion", body_bold))
story.append(Paragraph("• <font color='#0066cc'><u>https://ieeexplore.ieee.org/document/11597641</u></font>", bullet_style))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# CERTIFICATIONS
story.append(Paragraph("CERTIFICATIONS", section_heading_style))
story.append(Paragraph("<b>Cybersecurity Essentials</b> - Cisco Networking Academy - Feb 2026", body_regular))
story.append(Paragraph("<b>Cloud Computing</b> - NPTEL - May 2025", body_regular))
story.append(Paragraph("<b>Joy of Computing using Python</b> - NPTEL - Oct 2025", body_regular))
story.append(Paragraph("<b>Python Programming</b> - CodSoft - Sep 2025", body_regular))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=2, spaceAfter=8))

# LANGUAGES KNOWN
story.append(Paragraph("LANGUAGES KNOWN", section_heading_style))
story.append(Paragraph("Malayalam , Tamil , English", body_regular))

doc.build(story)
print(f"Generated PDF successfully at {pdf_path}")
