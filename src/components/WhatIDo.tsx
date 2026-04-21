import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const elements = containerRef.current;

    // 👉 MOBILE FIX (click toggle properly)
    const clickHandlers: ((e: Event) => void)[] = [];

    if (ScrollTrigger.isTouch) {
      elements.forEach((container) => {
        if (!container) return;

        container.classList.remove("what-noTouch");

        const handler = () => handleClick(container);
        clickHandlers.push(handler);

        container.addEventListener("click", handler);
      });
    }

    // 👉 DESKTOP ANIMATION (gsap-trial)
    elements.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      elements.forEach((container, i) => {
        if (container && clickHandlers[i]) {
          container.removeEventListener("click", clickHandlers[i]);
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* 🔥 CARD 1 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>FULL STACK DEVELOPMENT</h3>

              <h4>Description</h4>
              <p>
                I build scalable full-stack applications using MERN, Django, and Laravel.
                Focus on performance, clean UI, and real-world problem solving.
              </p>

              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Express</div>
                <div className="what-tags">Django</div>
                <div className="what-tags">Laravel</div>
                <div className="what-tags">MySQL</div>
              </div>
            </div>
          </div>

          {/* 🔥 CARD 2 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>UI / UX & INTERACTIVE DESIGN</h3>

              <h4>Description</h4>
              <p>
                I design modern, clean and animated UI with focus on user experience,
                smooth interactions, and responsive layouts.
              </p>

              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Figma</div>
                <div className="what-tags">gsap-trial</div>
                <div className="what-tags">Three.js</div>
                <div className="what-tags">Framer Motion</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Tailwind</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

// 👉 FIXED CLICK FUNCTION
function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");

  if (!container.parentElement) return;

  const siblings = Array.from(container.parentElement.children);

  siblings.forEach((sib) => {
    if (sib !== container) {
      sib.classList.remove("what-content-active");
      sib.classList.add("what-sibling");
    } else {
      sib.classList.remove("what-sibling");
    }
  });
}