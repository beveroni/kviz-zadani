const questionElm = document.querySelector('.question');
const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

questionElm.textContent = question;

const userAnswer = prompt(question);

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = userAnswer;

const answerElm = document.querySelector('.answer');

if (userAnswer === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
