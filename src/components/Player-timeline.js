import React from 'react'


const PlayerTimeLine = ({ duration, currentTime, onClick, isTrackProgress }) => {
    const clickHandler = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width * 100;
        const timeToGo = duration / 100 * percentage;
        onClick(timeToGo)

    }
    return <div className={`header__track-progress ${isTrackProgress && 'header__track-progress_short'}`} id="progress"
        onClick={clickHandler}>
        <div
            className="header__progress-bar"
            style={{ width: `${currentTime / duration * 100}%` }}
        ></div>
    </div>
}

export default PlayerTimeLine;

