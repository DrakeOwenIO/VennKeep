import React from "react";
import {Link} from "react-router-dom";
import "./styles/navbar.css"

function Navbar() {
    return <nav className="navbar bg-dark">
        <h4><Link className="link" to="/new">New Item</Link></h4>
        <h4><Link className="link" to="/edit">Edit Item</Link></h4>
        <h4><Link className="link" to="/reporting">Reporting</Link></h4>
    </nav>
}

export default Navbar;