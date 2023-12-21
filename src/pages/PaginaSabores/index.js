import React from "react";
import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PaginaSabores(){
    return(
        <>
            <Header />
        
            <main>
                <section className="sessaoBannerSabores">
                    <h1>Nossos Sabores</h1>
                </section>

                <section className="sessaoSaboresSorvete">
                    
                        <h2>SABORES DE SORVETE</h2>
                    
                    

                    <section>
                        <article>
                            <img src="/assets/sabor-oreo.png" alt=""/>

                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </article>

                        <article>
                            <img src="/assets/sabor-pistache.png" alt=""/>

                            <h3>Sorvete Pistache </h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </article>


                        <article>
                            <img src="/assets/sabor-cookies-avela.png" alt=""/>

                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </article>
                    </section>

                    <section>
                        <article>
                            <img src="/assets/sorbet-kiwi.png" alt=""/>

                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </article>

                        <article>
                            <img src="/assets/sorbet-morango.png" alt=""/>

                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </article>

                        <article> 
                            <img src="/assets/sorbet-limao.png" alt=""/>

                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </article>
                    </section>
                    
                </section>
            </main>

            <Footer />
        
        </>
        
    )
}

export default PaginaSabores;