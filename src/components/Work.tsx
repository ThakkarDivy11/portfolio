import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project Management System",
    category: "Django",
    desc: "Developed a web-based application to manage tasks, team assignments, and project deadlines with intuitive UI and progress tracking.",
    tools: "Django, Python, Database",
    image: "/images/Project-management.webp",
  },
  {
    title: "Result Management System",
    category: "Laravel",
    desc: "Built a digital platform for managing student results with secure data entry, grade calculation, and report generation.",
    tools: "Laravel, PHP, MySQL",
    image: "/images/result-management.webp",
  },
  {
    title: "Speech to Text Application",
    category: "AI / Voice",
    desc: "Created a voice-to-text app using speech recognition APIs for real-time transcription with optimized performance.",
    tools: "Speech API, JavaScript",
    image: "/images/voice-assistant.webp",
  },
  {
    title: "Payroll Management System",
    category: "Backend System",
    desc: "Automated salary calculation, deductions, and reporting with employee records and attendance tracking.",
    tools: "Database, Backend Logic",
    image: "/images/images.webp",
  },
  {
    title: "CRM System",
    category: "MERN Stack",
    desc: "Developed a full-stack CRM system for managing clients, automating leads, and supporting sales workflows.",
    tools: "MongoDB, Express, React, Node",
    image: "/images/download.webp",
  },
  {
    title: "CabZee",
    category: "Full Stack",
    desc: "Built a cab booking platform with real-time tracking, ride management, and user-friendly interface.",
    tools: "React, Node.js, Socket.io",
    image: "/images/cabzee.png",
  },
  {
    title: "AI Collection Engine",
    category: "AI / Automation",
    desc: "Developed an AI-powered system for automating data collection, processing, and intelligent insights.",
    tools: "AI APIs, Automation",
    image: "/images/ai.png",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const flex = flexRef.current;
      const section = sectionRef.current;
      if (!flex || !section) return;

      const cardWidth = flex.children[0].clientWidth + 40; // 40 = gap
      const totalScroll = cardWidth * (projects.length - 2);

      const scrollTween = gsap.to(flex, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`, // now exact
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.kill();
      };
    },
    { dependencies: [projects], scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Features</h4>
                <p>{project.tools}</p>
                <p style={{ opacity: 0.7 }}>{project.desc}</p>
              </div>

              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;