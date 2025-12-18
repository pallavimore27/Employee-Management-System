import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/employees" className="nav-logo">
          Employee Management
        </Link>

        {user && (
          <div className="nav-menu">
            <Link to="/employees" className="nav-link">
              Employees
            </Link>
            <Link to="/search" className="nav-link">
              Search
            </Link>

            <span className="nav-user">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
