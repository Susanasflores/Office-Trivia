document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-button');
  let audioElement = null;
  const selectedAnswers = [];

  fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(data => {
      const questionContainer = document.getElementById('question-container');

      data.forEach((question, index) => {
        const questionElement = document.createElement('div');
        letters = ['A', 'B', 'C', 'D'];
        questionElement.innerHTML = 
        `<h2>Question ${index + 1}:</h2>
        <p>${question.question}</p>
        <ul>
        <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer1}"><span></span>${question.answer1}</label></li>
        <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer2}"><span></span>${question.answer2}</label></li>
        <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer3}"><span></span>${question.answer3}</label></li>
        <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer4}"><span></span>${question.answer4}</label></li>
        </ul>`;

        questionContainer.appendChild(questionElement);

        const answerChoices = questionElement.querySelectorAll(`input[data-question="${index}"]`);
        answerChoices.forEach(choice => {
        choice.addEventListener('change', () => {
          handleChange(choice);
        });
      });
      
        function handleChange(choice) {
          const questionIndex = choice.getAttribute('data-question');
          const selectedChoice = choice.getAttribute('data-choice');
       
                   answerChoices.forEach(otherChoice => {
                     if (otherChoice !== choice) {
                       otherChoice.checked = false;
                     }
                   });
       
                   if (choice.checked) {
                     selectedAnswers[questionIndex] = selectedChoice;
                   } else {
                     selectedAnswers[questionIndex] = undefined;
                   }
                 };
      });

      submitButton.addEventListener('click', () => {
        handleButtonClick(data);
      });

      function handleButtonClick(data) {
        let numCorrectAnswers = 0;
        for (let i = 0; i < selectedAnswers.length; i++) {
          const correctAnswer= data[i].correctAnswer;
          if (selectedAnswers[i] === correctAnswer) {
          numCorrectAnswers++;
          }
        }
        const totalQuestions = data.length;
        const percentage = Math.round((numCorrectAnswers / totalQuestions) * 100);
        const resultMessage = `Result: ${percentage}%`;
      
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = resultMessage;
      }

      document.addEventListener('mouseover', (event) => {
        let audioElement = null;

        if (event.target === submitButton){
          if(!audioElement || audioElement.ended) {
        playThemeSong();
          }
        }
      });

      function playThemeSong() {

        if (audioElement) {
          audioElement.pause();
          audioElement.currentTIme = 0;
        }
        audioElement = new Audio();
        audioElement.src = 'https://www.officetally.com/audio/office.mp3';
        audioElement.play();
        
        document.body.appendChild(audioElement);
        }
});
})



