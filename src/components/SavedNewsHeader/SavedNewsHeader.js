import React from 'react';
import './SavedNewsHeader.css';
import { keywordsNumber, keywordsList } from '../../utils/constants';

function SavedNewsHeader() {
    return (
        <section className="savednews">
            <h2 className="savednews__heading">Сохранённые статьи</h2>
            <p className="savednews__text">Грета, у вас {keywordsNumber} сохранённых статей</p>
            <p className="savednews__keywords">По ключевым словам: 
             <span className="savednews__keywords-span">{` ${keywordsList[0]}`},  {`${keywordsList[1]} `}</span>
             и <span className="savednews__keywords-span">{`${keywordsList.length - 2}-м другим`}</span></p>
        </section>
    );
}

export default SavedNewsHeader;