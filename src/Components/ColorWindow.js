import React from 'react';
import Color from "./Color";

function ColorWindow(props) {
    return (
        <div className={'color-window'}>
            <div className={'color-window-title'} onClick={props.setColors}>
                REFRESH COLORS
            </div>
            <div className={'color-wrapper'}>
                {props.colors.map(color => (
                    <Color hexColor={color}/>
                ))}
            </div>
        </div>
    );
}

export default ColorWindow;