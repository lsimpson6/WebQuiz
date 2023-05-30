var question = document.querySelectorAll('.questions');
var selections = document.querySelectorAll('.selections');
var result = document.querySelectorAll('.result');

const correct = "Correct!", wrong = "Incorrect!";

var correctAnswers = {
    "1": {q: 1, a: "This is answer 1", d: ""},
    "2": {q: 2, a: "This is answer 4", d: ""},
    "3": {q: 3, a: "This is answer 2", d: ""},
    "4": {q: 4, a: "This is answer 3", d: ""}
}

selections.forEach(s => s.addEventListner('click', ()=>{

    var questionNum = s.getAttribute('data-selection');

    for(let i = 0; i < correctAnswers.length; i++){
        if(i = questionNum){

            var answer = correctAnswers[questionNum].a;
            var desc = correctAnswers[questionNum].d;

            result[questionNum].classList.remove('d-none');

            alert('correct');

        }
    }

}))

