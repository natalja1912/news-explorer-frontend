import React, { useEffect } from 'react';
import './Popup.css';

function Popup({ isOpen, onClose, ...props }) {

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    const handleClick = (e) => {
        if (e.target.className === 'popup popup_opened') {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEsc);
        document.addEventListener('click', handleClick);

        return function cleanup() {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <section className={`popup ${isOpen && `popup_opened`}`}>
            {props.children}
        </section>
    );
}

export default Popup;