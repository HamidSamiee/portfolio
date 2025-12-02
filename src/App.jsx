import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import pic from "./assets/1758787523721.png";
import Ellipse from "./assets/Ellipse.png";
import linkdin from "./assets/vecteezy_linkedin-png-icon_16716462.png";
import github from "./assets/vecteezy_a-black-github-icon-in-a-circle_65742280.png";
import { projects } from "./constant";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactSection from "./components/ContactSection/ContactSection ";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی لودینگ اولیه
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          HamidSamiee Portfolio
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="portfolio">
      {/* نوار ناوبری */}
      <nav className="navbar">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={pic} alt="" className="" height={"45px"} width={"45px"} />
        </motion.div>
        <ul className="nav-links">
          {["contact", "skills", "projects", "home"].reverse().map((item) => (
            <li key={item}>
              <button
                className={`${activeSection === item ? "active" : ""} `}
                onClick={() => setActiveSection(item)}
              >
                {item === "home" && "خانه"}
                {item === "projects" && "پروژه‌ها"}
                {item === "skills" && "مهارت‌ها"}
                {item === "contact" && "تماس"}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* بخش اصلی */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              className="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-content">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  حمید سمیعی
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  توسعه‌دهنده Front End
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  من یک برنامه‌نویس حرفه‌ای با تخصص در React و Next.js هستم.
                  علاقه‌مند به ایجاد تجربیات کاربری زیبا و عملکردی.
                </motion.p>
                <motion.div
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    className="btn primary"
                    onClick={() => setActiveSection("projects")}
                  >
                    مشاهده پروژه‌ها
                  </button>
                  <button
                    className="btn secondary"
                    onClick={() => setActiveSection("contact")}
                  >
                    تماس با من
                  </button>
                </motion.div>
              </div>
              <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div className="image-placeholder"></div>
              </motion.div>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              className="projects-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2>پروژه‌های من</h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        height={"auto"}
                      />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="technologies">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          مشاهده در گیت‌هاب
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          دموی زنده
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === "skills" && (
            <motion.section
              key="skills"
              className="skills-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skills-grid-layout">
                <SkillsSection />
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            // <motion.section
            //   key="contact"
            //   className="contact-section"
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   exit={{ opacity: 0, y: -20 }}
            //   transition={{ duration: 0.5 }}
            // >
            //   <h2>تماس با من</h2>
            //   <div className="contact-content">
            //     <motion.div
            //       className="contact-info"
            //       initial={{ opacity: 0, x: -50 }}
            //       animate={{ opacity: 1, x: 0 }}
            //       transition={{ delay: 0.2 }}
            //     >
            //       <h3>بیایید با هم صحبت کنیم</h3>
            //       <p>
            //         اگر به همکاری علاقه‌مند هستید یا سوالی دارید، خوشحال می‌شوم
            //         از شما بشنوم.
            //       </p>
            //       <div className="contact-details">
            //         <div className="contact-item">
            //           <span>ایمیل:</span>
            //           <a href="mailto:hamidsmoaser@gmail.com">
            //             hamidsmoaser@gmail.com
            //           </a>
            //         </div>
            //         <div className="contact-item">
            //           <span>گیت‌هاب:</span>
            //           <a
            //             href="https://github.com/HamidSamiee"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //           >
            //             github.com/HamidSamiee
            //           </a>
            //         </div>
            //         <div className="contact-item">
            //           <span>لینکدین:</span>
            //           <a
            //             href="https://linkedin.com/in/hamidsamiee"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //           >
            //             linkedin.com/in/hamidsamiee
            //           </a>
            //         </div>
            //       </div>
            //     </motion.div>
            //     <motion.form
            //       className="contact-form"
            //       initial={{ opacity: 0, x: 50 }}
            //       animate={{ opacity: 1, x: 0 }}
            //       transition={{ delay: 0.4 }}
            //     >
            //       <div className="form-group">
            //         <label htmlFor="name">نام</label>
            //         <input type="text" id="name" required />
            //       </div>
            //       <div className="form-group">
            //         <label htmlFor="email">ایمیل</label>
            //         <input type="email" id="email" required />
            //       </div>
            //       <div className="form-group">
            //         <label htmlFor="message">پیام</label>
            //         <textarea id="message" rows="5" required></textarea>
            //       </div>
            //       <button type="submit" className="btn primary">
            //         ارسال پیام
            //       </button>
            //     </motion.form>
            //   </div>
            // </motion.section>
            <ContactSection />
          )}
        </AnimatePresence>
      </main>

      {/* فوتر */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} HamidSamiee.</p>
        <div className="social-links">
          <a
            href="https://facebook.com/HamidSamiee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Ellipse}
              alt=""
              className="social_icons"
              width={"24px"}
              height={"24px"}
            />
          </a>
          <a
            href="https://github.com/HamidSamiee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt=""
              className="social_icons"
              width={"24px"}
              height={"24px"}
            />
          </a>
          <a
            href="https://linkedin.com/in/hamidsamiee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkdin}
              alt=""
              className="social_icons"
              width={"24px"}
              height={"24px"}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
