document.addEventListener('DOMContentLoaded', () => {
  const burgerButtonOpen = document.querySelector('#burger-button-open');
  const burgerButtonClose = document.querySelector('#burger-button-close');
  const dropdownMenu = document.querySelector('#dropdown-menu');
  const dropdown = document.querySelector('#dropdown');
  const body = document.querySelector('body');

  burgerButtonOpen.style.backgroundImage = "url('./assets/images/burger.png')";

  burgerButtonOpen.addEventListener('click', () => {
    body.classList.remove('no-scroll');
    burgerButtonOpen.style.display = 'none';
    burgerButtonClose.style.display = 'block';
    dropdownMenu.style.display = 'flex';
    dropdown.style.display = 'flex';
  });

  burgerButtonClose.addEventListener('click', () => {
    body.classList.add('no-scroll');
    dropdownMenu.style.display = 'none';
    burgerButtonClose.style.display = 'none';
    burgerButtonOpen.style.display = 'block';
    dropdown.style.display = 'none';
  });
});
