document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-button');
  let audioElement = null;
  const selectedAnswers = [];

  fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(data => {
      const questionContainer = document.getElementById('question-container');

      //Looping through each question at it's current index position
      data.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);

        questionContainer.appendChild(questionElement);
      
      function createQuestionElement(question, index) {
        //creating an HTML element to hold each question ('div')
        const questionElement = document.createElement('div');
        //Numbering all questions on HTML page starting at #1 to the end (<h2>)
        //Displaying value of questions on HTML page(<p>)
        //Setting structure of answer choices, and display of answer 
        //choices/values on HTML page per question index.
        questionElement.innerHTML = `<h2>Question ${index + 1}:</h2>
        <p>${question.question}</p>
        <ul>
          <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer1}"><span></span>${question.answer1}</label></li>
          <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer2}"><span></span>${question.answer2}</label></li>
          <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer3}"><span></span>${question.answer3}</label></li>
          <li><label><input type="checkbox" class="answer-choice" data-question="${index}" data-choice="${question.answer4}"><span></span>${question.answer4}</label></li>
        </ul>`;
      return questionElement;
      };
        //Selecting all answer choices per their question index and 
        //saving this functionality in a variable.
        //'change' event listener adds user capability to 
        //select/'change' different answer choices.
        const answerChoices = questionElement.querySelectorAll(`input[data-question="${index}"]`);
        answerChoices.forEach(choice => {
        choice.addEventListener('change', () => {
          handleChange(choice);
        });
      });
      
      //This code snippet enables one-choice selection per question and 
      //stores the selected choices in the selectedAnswers array for 
      //later use or manipulation.
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

      //Setting correct answers variable to 0, iterating through selected answers and 
      //checking if any of them are the correct answer.  Then incrementing correct answers variable accordingly.
      function handleButtonClick(data) {
        let numCorrectAnswers = 0;
        for (let i = 0; i < selectedAnswers.length; i++) {
          const correctAnswer= data[i].correctAnswer;
          if (selectedAnswers[i] === correctAnswer) {
          numCorrectAnswers++;
          }
        }
        //turning number of correct answers into a percentage and storing it in a variable
       //Saving the result message in a variable, and uploading to feedback element in HTML through textContent.
        const totalQuestions = data.length;
        const percentage = Math.round((numCorrectAnswers / totalQuestions) * 100);
        const resultMessage = `Result: ${percentage}%`;
      
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = resultMessage;
      }

    //Hover over event feature for submit button
    //If event has not been triggered on feature OR if it has been triggered and the audio has ended, the theme song can replay when the event is triggered again.
      document.addEventListener('mouseover', (event) => {
        if (event.target === submitButton){
          if(!audioElement || audioElement.ended) {
        playThemeSong();
          }
        }
      });

      function playThemeSong() {

      // If audio file is present, pause the audio file at it's current position to ensure the following line gets executed and the audio starts from the beginning.
        if (audioElement) {
          audioElement.currentTime = 0;
        }
        //Initiating Audio built in object that represents an audio element.
        //This provides a way to programatically create and control audio playback on a webpage.  
        //Once it is created and assigned to the audioElement variable, you can use various methods and properties available on the Audio object.
        audioElement = new Audio();
        audioElement.src = 'https://www.officetally.com/audio/office.mp3';
        audioElement.play();
        
        document.body.appendChild(audioElement);
        }
});
});



