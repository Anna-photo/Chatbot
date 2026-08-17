// Chatbot Version 7 knowledge — russian / geography
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'russian', category: 'geography', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я") && lowerMessage.includes("никогда") && lowerMessage.includes("не") && lowerMessage.includes("буду") && lowerMessage.includes("использовать") && lowerMessage.includes("тебя")) {
        return "Мне жаль это слышать. Я стараюсь делать все возможное. Надеюсь, ты передумаешь и вернешься в будущем.";
    }
    
    // Japanese
  else if (lowerMessage.includes("кто ты")) {
        return "Я твой дружелюбный помощник чат-бот ИИ. Чем могу помочь?";
    }
    
    // For Japanese
  return undefined;
}});
