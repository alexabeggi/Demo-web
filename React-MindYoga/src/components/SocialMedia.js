import React from 'react';

import './SocialMedia.css';

function SocialMedia(props) {
    return (
        <div className="root1">
            <h2 style={{color: props.color}}>{props.name}</h2>
            <img src={props.logo} style={{width: props.logowidth, height: props.logoheigth}}></img>
            <button style={{color: props.color, borderColor: props.color}}>Open {props.name} and follow</button>
        </div>
    );
};

export default SocialMedia;