// Chatbot Version 7 knowledge — mandarin / languages
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'mandarin', category: 'languages', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("語言") && lowerMessage.includes("你")) {
    return "我識好多語言，包括英文、中文、法文、西班牙文、阿拉伯文、韓文同日文。";
    }
  return undefined;
}});
