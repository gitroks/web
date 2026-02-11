function Education(): React.JSX.Element {
  return (
    <section className="education-section">
      <div className="container">
        <h1 className="section-title">Education</h1>
        <div className="education-grid education-timeline">
          <div className="education-card">
            <h3>Master of Science (M.S. in MIS)</h3>
            <p className="institution">Uniersity of Arizona</p>
            <p className="description">
              Some relevant courses include Software Engineering, Data Mining,
              Enterprise Data Management, Business Intelligence, Big Data Technologies,
              Data Visualization, System Analysis & Design, and Project Management.
            </p>
            <p className="concentration">
              Concentration in Business Intelligence and Business Analytics
            </p>
          </div>
          <div className="education-card">
            <h3>Bachelor of Technology (B.Tech. in CSE)</h3>
            <p className="institution">National Institute of Technology, Durgapur</p>
            <p className="achievement">
              Graduated in First Class with distinction (Honors)
            </p>
            <p className="description">
              Relevant coursework includes Algorithms Analysis & Design, Data Structures,
              Machine Learning, Artificial Intelligence, Theory of Computation,
              Compiler Design, Digital Image Processing, Computer Networks
            </p>
            <p className="thesis">
              Undergraduate thesis on Optimization of Power Consumption in Wireless
              Body Area Networks (WBAN)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
