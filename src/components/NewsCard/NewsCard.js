import React from 'react';
import './NewsCard.css';
import imagePicture1 from '../../images/image_04.png';

function NewsCard() {
    return (
        <section className="card">
            <img src={imagePicture1} alt="Фото" />
            <div className="card__text">
                <p>2 августа, 2019</p>
                <h2>Национальное достояние – парки</h2>
                <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                <p>Лента.ру</p>
            </div>
        </section>
    );
}

export default NewsCard;