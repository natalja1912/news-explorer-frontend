import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './ErrorText.css';

function ErrorText({ text }) {
    return (
        <Wrapper>
            <div className="error">{text}</div>
        </Wrapper>
    );
}

export default ErrorText;