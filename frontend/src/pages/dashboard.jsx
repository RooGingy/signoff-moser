const stats = [
    { id: 'students', label: 'Total students', value: '127', helper: 'Enrolled this term' },
    { id: 'pending', label: 'Pending check-offs', value: '23', helper: 'Awaiting review' },
    { id: 'active', label: 'Active labs', value: '5', helper: '2 due this week' },
    { id: 'pass-rate', label: 'Pass rate', value: '89%', helper: '+3% vs. last lab' },
]

const activity = [
    { id: 1, label: 'Sarah Chen • Lab 1 Checkpoint 3 PASSED', time: '2 minutes ago', tone: 'pass' },
    { id: 2, label: 'Mike Johnson • Lab 2 Checkpoint 1 RETURNED', time: '8 minutes ago', tone: 'return' },
    { id: 3, label: 'Alex Kim submitted Lab 1 Checkpoint 4', time: '15 minutes ago', tone: 'info' },
    { id: 4, label: 'Emma Davis completed Lab 1 (all checkpoints passed)', time: '32 minutes ago', tone: 'pass' },
]

const quickActions = [
    { id: 'review', label: 'Review pending submissions', description: 'View groups waiting for a check-off', icon: '📝' },
    { id: 'create', label: 'Create new lab assignment', description: 'Draft checkpoints and scoring rubric', icon: '🧪' },
    { id: 'schedule', label: 'View lab schedule', description: 'See upcoming sessions by location', icon: '🗓️' },
    { id: 'bulk', label: 'Bulk check-off tool', description: 'Apply an outcome to multiple groups', icon: '⚡' },
]

const schedule = [
    { id: 'session-1', time: '10:00 AM', title: 'Lab 1 Check-offs', meta: 'Room CS-201 • 8 students pending', status: 'In progress' },
    { id: 'session-2', time: '1:30 PM', title: 'Lab 2 Check-offs', meta: 'Room CS-205 • 15 students pending', status: 'Upcoming' },
    { id: 'session-3', time: '3:00 PM', title: 'Office Hours — Lab Help', meta: 'Room CS-101 • Open session', status: 'Scheduled' },
]

export default function DashboardPage() {
    return (
        <main className="dash-shell">
            <header className="dash-header">
                <div>
                    <p className="dash-eyebrow">Today&apos;s overview</p>
                    <h1 className="dash-title">CS Lab Dashboard</h1>
                    <p className="dash-subtitle">Track group progress and move quickly between check-off tasks.</p>
                </div>
                <button type="button" className="dash-refresh" onClick={() => alert('Refresh data')}>
                    Refresh data
                </button>
            </header>

            <section className="dash-stats" aria-label="Summary statistics">
                {stats.map((item) => (
                    <article key={item.id} className="dash-card dash-card-stat">
                        <p className="dash-card-label">{item.label}</p>
                        <p className="dash-card-value">{item.value}</p>
                        <p className="dash-card-helper">{item.helper}</p>
                    </article>
                ))}
            </section>

            <section className="dash-main">
                <article className="dash-panel dash-panel-wide" aria-labelledby="dash-activity">
                    <header className="dash-panel-header">
                        <div>
                            <h2 id="dash-activity" className="dash-panel-title">
                                Recent check-off activity
                            </h2>
                            <p className="dash-panel-subtitle">Latest submissions from students and groups.</p>
                        </div>
                        <button type="button" className="dash-panel-button" onClick={() => alert('Open activity log')}>
                            View all
                        </button>
                    </header>
                    <ul className="dash-activity">
                        {activity.map((item) => (
                            <li key={item.id} className={`dash-activity-row dash-activity-${item.tone}`}>
                                <span aria-hidden="true" className="dash-activity-indicator" />
                                <div>
                                    <p className="dash-activity-label">{item.label}</p>
                                    <p className="dash-activity-time">{item.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="dash-panel" aria-labelledby="dash-actions">
                    <header className="dash-panel-header">
                        <div>
                            <h2 id="dash-actions" className="dash-panel-title">
                                Quick actions
                            </h2>
                            <p className="dash-panel-subtitle">Jump straight into the most common workflows.</p>
                        </div>
                    </header>
                    <ul className="dash-actions">
                        {quickActions.map((item) => (
                            <li key={item.id}>
                                <button type="button" className="dash-action" onClick={() => alert(item.label)}>
                                    <span className="dash-action-icon" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    <span>
                                        <span className="dash-action-label">{item.label}</span>
                                        <span className="dash-action-helper">{item.description}</span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="dash-panel" aria-labelledby="dash-schedule">
                <header className="dash-panel-header">
                    <div>
                        <h2 id="dash-schedule" className="dash-panel-title">
                            Today&apos;s lab sessions
                        </h2>
                        <p className="dash-panel-subtitle">Scheduled check-offs and office hours.</p>
                    </div>
                </header>
                <ul className="dash-schedule">
                    {schedule.map((item) => (
                        <li key={item.id} className="dash-schedule-row">
                            <div className="dash-schedule-time">
                                <span className="dash-schedule-hour">{item.time.split(' ')[0]}</span>
                                <span className="dash-schedule-meridiem">{item.time.split(' ')[1]}</span>
                            </div>
                            <div className="dash-schedule-details">
                                <p className="dash-schedule-title">{item.title}</p>
                                <p className="dash-schedule-meta">{item.meta}</p>
                            </div>
                            <span className="dash-schedule-status">{item.status}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
