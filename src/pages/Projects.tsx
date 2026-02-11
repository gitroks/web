import { type Project } from '../types/projects'

function Projects(): React.JSX.Element {
  const projects: readonly Project[] = [
    {
      id: '7',
      title: 'COVID19-Preconditions',
      description:
        'Analysis of preconditions and factors associated with COVID-19 outcomes.',
      githubUrl: 'https://github.com/gitroks/COVID19-Preconditions',
    },
    {
      id: '1',
      title: 'Diabetic-Readmission-Prediction',
      description:
        'Predicting the readmission of Diabetic patients using Machine Learning based on various factors.',
      githubUrl: 'https://github.com/gitroks/Diabetic-Readmission-Prediction',
    },
    {
      id: '2',
      title: 'Abalone-Age-Prediction',
      description:
        'R Markdown notebook to predict age of abalone from physical measurements.',
      githubUrl: 'https://github.com/gitroks/Abalone-Age-Prediction',
    },
    {
      id: '3',
      title: 'Pneumonia-Detection',
      description:
        'Detect Pneumonia from X-ray images of patients from the trained Convoluted Neural Network using Keras.',
      githubUrl: 'https://github.com/gitroks/Pneumonia-Detection',
    },
    {
      id: '4',
      title: 'Wine-Quality-Analysis',
      description: 'Analyzing contents of Wine and assessing quality.',
      githubUrl: 'https://github.com/gitroks/Wine-Quality-Analysis',
    },
    {
      id: '5',
      title: 'Iris_EDA',
      description: 'Exploratory Data Analysis on Iris dataset.',
      githubUrl: 'https://github.com/gitroks/Iris_EDA',
    },
    {
      id: '6',
      title: 'reactPortfolio',
      description: 'Portfolio website template built using React, HTML and CSS.',
    },
  ]

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">
          Here are some of the projects I've worked on
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.technologies !== undefined && project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {((project.githubUrl ?? '') !== '' || (project.liveUrl ?? '') !== '') && (
                <div className="project-links">
                  {(project.githubUrl ?? '') !== '' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-link-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.5 6.8 9.9.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.7.1-.6.3-1 .6-1.2-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.7 1 2.8 0 3.7-2.3 4.5-4.5 4.8.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5 4-1.4 6.8-5.3 6.8-9.9C22 6.6 17.5 2 12 2Z" />
                        </svg>
                      </span>
                      GitHub
                    </a>
                  )}
                  {(project.liveUrl ?? '') !== '' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
