import './Navbar.css'

const Navbar = () =>{
    const items = ["Home", "Activity", "Search", "Sign in"]

    return (
        <section className = "navbar">
            <nav>
                <ul className="nav-items">
                    {items.map((item) => (
                        <li key={item}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;