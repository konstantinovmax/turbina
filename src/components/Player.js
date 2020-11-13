import React, { useState, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import playList from '../data/playlist'
import PlayListItem from './Playlist-item';
import PlayerTimeLine from './Player-timeline';
import throttling from '../utils/throttling'
import convertToSec from '../utils/convertToSec'

const Player = (props) => {
    const [currentTrack, setCurrentTrack] = useState(playList[0])
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const myPlayer = useRef(null)

    const delayedQuery = throttling(event => {
        setCurrentTime(event.target.currentTime)
    }, 1000)

    const onPlay = event => {
        setDuration(event.target.duration)
    }

    return <div className={`header__song-player ${props.isOpenSongPlayer && 'header__song-player_opened'}`}>
        <audio
            src={currentTrack.audioFile}
            controls
            onPlay={onPlay}
            ref={myPlayer}
            onLoadedData={_ => setDuration(myPlayer.current.duration)}
            onTimeUpdate={delayedQuery}
            style={{ display: 'none' }}>
        </audio>
        <div className="header__album-wrapper">
        <img className={`header__album-cover ${props.isShowCover && 'header__album-cover_opened' && 'header__album-cover_opened_visible'}`} src={currentTrack.cover} alt="Обложка альбома" />
            <div className={`header__content-wrapper ${props.isOpenContentWrapper && 'header__content-wrapper_opened'}`}>
                <div id="audio-controls" className="header__controls" data-state="hidden">
                    <div className="header__button-wrapper">
                        <button id="playpause"
                            className={`header__play-pause ${isPlaying && 'header__play-pause_pause'}`}
                            type="button"
                            onClick={_ => {
                                if (isPlaying) {
                                    myPlayer.current.pause()
                                    setIsPlaying(false)
                                } else {
                                    myPlayer.current.play()
                                    setIsPlaying(true)
                                }
                            }
                            }
                        ></button>
                        <h3 className="header__song-name">{currentTrack.title}</h3>
                    </div>
                    <div className="header__button-wrapper">
                        <h3 className="header__song-duration">{convertToSec(Math.round(currentTime))}</h3>
                        <div className="header__desktop-button-wrapper">
                            <button className={`header__video-button ${props.isOpenVideoButton && currentTrack.link && 'header__video-button_opened'}`} type="button"></button>
                            <button id="textrelease" className={`header__text-release ${props.isOpenTextRelease && 'header__text-release_opened'}`} type="button" onClick={props.onOpenCloseTextButton}>{props.isOpenSongsText ? 'Релизы' : 'Текст песни'}</button>
                        </div>
                        <button id="open" className={`header__open-close ${props.isOpenPlayer && 'header__open-close_close'}`} type="button" onClick={props.onOpenClosePlayer} ></button>
                    </div>
                </div>
                <PlayerTimeLine
                    currentTime={currentTime}
                    duration={duration}
                    onClick={time => { myPlayer.current.currentTime = time }}
                    isTrackProgress={props.isTrackProgress}
                />
                <img className={`header__album-cover-mobile ${props.isShowCover && 'header__album-cover-mobile_opened' && 'header__album-cover-mobile_opened_visible'}`} src={currentTrack.cover} alt="Обложка альбома" />
                <div className="header__mobile-button-wrapper">
                    <button className={`header__video-button ${props.isOpenVideoButton && currentTrack.link && 'header__video-button_opened'}`} ></button>
                    <button id="textrelease" className={`header__text-release ${props.isOpenTextRelease && 'header__text-release_opened'}`} type="button" onClick={props.onOpenCloseTextButton}>{props.isOpenSongsText ? 'Релизы' : 'Текст песни'}</button>
                </div>
                <div className="header__cover-songs-container">
                <img className={`header__album-cover-tablet ${props.isShowCover && 'header__album-cover-tablet_opened' && 'header__album-cover-tablet_opened_visible'}`} src={currentTrack.cover} alt="Обложка альбома" />
                    <Scrollbars className={`header__songs-container ${props.isOpenSongsContainer && 'header__songs-container_opened'}`}>
                        <h3 className='header__songs-release-title' style={props.isOpenSongsText ? { display: 'none' } : { display: 'block' }}>{props.isOpenTextRelease ? 'Релизы:' : ''}</h3>
                        {playList.map(item => <PlayListItem
                            item={item}
                            key={item.id}
                            isOpenSongsContainer={props.isOpenSongsContainer}
                            isCloseSongRelease={props.isCloseSongRelease}
                            isOpenSongsText={props.isOpenSongsText}
                            onClick={item => {
                                setCurrentTrack(item)
                                setIsPlaying(false)
                            }}
                        />)}
                        <h3 className={`header__songs-text ${props.isOpenSongsText && 'header__songs-text_opened'}`}><pre>{currentTrack.text}</pre></h3>
                    </Scrollbars>
                </div>
            </div>
        </div>


    </div>

}

export default Player;