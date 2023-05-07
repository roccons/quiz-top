const quizData = [
    {
        question: "¿En qué año se formó el grupo Twenty One Pilots?",
        options: ["2009", "2010", "2011", "2005"],
        answer: "A"
    },
    {
        question: "¿Cuáles son los nombres de los dos integrantes actuales de Twenty One Pilots?",
        options: [
            "Tyler Joseph y Josh Dun",
            "Tyler Joseph y Chris Salih",
            "Josh Dun y Nick Thomas",
            "Chris Salih y Nick Thomas"
        ],
        answer: "A"
    },
    {
        question: "¿Cuál es el nombre del primer álbum de estudio de Twenty One Pilots?",
        options: ["Vessel", "Regional At Best", "Blurryface", "Twenty One Pilots"],
        answer: "D"
    },
    {
        question: "¿Qué instrumento toca Josh Dun en la banda?",
        options: ["Guitarra", "Batería", "Bajo", "Teclado"],
        answer: "B"
    },
    {
        question: "¿Qué concepto representa el personaje de \"Blurryface\"?",
        options: ["La ansiedad", "La depresión", "Las inseguridades", "La rebeldía"],
        answer: "C"
    },
    {
        question: "¿Qué álbum de Twenty One Pilots contiene el universo de Dema?",
        options: ["Blurryface", "Vessel", "Trench", "Scaled and Icy"],
        answer: "C"
    },
    {
        question: "¿Cuál es el nombre del líder de la banda de rebeldes llamada \"Los Bandidos\" en el universo de Dema?",
        options: ["Tyler", "Josh", "Clancy", "Nico"],
        answer: "C"
    },
    {
        question: "¿Cómo se llama el líder del consejo de los nueve obispos que gobiernan Dema?",
        options: ["Keons", "Nico", "Listo", "Andre"],
        answer: "B"
    },
    {
        question: "¿Cuál es el nombre del quinto álbum de estudio de Twenty One Pilots?",
        options: ["Blurryface", "Trench", "Scaled and Icy", "Level of Concern"],
        answer: "C"
    },
    {
        question: "¿Qué premio ganó Twenty One Pilots en los premios Grammy de 2017?",
        options: [
            "Mejor artista nuevo",
            "Mejor álbum de música alternativa",
            "Mejor actuación de dúo/grupo pop",
            "Mejor canción de rock"
        ],
        answer: "D"
    },
    {
        question: "¿Qué símbolo representativo utiliza la banda en su logo?",
        options: [
            "Un sol y una luna",
            "Dos barras diagonales",
            "Un corazón y un infinito",
            "Un trébol y una llave"
        ],
        answer: "B"
    },
    {
        question: "¿Cuál es el nombre completo de Tyler Joseph?",
        options: [
            "Tyler Robert Joseph",
            "Tyler Michael Joseph",
            "Tyler James Joseph",
            "Tyler Alan Joseph"
        ],
        answer: "D"
    },
    {
        question: "¿En qué canción del álbum \"Trench\" se menciona explícitamente a Dema?",
        options: ["Jumpsuit", "Levitate", "Nico and the Niners", "My Blood"],
        answer: "C"
    },
    {
        question: "¿Cuál es el nombre del hermano de Tyler Joseph que también es músico y tiene su propio proyecto?",
        options: ["Zack Joseph", "Jay Joseph", "Ryan Joseph", "Chris Joseph"],
        answer: "A"
    },
    {
        question: "¿Qué canción de Twenty One Pilots es conocida por ser parte de la banda sonora de la película \"Escuadrón Suicida\" (2016)?",
        options: ["Heathens", "Ride", "Stressed Out", "Tear in My Heart"],
        answer: "A"
    }
];

function loadQuiz() {
    let quizHtml = "";
    quizData.forEach((questionData, index) => {
        quizHtml += `<div>
            <h3>${index + 1}. ${questionData.question}</h3>
            <ul>
                ${questionData.options.map((option, i) => `<li>
                    <label>
                        <input type="radio" name="question-${index}" value="${String.fromCharCode(65 + i)}">
                        ${option}
                    </label>
                </li>`).join('')}
            </ul>
        </div>`;
    });
    document.getElementById("quiz-container").innerHTML = quizHtml;
}

function submitQuiz() {
    let score = 0;
    let correctAnswers = [];
    let incorrectAnswers = [];

    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionData.answer) {
            score++;
            correctAnswers.push(index + 1);
        } else {
            incorrectAnswers.push(index + 1);
        }
    });

    const percentage = (score / quizData.length) * 100;

    document.getElementById("results-container").innerHTML = `
        Puntuación: ${score} / ${quizData.length} (${percentage.toFixed(1)}%)<br><br>
        Correctas: ${correctAnswers.join(", ")}<br>
        Incorrectas: ${incorrectAnswers.join(", ")}
    `;
}

loadQuiz();
