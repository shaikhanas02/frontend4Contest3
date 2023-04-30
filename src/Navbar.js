import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return (
    <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
    </div>
    )
}
export default Nav ;