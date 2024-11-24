import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      {/*  */}
      <div className="Header">
        <img className="img1" src="../src/assets/Group 177.png" alt="" />
        <div>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Content">Content</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Ducument">Ducument</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <NavLink to="/Login">Login</NavLink>
          </button>
          <button>
            {" "}
            <NavLink to="/Signinn">Signinn</NavLink>{" "}
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;
