import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import hireImg from '../../assets/images/hire.svg';
import workImg from '../../assets/images/work.svg';
import './styles.css'



function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo" />
                    <h2>Sua plataforma de orçamentos profissionais.</h2>
                </div>
                <img src={landingImg} alt="plataforma de orçamentos" className="hero-image" />
                <div className="buttons-container">
                    <a href="" className="hire">
                        <img src={hireImg} alt="contrate" />
                        Contrate
                    </a>
                    <a href="" className="work">
                        <img src={workImg} alt="trabalhe" />
                        Trabalhe
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing;