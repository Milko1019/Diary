import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="topNavBar">
                        <Link className="navbar-brand text-center" to="/">Dear Diary</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" id="botNavBar">
                <div className="coallapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  );
}

export default Nav;