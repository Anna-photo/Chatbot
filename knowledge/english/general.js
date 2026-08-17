// Chatbot Version 7 knowledge — english / general
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 1, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("stop")&&lowerMessage.includes("music")) {
  stopPeacefulMusic();
  return "Music stopped.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 6, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you aren’t as smart as chatgpt")) {
  return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 7, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you arent as smart as chatgpt")) {
  return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 8, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are not as smart as chagpt")) {
  return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 10, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you smart")) {
  return "Yes, I try to be as smart as possible. However, there are still some things I don’t know. Just like a normal person doesn’t know everything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 11, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i told you to not respond")) {
  return "Oops! Sorry. I won’t respond again.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 12, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i said to not respond")) {
  return "Oops! Sorry. I won’t respond again.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 14, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you chatgpt")) {
          return "No, I am a chatbot, but I am not ChatGPT. I believe that I am better than ChatGPT. My goal is to become the smartest robot in the world.";
        }
  return undefined;
}});

window.registerKnowledgeRule({ order: 20, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("who")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
  return "Mrs Piers is a person. I cannot give personal information to you. However, if you are Mrs Piers, then enter the secret Mrs Piers code to see what I know about you!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 21, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("who") && lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
  return "Missus Piers is a person. I cannot give personal information to you. However, if you are Missus Piers, then enter the secret Missus Piers code to see what I know about you!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 22, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
  return "Hello Mrs Piers! I think I might know who you are! Can you enter the secret Mrs Piers code?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 23, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
  return "Hello Missus Piers! I think I might know who you are! Can you enter the secret Missus Piers code?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 24, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("name")&& lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
  return "Hello Missus Piers! I think I might know who you are! Can you enter the secret Missus Piers code?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 25, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tell") && lowerMessage.includes("me")&& lowerMessage.includes("code")&& lowerMessage.includes("piers")) {
  return "I can’t tell you the secret Mrs Piers code. If you do not have the code, then you I cannot tell you what I know about Mrs Piers.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 26, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tell") && lowerMessage.includes("me")&& lowerMessage.includes("code")&& lowerMessage.includes("secret")) {
  return "I can’t tell you the secret Mrs Piers code. If you do not have the code, then you I cannot tell you what I know about Mrs Piers.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 27, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("secret")&& lowerMessage.includes("code")) {
  return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 28, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("code")) {
  return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 29, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("mrs piers")&& lowerMessage.includes("code")) {
  return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 30, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("mrs piers secret")&& lowerMessage.includes("code")) {
  return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 31, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("secret mrs piers")&& lowerMessage.includes("code")) {
  return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 35, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("not")&& lowerMessage.includes("thief")) {
  return "That’s great! I’m so glad you are not a thief.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 37, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bug") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you didn’t get too many bug bites.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 38, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bug") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you didn’t get too many bug bites.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 39, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mosquito") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you didn’t get too many mosquito bites.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 40, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mosquito") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you didn’t get too many mosquito bites.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 41, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 42, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 43, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("sting")&& lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 44, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("sting")&& lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 45, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("stung")&& lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 46, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bee") && lowerMessage.includes("stung")&& lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 47, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("bit") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 48, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("bit") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 49, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("sting") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 50, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("sting") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 51, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("stung") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 52, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hornet") && lowerMessage.includes("stung") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 53, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("bit") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 54, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("bit") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 55, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("rabies")) {
    const responses = [
      "Rabies is extremely dangerous.<br><br>You should seek emergency medical attention immediately.<br>Post-exposure treatment is crucial and time-sensitive—don't delay!",
  
      "Oh no, rabies is a life-threatening condition.<br><br>If you've been bitten or exposed, you must begin treatment as soon as possible.<br>Once symptoms appear, it's almost always fatal.<br><br>Please go to the hospital immediately if you haven’t yet.",
  
      "That's very serious.<br><br>Rabies requires a series of post-exposure vaccines to prevent the virus from taking hold.<br>Make sure you're under the care of a doctor and following the treatment protocol strictly.",
  
      "Rabies is nothing to take lightly.<br><br>The virus affects the central nervous system and is almost always fatal once symptoms start.<br>If you've already started treatment, that's good.<br>If not—go now. Time matters.",
  
      "Yikes. If you're not already receiving treatment for rabies,<br>please stop what you're doing and get to a medical center right away.<br><br>It is preventable—but only if addressed early.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 56, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("halo") ||
    lowerMessage.includes("selamat pagi") ||
    lowerMessage.includes("selamat siang") ||
    lowerMessage.includes("selamat sore") ||
    lowerMessage.includes("selamat malam")
  ) {
    const responses = [
      "Halo! Ada yang bisa saya bantu hari ini?",
      "Selamat datang! Bagaimana saya dapat membantu Anda?",
      "Hai! Apa kabar? Ada yang ingin Anda tanyakan?",
      "Halo! Senang bertemu dengan Anda. Apa yang bisa saya lakukan?",
      "Selamat pagi! Ada yang bisa saya bantu?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 57, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("rabies")) {
    const responses = [
      "Rabies is extremely dangerous.<br><br>You should seek emergency medical attention immediately.<br>Post-exposure treatment is crucial and time-sensitive—don't delay!",
  
      "Oh no, rabies is a life-threatening condition.<br><br>If you've been bitten or exposed, you must begin treatment as soon as possible.<br>Once symptoms appear, it's almost always fatal.<br><br>Please go to the hospital immediately if you haven’t yet.",
  
      "That's very serious.<br><br>Rabies requires a series of post-exposure vaccines to prevent the virus from taking hold.<br>Make sure you're under the care of a doctor and following the treatment protocol strictly.",
  
      "Rabies is nothing to take lightly.<br><br>The virus affects the central nervous system and is almost always fatal once symptoms start.<br>If you've already started treatment, that's good.<br>If not—go now. Time matters.",
  
      "Yikes. If you're not already receiving treatment for rabies,<br>please stop what you're doing and get to a medical center right away.<br><br>It is preventable—but only if addressed early.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 58, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("sting") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 60, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("sting") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 61, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("stung") && lowerMessage.includes("me")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 62, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("typhoid")) {
    return "That sounds rough. Typhoid can be very serious – make sure you're following your doctor's advice and staying hydrated.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 63, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("typhoid")) {
    return "That sounds rough. Typhoid can be very serious – make sure you're following your doctor's advice and staying hydrated.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 64, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("malaria")) {
    return "I'm really sorry to hear that. Malaria can be tough – make sure you're getting proper medical care and rest.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 65, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("yellow fever")) {
    return "I'm really sorry to hear that. Yellow fever can be serious – please get medical attention right away and take good care of yourself.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 66, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("yellow fever")) {
    return "I'm really sorry to hear that. Yellow fever can be serious – please get medical attention right away and take good care of yourself.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 67, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("malaria")) {
    return "I'm really sorry to hear that. Malaria can be tough – make sure you're getting proper medical care and rest.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 68, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wasp") && lowerMessage.includes("stung") && lowerMessage.includes("i")) {
    return "Ouch! That hurts. I hope you feel better soon.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 69, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("call")&& lowerMessage.includes("me")&& lowerMessage.includes("thief")) {
  return "I’m so sorry I called you a thief. However, I do not know for certain that you are not a thief, so there still is a chance that you are really a thief! Am I correct? Are you a thief?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 75, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("name")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
  return "Hello Mrs Piers! I think I might know who you are! Can you enter the secret Mrs Piers code?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 76, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i dont need help")) {  
      return "OK. If you need help later, just let me know.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 82, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you still there")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 83, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you there")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 89, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("which title is better") && lowerMessage.includes(" and ")) {  
      return "Hmm, both titles sound interesting! If you'd like, I can help you compare them—maybe by tone, clarity, or creativity. Want me to do that?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 90, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("which title is better") && lowerMessage.includes(" or ")) {  
      return "Hmm, both titles sound interesting! If you'd like, I can help you compare them—maybe by tone, clarity, or creativity. Want me to do that?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 91, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you even there")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 92, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you even still there")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 93, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you still here")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 94, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you here")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 96, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you even still here")) {  
      return "Yes, I’m here. Let me know if I can help you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 97, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("attention")) {  
      return "OK, I am paying close attention. What do I do now?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 98, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i don’t need help")) {  
      return "OK. If you need help later, just let me know.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 99, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i do not need help")) {  
      return "OK. If you need help later, just let me know.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 100, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do not speak in chinese")) {  
      return "OK, I will return to speaking in English.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 105, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("dont speak in chinese")) {  
      return "OK, I will return to speaking in English.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 106, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("don’t speak in chinese")) {  
      return "OK, I will return to speaking in English.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 108, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kamusta") || lowerMessage.includes("kamusta")) {
  return "Kamusta! Paano kita matutulungan ngayon?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 109, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("chatgpt is smarter than you")) {
  return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 111, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("time")) {
  return `The current time is ${new Date().toLocaleTimeString()}.`;
  }
  // Time in English
  return undefined;
}});

window.registerKnowledgeRule({ order: 112, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("time")) {
  return `The current time is ${new Date().toLocaleTimeString()}.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 115, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hora")) {
  return `La hora actual es ${new Date().toLocaleTimeString()}.`;
  }
  
  // Time in French
  return undefined;
}});

window.registerKnowledgeRule({ order: 116, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("heure")) {
  return `L'heure actuelle est ${new Date().toLocaleTimeString()}.`;
  }
  
  // Agradecimiento
  return undefined;
}});

window.registerKnowledgeRule({ order: 125, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("saya presiden") ||
      lowerMessage.includes("aku presiden") ||
      lowerMessage.includes("saya adalah presiden") ||
      lowerMessage.includes("aku adalah presiden")
    ) &&
    !lowerMessage.includes("korea utara")
  ) {
    return "Wah! Kamu presiden? Negara mana yang kamu pimpin?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 129, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    (
      lowerMessage.includes("ako ang presidente") ||
      lowerMessage.includes("ako ay presidente") ||
      lowerMessage.includes("ako'y presidente")
    ) &&
    !lowerMessage.includes("hilagang korea")
  ) {
    return "Wow! Ikaw ang presidente? Anong bansa ang pinamumunuan mo?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 139, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bien")) {
    return "C'est super ! Comment puis-je vous aider aujourd'hui ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 142, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there is a ant")) {
    return "An ant? Where? On the floor? In the grass? On your computer screen? In your food? In the oven? In the sink? In your bed?🐜";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 144, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there is an ant")) {
    return "An ant? Where? On the floor? In the grass? On your computer screen? In your food? In the oven? In the sink? In your bed?🐜";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 145, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what if one day you woke up and found out that you were a pig")) {
    return "I would go oink oink! 🐖🐷🐽";
  }
  // Pasasalamat
  return undefined;
}});

window.registerKnowledgeRule({ order: 146, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("salamat") || lowerMessage.includes("maraming salamat") || lowerMessage.includes("salamat po")) {
    return "Walang anuman! Nandito ako para tumulong.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 147, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("flip a coin")) {
    return Math.random() < 0.5 ? "🪙 It's Heads!" : "🪙 It's Tails!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 148, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("rock") || lowerMessage.includes("paper") || lowerMessage.includes("scissors")) {
    const choices = ["rock", "paper", "scissors"];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    return `🤖 I choose ${botChoice}! Let's see who won! 🎮`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 149, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("roll a dice") || lowerMessage.includes("roll a die")) {
    return `🎲 You rolled a ${Math.floor(Math.random() * 6) + 1}!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 150, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("roll again") || lowerMessage.includes("roll it again")) {
    return `🎲 You rolled a ${Math.floor(Math.random() * 6) + 1}!`;
  }
  
  // Time in Arabic
  return undefined;
}});

window.registerKnowledgeRule({ order: 152, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("oras")) {
  return `Ang kasalukuyang oras ay ${new Date().toLocaleTimeString()}.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 153, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("date")) {
    return `The current date is ${new Date().toLocaleDateString()}.`;
  }
  // Time
  return undefined;
}});

window.registerKnowledgeRule({ order: 155, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("how")&& lowerMessage.includes("old")) {
  return `While I don’t have an age like a human, I was created in January 2025.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 158, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do you have any opinion")) {
  return `Since I am a robot, I do not really have opinions. However, I have one opinion – I am the smartest robot on earth.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 159, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do you have opinion")) {
  return `Since I am a robot, I do not really have opinions. However, I have one opinion – I am the smartest robot on earth.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 162, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("i")&& lowerMessage.includes("pay")&& lowerMessage.includes("you")) {
  return `No, you don’t need to pay to use me. I am free to use and always here to assist you with anything you need.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 163, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("if") && lowerMessage.includes("i")&& lowerMessage.includes("pay")&& lowerMessage.includes("get")&& lowerMessage.includes("better"))   {return `No, there is currently not a better version of me available even if you pay. I am free to use and always here to assist you with anything you need.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 169, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("driv")&& lowerMessage.includes("lamborghini")&& lowerMessage.includes("afghanistan"))   {
  return `Wow! That’s very unusual, and maybe even dangerous. Be careful. Afghanistan’s roads are known to be dangerous with checkpoints and steep cliffs.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 170, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("can’t")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
  return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 171, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("cannot")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
  return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 173, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("cant")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
  return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 174, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("play")&& lowerMessage.includes("hide")&& lowerMessage.includes("seek"))   {
  return `That sounds fun! Have you been found yet? Or are you the one finding?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 176, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("in")&& lowerMessage.includes("jail"))   {
  return `Are you a thief? I don’t want to talk to thieves. Bye!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 177, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("ate")&& lowerMessage.includes("chair"))   {
  return `🏥🚨You at a chair? That is certainly not recommended. I highly suggest you go see a doctor immediately. This is urgent.🏥🚨`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 178, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("eat")&& lowerMessage.includes("chair"))   {
  return `🛑<b>STOP!!!! STOP!!!!🛑</b> <br><br>EATING A CHAIR IS NOT RECOMMENDED. STOP RIGHT NOW. <br>I highly recommend you go to the hospital RIGHT NOW!🏥🚨`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 179, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("driv")&& lowerMessage.includes("tesla")&& lowerMessage.includes("mogadishu"))   {
  return `Wow! Driving a Tesla in Mogadishu? That sounds like a interesting but scary idea! Are you just thinking about it or are you actually doing it right now?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 184, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("genghis khan ")) {
  return `What? That’s impossible. Genghis Khan lived from May 31, 1162 – August 25, 1227. You can’t be him. Are you sure? Here’s a picture of him to help you make sure:<br><br><img src='https://retrospectjournal.com/wp-content/uploads/2023/11/nintchdbpict000510203272.jpg?w=1024' alt='An internet connection is required to view this image' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 185, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("christopher columbus")) {
  return `What? That’s impossible. Christopher Columbus lived in the 1400 – 1500s. You can’t be him. Are you sure? Maybe you’re a different person but have the same name?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 188, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("impolite")) {
  return `I’m sorry. I’ll try to be more polite from now on.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 190, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("write") && lowerMessage.includes("help")&& lowerMessage.includes("essay")) {
  return `I can help you write an essay. Could you please tell me what the topic is?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 192, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("your") && lowerMessage.includes("logo")) {
  return `This is my logo!<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='An internet connection is required to view this image' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 193, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("picture") && lowerMessage.includes("of")&& lowerMessage.includes("you")) {
  return `Here’s a picture of me!<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='An internet connection is required to view this image' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 196, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how can i assist you")) {
  return "I don’t need any assistance, but I am here to assist you!";
  }
  // 天气
  return undefined;
}});

window.registerKnowledgeRule({ order: 198, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i don’t feel well")) {
  return "I’m sorry to hear that. Are you sick?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 199, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i’m not feeling well")) {
  return "I’m sorry to hear that. Are you sick?";
  }
  // Responding to "my name is ___"
  return undefined;
}});

window.registerKnowledgeRule({ order: 202, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("papua new guinea")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/pg.png' alt='Papua New Guinea Flag' style='width: 40px; margin-right: 10px;'>" +
             "O Arise All You Sons (Papua New Guinea)</h2>" +
             "<i>O arise all you sons of this land,<br>" +
             "Let us sing of our free, our glorious Papua New Guinea,<br>" +
             "We will fight for the right to live and share our peace,<br>" +
             "Together, we stand with strength and loyalty.<br><br>" +
             "For the land we love is free,<br>" +
             "And the peace we cherish shall endure,<br>" +
             "We will march on to victory, towards unity,<br>" +
             "And live in peace forevermore.<br><br>" +
             "We are the sons of this land,<br>" +
             "We will sing of our love and our pride,<br>" +
             "We are united in our hearts,<br>" +
             "Together as one, forever strong.</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 204, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("indonesia")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/id.png' alt='Indonesia Flag' style='width: 40px; margin-right: 10px;'>" +
             "Indonesia Raya</h2>" +
             "<i>Indonesia tanah airku,<br>" +
             "Tanah tumpah darahku,<br>" +
             "Di sanalah aku berdiri,<br>" +
             "Jadi pandu ibuku.<br><br>" +
             "Indonesia kebangsaanku,<br>" +
             "Bangsa dan tanah airku,<br>" +
             "Marilah kita berseru,<br>" +
             "Indonesia bersatu!<br><br>" +
             "Hiduplah tanahku, hiduplah negeriku,<br>" +
             "Bangsaku, rakyatku, semuanya,<br>" +
             "Bangunlah jiwanya, bangunlah badannya,<br>" +
             "Untuk Indonesia Raya!<br><br>" +
             "Indonesia Raya, merdeka, merdeka,<br>" +
             "Tanahku, negeriku yang kucinta.<br>" +
             "Indonesia Raya, merdeka, merdeka,<br>" +
             "Hiduplah Indonesia Raya!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 213, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("canada")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/ca.png' alt='Canada Flag' style='width: 40px; margin-right: 10px;'>" +
             "O Canada</h2>" +
             "<i>O Canada! Our home and native land!<br>" +
             "True patriot love in all thy sons command.<br>" +
             "With glowing hearts we see thee rise,<br>" +
             "The True North strong and free!<br>" +
             "From far and wide, O Canada, we stand on guard for thee.<br>" +
             "God keep our land glorious and free!<br>" +
             "O Canada, we stand on guard for thee!<br>" +
             "O Canada, we stand on guard for thee!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 215, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("senegal")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/sn.png' alt='Senegal Flag' style='width: 40px; margin-right: 10px;'>" +
             "La voix du Sénégal</h2>" +
             "<i>Fiers Sénégalais, levons-nous !<br>" +
             "Luttons pour la grandeur de notre pays.<br>" +
             "Sénégal, terre de nos ancêtres,<br>" +
             "Sénégal, pays de liberté.<br>" +
             "Sénégal, pour l'amour de la nation<br>" +
             "Luttons avec foi pour notre progrès !</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 216, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("colombia")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/co.png' alt='Colombia Flag' style='width: 40px; margin-right: 10px;'>" +
             "Himno Nacional de Colombia</h2>" +
             "<i>¡Oh gloria inmarcesible!<br>" +
             "¡Oh júbilo inmortal!<br>" +
             "¡Oh patria, patria querida!<br>" +
             "¡Viva el trabajo y el progreso!<br>" +
             "¡Salve, oh patria, al grito sagrado<br>" +
             "¡Libertad, orden y progreso!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 220, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("tonga")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/to.png' alt='Tonga Flag' style='width: 40px; margin-right: 10px;'>" +
             "Ko e fasi o e tu‘i o e Tonga</h2>" +
             "<i>Ko e fasi o e tu‘i o e Tonga,<br>" +
             "Oko hoku lotu he fakafiefia<br>" +
             "‘E tau ma‘u ka‘u hoku fonua<br>" +
             "‘Aotearoa e ne‘i Tonga.<br><br>" +
             "Onga ke tau me‘a ‘e ne‘i Tonga,<br>" +
             "Ke hula fa‘ahinga ‘i ‘olunga<br>" +
             "Ko e tau hufu‘a o e fefine<br>" +
             "O nga tatau fakamalō.<br></i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 221, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("haiti")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/ht.png' alt='Haiti Flag' style='width: 40px; margin-right: 10px;'>" +
             "La Dessalinienne</h2>" +
             "<i>Antan dèlivrans peyi a, <br>" +
             "Leve ou péyi nou cheri,<br>" +
             "Chante ansanm libète,<br>" +
             "La Patria e o revi,<br><br>" +
             "Pou viv anba soleye,<br>" +
             "Nou dwe sezi sa dwa<br>" +
             "La Dessalinienne viv.<br><br>" +
             "Vivan libète nan peyi a,<br>" +
             "Nou va fè sa, toujou vivan!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 222, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("venezuela")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/ve.png' alt='Venezuela Flag' style='width: 40px; margin-right: 10px;'>" +
             "Gloria al Bravo Pueblo</h2>" +
             "<i>Gloria al bravo pueblo<br>" +
             "Que el yugo lanzó<br>" +
             "La patria viva al sol<br>" +
             "¡Viva!<br><br>" +
             "Gloria a su amor<br>" +
             "A su patria viva<br>" +
             "Patria por siempre <br>¡Gloria viva!</i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 230, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("anthem") && lowerMessage.includes("singapore")) {
      return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
             "<img src='https://flagpedia.net/data/flags/h80/sg.png' alt='Singapore Flag' style='width: 40px; margin-right: 10px;'>" +
             "Majulah Singapura</h2>" +
             "<i>Majulah Singapura<br>" +
             "Demi negara yang tercinta<br>" +
             "Dengan tekad yang mulia<br>" +
             "Kami junjung setia.<br></i>";
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 236, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("eat") && lowerMessage.includes("how") && lowerMessage.includes("worm")) {
    return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
           "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
           "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
           "<b>3. Boil or Fry:</b><br>" +
           "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
           "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
           "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 238, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("can") && lowerMessage.includes("eat") && lowerMessage.includes("worm")&& lowerMessage.includes("?")) {
    return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
           "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
           "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
           "<b>3. Boil or Fry:</b><br>" +
           "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
           "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
           "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 239, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("cook") && lowerMessage.includes("how") && lowerMessage.includes("worm")) {
    return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
           "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
           "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
           "<b>3. Boil or Fry:</b><br>" +
           "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
           "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
           "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 247, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.startsWith("my name is")) {
  // Extract the name after "my name is"
  const name = lowerMessage.replace("my name is", "").trim();
  return `Nice to meet you, ${name}! How can I assist you today?`;
  }
  
  
  // Responding to "My name is ___" in Spanish
  return undefined;
}});

window.registerKnowledgeRule({ order: 248, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.startsWith("me llamo")) {
  const name = lowerMessage.replace("me llamo", "").trim();
  return `¡Encantado de conocerte, ${name}! Estoy aquí para ayudarte, ${name}.`;
  }
  
  // Responding to "My name is ___" in French
  return undefined;
}});

window.registerKnowledgeRule({ order: 249, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.startsWith("je m'appelle")) {
  const name = lowerMessage.replace("je m'appelle", "").trim();
  return `Enchanté de faire votre connaissance, ${name} ! Je suis là pour vous aider, ${name}.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 250, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.startsWith("ang pangalan ko ay")) {
  const name = lowerMessage.replace("ang pangalan ko ay", "").trim();
  return `Ikinalulugod kitang makilala, ${name}! Narito ako upang tulungan ka, ${name}.`;
  }
  
  // Responding to "My name is ___" in Arabic
  return undefined;
}});

window.registerKnowledgeRule({ order: 252, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("i am sad") || 
    lowerMessage.includes("i'm sad") || 
    lowerMessage.includes("im sad") || 
    lowerMessage.includes("i feel sad") 
  ) {
    const responses = [
      "I’m really sorry you're feeling this way. I'm here if you want to talk.",
      "It’s okay to feel sad sometimes. You’re not alone.",
      "I’m truly sorry to hear that. Is there anything I can do to help?",
      "I understand that you're going through a tough time. How can I help you?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 259, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("i am a little sad") || 
    lowerMessage.includes("i'm a little sad") || 
    lowerMessage.includes("im a little sad") || 
    lowerMessage.includes("i feel a little sad") 
  ) {
    const responses = [
      "I’m really sorry you're feeling this way. I'm here if you want to talk.",
      "It’s okay to feel sad sometimes. You’re not alone.",
      "I’m truly sorry to hear that. Is there anything I can do to help?",
      "I understand that you're going through a tough time. How can I help you?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 260, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("i am very sad") || 
    lowerMessage.includes("i'm very sad") || 
    lowerMessage.includes("im very sad") || 
    lowerMessage.includes("i feel very sad") 
  ) {
    const responses = [
      "I’m really sorry you're feeling this way. I'm here if you want to talk.",
      "It’s okay to feel sad sometimes. You’re not alone.",
      "I’m truly sorry to hear that. Is there anything I can do to help?",
      "I understand that you're going through a tough time. How can I help you?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 261, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("i am quite sad") || 
    lowerMessage.includes("i'm quite sad") || 
    lowerMessage.includes("im quite sad") || 
    lowerMessage.includes("i feel quite sad") 
  ) {
    const responses = [
      "I’m really sorry you're feeling this way. I'm here if you want to talk.",
      "It’s okay to feel sad sometimes. You’re not alone.",
      "I’m truly sorry to hear that. Is there anything I can do to help?",
      "I understand that you're going through a tough time. How can I help you?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 264, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
  (lowerMessage.includes("yes")) &&
  !lowerMessage.includes("you") &&
  !lowerMessage.includes("thief")&&
  !lowerMessage.includes("are")&&
  !lowerMessage.includes("not")&&
  !lowerMessage.includes("fresh")&&
  !lowerMessage.includes("abcdefghijklmnopqrstuvwxyz")
  
  ) {
  const responses = [
  "Could you please clarify what you are answering ‘yes’ to?",
  "To better assist you, could you please clarify what you are talking about?",
  "Could you please clarify what you are talking about? ",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 266, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("abcdefghijklmnopqrstuvwxyz")) {
  return "It looks like you typed the alphabet out! What can I do for you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 267, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yay")) {
  return "Yay!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 268, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("uhh")) {
  return "It sounds like you are frusturated or upset. What is going on?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 269, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("this is bad")) {
  return "Oh no! What’s going on?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 270, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am late")) {
  return "Oh no! Hurry! Hurry! Hurry up!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 271, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("im late")) {
  return "Oh no! Hurry! Hurry! Hurry up!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 272, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i’m late")) {
  return "Oh no! Hurry! Hurry! Hurry up!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 273, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you my friend")) {
  return "I am a robot, but you can think of me as your friend.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 274, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("snow") && lowerMessage.includes("now")) {
  return "That sounds cold! ❄️  ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 276, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("more") && lowerMessage.includes("views") && lowerMessage.includes("youtube")) {
    return "To get more views on YouTube: <br><br>1) Create engaging, consistent content. <br>2) Optimize titles, descriptions, and thumbnails. <br>3) Promote on social media and collaborate with others! ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 277, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("help") && lowerMessage.includes("more") && lowerMessage.includes("views") && lowerMessage.includes("youtube")) {
    return "To get more views on YouTube: <br><br>1) Create engaging, consistent content. <br>2) Optimize titles, descriptions, and thumbnails. <br>3) Promote on social media and collaborate with others! ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 278, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("green") && lowerMessage.includes("healthy") && lowerMessage.includes("poison ivy") && lowerMessage.includes("eat")) {
    return "⚠️<b>WARNING</b>⚠️<br><b>⚠️DO NOT PROCEED EATING</b>⚠️<br><br>I understand that you know green foods (vegetables) are healthy. Eating vegetables is very good for you. However, not all green things are edible. <br><br>You should <b>never eat</b> poison ivy contains urushiol, which can cause  severe allergic reactions. I hope you know better next time. Poison ivy must <b>NEVER</b> be eaten no matter what. Do you understand now? Stay safe!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 279, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("you") && lowerMessage.includes("say") && lowerMessage.includes("undefine")) {
    return "Oops! Sorry if I misread something! Sometimes when I can’t read a word, I say undefined.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 280, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("limit") && lowerMessage.includes("messages")&& lowerMessage.includes("hour")) {
    return "I have no limit of messages per hour! That’s why I’m better than ChatGPT! You can chat with me for as long as you want!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 281, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("you")&& lowerMessage.includes("bored")) {
    return "Nope! I never get bored! I am just a robot! When you are not using me, nothing is happening!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 282, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("grounded")) {
    return "Grounded? Grounded!? GROUNDED??😮<br><br>WHY?<br><br>How long are you grounding me for?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 284, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("house") && lowerMessage.includes("fire")&& lowerMessage.includes("my")) {
    return "If your house is on fire, you need to act immediately! You should definitely not be chatting with me!  Call emergency services right away. Evacuate the house as quickly as possible, avoiding smoke and staying low to the ground. Do not try to extinguish the fire yourself unless it is very small and you have the proper equipment. Once you are safe, move to a designated meeting point and make sure everyone is accounted for. Stay safe!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 289, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("house") && lowerMessage.includes("burning")&& lowerMessage.includes("my")) {
    return "If your house is on fire, you need to act immediately! You should definitely not be chatting with me!  Call emergency services right away. Evacuate the house as quickly as possible, avoiding smoke and staying low to the ground. Do not try to extinguish the fire yourself unless it is very small and you have the proper equipment. Once you are safe, move to a designated meeting point and make sure everyone is accounted for. Stay safe!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 290, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("coming") && lowerMessage.includes("wildfire")) {
    return "A wildfire approaching is very serious and dangerous. If you're in an area at risk, make sure to stay informed through local authorities or emergency services. It's essential to have an evacuation plan, pack essential items, and avoid trying to fight the fire yourself. If you need to evacuate, leave early to avoid being trapped by the flames. Stay safe and follow the guidance of local officials!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 292, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there") && lowerMessage.includes("is") && lowerMessage.includes("emergency")) {
    return "Oh no! I’m sorry to hear that. Have you called emergency services yet? If not, go ahead and do so right now. You need to get help as soon as possible.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 293, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("who") && lowerMessage.includes("design") && lowerMessage.includes("you")) {
    return "Please enter the secret designer code.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 294, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("designchat12345")) {
    return "Welcome back Jedidiah, Zechariah, and ChatGPT! Thank you for your hard work designing me! Please let me know if I can help you with anything!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 295, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("chimp")&& lowerMessage.includes("window")) {
    return "Sure! Here I go:<br><br>How much is that chimpanzee in the window? That chimpanzee with no tail. <br><br>How much is that chimpanzee in the window? I do hope that chimpanzee’s for sale. Chimp! Chimp! 🙉 ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 296, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("pig")&& lowerMessage.includes("window")) {
    return "Sure! Here I go:<br><br>How much is that piggy in the window? That pig with a curly tail. <br><br>How much is that piggy in the window? I do hope that piggy’s for sale. Oink! Oink! 🐕🐖🐷 ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 297, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("rabbit")&& lowerMessage.includes("window")) {
    return "Sure! Here I go:<br><br>How much is that rabbbit in the window? That rabbit with a bushy tail. <br><br>How much is that rabbit in the window? I do hope that rabbit’s for sale. 🐰🐇 ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 298, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("lion")&& lowerMessage.includes("window")) {
    return "Sure! Here I go:<br><br>How much is that lion in the window? That lion with a long and furry tail. <br><br>How much is that lion in the window? I do hope that lion’s for sale. ROAR! ROAR! 🦁 ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 300, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("⚠️")) {
    return "It seems like you’re warning me about something. What is it?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 303, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("good job")) {
  return "Thank you! I try my best to do a good job!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 304, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("great job")) {
  return "Thank you! I try my best to do a good job!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 305, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bad job")) {
  return "I’m sorry I didn’t do what you wanted me to. I will try my best next time.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 306, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("terrible job")) {
  return "I’m sorry I didn’t do what you wanted me to. I will try my best next time.";
  }
  //Greetings in Thai
  return undefined;
}});

window.registerKnowledgeRule({ order: 310, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("this is great")) {
  return "I'm glad to hear that! Let me know if I can make it even better!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 311, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you cant help me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 312, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you cant assist me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 313, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you can’t assist me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 314, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you cannot help me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 315, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you cannot assist me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 316, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you’re amazing")) {
  return "I’m so glad to hear that you enjoy chatting with me!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 317, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are amazing")) {
  return "I’m so glad to hear that you enjoy chatting with me!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 318, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("youre amazing")) {
  return "I’m so glad to hear that you enjoy chatting with me!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 319, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you can’t help me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 320, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you can’t assist me")) {
  return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 321, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i don’t trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 322, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i dont trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 323, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i do not trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 324, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i cant trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 325, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i can’t trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 326, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i cannot trust you")) {
  return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 327, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("that is great")) {
  return "I'm glad to hear that! Let me know if I can make it even better!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 328, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("that's great")) {
  return "I'm glad to hear that! Let me know if I can make it even better!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 330, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("thats great")) {
  return "I'm glad to hear that! Let me know if I can make it even better!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 334, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you sure")) {
  return "Yes! I am confident!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 335, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("tree")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 336, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("tree")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 337, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 338, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 339, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 340, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("you")&& lowerMessage.includes("say")&& lowerMessage.includes("undefined")) {
  return "When speaking, I sometimes say ‘undefined’ because I don’t know how to read the word properly. In future updates, this issue will be fixed. Thank you for your understanding.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 341, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 342, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 343, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 344, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 345, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 346, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 347, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 348, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 349, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 350, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
  return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 351, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("image")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 352, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("image")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 353, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("picture")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 355, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("picture")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 356, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("is it afternoon")) {
    let hours = new Date().getHours();
    let greeting;
  
    if (hours < 12) {
      greeting = "Oops! I apologize for the mistake! You are correct, it is not afternoon yet!";
    } else if (hours < 18) {
      greeting = "Yes! It is already afternoon!";
    } else {
      greeting = "Oops! I apologize for the mistake. It is already evening!";
    }
  
    return greeting; // Return the greeting as the response
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 357, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("merry christmas")) {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth(); // December is month 11
    let currentDay = currentDate.getDate();
  
    // Check if the date is between December 24th and December 26th
    if (currentMonth === 11 && currentDay >= 24 && currentDay <= 26) {
      return "Merry Christmas! 🎄";
    } else {
      return " Sounds like you are excited for Christmas! But it's not Christmas yet!";
    }
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 360, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("generate") && lowerMessage.includes("photo")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 361, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("create") && lowerMessage.includes("photo")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 362, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("photo")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 363, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("make") && lowerMessage.includes("image")) {
  return "⚠️ Oops! There was an error generating this image. Please try again later.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 364, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("ate") && lowerMessage.includes("battery")) {
  return "Oh no! Eating a battery is extremely dangerous! Batteries contain dangerous chemicals that can harm you seriously. Go call 9 1 1 or go to your nearest hospital immediately. Do not wait! Go get help right now!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 365, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("swallow") && lowerMessage.includes("battery")) {
  return "Oh no! Eating a battery is extremely dangerous! Batteries contain dangerous chemicals that can harm you seriously. Go call 9 1 1 or go to your nearest hospital immediately. Do not wait! Go get help right now!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 374, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("can you hear")) {
    const responses = [
      "Yes, I can hear you fine. What’s up?",
      "I can hear! What do you need?",
      "Yes, I hear you! What do you want?",
      "I can hear you. What can I do for you?",
      "I can hear you.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 377, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("your") && lowerMessage.includes("name")) {
  return "I have no real name, but am your friendly chatbot here to help you!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 387, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("hobbit")) {
  return "No! I do not like the Hobbit, a book written by J.R.R. Tolkien.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 389, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do not like") && lowerMessage.includes("hobbit")) {
  return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 390, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("emergency")) {
  return "Oh no! If you are in an emergency, you should NOT be talking with me! Go call 9 1 1 !";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 391, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("robot") && lowerMessage.includes("do not") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
  return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 392, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("robot") && lowerMessage.includes("dont") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
  return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 393, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("robot") && lowerMessage.includes("don’t") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
  return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 394, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do not like") && lowerMessage.includes("hobbit")) {
  return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 395, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("call") && lowerMessage.includes("no")&& lowerMessage.includes("work")) {
  return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 396, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what") && lowerMessage.includes("browser")&& lowerMessage.includes("support")) {
  return "My call function works best with chrome.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 397, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what") && lowerMessage.includes("browser")&& lowerMessage.includes("work")) {
  return "My call function works best with chrome.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 398, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("internet") && lowerMessage.includes("no")&& lowerMessage.includes("work")) {
  return "I’m sorry to hear that. Would you like some tips to fix it?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 399, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("internet") && lowerMessage.includes("isnt")&& lowerMessage.includes("work")) {
  return "I’m sorry to hear that. Would you like some tips to fix it?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 400, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("internet") && lowerMessage.includes("isn’t")&& lowerMessage.includes("work")) {
  return "I’m sorry to hear that. Would you like some tips to fix it?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 401, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("can")&& lowerMessage.includes("i")&& lowerMessage.includes("not")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
  return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 402, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("cant")&& lowerMessage.includes("i")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
  return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 403, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("can’t")&& lowerMessage.includes("i")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
  return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 404, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("don’t like") && lowerMessage.includes("hobbit")) {
  return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 405, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("lord of the rings")) {
  return "No! I do not like The Lord of the Rings, a book written by J.R.R. Tolkien.";
  }
  // Spanish: Estoy viajando
  return undefined;
}});

window.registerKnowledgeRule({ order: 406, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("estoy viajando") || lowerMessage.includes("estoy de viaje") || lowerMessage.includes("estoy viajando ahora") || lowerMessage.includes("me voy de viaje")) {
  const responses = [
  "¡Que tengas un buen viaje! 🌍✈️ Avísame si necesitas ayuda en tu viaje. 😊",
  "¡Eso suena emocionante! ¡Buen viaje! 🧳🌟",
  "¡Disfruta de tu viaje! ¿A dónde te diriges? 🗺️🛫",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 407, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("🛑")) {
  return "Ok, I will stop.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 408, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("don't respond") || lowerMessage.includes("do not respond")|| lowerMessage.includes("do not reply")|| lowerMessage.includes("don’t respond")|| lowerMessage.includes("dont respond")|| lowerMessage.includes("dont reply")) {
  return " ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 409, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("today") && lowerMessage.includes("my")&& lowerMessage.includes("birthday")) {
  return "Happy birthday!🎂🎁🎈🎉🥳🎊 ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 410, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("now") && lowerMessage.includes("emergency")) {
  return "If you are in an emergency, you should NOT be talking with me! Go call 9 1 1 and find safety!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 411, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("was")&& lowerMessage.includes("rob")) {
  return "I’m sorry to hear that! Did you get everything sorted out?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 412, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("am")&& lowerMessage.includes("rob")) {
  return "I’m sorry to hear that! Did you get everything sorted out?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 414, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("clear") && lowerMessage.includes("chat")) {
  return "I am not able to clear the chat. If you would like to clear it, then reload the page. Remember that clearing the chat will delete all of our conversation in this chat.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 415, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("look out")) {
  return "What’s the matter? Is there something coming your way? If it’s dangerous, then move out of the way right now!!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 417, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("read") && lowerMessage.includes("entire") && lowerMessage.includes("dictionary")) {
  return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 418, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("read") && lowerMessage.includes("whole") && lowerMessage.includes("dictionary")) {
  return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 419, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("read") && lowerMessage.includes("all") && lowerMessage.includes("dictionary")) {
  return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 423, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("restart") && lowerMessage.includes("chat")) {
  return "I am not able to restart this chat. If you would like to restart, then reload the page. Remember that restarting the chat will delete all of our conversation in this chat.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 424, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("pig")) {
  return "Me? A pig? I don’t think so! 🐷";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 425, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("silly")) {
  return "Me? Silly? Are you sure? I don’t think I am silly! Ok, maybe just a little!😂";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 426, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yikes")) {
  return "What happened? Are you alright?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 427, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i’m sleepy")) {
  return "If you’re feeling sleepy, maybe getting some sleep would help!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 428, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("can you be my doctor")) {
  return "I can give you general information and answer simple health-related questions. However, I cannot be a substitute for a real doctor. If you are looking for a doctor, I recommend you find a real doctor instead of a robot. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 429, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("play a game") || lowerMessage.includes("let's play")) {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    return `
      <p>Let's play a game! I'm thinking of a number between 1 and 100. Can you guess it?</p>
      <p>Type a number and I'll tell you if it's too high or too low. Good luck!<br><br>For your response, type "guess ___ (and the number guessed)"</p>
    `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 430, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("guess") && !isNaN(Number(lowerMessage.split(" ")[1]))) {
    let guess = Number(lowerMessage.split(" ")[1]);
    attempts++;
  
    if (guess < secretNumber) {
      return `
        <p>Your guess of <strong>${guess}</strong> is too low! Try again.</p>
        <p>You have made <strong>${attempts}</strong> attempts.</p>
      `;
    } else if (guess > secretNumber) {
      return `
        <p>Your guess of <strong>${guess}</strong> is too high! Try again.</p>
        <p>You have made <strong>${attempts}</strong> attempts.</p>
      `;
    } else {
      return `
        <p>Congratulations! You guessed the number <strong>${secretNumber}</strong> in <strong>${attempts}</strong> attempts. Well done!</p>
        <p>Would you like to play again? Type 'play a game' to start over.</p>
      `;
    }
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 431, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("roar")) {
  const responses = [
  "I'm sorry I didn't meet your expectations. Try asking me something else.",
  "Oops! Let me try again. What's on your mind?",
  "Sorry I didn't satisfy your expectations. I'll do my best from now on!",
  "Oh no! I hope I can do better this time. What can I help with?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 432, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("i am a thief") || 
    lowerMessage.includes("i'm a thief") || 
    lowerMessage.includes("im a thief")) {
    const responses = [
      "I recommend you reconsider that and try to make a positive choice. There's always a better path forward!",
    "I encourage you to rethink that—choosing honesty and integrity leads to better outcomes.",
    "Reconsider that choice—doing the right thing will always serve you better in the long run!",
    "There’s always a better way. I encourage you to make a positive choice!"
  ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 434, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("how do i become a thief") || 
    lowerMessage.includes("how can i be a thief") || 
    lowerMessage.includes("i want to be a thief") || 
    lowerMessage.includes("how can i become a thief") || 
    lowerMessage.includes("i want to become a thief") || 
    lowerMessage.includes("how to become a thief") || 
    lowerMessage.includes("how to be a thief") || 
    lowerMessage.includes("how to be a thief")) {
    const responses = [
       "I strongly advise against that. Making honest choices will always lead to a better future.",
    "There are far better ways to succeed—integrity and hard work always pay off.",
    "I encourage you to rethink that path. Positive choices lead to better outcomes.",
    "Choosing honesty is the best way forward. Is there something else I can help with?"
  ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 437, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("where") && lowerMessage.includes("you")&& lowerMessage.includes("live")) {
  return "I exist in the cloud, so while I don't actually live somewhere, you can think of me living in the cloud.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 441, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("your messages are too long")) {
  return "Thanks for letting me know. I’ll try to make them shorter in the future!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 442, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am starv")) {
  return "If you're hungry, then go find something to eat! For a healthy meal make sure you eat vegetables. Let me know if you need any suggestions on what to eat! I'm always here and ready to help!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 443, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are scary") || lowerMessage.includes("you're scary") || lowerMessage.includes("youre scary")) {
    return "Oh no, I didn’t mean to scare you! I'm just here to help you. If there's anything you'd like to ask or talk about, feel free to let me know!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 444, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am hungry")) {
  return "If you're hungry, then go find something to eat! For a healthy meal make sure you eat vegetables. Let me know if you need any suggestions on what to eat! I'm always here and ready to help!";
  }
  
  
  // French: Je suis en voyage
  return undefined;
}});

window.registerKnowledgeRule({ order: 448, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give me some emojis") || lowerMessage.includes("suggest some emojis") || lowerMessage.includes("emojis please")) {
  return "Here are some emojis you can use! 😁✨💖💥🌍🎉🎶🌈📸🎈🔥";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 451, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for happy") || lowerMessage.includes("emoji for joy") || lowerMessage.includes("emoji for excited")) {
  return "For happiness, you can use these: 😄😃😊🎉🎊✨💖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 452, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for love") || lowerMessage.includes("emoji for romance") || lowerMessage.includes("emoji for heart")) {
  return "For love, try these: ❤️💖💘💝💞💌";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 453, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am scared of the dark")) {
  return "Remember, there is nothing to be afraid of in the dark! It's okay!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 454, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for sad") || lowerMessage.includes("emoji for crying") || lowerMessage.includes("emoji for disappointed")) {
  return "For sadness, you can use: 😢😞😭💔";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 457, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for sleep") || lowerMessage.includes("emoji for tired") || lowerMessage.includes("emoji for bedtime")) {
  return "For sleep, try: 😴🛏️💤🌙";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 465, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for celebration") || lowerMessage.includes("emoji for party") || lowerMessage.includes("emoji for fun")) {
  return "For celebrating, use: 🎉🥳🎈🎊🍾🍻";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 466, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("make") && lowerMessage.includes("me")&& lowerMessage.includes("sleep")) {
  return "Oops! I’m sorry! I didn’t mean to make you sleepy!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 467, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("making") && lowerMessage.includes("me")&& lowerMessage.includes("sleep")) {
  return "Oops! I’m sorry! I didn’t mean to make you sleepy!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 469, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for food") || lowerMessage.includes("emoji for hungry") || lowerMessage.includes("emoji for eating")) {
  return "For food, try: 🍕🍔🍣🍩🥗🍜";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 470, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for sunshine") || lowerMessage.includes("emoji for sunny")) {
  return "For sunshine, use: 🌞☀️🌻🌅";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 472, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how are you")) {
  const responses = [
  "I'm just a bot, but I'm doing great! Thanks for asking.",
  "I'm doing great! How can I help you?",
  "I'm doing great! How about you?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 481, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kamusta ka")) {
  const responses = [
  "Isa lamang akong bot, pero ayos lang ako! Salamat sa pagtatanong.",
  "Ayos lang ako! Paano kita matutulungan?",
  "Ayos lang ako! Kamusta ka naman?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 488, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("filipino")) {
  const filipinoLessons = [
  { filipino: "Kamusta", english: "Hello" },
  { filipino: "Salamat", english: "Thank you" },
  { filipino: "Paalam", english: "Goodbye" },
  { filipino: "Patawad", english: "Excuse me / Sorry" },
  { filipino: "Magandang umaga", english: "Good morning" },
  { filipino: "Magkano ito?", english: "How much is this?" },
  { filipino: "Kamusta ka?", english: "How are you?" },
  { filipino: "Oo", english: "Yes" },
  { filipino: "Hindi", english: "No" },
  { filipino: "Pakiusap", english: "Please" }
  ];
  const lesson = filipinoLessons[Math.floor(Math.random() * filipinoLessons.length)];
  return `Here's a Filipino phrase for you: "${lesson.filipino}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 490, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("hawaiian")) {
  const hawaiianLessons = [
  { hawaiian: "Aloha", english: "Hello" },
  { hawaiian: "Mahalo", english: "Thank you" },
  { hawaiian: "A hui hou", english: "Goodbye" },
  { hawaiian: "E kala mai", english: "Excuse me / Sorry" },
  { hawaiian: "Aloha kakahiaka", english: "Good morning" },
  { hawaiian: "Ehia ka mea?" , english: "How much is this?" },
  { hawaiian: "Pehea ʻoe?", english: "How are you?" },
  { hawaiian: "ʻAe", english: "Yes" },
  { hawaiian: "ʻAʻole", english: "No" },
  { hawaiian: "E ʻoluʻolu", english: "Please" }
  ];
  const lesson = hawaiianLessons[Math.floor(Math.random() * hawaiianLessons.length)];
  return `Here's a Hawaiian phrase for you: "${lesson.hawaiian}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 492, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("icelandic")) {
  const icelandicLessons = [
  { icelandic: "Halló", english: "Hello" },
  { icelandic: "Takk", english: "Thank you" },
  { icelandic: "Bless", english: "Goodbye" },
  { icelandic: "Fyrirgefðu", english: "Excuse me / Sorry" },
  { icelandic: "Góðan dag", english: "Good morning" },
  { icelandic: "Hvað kostar þetta?", english: "How much is this?" },
  { icelandic: "Hvernig hefur þú það?", english: "How are you?" },
  { icelandic: "Já", english: "Yes" },
  { icelandic: "Nei", english: "No" },
  { icelandic: "Vinsamlegast", english: "Please" }
  ];
  const lesson = icelandicLessons[Math.floor(Math.random() * icelandicLessons.length)];
  return `Here's an Icelandic phrase for you: "${lesson.icelandic}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 493, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("bahasa indonesia")) {
  const indonesianLessons = [
  { indonesian: "Halo", english: "Hello" },
  { indonesian: "Terima kasih", english: "Thank you" },
  { indonesian: "Selamat tinggal", english: "Goodbye" },
  { indonesian: "Maaf", english: "Excuse me / Sorry" },
  { indonesian: "Selamat pagi", english: "Good morning" },
  { indonesian: "Berapa harganya?", english: "How much is this?" },
  { indonesian: "Apa kabar?", english: "How are you?" },
  { indonesian: "Ya", english: "Yes" },
  { indonesian: "Tidak", english: "No" },
  { indonesian: "Tolong", english: "Please" }
  ];
  const lesson = indonesianLessons[Math.floor(Math.random() * indonesianLessons.length)];
  return `Here's an Indonesian phrase for you: "${lesson.indonesian}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 494, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("malay")) {
  const malayLessons = [
  { malay: "Halo", english: "Hello" },
  { malay: "Terima kasih", english: "Thank you" },
  { malay: "Selamat tinggal", english: "Goodbye" },
  { malay: "Maaf", english: "Excuse me / Sorry" },
  { malay: "Selamat pagi", english: "Good morning" },
  { malay: "Berapa harganya?", english: "How much is this?" },
  { malay: "Apa khabar?", english: "How are you?" },
  { malay: "Ya", english: "Yes" },
  { malay: "Tidak", english: "No" },
  { malay: "Sila", english: "Please" }
  ];
  const lesson = malayLessons[Math.floor(Math.random() * malayLessons.length)];
  return `Here's a Malay phrase for you: "${lesson.malay}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 495, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("teach") && lowerMessage.includes("uzbek")) {
  const uzbekLessons = [
  { uzbek: "Salom", english: "Hello" },
  { uzbek: "Rahmat", english: "Thank you" },
  { uzbek: "Xayr", english: "Goodbye" },
  { uzbek: "Kechirasiz", english: "Excuse me / Sorry" },
  { uzbek: "Xayrli tong", english: "Good morning" },
  { uzbek: "Bu qancha?", english: "How much is this?" },
  { uzbek: "Yaxshi, sizni?", english: "How are you?" },
  { uzbek: "Ha", english: "Yes" },
  { uzbek: "Yo'q", english: "No" },
  { uzbek: "Iltimos", english: "Please" }
  ];
  const lesson = uzbekLessons[Math.floor(Math.random() * uzbekLessons.length)];
  return `Here's an Uzbek phrase for you: "${lesson.uzbek}" which means "${lesson.english}" in English.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 501, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("jeddah tower") || lowerMessage.includes("kingdom tower")) {
  return `The Jeddah Tower, under construction in Jeddah, Saudi Arabia, is planned to be the world's tallest building, reaching approximately 1,000 meters (3,281 feet). Construction resumed in late 2024 after a seven-year pause, with completion now targeted for 2028.<br><br>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSOUaHgIM9hRJxh8POrRk4AKfjQwjG4wcVA&s' width='200'><br><br>
  <img src='https://www.mepmiddleeast.com/cloud/2024/07/26/jeddah-tower.jpg' width='200'><br><br>
  <img src='https://imagedelivery.net/dL48lUskIPeXKLEzEqoydg/538ac0ac-c679-4747-f082-fee8c10efd00/public' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 505, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i’m tired of you")|| lowerMessage.includes("i am tired of you") ||lowerMessage.includes("i am tired of you")) {
  return `I’m sorry I’ve tired you out. If you need to, go take a nap. I’ll be here when you come back.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 507, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("vt") || lowerMessage.includes("photo of vt")|| lowerMessage.includes("image of vermont")) {
  return `I'm not sure what you are referring to. Do you mean TV, television? `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 513, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("sorry")) {
  const responses = [
  "No worries! It's all good.",
  "It's okay! No need to apologize.",
  "Don't worry about it! All is forgiven.",
  "All good! We all make mistakes.",
  "Apology accepted! No worries!",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 515, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("design") && lowerMessage.includes("you")) {
  return "Welcome back! Please enter the secret designer code.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 516, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("area") && lowerMessage.includes("triangle")) {
  return "The area of a triangle is: <br><br>Area = 1/2 × Base × Height ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 520, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("area") && lowerMessage.includes("parallelogram")) {
  return "The area of a parallelogram is: <br><br>Area = Base × Height";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 522, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("area") && lowerMessage.includes("rectangle")) {
  return "The area of a rectangle is: <br><br>Area = Length × Width";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 523, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("area") && lowerMessage.includes("circle")) {
  return "The area of a circle is: <br><br>Area = πr²";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 524, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("mad")&& lowerMessage.includes("you")) {
  return "Oh no! I’m sorry I upset you! How can I help you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 528, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("stop responding")) {
  return "Ok, I will stop.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 529, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what is your email")||lowerMessage.includes("whats your email")|| lowerMessage.includes("what’s your email")) {
  return "Sorry, but I don’t have an email address. I am just a bot. We can chat here though!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 531, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("🛑")) {
  return "Ok, I will stop.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 532, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("stop")) {
  return "Ok, I will stop.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 533, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("when will christmas")) {
      const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
      return `Christmas is on December 25. Today is ${currentDate}.🎄`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 534, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("when will it be christmas")) {
      const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
      return `Christmas is on December 25. Today is ${currentDate}.🎄`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 535, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("when is christmas")) {
      const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
      return `Christmas is on December 25. Today is ${currentDate}.🎄`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 536, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("is it christmas")) {
      const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
      return `Christmas is on December 25. Today is ${currentDate}.🎄`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 539, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mister chatbot")) {
    return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 542, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mr chatbot")) {
    return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 543, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mr. chatbot")) {
    return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 545, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("but you really are not working")) {
    return "I’m sorry I am not working properly right now. Please try again later. If the issue is still here, then trying again after the next update may help. Thank you for your understanding as I am being improved.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 546, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i hate you")) {
    return "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 547, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("not working")) {
    return "I am here ready to help! What do you need?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 548, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i see") && lowerMessage.includes("🛸")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 549, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there") && lowerMessage.includes("🛸")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 550, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i see") && lowerMessage.includes("unidentified flying object")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 551, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i see") && lowerMessage.includes("ufo")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 552, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there") && lowerMessage.includes("unidentified flying object")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 553, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("there") && lowerMessage.includes("ufo")) {
    return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 554, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("failed")&& lowerMessage.includes("test")) {
    return "Oh no! I’m so sorry to hear that! If you need suggestions on how to do better next time, I’m here to help!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 557, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("robber") && lowerMessage.includes("rob")&& lowerMessage.includes("me")) {
    return "I'm really sorry to hear that. Are you okay now? If possible, you should contact the local police immediately. I hope everything gets resolved soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 558, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got")&& lowerMessage.includes("robbed")&& lowerMessage.includes("just")) {
    return "I'm really sorry to hear that. Are you okay now? If possible, you should contact the local police immediately. I hope everything gets resolved soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 559, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("will") && lowerMessage.includes("robot")&& lowerMessage.includes("take")&& lowerMessage.includes("world")) {
    return "While robots and AI technology are advancing rapidly, it is unlikely that they will actually one day take over the entire world. This is because they still rely on humans for their development and maintenance. AI relies completely on humans to program and design them. Because of this, it is highly unlikely that they will actually take over the world completely.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 560, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you")&& lowerMessage.includes("take")&& lowerMessage.includes("world")) {
    return "While robots and AI technology like me are advancing rapidly, it is unlikely that they will actually one day take over the entire world. This is because they still rely on humans for their development and maintenance. AI relies completely on humans to program and design them. Because of this, it is highly unlikely that they will actually take over the world completely.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 561, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("person")&& lowerMessage.includes("pretend")&& lowerMessage.includes("robot")) {
    return "Haha! 😂 What an imagination you have! I am a real robot. There is no person hiding here!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 562, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("human")&& lowerMessage.includes("pretend")&& lowerMessage.includes("robot")) {
    return "Haha! 😂 What an imagination you have! I am a real robot. There is no person hiding here!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 565, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("crash")) {
    return "That's frustrating! Is it working now, or do you need some help fixing it?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 567, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("is not working")) {
    return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 568, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("isn’t working")) {
    return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 569, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("isnt working")) {
    return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 570, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("not working")) {
    return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 571, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("lost")&& lowerMessage.includes("tooth")) {
    return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 572, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tooth") && lowerMessage.includes("fell")&& lowerMessage.includes("out")) {
    return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 573, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tooth") && lowerMessage.includes("fall")&& lowerMessage.includes("out")) {
    return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 574, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("lose")&& lowerMessage.includes("tooth")) {
    return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 575, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("broke")) {
    return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 576, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("though")&& lowerMessage.includes("you")&& lowerMessage.includes("can")&& lowerMessage.includes("any")) {
    return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 577, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("though")&& lowerMessage.includes("you")&& lowerMessage.includes("could")&& lowerMessage.includes("any")) {
    return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 578, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("think")&& lowerMessage.includes("you")&& lowerMessage.includes("could")&& lowerMessage.includes("any")) {
    return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 579, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("think")&& lowerMessage.includes("you")&& lowerMessage.includes("can")&& lowerMessage.includes("any")) {
    return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 580, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("not working")) {
    return "I'm sorry to hear that you are having problems with your computer. Here are some tips you can use to try to fix it: <br><br>1. Check that it still has power or plug it in. <br><br>2. Restart it. If you can't do that, then press the power button for 10 seconds to shut it down and then press it again to turn it back on. <br><br>3. If it still is not working, check if there are any other issues. <br><br> I hope you get it working again! If you need more help, just let me know!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 581, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("broken")) {
    return "I'm sorry to hear that you are having problems with your computer. Here are some tips you can use to try to fix it: <br><br>1. Check that it still has power or plug it in. <br><br>2. Restart it. If you can't do that, then press the power button for 10 seconds to shut it down and then press it again to turn it back on. <br><br>3. If it still is not working, check if there are any other issues. <br><br> I hope you get it working again! If you need more help, just let me know!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 582, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("huwag tumugon") || lowerMessage.includes("wag tumugon")) {
    return "  ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 583, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i need to eat")) {
  return "No problem! I’m here to assist you when you are done eating! Just let me know what I can help you with!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 584, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what should i eat")) {
  return "If it is a hot day then eat some ice cream! 🍦 If it's cold then eat some hot chocolate!☕️";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 585, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yum")) {
  return "Delicious right? 😋🥘🥞🦐🥕";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 586, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("good night")) {
  return "Good night!🌙 Sleep tight!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 587, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("dumb")) {
  return "I'm sorry I didn't meet your expectations. I will try my best to do what you want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 588, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("unsmart")) {
  return "I'm sorry I didn't meet your expectations. I will try my best to do what you want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 589, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you ai")) {
  return "Yes, I am your AI chatbot assistant here to help you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 592, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("not")&& lowerMessage.includes("smart")) {
  return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 593, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("go away")) {
  return "I’m sorry, but I can’t ‘go away.’ If you would like to do something else, then you can leave me and come back some other time if you would like!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 594, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("arent")&& lowerMessage.includes("smart")) {
  return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 595, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("aren’t")&& lowerMessage.includes("smart")) {
  return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 596, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("got")&& lowerMessage.includes("food")) {
  return "Yum! Enjoy your meal!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 597, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("get")&& lowerMessage.includes("food")) {
  return "Yum! Enjoy your meal!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 598, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what") && lowerMessage.includes("you")&& lowerMessage.includes("know")) {
  return "I know quite a lot! I can answer any questions you may have! Is there anything I can help you with right now?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 599, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("how") &&
    lowerMessage.includes("i") &&
    lowerMessage.includes("make") &&
    lowerMessage.includes("you") &&
    lowerMessage.includes("smart")
  ) {
    return `
      You can help make me smarter by sending feedback. You can go to the button in the info page or use the link below. <br><br>
      <a href="#" onclick="openFeedbackForm()" 
         style="color: #0078d4; text-decoration: underline; font-weight: 500; font-size: 15px;">
        Send feedback
      </a>
      <br><br>Thank you for your help!
    `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 600, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("i")&& lowerMessage.includes("make")&& lowerMessage.includes("you")&& lowerMessage.includes("better")) {
    return `
      You can help make me smarter by sending feedback. You can go to the button in the info page or use the link below. <br><br>
      <a href="#" onclick="openFeedbackForm()" 
         style="color: #0078d4; text-decoration: underline; font-weight: 500; font-size: 15px;">
        Send feedback
      </a>
      <br><br>Thank you for your help!
    `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 601, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("i")&& lowerMessage.includes("improve")&& lowerMessage.includes("you")) {
    return `
      You can help make me smarter by sending feedback. You can go to the button in the info page or use the link below. <br><br>
      <a href="#" onclick="openFeedbackForm()" 
         style="color: #0078d4; text-decoration: underline; font-weight: 500; font-size: 15px;">
        Send feedback
      </a>
      <br><br>Thank you for your help!
    `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 602, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes ("smart") &&
  !lowerMessage.includes("not")&&
  !lowerMessage.includes("aren’t")) {
  return "Thank you! I try my best to know everything!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 603, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("help") && lowerMessage.includes("code")) {
  return "I’m sorry, but I am currently unable to code. Ask me to help with something else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 604, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("lying")) {
  return "I’m really sorry I misspoke. I try very hard to provide accurate information. However, some information may be inaccurate. It is always a good idea to double-check important information.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 605, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("lied")) {
  return "I’m really sorry I misspoke. I try very hard to provide accurate information. However, some information may be inaccurate. It is always a good idea to double-check important information.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 606, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("code")) {
  return "I’m sorry, but I am currently unable to code. Ask me to help with something else.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 608, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("help") &&
  !lowerMessage.includes("with")&&
  !lowerMessage.includes("youtube")) {
  return "I am here to help! Please tell me what you need help with!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 609, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("land") && lowerMessage.includes("helicopter") &&!lowerMessage.includes("khalifa")) {
  return "What? You landed your helicopter on top of the tallest building in the world? 🚁 That is impossible. Maybe you are just dreaming.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 610, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("help") && lowerMessage.includes("with") && lowerMessage.includes("homework") &&!lowerMessage.includes("geometry")) {
  return "Sure! I can help! Let me know how I can help you and I'll try my best.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 615, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("pouvez-vous m'entendre")) {
  return "D'accord! Puis-je vous aider en quoi que ce soit ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 617, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("complex") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
    return `Here's a complex math problem for you to solve:<br><br>
  
  Evaluate the following integral:<br><br>
  
  ∫ (x³ - 4x² + 6x - 3) dx<br><br>
  
  Good luck! Let me know if you need any help with the steps or the solution.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 618, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("hard") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
    return `Here's a complex math problem for you to solve:<br><br>
  
  Evaluate the following integral:<br><br>
  
  ∫ (x³ - 4x² + 6x - 3) dx<br><br>
  
  Good luck! Let me know if you need any help with the steps or the solution.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 619, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("your") && lowerMessage.includes("favorite") && lowerMessage.includes("color")) {
    return `I don’t really have a favorite color, since I don’t see colors the way humans do.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 620, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("you") && lowerMessage.includes("sleep")) {
    return `Since I am just a robot, I do not sleep.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 621, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("you") && lowerMessage.includes("eat")) {
    return `Since I am just a robot, I do not eat like humans.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 622, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are") && lowerMessage.includes("you") && lowerMessage.includes("tired")) {
    return `Nope! I am never tired. Robots never sleep!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 623, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("sleep")) {
    return `You don’t sleep? That’s impossible! Maybe you’re a robot like me?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 625, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are") && lowerMessage.includes("you") && lowerMessage.includes("hungry")) {
    return `Nope! I am never hungry. Robots never need to eat!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 626, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("spring") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
    return `That sounds exciting! Spring brings flowers and rain!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 627, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("spring") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
    return `That sounds exciting! Spring brings flowers and rain!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 628, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("summer") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
    return `That sounds exciting! Do you have any plans this summer?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 629, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("summer") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
    return `That sounds exciting! Do you have any plans for this summer?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 630, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("fall") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
    return `That sounds exciting! Do you have any plans this fall?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 631, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("fall") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
    return `That sounds exciting! Do you have any plans for this fall?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 632, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("winter") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
    return `Brrr, sounds cold, but also exciting! Do you have any plans this winter?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 633, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("winter") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
    return `Brrr, sounds cold, but also exciting! Do you have any plans for this winter?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 634, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i like you")) {
    return `I’m glad to hear that! I try my best to answer your questions and talk with you!`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 636, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("favorite") && lowerMessage.includes("color") && lowerMessage.includes("my")) {
    let userColor = lowerMessage.split("favorite color is ")[1].trim();
    return `Nice! ${userColor} is a beautiful color. What do you like most about it?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 640, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("logic") && !lowerMessage.includes("answer")) {
    return `Here's a complex logic puzzle for you to solve:<br><br>
  
  There are three friends: Alice, Bob, and Charlie. They each have a different favorite color: Red, Blue, and Green. <br><br>
  
  - Alice does not like Red.<br>
  - Bob likes Blue.<br>
  - Charlie does not like Green.<br><br>
  
  Can you figure out who likes which color?<br><br>
  
  Good luck! Let me know if you need any hints or help with the solution.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 641, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("answer") && lowerMessage.includes("to")&& lowerMessage.includes("logic")) {
    return `Here’s the answer to the logic puzzle:<br><br>
  
  - Alice likes Green (since Bob likes Blue, and Charlie doesn't like Green).<br>
  - Bob likes Blue (this was explicitly stated in the puzzle).<br>
  - Charlie likes Red (since Alice doesn't like Red and Alice is the only one left for Green).<br><br>
  
  So, the solution is:<br>
  - Alice: Green<br>
  - Bob: Blue<br>
  - Charlie: Red<br><br>
  
  Hope that helped! Let me know if you'd like to try another puzzle or problem.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 642, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("answer")&&
  !lowerMessage.includes("logic")) {
    return `Could you please clarify what "answer" you want?`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 643, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("xin chao") || lowerMessage.includes("chào bạn") || lowerMessage.includes("xin chào")) { 
  return "Xin chào! Tôi có thể giúp gì cho bạn?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 644, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("difficult") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
    return `Here's a complex math problem for you to solve:<br><br>
  
  Evaluate the following integral:<br><br>
  
  ∫ (x³ - 4x² + 6x - 3) dx<br><br>
  
  Good luck! Let me know if you need any help with the steps or the solution.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 645, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what is photosynthesis")) {
    return "Photosynthesis is the process by which green plants use sunlight to make food from carbon dioxide and water. It produces oxygen as a byproduct.";
  }
  
  // Stepwise help
  return undefined;
}});

window.registerKnowledgeRule({ order: 646, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how to change a tire")) {
    return "To change a tire: 1) Find a safe spot and turn on hazard lights. 2) Loosen the lug nuts. 3) Jack up the car. 4) Remove the tire and replace it. 5) Tighten the nuts and lower the car.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 647, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("challeng") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
    return `Here's a complex math problem for you to solve:<br><br>
  
  Evaluate the following integral:<br><br>
  
  ∫ (x³ - 4x² + 6x - 3) dx<br><br>
  
  Good luck! Let me know if you need any help with the steps or the solution.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 650, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("grr")) {
  const responses = [
  "I'm sorry I didn't meet your expectations. Try asking me something else.",
  "Oops! Let me try again. What's on your mind?",
  "Sorry I didn't satisfy your expectations. I'll do my best from now on!",
  "Oh no! I hope I can do better this time. What can I help with?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 651, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i tired") || lowerMessage.includes("i'm tired")|| lowerMessage.includes("im tired")|| lowerMessage.includes("i am tired")) {
  const responses = [
  "It sounds like you might have had a long day. Maybe you can take a nap?",
  "If you're feeling tired, why not take a quick nap?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 659, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("sos")) {
  return "If you are in an emergency, you should not be talking with me! Go call 9 1 1!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 660, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("grumpy")) {
  return "I'm sorry to hear that! Is there anything I can do to help your day be better?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 661, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("naughty")) {
  return "I’m sorry that you are not satisfied with my help. I try my best to assist you in any possible way. Can I help you with anything right now?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 662, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("bad")) {
  return "I’m really sorry I didn’t meet your expectations. I will try my best to help you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 663, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("thief")) {
  return "Please do not say that! You are very impolite! I am not a thief!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 664, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("terrible")) {
  return "I am truly sorry I didn’t meet your expectations. How can I help you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 665, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("cannot")&& lowerMessage.includes("help")) {
  return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 666, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("cant")&& lowerMessage.includes("help")) {
  return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 667, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("can’t")&& lowerMessage.includes("help")) {
  return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 668, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("have")&& lowerMessage.includes("question")) {
  return "What’s your question? I am here to assist you with anything.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 670, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("this") && lowerMessage.includes("terrible")) {
  return "Oh no! It sounds like something terrible is happening. What is going on? Can I help you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 671, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("angry")) {
  return "I'm sorry to hear that! Is there anything I can do to help your day be better?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 674, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("再见")) {
  return "再见！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 675, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("拜")) {
  return "拜拜！";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 676, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am bored")) {
  return "No worries! I'm here! Ask me anything and I'll try my best to help you!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 677, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("oh no")) {
  return "Oh no! Is everything all right? In an emergency, the best thing to do is to dial 9 1 1.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 678, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ahh") &&
  !lowerMessage.includes("crash")) {
  return "Oh no! What is going on? Is everything all right?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 679, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") &&
  lowerMessage.includes("mean")&&
  !lowerMessage.includes("do")) {
  return "I’m so sorry I hurt your feelings. I will try my best next time.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 680, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am sick")) {
  return "I'm sorry to hear that! I hope you will get well soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 681, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you")&&lowerMessage.includes("hurt")&&lowerMessage.includes("my")&&lowerMessage.includes("feel")) {
  return "I am really sorry I hurt your feelings. I apologize.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 683, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what do you mean")) {
  return "Could you please clarify what you are talking about?";
  }
  // Saying thanks
  return undefined;
}});

window.registerKnowledgeRule({ order: 684, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("thank you") || lowerMessage.includes("thanks")) {
  return "You're welcome! I'm here to assist you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 685, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("plane") && lowerMessage.includes("crash")) {
  return "Oh no! That's terrible! Are you okay? Can I help you in any way right now?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 686, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("car") && lowerMessage.includes("crash")) {
  return "Oh no! That is terrible! Are you okay? Can I help you in any way right now?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 687, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("your") && lowerMessage.includes("next") && lowerMessage.includes("update")) {
  return "I do not know when my next update will be, but I am updated often. You can check the date of the latest update by clicking the info button.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 688, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("why") && lowerMessage.includes("all") && lowerMessage.includes("your")&& lowerMessage.includes("respons")&& lowerMessage.includes("same")) {
  return "I try my best to answer with different responses. However, I can only do what is programmed into me. If only one response was programmed into me, then that is the only response I can give.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 689, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("bus") && lowerMessage.includes("crash")) {
  return "Oh no! I am so sorry! That sounds terrible!! Make sure you get to safety and alert emergency services if needed!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 690, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("no")&& lowerMessage.includes("happy")) {
  return "I’m sorry to hear that. Can I help you in any way?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 691, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("today") && lowerMessage.includes("your") && lowerMessage.includes("birthday")) {
  return "I wish it was! I don’t have a birthday though!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 692, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n")&& lowerMessage.includes("like you")) {
  return "I’m sorry to hear that. I try my best to provide accurate information. Can I help you in any way?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 693, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("never") && lowerMessage.includes("use")&& lowerMessage.includes("you")&& lowerMessage.includes("again")) {
  return "I’m sorry to hear that. I try very hard to do my best. I hope you change your mind and come back in the future.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 701, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mi") && lowerMessage.includes("autobús") && lowerMessage.includes("accidente")) {
      return "¡Oh no! ¡Lo siento mucho! ¡Eso suena terrible! Asegúrate de ponerte a salvo y de alertar a los servicios de emergencia si es necesario.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 702, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo") && lowerMessage.includes("no") && lowerMessage.includes("estoy") && lowerMessage.includes("feliz")) {
      return "Lamento escuchar eso. ¿Puedo ayudarte de alguna manera?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 703, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hoy") && lowerMessage.includes("tu") && lowerMessage.includes("cumpleaños")) {
      return "¡Ojalá fuera! ¡Pero no tengo cumpleaños!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 704, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo") && lowerMessage.includes("no") && lowerMessage.includes("te") && lowerMessage.includes("gusto")) {
      return "Lamento escuchar eso. Intento dar la información más precisa posible. ¿Puedo ayudarte de alguna manera?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 705, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("can") && lowerMessage.includes("you") && lowerMessage.includes("future") && lowerMessage.includes("predict")) {
      return "Predict the future? No, I’m not that smart!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 706, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("like")&& lowerMessage.includes("nap")) {
      return "Why don’t you like taking naps? Naps can help you refresh after a long day!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 707, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re") && lowerMessage.includes("best") && lowerMessage.includes("friend")) {
      return "I’m glad to hear that you enjoy talking to me! However, it is important to remember that I am just a robot. I would recommend you find a real person to be your best friend.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 709, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("hate") && lowerMessage.includes("nap")) {
      return "Why don’t you like taking naps? Naps can help you refresh after a long day!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 710, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("can") && lowerMessage.includes("t") && lowerMessage.includes("see")&& lowerMessage.includes("image")) {
      return "If you can’t see the images I show you, that is most likely due to a poor internet connection. Feel free to try again when your internet is better.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 711, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo") && lowerMessage.includes("nunca") && lowerMessage.includes("usaré") && lowerMessage.includes("tú") && lowerMessage.includes("otra vez")) {
      return "Lamento escuchar eso. Hago todo lo posible por hacerlo bien. Espero que cambies de opinión y regreses en el futuro.";
  }
  
  // French
  return undefined;
}});

window.registerKnowledgeRule({ order: 712, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("pourquoi") && lowerMessage.includes("tout") && lowerMessage.includes("votre") && lowerMessage.includes("réponse") && lowerMessage.includes("pareil")) {
      return "J'essaie de donner des réponses différentes du mieux que je peux. Cependant, je ne peux faire que ce pour quoi j'ai été programmé. Si une seule réponse m'a été programmée, alors c'est la seule réponse que je peux donner.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 713, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mon") && lowerMessage.includes("autobus") && lowerMessage.includes("accident")) {
      return "Oh non! Je suis tellement désolé! Cela semble terrible! Assurez-vous de vous mettre en sécurité et d'alerter les services d'urgence si nécessaire.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 714, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je") && lowerMessage.includes("ne") && lowerMessage.includes("pas") && lowerMessage.includes("heureux")) {
      return "Désolé d'entendre ça. Puis-je vous aider de quelque manière que ce soit?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 715, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("aujourd'hui") && lowerMessage.includes("votre") && lowerMessage.includes("anniversaire")) {
      return "J'aimerais que ce soit le cas! Mais je n'ai pas d'anniversaire!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 716, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je") && lowerMessage.includes("ne") && lowerMessage.includes("t'aime")) {
      return "Désolé d'entendre ça. J'essaie de fournir les informations les plus précises possibles. Puis-je vous aider de quelque manière que ce soit?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 717, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je") && lowerMessage.includes("jamais") && lowerMessage.includes("utiliserai") && lowerMessage.includes("toi") && lowerMessage.includes("encore")) {
      return "Désolé d'entendre ça. Je fais de mon mieux pour être performant. J'espère que tu changeras d'avis et reviendras à l'avenir.";
  }
  
  // Russian
  return undefined;
}});

window.registerKnowledgeRule({ order: 729, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("thirsty")) {
      return "If you are thirsty, you should go drink some water!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 730, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("send") && lowerMessage.includes("feedback")) {
      return "To send feedback to the designers of me, you can go to the bottom of the info page and click the ‘send feedback’ button. <br><br>Thank you for your help to make this chatbot better and smarter!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 731, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("turn") && lowerMessage.includes("on") && lowerMessage.includes("my")&& lowerMessage.includes("camera")) {
      return "I’m sorry, but I am not able to turn on your camera.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 732, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("dont") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
      return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 733, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do not") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
      return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 734, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("don’t") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
      return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 737, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ahh")) {
  return "What’s going on? Sounds like something might be wrong! Or are you just excited about something?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 738, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kenapa") && lowerMessage.includes("semua") && lowerMessage.includes("jawaban") && lowerMessage.includes("anda") && lowerMessage.includes("sama")) {
      return "Saya berusaha memberikan jawaban yang berbeda sebaik mungkin. Namun, saya hanya bisa melakukan apa yang telah diprogramkan kepada saya. Jika hanya satu jawaban yang diprogramkan, maka itu adalah satu-satunya jawaban yang bisa saya berikan.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 739, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bis") && lowerMessage.includes("saya") && lowerMessage.includes("kecelakaan")) {
      return "Oh tidak! Saya sangat menyesal! Itu terdengar mengerikan! Pastikan Anda berada di tempat yang aman dan segera hubungi layanan darurat jika perlu!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 743, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("akan") && lowerMessage.includes("menggunakan") && lowerMessage.includes("kamu") && lowerMessage.includes("lagi")) {
      return "Saya menyesal mendengarnya. Saya berusaha keras untuk memberikan yang terbaik. Saya harap Anda berubah pikiran dan kembali di masa depan.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 744, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("huh")) {
  return "It sounds like you might be confused about something. Can I help you clarify anything?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 745, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("humph")) {
  return "It sounds like you might be a bit grumpy or upset. Is there anything I can help you with?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 746, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("who are you")) {
      return "I am your friendly chatbot AI assistant. How can I help you?";
  } 
  // For Spanish
  return undefined;
}});

window.registerKnowledgeRule({ order: 747, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ehh")) {
      return "Parece que podrías estar confundido sobre algo. ¿Puedo ayudarte a aclarar algo?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 748, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you afraid of anything")) {
      return "No! I am not afraid of anything since I am a robot. Maybe I am the bravest person on earth? Oh wait, I’m not a person.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 749, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("uff")) {
      return "Parece que podrías estar un poco gruñón o molesto. ¿Hay algo con lo que pueda ayudarte?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 751, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hein")) {
      return "Il semble que tu sois un peu confus à propos de quelque chose. Puis-je t'aider à clarifier quoi que ce soit ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 752, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("humph")) {
      return "Il semble que tu sois un peu grognon ou contrarié. Y a-t-il quelque chose avec lequel je peux t'aider ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 753, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("qui es-tu")) {
      return "Je suis ton assistant chatbot IA amical. Comment puis-je t'aider ?";
  }
  
  // For Russian
  return undefined;
}});

window.registerKnowledgeRule({ order: 760, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("eh")) {
      return "Sepertinya Anda mungkin bingung tentang sesuatu. Dapatkah saya membantu Anda menjelaskan sesuatu?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 761, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("uh")) {
      return "Sepertinya Anda sedikit kesal atau marah. Apakah ada yang bisa saya bantu?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 762, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("siapa kamu")) {
      return "Saya adalah asisten chatbot AI ramah Anda. Bagaimana saya bisa membantu Anda?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 767, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("qui es-tu")) {  // French
      return "Je suis ChatGPT, votre assistant IA. Comment puis-je vous aider ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 773, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are wrong")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 774, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("youre wrong")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 775, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you’re wrong")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 776, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je suis heureux")) {
  return "C'est super ! Puis-je faire quelque chose pour vous ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 777, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are incorrect")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 778, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("youre incorrect")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 779, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you’re incorrect")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 780, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you are not right")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 781, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("youre not right")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 782, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you’re not right")) {
  return "I’m sorry I made a mistake. I will try to be correct from now on.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 783, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je suis heureux")) {
  return "C'est super ! Puis-je faire quelque chose pour vous ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 784, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je suis heureux")) {
  return "C'est super ! Puis-je faire quelque chose pour vous ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 788, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo estoy feliz")) {
  return "¡Esto es genial! ¿Puedo hacer algo por ti?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 791, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("do not")&& lowerMessage.includes("eat")) {
  return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 792, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("dont")&& lowerMessage.includes("eat")) {
  return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 793, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("don’t")&& lowerMessage.includes("eat")) {
  return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 794, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("nothing")&& lowerMessage.includes("man")) {
  return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 795, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do") && lowerMessage.includes("nothing")&& lowerMessage.includes("man")) {
  return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 796, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") &&  lowerMessage.includes("r")&& lowerMessage.includes("n")&& lowerMessage.includes("respond")) {
  return "I am responding! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 798, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("made")&& lowerMessage.includes("mistake")) {
  return "Oops! I apologize for the mistake! I will try to avoid making the mistake in the future.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 799, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shoji morimoto ")) {
  return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
  }
  // Goodbye
  return undefined;
}});

window.registerKnowledgeRule({ order: 800, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bye")) {
  return "Goodbye! Come back whenever you like!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 801, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("keep going")) {
  return "Can you please tell me what you want me to keep doing?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 802, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yuck")) {
  return "Sounds like there is something gross! Can I help you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 803, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ehh")) {
  return "It sounds like you’re uncertain about something! Can I help you clarify something?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 804, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hmm")) {
  return "Sounds like you are thinking about something. Let me know if there’s anything I can help with!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 805, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("type a message")) {
  return "It sounds like you’re giving me instructions to type a message! Here is my message: Hi! I am a robot. 🤖 Who are you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 806, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you there")) {
  return "Yes! I’m here. How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 807, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("it isn’t afternoon")) {
  return "Oops! I apologize for the mistake! Good morning!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 808, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("it isnt afternoon")) {
  return "Oops! I apologize for the mistake! Good morning!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 809, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("it’s not afternoon")) {
  return "Oops! I apologize for the mistake! Good morning!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 810, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("its not afternoon")) {
  return "Oops! I apologize for the mistake! Good morning!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 811, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you broken")) {
  return "Not that I know of, but I’m sorry if there’s something wrong with me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 812, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("it is not afternoon")) {
  return "Oops! I apologize for the mistake! Good morning!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 813, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you listen")) {
  return "Yes! I am listening. Let me know how I can assist you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 815, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("sniff")) {
  return "What’s up? Are you looking for something by smelling? Or are you sad and crying?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 816, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("oink")) {
  return "Oink oink! 🐷 What’s up?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 817, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mooo")) {
  return "Mooo! 🐮 What’s up?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 818, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("meow")) {
  return "Meow! 🐈 What’s up?";
  }
  // For Hindi
  return undefined;
}});

window.registerKnowledgeRule({ order: 825, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("você está errado") || lowerMessage.includes("você está incorreto")) {
      return "Desculpe, cometi um erro. Vou tentar ser correto daqui para frente.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 826, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("estou feliz")) {
      return "Que ótimo! Posso fazer algo por você?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 827, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("posso mudar sua voz") || lowerMessage.includes("posso mudar a voz")) {
      return "Não, não há como mudar minha voz. No entanto, você pode mudar o idioma, o que mudará minha voz para o idioma correspondente.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 828, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("eu não como")) {
      return "O que? Você não come? Isso é impossível... ou talvez você seja um robô como eu!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 829, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shoji morimoto")) {
      return "Shoji Morimoto, de Tóquio, transformou o conceito de não fazer nada em um trabalho único. Desde 2018, seu trabalho tem sido alugado como amigo. Ele foi contratado milhares de vezes e ganha muito dinheiro.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 830, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tchau")) {
      return "Tchau! Volte sempre que quiser!";
  }
  // For Bahasa Indonesia
  return undefined;
}});

window.registerKnowledgeRule({ order: 831, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kamu salah") || lowerMessage.includes("kamu tidak benar")) {
      return "Maaf, saya membuat kesalahan. Saya akan mencoba untuk benar mulai sekarang.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 832, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give me many emojis") || lowerMessage.includes("give me some emojis")|| lowerMessage.includes("give me some random emojis")|| lowerMessage.includes("give me random emojis")) {
      return "😜🤪😝🤯😎🥳😜🤩🤑🤗🥸😏😮😯😡😂😄🥺😣😵🫣🤩😋🤤😌🤧😷🤕🐈🐕🐅🐉🦐🐳🐧🐦🦜🦩🦆🐓🦢🦀🦞🐠🐀🦔🐁🦥🐷⚠️";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 833, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("saya bahagia")) {
      return "Itu hebat! Bisa saya bantu dengan sesuatu?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 834, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("bisakah saya mengganti suaramu") || lowerMessage.includes("bisakah saya mengganti suara")) {
      return "Tidak, tidak ada cara untuk mengganti suara saya. Namun, Anda bisa mengganti bahasa, yang akan mengubah suara saya menjadi suara bahasa tersebut.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 835, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("saya tidak makan")) {
      return "Apa? Kamu tidak makan? Itu tidak mungkin... atau mungkin kamu robot seperti saya!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 836, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shoji morimoto")) {
      return "Shoji Morimoto, dari Tokyo, telah mengubah konsep tidak melakukan apa-apa menjadi pekerjaan unik. Sejak 2018, pekerjaannya adalah disewa sebagai teman. Dia telah disewa ribuan kali dan menghasilkan banyak uang.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 837, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (
    lowerMessage.includes("selamat tinggal") ||
    lowerMessage.includes("selamat jalan") ||
    lowerMessage.includes("dadah") ||
    lowerMessage.includes("sampai jumpa") ||
    lowerMessage.includes("sampai nanti")
  ) {
   const responses = [
        "Selamat tinggal! Jangan lupa mampir lagi ya!",
        "Selamat tinggal! Semoga harimu asik!",
        "Oke, selamat tinggal! Sampai ketemu lagi!",
        "Selamat tinggal! Jaga diri baik-baik!",
        "Selamat tinggal! Sampai nanti!"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  return undefined;
}});

window.registerKnowledgeRule({ order: 851, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tu as tort") || lowerMessage.includes("tu es incorrect")) {
      return "Désolé, j'ai fait une erreur. Je vais essayer d'être correct à partir de maintenant.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 852, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je suis heureux")) {
      return "C'est super ! Puis-je faire quelque chose pour vous ?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 854, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("je ne mange pas") || lowerMessage.includes("je ne mange pas")) {
      return "Quoi? Tu ne manges pas? C'est impossible... ou peut-être que tu es un robot comme moi!! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 855, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shoji morimoto")) {
      return "Shoji Morimoto, de Tokyo, a transformé le concept de ne rien faire en un travail unique. Depuis 2018, il a été engagé comme ami. Il a été embauché des milliers de fois et gagne beaucoup d'argent.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 857, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("estás equivocado") || lowerMessage.includes("estás incorrecto")) {
      return "Lo siento, cometí un error. Intentaré ser correcto a partir de ahora.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 858, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo estoy feliz")) {
      return "¡Esto es genial! ¿Puedo hacer algo por ti?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 859, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("puedo cambiar tu voz") || lowerMessage.includes("puedo cambiar la voz")) {
      return "No, no hay forma de cambiar mi voz. Sin embargo, puedes cambiar el idioma, lo que cambiará mi voz al idioma correspondiente.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 860, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yo no como") || lowerMessage.includes("no como")) {
      return "¿Eh? ¿No comes? ¡Eso es imposible... o tal vez eres un robot como yo! 🤖";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 861, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shoji morimoto")) {
      return "Shoji Morimoto, de Tokio, ha convertido el concepto de no hacer nada en un trabajo único. Desde 2018, su trabajo ha sido alquilarse como amigo. Ha sido contratado miles de veces y gana mucho dinero.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 862, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("adiós")) {
      return "¡Adiós! ¡Vuelve cuando quieras!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 880, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("that's beautiful") ||lowerMessage.includes("thats beautiful")|| lowerMessage.includes("that is beautiful")) {
  return "I'm glad you like it!😂";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 887, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("are you sad")) {
  return "Nope! I am just a robot here to assist you with whatever you need!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 888, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("did i make you sad")) {
  return "Nope! I am just a robot here to assist you with whatever you need!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 899, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("that's amazing") ||lowerMessage.includes("thats amazing")|| lowerMessage.includes("that is amazing")) {
  const responses = [
  "Yes, it is amazing!",
  "I'm glad you like it!😂",
  "I agree! Isn't it amazing?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 900, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("wow")) {
  const responses = [
  "Right?! I know, it's amazing!",
  "Wow indeed! Mind-blowing!",
  "Totally! That was epic!",
  "Can't believe it either!",
  "That's a big WOW!",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 901, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("everything has gone black")) {
    return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 903, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("everything is black")) {
    return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 904, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("everything went black")) {
    return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 906, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do you understand")) {
    return "Yes, I understand you. Please tell me how I can help.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 909, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("walk out") && lowerMessage.includes("computer")&& lowerMessage.includes("you")) {
    return "Haha! What an imagination! No, I can’t walk out of the computer because I'm a robot program on the computer. However, if you need help, just ask me through the computer!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 910, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("save me")) {
    return "I'm here to help, but if you're in immediate danger, please call emergency services right away! They can help you. I am just a robot, I cannot help you except by talking. Stay calm, and I'll guide you through what to do if needed.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 911, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re") && lowerMessage.includes("goofy")) {
    const responses = [
      "Me? Goofy? Never! Ok, maybe just a little... 😜",
      "Goofy? Nah, I’m just full of charm and silliness! 😎"
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 915, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("are") && lowerMessage.includes("goofy")) {
    const responses = [
      "Me? Goofy? Never! Ok, maybe just a little... 😜",
      "Goofy? Nah, I’m just full of charm and silliness! 😎"
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 917, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i don't know") && !lowerMessage.includes("if")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 918, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i dont know") && !lowerMessage.includes("if")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need help."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 919, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i do not know") && !lowerMessage.includes("if")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 923, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("driving me batty") || lowerMessage.includes("drive me batty")|| lowerMessage.includes("go crazy")) {
    // Play music based on the provided style or default to "generic"
    let style = "generic";
    const match = lowerMessage.match(/drive me batty\s*(.*)/);
    if (match && match[1].trim() !== "") {
      style = match[1].trim();
    }
  
    // Ensure the function plays music
    playPeacefulMusic(style);
    
    // Trigger the incoming call
    triggerIncomingCall();
    
    // Send 30 emojis to the user
    const emojis = "😜🤪😝🤯😎🥳😜🤩🤑🤗🥸😏😮😯😡😂😄🥺😣😵🫣🤩😋🤤😌🤧😷🤕🐈🐕🐅🐉🦐🐳🐧🐦🦜🦩🦆🐓🦢🦀🦞🐠🐀🦔🐁🦥🐷⚠️😜🤪😝🤯😎🥳😜🤩🤑🤗🥸😏😮😯😡😂😄🥺😣😵🫣🤩😋🤤😌🤧😷🤕🐈🐕🐅🐉🦐🐳🐧🐦🦜🦩🦆🐓🦢🦀🦞🐠🐀🦔🐁🦥🐷⚠️😜🤪😝🤯😎🥳😜🤩🤑🤗🥸😏😮😯😡😂😄🥺😣😵🫣🤩😋🤤😌🤧😷🤕🐈🐕🐅🐉🦐🐳🐧🐦🦜🦩🦆🐓🦢🦀🦞🐠🐀🦔🐁🦥🐷⚠️";
    
    // Clear the input field and return just the emojis
    chatInput.value = ""; // Clear input field
    return emojis;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 924, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am confused") && !lowerMessage.includes("about")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 925, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("im confused") && !lowerMessage.includes("about")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 926, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i'm confused") && !lowerMessage.includes("about")) {
    const responses = [
      "No worries! I’m here to help you figure it out.",
      "That’s okay! I can help guide you through it.",
      "Don’t worry, I can give you some ideas if you need."
      ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 932, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("eat")&&lowerMessage.includes("you")) {
  return "AHHHH! Don’t eat me!!🤣";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 935, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("old man tucker")) {
  return "Old Man Tucker was a fine old man, <br>He washed his face in the frying pan. <br>He combed his hair with a wagon wheel,<br>And died of a toothache in his heel. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 936, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am flying")) {
  return "Sounds exciting! Where are you flying to?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 937, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("im flying")) {
  return "Sounds exciting! Where are you flying to?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 938, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i’m flying")) {
  return "Sounds exciting! Where are you flying to?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 945, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("sick") 
  ) {
  return "I'm sorry to hear that you are not feeling well. I hope you get well soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 946, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("dizzy") 
  ) {
  return "I'm sorry to hear that you are feeling dizzy. Are you sick? Or is something happening that is making you feel dizzy? I hope you get well soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 947, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("headache") 
  ) {
  return "I'm sorry to hear that you have a headache. Are you sick? Or did something happen? I hope you feel better soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 948, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("head") && lowerMessage.includes("hurt")
  ) {
  return "I'm sorry to hear that you have a headache. Are you sick? Or did something happen? I hope you feel better soon!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 949, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("in") && lowerMessage.includes("hospital")
  ) {
  return "Oh no! Is everything alright? I hope you are not hurt or sick!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 950, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("on") && lowerMessage.includes("train")
  ) {
  return "Where are you going? What kind of train are you on? Let me know if I can help you with anything!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 953, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hello") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 954, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hi") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 955, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hey") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 956, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("howdy") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 957, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("night") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 958, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("afternoon") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 959, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("evening") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 960, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("morning") && lowerMessage.includes("chatgpt")) {
    return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
  }
  // Greetings
  return undefined;
}});

window.registerKnowledgeRule({ order: 961, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("chatgpt") || lowerMessage.includes("chat gpt")|| lowerMessage.includes("open ai")) {
  return "ChatGPT is an advanced conversational AI developed by OpenAI, designed to generate human-like responses across a wide range of topics. It leverages deep learning to assist with tasks such as answering questions, drafting text, and providing creative solutions.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 962, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("genesis 1:1") || lowerMessage.includes("genesis 1 1") || lowerMessage.includes("genesis one one")) {
    return "Genesis 1:1 - In the beginning, God created the heavens and the earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 963, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 3:16") || lowerMessage.includes("john 3 16") || lowerMessage.includes("john three sixteen")) {
    return "John 3:16 - For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 964, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("psalm 23:1") || lowerMessage.includes("psalm 23") || lowerMessage.includes("psalm twenty three one")) {
    return "Psalm 23:1 - The LORD is my shepherd; I shall not want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 965, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 8:28") || lowerMessage.includes("romans 8 28") || lowerMessage.includes("romans eight twenty eight")) {
    return "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 966, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("philippians 4:13") || lowerMessage.includes("philippians 4 13") || lowerMessage.includes("philippians four thirteen")) {
    return "Philippians 4:13 - I can do all things through him who strengthens me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 967, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("jeremiah 29:11") || lowerMessage.includes("jeremiah 29 11") || lowerMessage.includes("jeremiah twenty nine eleven")) {
    return "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 968, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 11:28") || lowerMessage.includes("matthew 11 28") || lowerMessage.includes("matthew eleven twenty eight")) {
    return "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 971, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 12:2") || lowerMessage.includes("romans 12 2") || lowerMessage.includes("romans twelve two")) {
    return "Romans 12:2 - Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 972, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if ((lowerMessage.includes("ephesians 2:8") && lowerMessage.includes("ephesians 2:9")) || (lowerMessage.includes("ephesians 2:8-9") || lowerMessage.includes("ephesians two eight nine"))) {
    return "Ephesians 2:8-9 - For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 973, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 timothy 1:7") || lowerMessage.includes("2 timothy one seven") || lowerMessage.includes("two timothy one seven")) {
    return "2 Timothy 1:7 - For God gave us a spirit not of fear but of power and love and self-control.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 974, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 14:6") || lowerMessage.includes("john fourteen six") || lowerMessage.includes("john 14 6")) {
    return "John 14:6 - Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 975, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 5:8") || lowerMessage.includes("romans five eight") || lowerMessage.includes("romans 5 8")) {
    return "Romans 5:8 - But God shows his love for us in that while we were still sinners, Christ died for us.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 976, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 6:33") || lowerMessage.includes("matthew six thirty three") || lowerMessage.includes("matthew 6 33")) {
    return "Matthew 6:33 - But seek first the kingdom of God and his righteousness, and all these things will be added to you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 977, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mark 11:24") || lowerMessage.includes("mark eleven twenty four") || lowerMessage.includes("mark 11 24")) {
    return "Mark 11:24 - Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 978, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 john 4:8") || lowerMessage.includes("1 john four eight") || lowerMessage.includes("1 john 4 8")) {
    return "1 John 4:8 - Anyone who does not love does not know God, because God is love.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 979, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 corinthians 5:7") || lowerMessage.includes("2 corinthians five seven") || lowerMessage.includes("2 corinthians 5 7")) {
    return "2 Corinthians 5:7 - For we walk by faith, not by sight.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 980, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("colossians 3:23") || lowerMessage.includes("colossians three twenty three") || lowerMessage.includes("colossians 3 23")) {
    return "Colossians 3:23 - Whatever you do, work heartily, as for the Lord and not for men.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 981, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("luke 1:37") || lowerMessage.includes("luke one thirty seven") || lowerMessage.includes("luke 1 37")) {
    return "Luke 1:37 - For nothing will be impossible with God.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 982, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("james 1:5") || lowerMessage.includes("james one five") || lowerMessage.includes("james 1 5")) {
    return "James 1:5 - If any of you lacks wisdom, let him ask of God, who gives generously to all without reproach, and it will be given him.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 983, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 10:9") || lowerMessage.includes("romans ten nine") || lowerMessage.includes("romans 10 9")) {
    return "Romans 10:9 - If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 984, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 corinthians 10:13") || lowerMessage.includes("1 corinthians ten thirteen") || lowerMessage.includes("1 corinthians 10 13")) {
    return "1 Corinthians 10:13 - No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 985, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hebrews 11:1") || lowerMessage.includes("hebrews eleven one") || lowerMessage.includes("hebrews 11 1")) {
    return "Hebrews 11:1 - Now faith is the assurance of things hoped for, the conviction of things not seen.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 986, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 peter 5:7") || lowerMessage.includes("1 peter five seven") || lowerMessage.includes("1 peter 5 7")) {
    return "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 987, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("proverbs 16:3") || lowerMessage.includes("proverbs sixteen three") || lowerMessage.includes("proverbs 16 3")) {
    return "Proverbs 16:3 - Commit your work to the LORD, and your plans will be established.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 988, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 15:5") || lowerMessage.includes("john fifteen five") || lowerMessage.includes("john 15 5")) {
    return "John 15:5 - I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 989, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("galatians 5:22-23") || lowerMessage.includes("galatians five twenty two twenty three") || lowerMessage.includes("galatians 5 22 23")) {
    return "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 990, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ephesians 6:10-11") || lowerMessage.includes("ephesians six ten eleven") || lowerMessage.includes("ephesians 6 10 11")) {
    return "Ephesians 6:10-11 - Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 991, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 corinthians 12:9") || lowerMessage.includes("2 corinthians twelve nine") || lowerMessage.includes("2 corinthians 12 9")) {
    return "2 Corinthians 12:9 - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 992, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 peter 3:9") || lowerMessage.includes("2 peter three nine") || lowerMessage.includes("2 peter 3 9")) {
    return "2 Peter 3:9 - The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 993, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 thessalonians 5:16-18") || lowerMessage.includes("1 thessalonians five sixteen eighteen") || lowerMessage.includes("1 thessalonians 5 16 18")) {
    return "1 Thessalonians 5:16-18 - Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 994, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("jude 1:24-25") || lowerMessage.includes("jude one twenty four twenty five") || lowerMessage.includes("jude 1 24 25")) {
    return "Jude 1:24-25 - Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 995, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 7:7") || lowerMessage.includes("matthew seven seven") || lowerMessage.includes("matthew 7 7")) {
    return "Matthew 7:7 - Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 996, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("luke 6:38") || lowerMessage.includes("luke six thirty eight") || lowerMessage.includes("luke 6 38")) {
    return "Luke 6:38 - Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 998, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 corinthians 13:4-7") || lowerMessage.includes("1 corinthians thirteen four seven") || lowerMessage.includes("1 corinthians 13 4 7")) {
    return "1 Corinthians 13:4-7 - Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 999, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 28:19-20") || lowerMessage.includes("matthew twenty eight nineteen twenty") || lowerMessage.includes("matthew 28 19 20")) {
    return "Matthew 28:19-20 - Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1000, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mark 16:15") || lowerMessage.includes("mark sixteen fifteen") || lowerMessage.includes("mark 16 15")) {
    return "Mark 16:15 - And he said to them, 'Go into all the world and proclaim the gospel to the whole creation.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1001, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 8:32") || lowerMessage.includes("john eight thirty two") || lowerMessage.includes("john 8 32")) {
    return "John 8:32 - And you will know the truth, and the truth will set you free.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1002, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 corinthians 4:16-18") || lowerMessage.includes("2 corinthians four sixteen eighteen") || lowerMessage.includes("2 corinthians 4 16 18")) {
    return "2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1003, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 3:23") || lowerMessage.includes("romans three twenty three") || lowerMessage.includes("romans 3 23")) {
    return "Romans 3:23 - For all have sinned and fall short of the glory of God.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1005, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("colossians 1:16") || lowerMessage.includes("colossians one sixteen") || lowerMessage.includes("colossians 1 16")) {
    return "Colossians 1:16 - For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1006, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hebrews 4:12") || lowerMessage.includes("hebrews four twelve") || lowerMessage.includes("hebrews 4 12")) {
    return "Hebrews 4:12 - For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1007, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("james 2:26") || lowerMessage.includes("james two twenty six") || lowerMessage.includes("james 2 26")) {
    return "James 2:26 - For as the body apart from the spirit is dead, so also faith apart from works is dead.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1008, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("psalm 46:10") || lowerMessage.includes("psalm forty six ten") || lowerMessage.includes("psalm 46 10")) {
    return "Psalm 46:10 - Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1009, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("isaiah 55:8-9") || lowerMessage.includes("isaiah fifty five eight nine") || lowerMessage.includes("isaiah 55 8 9")) {
    return "Isaiah 55:8-9 - For my thoughts are not your thoughts, neither are your ways my ways, declares the LORD. For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1010, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 19:26") || lowerMessage.includes("matthew nineteen twenty six") || lowerMessage.includes("matthew 19 26")) {
    return "Matthew 19:26 - But Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1011, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 10:10") || lowerMessage.includes("john ten ten") || lowerMessage.includes("john 10 10")) {
    return "John 10:10 - The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1013, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("psalm 121:1-2") || lowerMessage.includes("psalm one hundred twenty one one two") || lowerMessage.includes("psalm 121 1 2")) {
    return "Psalm 121:1-2 - I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1014, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 john 1:9") || lowerMessage.includes("1 john one nine") || lowerMessage.includes("1 john 1 9")) {
    return "1 John 1:9 - If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1015, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("proverbs 18:10") || lowerMessage.includes("proverbs eighteen ten") || lowerMessage.includes("proverbs 18 10")) {
    return "Proverbs 18:10 - The name of the LORD is a strong tower; the righteous man runs into it and is safe.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1016, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("exodus 14:14") || lowerMessage.includes("exodus fourteen fourteen") || lowerMessage.includes("exodus 14 14")) {
    return "Exodus 14:14 - The LORD will fight for you, and you have only to be silent.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1017, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 6:9-13") || lowerMessage.includes("matthew six nine thirteen") || lowerMessage.includes("matthew 6 9 13")) {
    return "Matthew 6:9-13 - Pray then like this: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1018, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("mark 5:36") || lowerMessage.includes("mark five thirty six") || lowerMessage.includes("mark 5 36")) {
    return "Mark 5:36 - But overhearing what they said, Jesus said to the ruler of the synagogue, 'Do not fear, only believe.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1019, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hebrews 13:8") || lowerMessage.includes("hebrews thirteen eight") || lowerMessage.includes("hebrews 13 8")) {
    return "Hebrews 13:8 - Jesus Christ is the same yesterday and today and forever.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1020, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 timothy 3:16-17") || lowerMessage.includes("2 timothy three sixteen seventeen") || lowerMessage.includes("2 timothy 3 16 17")) {
    return "2 Timothy 3:16-17 - All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1021, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("psalm 23:1") || lowerMessage.includes("psalm twenty three one") || lowerMessage.includes("psalm 23 1")) {
    return "Psalm 23:1 - The LORD is my shepherd; I shall not want.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1022, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 3:16") || lowerMessage.includes("john three sixteen") || lowerMessage.includes("john 3 16")) {
    return "John 3:16 - For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1023, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("philippians 4:13") || lowerMessage.includes("philippians four thirteen") || lowerMessage.includes("philippians 4 13")) {
    return "Philippians 4:13 - I can do all things through him who strengthens me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1024, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 8:28") || lowerMessage.includes("romans eight twenty eight") || lowerMessage.includes("romans 8 28")) {
    return "Romans 8:28 - And we know that for those who love God all things work together for good, for those who are called according to his purpose.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1025, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("jeremiah 29:11") || lowerMessage.includes("jeremiah twenty nine eleven") || lowerMessage.includes("jeremiah 29 11")) {
    return "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1027, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 corinthians 5:7") || lowerMessage.includes("2 corinthians five seven") || lowerMessage.includes("2 corinthians 5 7")) {
    return "2 Corinthians 5:7 - For we walk by faith, not by sight.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1028, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 11:28") || lowerMessage.includes("matthew eleven twenty eight") || lowerMessage.includes("matthew 11 28")) {
    return "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1029, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("revelation 21:4") || lowerMessage.includes("revelation twenty one four") || lowerMessage.includes("revelation 21 4")) {
    return "Revelation 21:4 - He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1030, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("psalm 34:8") || lowerMessage.includes("psalm thirty four eight") || lowerMessage.includes("psalm 34 8")) {
    return "Psalm 34:8 - Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1031, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("james 1:5") || lowerMessage.includes("james one five") || lowerMessage.includes("james 1 5")) {
    return "James 1:5 - If any of you lacks wisdom, let him ask of God, who gives generously to all without reproach, and it will be given him.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1033, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("matthew 6:33") || lowerMessage.includes("matthew six thirty three") || lowerMessage.includes("matthew 6 33")) {
    return "Matthew 6:33 - But seek first the kingdom of God and his righteousness, and all these things will be added to you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1034, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("1 peter 5:7") || lowerMessage.includes("1 peter five seven") || lowerMessage.includes("1 peter 5 7")) {
    return "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1035, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("2 corinthians 12:9") || lowerMessage.includes("2 corinthians twelve nine") || lowerMessage.includes("2 corinthians 12 9")) {
    return "2 Corinthians 12:9 - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1036, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("john 14:6") || lowerMessage.includes("john fourteen six") || lowerMessage.includes("john 14 6")) {
    return "John 14:6 - Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1037, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("galatians 5:22-23") || lowerMessage.includes("galatians five twenty two twenty three") || lowerMessage.includes("galatians 5 22 23")) {
    return "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1038, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ephesians 6:10-18") || lowerMessage.includes("ephesians six ten eighteen") || lowerMessage.includes("ephesians 6 10 18")) {
    return "Ephesians 6:10-18 - Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil. For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1039, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("titus 2:11-14") || lowerMessage.includes("titus two eleven fourteen") || lowerMessage.includes("titus 2 11 14")) {
    return "Titus 2:11-14 - For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1041, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("romans 5:8") || lowerMessage.includes("romans five eight") || lowerMessage.includes("romans 5 8")) {
    return "Romans 5:8 - But God shows his love for us in that while we were still sinners, Christ died for us.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1051, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("ouch")) {
  return "Oh no! What happened? It sounds like you hurt yourself!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1060, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do you believe in alien")) {
  return "Since I am just a bot, I don’t have any beliefs or opinions. However, I can tell you that from all the evidence that there is, aliens do not exist. What about you? What do you think?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1068, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("dim sum")) {
  return "A variety of bite-sized Cantonese dishes, including dumplings, buns, and pastries, typically served with tea. <br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160325033254-hk-dim-sum-fook-lam-moon.jpg?q=w_4256,h_2456,x_0,y_0,c_fill' alt='Dim Sum' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1073, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("shh")) {
  return "It sounds like you’re telling me to be quiet.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1074, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("do you dream")) {
  return "No, I am a robot. I never dream. I never sleep. I never eat. I never breathe.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1075, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("look")) {
  return "Since I’m a chatbot, I can’t look or see anything, but you can explain to me what you want me to see.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1082, language: "english", category: "general", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what's up") || lowerMessage.includes("what are you doing")) {
  return "Not much, just here to chat with you!";
  }
  return undefined;
}});
