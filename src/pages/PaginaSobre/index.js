import React from "react";
import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PaginaSobre (){
    return(
        <>
            <Header/>

            <main>
                <section className="sessaoBannerSobre">
                    <h1>A gelateria</h1>
                </section>
                <section className="sessaoSobreNos">
                    <section>
                        <h2>Sobre nós</h2>
                        <span>Nós simplesmente amamos sorvete!</span>

                        <p>
                            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para 
                            os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para 
                            a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                        </p>

                        <p>
                            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar 
                            junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e
                            eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor 
                            atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                        </p>
                    </section>

                    <img src='/assets/sobre-image.jpg' alt=""/>
                    <img src='/assets/sorveteria.jpg' alt=""/>
                </section>
            </main>
            <Footer/>

        </>
    )
}

export default PaginaSobre;