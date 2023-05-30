var selection = document.querySelectorAll('.selections');
var result = document.querySelectorAll('.result');

const correct = "Correct!", wrong = "Incorrect!";

var correctAnswers = {
    "1": {q: 1, a: 2, d: ""},
    "2": {q: 2, a: 3, d: ""},
    "3": {q: 3, a: 1, d: ""},
    "4": {q: 4, a: 3, d: ""}
}
console.log("loaded, you may now click");
selection.forEach(s => s.addEventListener('click', ()=>{
    console.log("clicked - start");
    var selectedAnswerNumber = s.getAttribute('data-selection');
    var questionNum = s.getAttribute('data-question');

        if(correctAnswers[questionNum].a = selectedAnswerNumber){

            var answer = correctAnswers[questionNum].a;
            var desc = correctAnswers[questionNum].d;

            result[questionNum - 1].classList.remove('d-none');

            console.log("qestion: " + questionNum + " correct ans: " + correctAnswers[questionNum].a +  " selected ans: " + selectedAnswerNumber);
            console.log("correct");

        }
        else{
            console.log("incorrect or wrong");
        }

}))