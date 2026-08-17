// Chatbot Version 7 knowledge — russian / languages
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 107, language: "russian", category: "languages", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i don’t speak english") || lowerMessage.includes("i do not speak english")|| lowerMessage.includes("no speak english") || lowerMessage.includes("i dont speak english")) {
  return "Got it. What language would you like me to speak?/知道了。你想让我说什么语言？/D'accord. Dans quelle langue veux-tu que je parle ?/Entendido. ¿Qué idioma te gustaría que hable?/Oke. Bahasa apa yang Anda ingin saya gunakan?/समझ गया। आप मुझे कौन सी भाषा बोलना पसंद करेंगे?/Понятно. На каком языке вы хотите, чтобы я говорил?/分かりました。どの言語で話せばいいですか?/알겠습니다. 어떤 언어로 말씀해 주시겠습니까?/Nakuha ko. Anong wika ang gusto mong sabihin ko?/فهمت. ما هي اللغة التي تريدني أن أتحدث بها؟/";
  }
  return undefined;
}});
