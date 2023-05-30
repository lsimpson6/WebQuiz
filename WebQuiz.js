var selection = document.querySelectorAll('.selections');
var result = document.querySelectorAll('.right-wrong');

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
    var res = result[questionNum - 1];

    if($(res).hasClass('d-none')){
        if(correctAnswers[questionNum].answer == selectedAnswerNumber){
            res.textContent = correct;
        }
        else{
            res.textContent = incorrect;
        }
        res.classList.remove('d-none');
    }

}))