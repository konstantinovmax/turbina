const playPauseButton = document.querySelector('.header__play-pause')
const openCloseButton = document.querySelector('.header__open-close')
const songsContainer = document.querySelector('.header__songs-container')
const contentWrapper = document.querySelector('.header__content-wrapper')
const blurBackground = document.querySelector('.header__blur')
const albumCover = document.querySelector('.header__album-cover')
const playerContainer = document.querySelector('.header__song-player')
const textReleaseButton = document.querySelectorAll('.header__text-release')
const videoButton = document.querySelectorAll('.header__video-button')
const streamingsButton = document.querySelector('.header__streamings-button')
const streamings = document.querySelector('.header__streaming-button-container')
const progressBar = document.querySelector('.header__track-progress')
const songsRelease = document.querySelector('.header__songs-release')
const songsText = document.querySelector('.header__songs-text')

function playPauseToggler() {
    playPauseButton.classList.toggle('header__play-pause_pause');

}

function toggleCoverVisibility() {
    albumCover.classList.toggle('header__album-cover_opened_visible')
}

function showCover() {
    albumCover.classList.toggle('header__album-cover_opened')
    setTimeout(toggleCoverVisibility, 500);
}

function openCloseToggler() {
    if (document.documentElement.clientWidth > 480) {
        showCover()
    }
    openCloseButton.classList.toggle('header__open-close_close');
    songsContainer.classList.toggle('header__songs-container_opened')
    playerContainer.classList.toggle('header__song-player_opened')
    contentWrapper.classList.toggle('header__content-wrapper_opened')
    textReleaseButton.forEach((item) => item.classList.toggle('header__text-release_opened'))
    videoButton.forEach((item) => item.classList.toggle('header__video-button_opened'))

    progressBar.classList.toggle('header__track-progress_short')
    blurBackground.classList.toggle('header__blur_active')
}

function textReleaseToggler() {
    textReleaseButton.forEach((item) => {
        if (item.textContent === 'Релизы') {
            item.textContent = 'Текст песни'
        }
        else {
            item.textContent = 'Релизы'
        }
    })
    songsRelease.classList.toggle('header__songs-release_closed')
    songsText.classList.toggle('header__songs-text_opened')

}

function streamingsButtonToggler() {
    if (streamingsButton.textContent === 'Стриминги') {
        streamingsButton.textContent = ''
        streamingsButton.classList.toggle('header__streamings-button_active')
        streamings.classList.toggle('header__streaming-button-container_opened')
    }
    else {
        streamingsButton.textContent = 'Стриминги'
        streamingsButton.classList.toggle('header__streamings-button_active')
        streamings.classList.toggle('header__streaming-button-container_opened')
    }
}

playPauseButton.addEventListener('click', playPauseToggler)

openCloseButton.addEventListener('click', openCloseToggler)

textReleaseButton.forEach((item) => item.addEventListener('click', textReleaseToggler))

streamingsButton.addEventListener('click', streamingsButtonToggler)