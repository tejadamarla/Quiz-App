const questions = [
    {
        question: "A car travels 150 km in 3 hours. What is its average speed?",
        answers: [
            { text: "45km/h", correct: false },
            { text: "50km/h", correct: true },
            { text: "60km/h", correct: false },
            { text: "40km/h", correct: false }
        ]
    },
    {
        question: "A ball is thrown vertically upward with a speed of 20 m/s. How long will it take to reach the highest point? (Take g = 10 m/s²)?",
        answers: [
            { text: "1sec", correct: false },
            { text: "4sec", correct: false },
            { text: "2sec", correct: true },
            { text: "5sec", correct: false }
        ]
    },
    {
        question: "A force of 10 N is applied to a 2 kg object. What is its acceleration?",
            answers: [
                { text: " 2 m/s²", correct: false }, 
                { text: "10 m/s²", correct: false },
                { text: " 5 m/s²", correct: true },
                { text: "20 m/s²", correct: false }
            ]
        },
        {
            question: " A 50 kg person is standing in an elevator. If the elevator accelerates upward at 2 m/s², what is the apparent weight of the person? (Take g = 10 m/s²)?",
            answers: [
                { text: "500N", correct: false }, 
                { text: "600N", correct: true },
                { text: "700N", correct: false},
                { text: "800N", correct: false }
            ] 
        },
        {
            question: " A person lifts a 10 kg box to a height of 2 m. How much work is done? (Take g = 10 m/s²)?",
            answers: [
                { text: "100 J", correct: false }, 
                { text: "200 J", correct: true },
                { text: "250 J", correct: false},
                { text: "150 J", correct: false }
            ] 
        },
        {
            question: "A machine does 1000 J of work in 2 seconds. What is its power output?",
            answers: [
                { text: "250 W", correct: false }, 
                { text: "500 W", correct:  false },
                { text: "2000 W", correct: false},
                { text: "1000 W", correct: true }
            ]   
        },
        {
            question: "A 10 Ω resistor is connected to a 20 V battery. What is the current flowing through the resistor?",
            answers: [
                { text: "2A", correct: true}, 
                { text: "1A", correct:  false },
                { text: "5A", correct: false},
                { text: "0.5A", correct: false }
            ]     
        },
        {
            question: "if the length of a wire is doubled, keeping all other factors constant, how does its resistance change?",
            answers: [
                { text: "Remains the same", correct: false}, 
                { text: "Havlves", correct:  false },
                { text: "Doubles", correct: true},
                { text: "Quadruples", correct: false }
            ]     
        },
        {
            question: " If the frequency of a wave is 50 Hz and its wavelength is 2 m, what is the speed of the wave?",
            answers: [
                { text: "200m/s", correct: false}, 
                { text: "25m/s", correct:  false },
                { text: "50m/s", correct: false},
                { text: "100m/s", correct: true }
            ]     
        },
        {
            question: "If an object is placed at twice the focal length of a convex lens, what is the nature of the image?",
            answers: [
                { text: "Virtual, Upright, Enlarged", correct: false}, 
                { text: "Real, Inverted, Smaller", correct:  false },
                { text: "Real,Inverted,same size", correct: true},
                { text: " Real, Inverted, Larger", correct: false }
            ]     
        },
        {
            question: "A train 150 meters long passes a pole in 15 seconds. What is the speed of the train in km/hr?",
            answers: [
                { text: "45 km/hr", correct: false}, 
                { text: "36 km/hr", correct: true},
                { text: "30 km/hr", correct:  false },
                { text: "54 km/hr", correct: false }
            ]       
        },
        {
            question: "The sum of two numbers is 80, and their difference is 20. Find the numbers?",
            answers: [
                { text: " 60, 20", correct: false}, 
                { text: " 60, 20", correct:  false },
                { text: " 50, 30", correct: true},
                { text: " 40, 40", correct: false }
            ]        
        },
        {
            question: "A shopkeeper offers a 10% discount on a product priced at ₹500. What is the final price after the discount?",
            answers: [
                { text: "₹400", correct: false}, 
                { text: "₹450", correct:  true },
                { text: "₹480", correct: false },
                { text: "₹490", correct: false }
            ]        
        },
        {
            question: "Find the missing number in the sequence: 2, 6, 12, 20, ?, 42",
            answers: [
                { text: "25 W", correct: false }, 
                { text: "50 W", correct:  false },
                { text: "20 W", correct: false},
                { text: "30", correct: true }
            ]   
        },
        {
            question: "If APPLE is coded as ELPPA, how is WORLD coded?",
            answers: [
                { text: " LODRW", correct: false },
                { text: " DLORW", correct: true },
                { text: "DRLOW", correct: false },
                { text: "DRLOW", correct: false }
            ]
        }
            
       
    ];
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");
    const skipButton = document.getElementById("skip-btn");
    const previousButton = document.getElementById("previous-btn");
    const timerElement = document.getElementById("time");
    const scoreElement = document.getElementById("score");
    
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 120; // 2 minutes per question
    let timer;
    
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 120;
        nextButton.style.display = "none";
        skipButton.style.display = "block";
        previousButton.style.display = "none"; // Initially hide the Previous button
        scoreElement.innerText = "";
        startTimer();
        showQuestion();
    }
    
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerElement.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up!");
                nextQuestion();
            }
        }, 1000);
    }
    
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectAnswer(button, answer.correct));
            answerButtons.appendChild(button);
        });
    
        // Update Previous and Next button visibility
        updateNavigationButtons();
    }
    
    function resetState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(button, isCorrect) {
        clearInterval(timer);
        if (isCorrect) {
            button.classList.add("correct");
            score++;
        } else {
            button.classList.add("wrong");
        }
        Array.from(answerButtons.children).forEach(btn => {
            btn.disabled = true;
        });
        nextButton.style.display = "block";
    }
    
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            timeLeft = 120; // Reset timer for next question
            startTimer();
            showQuestion();
        } else {
            endQuiz();
        }
    }
    
    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            timeLeft = 120; // Reset timer for previous question
            startTimer();
            showQuestion();
        }
    }
    
    function skipQuestion() {
        nextQuestion(); // Skip to the next question
    }
    
    function endQuiz() {
        clearInterval(timer);
        questionElement.innerText = "Quiz Completed!";
        answerButtons.innerHTML = "";
        scoreElement.innerText = `Your Score: ${score} / ${questions.length}`;
        nextButton.innerText = "Restart Quiz";
        nextButton.style.display = "block";
        nextButton.addEventListener("click", startQuiz);
    }
    
    function updateNavigationButtons() {
        if (currentQuestionIndex === 0) {
            previousButton.style.display = "none"; // Hide Previous button on first question
        } else {
            previousButton.style.display = "block"; // Show Previous button
        }
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.innerText = "Finish Quiz";
        } else {
            nextButton.innerText = "Next";
        }
    }
    
    skipButton.addEventListener("click", skipQuestion);
    previousButton.addEventListener("click", previousQuestion);
    nextButton.addEventListener("click", nextQuestion);
    
    startQuiz();
    
    


