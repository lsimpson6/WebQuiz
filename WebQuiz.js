var selection = document.querySelectorAll('.selections');
var feedback = document.querySelectorAll('.rightwrong');
var result = document.querySelectorAll('.result');
var correctAnsText = document.querySelectorAll('.ifwrong');
var correctCount = 0, incorrectCount = 0;
var numAnswered = 0;
var shareModal = document.getElementById('share-results-modal');
var quizScore = document.getElementById('quiz-score');
var linkedin = document.getElementById('linkedin');

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
        setTimeout(()=>{
            quizScore.textContent = "You answered " + correctCount + "/" + numAnswered + " correctly!"
            shareModal.classList.add('show');
            shareModal.style.display = 'block';
        }, 250);
    }

}))

document.querySelector('.close').addEventListener('click', ()=>{
    shareModal.classList.remove('show');
    shareModal.style.display = 'none';
})

var dataShare = document.querySelectorAll('.social-share-links');

dataShare.forEach(ds => ds.addEventListener('click', function (e){
    var platformName = ds.getAttribute('data-share');
    var url = "#";
    var windowTitle = "Share Results on " + platformName;

    e.preventDefault();

    switch (platformName)
    {
        case "facebook":
            url = "http://www.facebook.com/share.php?u=https://bethany.org/resources/tanks-and-foreign-troops-stretched-across-the-horizon-war-had-come&hashtag=%23&quote=" + "You answered " + correctCount + "/" + numAnswered + " correctly!"
        break;
        case "linkedin":
            url = "https://www.linkedin.com/shareArticle?mini=true&url=https://bethany.org/resources/tanks-and-foreign-troops-stretched-across-the-horizon-war-had-come&title=Tanks%20and%20foreign%20troops%20stretched%20across%20the%20horizon%E2%80%94war%20had%20come"
        break;
        case "twitter":
            url = "https://twitter.com/intent/tweet?text=Tanks%20and%20foreign%20troops%20stretched%20across%20the%20horizon%E2%80%94war%20had%20come%20&url=https://bethany.org/resources/tanks-and-foreign-troops-stretched-across-the-horizon-war-had-come"
        break;
    }


    window.open(url, windowTitle, 'height=100, width=200')

}))