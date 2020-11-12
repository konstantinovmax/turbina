import React from 'react'

const Streaming = ({type, name, link}) => {
    return <li className="header__streaming-container">
    <a className="header__streaming-link" href={link}>
        <div className={`header__streamings-${type}`}>
            <p className="header__streaming-title" href="#">{name} ↗</p>
        </div>
    </a>
</li>

}

export default Streaming;