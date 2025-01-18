import { exec } from 'child_process';

const pythonScript = `
import textwrap

def print_section(title, content):
    print(f"\\n{title.upper()}")
    print("-" * len(title))
    print(textwrap.fill(content, width=80))

def print_list(items):
    for item in items:
        print(f"- {item}")

# Personal Information
print("SOULAYMEN TLILI")
print("Email: tlilisoulaymen@gmail.com")
print("\\n" + "=" * 80)

# Objective
print_section("Objective", "To obtain a challenging position as a Full Stack Engineer and Developer, leveraging my programming expertise, problem-solving skills, and passion for creating robust web solutions. I am eager to expand my knowledge in advanced web technologies and frameworks to deliver innovative and scalable applications.")

# Education
print_section("Education", "")
print("Carthage University — Tunisia")
print("Bachelor's Degree in Computer Science")
print("Relevant Coursework: Web Development, Software Engineering, Database Systems, Algorithms, Data Structures")
print("\\nPreparatory Classes at IPEIM (Institut Préparatoire aux Études d'Ingénieurs de Monastir)")
print("Specialized in intensive studies in physics and chemistry.")

# Skills
print_section("Skills", "")
skills = [
    "Front-End Development: HTML, CSS, JavaScript, React, Angular, Vue.js",
    "Back-End Development: Node.js, Express.js, Django, Flask, Ruby on Rails",
    "Database Management: MySQL, PostgreSQL, MongoDB, Firebase",
    "Version Control: Git, GitHub, GitLab",
    "Cloud Computing: AWS, Azure, Google Cloud Platform",
    "DevOps Tools: Docker, Kubernetes, CI/CD Pipelines",
    "Other Technologies: WebSockets, GraphQL, REST APIs",
    "Soft Skills: Problem-solving, teamwork, project management, adaptability"
]
print_list(skills)

# Experience
print_section("Experience", "")
experiences = [
    "Freelance Full Stack Developer",
    "Mobile App Developer",
    "SaaS Logistics Optimization Dashboard Developer",
    "AI-Driven Space Debris Mapping Dashboard"
]
print_list(experiences)

# Certifications & Courses
print_section("Certifications & Courses", "")
certifications = [
    "Certified Full Stack Developer (Coursera, Udemy, etc.)",
    "Advanced JavaScript & Modern Frameworks",
    "Cloud Engineering and DevOps Essentials",
    "Deep Learning Specialization"
]
print_list(certifications)

# Projects
print_section("Projects", "")
projects = [
    "InspireYou App: Motivation app featuring user-specific quotes and minimalistic animations. Designed for both Android and iOS using Flutter.",
    "Backtest-AI: AI-powered dashboard for financial strategy evaluation. Provided P&L charts, equity curves, and risk metrics.",
    "QR-Based Food Delivery System: Developed a Flutter-based cross-platform application for food delivery. Integrated QR code features for streamlined ordering."
]
print_list(projects)

# Interests & Learning Goals
print_section("Interests & Learning Goals", "")
interests = [
    "Mastering TypeScript for scalable front-end development.",
    "Exploring Next.js for server-side rendering and improved performance.",
    "Gaining expertise in Web3 development to build decentralized applications.",
    "Developing robust systems using Microservices Architecture."
]
print_list(interests)

# References
print_section("References", "Available upon request.")
`;

exec(`python -c "${pythonScript}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});