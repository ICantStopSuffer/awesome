import './sidebar.css'
export default function Sidebar({ children }) {
    return (
        <>
            <div className="sidebar">
                <a href="/employee">Employee</a>
                <a href="/projects">Projects</a>
                <a href="/skills">Skills</a>
                <a href="/departments">Departments</a>
            </div>

            <div className="main-content">
                {children}
            </div>
        </>
    )
}