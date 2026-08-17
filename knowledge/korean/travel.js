// Chatbot Version 7 knowledge — korean / travel
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'korean', category: 'travel', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("answer") || lowerMessage.includes("i think it is")|| lowerMessage.includes("i think its")|| lowerMessage.includes("i think it's")) {
      const userAnswer = lowerMessage.split(" ").slice(-1).join(" ").toLowerCase();
      const questions = [
        {
          question: "What is the capital of France?",
          answer: "paris"
        },
        {
          question: "Who wrote 'Hamlet'?",
          answer: "shakespeare"
        },
        {
          question: "What is the smallest planet in our solar system?",
          answer: "mercury"
        }
      ];
    
      if (userAnswer === questions[currentQuestion].answer) {
        score++;
        currentQuestion++;
        if (currentQuestion < questions.length) {
          return `
            <p>Correct! Your current score is <strong>${score}</strong>.</p>
            <p>Next question:</p>
            <p><strong>${questions[currentQuestion].question}</strong></p>
          `;
        } else {
          return `
            <p>Great job! You've completed the trivia quiz with a score of <strong>${score}</strong>.</p>
            <p>Would you like to play again? Type 'start trivia' to begin a new game.</p>
          `;
        }
      } else {
        return `
          <p>Oops! That's not quite right. Try again!</p>
          <p>Your current score is <strong>${score}</strong>.</p>
          <p><strong>${questions[currentQuestion].question}</strong></p>
        `;
      }
    }
    
    
    // Korean: "여행 중이에요" (I'm traveling)
  return undefined;
}});
