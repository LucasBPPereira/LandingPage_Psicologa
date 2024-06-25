// container__card - container principal
// card__slider - container item
// card_buscar - items

/* document.addEventListener('DOMContentLoaded', function() {
    const antBtn = document.getElementById('antBtn');
    const proBtn = document.getElementById('proBtn');
    let cardSlider = document.querySelector('.card__slider');
    let cardItem = document.querySelectorAll('.card_buscar');
    let slideindex = 0;
    const totalSlides = cardItem.length;
    
    function showSlide(posicao) { // posicao do slide
        if(posicao < 0) {
            slideindex = totalSlides - 1;
        } else if (posicao >= totalSlides) {
            slideindex = 0;
        }
    
        cardSlider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
    
    antBtn.addEventListener('click', () =>  {
        showSlide(slideindex - 1);
    });
    
    proBtn.addEventListener('click', () =>  {
        showSlide(slideindex + 1);
    });
    console.log('teste')
}); */

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('#card__slider');
    const slides = document.querySelectorAll('.card_buscar');
    const prevBtn = document.getElementById('antBtn');
    const nextBtn = document.getElementById('proBtn');

    let slideIndex = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        // Verificar limites
        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        }

        // Aplicar transformação para mover para o slide desejado
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    // Event listeners para os botões anterior e próximo
    prevBtn.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });
});