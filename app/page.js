import React from "react";
import Navbar from "./components/Navbar";

const skills = [
  { name: "React", logo: "⚛️", level: "Expert" },
  { name: "JavaScript", logo: "📜", level: "Expert" },
  { name: "Next.js", logo: "▲", level: "Advanced" },
  { name: "TypeScript", logo: "🔷", level: "Advanced" },
  { name: "CSS/Tailwind", logo: "🎨", level: "Advanced" },
  { name: "Node.js", logo: "🟢", level: "Intermediate" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, cart, and checkout.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70aaf3d3?w=500&h=300&fit=crop",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    repo: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management with drag-and-drop interface.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS"],
    repo: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather app with real-time data and location-based forecasts.",
    image: "https://images.unsplash.com/photo-1536431311894-8c1ead8c5be0?w=500&h=300&fit=crop",
    tags: ["React", "API", "Charts.js"],
    repo: "#",
    live: "#",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="container hero">
          <div className="left">
            <h2>Hi, I'm Your Name</h2>
            <p>
              I build beautiful, responsive web applications with modern technologies. 
              Passionate about creating user-friendly experiences and clean code.
            </p>
            <a className="cta" href="#projects">
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container">
          <h3>About Me</h3>
          <div className="about-content">
            <p>
              I'm a frontend developer with 5+ years of experience building scalable web applications. 
              I specialize in React and Next.js, and I'm passionate about crafting intuitive interfaces 
              and writing maintainable code. When I'm not coding, you'll find me exploring new technologies 
              or contributing to open-source projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-logo">{skill.logo}</div>
                <h4>{skill.name}</h4>
                <p>{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <h3>Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-links">
                  <a href={project.live}>Live Demo</a>
                  <a href={project.repo}>Repository</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container">
          <h3 style={{ marginBottom: "3rem" }}>Get In Touch</h3>
          <div className="contact-wrapper">
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h4>LinkedIn</h4>
              <p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourname
                </a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🐙</div>
              <h4>GitHub</h4>
              <p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  github.com/yourname
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container footer">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </>
  );
}
