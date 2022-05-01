import React, {useState} from 'react';

function Color(props) {
    const [codeVisibility, setCodeVisibility] = useState(false);

    function handleHover(shouldShow) {
        setCodeVisibility(shouldShow);
    }

    return (
        <div className={'color'} style={{
            backgroundColor: props.hexColor,
        }}
             onMouseEnter={() => handleHover(true)}
             onMouseLeave={() => handleHover(false)}
             onClick={() => {
                 navigator.clipboard.writeText(props.hexColor.toUpperCase())
             }}>
            <div className={'color-text'} style={{
                display: codeVisibility ? 'block' : 'none',
            }}>{props.hexColor.toUpperCase()}</div>
        </div>
    );
}

export default Color;