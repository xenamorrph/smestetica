
document.addEventListener('DOMContentLoaded', () => {
  const questionsList = document.querySelectorAll('.b-question__item');

  if (questionsList.length >= 1) {
    questionsList.forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
      })
    })
  }
})