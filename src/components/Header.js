import React from 'react';
import marshakLogo from '../images/header-logo.png';
import turbinaLogo from '../images/header-image.png';
import Player from './Player';
import Streaming from './Streaming';


function Header(props) {
    return (
        <header className="header">
            <div className={ `header__blur ${ props.isMakeBlur && 'header__blur_active' }` }>
                <a className="header__logo-link" href="https://marshakbooks.ru/" target="_blank">
                    <img className="header__logo" src={ marshakLogo } alt="Логотип проекта Турбина" />
                </a>
                <div className="header__streamings">
                    <button className={props.isStreamingsOpen ? `header__streamings-button header__streamings-button_active` : `header__streamings-button`} type="button" onClick={ props.onChangeStreamingsButton }>{props.isStreamingsOpen ? '' : 'Стриминги'}</button>
                    <ul className={props.isStreamingsOpen ? `header__streaming-button-container header__streaming-button-container_opened ` : `header__streaming-button-container`}>
                        <Streaming type={'yandex'} link={'#'} name={'Яндекс.Музыка'}/>
                        <Streaming type={'spotify'} link={'#'} name={'Spotify'}/>
                        <Streaming type={'apple-music'} link={'#'} name={'Apple Music'}/>
                        <Streaming type={'vk-music'} link={'#'} name={'VK Music'}/>
                    </ul>
                </div>
            <h1 className="header__title">
                <img className="header__image" src={ turbinaLogo } alt="Турбина" />
            </h1>
            </div>
            <Player 
            isOpenSongPlayer={props.isOpenSongPlayer} 
            isShowCover={props.isOpenSongPlayer} 
            isOpenContentWrapper={props.isOpenSongPlayer} 
            isOpenVideoButton={props.isOpenSongPlayer} 
            isOpenTextRelease={props.isOpenTextRelease} 
            isTrackProgress ={props.isTrackProgress} 
            isOpenSongsContainer={props.isOpenSongsContainer}
            isCloseSongRelease={props.isCloseSongRelease}
            isOpenSongsText={props.isOpenSongsText}
            onOpenClosePlayer={props.onOpenClosePlayer}
            isOpenPlayer={props.isOpenPlayer}
            onOpenCloseTextButton={props.onOpenCloseTextButton}
            />
        </header>
    );
}

export default Header;