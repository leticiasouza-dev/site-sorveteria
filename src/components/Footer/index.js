import React from "react";
import './style.css'

function Footer(){
    return(
        <footer>
            <div className="inforFooter">
                <img src="/assets/logo.png" alt="logo"/>

                <article>
                    <h3>Endereço</h3>
                    <p>Av. Bernadinho de Campo, 98 São Paulo, SP 12345-678</p>
                </article>

                <article>
                    <h3>Contato</h3>
                    <p>Info@meusite.com</p>
                    <p>Tel: (11) 34567890</p>
                </article>

                <article>
                    <h3>Horários</h3>
                    <span>Abertos todos os dias</span>
                    <p>10:00 - 22:00</p>
                </article>

                
                
            </div>
            <div>
                <p className="descricao">Gelateria. Orgulhosamente desenvolvido por Letícia Souza</p>
            </div>
        </footer>
    )
}

export default Footer;