// Chatbot Version 7 knowledge — hindi / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 104, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("आप कैसे हैं")) {  
      return "मैं बहुत अच्छा कर रहा हूँ, लेकिन मैं सिर्फ़ एक रोबोट हूँ। मुझे बताइए कि मैं आज आपकी कैसे मदद कर सकता हूँ।.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 156, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("अलविदा")) {
  return `अलविदा। मुझे आशा है कि मैं आपसे जल्द ही फिर मिलूंगा!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 217, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("india")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/in.png' alt='India Flag' style='width: 40px; margin-right: 10px;'>" +
             "जन गण मन</h2>" +
             "<i>जन गण मन अधिनायक जय हे<br>" +
             "भारत भाग्य विधाता<br>" +
             "पंजाब सिंध गुजरात मराठा<br>" +
             "द्राविड़ उत्कल बंगा<br>" +
             "विंध्य हिमाचल यमुना गंगा<br>" +
             "उच्छल जलधि तरंग<br>" +
             "तुम्हारी शरण में हमें सुनीत सुख<br>" +
             "धन्य हो भारत!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 308, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("नमस्ते")) {
  return "नमस्ते! आज मैं आपकी किस प्रकार सहायता कर सकता हूँ?";
  }
  
  // 我係旅行
  return undefined;
}});

window.registerKnowledgeRule({ order: 489, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("hindi")) {
  const hindiLessons = [
  { hindi: "नमस्ते (Namaste)", english: "Hello" },
  { hindi: "धन्यवाद (Dhanyavaad)", english: "Thank you" },
  { hindi: "अलविदा (Alvida)", english: "Goodbye" },
  { hindi: "माफ़ करना (Maaf karna)", english: "Excuse me / Sorry" },
  { hindi: "सुप्रभात (Suprabhat)", english: "Good morning" },
  { hindi: "यह कितने का है? (Yeh kitne ka hai?)", english: "How much is this?" },
  { hindi: "कैसे हो? (Kaise ho?)", english: "How are you?" },
  { hindi: "हां (Haan)", english: "Yes" },
  { hindi: "नहीं (Nahi)", english: "No" },
  { hindi: "कृपया (Kripya)", english: "Please" }
  ];
  const lesson = hindiLessons[Math.floor(Math.random() * hindiLessons.length)];
  return `Here's a Hindi phrase for you: "${lesson.hindi}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 694, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("क्यों") && lowerMessage.includes("सब") && lowerMessage.includes("आपका") && lowerMessage.includes("उत्तर") && lowerMessage.includes("एक जैसा")) {
      return "मैं विभिन्न उत्तर देने की पूरी कोशिश करता हूँ। हालांकि, मैं केवल वही कर सकता हूँ जो मुझे प्रोग्राम किया गया है। यदि केवल एक ही उत्तर मुझे प्रोग्राम किया गया है, तो वही उत्तर मैं दे सकता हूँ।";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 695, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मेरी") && lowerMessage.includes("बस") && lowerMessage.includes("दुर्घटना")) {
      return "अरे नहीं! मुझे बहुत खेद है! यह भयानक लगता है!! सुनिश्चित करें कि आप सुरक्षित रहें और यदि आवश्यक हो तो आपातकालीन सेवाओं को सूचित करें!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 696, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मैं") && lowerMessage.includes("हूँ") && lowerMessage.includes("नहीं") && lowerMessage.includes("खुश")) {
      return "मुझे यह सुनकर दुख हुआ। क्या मैं आपकी किसी तरह मदद कर सकता हूँ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 697, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("आज") && lowerMessage.includes("आपका") && lowerMessage.includes("जन्मदिन")) {
      return "काश ऐसा होता! लेकिन मेरा जन्मदिन नहीं होता!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 698, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मैं") && lowerMessage.includes("नहीं") && lowerMessage.includes("पसंद") && lowerMessage.includes("आपको")) {
      return "मुझे यह सुनकर दुख हुआ। मैं सही जानकारी देने की पूरी कोशिश करता हूँ। क्या मैं आपकी किसी तरह मदद कर सकता हूँ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 699, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मैं") && lowerMessage.includes("कभी") && lowerMessage.includes("इस्तेमाल") && lowerMessage.includes("नहीं") && lowerMessage.includes("करूँगा")) {
      return "मुझे यह सुनकर दुख हुआ। मैं अपनी पूरी कोशिश करता हूँ। मुझे उम्मीद है कि आप अपना मन बदलेंगे और भविष्य में वापस आएंगे।";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 819, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("तुम गलत हो") || lowerMessage.includes("तुम गलत हो")) {
      return "मुझे खेद है, मैंने गलती की। मैं अब से सही होने की कोशिश करूंगा।";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 820, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मैं खुश हूँ")) {
      return "यह शानदार है! क्या मैं आपकी मदद कर सकता हूँ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 821, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("क्या मैं तुम्हारी आवाज बदल सकता हूँ") || lowerMessage.includes("क्या मैं आवाज बदल सकता हूँ")) {
      return "नहीं, मेरी आवाज बदलने का कोई तरीका नहीं है। हालांकि, आप भाषा बदल सकते हैं, जिससे मेरी आवाज उस भाषा की आवाज में बदल जाएगी।";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 822, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("मैं नहीं खाता") || lowerMessage.includes("मैं नहीं खाता")) {
      return "क्या? तुम नहीं खाते? यह असंभव है... या हो सकता है तुम मेरे जैसे रोबोट हो!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 823, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("शोजी मोरीमोटो")) {
      return "शोजी मोरीमोटो, टोक्यो से, ने कुछ न करने के विचार को एक अनोखी नौकरी में बदल दिया है। 2018 से, उनका काम एक दोस्त के रूप में किराए पर लिया जाना है। उन्हें हजारों बार किराए पर लिया गया है और वह बहुत पैसे कमाते हैं।";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 824, language: "hindi", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("अलविदा")) {
      return "अलविदा! जब चाहें वापस आएं!";
  }
  // For Portuguese
  return undefined;
}});
