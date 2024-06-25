const menuIcon = document.querySelector('.menu-icon');
const navLinksContainer = document.querySelector('.nav-links-container');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const navLinks = document.querySelectorAll('.nav-links a');

menuIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

closeMenuIcon.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
});






/* Funcion que detecta si es dispositivo movil*/

function esDispositivoMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


document.addEventListener("DOMContentLoaded", function() {
    if (esDispositivoMovil()) {
        document.body.classList.add('movil');
    } else {
        document.body.classList.add('no-movil');
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});
