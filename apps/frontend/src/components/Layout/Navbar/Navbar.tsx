import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav>
        <div className="navbar-links">
          <NavLink to="/Home" end>
            Home
          </NavLink>
          <NavLink to="/NewAdded">New Added</NavLink>
          <NavLink to="PopBooks">Pop Books</NavLink>
          <NavLink to="Activity">Activity</NavLink>
          <NavLink to="Users">Users</NavLink>
          <NavLink to="SignIn">Sign In</NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
