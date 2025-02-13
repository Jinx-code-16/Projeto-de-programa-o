const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".question-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestions = 0
let totalCorrect = 0

function startGame(){
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){

    resetState()

    if (questions.length == currentQuestions) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestions].question
    questions[currentQuestions].answers.forEach(answers => {
        const newAswnser = document.createElement("button")
        newAswnser.classList.add("button", "answers")
        newAswnser.textContent = answers.text
        if (answers.correct){
            newAswnser.dataset.correct = answers.correct
        }
        $answersContainer.appendChild(newAswnser)

        newAswnser.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }

     document.body.removeAttribute("class")
     $nextQuestionButton.classList.add("hide")

}

function selectAnswer(event){
    const answerClicked = event.target

    if (answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    }
    else{
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answers").forEach(button =>{
        button.disabled = true;
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestions++
}

function finishGame(){
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)

    let message = ""

    switch(true){
        case(performance >= 90):
        message = "Pontuação perfeita 💜"
        break
        case(performance >= 70):
        message = "Quase perfeita, incrivel! 💜"
        break
        case(performance >= 50):
        message = "Boa pontuação, mas pode melhorar!"
        break
        default:
        message = "Acho que você não me conhece :("
    }

    $questionsContainer.innerHTML = 
    `
        <p class="final-message"> Você acertou ${totalCorrect} de ${totalQuestions} questões!</p>
        <span>Resultado: ${message}</span>
        <button onclick =window.location.reload() class="button"> Refazer quiz</button>
    `
}


const questions = [
    {
        question: "Quantos anos eu tenho?",
         answers: [
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false }
        ]
    },
{
    question: "Em que mês eu faço aniversario?",
     answers: [
        { text: "janeiro", correct: false },
        { text: "Dezembro", correct: false },
        { text: "Maio", correct: true },
        { text: "Agosto", correct: false }
     ]
},
{
    question: "Qual minha cor favorita?",
     answers: [
        { text: "roxo", correct: true },
        { text: "vermelho", correct: false },
        { text: "preto", correct: false },
        { text: "lilás", correct: false }
    ]
},
{
    question: "Qual é um dos meus hobbies favoritos?",
     answers:[
        { text: "ler", correct: true },
        { text: "escrever", correct: false },
        { text: "assistir", correct: false },
        { text: "jogar", correct: false }
    ]
},
{
    question: "Eu sou apaixonada por desenhos antigos e series, qual das opcões representam uma serie e um desenho que gosto?",
     answers:[
        { text: "Moranguinho e Doctor house", correct: false },
        { text: "Scooby-doo e vinte cinco vinte um", correct: false },
        { text: "Moranguinho e House of dragons", correct: true },
        { text: "Irmãos urso e Friends", correct: false }
    ]
},
{
    question: "Sou amante de livros, mas, apesar disso, estou enrolada com um livro, qual é?",
     answers: [
        { text: "Anne with E", correct: false },
        { text: "Crépusculo", correct: true },
        { text: "Ilha do Tesouro", correct: true },
        { text: "Coraline", correct: false }
    ]
}
]