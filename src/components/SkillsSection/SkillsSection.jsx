import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./SkillsSection.css";
import { toPersianDigits } from "../../utils/toPersianDigits";
import { SkillIcons, skillsData } from "../../constant";



const SkillsSection = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  // تابع برای گرفتن کامپوننت ایکون
  const getSkillIcon = (skillName) => {
    const IconComponent = SkillIcons[skillName];
    return IconComponent ? (
      <IconComponent />
    ) : (
      <div className="default-icon">⚙️</div>
    );
  };

  return (
    <motion.section
      ref={ref}
      className="skills-section"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        مهارت‌های فنی
      </motion.h2>

      <div className="skills-grid-container">
        {skillsData.map((categoryData, categoryIndex) => (
          <motion.div
            key={categoryData.category}
            className="skill-category-card"
            variants={itemVariants}
            custom={categoryIndex}
          >
            <motion.h3 className="category-title" whileHover={{ scale: 1.02 }}>
              {categoryData.category}
            </motion.h3>

            <div className="skills-list">
              {categoryData.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  custom={skillIndex}
                >
                  <div className="skill-header">
                    <div className="skill-info">
                      <div className="skill-icon-wrapper">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <motion.span
                      className="skill-percent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + skillIndex * 0.1 }}
                    >
                      {toPersianDigits(skill.level)}%
                    </motion.span>
                  </div>

                  <div className="skill-progress-container">
                    <motion.div
                      className="skill-progress-bar"
                      variants={progressVariants}
                      custom={skill.level}
                      style={{
                        backgroundColor: skill.color,
                      }}
                      whileInView="visible"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
