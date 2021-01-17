import React from 'react';
import './SavedNewsHeader.css';
import { changeNumberEnding } from '../../utils/change-ending';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Wrapper from '../Wrapper/Wrapper';
import { phraseEnding } from '../../utils/phrase-ending';

function SavedNewsHeader({ savedNews }) {
    let currentUser = React.useContext(CurrentUserContext);

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    let keywordsList = savedNews.map(item => item.keyword);
    let uniqueKeywords = keywordsList.filter(onlyUnique);
    let ending = changeNumberEnding(uniqueKeywords.length - 2);
    let articlesPhraseEnding = phraseEnding(savedNews.length);

    return (
        <section className="savednews">
            <Wrapper>
                <h2 className="savednews__heading">Сохранённые статьи</h2>
                <p className="savednews__text">{currentUser}, у вас {savedNews.length} сохранённ{articlesPhraseEnding}</p>
                {uniqueKeywords.length > 1 && <p className="savednews__keywords">По ключевым словам:
             <span className="savednews__keywords-span">{` ${uniqueKeywords[0]}`},  {`${uniqueKeywords[1]} `}</span>
                    {uniqueKeywords.length > 2 && <span className="savednews__keywords-span">{`и ${uniqueKeywords.length - 2}${ending}`}</span>}</p>}
                {uniqueKeywords.length === 1 && <p className="savednews__keywords">По ключевому слову:
             <span className="savednews__keywords-span">{` ${uniqueKeywords[0]}`} </span></p>}
            </Wrapper>
        </section>
    );
}

export default SavedNewsHeader;