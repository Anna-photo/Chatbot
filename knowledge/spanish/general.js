// Chatbot Version 7 knowledge — spanish / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 3, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
  (lowerMessage.includes("hola") ||
  lowerMessage.includes("buenos días") ||
  lowerMessage.includes("buenas tardes") ||
  lowerMessage.includes("buenas noches")) &&
  !lowerMessage.includes("scholar")
  ) {
  return "¡Hola! ¿Cómo puedo ayudarte hoy?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 117, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("gracias") || lowerMessage.includes("te lo agradezco")) {
    return "¡De nada! Estoy aquí para ayudarte.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 130, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("soy presidente") ||
      lowerMessage.includes("yo soy presidente") ||
      lowerMessage.includes("yo soy el presidente") ||
      lowerMessage.includes("soy el presidente")
    ) &&
    !lowerMessage.includes("corea del norte")
  ) {
    return "¡Guau! ¿Eres presidente? ¿De qué país eres presidente?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 375, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("puedes oírme")) {
    const responses = [
      "Sí, te escucho bien. ¿Qué pasa?",
      "¡Puedo oírte! ¿Qué necesitas?",
      "¡Sí, te escucho! ¿Qué quieres?",
      "Puedo escucharte. ¿Qué puedo hacer por ti?",
      "Puedo escucharte.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 478, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("cómo estás")) {
  const responses = [
  "Soy solo un bot, ¡pero estoy muy bien! Gracias por preguntar.",
  "¡Estoy muy bien! ¿Cómo puedo ayudarte?",
  "¡Estoy muy bien! ¿Y tú?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // French: Comment ça va ?
  return undefined;
}});

window.registerKnowledgeRule({ order: 483, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("spanish")) {
  const spanishLessons = [
  { spanish: "Hola", english: "Hello" },
  { spanish: "Gracias", english: "Thank you" },
  { spanish: "Adiós", english: "Goodbye" },
  { spanish: "Perdón", english: "Excuse me / Sorry" },
  { spanish: "Buenos días", english: "Good morning" },
  { spanish: "¿Cuánto cuesta esto?", english: "How much is this?" },
  { spanish: "¿Cómo estás?", english: "How are you?" },
  { spanish: "Sí", english: "Yes" },
  { spanish: "No", english: "No" },
  { spanish: "Por favor", english: "Please" }
  ];
  const lesson = spanishLessons[Math.floor(Math.random() * spanishLessons.length)];
  return `Here's a Spanish phrase for you: "${lesson.spanish}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 491, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("portuguese")) {
  const portugueseLessons = [
  { portuguese: "Olá", english: "Hello" },
  { portuguese: "Obrigado", english: "Thank you" },
  { portuguese: "Adeus", english: "Goodbye" },
  { portuguese: "Desculpe", english: "Excuse me / Sorry" },
  { portuguese: "Bom dia", english: "Good morning" },
  { portuguese: "Quanto custa isto?", english: "How much is this?" },
  { portuguese: "Como está?", english: "How are you?" },
  { portuguese: "Sim", english: "Yes" },
  { portuguese: "Não", english: "No" },
  { portuguese: "Por favor", english: "Please" }
  ];
  const lesson = portugueseLessons[Math.floor(Math.random() * portugueseLessons.length)];
  return `Here's a Portuguese phrase for you: "${lesson.portuguese}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 700, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("por qué") && lowerMessage.includes("todo") && lowerMessage.includes("tu") && lowerMessage.includes("respuesta") && lowerMessage.includes("igual")) {
      return "Intento dar diferentes respuestas lo mejor que puedo. Sin embargo, solo puedo hacer lo que se me ha programado. Si solo se me ha programado una respuesta, entonces esa es la única respuesta que puedo dar.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 750, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("quién eres")) {
      return "Soy tu asistente de chatbot IA amigable. ¿Cómo puedo ayudarte?";
  }
  
  // For French
  return undefined;
}});

window.registerKnowledgeRule({ order: 768, language: "spanish", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("¿quién eres?")) {  // Spanish
      return "Soy ChatGPT, tu asistente de IA. ¿En qué puedo ayudarte?";
  }
  return undefined;
}});
