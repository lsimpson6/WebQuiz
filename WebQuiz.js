var question = document.querySelectorAll('.questions');
var selection = document.querySelectorAll('.selections');
var result = document.querySelectorAll('.result');

const correct = "Correct!", wrong = "Incorrect!";

var correctAnswers = {
    "1": {q: 1, a: "This is answer 1", d: ""},
    "2": {q: 2, a: "This is answer 4", d: ""},
    "3": {q: 3, a: "This is answer 2", d: ""},
    "4": {q: 4, a: "This is answer 3", d: ""}
}
console.log("loaded, you may now click");
selection.forEach(s => s.addEventListener('click', ()=>{
    console.log("clicked - start");
    var questionNum = s.getAttribute('data-selection');

    for(let i = 0; i < 4; i++){
        if(i = questionNum){

            var answer = correctAnswers[questionNum].a;
            var desc = correctAnswers[questionNum].d;

            result[questionNum - 1].classList.remove('d-none');

            console.log(questionNum);
            console.log("within if - done");

        }
    }
}))