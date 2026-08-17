// Chatbot Version 7 knowledge — french / science
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 384, language: "french", category: "science", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("start trivia") || lowerMessage.includes("let's do trivia")|| lowerMessage.includes("give me a quiz")) {
    currentQuestion = 0; // Reset the question index
    score = 0; // Reset score
    const questions = [
    {
      question: "What is the capital of France?",
      answer: "paris",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Who wrote 'Hamlet'?",
      answer: "shakespeare",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the smallest planet in our solar system?",
      answer: "mercury",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What year did the Titanic sink?",
      answer: "1912",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answer: "oxygen",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "blue whale",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "leonardo da vinci",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "In what country would you find the ancient city of Petra?",
      answer: "jordan",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the capital of Japan?",
      answer: "tokyo",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the longest river in the world?",
      answer: "amazon",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "mars",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "In which year did World War I start?",
      answer: "1914",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Who was the first president of the United States?",
      answer: "george washington",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "mount everest",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which element has the chemical symbol 'Au'?",
      answer: "gold",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the capital of Canada?",
      answer: "ottawa",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answer: "japan",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answer: "diamond",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which planet is closest to the Sun?",
      answer: "mercury",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: "pacific ocean",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What year did the first man land on the moon?",
      answer: "1969",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which country invented pizza?",
      answer: "italy",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Who is known as the Father of Modern Physics?",
      answer: "albert einstein",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      answer: "lion",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the smallest country in the world?",
      answer: "vatican city",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the tallest building in the world?",
      answer: "burj khalifa",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "Which instrument has 88 keys?",
      answer: "piano",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    },
    {
      question: "What is the capital of Italy?",
      answer: "rome",
      instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
    }
    ];
    return `
      <p>Let's play trivia! I'll ask you a series of questions, and you try to answer them.</p>
      <p>Here's your first question:</p>
      <p><strong>${questions[currentQuestion].question}</strong></p>
    `;
  }
  return undefined;
}});
