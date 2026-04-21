
import "./styles/TechStack.css";

const tech = [
  { name: "React", icon: "/images/react.webp" },
  { name: "Next.js", icon: "/images/next.webp" },
  { name: "Node.js", icon: "/images/node.webp" },
  { name: "Express", icon: "/images/express.webp" },
  { name: "MongoDB", icon: "/images/mongo.webp" },
  { name: "MySQL", icon: "/images/mysql.webp" },
  { name: "TypeScript", icon: "/images/typescript.webp" },
  { name: "JavaScript", icon: "/images/javascript.webp" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>
        My <span>Tech Stack</span>
      </h2>

      <div className="tech-grid">
        {tech.map((item, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;