const quizData = [
    {
        question: "Cat timp inseamna o secunda pe planeta Miller?",
        a: "6 ani",
        b: "7 ani",
        c: "8 ani",
        d: "9 ani",
        correct: "d"
    },
    {
        question: "Cum au comunicat Murph si Cooper la finalul filmului?",
        a: "Cu ajutorul ceasului",
        b: "Cu ajutorul legilor gravitatiei",
        c: "Prin apel video",
        d: "Prin mesaje",
        correct: "a"
    },
    {
        question: "La finalul filmului, ce personaj a ramas singur, pe o planeta izolata?",
        a: "Cooper",
        b: "Dr.Mann",
        c: "Brand",
        d: "Tom",
        correct: "c"
    },
    {
        question: "Unde s-a stabilit omenirea pentru a supravietui?",
        a: "In a 4-a dimensiune",
        b: "In a 5-a dimensiune",
        c: "Pe o planeta apropiata de Pamant",
        d: "Omenirea nu a supravietuit",
        correct: "b"
    }
]

const quiz = document.getElementById('quiz')
const playerAnswers = document.querySelectorAll('.answer')
const quizQuestion = document.getElementById('question')
const possibleAnswerA = document.getElementById('a_text')
const possibleAnswerB = document.getElementById('b_text')
const possibleAnswerC = document.getElementById('c_text')
const possibleAnswerD = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

startQuiz()

function startQuiz(){
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    quizQuestion.innerText = currentQuizData.question
    possibleAnswerA.innerText = currentQuizData.a
    possibleAnswerB.innerText = currentQuizData.b
    possibleAnswerC.innerText = currentQuizData.c
    possibleAnswerD.innerText = currentQuizData.d
}

function deselectAnswers(){
    playerAnswers.forEach(playerAnswers => playerAnswers.checked = false)
}

function getSelected(){
    playerAnswers.forEach(playerAnswers => {
        if(playerAnswers.checked == true)
            answer = playerAnswers.id
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer == quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz == quizData.length)
            quiz.innerHTML = `
            <h2>Ai dat ${score}/${quizData.length} raspunsuri corecte</h2>

            <button onclick="location.reload()">Reia chestionarul</button>
            <style> .quiz-container{height:133px;} </style>
        `
        else startQuiz()
    }
})