//Задаем параллакс эффект для фона
const parrallaxBackground = document.querySelector('.root');
parrallaxBackground.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;  
    parrallaxBackground.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
});