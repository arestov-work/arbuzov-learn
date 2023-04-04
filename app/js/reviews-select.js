const reviewsSelectHeader = document.querySelector('.reviews-select__header')
const sortingReviewsSelect = document.querySelector('.sorting-reviews__select')
const reviewsSelectIcon = document.querySelector('.reviews-select__icon')
const reviewsSelectItem = document.querySelectorAll('.reviews-select__item')

reviewsSelectHeader.addEventListener('click', selectToggle)
reviewsSelectItem.forEach((elem) => {
  elem.addEventListener('click', selectChoose)
})

function selectToggle() {
  sortingReviewsSelect.classList.toggle('sorting-reviews__select--active')
  reviewsSelectIcon.classList.toggle('reviews-select__icon--rotate')
}
function selectChoose() {
  let text = this.innerText

  let select = this.closest('.sorting-reviews__select')

  let currentText = select.querySelector('.reviews-select__current')

  currentText.innerText = text

  selectToggle()
}
