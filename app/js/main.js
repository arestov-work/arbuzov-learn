const upBtn = document.querySelector('.up-btn');

const btnShowMenu = document.querySelector('.btn__show-menu');
const modalMenu = document.querySelector('.modal-menu');
const modalMenuClose = document.querySelectorAll('.modal-menu__close');
const mainBody = document.querySelector('.body');
const modalCategories = document.querySelector('.modal-categories');
const btnMiniCatalog = document.querySelector('.btn__mini-catalog');

const selectHeader = document.querySelectorAll('.select__header');
const selectArrow = document.querySelectorAll('.select-arrow');


upBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

btnShowMenu.addEventListener('click', function() {
  modalMenu.classList.remove('window-hidden');
  mainBody.style.overflow = 'hidden';
});

btnMiniCatalog.addEventListener('click', function() {
  modalCategories.classList.remove('window-hidden');
  mainBody.style.overflow = 'hidden';
});

for (let i = 0; i < modalMenuClose.length; i++) {
  modalMenuClose[i].addEventListener('click', function() {
    modalMenu.classList.add('window-hidden');
    modalCategories.classList.add('window-hidden');
    mainBody.style.overflow = 'scroll';
  });
}

for (let i = 0; i < selectHeader.length; i++) {
  selectHeader[i].addEventListener('click', function() {
    this.parentElement.classList.toggle('is-active');
    selectArrow[i].classList.toggle('arrow-rotate');
  });
}