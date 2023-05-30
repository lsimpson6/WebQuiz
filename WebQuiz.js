var selection = document.querySelectorAll('.selections');
var feedback = document.querySelectorAll('.rightwrong');
var result = document.querySelectorAll('.result');

const correct = "Correct!", wrong = "Incorrect!";

var correctAnswers = {
    "1": {answer: 2, d: ""},
    "2": {answer: 3, d: ""},
    "3": {answer: 1, d: ""},
    "4": {answer: 3, d: ""}
}

console.log("loaded, you may now click");

selection.forEach(s => s.addEventListener('click', ()=>{

    var selectedAnswerNumber = s.getAttribute('data-selection');
    var questionNum = s.getAttribute('data-question');

    if($(result[questionNum - 1]).hasClass('d-none')){
        if(correctAnswers[questionNum].answer == selectedAnswerNumber){
            feedback[questionNum - 1].textContent = correct;
        }
        else{
            feedback[questionNum - 1].textContent = wrong;
        }
        result[questionNum - 1].classList.remove('d-none');
    }

}))