import React from 'react';
import './SavedNewsHeader.css';
import { keywordsList, savedNewsNumber } from '../../utils/constants';
import { changeEnding } from '../../utils/change-ending';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Wrapper from '../Wrapper/Wrapper';

function SavedNewsHeader() {
    const keywordsNumber = keywordsList.length;
    const ending = changeEnding(keywordsNumber - 2);
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="savednews">
            <Wrapper>
                <h2 className="savednews__heading">Сохранённые статьи</h2>
                <p className="savednews__text">{currentUser.name}, у вас {savedNewsNumber} сохранённых статей</p>
                <p className="savednews__keywords">По ключевым словам:
             <span className="savednews__keywords-span">{` ${keywordsList[0]}`},  {`${keywordsList[1]} `}</span>
             и <span className="savednews__keywords-span">{`${keywordsList.length - 2}${ending} другим`}</span></p>
            </Wrapper>
        </section>
    );
}

export default SavedNewsHeader;