// Chatbot Version 7 knowledge — korean / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 16, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("salut")) {
          return "Salut! Comment ça va ?";
        }
  
        // For "안녕" and "안녕하세요" (hello)
  return undefined;
}});

window.registerKnowledgeRule({ order: 17, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("안녕") || lowerMessage.includes("안녕하세요")) {
          return "안녕하세요! 어떻게 도와드릴까요?";
        }
  return undefined;
}});

window.registerKnowledgeRule({ order: 126, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("나는 대통령이다") ||
      lowerMessage.includes("나는 대통령입니다") ||
      lowerMessage.includes("내가 대통령이다") ||
      lowerMessage.includes("내가 대통령입니다")
    ) &&
    !lowerMessage.includes("북한")
  ) {
    return "와! 당신이 대통령인가요? 어느 나라의 대통령인가요?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 133, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("고마워") || lowerMessage.includes("감사합니다") || lowerMessage.includes("고맙습니다")) {
    return "천만에요! 도와드릴 수 있어서 기쁩니다.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 157, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("좋은")) {
  return `좋습니다! 오늘은 어떻게 도와드릴까요?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 160, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("안녕히 가세요")) {
  return `안녕! 곧 다시 만나기를 바랍니다!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 203, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("north korea")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/kp.png' alt='North Korea Flag' style='width: 40px; margin-right: 10px;'>" +
             "애국가</h2>" +
             "<i>동해물과 백두산이 마르고 닳도록<br>" +
             "하느님이 보우하사 우리 나라 만세<br>" +
             "무궁화 삼천리 화려 강산<br>" +
             "대한 사람 대한으로 길이 보전하세.<br><br>" +
             "남산 위에 저 소나무 철갑을 두른 듯<br>" +
             "바람 서리 불변함은 우리 나라 만세<br>" +
             "무궁화 삼천리 화려 강산<br>" +
             "대한 사람 대한으로 길이 보전하세.</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 212, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("south korea")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/kr.png' alt='South Korea Flag' style='width: 40px; margin-right: 10px;'>" +
             "애국가</h2>" +
             "<i>동해물과 백두산이 마르고 닳도록<br>" +
             "하느님이 보우하사 우리나라 만세<br>" +
             "무궁화 삼천리 화려강산<br>" +
             "대한 사람 대한으로 길이 보전하세!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 329, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("어떻게 지내세요")) {
  return "저는 잘 지내고 있어요! 오늘은 어떻게 도와드릴까요?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 386, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("여행 중") || 
    lowerMessage.includes("여행하고 있어요") || 
    lowerMessage.includes("지금 여행 중이에요") || 
    lowerMessage.includes("어딘가로 가고 있어요")
  ) {
    const responses = [
      "즐거운 여행 되세요! 🌍✈️ 여행 중 도움이 필요하면 알려주세요. 😊",
      "정말 신나겠어요! 안전한 여행 되세요! 🧳🌟",
      "여행을 즐기세요! 어디로 가고 계신가요? 🗺️🛫",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  
  // Hobbit
  return undefined;
}});

window.registerKnowledgeRule({ order: 485, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("korean")) {
  const koreanLessons = [
  { korean: "안녕하세요 (Annyeonghaseyo)", english: "Hello" },
  { korean: "감사합니다 (Gamsahamnida)", english: "Thank you" },
  { korean: "안녕히 가세요 (Annyeonghi gaseyo)", english: "Goodbye" },
  { korean: "죄송합니다 (Joesonghamnida)", english: "Excuse me / Sorry" },
  { korean: "좋은 아침이에요 (Joeun achim-ieyo)", english: "Good morning" },
  { korean: "이거 얼마에요? (Igeo eolmaeyo?)", english: "How much is this?" },
  { korean: "어떻게 지내세요? (Eotteoke jinaeseyo?)", english: "How are you?" },
  { korean: "네 (Ne)", english: "Yes" },
  { korean: "아니요 (Aniyo)", english: "No" },
  { korean: "제발 (Jebal)", english: "Please" }
  ];
  const lesson = koreanLessons[Math.floor(Math.random() * koreanLessons.length)];
  return `Here's a Korean phrase for you: "${lesson.korean}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 544, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("응답하지 마") || lowerMessage.includes("답변하지 마")) {
    return "  ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 736, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("나는 행복하다")) {
  return "그거 좋네요! 제가 도와드릴 수 있는 게 있나요?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 763, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("감사합니다")) {
      return "천만에요! 어떻게 도와드릴까요?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 771, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("너는 누구야")) {  // Korean
      return "나는 ChatGPT, 너의 AI 도우미야. 어떻게 도와줄까?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 868, language: "korean", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("미국")) {
  return "미국은 북아메리카에 위치한 큰 나라로, 다양한 문화, 광활한 풍경, 그리고 세계적 영향력으로 유명합니다. 이 나라는 50개의 주와 연방 지구로 구성되어 있습니다. <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});
