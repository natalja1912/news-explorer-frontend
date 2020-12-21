import React from 'react';
import './SavedNewsHeader.css';
import { keywordsList, savedNewsNumber } from '../../utils/constants';
import { changeEnding } from '../../utils/change-ending';

function SavedNewsHeader() {
    const keywordsNumber = keywordsList.length;
    const ending = changeEnding(keywordsNumber-2);

    return (
        <section className="savednews">
            <h2 className="savednews__heading">Сохранённые статьи</h2>
            <p className="savednews__text">Грета, у вас {savedNewsNumber} сохранённых статей</p>
            <p className="savednews__keywords">По ключевым словам: 
             <span className="savednews__keywords-span">{` ${keywordsList[0]}`},  {`${keywordsList[1]} `}</span>
             и <span className="savednews__keywords-span">{`${keywordsList.length - 2}${ending} другим`}</span></p>
        </section>
    );
}

export default SavedNewsHeader;