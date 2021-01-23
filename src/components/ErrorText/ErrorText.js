import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './ErrorText.css';

function ErrorText({ text }) {
    return (
        <div className="error">
            <Wrapper>
                <div >{text}</div>
            </Wrapper>
        </div>
    );
}

export default ErrorText;