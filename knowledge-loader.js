// Chatbot Version 7 — knowledge loader
// Knowledge files use the original simple if / else-if trigger style.
// The old numeric "order" values are no longer written in your knowledge files.
window.chatbotKnowledgeModules = [];
window.registerKnowledgeModule = function(module) { window.chatbotKnowledgeModules.push(module); };
window.chatbotKnowledgeReady = false;

const CHATBOT_KNOWLEDGE_FILES = ['knowledge/english/general.js', 'knowledge/english/geography.js', 'knowledge/spanish/general.js', 'knowledge/cantonese/general.js', 'knowledge/mandarin/general.js', 'knowledge/french/general.js', 'knowledge/korean/general.js', 'knowledge/english/travel.js', 'knowledge/english/animals.js', 'knowledge/russian/general.js', 'knowledge/hindi/general.js', 'knowledge/russian/languages.js', 'knowledge/japanese/general.js', 'knowledge/arabic/general.js', 'knowledge/japanese/geography.js', 'knowledge/spanish/geography.js', 'knowledge/bengali/general.js', 'knowledge/english/jokes.js', 'knowledge/arabic/geography.js', 'knowledge/mandarin/geography.js', 'knowledge/cantonese/science.js', 'knowledge/english/science.js', 'knowledge/thai/general.js', 'knowledge/french/science.js', 'knowledge/korean/travel.js', 'knowledge/french/travel.js', 'knowledge/cantonese/travel.js', 'knowledge/spanish/jokes.js', 'knowledge/english/languages.js', 'knowledge/french/geography.js', 'knowledge/russian/geography.js', 'knowledge/french/jokes.js', 'knowledge/mandarin/languages.js', 'knowledge/mandarin/travel.js'];

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
  // Modules are loaded in the order their first original rule appeared.
  // Inside each module, the original rule order is preserved by the if/else-if chain.
  window.generateBotResponse = function(userMessage, lang) {
    const lowerMessage = userMessage.toLowerCase();
    for (const module of window.chatbotKnowledgeModules) {
      const result = module.run(lowerMessage, userMessage, lang);
      if (result !== undefined) return result;
    }
    const unknownReply = getRandomUnknownResponse(lang);
    lastBotResponse = unknownReply;
    return { text: unknownReply, isUnknown: true };
  };
  window.chatbotKnowledgeReady = true;
  console.log("Chatbot knowledge loaded:", window.chatbotKnowledgeModules.length, "knowledge modules");
}).catch(error => {
  console.error(error);
  window.generateBotResponse = function() {
    return "⚠️ I couldn't load my knowledge files. Please refresh the page.";
  };
});
