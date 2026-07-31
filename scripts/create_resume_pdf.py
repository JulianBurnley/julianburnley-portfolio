from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "julian-burnley-resume.pdf"
PUBLIC = ROOT / "assets" / "documents" / "julian-burnley-resume.pdf"

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)

font_regular = "Helvetica"
font_bold = "Helvetica-Bold"
inter_dir = Path(r"C:\Windows\Fonts")
if (inter_dir / "arial.ttf").exists() and (inter_dir / "arialbd.ttf").exists():
    pdfmetrics.registerFont(TTFont("ResumeRegular", inter_dir / "arial.ttf"))
    pdfmetrics.registerFont(TTFont("ResumeBold", inter_dir / "arialbd.ttf"))
    font_regular = "ResumeRegular"
    font_bold = "ResumeBold"

NAVY = colors.HexColor("#111A2C")
BLUE = colors.HexColor("#3157D5")
TEAL = colors.HexColor("#208D83")
MUTED = colors.HexColor("#556174")
LINE = colors.HexColor("#D9E0E9")
PALE = colors.HexColor("#F2F5FA")

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=LETTER,
    rightMargin=0.58 * inch,
    leftMargin=0.58 * inch,
    topMargin=0.46 * inch,
    bottomMargin=0.42 * inch,
    title="Julian Burnley Resume",
    author="Julian Burnley",
    subject="Front-End Developer, AI Practitioner, and IT Professional",
)

styles = {
    "name": ParagraphStyle(
        "Name",
        fontName=font_bold,
        fontSize=25,
        leading=27,
        textColor=NAVY,
        spaceAfter=3,
    ),
    "role": ParagraphStyle(
        "Role",
        fontName=font_bold,
        fontSize=10.5,
        leading=13,
        textColor=BLUE,
        spaceAfter=4,
    ),
    "contact": ParagraphStyle(
        "Contact",
        fontName=font_regular,
        fontSize=8.8,
        leading=11,
        textColor=MUTED,
    ),
    "section": ParagraphStyle(
        "Section",
        fontName=font_bold,
        fontSize=9.2,
        leading=11,
        textColor=TEAL,
        spaceBefore=8,
        spaceAfter=4,
        uppercase=True,
    ),
    "body": ParagraphStyle(
        "Body",
        fontName=font_regular,
        fontSize=8.9,
        leading=12.2,
        textColor=NAVY,
        spaceAfter=3,
    ),
    "item": ParagraphStyle(
        "Item",
        fontName=font_regular,
        fontSize=8.55,
        leading=11.4,
        leftIndent=9,
        firstLineIndent=-7,
        textColor=NAVY,
        spaceAfter=2,
    ),
    "project": ParagraphStyle(
        "Project",
        fontName=font_bold,
        fontSize=8.9,
        leading=11.5,
        textColor=NAVY,
        spaceAfter=1,
    ),
    "small": ParagraphStyle(
        "Small",
        fontName=font_regular,
        fontSize=8,
        leading=10.5,
        textColor=MUTED,
        spaceAfter=3,
    ),
}

story = []
story.append(Paragraph("JULIAN BURNLEY", styles["name"]))
story.append(Paragraph("FRONT-END DEVELOPER | IT PROFESSIONAL | AI PRACTITIONER", styles["role"]))
contact = (
    "Casa Grande, Arizona&nbsp;&nbsp; | &nbsp;&nbsp;623-703-6628&nbsp;&nbsp; | &nbsp;&nbsp;"
    '<link href="mailto:julian@julianburnley.com" color="#3157D5">julian@julianburnley.com</link>'
    "&nbsp;&nbsp; | &nbsp;&nbsp;"
    '<link href="https://www.julianburnley.com" color="#3157D5">julianburnley.com</link>'
    "&nbsp;&nbsp; | &nbsp;&nbsp;"
    '<link href="https://github.com/JulianBurnley" color="#3157D5">GitHub</link>'
)
story.append(Paragraph(contact, styles["contact"]))
story.append(Spacer(1, 7))
story.append(Table([[""]], colWidths=[7.34 * inch], rowHeights=[1.5], style=[("BACKGROUND", (0, 0), (-1, -1), BLUE)]))

story.append(Paragraph("PROFESSIONAL PROFILE", styles["section"]))
story.append(
    Paragraph(
        "Front-end developer and IT support professional with experience in Tier 2 network operations, "
        "desktop and connectivity troubleshooting, responsive development, accessibility, and practical AI use. "
        "Known for clear documentation, reliable problem-solving, and a 95% first-contact resolution rate.",
        styles["body"],
    )
)

left = []
left.append(Paragraph("EDUCATION", styles["section"]))
left.append(Paragraph("Bachelor of Applied Science in Information Technology", styles["project"]))
left.append(Paragraph("Phoenix College | 2026", styles["small"]))
left.append(Paragraph("Associate of Applied Science - Web Development / Design", styles["project"]))
left.append(Paragraph("Rio Salado College | 2024", styles["small"]))
left.append(Paragraph("Associate of Applied Science - Programming and System Analysis", styles["project"]))
left.append(Paragraph("Rio Salado College | 2022", styles["small"]))

left.append(Paragraph("CERTIFICATES", styles["section"]))
certificates = [
    "Computer System Configuration and Support - Network | Phoenix College (2026)",
    "Computer System Configuration and Support - Security | Phoenix College (2026)",
    "Computer System Configuration and Support - Linux | Phoenix College (2026)",
    "Computer System Configuration and Support | Phoenix College (2026)",
    "Microsoft Desktop Associate | Phoenix College (2026)",
    "Web App Development | Rio Salado College (2022)",
]
for item in certificates:
    left.append(Paragraph(f"- {item}", styles["item"]))

right = []
right.append(Paragraph("CORE CAPABILITIES", styles["section"]))
capabilities = [
    "Semantic HTML, modern CSS, JavaScript, and responsive design",
    "Accessibility, keyboard navigation, and WAI-ARIA",
    "Git, GitHub, WordPress, and WooCommerce",
    "AI-assisted research, prototyping, debugging, and documentation",
    "Technical troubleshooting, support, and visual design",
]
for item in capabilities:
    right.append(Paragraph(f"- {item}", styles["item"]))

right.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]))
experience = [
    (
        "IT Professional and Web Developer | Self-employed | 2012-Present",
        "Provide web development and technical support; diagnose Windows, Linux, software, networking, and peripheral issues; maintain home-lab services; document durable solutions.",
    ),
    (
        "Tier 2 Support, NOC | AT&T | 2008-2011",
        "Handled 20+ daily VoIP, IPTV, and Internet support calls with a 95% first-contact resolution rate; monitored service issues and maintained detailed escalation records.",
    ),
    (
        "DSL Support Technician, Levels 1-2 | 2Wire | 2003-2008",
        "Configured residential gateways, analyzed line quality, resolved wireless and broadband issues, and supported hardware and email setup.",
    ),
]
for title, description in experience:
    right.append(Paragraph(title, styles["project"]))
    right.append(Paragraph(description, styles["small"]))
    right.append(Spacer(1, 2))

right.append(Paragraph("SELECTED INDEPENDENT PROJECTS", styles["section"]))
projects = [
    (
        "Casa Grande Local",
        "Directory-first community guide concept with audience research, information architecture, accessible search, launch planning, and a WordPress/HivePress implementation path.",
    ),
    (
        "Climate, Close to Home",
        "Evidence-based Southwestern climate story and automated briefing combining research, data storytelling, accessible design, and responsible automation.",
    ),
]
for title, description in projects:
    right.append(Paragraph(title, styles["project"]))
    right.append(Paragraph(description, styles["small"]))
    right.append(Spacer(1, 2))

columns = Table(
    [[left, right]],
    colWidths=[3.45 * inch, 3.62 * inch],
    hAlign="LEFT",
    style=TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (0, 0), 0),
            ("RIGHTPADDING", (0, 0), (0, 0), 13),
            ("LEFTPADDING", (1, 0), (1, 0), 13),
            ("RIGHTPADDING", (1, 0), (1, 0), 0),
            ("LINEBEFORE", (1, 0), (1, 0), 0.7, LINE),
        ]
    ),
)
story.append(columns)
story.append(Spacer(1, 8))
footer = Table(
    [[Paragraph("Portfolio: julianburnley.com", styles["small"]), Paragraph("Updated July 29, 2026", styles["small"])]],
    colWidths=[3.67 * inch, 3.67 * inch],
    style=TableStyle(
        [
            ("BACKGROUND", (0, 0), (-1, -1), PALE),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LEFTPADDING", (0, 0), (-1, -1), 7),
            ("RIGHTPADDING", (0, 0), (-1, -1), 7),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ]
    ),
)
story.append(footer)

doc.build(story)
PUBLIC.write_bytes(OUTPUT.read_bytes())
print(OUTPUT)
print(PUBLIC)
