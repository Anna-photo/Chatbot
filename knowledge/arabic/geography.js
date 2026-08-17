// Chatbot Version 7 knowledge — arabic / geography
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 225, language: "arabic", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("yemen")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/ye.png' alt='Yemen Flag' style='width: 40px; margin-right: 10px;'>" +
           "النشيد الوطني اليمني (The National Anthem of Yemen)</h2>" +
           "<i>مجدُ الأبطالِ في سَماءِ المعالي<br>" +
           "وجُودُ المجدِ ينبت في الأعالي<br>" +
           "نحن أبطالُ الأملِ المنيع<br>" +
           "لبناءِ المجدِ من غيوُرِ الظلام.<br><br>" +
           "نحن من أمةٍ ما ملّت في السُرى<br>" +
           "من عراقِ النصرِ وكُهُولِ الأحلام.<br><br>" +
           "أنتِ أُمُّنا اليمنُ.<br>" +
           "نحن الأملُ، المستقبلُ المشرقُ<br>" +
           "ونحن الأملُ!<br><br></i>";
  }
  return undefined;
}});
