document.querySelectorAll('.main__article-2__section-2__article-1__div div').forEach(function(element, index) {
    element.addEventListener('mouseenter', function() {
        const bar = this.querySelector('.bar');
        const percentageText = this.querySelector('.main__article-2__section-2__article-1__div__div__h4-2');
        let targetWidth;

        // Define el porcentaje objetivo basado en el índice del div
        switch(index) {
            case 0:
                targetWidth = 60; // HTML
                break;
            case 1:
                targetWidth = 50; // CSS
                break;
            case 2:
                targetWidth = 30; // JavaScript
                break;
            default:
                targetWidth = 0;
        }

        this.classList.add('transitioned');
        let width = 0;

        const updatePercentage = () => {
            width += 1; // Incrementa el ancho en cada iteración
            if (width <= targetWidth) {
                bar.style.width = width + '%';
                percentageText.textContent = width + '%';
                requestAnimationFrame(updatePercentage); // Vuelve a llamar la función para el siguiente cuadro
            } else {
                percentageText.textContent = targetWidth + '%';
            }
        };

        requestAnimationFrame(updatePercentage); // Inicia la animación
    });
});

window.addEventListener('load', (event) => {
    body.style.overflowY = 'auto'
    const divTitles = document.getElementById('divTitles') 
    const Esferas = document.querySelectorAll('Esfera')
    setTimeout({
        function() {
            Esferas.style.zIndex = "-1"
        }
    }, 2000)
});
