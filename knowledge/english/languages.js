// Chatbot Version 7 knowledge — english / languages
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'english', category: 'languages', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("chinese")) {
    return "Chinese is the official language of China, Taiwan, and Singapore. Do you want to learn more?";
    }
  else if (lowerMessage.includes("can i change your voice")) {
    return "No, there is not a way to change my voice. However, you can change the language, which will change my voice to that language’s voice.";
    }
  else if (lowerMessage.includes("can i change the voice")) {
    return "No, there is not a way to change my voice. However, you can change the language, which will change my voice to that language’s voice.";
    }
  else if (lowerMessage.includes("how") &&  lowerMessage.includes("change")&& lowerMessage.includes("language")) {
    return "Unless you are in call mode, you cannot change the language. To have me respond in another language, you can try talking to me in that language.";
    }
  else if (lowerMessage.includes("djibouti")) {
    return "Djibouti is a small country located on the Horn of Africa, bordered by Eritrea to the north, Ethiopia to the west and south, and Somalia to the southeast. It has a coastline along the Red Sea and the Gulf of Aden, making it a key location for international trade and maritime routes. The capital city, also named Djibouti, serves as the country's political, cultural, and economic hub. With a strategic location near the Bab el-Mandeb Strait, which connects the Red Sea to the Gulf of Aden, Djibouti is a critical port and transportation link for the region. The country has a population of just over 900,000 people and is known for its arid landscapes, salt lakes, and volcanic formations. Djibouti's economy is heavily reliant on trade, port services, and foreign military bases, with its primary exports including coffee and livestock.Djibouti has a diverse culture influenced by its Arab, African, and French heritage, reflecting the historical importance of French colonialism and Islam as the dominant religion. The official languages are French and Arabic, and the country has a relatively peaceful political climate compared to some of its neighbors. <br><br><img src='https://m.media-amazon.com/images/I/51P-e1yYpGL.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://st3.depositphotos.com/8272416/36422/i/450/depositphotos_364221304-stock-photo-aerial-view-blue-salty-lake.jpg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("language") && lowerMessage.includes("you")) {
    return "I know many languages including English, Chinese, French, Spanish, Arabic, Korean, Hindi, Russian, and Japanese. I also have a basic knowledge in many other languages.";
    }
  return undefined;
}});
