import React from "react";
import Navbar from "./components/Navbar";
import { skills } from "../public/logos";
import { Projects } from "../assets/project";




export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container animate-fade-in-up">
            <h1>Nagesh Babu</h1>
            <p className="delay-100">
              Full Stack Developer <br />
              Crafting end-to-end web solutions with modern technologies and clean code.
            </p>
            <a href="#projects" className="btn delay-200">View My Work</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-card-bg ">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[30px] md:text-6xl font-bold text-foreground mb-[40px] animate-fade-in-up">About</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-muted animate-fade-in-up delay-100">
                A recent 2025 graduate specializing in <span className="text-foreground font-semibold">MERN stack development</span>.
                Experienced in building full-stack web applications using{" "}
                <span className="text-foreground font-semibold">Node.js</span>,{" "}
                <span className="text-foreground font-semibold">Express.js</span>,{" "}
                <span className="text-foreground font-semibold">React</span>,{" "}
                <span className="text-foreground font-semibold">MongoDB</span>,{" "}
                <span className="text-foreground font-semibold">SQL</span>, and{" "}
                <span className="text-foreground font-semibold">Tailwind CSS</span>.
                Passionate about creating scalable, user-friendly applications with clean, maintainable code.
              </p>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container">
            <h2 className="section-title font-serif text-3xl mb-16 text-center text-foreground">Technical Expertise</h2>
            <div className="flex flex-wrap  justify-center gap-[20px] ">
              {skills.map((skill, index) => (
                <div key={index} className="flex  items-center gap-4 group p-[10px] bg-blue-500 width- height-[100px]    ">
                  <div className="p-4 rounded-xl  shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <img width={40} height={40} src={skill.icon} className="z-10" alt="not loaded" />
                    </div>
                  </div>
                  <span className="font-medium text-muted group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section - Flexbox Grid */}
        <section id="projects" className="py-24">
          <div className="container">
            <h2 className="text-[30px] md:text-6xl font-bold text-foreground mb-[40px] text-center">
              Projects
            </h2>

            <div className="flex gap-[30px] justify-center flex-wrap">
              {Projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-[12px] w-[300px] h-[400px] md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]
                  p-6 bg-white text-black
                  shadow-[0_0_20px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]
                  hover:border-black/20
                  transition-all duration-300"
                >
                  {/* Image */}
                  <div className="rounded-[10px] overflow-hidden">
                    <div className="relative group h-full rounded-[10px] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] object-cover transform group-hover:scale-105
                           transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className=" mt-[30px] flex-1 flex flex-col justify-between py-4 items-center text-center
                text-[color:var(--foreground)]">


                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 
                 bg-gray-100 
                 text-gray-700 
                 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 w-fit">

                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-black">
                      {project.title}
                    </h3>


                    {/* Tech Stack */}
                    <div className="flex flex-row flex-wrap gap-2 mb-4 justify-center whitespace-nowrap
">
                      {project.tech.map((t) => (
                        <div
                          key={t}
                          className="px-4 py-2 rounded-xl text-[10px] font-semibold 
             text-gray-800
             bg-gray-50 m-[5px]
             shadow-sm hover:shadow-md hover:scale-105 
             transition-all duration-200"
                        >
                          {t}
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex flex-row gap-[10px]">
                    <a href={project.link}
                      c lassName="inline-flex items-center gap-2 
              text-black 
              font-semibold hover:opacity-70 
              transition-colors group w-fit">

                      Live Project

                    </a>
                    <a href={project.github}
                      className="inline-flex items-center gap-2 
              text-black 
              font-semibold hover:opacity-70 
              transition-colors group w-fit">

                      GitHub

                    </a>
                    </div>    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>







        {/* Contact Section */}
        < section id="contact" className="py-24 bg-card-bg " >
          <div className="container">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-[20px] justify-center items-center">
                <h2 className="font-serif text-[25px] mb-[20px] text-foreground">Contact</h2>
                <div className="flex  gap-[40px]">
                  <a href="mailto:kantamani6227@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Gmail
                  </a>
                   <div>
                    <a href="https://www.linkedin.com/in/nagesh-chegondi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <img className="w-[30px] h-[30px]" src="linkedin.png" alt="" />
                      LinkedIn
                    </a>
                    </div>
                    <div>
                      <a href="https://github.com/nagesh-chegondi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <img className="w-[30px] h-[30px]" src="github-1.svg" alt="" />
                        GitHub
                      </a>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Footer */}
        < footer className="py-12 text-center text-muted text-sm border-card-border bg-background" >
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} Nagesh Babu. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer >
      </main >
    </>
  );
}