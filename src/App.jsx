import { useState, useEffect, useCallback, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref برای منو
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // شبیه‌سازی لودینگ اولیه
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // جلوگیری از اسکرول وقتی منو بازه
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isMenuOpen]);

  // هندلر کلیک ناوبری
  const handleNavClick = useCallback((section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  }, []);

  // هندلر کلیک خارج از منو
  useEffect(() => {
    const handleClickOutside = (event) => {
      // اگر منو باز نباشه، کاری نکن
      if (!isMenuOpen) return;

      // اگر کلیک روی همبرگر بود، کاری نکن (همبرگر خودش handle می‌کنه)
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }

      // اگر کلیک روی منو بود، کاری نکن
      if (menuRef.current && menuRef.current.contains(event.target)) {
        return;
      }

      // اگر کلیک خارج از منو بود، منو رو ببند
      setIsMenuOpen(false);
    };

    // اضافه کردن event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // برای موبایل

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // هندلر کلیک همبرگر
  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="بستن منو"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsMenuOpen(false);
            }
          }}
        />
      )}
      {/* نوار ناوبری */}
      <nav className="navbar">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={pic} alt="Logo" height="45" width="45" />
        </motion.div>

        {/* منوی همبرگری برای موبایل */}
        <button
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={handleHamburgerClick}
          aria-label="منو"
          type="button"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* منوی اصلی */}
        <ul
          ref={menuRef}
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          {["contact", "skills", "projects", "home"].reverse().map((item) => (
            <li key={item}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => handleNavClick(item)}
                type="button"
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
      <main className={`main-content ${isMenuOpen ? "blurred" : ""}`}>
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
                    onClick={() => handleNavClick("projects")}
                    type="button"
                  >
                    مشاهده پروژه‌ها
                  </button>
                  <button
                    className="btn secondary"
                    onClick={() => handleNavClick("contact")}
                    type="button"
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
                        height="auto"
                        loading="lazy"
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

          {activeSection === "contact" && <ContactSection />}
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
            aria-label="فیسبوک"
          >
            <img
              src={Ellipse}
              alt="Facebook"
              className="social_icons"
              width="24"
              height="24"
            />
          </a>
          <a
            href="https://github.com/HamidSamiee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="گیت‌هاب"
          >
            <img
              src={github}
              alt="GitHub"
              className="social_icons"
              width="24"
              height="24"
            />
          </a>
          <a
            href="https://linkedin.com/in/hamidsamiee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="لینکدین"
          >
            <img
              src={linkdin}
              alt="LinkedIn"
              className="social_icons"
              width="24"
              height="24"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
