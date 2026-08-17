// Chatbot Version 7 knowledge — mandarin / languages
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 1064, language: "mandarin", category: "languages", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("語言") && lowerMessage.includes("你")) {
  return "我識好多語言，包括英文、中文、法文、西班牙文、阿拉伯文、韓文同日文。";
  }
  return undefined;
}});
