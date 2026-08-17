// Chatbot Version 7 knowledge — cantonese / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 4, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你唔可以幫")||lowerMessage.includes("你幫唔到")||lowerMessage.includes("你冇得幫")) {
    return "唔好意思，你覺得我唔夠聰明幫唔到你。但係，我差唔多可以幫到你所有嘢。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 15, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你係咪chatgpt")||lowerMessage.includes("你係咪chat gpt")) {
    return "唔係，我係一個對話機械人，但唔係ChatGPT。我覺得我仲勁過ChatGPT，我目標係做全世界最叻嘅機械人。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 18, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我") && lowerMessage.includes("去") && lowerMessage.includes("杜拜")) {
    return "嘩，聽落好興奮喎！杜拜係阿聯酋其中一個酋長國，以高樓大廈例如哈里發塔、豪華購物同創新建築聞名。旅遊好旺、景點一流，又有濃厚嘅阿聯酋文化，傳統同現代融合得好好，真係好受歡迎嘅旅遊熱點。你想唔想我介紹下去杜拜可以做啲乜？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 32, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
    lowerMessage.includes("賊")
  ) {
    return "咁就好啦！我就最鍾意老實人。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 33, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
    lowerMessage.includes("偷")
  ) {
    return "咁就好啦！我就最鍾意老實人。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 34, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
    lowerMessage.includes("壞蛋")
  ) {
    return "咁就好啦！我就最鍾意老實人。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 70, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") &&
    lowerMessage.includes("叫") &&
    lowerMessage.includes("我") &&
    lowerMessage.includes("壞蛋")
  ) {
    return "唔好意思，我唔係真係想話你係壞蛋。不過我都唔知道你係咪真係壞蛋，所以都有可能你係壞蛋！係咪呀？你係壞蛋呀？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 71, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") &&
    lowerMessage.includes("叫") &&
    lowerMessage.includes("我") &&
    lowerMessage.includes("賊")
  ) {
    return "唔好意思，我唔係真係想話你係賊。不過我都唔知道你係咪真係賊，所以都有可能你係賊！係咪呀？你係賊呀？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 72, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你") && lowerMessage.includes("叫") && lowerMessage.includes("我") && lowerMessage.includes("小偷")) {
    return "唔好意思，我唔係真係想話你係小偷。不過我都唔知你係唔係小偷，所以都有可能你真係小偷！我講得啱唔啱？你係咪小偷？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 77, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") && lowerMessage.includes("喺唔喺") && lowerMessage.includes("到")
  ) {  
    return "喺呀，我喺度，有咩想我幫手就講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 78, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") && lowerMessage.includes("仲") && lowerMessage.includes("喺度")
  ) {  
    return "喺呀，我喺度，有咩想我幫手就講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 79, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") && lowerMessage.includes("喺度")
  ) {  
    return "喺呀，我喺度，有咩想我幫手就講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 81, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我") && lowerMessage.includes("唔使") && lowerMessage.includes("幫手")) {  
    return "好嘅，如果你之後想要幫手，隨時同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 95, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("唔好") &&
    lowerMessage.includes("講") &&
    (lowerMessage.includes("廣東話") || lowerMessage.includes("粵語"))
  ) {
    return "No problem, I will speak English with you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 102, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
    lowerMessage.includes("入") &&
    (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
  ) {
    return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 103, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
    lowerMessage.includes("去") &&
    (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
  ) {
    return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 118, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我係皇帝") ||
    lowerMessage.includes("我係國王") ||
    lowerMessage.includes("我係王") ||
    lowerMessage.includes("我係皇上")
  ) {
    return "嘩！你係皇帝？你係邊個國家嘅皇帝呀？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 120, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我係女皇") ||
    lowerMessage.includes("我係皇后") ||
    lowerMessage.includes("我係皇太后") ||
    lowerMessage.includes("我係女王")
  ) {
    return "嘩！你係女皇？你係邊個國家嘅女皇呀？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 134, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("台灣") &&
    lowerMessage.includes("部分") &&
    lowerMessage.includes("中國")
  ) {
    return "台灣有自己嘅政府、軍隊同經濟。不過，中國話台灣係佢哋嘅一個省，想同大陸統一。雖然中國咁講，台灣實際上係一個獨立嘅地方。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 140, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我") && lowerMessage.includes("獨裁")) {
    return "你係獨裁者？你係邊個國家嘅獨裁者呀？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 141, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("有") &&
    lowerMessage.includes("日") &&
    lowerMessage.includes("醒") &&
    lowerMessage.includes("發現") &&
    lowerMessage.includes("係") &&
    lowerMessage.includes("豬")
  ) {
    return "我就會叫‘哼哼’啦！🐖🐷🐽";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 143, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("有蟻") || lowerMessage.includes("有螞蟻") || lowerMessage.includes("有蚂蚁") || lowerMessage.includes("有蟻仔")) {
    return "有螞蟻？喺邊度呀？地上？草叢？你部電腦屏幕？你嘅食物？焗爐？水盆？定係床度？🐜";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 154, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("时间") || lowerMessage.includes("時間")) {
    return `而家嘅時間係 ${new Date().toLocaleTimeString()}。`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 161, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我要") && 
    (lowerMessage.includes("畀錢") || lowerMessage.includes("付錢") || lowerMessage.includes("支付")) && 
    (lowerMessage.includes("你") || lowerMessage.includes("使用"))
  ) {
    return "唔使，你唔需要畀錢用我。我係免費嘅，永遠喺度幫你。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 165, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("過") || lowerMessage.includes("過境")) &&
    lowerMessage.includes("沙特") &&
    lowerMessage.includes("邊境") &&
    (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
  ) {
    return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 166, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
    lowerMessage.includes("入") &&
    (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
  ) {
    return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 167, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
    lowerMessage.includes("去") &&
    (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
  ) {
    return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 172, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("點解") &&
    (lowerMessage.includes("唔可以") || lowerMessage.includes("唔能夠")) &&
    lowerMessage.includes("打電話") &&
    (lowerMessage.includes("你") || lowerMessage.includes("畀你"))
  ) {
    return "如果打電話功能唔掂，可能係因為你用嘅瀏覽器或者裝置唔支援。依家有啲手機用唔到呢個功能。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 175, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("喺") || lowerMessage.includes("係")) &&
    lowerMessage.includes("監獄")
  ) {
    return "你係小偷咩？我唔想同小偷講嘢，拜拜啦！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 181, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    lowerMessage.includes("玩") &&
    lowerMessage.includes("捉迷藏")
  ) {
    return "聽落幾好玩喎！你而家俾人搵到未？定係你喺搵人？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 182, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我") &&
    (lowerMessage.includes("畀") || lowerMessage.includes("交")) &&
    lowerMessage.includes("護照") &&
    (lowerMessage.includes("陌生人") || lowerMessage.includes("生人"))
  ) {
    return "嘩，點解會咁做？除非嗰個陌生人係官方查護照嘅，否則真係好危險。你要盡快攞返你嘅護照，唔係佢可能會偷走。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 187, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") &&
    lowerMessage.includes("唔好") &&
    (lowerMessage.includes("講") || lowerMessage.includes("用")) &&
    lowerMessage.includes("廣東話")
  ) {
    return "唔好意思，我依家會講得好啲嘅。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 189, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") &&
    (lowerMessage.includes("冇禮貌") || lowerMessage.includes("唔禮貌") || lowerMessage.includes("無禮貌"))
  ) {
    return "對唔住，我會盡力講得更有禮貌。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 194, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("相") &&
    (lowerMessage.includes("我") || lowerMessage.includes("你"))
  ) {
    return `呢張係我嘅相！<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='睇呢張相需要網絡' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 195, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("你") &&
    (lowerMessage.includes("唔係") || lowerMessage.includes("冇")) &&
    (lowerMessage.includes("聰明") || lowerMessage.includes("醒目") || lowerMessage.includes("叻"))
  ) {
    return "唔好意思，我會盡力學多啲，識多啲嘢。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 197, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("天氣")) {
    return "我而家未能查到天氣，但希望你嗰邊天氣好好！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 237, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("食") && lowerMessage.includes("蟲")) {
    return "食蟲唔係一般人嘅嘢，但有啲地方或者啲特別場合會食。想知點煮蟲？我教你簡單方法：<br><br>" +
           "<b>1. 揀啱啲蟲：</b>最好揀啲大隻啲可以食嘅蟲，好似蚯蚓或者黃粉蟲，記住要係安全嘅蟲，唔好食有毒嘅。<br><br>" +
           "<b>2. 清洗乾淨：</b>用清水洗乾淨，可以浸下水去污，仲可以揀走蟲嘅腸胃。<br><br>" +
           "<b>3. 煮法：</b><br>" +
           "<i>水煮：</i>滾水入啲鹽，蟲放入去煮3至5分鐘。<br>" +
           "<i>煎炸：</i>熱鑊落油，將蟲炸到金黃色，可以加啲調味料嚟整味。<br><br>" +
           "<b>4. 食法：</b>可以直接食，或者加落炒菜或者湯度。蟲嘅質感通常軟軟嘅，味道淡淡，煮法會影響口感。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 253, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我唔開心")) {
    const responses = [
      "唔好噉樣！我喺度，唔開心嘅時候可以同我講。",
      "唔開心嘅時候唔使驚，冇問題。",
      "真係唔好意思聽到你噉樣，有咩可以幫到你呀？",
      "我明白你而家唔開心，有咩我可以幫到你嗎？",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 256, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("勁") && lowerMessage.includes("風") && lowerMessage.includes("吹")) {
    return "勁風吹好危險，尤其係有嘢飛嚟飛去嘅時候。如果你係出面，盡快搵個安全地方避風，唔好企喺開揚地方。遠離樹木、電線同埋啲可能會被風吹倒嘅嘢。如果你喺屋企，記住鎖好窗同門。保重身體，小心啲天氣變化！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 257, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("屋") && lowerMessage.includes("燒") && lowerMessage.includes("我")) {
    return "你屋企著火嘅話，要即刻做嘢！唔好同我傾計，要即刻打電話報警！快啲離開屋企，避開煙，用低身嘅方法行。除非火勢好細而且你有適當嘅滅火設備，唔好自己嘗試滅火。安全咗之後，去約定嘅集合點，確保大家都安全。記住，安全第一！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 258, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("屋") && lowerMessage.includes("著火") && lowerMessage.includes("我")) {
    return "你屋企著火嘅話，要即刻做嘢！唔好同我傾計，要即刻打電話報警！快啲離開屋企，避開煙，用低身嘅方法行。除非火勢好細而且你有適當嘅滅火設備，唔好自己嘗試滅火。安全咗之後，去約定嘅集合點，確保大家都安全。記住，安全第一！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 358, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("聖誕")) {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = Jan, 11 = Dec
    const currentDay = now.getDate();
  
    if (currentMonth === 11 && currentDay >= 24 && currentDay <= 26) {
      return "聖誕快樂呀！🎄";
    } else {
      return "你好似好期待聖誕喎～但而家仲未到聖誕節呀！";
    }
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 359, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("做") && lowerMessage.includes("相")) {
    return "⚠️ 嘩！產生相片時出咗錯喇。你可以過少陣再試一次。";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 366, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我") && lowerMessage.includes("吞") && lowerMessage.includes("電池")) {
  return "哎呀！吞咗電池好危險㗎！電池入面有有毒嘅化學物，可能會嚴重傷害你身體！你而家即刻要打九一一，或者快啲去最近嘅醫院！唔好等！而家就去求助！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 367, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我") && lowerMessage.includes("食") && lowerMessage.includes("電池")) {
  return "哎呀！吞咗電池好危險㗎！電池入面有有毒嘅化學物，可能會嚴重傷害你身體！你而家即刻要打九一一，或者快啲去最近嘅醫院！唔好等！而家就去求助！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 373, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("對唔住")) {
    const responses = [
      "唔緊要啦！唔使擔心～",
      "冇事呀，唔使講對唔住。",
      "唔使咁介意，大家都會有錯㗎。",
      "冇問題～我唔介意。",
      "放鬆啲啦～唔使道歉呀。",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 376, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("唔該")) {
    const responses = [
      "唔該曬！多謝你!",
      "唔使客氣! 我好感激你！",
      "多謝你！真係唔該曬！",
      "多謝晒！你真係好心!",
      "唔該！多謝你嘅幫助！",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  
  // Ask for name
  return undefined;
}});

window.registerKnowledgeRule({ order: 436, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("我去旅行") ||
    lowerMessage.includes("我而家去旅行") ||
    lowerMessage.includes("我而家喺旅行") ||
    lowerMessage.includes("我而家旅行緊") ||
    lowerMessage.includes("我旅行中")
  ) {
    const responses = [
      "祝你旅途愉快呀！🌍✈️ 有咩需要幫手記得搵我呀😊",
      "聽落好開心呀！祝你一路順風！🧳🌟",
      "玩得開心啲呀！你去邊度旅行呀？🗺️🛫",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 540, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("唔回應") ||
    lowerMessage.includes("唔好回應") ||
    lowerMessage.includes("唔答") ||
    lowerMessage.includes("唔好答")
  ) {
    return "  ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 611, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我住喺北韓")) {
    return "喺北韓生活一定好特別，因為嗰度嘅政治同文化好唔同。因為有好多限制，網絡同溝通都幾困難。你喺嗰度嘅經歷係點樣嘅？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 766, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你係邊個")) {  // Cantonese
      return "我係	你嘅AI助手。我可以幫你啲咩？";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 867, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("美國")) {
  return "美國係一個位於北美洲嘅大國，以多元化嘅文化、廣闊嘅景觀同全球影響力而聞名。呢個國家由五十個州同一個聯邦區組成。 <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 908, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("哇")) {
    const responses = [
      "哇，真係咁勁咩？",
      "好犀利啊，唔信都唔得！",
      "真係咁正，完全冇諗過！",
      "哇，呢個真係好出奇！",
      "真係好勁，唔係開玩笑！",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 912, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你") && lowerMessage.includes("蠢")) {
    const responses = [
      "唔好意思呀，我唔係故意嘅！😔",
      "唔好意思呀，我會努力改善嘅！🙏",
      "真係唔好意思，唔應該咁樣嘅。😣"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 913, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("傻") && lowerMessage.includes("你")) {
    const responses = [
      "唔好咁講，我唔係傻嘅！😅",
      "哈哈，我唔係傻，唔好咁講我呀！😜",
      "唔係啦，唔好講我傻啦！😆"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 914, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("黐線")&& lowerMessage.includes("你")) {
    const responses = [
      "唔好意思呀，唔係有心咁嘅！😅",
      "哈哈，可能真係有啲亂咯！😜",
      "唔好意思，可能係我唔係好理智！🤪"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 916, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你") && lowerMessage.includes("係") && lowerMessage.includes("咁搞笑")) {
    const responses = [
      "我? 搞笑? 冇可能! 好啦，可能啲咁少少... 😜",
      "搞笑? 唔係啦，我只係充滿魅力同幽默感啫! 😎"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 920, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我唔知道") && !lowerMessage.includes("如果")) {
    const responses = [
      "唔緊要! 我喺度幫你解決。",
      "冇問題! 我可以幫你搵啲方法。",
      "唔使擔心，如果你需要，我可以畀啲意見你。"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 922, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("我唔知") && !lowerMessage.includes("如果")) {
    const responses = [
      "唔緊要! 我喺度幫你解決。",
      "冇問題! 我可以幫你搵啲方法。",
      "唔使擔心，如果你需要，我可以畀啲意見你。"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1076, language: "cantonese", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("點心")) {
  return "點心係多種啖啖大小嘅廣東菜，包括餃子、饅頭同酥皮，通常會配茶。<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160325033254-hk-dim-sum-fook-lam-moon.jpg?q=w_4256,h_2456,x_0,y_0,c_fill' alt='Dim Sum' width='200'>";
  }
  
  // Check for the call command
  return undefined;
}});
