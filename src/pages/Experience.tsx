import { type Experience } from '../types/experience'

function Experience(): React.JSX.Element {
  const sections: readonly { title: string; experiences: readonly Experience[] }[] = [
    {
      title: 'Work',
      experiences: [
        {
          title: 'Senior Software Engineer',
          company: 'Nordstrom',
          period: 'February 2021 - Present',
          location: 'Seattle, WA',
          description:
            'Full-stack development with a DevOps mindset: building Node.js services, React experiences, Kafka pipelines, Android apps, and Kubernetes-based deployments.\nArchitected and developed in-house native RFID solutions for inventory management and fulfillment.\nDesigning scalable systems for Store Fulfillment and improving developer velocity and reliability.',
          skills: [
            'Node.js',
            'React',
            'React Native',
            'Android',
            'Kubernetes',
            'Docker',
            'Terraform',
            'AWS',
            'BigQuery',
            'JavaScript',
            'TypeScript',
            'Java',
          ],
        },
        {
          title: 'Graduate Research Assistant',
          company:
            'Department of Ecology & Evolutionary Biology, University of Arizona',
          period: 'Aug 2020 - Dec 2020',
          location: 'Tucson, AZ',
          description:
            'Develop API and scientific application for the Taxonomic & Geographic Name Resolution Service.\nDevelop algorithms, pipelines for efficient handling of Big Data in Biodiversity and Geographic Information Systems.',
          skills: [
            'React',
            'Node.js',
            'R',
            'Python',
            'JavaScript',
            'TypeScript',
            'SQL',
          ],
        },
        {
          title: 'Business Intelligence Analyst',
          company: 'Eller College of Management, University of Arizona',
          period: 'Sep 2019 - Aug 2020',
          location: 'Tucson, AZ',
          description:
            'Research on comprehensive data, and help an entrepreneurial organization turn data into insight.\nWorked with international clients to perform data mining and visualization on extensive large-scale datasets.',
          skills: ['R', 'Python', 'Pandas', 'NumPy', 'scikit-learn'],
        },
        {
          title: 'Web Developer',
          company: 'Center for Cognitive Activities (CCA)',
          period: 'March 2016 - May 2019',
          location: 'Durgapur, India',
          description:
            'Developed mobile applications, websites, and UI/UX mockups for the technical society of NIT Durgapur.\nBuilt trivia and treasure hunt web apps using Ruby and deployed with AWS.',
          skills: ['React', 'JavaScript', 'Adobe Creative', 'Ruby', 'AWS'],
        },
      ],
    },
    {
      title: 'Internships',
      experiences: [
        {
          title: 'Data Analytics and Engineering Intern',
          company: 'ForeOptics',
          period: 'June 2020 - August 2020',
          location: 'Scottsdale, AZ',
          description:
            'Developed data models and algorithms for supply chain analytics.\nBuilt and deployed Node/React/PostgreSQL/Redis apps on Docker + AWS.',
          skills: ['R', 'Python', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'AWS'],
        },
        {
          title: 'Software Engineering Intern',
          company: 'PricewaterhouseCoopers Pvt. Ltd. (PwC)',
          period: 'May 2018 - Jul 2018',
          location: 'Bangalore, India',
          description:
            'Developed web applications and improved operational efficiency for a retail client.\nWorked across SDLC with C#, .NET, SQL Server, and Azure/Microsoft Dynamics 365.',
          skills: ['C#', '.NET', 'SQL Server', 'Azure', 'JavaScript'],
        },
        {
          title: 'Research Software Engineer Intern',
          company:
            'Defence Research and Development Organization (DRDO), MoD, Govt. of India',
          period: 'May 2017 - Jul 2017',
          location: 'Hyderabad, India',
          description:
            'Developed an application gateway for TCP/IP communications.\nPerformed network analysis using Python and NetworkX.',
          skills: ['Python', 'NetworkX', 'TCP/IP', 'C++'],
        },
      ],
    },
    {
      title: 'Volunteering',
      experiences: [
        {
          title: 'Volunteer',
          company: 'National Service Scheme (NSS), Govt. of India',
          period: 'Aug 2015 - May 2019',
          location: 'Durgapur, India',
          description:
            'Focused on community development: taught underprivileged students basic math and science.\nOrganized and supported local awareness programs.',
        },
      ],
    },
  ]

  return (
    <section className="experience-section">
      <div className="container">
        <h1 className="section-title">Experience</h1>
        {sections.map((section) => (
          <div key={section.title} className="experience-section-block">
            <h2 className="section-title experience-section-title">
              {section.title}
            </h2>
            <div className="experience-list experience-timeline">
              {section.experiences.map((exp, index) => (
                <div
                  key={`${section.title}-${index}`}
                  className="experience-card"
                >
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  {(exp.period || exp.location) && (
                    <div className="experience-meta">
                      {exp.period && (
                        <span className="experience-period">{exp.period}</span>
                      )}
                      {exp.location && (
                        <span className="experience-location">{exp.location}</span>
                      )}
                    </div>
                  )}
                  <p className="experience-description">{exp.description}</p>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="experience-skills">
                      <span className="experience-skill-label">Skills</span>
                      <div className="experience-skill-list">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="experience-skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
