import { useMemo, useState } from 'react'

const labs = [
    {
        id: 'lab-01',
        name: 'Lab 1 • Command Line Scavenger Hunt',
        module: 'Module 1: Orientation',
        due: 'Jan 24',
        status: 'Open',
        summary: 'Students practice navigating the terminal and turning in a transcript of commands.',
        checkpoints: 3,
    },
    {
        id: 'lab-02',
        name: 'Lab 2 • Git Collaboration',
        module: 'Module 2: Version Control',
        due: 'Jan 31',
        status: 'Opens soon',
        summary: 'Teams resolve merge conflicts and submit a pull request for review.',
        checkpoints: 4,
    },
    {
        id: 'lab-03',
        name: 'Lab 3 • Data Structures',
        module: 'Module 3: Arrays & Maps',
        due: 'Feb 7',
        status: 'Archived',
        summary: 'Autograded warmup followed by instructor check-off of coding style.',
        checkpoints: 5,
    },
]

export default function LabSelector() {
    const [query, setQuery] = useState('')
    const [showArchived, setShowArchived] = useState(false)

    const filteredLabs = useMemo(() => {
        return labs.filter((lab) => {
            if (!showArchived && lab.status === 'Archived') return false
            if (!query.trim()) return true
            const normalized = query.trim().toLowerCase()
            return lab.name.toLowerCase().includes(normalized) || lab.module.toLowerCase().includes(normalized)
        })
    }, [query, showArchived])

    return (
        <main className="lab-shell">
            <header className="lab-header">
                <div>
                    <p className="lab-eyebrow">Current Course</p>
                    <h1 className="lab-title">CS 101 – Introduction to Programming Labs</h1>
                    <p className="lab-subtitle">Select a lab to view active groups, checkpoints, and recent activity.</p>
                </div>
                <div className="lab-controls" role="search">
                    <label className="lab-search-label" htmlFor="lab-query">
                        Search labs
                    </label>
                    <input
                        id="lab-query"
                        type="search"
                        className="lab-search"
                        placeholder="Filter by name or module"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <label className="lab-toggle">
                        <input
                            type="checkbox"
                            checked={showArchived}
                            onChange={(event) => setShowArchived(event.target.checked)}
                        />
                        Include archived labs
                    </label>
                </div>
            </header>

            <section aria-live="polite" className="lab-list">
                {filteredLabs.length === 0 ? (
                    <p className="lab-empty">No labs match the current filters.</p>
                ) : (
                    filteredLabs.map((lab) => (
                        <article key={lab.id} className="lab-card">
                            <header className="lab-card-header">
                                <div>
                                    <p className="lab-card-module">{lab.module}</p>
                                    <h2 className="lab-card-title">{lab.name}</h2>
                                </div>
                                <span className={`lab-card-status lab-card-status-${lab.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {lab.status}
                                </span>
                            </header>

                            <p className="lab-card-summary">{lab.summary}</p>

                            <dl className="lab-card-meta">
                                <div>
                                    <dt>Checkpoints</dt>
                                    <dd>{lab.checkpoints}</dd>
                                </div>
                                <div>
                                    <dt>Next due</dt>
                                    <dd>{lab.due}</dd>
                                </div>
                            </dl>

                            <footer className="lab-card-actions">
                                <button type="button" className="lab-card-primary" onClick={() => alert(`Open ${lab.name}`)}>
                                    Open lab dashboard
                                </button>
                                <button type="button" className="lab-card-secondary" onClick={() => alert(`View rubric for ${lab.name}`)}>
                                    View rubric
                                </button>
                            </footer>
                        </article>
                    ))
                )}
            </section>
        </main>
    )
}
