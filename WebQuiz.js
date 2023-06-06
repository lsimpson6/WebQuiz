var selection = document.querySelectorAll('.selections');
var feedback = document.querySelectorAll('.rightwrong');
var result = document.querySelectorAll('.result');
var correctAnsText = document.querySelectorAll('.ifwrong');
var correctCount = 0, incorrectCount = 0;
var numAnswered = 0;

const correct = "Correct!", wrong = "Incorrect!";

const correctAnswers = {
    "1": {answer: 2},
    "2": {answer: 3},
    "3": {answer: 1},
    "4": {answer: 3}
}

selection.forEach(s => s.addEventListener('click', ()=>{

    var selectedAnswerNumber = s.getAttribute('data-selection');
    var questionNum = s.getAttribute('data-question');
    var correctAnswer = correctAnswers[questionNum].answer;
    var resultIndex = questionNum - 1;

    if($(result[resultIndex]).hasClass('d-none')){
        if(correctAnswer == selectedAnswerNumber){
            feedback[resultIndex].textContent = correct;
            correctCount ++;
        }
        else{
            feedback[resultIndex].textContent = wrong;
            let correctionText = correctAnswer;
            correctAnsText[resultIndex].textContent = "The correct answer was option " + correctionText;
            incorrectCount ++;
        }

        result[resultIndex].classList.remove('d-none');
        numAnswered = correctCount + incorrectCount;
        let responseBox = result[resultIndex].offsetTop;

        setTimeout(()=>{
            window.scrollTo({ top: responseBox - 25, behavior: 'smooth'});
        }, 100);
    }

    if(numAnswered == 4){
        alert("you answered " + correctCount + "/" + numAnswered + " correctly!")
    }

}))