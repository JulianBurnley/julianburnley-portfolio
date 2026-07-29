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
story.append(Paragraph("FRONT-END DEVELOPER | AI PRACTITIONER | IT PROFESSIONAL", styles["role"]))
contact = (
    "Phoenix, Arizona&nbsp;&nbsp; | &nbsp;&nbsp;"
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
        "Front-end developer and information technology professional combining responsive development, "
        "accessibility, visual design, practical AI use, technical troubleshooting, and clear communication. "
        "Builds useful, maintainable digital experiences with careful testing and user-focused problem-solving.",
        styles["body"],
    )
)

left = []
left.append(Paragraph("CORE CAPABILITIES", styles["section"]))
capabilities = [
    "Semantic HTML, modern CSS, and JavaScript",
    "Responsive and mobile-first interface development",
    "Web accessibility, keyboard navigation, and WAI-ARIA",
    "Git and GitHub workflows",
    "WordPress and WooCommerce",
    "AI-assisted research, prototyping, debugging, and documentation",
    "Technical troubleshooting and customer support",
    "Adobe Creative Cloud and visual design",
]
for item in capabilities:
    left.append(Paragraph(f"• {item}", styles["item"]))

left.append(Paragraph("EDUCATION", styles["section"]))
left.append(Paragraph("Bachelor of Applied Science in Information Technology", styles["project"]))
left.append(Paragraph("Phoenix College", styles["small"]))
left.append(Paragraph("Application Development and Web Design/Development", styles["project"]))
left.append(Paragraph("Associate-level academic preparation and project work", styles["small"]))

right = []
right.append(Paragraph("SELECTED PROJECTS", styles["section"]))
projects = [
    (
        "Web Design Reference Library",
        "Responsive multi-page knowledge system covering semantic HTML, modern CSS, ARIA, media, and reusable interface patterns.",
    ),
    (
        "Accessible ARIA Interface",
        "Keyboard-operable educational interface with managed ARIA states, visible focus, skip navigation, and responsive content.",
    ),
    (
        "JR's Toy Store",
        "Responsive storefront redesign with category browsing, product cards, dark mode, and interactive cart feedback.",
    ),
    (
        "Professional Web Resume",
        "Responsive professional profile using CSS Grid, Flexbox, accessible hierarchy, metadata, and portfolio branding.",
    ),
]
for title, description in projects:
    right.append(Paragraph(title, styles["project"]))
    right.append(Paragraph(description, styles["small"]))
    right.append(Spacer(1, 2))

right.append(Paragraph("PROFESSIONAL DIRECTION", styles["section"]))
right.append(
    Paragraph(
        "Deepening JavaScript, React, TypeScript, component development, API integration, automated testing, "
        "accessibility, and responsible AI-supported development workflows.",
        styles["body"],
    )
)

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
    [[Paragraph("Portfolio: julianburnley.com", styles["small"]), Paragraph("Updated July 28, 2026", styles["small"])]],
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
