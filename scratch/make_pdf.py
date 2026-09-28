import os

# Create public directory if not exists
os.makedirs("public", exist_ok=True)

# Generate a minimal valid PDF file with resume text using raw PDF spec
pdf_content = """%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<< /Length 1200 >>
stream
BT
/F1 20 Tf
50 740 Td
(SREE HARI R) Tj
/F2 10 Tf
0 -18 Td
(Phone: +91 9400635388  |  Email: sreehari1384@gmail.com) Tj
0 -15 Td
(Publication: https://ieeexplore.ieee.org/document/11597641) Tj

0 -25 Td
/F1 12 Tf
(PROFESSIONAL SUMMARY) Tj
0 -14 Td
/F2 9 Tf
(Aspiring Computer Science Engineer with hands-on experience building full-stack web applications) Tj
0 -12 Td
(using Next.js, AI tools and modern cloud tooling, complemented by practical exposure to cybersecurity) Tj
0 -12 Td
(through hands-on internships in digital investigation and threat awareness.) Tj

0 -25 Td
/F1 12 Tf
(TECHNICAL EXPERTISE) Tj
0 -14 Td
/F2 9 Tf
(Languages: Python, Java, JavaScript, HTML, CSS) Tj
0 -12 Td
(Frameworks & DB: Next.js, Tailwind CSS, MongoDB, Supabase, Vercel) Tj
0 -12 Td
(Tools: Git, GitHub, REST APIs, VS Code, Cursor, Gemini, Antigravity, ChatGPT, Codex) Tj
0 -12 Td
(Security: Cybersecurity Fundamentals, Network Security) Tj

0 -25 Td
/F1 12 Tf
(FEATURED PROJECTS) Tj
0 -14 Td
/F1 10 Tf
(Trust-Chain Escrow - Dual-Key Verification System) Tj
0 -12 Td
/F2 9 Tf
(- Architected a dual-portal B2B dashboard using Next.js 14 App Router and TypeScript.) Tj
0 -12 Td
(- Reduced initial page load times by 30% using server-side rendering and dynamic imports.) Tj
0 -12 Td
(- Implemented secure transaction flows using 30-day expiry JWT transaction tokens.) Tj
0 -12 Td
(- Reduced page transition latency by 25% using Tailwind CSS and Framer Motion.) Tj

0 -15 Td
/F1 10 Tf
(Expense Tracker) Tj
0 -12 Td
/F2 9 Tf
(- Responsive fintech-style expense tracking dashboard with Next.js & Recharts.) Tj

0 -25 Td
/F1 12 Tf
(INTERNSHIPS & EXPERIENCE) Tj
0 -14 Td
/F1 10 Tf
(Cyber Security Internship - The Commissioner of Police, Coimbatore \(March - April 2026\)) Tj
0 -12 Td
/F2 9 Tf
(- Exposure to digital evidence handling, FIR/CSR procedures, telecom data & criminal investigation.) Tj
0 -15 Td
/F1 10 Tf
(Python Programming Internship - CodSoft \(August - September 2025\)) Tj
0 -12 Td
/F2 9 Tf
(- Developed To-Do List, Password Generator, and Arithmetic Calculator applications.) Tj

0 -25 Td
/F1 12 Tf
(EDUCATION) Tj
0 -14 Td
/F2 9 Tf
(- M.Tech in Computer Science & Engineering, Amrita Vishwa Vidyapeetham \(Expected 2028\)) Tj
0 -12 Td
(- B.E in Computer Science & Engineering, JCT College of Engineering and Technology \(CGPA: 8.2\)) Tj
0 -12 Td
(- Higher Secondary: Vijayamatha Convent Higher Secondary School \(83.5%\)) Tj
0 -12 Td
(- SSLC: St. Francis Central School \(78%\)) Tj

0 -25 Td
/F1 12 Tf
(CERTIFICATIONS) Tj
0 -14 Td
/F2 9 Tf
(- Cybersecurity Essentials - Cisco Networking Academy \(Feb 2026\)) Tj
0 -12 Td
(- Cloud Computing - NPTEL \(May 2025\)) Tj
0 -12 Td
(- Joy of Computing using Python - NPTEL \(Oct 2025\)) Tj
0 -12 Td
(- Python Programming - CodSoft \(Sep 2025\)) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000264 00000 n 
0000000345 00000 n 
0000000421 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1675
%%EOF
"""

with open("public/Sree_Hari_R_Resume.pdf", "wb") as f:
    f.write(pdf_content.encode('latin1'))

print("PDF generated successfully at public/Sree_Hari_R_Resume.pdf")
