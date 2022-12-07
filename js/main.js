(function(){
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');


    let menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnable: 1024
    });

    let carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    });

    let carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnNext: '.next',
        btnPrev: '.prev'
    })
}());