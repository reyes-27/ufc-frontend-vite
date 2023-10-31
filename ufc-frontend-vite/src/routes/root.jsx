import { Outlet, Link } from "react-router-dom";
import UfcLogo from "../assets/ufc-logo.png/";

export default function Root() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: 60 + "px",}}>
          <div className="container-fluid" style={{justifyContent: "space-around",}}>

              <Link to="/events/" className="nav-link" style={{fontSize: 20+ "px", margin: 20 + "px",}}>Events</Link>

              <Link to="/feed/" className="nav-brand"><img src={UfcLogo} alt="" style={{width: 61 + "px",}} /></Link>

              <Link to="/rankings/" className="nav-link" style={{fontSize: 20+ "px", margin: 20 + "px",}}>Rankings</Link>

          </div>
        </nav>
      </>
    );
  }