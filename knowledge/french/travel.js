// Chatbot Version 7 knowledge — french / travel
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'french', category: 'travel', run: function(lowerMessage, userMessage, lang) {
  if (
      lowerMessage.includes("how to become a pilot") || lowerMessage.includes("how to be a pilot") || 
      lowerMessage.includes("how do i become a pilot") || 
      lowerMessage.includes("i want to be a pilot")
    ) {
      const responses = [
        "To become a pilot, you'll need to start with flight training and obtain a private pilot license (PPL). You'll also need to pass medical exams, complete flight hours, and take written exams.",
        "Becoming a pilot involves taking flight lessons, getting a medical certificate, and working toward your private pilot license. After that, you can pursue commercial or airline transport licenses if desired.",
        "To start, you'll need to enroll in a flight school, complete a set number of flight hours, pass written and practical exams, and earn your private pilot certificate. From there, you can work toward more advanced certifications.",
        "To become a pilot, you should first choose the type of pilot you want to be, then enroll in flight training, pass medical exams, log flight hours, and pass both written and flight tests."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  return undefined;
}});
