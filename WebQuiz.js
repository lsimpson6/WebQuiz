var selection = document.querySelectorAll('.selections');
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

        if(correctAnswers[questionNum].answer == selectedAnswerNumber){

            var answer = correctAnswers[questionNum].a;
            var desc = correctAnswers[questionNum].d;

            result[questionNum - 1].classList.remove('d-none');

            console.log("qestion: " + questionNum + " correct ans: " + correctAnswers[questionNum].answer +  " selected ans: " + selectedAnswerNumber);
            console.log("correct");

        }
        else{
            console.log("incorrect or wrong");
        }

}))