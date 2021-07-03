import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainComponent.css';

function MainComponent() {
    return (
        <div className='main-container'>
            <video src='Videos/production ID_3752531.mp4' autoPlay loop muted />
            <h1>VEHICLE REGISTRATION </h1>
            <p>What are you waiting for?</p>
            <div className='main-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    REGISTER
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default MainComponent;