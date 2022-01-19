let quiz = {
    quiz : [ 
      {
        question : "Which canal separates the African continent from Asia?",
        answer : [
          "Rhine-Main-Danube Canal",
          "Volga-Don Canal",
          "Danube-Black Sea Canal",
          "Suez Canal"
        ],
        correct : 3 
      },
      {
          question : "Which continent is Kazakhstan located at?",
          answer : [
          "Europe",
          "Africa",       
          "Asia",
          "South America"
        ],
        correct : 2
      },
      {
          question : "Which of these famous rivers do not have bridges?",
          answer : [
          "Ganges River",
          "Amazon River",
          "Nile River",
          "Ohio River"
        ],
        correct : 1
      },
      {
        question : "Which of the following countries is the production and sale of tobacco/cigarettes banned?",
        answer : [
        "Ireland",
        "Malaysia",
        "Bhutan",
        "Japan"
        ],
        correct : 2
      },
      {
          question : "What is the percentage of population for Europe?",
          answer : [
          "17.20%",
          "9.59%",
          "7.60%",
          "20.6%"
        ],
        correct : 1
      }, {
        question: "Which of the following is not a Polynesian island?",
        answer: [
          "Samoa",
          "Wallis",
          "Futuna",
          "Fiji"
        ],
        correct: 3
      }, {
        question: "What is The Haka?",
        answer: [
          "Cake",
          "Dance",
          "Musical instrument",
          "Fruit"
        ],
        correct: 1
      }, {
        question: "Which of the following fruits is banned in most hotels and transit rides?",
        answer: [
          "Rambutan",
          "Mangosteen",
          "Durian",
          "Lychee"
        ],
        correct: 2
      }, {
        question: "Which of the following religion believes that the color Red symbolises good foutune and wealth?",
        answer: [
          "Chinese",
          "Hawaiian",
          "Muslim",
          "Indian"
        ],
        correct: 0
      }, {
        question: "Which is the biggest city in Africa?",
        answer: [
          "Johannesburg",
          "Nairobi",
          "Lagos",
          "Casablanca"
        ],
        correct: 2
      }
      ],

quizHeart : null,
question : null, 
answer : null,
nextButton : null,
//Score
now : 0,
score : 0, 

init: () => {
    quiz.quizHeart = document.getElementById("questionContainer")

quiz.question = document.createElement("div");
quiz.question.id = "question";
quiz.quizHeart.appendChild(quiz.question);      

quiz.answer = document.createElement("div");
quiz.answer.id = "answer";
quiz.quizHeart.appendChild(quiz.answer);

quiz.draw();
},