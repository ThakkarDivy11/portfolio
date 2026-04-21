import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>InnovateMR</h5>
              </div>
              <h3 style={{ fontSize: "28px" }}>Feb 2024 - July 2024</h3>
            </div>
            <p>
              Developed web applications using MongoDB, Express.js, Angular, and
              Node.js. Collaborated with the team to deliver full-stack features
              in a real-world agile environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WordPress Developer (AI+WP Integration)</h4>
                <h5>Neweb AI</h5>
              </div>
              <h3 style={{ fontSize: "28px" }}>Dec 2025 - Present</h3>
            </div>
            <p>
              Developing web solutions using WordPress with AI integration to build smarter and more dynamic websites. Continuously learning and applying skills in AI and the MERN stack while collaborating with teams to deliver modern, scalable web features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
