// Chatbot Version 7 knowledge — russian / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 101, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("спасибо")) {  
      return "Пожалуйста! Дайте знать, если вам что-то еще понадобится!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 124, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("я президент") ||
      lowerMessage.includes("я являюсь президентом") ||
      lowerMessage.includes("я глава государства")
    ) &&
    !lowerMessage.includes("северная корея")
  ) {
    return "Вау! Ты президент? Какая страна под твоим руководством?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 208, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("russia")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/ru.png' alt='Russia Flag' style='width: 40px; margin-right: 10px;'>" +
             "Государственный гимн Российской Федерации</h2>" +
             "<i>Россия — священная наша держава,<br>" +
             "Россия — любимая наша страна.<br>" +
             "Могучая воля, великая слава —<br>" +
             "Твое достоянье на все времена!<br>" +
             "Славься, Отечество наше свободное,<br>" +
             "Братских народов союз вековой!<br>" +
             "Предками данная нам мудрость народная<br>" +
             "Славься, Отечество наше свободное!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 228, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("mongolia")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/mn.png' alt='Mongolia Flag' style='width: 40px; margin-right: 10px;'>" +
             "Монгол Улсын Төрийн Туфайл</h2>" +
             "<i>Төрийн туфайл дэлгэрүүлэх нь ирээдүйн аюулгүй байдал.<br></i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 473, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("привет") ||
    lowerMessage.includes("здравствуйте")
  ) {
    const greetings = [
      "привет! как я могу помочь?",
      "здравствуйте! чем могу помочь?",
      "привет! рад тебя видеть!",
      "здравствуйте! как ваши дела?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 474, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("спасибо")) {
    const thanksResponses = [
      "пожалуйста!",
      "не за что!",
      "всегда рад помочь!",
      "обращайся если что!"
    ];
    return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 475, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("до свидания") ||
    lowerMessage.includes("пока")
  ) {
    const goodbyeResponses = [
      "до свидания! всего хорошего!",
      "пока! береги себя!",
      "до скорого!",
      "пока! возвращайся ещё!"
    ];
    return goodbyeResponses[Math.floor(Math.random() * goodbyeResponses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 476, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("пожалуйста")
  ) {
    const pleaseResponses = [
      "чем могу помочь?",
      "спрашивай что угодно!",
      "я здесь, чтобы помочь!",
      "давай, задавай вопросы!"
    ];
    return pleaseResponses[Math.floor(Math.random() * pleaseResponses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 477, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("извините") ||
    lowerMessage.includes("прости")
  ) {
    const sorryResponses = [
      "ничего страшного!",
      "всё в порядке!",
      "не переживай!",
      "всё хорошо, не волнуйся!"
    ];
    return sorryResponses[Math.floor(Math.random() * sorryResponses.length)];
  }
  
  // Spanish: ¿Cómo estás?
  return undefined;
}});

window.registerKnowledgeRule({ order: 486, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("russian")) {
  const russianLessons = [
  { russian: "Привет (Privet)", english: "Hello" },
  { russian: "Спасибо (Spasibo)", english: "Thank you" },
  { russian: "До свидания (Do svidaniya)", english: "Goodbye" },
  { russian: "Извините (Izvinite)", english: "Excuse me / Sorry" },
  { russian: "Доброе утро (Dobroye utro)", english: "Good morning" },
  { russian: "Сколько это стоит? (Skol'ko eto stoit?)", english: "How much is this?" },
  { russian: "Как дела? (Kak dela?)", english: "How are you?" },
  { russian: "Да (Da)", english: "Yes" },
  { russian: "Нет (Net)", english: "No" },
  { russian: "Пожалуйста (Pozhaluysta)", english: "Please" }
  ];
  const lesson = russianLessons[Math.floor(Math.random() * russianLessons.length)];
  return `Here's a Russian phrase for you: "${lesson.russian}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 616, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ты слышишь меня")) {
  return "Все в порядке! Могу ли я вам чем-нибудь помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 718, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("почему") && lowerMessage.includes("все") && lowerMessage.includes("ваш") && lowerMessage.includes("ответ") && lowerMessage.includes("одинаковый")) {
      return "Я стараюсь давать разные ответы, как могу. Однако я могу делать только то, что мне запрограммировано. Если мне запрограммирован только один ответ, то это единственный ответ, который я могу дать.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 719, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("мой") && lowerMessage.includes("автобус") && lowerMessage.includes("авария")) {
      return "О нет! Мне очень жаль! Это ужасно! Убедитесь, что вы в безопасности, и сообщите об этом экстренным службам, если необходимо.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 720, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я") && lowerMessage.includes("не") && lowerMessage.includes("счастлив")) {
      return "Мне жаль это слышать. Могу я чем-то помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 721, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("сегодня") && lowerMessage.includes("ваш") && lowerMessage.includes("день рождения")) {
      return "Жаль, что нет! У меня нет дня рождения!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 722, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я") && lowerMessage.includes("не") && lowerMessage.includes("люблю") && lowerMessage.includes("тебя")) {
      return "Мне жаль это слышать. Я стараюсь предоставить точную информацию. Могу я чем-то помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 754, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("эх")) {
      return "Похоже, ты можешь быть немного озадачен чем-то. Могу ли я помочь тебе что-то разъяснить?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 755, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("фу")) {
      return "Похоже, ты немного сердит или расстроен. Могу ли я чем-то помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 769, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("кто ты")) {  // Russian
      return "Я ChatGPT, ваш ИИ-ассистент. Чем могу помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 772, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я счастлив")) {
  return "Замечательно! Могу ли я вам чем-то помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 845, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ты ошибаешься") || lowerMessage.includes("ты неправ")) {
      return "Извините, я ошибся. Постараюсь быть точным в следующий раз.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 846, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я счастлив")) {
      return "Здорово! Могу ли я чем-то помочь?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 847, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("могу я изменить твой голос") || lowerMessage.includes("могу ли я изменить голос")) {
      return "Нет, изменить мой голос нельзя. Однако вы можете изменить язык, и это изменит мой голос на голос этого языка.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 848, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("я не ем")) {
      return "Что? Ты не ешь? Это невозможно... или, может быть, ты робот, как я!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 849, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("шодзи моримото")) {
      return "Шодзи Моримото из Токио превратил концепцию бездействия в уникальную профессию. С 2018 года его работа заключается в том, чтобы быть другом по найму. Его наняли тысячи раз, и он зарабатывает много денег.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 850, language: "russian", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("пока")) {
      return "До свидания! Возвращайтесь, когда хотите!";
  }
  // For French
  return undefined;
}});
