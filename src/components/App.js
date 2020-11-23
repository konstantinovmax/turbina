import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  // Задаем стейты для элементов для открытия и закрытия плеера
  const [isPlayPause, setIsPlayPause] = React.useState(false);
  const [isOpenPlayer, setIsOpenPlayer] = React.useState();
  const [isShowCover, setIsShowCover] = React.useState(false);
  const [isOpenSongsContainer, setIsOpenSongsContainer] = React.useState();
  const [isOpenSongPlayer, setIsOpenSongPlayer] = React.useState();
  const [isOpenContentWrapper, setIsOpenContentWrapper] = React.useState();
  const [isOpenTextRelease, setIsOpenTextRelease] = React.useState();
  const [isOpenVideoButton, setIsOpenVideoButton] = React.useState();
  const [isTrackProgress, setIsTrackProgress] = React.useState();
  const [isMakeBlur, setIsMakeBlur] = React.useState();
  const [isStreamingsOpen, setIsStreamingsOpen] = React.useState(false);

  // Задаем стейты для элементов для отображения и скрытия текста песни
  const [isTextReleaseOpen, setIsTextReleaseOpen] = React.useState(false);
  const [isCloseSongRelease, setIsCloseSongRelease] = React.useState();
  const [isOpenSongsText, setIsOpenSongsText] = React.useState();



  /*--------------------------------------------------Функции для открытия закрытия плеера----------------------------------------------------*/
  function handlePlayPauseButton() {
    setIsPlayPause(!isPlayPause);
  }

  // Функция ниже обрабатывает включенные в нее функции. Функция срабатывает при клике на кнопку с классом '.header__open-close'
  function handleOpenPlayerClick() {
    setIsOpenPlayer(!isOpenPlayer);
    openSongsContainer();
    openSongPlayer();
    openContentWrapper();
    openTextRelease();
    openVideoButton();
    trackProgress();
    makeBlur();
    showCover()
}

function openSongsContainer() {
  setIsOpenSongsContainer(!isOpenSongsContainer);
}

function showCover() {
  setIsShowCover(!isShowCover);
}

function openSongPlayer() {
  setIsOpenSongPlayer(!isOpenSongPlayer);
}

function openContentWrapper() {
  setIsOpenContentWrapper(!isOpenContentWrapper);
}

function openTextRelease() {
  setIsOpenTextRelease(!isOpenTextRelease);
}

function openVideoButton() {
  setIsOpenVideoButton(!isOpenVideoButton);
}

function trackProgress() {
  setIsTrackProgress(!isTrackProgress);
}

function makeBlur() {
  setIsMakeBlur(!isMakeBlur);
}

function streamingsOpenButton() {
  setIsStreamingsOpen(!isStreamingsOpen)
}

function textReleaseOpen() {
  setIsTextReleaseOpen(!isTextReleaseOpen);
  closeSongRelease();
  openSongsText();


}

function closeSongRelease() {
  setIsCloseSongRelease(!isCloseSongRelease);
}

function openSongsText() {
  setIsOpenSongsText(!isOpenSongsText);
}



return (
  <>
    <div className="root">
      <div className="root__content">
        <Header
          isPlayPause={isPlayPause}
          onPlayPause={handlePlayPauseButton}
          isOpenPlayer={isOpenPlayer}
          onOpenClosePlayer={handleOpenPlayerClick}
          isShowCover={isShowCover}
          isOpenSongsContainer={isOpenSongsContainer}
          isOpenSongPlayer={isOpenSongPlayer}
          isOpenContentWrapper={isOpenContentWrapper}
          isOpenVideoButton={isOpenVideoButton}
          isTrackProgress={isTrackProgress}
          isMakeBlur={isMakeBlur}
          isOpenTextRelease={isOpenTextRelease}
          onOpenCloseTextButton={textReleaseOpen}
          isCloseSongRelease={isCloseSongRelease}
          isOpenSongsText={isOpenSongsText}
          isStreamingsOpen={isStreamingsOpen}
          onChangeStreamingsButton={streamingsOpenButton}
        />
        <Main />
        <Footer />
      </div>
    </div>
  </>
);
}

export default App;
