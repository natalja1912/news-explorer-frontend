import React from 'react';
import './About.css';
import imageAuthorPath from '../../images/kusto.jpg';
import Wrapper from '../Wrapper/Wrapper';

function About() {
    return (
        <Wrapper>
            <section className="about">
                <img className="about__image" src={imageAuthorPath} alt="Фото автора" />
                <div className="about__text">
                    <h2 className="about__heading">Об авторе</h2>
                    <p className="about__paragraph">С апреля 2020 года учусь на веб-разработчика в Яндекс.Практикуме. Владею технологиями HTML, CSS, Javascript, React, Node JS.</p>
                    <p className="about__paragraph">Работаю в сфере образования, а также преподаю английский язык.</p>
                </div>
            </section>
        </Wrapper>
    );
}

export default About;