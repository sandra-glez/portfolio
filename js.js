
var typed = new Typed('#animated-text', {
    strings: ["Software Engineer", "Web Developer", "Designer"],
    typeSpeed: 150,
    backSpeed: 60,
    loop: true,
    showCursor: true,   // Para mostrar el cursor
    cursorChar: '|'      // Caracter del cursor
});

document.addEventListener("DOMContentLoaded", function() {
    // Crear el cursor personalizado
    var cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Mover el cursor personalizado con el ratón
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX - 10 + 'px'; // Ajusta el centro del cursor
        cursor.style.top = e.pageY - 10 + 'px';
    });

    // Agregar la clase 'enlarged' cuando el cursor está sobre un elemento '.intro'
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.intro') || e.target.closest('nav') || e.target.closest('.svg-container') || e.target.closest('.about_me')) {
            cursor.classList.add('enlarged');
        }
    });

    // Quitar la clase 'enlarged' cuando el cursor sale de un elemento '.intro'
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.intro') || e.target.closest('nav') || e.target.closest('.svg-container') || e.target.closest('.about_me')) {
            cursor.classList.remove('enlarged');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var svgElement = document.getElementById('scroll-svg');

    svgElement.addEventListener('click', function() {
        window.scrollBy({
            top: 1000, // Ajusta la distancia de desplazamiento hacia abajo (en píxeles)
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});




// Cuando se abre el modal, asegurarse de que la primera imagen esté visible
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
    slideIndex = 0;  // Reinicia el carrusel al abrir el modal
    let slides = modal.getElementsByClassName("carousel_image");
    if (slides.length > 0) {
        slides[0].classList.add("active");  // Muestra la primera imagen
    }
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";

    // Oculta todas las imágenes al cerrar el modal
    let slides = modal.getElementsByClassName("carousel_image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}






