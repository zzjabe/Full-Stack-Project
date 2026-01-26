import { NavLink } from "react-router";
import './Navbar.css'

const Navbar = () =>{
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <NavLink to="/Home" end>
                    Home
                </NavLink>
                <NavLink to="/NewAdded">
                    New added
                </NavLink>
                <NavLink to="/PopBooks">
                    Pop books
                </NavLink>
                <NavLink to="/Activity">
                    Activity
                </NavLink>
                <NavLink to="/SignIn">
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;