import './sidebar.css'

export default async function Sidebar({ children }) {


    return (
        <>
            <div className="sidebar">
                <a href="/employee">Employee</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="main-content">
                {children}
            </div>
        </>
    )
}