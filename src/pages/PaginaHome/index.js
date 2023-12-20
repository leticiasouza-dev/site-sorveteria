import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css'

function PaginaHome (){
    return(
        <>
        <Header />
        <main>
            <section className="sessaoBanner">
                <h1>Sorvete Artesanal</h1>
            </section>

            <section className="sessao-nossos_sabores">
                <img src="/assets/banner-sabores.jpg" alt=""/>

                <article>
                    <h3>Nossos sabores</h3>
                    <span>Novos e deliciosos!</span>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem 
                        nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável 
                        ao mesmo tempo!
                    </p>
                </article>
            </section>
                
            <section className="sessaoSorvetes">
                <article>
                    <h3>Nossos eventos</h3>
                    <span>Delicias com sorvete!</span>

                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores 
                        sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </article>

                <img src="/assets/eventos-image.jpg" alt=""/>

            </section>

            <section className="sessaoSobre">
                <img src="/assets/sobre-image.jpg" alt=""/>

                <article>
                    <h3>Sobre nós</h3>
                    <span>Alegria em cada conquista!</span>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	
                        nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </article>

            </section>
        </main>
        
        <Footer />
        </>

    )
}

export default PaginaHome;