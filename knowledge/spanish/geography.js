// Chatbot Version 7 knowledge — spanish / geography
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'spanish', category: 'geography', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("spain")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/es.png' alt='Spain Flag' style='width: 40px; margin-right: 10px;'>" +
               "Marcha Real</h2>" +
               "<i>¡Viva España!<br>" +
               "alzad los brazos, hijos del pueblo español,<br>" +
               "¡Gloria a la Patria que supo seguir,<br>" +
               "sobre el azul del cielo, el sol!<br>" +
               "Triunfa, España, al sol de la libertad,<br>" +
               "Y gloria a los héroes que han dado su vida<br>" +
               "por la paz del mundo y la unión de los pueblos. </i>";
      }
  return undefined;
}});
