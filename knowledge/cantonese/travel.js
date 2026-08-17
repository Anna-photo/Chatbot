// Chatbot Version 7 knowledge — cantonese / travel
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 435, language: "cantonese", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("montreal") ||  lowerMessage.includes("montréal")) {
  return "Montréal is the biggest city in the Canadian province of Quebec. It is the second-largest French speaking city in the world.<br><br><img src='https://ottawaroadtrips.com/wp-content/uploads/2023/01/Old-Montreal-winter-Credit-%C2%A9-Tourisme-Montreal-Matthieu-Dupuis.jpg' width='200'><br><br><img src='https://www.authentikcanada.com/uploads/images/orig/blog/belvedere-mont-royal-montreal.jpg' width='200'>";
  }
  
  
  
  // Cantonese: 我而家去旅行
  return undefined;
}});

window.registerKnowledgeRule({ order: 873, language: "cantonese", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("台北101")||lowerMessage.includes("台北一零一")) {
    return "臺北一零一係臺灣臺北嘅地標摩天大樓。佢曾經係世界最高嘅大樓，高度有五百零八米（1,667呎），共有一零一層。二零零四年落成，設計結合咗傳統亞洲建築同現代工程技術。一零一最出名係佢嘅跨年煙花表演，仲有創新嘅抗震同防颱風設計。遊客可以喺89樓嘅觀景台欣賞壯麗嘅景色。<br><br><img src='https://static.wixstatic.com/media/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg' alt='需要網絡連接睇呢張相' width='200'><br><br><img src='https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/7188dad45f93c6833da0240acb79030c_1000x1000.jpg' alt='需要網絡連接睇呢張相' width='200'>";
  }
  return undefined;
}});
