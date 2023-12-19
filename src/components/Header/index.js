import React from "react";
import './style.css'

function Header(){
    return(
        <header>
            <img src="/assets/logo.png" alt=""/>

            <hr></hr>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sabores</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;