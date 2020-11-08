(function($) {
    $(window).on('load', function() {
        $('.header__songs-container').mCustomScrollbar();
    });
})(jQuery);

$('.header__songs-container').mCustomScrollbar({
    axis: 'y',              // вертикальный скролл 
    theme: 'minimal',  // тема 
    scrollInertia: '630',   // продолжительность прокрутки, значение в миллисекундах 
    setHeight: '100%',      // высота блока (переписывает CSS) 
    mouseWheel: {
        deltaFactor: 200    // кол-во пикселей на одну прокрутку колёсика мыши 
    }
});

