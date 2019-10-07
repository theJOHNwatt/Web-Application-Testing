import React from 'react';



function Display(props) {
    return(
        <div className='display-container'>
            <h1>At Bat</h1>
            <span/>
            <h3>Ball</h3>
            <span/>
            <h4>{props.ball}</h4>
            <span/>
            <span/>
            <h3>Strikes</h3>
            <span/>
            <h4>{props.strikes}</h4>
        </div>
    );
}

export default Display;