document.addEventListener('DOMContentLoaded', function() {
    // Función para copiar el texto al portapapeles
    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('Texto copiado al portapapeles');
        }, function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    }

    // Agregar eventos a cada icono
    document.getElementById('social-icon').addEventListener('click', function() {
        const text = document.getElementById('social-text').textContent;
        copyTextToClipboard(text);
    });

    document.getElementById('telephone-icon').addEventListener('click', function() {
        const text = document.getElementById('telephone-text').textContent;
        copyTextToClipboard(text);
    });

    document.getElementById('email-icon').addEventListener('click', function() {
        const text = document.getElementById('email-text').textContent;
        copyTextToClipboard(text);
    });
});


    // Función para desplazar la página hacia arriba
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    }


