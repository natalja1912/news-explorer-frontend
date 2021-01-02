import React, { useEffect, useState } from 'react';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './LoginPopup.css';
import { validation } from '../../utils/validation';

function LoginPopup({ isOpen, onClose, onUpdateUser, redirectLoginPopup }) {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const [errorText, setErrorText] = useState({ email: 'Вы пропустили это поле.', password: 'Вы пропустили это поле.' });

    const [errors, setErrors] = useState({
        email: {
            required: true,
            isEmail: true
        },
        password: {
            required: true,
            minLength: true
        }
    })

    useEffect(() => {
        const { email, password } = inputValues;
        const finalEmailError = validation('email', email);
        const finalPasswordError = validation('password', password);
       
        setErrors({
            ...errors,
            email: finalEmailError,
            password: finalPasswordError
        });

        let emailText;
        let passwordText;
        email === '' ? emailText = "Вы пропустили это поле" : emailText = "Неправильный формат email";
        password === '' ? passwordText = "Вы пропустили это поле" : passwordText = "Пароль должен содержать не менее 8 символов";
        setErrorText({
            ...errorText,
            'email': emailText,
            'password': passwordText,
        })
    }, [inputValues])

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
        if (!inputValues.email || !inputValues.password) {
            console.log("Заполните все поля формы");
            return;
        }
        onUpdateUser({ password: inputValues.password, email: inputValues.email });
        handleClose();
    }

    function handleClose() {
        setInputValues({ email: '', password: '' });
        onClose();
    }

    function handleRedirect() {
        redirectLoginPopup(true);
        onClose();
    }

    const isEmailErrorActive = Object.values(errors.email).some((el) => el);
    const isPasswordErrorActive = Object.values(errors.password).some((el) => el);
    const isSubmitButtonActive = !isEmailErrorActive && !isPasswordErrorActive;

    return (
        <Popup isOpen={isOpen} onClose={handleClose}>
            <PopupWithForm name="login" title="Вход" buttonText={"Войти"} buttonRedirectText='Зарегистрироваться' isOpen={isOpen} onClose={handleClose} handleRedirect={handleRedirect} submitButtonActive={isSubmitButtonActive} onSubmit={(e) => handleSubmit(e)}>
                <label className="popup__input">Email
                    <input value={inputValues.email} placeholder='Введите почту' onChange={(e) => handleChange(e)} type="text" className="popup__text" name="email" minLength="2" maxLength="40" required />
                    {isEmailErrorActive && <span className="popup__input-error">{errorText.email}</span>}
                </label>
                <label className="popup__input">Пароль
                    <input value={inputValues.password} placeholder='Введите пароль' onChange={(e) => handleChange(e)} type="password" className="popup__text" name="password" minLength="8" maxLength="40" required />
                    {isPasswordErrorActive && <span className="popup__input-error">{errorText.password}</span>}
                </label>
            </PopupWithForm>
        </Popup>
    );
}

export default LoginPopup;