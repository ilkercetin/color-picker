import React, {useState} from 'react';

function Color(props) {
    const [codeVisibility, setCodeVisibility] = useState(false);
    const [colorText, setColorText] = useState(props.hexColor.toUpperCase());

    function handleHover(shouldShow) {
        setCodeVisibility(shouldShow);
    }

    function changeColorText () {
        setColorText('COPIED!');

        setTimeout(() => {
            setColorText(props.hexColor.toUpperCase());
        }, 3000);
    }

    return (
        <div className={'color'} style={{
            backgroundColor: props.hexColor,
        }}
             onMouseEnter={() => handleHover(true)}
             onMouseLeave={() => handleHover(false)}
             onClick={() => {
                 navigator.clipboard.writeText(props.hexColor.toUpperCase());

                 changeColorText();
             }}>
            <div className={'color-text'} style={{
                display: codeVisibility ? 'block' : 'none',
            }}>{colorText}</div>
        </div>
    );
}

export default Color;