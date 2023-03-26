document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('#burger-button');
  const dropdownMenu = document.querySelector('#dropdown-menu');
  const body = document.querySelector('body');

  burgerButton.style.backgroundImage = "url('./assets/images/burger.png')";

  burgerButton.addEventListener('click', () => {
    if (dropdownMenu.style.display == 'flex') {
      body.classList.remove('no-scroll');
      burgerButton.style.backgroundImage = "url('./assets/images/burger.png')";
      dropdownMenu.style.display = 'none';
    } else {
      body.classList.add('no-scroll');
      dropdownMenu.style.display = 'flex';
      burgerButton.style.backgroundImage = "url('./assets/images/cross.png')";
    }
  });
});
