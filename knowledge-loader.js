// Chatbot Version 7 — knowledge loader
// Loads every language/category knowledge module, then builds the same response engine.
window.chatbotKnowledgeRules = [];
window.registerKnowledgeRule = function(rule) { window.chatbotKnowledgeRules.push(rule); };
window.chatbotKnowledgeReady = false;

const CHATBOT_KNOWLEDGE_FILES = [
  "knowledge/arabic/general.js",
  "knowledge/arabic/geography.js",
  "knowledge/bengali/general.js",
  "knowledge/cantonese/general.js",
  "knowledge/cantonese/science.js",
  "knowledge/cantonese/travel.js",
  "knowledge/english/animals.js",
  "knowledge/english/general.js",
  "knowledge/english/geography.js",
  "knowledge/english/jokes.js",
  "knowledge/english/languages.js",
  "knowledge/english/science.js",
  "knowledge/english/travel.js",
  "knowledge/french/general.js",
  "knowledge/french/geography.js",
  "knowledge/french/jokes.js",
  "knowledge/french/science.js",
  "knowledge/french/travel.js",
  "knowledge/hindi/general.js",
  "knowledge/japanese/general.js",
  "knowledge/japanese/geography.js",
  "knowledge/korean/general.js",
  "knowledge/korean/travel.js",
  "knowledge/mandarin/general.js",
  "knowledge/mandarin/geography.js",
  "knowledge/mandarin/languages.js",
  "knowledge/mandarin/travel.js",
  "knowledge/russian/general.js",
  "knowledge/russian/geography.js",
  "knowledge/russian/languages.js",
  "knowledge/spanish/general.js",
  "knowledge/spanish/geography.js",
  "knowledge/spanish/jokes.js",
  "knowledge/thai/general.js"
];

function loadKnowledgeFile(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = path;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Could not load knowledge file: " + path));
    document.head.appendChild(script);
  });
}

window.chatbotKnowledgePromise = CHATBOT_KNOWLEDGE_FILES.reduce(
  (promise, path) => promise.then(() => loadKnowledgeFile(path)),
  Promise.resolve()
).then(() => {
  window.chatbotKnowledgeRules.sort((a, b) => a.order - b.order);
  window.chatbotKnowledgeReady = true;
  window.generateBotResponse = function(userMessage, lang) {
    const lowerMessage = userMessage.toLowerCase();
    for (const rule of window.chatbotKnowledgeRules) {
      const result = rule.run(lowerMessage, userMessage, lang);
      if (result !== undefined) return result;
    }
    const unknownReply = getRandomUnknownResponse(lang);
    lastBotResponse = unknownReply;
    return { text: unknownReply, isUnknown: true };
  };
  console.log("Chatbot knowledge loaded:", window.chatbotKnowledgeRules.length, "rules");
}).catch(error => {
  console.error(error);
  window.generateBotResponse = function() {
    return "⚠️ I couldn't load my knowledge files. Please refresh the page.";
  };
});
