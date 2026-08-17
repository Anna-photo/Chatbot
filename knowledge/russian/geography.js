// Chatbot Version 7 knowledge — russian / geography
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 723, language: "russian", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я") && lowerMessage.includes("никогда") && lowerMessage.includes("не") && lowerMessage.includes("буду") && lowerMessage.includes("использовать") && lowerMessage.includes("тебя")) {
      return "Мне жаль это слышать. Я стараюсь делать все возможное. Надеюсь, ты передумаешь и вернешься в будущем.";
  }
  
  // Japanese
  return undefined;
}});

window.registerKnowledgeRule({ order: 756, language: "russian", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("кто ты")) {
      return "Я твой дружелюбный помощник чат-бот ИИ. Чем могу помочь?";
  }
  
  // For Japanese
  return undefined;
}});
