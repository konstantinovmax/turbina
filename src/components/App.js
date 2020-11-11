import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  // Задаем стейты для элементов для открытия и закрытия плеера
  const [isPlayPause, setIsPlayPause] = React.useState();
  const [isOpenPlayer, setIsOpenPlayer] = React.useState();
  const [isShowCover, setIsShowCover] = React.useState();
  const [isOpenSongsContainer, setIsOpenSongsContainer] = React.useState();
  const [isOpenSongPlayer, setIsOpenSongPlayer] = React.useState();
  const [isOpenContentWrapper, setIsOpenContentWrapper] = React.useState();
  const [isOpenTextRelease, setIsOpenTextRelease] = React.useState();
  const [isOpenVideoButton, setIsOpenVideoButton] = React.useState();
  const [isTrackProgress, setIsTrackProgress] = React.useState();
  const [isMakeBlur, setIsMakeBlur] = React.useState();

  // Задаем стейты для элементов для отображения и скрытия текста песни
  const [isTextReleaseOpen, setIsTextReleaseOpen] = React.useState();
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

    // КОСТЫЛЬ. Необходимо провести рефакторинг нижеописанного кода (строки 41-43)
    if (document.documentElement.clientWidth > 480) {
      showCover()
    }
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



  /*------------------------------------------------Функции для открытия скрытия текстов песен------------------------------------------------*/

  // Функция ниже обрабатывает включенные в нее функции. Функция срабатывает при клике на кнопку с классом '.header__text-release'
  function textReleaseOpen() {
    setIsTextReleaseOpen(!isTextReleaseOpen);
    closeSongRelease();
    openSongsText();

    // КОСТЫЛЬ. Необходимо провести рефакторинг нижеописанного кода (строки 85-93)
    const textReleaseButton = document.querySelectorAll('.header__text-release');
    textReleaseButton.forEach((item) => {
      if (item.textContent === 'Релизы') {
          item.textContent = 'Текст песни'
      }
      else {
          item.textContent = 'Релизы'
      }
    })
  }

  function closeSongRelease() {
    setIsCloseSongRelease(!isCloseSongRelease);
  }

  function openSongsText() {
    setIsOpenSongsText(!isOpenSongsText);
  }



  /*---------------------------------------------Функция для трансформации кнопки "Стриминги" на мобилках---------------------------------------------*/

  // КОСТЫЛЬ. Функция написана в императивном стиле, необходимо переписать в декларативном стиле (строки 107-120)
  function streamingsButtonToggler() {
    const streamingsButton = document.querySelector('.header__streamings-button');
    const streamings = document.querySelector('.header__streaming-button-container');
    if (streamingsButton.textContent === 'Стриминги') {
        streamingsButton.textContent = ''
        streamingsButton.classList.toggle('header__streamings-button_active');
        streamings.classList.toggle('header__streaming-button-container_opened');
    }
    else {
        streamingsButton.textContent = 'Стриминги'
        streamingsButton.classList.toggle('header__streamings-button_active');
        streamings.classList.toggle('header__streaming-button-container_opened');
    }
  }
    

  return (
    <>
      <div className="root">
        <div className="root__content">
            <Header
            isPlayPause = { isPlayPause }
            onPlayPause = { handlePlayPauseButton }

            isOpenPlayer = { isOpenPlayer }
            onOpenClosePlayer = { handleOpenPlayerClick }
            isShowCover = { isShowCover }
            isOpenSongsContainer = { isOpenSongsContainer }
            isOpenSongPlayer = { isOpenSongPlayer }
            isOpenContentWrapper = { isOpenContentWrapper }
            isOpenVideoButton = { isOpenVideoButton }
            isTrackProgress = { isTrackProgress }
            isMakeBlur = { isMakeBlur }

            isOpenTextRelease = { isOpenTextRelease }
            onOpenCloseTextButton = { textReleaseOpen }
            isCloseSongRelease = { isCloseSongRelease }
            isOpenSongsText = { isOpenSongsText }

            onChangeStreamingsButton = { streamingsButtonToggler }
            />
            <Main />
            <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
