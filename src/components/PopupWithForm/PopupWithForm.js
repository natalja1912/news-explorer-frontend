import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form className={`popup__container popup__container_type_${props.name} popup__item`} name={`popup__container_type_${props.name}`} onSubmit={props.onSubmit} noValidate>
                <h2 className={`popup__heading popup__heading_type_${props.name}`}>{props.title}</h2>
                {props.children}
                <button className={`popup__add-button popup__add-button_type_${props.name}`} type="submit">
                    {props.buttonText}
                </button>
                <button className={`popup__close-button popup__close-button_type_${props.name}`} type="button" onClick={props.onClose}></button>
            </form>
        </section>
    );
}

export default PopupWithForm;