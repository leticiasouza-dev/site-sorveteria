import React from "react";
import './style.css'

import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <img src="/assets/logo.png" alt=""/>

            <hr></hr>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link> 
                    </li>
                    <li>
                        <Link to='/sabores'>Sabores</Link> 
                    </li>
                    <li>
                        <Link to='/sobre'>Sobre</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;