import React, { useEffect, useState } from 'react';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './RegisterPopup.css';

function RegisterPopup({ isOpen, onClose, onUpdateUser, redirectRegisterPopup }) {
    const [inputValues, setInputValues] = useState({ email: '', password: '', name: '' });
    const [isSubmitButtonActive, setSubmitButtonActive] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(
            {
                ...inputValues,
                [name]: value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValues.email || !inputValues.password || !inputValues.name) {
            console.log("Заполните все поля формы");
            return;
        }
        onUpdateUser({ password: inputValues.password, email: inputValues.email, name: inputValues.name });
        handleClose();
    }

    function handleClose(){
        setInputValues({ email: '', password: '', name: '' });
        onClose();
    }

    function handleRedirect(){
        redirectRegisterPopup(true);
        onClose();
    }

    useEffect(() => {
        if (inputValues.email.length > 0 && inputValues.password.length > 0 && inputValues.name.length > 0) {
            setSubmitButtonActive(true);
        }
        else {
            setSubmitButtonActive(false);
        }
    }, [inputValues]);

    return (
        <Popup isOpen={isOpen} onClose={handleClose}>
            <PopupWithForm name="register" title="Регистрация" buttonText={"Зарегистрироваться"} buttonRedirectText='Войти' isOpen={isOpen} onClose={handleClose} handleRedirect={handleRedirect} submitButtonActive={isSubmitButtonActive} onSubmit={(e) => handleSubmit(e)}>
                <label className="popup__input">Email
                    <input value={inputValues.email} placeholder='Введите почту' onChange={(e) => handleChange(e)} type="text" className="popup__text" name="email" minLength="2" maxLength="40" required />
                    <span className="popup__input-error">Неправильный формат email</span>
                </label>
                <label className="popup__input">Пароль
                    <input value={inputValues.password} placeholder='Введите пароль' onChange={(e) => handleChange(e)} type="password" className="popup__text" name="password" minLength="8" maxLength="40" required />
                    <span className="popup__input-error">Вы пропустили это поле.</span>
                </label>
                <label className="popup__input">Имя
                    <input value={inputValues.name} placeholder='Введите своё имя' onChange={(e) => handleChange(e)} type="text" className="popup__text" name="name" minLength="2" maxLength="40" required />
                    <span className="popup__input-error">Неправильный формат email</span>
                </label>
            </PopupWithForm>
        </Popup>
    );
}

export default RegisterPopup;