// Chatbot Version 7 knowledge — japanese / geography
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 209, language: "japanese", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("japan")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/jp.png' alt='Japan Flag' style='width: 40px; margin-right: 10px;'>" +
             "君が代</h2>" +
             "<i>君が代は 千代に 八千代に<br>" +
             "さざれ石の 川の流れの<br>" +
             "末々まで<br>" +
             "天皇陛下万歳！<br>" +
             "天皇陛下万歳！<br>" +
             "千代に八千代に！</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 482, language: "japanese", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("japanese")) {
  const japaneseLessons = [
  { japanese: "こんにちは (Konnichiwa)", english: "Hello" },
  { japanese: "ありがとう (Arigatou)", english: "Thank you" },
  { japanese: "さようなら (Sayounara)", english: "Goodbye" },
  { japanese: "すみません (Sumimasen)", english: "Excuse me / Sorry" },
  { japanese: "おはようございます (Ohayou gozaimasu)", english: "Good morning" },
  { japanese: "いくらですか？ (Ikura desu ka?)", english: "How much is this?" },
  { japanese: "お元気ですか？ (Ogenki desu ka?)", english: "How are you?" },
  { japanese: "はい (Hai)", english: "Yes" },
  { japanese: "いいえ (Iie)", english: "No" },
  { japanese: "お願いします (Onegaishimasu)", english: "Please" }
  ];
  const lesson = japaneseLessons[Math.floor(Math.random() * japaneseLessons.length)];
  return `Here's a Japanese phrase for you: "${lesson.japanese}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 770, language: "japanese", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("あなたは誰ですか")) {  // Japanese
      return "私はChatGPT、あなたのAIアシスタントです。どうお手伝いできますか？";
  }
  return undefined;
}});
