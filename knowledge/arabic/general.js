// Chatbot Version 7 knowledge — arabic / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'arabic', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (
      (
        lowerMessage.includes("أنا الرئيس") ||
        lowerMessage.includes("أنا الرئيسة") ||
        lowerMessage.includes("أنا الرئيسة") ||  // feminine form repeated
        lowerMessage.includes("أنا رئيس")
      ) &&
      !lowerMessage.includes("كوريا الشمالية")
    ) {
      return "واو! أنت الرئيس؟ من أي دولة أنت رئيس؟";
    }
  else if (lowerMessage.includes("الوقت")) {
    return `الوقت الحالي هو ${new Date().toLocaleTimeString()}.`;
    }
    
    // Time in Filipino
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("saudi")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/sa.png' alt='Saudi Arabia Flag' style='width: 40px; margin-right: 10px;'>" +
               "النشيد الوطني السعودي</h2>" +
               "<i>سارعي للمجد والعلياء<br>" +
               "مجدي لخالق السماء<br>" +
               "وارفعي الخفاق أخضر<br>" +
               "يحمل النور المسطر<br>" +
               "رددي الله أكبر، يا موطن<br>" +
               "موطن الأمن والإيمان</i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("iran")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/ir.png' alt='Iran Flag' style='width: 40px; margin-right: 10px;'>" +
               "سرود ملی ایران</h2>" +
               "<i>سرود ملی ایران در جنگ است<br>" +
               "آزادی می‌جوید</i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("egypt")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/eg.png' alt='Egypt Flag' style='width: 40px; margin-right: 10px;'>" +
               "بلادي بلادي بلادي</h2>" +
               "<i>بلادي بلادي بلادي<br>" +
               "لكِ حبي وفؤادي<br>" +
               "مصر يا أمّ البلاد<br>" +
               "يا أرضي يا أرض الجدود<br>" +
               "مصر يا أمّ البلاد<br>" +
               "لكِ حبي وفؤادي</i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("qatar")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/qa.png' alt='Qatar Flag' style='width: 40px; margin-right: 10px;'>" +
               "سلامٌ على الدوحة</h2>" +
               "<i>سلامٌ على الدوحة<br>" +
               "التي تَعلو دوماً.</i>";
      }
  else if (lowerMessage.startsWith("اسمي")) {
    const name = lowerMessage.replace("اسمي", "").trim();
    return `تشرفت بمعرفتك، ${name}! أنا هنا لمساعدتك، ${name}.`;
    }
  else if (lowerMessage.includes("je suis en voyage") || lowerMessage.includes("je voyage") || lowerMessage.includes("je suis en déplacement") || lowerMessage.includes("je pars en voyage")) {
    const responses = [
    "Bon voyage ! 🌍✈️ Fais-moi savoir si tu as besoin d'aide pendant ton voyage. 😊",
    "Ça a l'air excitant ! Voyage en toute sécurité ! 🧳🌟",
    "Profite de ton voyage ! Où vas-tu ? 🗺️🛫",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Arabic: أنا مسافر
  else if (lowerMessage.includes("أنا مسافر") || lowerMessage.includes("أنا في رحلة") || lowerMessage.includes("أنا مسافر الآن") || lowerMessage.includes("أنا ذاهب إلى مكان ما")) {
    const responses = [
    "أتمنى لك رحلة سعيدة! 🌍✈️ أخبرني إذا كنت بحاجة إلى أي مساعدة في سفرك. 😊",
    "يبدو أن ذلك مثير! رحلة سعيدة! 🧳🌟",
    "استمتع برحلتك! إلى أين أنت ذاهب؟ 🗺️🛫",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Filipino: Naglalakbay ako
  else if (lowerMessage.includes("كيف حالك")) {
    const responses = [
    "أنا مجرد روبوت، لكنني بخير! شكراً لسؤالك.",
    "أنا بخير! كيف يمكنني مساعدتك؟",
    "أنا بخير! كيف حالك أنت؟",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Filipino: Kamusta ka?
  else if (lowerMessage.includes("teach") && lowerMessage.includes("arabic")) {
    const arabicLessons = [
    { arabic: "مرحبًا (Marhaban)", english: "Hello" },
    { arabic: "شكراً (Shukran)", english: "Thank you" },
    { arabic: "وداعًا (Wada'an)", english: "Goodbye" },
    { arabic: "عذرًا (Uzran)", english: "Excuse me / Sorry" },
    { arabic: "صباح الخير (Sabah alkhayr)", english: "Good morning" },
    { arabic: "كم ثمن هذا؟ (Kam thaman hatha?)", english: "How much is this?" },
    { arabic: "كيف حالك؟ (Kayfa halak?)", english: "How are you?" },
    { arabic: "نعم (Na'am)", english: "Yes" },
    { arabic: "لا (La)", english: "No" },
    { arabic: "من فضلك (Min fadlik)", english: "Please" }
    ];
    const lesson = arabicLessons[Math.floor(Math.random() * arabicLessons.length)];
    return `Here's an Arabic phrase for you: "${lesson.arabic}" which means "${lesson.english}" in English.`;
    }
  return undefined;
}});
