// Chatbot Version 7 knowledge — bengali / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'bengali', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("bangladesh")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/bd.png' alt='Bangladesh Flag' style='width: 40px; margin-right: 10px;'>" +
               "আমার সোনার বাংলা</h2>" +
               "<i>আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।<br>" +
               "চিরদিন তোমায় ভালোবাসবো আমি।<br>" +
               "তোমার বুকে গাহিবো, তোমার ধ্বনিতে ঐ।<br>" +
               "ফিরে আসবে সোনার বাংলার গান,<br>" +
               "এবং চিরকাল থাকবে প্রাণ! </i>";
      }
  return undefined;
}});
