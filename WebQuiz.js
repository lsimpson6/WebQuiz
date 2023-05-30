var selection = document.querySelectorAll('.selections');
var feedback = document.querySelectorAll('.rightwrong');
var result = document.querySelectorAll('.result');
var correctAnsText = document.querySelectorAll('.ifwrong');

const correct = "Correct!", wrong = "Incorrect!";

var correctAnswers = {
    "1": {answer: 2},
    "2": {answer: 3},
    "3": {answer: 1},
    "4": {answer: 3}
}

console.log("loaded, you may now click");

selection.forEach(s => s.addEventListener('click', ()=>{

    var selectedAnswerNumber = s.getAttribute('data-selection');
    var questionNum = s.getAttribute('data-question');
    var correctAnswer = correctAnswers[questionNum].answer;

    var resultIndex = questionNum - 1;

    if($(result[resultIndex]).hasClass('d-none')){
        if(correctAnswer == selectedAnswerNumber){
            feedback[resultIndex].textContent = correct;
        }
        else{
            feedback[resultIndex].textContent = wrong;
            let correctionText = "The correct answser was option " + correctAnswer;
            correctAnsText[resultIndex].textContent == correctionText;
        }
        result[resultIndex].classList.remove('d-none');
    }

}))