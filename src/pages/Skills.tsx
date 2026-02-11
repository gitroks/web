import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaProjectDiagram,
  FaCubes,
  FaNetworkWired,
  FaGoogle,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiR,
  SiExpress,
  SiKeras,
  SiTensorflow,
} from 'react-icons/si'
import { IconContext } from 'react-icons'
import { type SkillCategory } from '../types/skills'

function Skills(): React.JSX.Element {
  const focusAreas = [
    {
      title: 'Full-stack delivery',
      detail: 'React, Node.js, APIs, UI systems, and production-ready reliability.',
    },
    {
      title: 'Mobile + web',
      detail: 'Android, React Native, and fast, responsive web experiences with Hardware Integration.',
    },
    {
      title: 'Distributed systems',
      detail: 'Event-driven services, Kafka pipelines, and scalable services with Microservices Architecture.',
    },
    {
      title: 'Cloud + DevOps',
      detail: 'Docker, Kubernetes, Terraform, and AWS-based deployments with CI/CD pipelines.',
    },
  ]

  const skillCategories: readonly SkillCategory[] = [
    {
      category: 'Programming Languages',
      skills: [
        { label: 'Python', icon: <FaPython /> },
        { label: 'JavaScript', icon: <FaJsSquare /> },
        { label: 'TypeScript', icon: <SiTypescript /> },
        { label: 'Java', icon: <FaJava /> },
        { label: 'R', icon: <SiR /> },
        { label: 'SQL', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { label: 'React', icon: <FaReact /> },
        { label: 'Node.js', icon: <FaNodeJs /> },
        { label: 'Express', icon: <SiExpress /> },
        { label: 'Keras', icon: <SiKeras /> },
        { label: 'TensorFlow', icon: <SiTensorflow /> },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { label: 'Data Mining', icon: <FaChartBar /> },
        { label: 'Machine Learning', icon: <FaCubes /> },
        { label: 'Business Intelligence', icon: <FaProjectDiagram /> },
        { label: 'Data Visualization', icon: <FaChartLine /> },
        { label: 'Big Data Technologies', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { label: 'Git', icon: <FaGitAlt /> },
        { label: 'Docker', icon: <FaDocker /> },
        { label: 'AWS', icon: <FaAws /> },
        { label: 'BigQuery', icon: <FaGoogle /> },
        { label: 'REST APIs', icon: <FaNetworkWired /> },
        { label: 'Microservices', icon: <FaCubes /> },
      ],
    },
  ]

  return (
    <section className="skills-section">
      <div className="container">
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        <div className="focus-matrix">
          <h2 className="section-title focus-title">Focus Areas</h2>
          <div className="focus-banner">
            {focusAreas.map((item) => (
              <div key={item.title} className="focus-line">
                <span className="focus-label">{item.title}</span>
                <span className="focus-detail">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-divider">
          <span>Core Skills</span>
        </div>
        <IconContext.Provider value={{ size: '16' }}>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.category} className="skill-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill.label} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </section>
  )
}

export default Skills
