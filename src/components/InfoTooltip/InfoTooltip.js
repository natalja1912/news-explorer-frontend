import React from 'react';
import Popup from '../Popup/Popup';
import './InfoTooltip.css';

function InfoTooltip(props) {
    return (
        <div className="modal-window">
            <Popup name="infotool" isOpen={props.isOpen} onClose={props.onClose}>
                <section className='infotool__container'>
                    <p className="infotool__text">{props.text}</p>
                    {props.name !== "card-conflict" && <button className='infotool__redirect-button' type="button" onClick={props.handleRedirect}>Войти</button>}
                </section>
            </Popup>
        </div>
    );
}

export default InfoTooltip;