import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

const milestoneCards = [
  {
    title: 'Profiles and authentication',
    copy: 'Create a secure foundation for athletes, coaches, and teammates.',
  },
  {
    title: 'Activity logging',
    copy: 'Capture workouts, recovery, and progress in one structured flow.',
  },
  {
    title: 'Leaderboard and teams',
    copy: 'Compare performance across teams with competitive visibility.',
  },
  {
    title: 'Workout suggestions',
    copy: 'Surface personalized recommendations powered by Mongoose-backed data.',
  },
]

const trackerFacts = [
  { label: 'Frontend', value: 'React 19 + Vite' },
  { label: 'Backend', value: 'Express + TypeScript' },
  { label: 'Data', value: 'MongoDB on port 27017' },
]

function OverviewPage() {
  return (
    <section className="panel-grid">
      {milestoneCards.map((card) => (
        <article className="feature-card" key={card.title}>
          <p className="card-kicker">Core workflow</p>
          <h2>{card.title}</h2>
          <p>{card.copy}</p>
        </article>
      ))}
    </section>
  )
}

function TrainingPage() {
  return (
    <section className="detail-card">
      <p className="card-kicker">Training flow</p>
      <h2>Track every session without losing the story behind it.</h2>
      <p>
        The backend can evolve around Mongoose models for sessions, sets,
        personal records, and recovery notes while the frontend stays focused on
        fast input and clear feedback.
      </p>
    </section>
  )
}

function TeamsPage() {
  return (
    <section className="detail-card">
      <p className="card-kicker">Team mode</p>
      <h2>Build shared spaces that keep athletes accountable.</h2>
      <p>
        The initial structure leaves room for roster management, shared goals,
        and team-based leaderboard views.
      </p>
    </section>
  )
}

function LeaderboardPage() {
  return (
    <section className="detail-card">
      <p className="card-kicker">Competition</p>
      <h2>Rank progress with a leaderboard that feels alive.</h2>
      <p>
        The data tier is ready for aggregated results, streaks, and points that
        can be surfaced to users and teams.
      </p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="hero-banner">
        <div className="hero-copy">
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Modern fitness tracking for athletes, teams, and coaches.</h1>
          <p className="hero-text">
            This scaffold sets up the React 19 presentation tier, the Express
            logic tier, and the MongoDB-backed data tier on the required ports.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light btn-lg" to="/">
              Overview
            </Link>
            <Link className="btn btn-outline-light btn-lg" to="/teams">
              Team tools
            </Link>
          </div>
        </div>

        <aside className="status-card">
          <p className="card-kicker">Ports</p>
          <ul className="status-list">
            {trackerFacts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <nav className="top-nav">
        <Link to="/">Overview</Link>
        <Link to="/training">Training</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>

      <main className="content-shell">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App