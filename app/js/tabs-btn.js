const tabSelectionBtn = document.querySelectorAll('.tabs__btn')
const contentBox = document.querySelectorAll('.content')

const reviewBlockBtn = document.querySelectorAll('.review-block__btn')

for (let i = 0; i < tabSelectionBtn.length; i++) {
  tabSelectionBtn[i].addEventListener('click', function () {
    for (let j = 0; j < contentBox.length; j++) {
      contentBox[j].classList.remove('content__active')
      tabSelectionBtn[j].classList.remove('btn__active')
    }
    contentBox[i].classList.add('content__active')
    tabSelectionBtn[i].classList.add('btn__active')
  })
}

reviewBlockBtn.forEach((elem) => {
  elem.addEventListener('click', function () {
    if (elem.innerHTML === 'Показать полностью') {
      elem.textContent = 'Скрыть'
    } else {
      elem.textContent = 'Показать полностью'
    }
  })
})
