const playPauseButton = document.querySelector('.header__play-pause')
const openCloseButton = document.querySelector('.header__open-close')
const songsContainer = document.querySelector('.header__songs-container')
const playerContainer = document.querySelector('.header__song-player')
const textReleaseButton = document.querySelector('.header__text-release')
const progressBar = document.querySelector('.header__track-progress')
const songsRelease = document.querySelector('.header__songs-release')
const songsText = document.querySelector('.header__songs-text')

function playPauseToggler() {
    playPauseButton.classList.toggle('header__play-pause_pause');
    
}

function openCloseToggler() {
    openCloseButton.classList.toggle('header__open-close_close');
    songsContainer.classList.toggle('header__songs-container_opened')
    playerContainer.classList.toggle('header__song-player_opened')
    textReleaseButton.classList.toggle('header__text-release_opened')
    progressBar.classList.toggle('header__track-progress_short')
}

function textReleaseToggler() {
    if (textReleaseButton.textContent === 'Релизы') {
        textReleaseButton.textContent = 'Текст песни'
        songsRelease.classList.toggle('header__songs-release_closed')
        songsText.classList.toggle('header__songs-text_opened')
    } else {
        textReleaseButton.textContent = 'Релизы'
        songsRelease.classList.toggle('header__songs-release_closed')
        songsText.classList.toggle('header__songs-text_opened')
    }
}

playPauseButton.addEventListener('click', playPauseToggler)

openCloseButton.addEventListener('click', openCloseToggler)

textReleaseButton.addEventListener('click', textReleaseToggler)