const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');
const btnMenuOpen = document.querySelector('.btn-menu-toggle');
const body = document.querySelector('body');

btnMenuOpen.addEventListener('click',(event) => {
    event.preventDefault();
    mobileNavMenu.style.display = 'block';
    body.style.overflow = 'hidden';
})

btnMenuClose.addEventListener('click',(event) => {
    event.preventDefault();
    mobileNavMenu.style.display = 'none';
    body.style.overflow = '';
})

