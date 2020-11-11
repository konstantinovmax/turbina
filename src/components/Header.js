import React from 'react';
import marshakLogo from '../images/header-logo.png';
import turbinaLogo from '../images/header-image.png';
import songsCovers from '../images/cover.jpg';

function Header(props) {
    return (
        <header className="header">
            <div className={ `header__blur ${ props.isMakeBlur && 'header__blur_active' }` }>
                <a className="header__logo-link" href="https://marshakbooks.ru/" target="_blank">
                    <img className="header__logo" src={ marshakLogo } alt="Логотип проекта Турбина" />
                </a>
                <ul className="header__streamings">
                    <button className="header__streamings-button" type="button" onClick={ props.onChangeStreamingsButton }>Стриминги</button>
                    <div className="header__streaming-button-container">

                        <li className="header__streaming-container">
                            <a className="header__streaming-link" href="#">
                                <div className="header__streamings-yandex">
                                    <p className="header__streaming-title" href="#">Яндекс.Музыка ↗</p>
                                </div>
                            </a>
                        </li>
                        <li className="header__streaming-container">
                            <a className="header__streaming-link" href="#">
                                <div className="header__streamings-spotify">
                                    <p className="header__streaming-title" href="#">Spotify ↗</p>
                                </div>
                            </a>
                        </li>
                        <li className="header__streaming-container">
                            <a className="header__streaming-link" href="#">
                                <div className="header__streamings-apple-music">
                                    <p className="header__streaming-title" href="#">Apple Music ↗</p>
                                </div>
                            </a>
                        </li>
                        <li className="header__streaming-container">
                            <a className="header__streaming-link" href="#">
                                <div className="header__streamings-vk-music">
                                    <p className="header__streaming-title" href="#">VK Music ↗</p>
                                </div>
                            </a>
                        </li>
                    </div>
                </ul>
            
            <h1 className="header__title">
                <img className="header__image" src={ turbinaLogo } alt="Турбина" />
            </h1>
            </div>
            <div className={ `header__song-player ${ props.isOpenSongPlayer && 'header__song-player_opened' }` }>
                    {/* <audio controls src="./music/apocalypse.mp3" style: display="none">
                        Your browser does not support the element.
                    </audio> */}
                <div className="header__album-wrapper">
                    <img className={ `header__album-cover ${ props.isShowCover && 'header__album-cover_opened' && 'header__album-cover_opened_visible' }` } src={ songsCovers } alt="Обложка альбома" />
                    <div className={ `header__content-wrapper ${ props.isOpenContentWrapper && 'header__content-wrapper_opened' }` }>
                        <div id="audio-controls" className="header__controls" data-state="hidden">
                            <div className="header__button-wrapper">
                                <button id="playpause" className={ `header__play-pause ${ props.isPlayPause && 'header__play-pause_pause' }` } type="button"
                                    data-state="play" onClick={ props.onPlayPause }></button>
                                <h3 className="header__song-name">Song title</h3>
                            </div>
                            <div className="header__button-wrapper">
                                <h3 className="header__song-duration">5:00</h3>
                                <div className="header__desktop-button-wrapper">
                                <button className={ `header__video-button ${ props.isOpenVideoButton && 'header__video-button_opened' }` } type="button"></button>
                                <button id="textrelease" className={ `header__text-release ${ props.isOpenTextRelease && 'header__text-release_opened' }` } type="button" onClick={ props.onOpenCloseTextButton }>Релизы</button> 
                                </div>
                                <button id="open" className={ `header__open-close ${ props.isOpenPlayer && 'header__open-close_close' }` } type="button" data-state="open" onClick={ props.onOpenClosePlayer } ></button>
                            </div>
                        </div>
                        <progress className={ `header__track-progress ${ props.isTrackProgress && 'header__track-progress_short' }` } id="progress" value="0" min="0">
                            <span id="progress-bar"></span>
                        </progress>
                        <div className="header__mobile-button-wrapper">
                            <button className="header__video-button" type="button"></button>
                            <button id="textrelease" className="header__text-release" type="button">Релизы</button>
                        </div>
                        <img className="header__album-cover-mobile" src={ songsCovers } alt="Обложка альбома" />
                        <div className={ `header__songs-container ${ props.isOpenSongsContainer && 'header__songs-container_opened' }` } data-mcs-theme="minimal">
                            <h3 className={ `header__songs-release ${ props.isCloseSongRelease && 'header__songs-release_closed' }` }>Apocalypse and..</h3>
                            <h3 className={ `header__songs-text ${ props.isOpenSongsText && 'header__songs-text_opened' }` }>You leapt from crumbling bridges watching cityscapes turn
                                to&nbsp;dust
                                Filming helicopters crashing in&nbsp;the ocean from way above

                                Got the music in&nbsp;you baby,
                                Tell me&nbsp;why
                                Got the music in&nbsp;you baby,
                                Tell me&nbsp;why
                                You&rsquo;ve been locked in&nbsp;here forever &amp;&nbsp;you just can&rsquo;t say
                                goodbye

                                Kisses on&nbsp;the foreheads of&nbsp;the lovers wrapped in&nbsp;your arms
                                You&rsquo;ve been hiding them in&nbsp;hollowed out pianos left in&nbsp;the dark...

                                Your lips,
                                My&nbsp;lips,
                                Apocalypse

                                Go&nbsp;&amp;&nbsp;sneak&nbsp;us through the rivers,
                                Flood is&nbsp;rising up&nbsp;on&nbsp;your knees
                                Oh&nbsp;please...
                                Come out &amp;&nbsp;haunt me
                                I&nbsp;know you want me
                                Come out &amp;&nbsp;haunt me

                                Sharing all your secrets with each other since you were kids
                                Sleeping soundly with the locket that she gave you clutched in&nbsp;your fist...

                                When you&rsquo;re all alone
                                I&nbsp;will reach for you
                                When you&rsquo;re feeling low
                                I&nbsp;will be&nbsp;there too</h3>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;