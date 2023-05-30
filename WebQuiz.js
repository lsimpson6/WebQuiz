var selection = document.querySelectorAll('.selections');
var result = document.querySelectorAll('.rightwrong');

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
            result[questionNum - 1].textContent = correct;
            console.log("correct");
        }
        else{
            result[questionNum - 1].textContent = incorrect;
            console.log("incorrect");
        }
        result[questionNum - 1].classList.remove('d-none');
        console.log("removed");
    }

}))