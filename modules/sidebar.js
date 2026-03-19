import './sidebar.css'
export default function Sidebar({ children }) {
    return (
        <>
            <div className="sidebar">
                <a href="/employee">Employee</a>
                <a href="/project">Projects</a>
                <a href="/skill">Skills</a>
                <a href="/department">Departments</a>
            </div>

            <div className="main-content">
                {children}
            </div>
        </>
    )
}