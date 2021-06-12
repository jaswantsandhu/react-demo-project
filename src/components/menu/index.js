import React from "react";
import { Link } from "react-router-dom";

export default function Menu()
    {
        return <div className="application-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </div>
    }