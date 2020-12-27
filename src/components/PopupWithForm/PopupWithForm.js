import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
    return (
        <form className={`popup__container popup__container_type_${props.name} popup__item`} name={`popup__container_type_${props.name}`} onSubmit={props.onSubmit} noValidate>
            <h2 className={`popup__heading popup__heading_type_${props.name}`}>{props.title}</h2>
            {props.children}
            <button className={`popup__add-button popup__add-button_type_${props.name} ${!props.submitButtonActive && `popup__add-button_inactive`}`} type="submit">
                {props.buttonText}
            </button>
            <button className={`popup__close-button popup__close-button_type_${props.name}`} type="button" onClick={props.onClose}></button>
            <button className='popup__redirect-button' type="button" onClick={props.handleRedirect}>или <span className="popup__redirect-span">{props.buttonRedirectText}</span></button>
        </form>
    );
}

export default PopupWithForm;