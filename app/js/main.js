const upBtn = document.querySelector('.up-btn');

upBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});