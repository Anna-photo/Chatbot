// Chatbot Version 7 knowledge — thai / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'thai', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("สวัสดี")) {
    return "สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้างวันนี้?";
    }
    //Greetings in Hindi
  return undefined;
}});
