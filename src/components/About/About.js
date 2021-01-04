import React from 'react';
import './About.css';
import imageAuthorPath from '../../images/author.png';
import Wrapper from '../Wrapper/Wrapper';

function About() {
    return (
        <Wrapper>
            <section className="about">
                <img className="about__image" src={imageAuthorPath} alt="Фото автора" />
                <div className="about__text">
                    <h2 className="about__heading">Об авторе</h2>
                    <p className="about__paragraph">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                    <p className="about__paragraph">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                </div>
            </section>
        </Wrapper>
    );
}

export default About;