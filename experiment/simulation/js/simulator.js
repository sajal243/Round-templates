(function() {
  const myQuestions = [
    {
      question: "What is Half Wave Rectifier?",
      answers: {
        a: "half wave rectifier converts only half of the AC cycle to Uni-direction.",
        b: "half wave rectifier converts only half of the AC cycle to bi-direction.",
        c: "both a & b",
        d: "none of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the efficiency of a rectifier?",
      answers: {
        a: "The ratio of AC output power to the applied AC input power is known as the efficiency of a rectifier",
        b: "The ratio of DC output power to the applied AC output power is known as the efficiency of a rectifier.",
        c: "The ratio of DC output power to the applied AC input power is known as the efficiency of a rectifier.",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the maximum efficiency (η) of a half wave rectifier?",
      answers: {
        a: "90.3%",
        b: "93.5%",
        c: "47.3%",
        d: "40.6%"
      },
      correctAnswer: "d"
    },
     {
      question: "What is form factor?",
      answers: {
        a: "The ratio of maximum value to the RMS value.",
        b: "It is the ratio of the RMS value to the Average value.",
        c: "The ratio of RMS value to the maximum value.",
        d: "The ratio of average value to the RMS value."
      },
      correctAnswer: "b"
    },
    {
      question: "What is peak factor?",
      answers: {
        a: "The ratio of maximum value to the RMS value.",
        b: "It is the ratio of the RMS value to the Average value.",
        c: "The ratio of RMS value to the maximum value.",
        d: "The ratio of average value to the RMS value."
      },
      correctAnswer: "a"
    },
    {
      question: "What is the TUF of a half wave rectifier",
      answers: {
        a: "0.1047",
        b: "1.2222",
        c: "0.0069",
        d: "0.2865"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the importance of PIV voltage of a Diode in A Rectifier Circuit",
      answers: {
        a: "PIV (Peak Inverse Voltage) is the maximum possible voltage that a diode can withstand in the forward bias.",
        b: "PIV (Peak Inverse Voltage) is the maximum possible voltage that a diode can withstand in the reverse bias.",
        c: "PIV (Peak Inverse Voltage) is the minimum optimum voltage that a diode can withstand in the reverse bias",
        d: "none of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Ripple voltage in a rectifier output is the amount of ……… content present in the output DC, it causes periodic pulsating of the DC voltage which is derived from the AC source.",
      answers: {
        a: "AC",
        b: "DC",
        c: "both a & b",
        d: "none of the above"
      },
      correctAnswer: "a"
    }
    
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
   
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
   
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


