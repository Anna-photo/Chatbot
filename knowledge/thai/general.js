// Chatbot Version 7 knowledge — thai / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 307, language: "thai", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("สวัสดี")) {
  return "สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้างวันนี้?";
  }
  //Greetings in Hindi
  return undefined;
}});
