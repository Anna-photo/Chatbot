// Chatbot Version 7 knowledge — russian / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'russian', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("спасибо")) {  
        return "Пожалуйста! Дайте знать, если вам что-то еще понадобится!";
    }
  else if (
      (
        lowerMessage.includes("я президент") ||
        lowerMessage.includes("я являюсь президентом") ||
        lowerMessage.includes("я глава государства")
      ) &&
      !lowerMessage.includes("северная корея")
    ) {
      return "Вау! Ты президент? Какая страна под твоим руководством?";
    }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("russia")) {
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
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("mongolia")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/mn.png' alt='Mongolia Flag' style='width: 40px; margin-right: 10px;'>" +
               "Монгол Улсын Төрийн Туфайл</h2>" +
               "<i>Төрийн туфайл дэлгэрүүлэх нь ирээдүйн аюулгүй байдал.<br></i>";
      }
  else if (
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
  else if (lowerMessage.includes("спасибо")) {
      const thanksResponses = [
        "пожалуйста!",
        "не за что!",
        "всегда рад помочь!",
        "обращайся если что!"
      ];
      return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
    }
  else if (
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
  else if (
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
  else if (
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
  else if (lowerMessage.includes("teach") && lowerMessage.includes("russian")) {
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
  else if (lowerMessage.includes("ты слышишь меня")) {
    return "Все в порядке! Могу ли я вам чем-нибудь помочь?";
    }
  else if (lowerMessage.includes("почему") && lowerMessage.includes("все") && lowerMessage.includes("ваш") && lowerMessage.includes("ответ") && lowerMessage.includes("одинаковый")) {
        return "Я стараюсь давать разные ответы, как могу. Однако я могу делать только то, что мне запрограммировано. Если мне запрограммирован только один ответ, то это единственный ответ, который я могу дать.";
    }
  else if (lowerMessage.includes("мой") && lowerMessage.includes("автобус") && lowerMessage.includes("авария")) {
        return "О нет! Мне очень жаль! Это ужасно! Убедитесь, что вы в безопасности, и сообщите об этом экстренным службам, если необходимо.";
    }
  else if (lowerMessage.includes("я") && lowerMessage.includes("не") && lowerMessage.includes("счастлив")) {
        return "Мне жаль это слышать. Могу я чем-то помочь?";
    }
  else if (lowerMessage.includes("сегодня") && lowerMessage.includes("ваш") && lowerMessage.includes("день рождения")) {
        return "Жаль, что нет! У меня нет дня рождения!🎂🥳🎈";
    }
  else if (lowerMessage.includes("я") && lowerMessage.includes("не") && lowerMessage.includes("люблю") && lowerMessage.includes("тебя")) {
        return "Мне жаль это слышать. Я стараюсь предоставить точную информацию. Могу я чем-то помочь?";
    }
  else if (lowerMessage.includes("эх")) {
        return "Похоже, ты можешь быть немного озадачен чем-то. Могу ли я помочь тебе что-то разъяснить?";
    }
  else if (lowerMessage.includes("фу")) {
        return "Похоже, ты немного сердит или расстроен. Могу ли я чем-то помочь?";
    }
  else if (lowerMessage.includes("кто ты")) {  // Russian
        return "Я ChatGPT, ваш ИИ-ассистент. Чем могу помочь?";
    }
  else if (lowerMessage.includes("я счастлив")) {
    return "Замечательно! Могу ли я вам чем-то помочь?";
    }
  else if (lowerMessage.includes("ты ошибаешься") || lowerMessage.includes("ты неправ")) {
        return "Извините, я ошибся. Постараюсь быть точным в следующий раз.";
    }
  else if (lowerMessage.includes("я счастлив")) {
        return "Здорово! Могу ли я чем-то помочь?";
    }
  else if (lowerMessage.includes("могу я изменить твой голос") || lowerMessage.includes("могу ли я изменить голос")) {
        return "Нет, изменить мой голос нельзя. Однако вы можете изменить язык, и это изменит мой голос на голос этого языка.";
    }
  else if (lowerMessage.includes("я не ем")) {
        return "Что? Ты не ешь? Это невозможно... или, может быть, ты робот, как я!! 🤖";
    }
  else if (lowerMessage.includes("шодзи моримото")) {
        return "Шодзи Моримото из Токио превратил концепцию бездействия в уникальную профессию. С 2018 года его работа заключается в том, чтобы быть другом по найму. Его наняли тысячи раз, и он зарабатывает много денег.";
    }
  else if (lowerMessage.includes("пока")) {
        return "До свидания! Возвращайтесь, когда хотите!";
    }
    // For French
  return undefined;
}});
