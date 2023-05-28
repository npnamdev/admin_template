const btn = document.querySelector('.nav-link');
const subMenu = document.querySelector('.sub-menu');
const iconChevron = document.querySelector('.icon_chevron');
btn.addEventListener('click', () => {
    subMenu.classList.toggle('active');
    iconChevron.classList.toggle('active');
})
