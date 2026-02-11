import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

type TerminalLine = {
  id: string
  kind: 'input' | 'output'
  node: React.ReactNode
}

function About(): React.JSX.Element {
  const [showTerminal, setShowTerminal] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [terminalMode, setTerminalMode] = useState<'normal' | 'collapsed' | 'full'>(
    'normal'
  )
  const outputRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()

  const introLines = useMemo<TerminalLine[]>(
    () => [
      {
        id: 'intro-1',
        kind: 'output',
        node: (
          <span>
            <span className="terminal-accent">Rohith</span>&apos;s workspace.
          </span>
        ),
      },
      {
        id: 'intro-2',
        kind: 'output',
        node: (
          <span>
            Role: <span className="terminal-accent">Software Engineer</span>
          </span>
        ),
      },
      {
        id: 'intro-3',
        kind: 'output',
        node: (
          <span>
            Focus: web, mobile, and services. Building reliable, human-centered
            products.
          </span>
        ),
      },
      {
        id: 'intro-4',
        kind: 'output',
        node: (
          <span>Stack: React · Node.js · Kafka · Android · k8s.</span>
        ),
      },
      {
        id: 'intro-5',
        kind: 'output',
        node: (
          <span>
            Currently exploring developer tooling, performance, and AI-assisted
            workflows.
          </span>
        ),
      },
      {
        id: 'intro-6',
        kind: 'output',
        node: (
          <div className="terminal-help-callout">
            <span>
              Type <code>--help</code> for commands.
            </span>
          </div>
        ),
      },
    ],
    []
  )

  const [history, setHistory] = useState<TerminalLine[]>(introLines)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history, showTerminal])

  useEffect(() => {
    if (showTerminal) {
      inputRef.current?.focus()
    }
  }, [showTerminal])

  const appendLines = (lines: TerminalLine[]): void => {
    setHistory((prev) => [...prev, ...lines])
  }

  const handleCommand = (raw: string): void => {
    const command = raw.trim()
    if (!command) {
      return
    }

    const lower = command.toLowerCase()
    const outputLines: TerminalLine[] = []
    let routeTo: string | null = null

    if (lower === '--help' || lower === 'help') {
      outputLines.push({
        id: `help-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-help">
            <p>Available commands:</p>
            <p>
              <code>bio</code> — quick bio summary
            </p>
            <p>
              <code>about</code> — short overview
            </p>
            <p>
              <code>projects</code> — list recent work and open Projects page
            </p>
            <p>
              <code>skills</code> — core technologies and open Skills page
            </p>
            <p>
              <code>experience</code> — work history and open Experience page
            </p>
            <p>
              <code>education</code> — academic background and open Education page
            </p>
            <p>
              <code>contact</code> — ways to reach me and open Contact page
            </p>
            <p>
              <code>site</code> — switch to regular site view
            </p>
            <p>
              <code>tour</code> — guided tour of the portfolio
            </p>
            <p>
              <code>stack</code> — current stack snapshot
            </p>
            <p>
              <code>system</code> — system info box
            </p>
            <p>
              <code>clear</code> — reset the terminal
            </p>
          </div>
        ),
      })
    } else if (lower === 'bio') {
      outputLines.push({
        id: `bio-${Date.now()}`,
        kind: 'output',
        node: (
          <span>
            Rohith Sajja is a Software Engineer focused on building
            customer-facing applications, internal tools, and scalable services
            that improve store fulfillment experiences.
          </span>
        ),
      })
    } else if (lower === 'projects') {
      outputLines.push({
        id: `projects-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Recent work highlights:</p>
            <ul>
              <li>Diabetic-Readmission-Prediction</li>
              <li>Abalone-Age-Prediction</li>
              <li>Pneumonia-Detection</li>
              <li>Wine-Quality-Analysis</li>
              <li>Iris_EDA</li>
              <li>reactPortfolio</li>
            </ul>
            <p>Opening Projects page...</p>
          </div>
        ),
      })
      routeTo = '/projects'
    } else if (lower === 'skills') {
      outputLines.push({
        id: `skills-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Core stack:</p>
            <ul>
              <li>Languages: Python, JavaScript/TypeScript, Java, R, SQL</li>
              <li>Frameworks: React, Node.js, Express</li>
              <li>Data: ML, BI, Visualization, Big Data</li>
              <li>Tools: Git, Docker, AWS, Microservices</li>
            </ul>
            <p>Opening Skills page...</p>
          </div>
        ),
      })
      routeTo = '/skills'
    } else if (lower === 'experience') {
      outputLines.push({
        id: `experience-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Recent experience:</p>
            <ul>
              <li>Senior Software Engineer — Nordstrom</li>
              <li>Graduate Research Assistant — Dept. of EEB</li>
              <li>Business Intelligence Analyst — Eller College</li>
              <li>Web Developer — CCA</li>
            </ul>
            <p>Opening Experience page...</p>
          </div>
        ),
      })
      routeTo = '/experience'
    } else if (lower === 'education') {
      outputLines.push({
        id: `education-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Education summary:</p>
            <ul>
              <li>M.S. in MIS — University of Arizona</li>
              <li>B.Tech. in CSE — NIT Durgapur</li>
            </ul>
            <p>Opening Education page...</p>
          </div>
        ),
      })
      routeTo = '/education'
    } else if (lower === 'contact') {
      outputLines.push({
        id: `contact-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Contact channels:</p>
            <ul>
              <li>Email: beards.venue-5y@icloud.com</li>
              <li>Website: rsajja.dev</li>
              <li>GitHub: github.com/gitroks</li>
              <li>LinkedIn: linkedin.com/in/rohithsajja</li>
              <li>Google Scholar: scholar.google.com/citations?user=ml4b2TMAAAAJ</li>
            </ul>
            <p>Opening Contact page...</p>
          </div>
        ),
      })
      routeTo = '/contact'
    } else if (lower === 'tour') {
      outputLines.push({
        id: `tour-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Guided tour:</p>
            <ul>
              <li>
                <code>projects</code> — see featured builds
              </li>
              <li>
                <code>experience</code> — timeline of roles
              </li>
              <li>
                <code>skills</code> — core tech stack
              </li>
              <li>
                <code>contact</code> — reach out
              </li>
            </ul>
          </div>
        ),
      })
    } else if (lower === 'stack') {
      outputLines.push({
        id: `stack-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-grid">
            <p>Current stack:</p>
            <ul>
              <li>Frontend: React, TypeScript</li>
              <li>Mobile: Android, React Native</li>
              <li>Backend: Node.js, Kafka</li>
              <li>Infra: Kubernetes, Docker, Terraform, AWS</li>
            </ul>
          </div>
        ),
      })
    } else if (lower === 'system' || lower === 'sysinfo') {
      outputLines.push({
        id: `system-${Date.now()}`,
        kind: 'output',
        node: (
          <div className="terminal-card">
            <p className="terminal-card-title">system info</p>
            <p>stack: React · Node.js · Kafka · Android · k8s</p>
            <p>status: open to interesting problems</p>
          </div>
        ),
      })
    } else if (lower === 'about') {
      outputLines.push({
        id: `about-${Date.now()}`,
        kind: 'output',
        node: (
          <span>
            Full-stack engineer with a focus on building dependable products
            across web, mobile, and backend systems.
          </span>
        ),
      })
    } else if (lower === 'site') {
      setShowTerminal(false)
      outputLines.push({
        id: `site-${Date.now()}`,
        kind: 'output',
        node: (
          <span>
            Switched to regular site view. Use the button above to reopen the
            terminal.
          </span>
        ),
      })
    } else if (lower === 'clear') {
      setHistory(introLines)
      return
    } else {
      outputLines.push({
        id: `unknown-${Date.now()}`,
        kind: 'output',
        node: (
          <span>
            Command not found. Type <code>--help</code> to see available
            commands.
          </span>
        ),
      })
    }

    appendLines(outputLines)

    if (routeTo !== null) {
      setTimeout(() => {
        void navigate(routeTo)
      }, 350)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const command = inputValue
    if (!command.trim()) {
      return
    }

    appendLines([
      {
        id: `input-${Date.now()}`,
        kind: 'input',
        node: <span>{command}</span>,
      },
    ])
    setInputValue('')
    handleCommand(command)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Escape') {
      event.preventDefault()
      setHistory(introLines)
      setInputValue('')
      return
    }

    if (event.key === '?' && inputValue.trim() === '') {
      event.preventDefault()
      appendLines([
        {
          id: `input-${Date.now()}`,
          kind: 'input',
          node: <span>?</span>,
        },
      ])
      handleCommand('--help')
      return
    }
  }

  return (
    <section className="about-section">
      <div className="container">
        <div
          className={`terminal-wrap terminal-mode-${terminalMode}`}
          data-terminal-mode={terminalMode}
        >
          {showTerminal ? (
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-window-controls">
                  <button
                    type="button"
                    className="terminal-control terminal-control-close"
                    aria-label="Close terminal"
                    onClick={() => {
                      setShowTerminal(false)
                      setTerminalMode('normal')
                    }}
                  />
                  <button
                    type="button"
                    className="terminal-control terminal-control-minimize"
                    aria-label={
                      terminalMode === 'collapsed'
                        ? 'Expand terminal'
                        : 'Minimize terminal'
                    }
                    onClick={() =>
                      setTerminalMode((prev) =>
                        prev === 'collapsed' ? 'normal' : 'collapsed'
                      )
                    }
                  />
                  <button
                    type="button"
                    className="terminal-control terminal-control-maximize"
                    aria-label={
                      terminalMode === 'full'
                        ? 'Exit full screen'
                        : 'Maximize terminal'
                    }
                    onClick={() =>
                      setTerminalMode((prev) => (prev === 'full' ? 'normal' : 'full'))
                    }
                  />
                </div>
                <span className="terminal-status">online</span>
              </div>
              {terminalMode !== 'collapsed' && (
                <>
                  <div className="terminal-body" ref={outputRef}>
                    {history.map((line) => (
                      <div
                        key={line.id}
                        className={`terminal-line terminal-line-${line.kind}`}
                      >
                        {line.kind === 'input' ? (
                          <span className="terminal-prompt">
                            visitor@rohith:~$ {line.node}
                          </span>
                        ) : (
                          line.node
                        )}
                      </div>
                    ))}
                  </div>
                  <form className="terminal-input-row" onSubmit={handleSubmit}>
                    <span className="terminal-prompt">visitor@rohith:~$</span>
                    <input
                      ref={inputRef}
                      className="terminal-input"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={handleKeyDown}
                      autoComplete="off"
                      spellCheck={false}
                      aria-label="Terminal command input"
                    />
                  </form>
                </>
              )}
            </div>
          ) : null}
          {terminalMode !== 'full' && (
            <div className="terminal-toggle">
              <button
                className="btn btn-secondary btn-compact"
                type="button"
                onClick={() => setShowTerminal((prev) => !prev)}
              >
                {showTerminal ? 'Hide Terminal' : 'Show Terminal'}
              </button>
              <span className="terminal-toggle-text">
                Prefer the regular site? Use the navigation links above.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
