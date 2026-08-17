// Chatbot Version 7 knowledge — french / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 13, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bonjour")) {
          return "Bonjour! Comment ça va ?";
        }
  return undefined;
}});

window.registerKnowledgeRule({ order: 131, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("je suis président") ||
      lowerMessage.includes("je suis le président") ||
      lowerMessage.includes("je suis la présidente")
    ) &&
    !lowerMessage.includes("corée du nord")
  ) {
    return "Wow ! Tu es président ? De quel pays es-tu président ?";
  }
  
  // Remerciements
  return undefined;
}});

window.registerKnowledgeRule({ order: 132, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("merci") || lowerMessage.includes("merci beaucoup") || lowerMessage.includes("je te remercie")) {
    return "De rien ! Je suis là pour vous aider.";
  }
  
  // 감사 (Thank you in Korean)
  return undefined;
}});

window.registerKnowledgeRule({ order: 214, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("france")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/fr.png' alt='France Flag' style='width: 40px; margin-right: 10px;'>" +
             "La Marseillaise</h2>" +
             "<i>Allons enfants de la Patrie,<br>" +
             "Le jour de gloire est arrivé !<br>" +
             "Contre nous de la tyrannie,<br>" +
             "L'étendard sanglant est levé !<br>" +
             "Entendez-vous dans les campagnes<br>" +
             "Mugir ces feroces soldats ?<br>" +
             "Ils viennent jusque dans nos bras<br>" +
             "Égorger nos fils et nos compagnes !</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 479, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("comment ça va")) {
  const responses = [
  "Je ne suis qu'un bot, mais ça va très bien ! Merci de demander.",
  "Ça va très bien ! Comment puis-je vous aider ?",
  "Ça va très bien ! Et toi ?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Arabic: كيف حالك؟
  return undefined;
}});

window.registerKnowledgeRule({ order: 484, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("french")) {
  const frenchLessons = [
  { french: "Bonjour", english: "Hello" },
  { french: "Merci", english: "Thank you" },
  { french: "Au revoir", english: "Goodbye" },
  { french: "Excusez-moi", english: "Excuse me / Sorry" },
  { french: "Bonjour", english: "Good morning" },
  { french: "Combien ça coûte ?", english: "How much is this?" },
  { french: "Comment ça va ?", english: "How are you?" },
  { french: "Oui", english: "Yes" },
  { french: "Non", english: "No" },
  { french: "S'il vous plaît", english: "Please" }
  ];
  const lesson = frenchLessons[Math.floor(Math.random() * frenchLessons.length)];
  return `Here's a French phrase for you: "${lesson.french}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 856, language: "french", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("au revoir")) {
      return "Au revoir! Revenez quand vous voulez!";
  }
  // For Spanish
  return undefined;
}});
