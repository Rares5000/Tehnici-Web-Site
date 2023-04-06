const quizData = [
    {
        question: "Ce reprezinta fenomenul regasit in spatiu numit supernova?",
        a: "Comete care se afla in coliziune",
        b: "O stea care explodeaza",
        c: "Cea mai mare gaura neagra",
        d: "Ploaie de stele",
        correct: "b"
    },
    {
        question: "Cum se numeste zona din care nu mai poti scapa a unei gauri negre?",
        a: "Gravity Horizon",
        b: "Extreme Gravity",
        c: "Event Horizon",
        d: "Poti scapa din gaura neagra",
        correct: "c"
    },
    {
        question: "Cat dureaza ca lumina reflectata in luna sa ajunga pe pamant?",
        a: "aproximativ 1 secunda",
        b: "aproximativ 2 secunde",
        c: "aproximativ 3 secunde",
        d: "aproximativ 4 secunde",
        correct: "a"
    },
    {
        question: "Care este cea mai mare planeta din sistemul solar?",
        a: "Saturn",
        b: "Venus",
        c: "Jupiter",
        d: "A 9-a planeta",
        correct: "c"
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