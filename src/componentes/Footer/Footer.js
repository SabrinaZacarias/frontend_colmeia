import React from 'react'
import Aside from '../Aside/Aside'
import logo from './img/logobco.png'
import pin from './img/pin.png'
import mail from './img/mail.png'
import phone from './img/phone.png'
import './Footer.css'

function Footer (){
    return(
        <footer className="footer">
        <section id="section--responsivo">
            <div id="section--texto">
                <img id="logo-footer" src={logo}/>
                <h5>
                    Por que Colmeia?
                 </h5>
                <p>
                    Com o propósito de ajudar o seu público recebeu o   nome   de   Colmeia fazendo   alusão   as   abelhas,   que   trabalhando  em  equipe  para  um  bem  comum  constroem  um  ecossistema  e    uma  rede  solidária  bem  consistente. E  assim  também  incentivando  a  propagar  uma  mensagem  para  a  sociedade de trabalho em equipe em prol de um bem maior.
                </p>
            </div>
            <div id="section--infos">
                <div className="icones">
                    <img src={pin}/>
                    <article>
                        <p>Avenida Paulista, 1374</p>
                        <p>Bela Vista - São Paulo</p>
                    </article>
                    
                </div>
                <div className="icones">
                    <img  src={mail}/>
                    <p>contato@wearecolmeia.com.br</p>
                </div>
                <div className="icones">
                    <img src={phone}/>
                    <p>(11)1234-5678 | (11)98765-4321</p>
                </div>
            </div>
            </section>
            <Aside/>

        </footer>
    )
}

export default Footer