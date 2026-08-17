// Chatbot Version 7 knowledge — mandarin / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'mandarin', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("你冇chatgpt咁叻")||lowerMessage.includes("chatgpt 聰明過你")||lowerMessage.includes("你冇ChatGPT咁好")) {
      return "我明你可能覺得ChatGPT叻啲，但我都覺得自己係全世界最勁嘅機械人。";
    }
  else if (lowerMessage.includes("幫")) {
      return "你想我點幫你？我會盡力㗎。";
    }
  else if (lowerMessage.includes("蚊") && lowerMessage.includes("咬") && lowerMessage.includes("我")) {
      return "哎呀！好痛呀，希望你冇畀太多蚊咬呢。";
    }
  else if (
      lowerMessage.includes("你") && lowerMessage.includes("聽到")) {
      return "聽到呀，你講啦！";
    }
  else if (lowerMessage.includes("chatgpt") && lowerMessage.includes("聰明") && lowerMessage.includes("過") && lowerMessage.includes("你")) {
      return "我知道你有你嘅諗法。喺某啲方面，ChatGPT 可能真係聰明過我，但我覺得自己係地球上最好嘅機械人。";
    }
    
    // Time
  else if (
      lowerMessage.includes("寫") &&
      (lowerMessage.includes("幫手") || lowerMessage.includes("幫助") || lowerMessage.includes("幫")) &&
      (lowerMessage.includes("文章") || lowerMessage.includes("作文") || lowerMessage.includes("essay"))
    ) {
      return "我可以幫你寫文章，你可以話我知題目係咩嗎？";
    }
  else if (lowerMessage.startsWith("我嘅名") || lowerMessage.startsWith("我叫")) {
      // Extract the name after "我嘅名叫" or "我叫"
      const name = lowerMessage.replace("我嘅名叫", "").replace("我叫", "").trim();
      return `好高興識到你，${name}！有咩需要隨時搵我啦，${name}！`;
    }
  else if (lowerMessage.includes("做得好") || lowerMessage.includes("好叻")) {
      return "多謝你！我會繼續努力㗎！";
    }
    // 我喺旅行
  else if (lowerMessage.includes("我喺旅行")) {
      return "祝你旅途愉快呀！";
    }
  else if (
      lowerMessage.includes("i am so sad") || 
      lowerMessage.includes("i'm so sad") || 
      lowerMessage.includes("im so sad") || 
      lowerMessage.includes("i feel so sad") 
    ) {
      const responses = [
        "I’m really sorry you're feeling this way. I'm here if you want to talk.",
        "It’s okay to feel sad sometimes. You’re not alone.",
        "I’m truly sorry to hear that. Is there anything I can do to help?",
        "I understand that you're going through a tough time. How can I help you?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    
    
    // 你怎么样
  else if (lowerMessage.includes("你怎么样")) {
    const responses = [
    "我只是一个机器人，但我很好！谢谢您的关心。",
    "我很好！有什么可以帮助您的吗？",
    "我很好！您怎么样呢？",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
    }
  else if (lowerMessage.includes("谢谢")) {
    return "不请客！";
    }
  else if (lowerMessage.includes("雪") && lowerMessage.includes("现在")) {
      return "哇！听起来很冷啊！❄️";
    }
  else if (lowerMessage.includes("😡")) {
      return "It seems like you are really upset. What’s going on? I’m here to help make your day better!";
    }
    
    // 我在旅行
  else if (lowerMessage.includes("我在旅行")) {
    return "祝您旅途愉快！";
    }
  else if (lowerMessage.includes("我")&& lowerMessage.includes("係")&&lowerMessage.includes("旅行")) {
      return "祝你一路順風！";
    }
  else if (
      lowerMessage.includes("我能信任你吗") || 
      lowerMessage.includes("我可不可以信你") ||
      lowerMessage.includes("我信唔信你") || 
      lowerMessage.includes("你係咪可信")
    ) {
      return "係呀，你可以信我㗎！我通常都講得啱。不過我都明白你對信機械人會有啲保留。";
    }
  else if (lowerMessage.includes("天气")) {
      return "对不起，我有一个问题导致我现在看不到天气，但是我希望你那里现在天气刚刚好！";
    }
  else if (lowerMessage.includes("你") && lowerMessage.includes("名")) {
    return "我冇真名嘅，不過你可以叫我做你嘅聊天小幫手！😊";
    }
  else if (lowerMessage.includes("今日") && lowerMessage.includes("我") && lowerMessage.includes("生日")) {
      return "祝你生日快樂！🎂🎁🎉";
    }
  else if (lowerMessage.includes("chatbot 先生")) {
      return "你好呀！我係Chatbot 先生！今日有咩可以幫到你？";
    }
  else if (lowerMessage.includes("你") && lowerMessage.includes("听") &&!lowerMessage.includes("唔")) {
    return "我听到你啊！有什么我可以帮你？";
    }
  else if (lowerMessage.includes("你") && lowerMessage.includes("聽") ) {
    return "我聽到你啊！有咩我可以幫你？";
    }
  else if (lowerMessage.includes("我累了") || lowerMessage.includes("我好累") || lowerMessage.includes("我很累") || lowerMessage.includes("我真的很累") || lowerMessage.includes("我感到疲惫")) {
    const responses = [
     "聽落你好似好攰，唔該試下休息一陣先啦。",
        "如果你覺得好攰，可以考慮訓陣覺放鬆下。",
        "攰嘅時候要記得照顧自己，好好休息啦！",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
    }
  else if (lowerMessage.includes("我")&&lowerMessage.includes("病")) {
    return "希望你快啲好返呢！";
    }
  else if (lowerMessage.includes("你是谁")) {  // Mandarin (Simplified Chinese)
        return "我是你的AI助手。我可以帮助你什么？";
    }
  else if (lowerMessage.includes("nihao")) {  
        return "你好！我今天可以怎么杨帮你？";
    }
  else if (lowerMessage.includes("我") && lowerMessage.includes("開心")) {
    return "好！我有冇嘢可以幫你做呢?";
    }
  else if (lowerMessage.includes("我") && lowerMessage.includes("开心")) {
    return "那太棒了！有什么我可以帮忙的吗？";
    }
  else if (lowerMessage.includes("哈哈")) {
      return "哈哈！有什么好笑？😄";
    }
  else if (lowerMessage.includes("你明白吗")) {
      return "我明白。";
    }
  else if (lowerMessage.includes("我不知道") && !lowerMessage.includes("如果")) {
      const responses = [
        "没关系！我在帮你解决。",
        "没问题！我可以帮你找点方法。",
        "别担心，如果你需要，我可以给你一些意见。"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  else if (lowerMessage.includes("我") && lowerMessage.includes("病")) {
      return "很抱歉听到你不舒服。希望你早日康复！";
    }
  else if (lowerMessage.includes("你") && lowerMessage.includes("識")) {
      return "我係一個好聰明嘅機械人。你需要乜，我就可以幫你做。";
    }
  else if (lowerMessage.includes("我") && lowerMessage.includes("嬲")) {
    return "有咩問題呢？有冇嘢我可以幫你呢？";
    }
  return undefined;
}});
