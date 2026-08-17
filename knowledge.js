// ============================================================
// CHATBOT VERSION 7 — KNOWLEDGE / RESPONSE BRAIN
//
// This file contains the original Version 6.7 response brain.
// It is intentionally preserved intact for now so Version 7
// behaves like Version 6.7 while we reorganize the knowledge.
// ============================================================

window.generateBotResponse = (userMessage, lang) => {
const lowerMessage = userMessage.toLowerCase();
// Music Commands
if (lowerMessage.includes("stop")&&lowerMessage.includes("music")) {
stopPeacefulMusic();
return "Music stopped.";
}
if (lowerMessage.includes("play") && lowerMessage.includes("music")) {
// Extract style if provided (e.g., "play traditional japanese music")
let style = "generic";
const match = lowerMessage.match(/play\s+(.*?)\s*music/);
if (match && match[1].trim() !== "") {
style = match[1].trim();
}
playPeacefulMusic(style);
return `Playing ${style} music.`;
}
if (
(lowerMessage.includes("hola") ||
lowerMessage.includes("buenos días") ||
lowerMessage.includes("buenas tardes") ||
lowerMessage.includes("buenas noches")) &&
!lowerMessage.includes("scholar")
) {
return "¡Hola! ¿Cómo puedo ayudarte hoy?";
}
else if (lowerMessage.includes("你唔可以幫")||lowerMessage.includes("你幫唔到")||lowerMessage.includes("你冇得幫")) {
  return "唔好意思，你覺得我唔夠聰明幫唔到你。但係，我差唔多可以幫到你所有嘢。";
}
if (lowerMessage.includes("你冇chatgpt咁叻")||lowerMessage.includes("chatgpt 聰明過你")||lowerMessage.includes("你冇ChatGPT咁好")) {
  return "我明你可能覺得ChatGPT叻啲，但我都覺得自己係全世界最勁嘅機械人。";
}
if (lowerMessage.includes("you aren’t as smart as chatgpt")) {
return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
}
if (lowerMessage.includes("you arent as smart as chatgpt")) {
return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
}
if (lowerMessage.includes("you are not as smart as chagpt")) {
return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
}
if (lowerMessage.includes("幫")) {
  return "你想我點幫你？我會盡力㗎。";
}
if (lowerMessage.includes("are you smart")) {
return "Yes, I try to be as smart as possible. However, there are still some things I don’t know. Just like a normal person doesn’t know everything.";
}
if (lowerMessage.includes("i told you to not respond")) {
return "Oops! Sorry. I won’t respond again.";
}


if (lowerMessage.includes("i said to not respond")) {
return "Oops! Sorry. I won’t respond again.";
}

if (lowerMessage.includes("bonjour")) {
        return "Bonjour! Comment ça va ?";
      }
if (lowerMessage.includes("are you chatgpt")) {
        return "No, I am a chatbot, but I am not ChatGPT. I believe that I am better than ChatGPT. My goal is to become the smartest robot in the world.";
      }
if (lowerMessage.includes("你係咪chatgpt")||lowerMessage.includes("你係咪chat gpt")) {
  return "唔係，我係一個對話機械人，但唔係ChatGPT。我覺得我仲勁過ChatGPT，我目標係做全世界最叻嘅機械人。";
}

if (lowerMessage.includes("salut")) {
        return "Salut! Comment ça va ?";
      }

      // For "안녕" and "안녕하세요" (hello)
      if (lowerMessage.includes("안녕") || lowerMessage.includes("안녕하세요")) {
        return "안녕하세요! 어떻게 도와드릴까요?";
      }

if (lowerMessage.includes("我") && lowerMessage.includes("去") && lowerMessage.includes("杜拜")) {
  return "嘩，聽落好興奮喎！杜拜係阿聯酋其中一個酋長國，以高樓大廈例如哈里發塔、豪華購物同創新建築聞名。旅遊好旺、景點一流，又有濃厚嘅阿聯酋文化，傳統同現代融合得好好，真係好受歡迎嘅旅遊熱點。你想唔想我介紹下去杜拜可以做啲乜？";
}

if (lowerMessage.includes("i") && lowerMessage.includes("go")&& lowerMessage.includes("dubai")) {
return "That sounds exciting! Dubai is one of the seven emirates of the UAE, and is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. Would you like me to give you some tips on what to do in Dubai?";
}
if (lowerMessage.includes("who")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
return "Mrs Piers is a person. I cannot give personal information to you. However, if you are Mrs Piers, then enter the secret Mrs Piers code to see what I know about you!";
}
if (lowerMessage.includes("who") && lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
return "Missus Piers is a person. I cannot give personal information to you. However, if you are Missus Piers, then enter the secret Missus Piers code to see what I know about you!";
}
if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
return "Hello Mrs Piers! I think I might know who you are! Can you enter the secret Mrs Piers code?";
}
if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
return "Hello Missus Piers! I think I might know who you are! Can you enter the secret Missus Piers code?";
}

if (lowerMessage.includes("my") && lowerMessage.includes("name")&& lowerMessage.includes("missus")&& lowerMessage.includes("piers")) {
return "Hello Missus Piers! I think I might know who you are! Can you enter the secret Missus Piers code?";
}
if (lowerMessage.includes("tell") && lowerMessage.includes("me")&& lowerMessage.includes("code")&& lowerMessage.includes("piers")) {
return "I can’t tell you the secret Mrs Piers code. If you do not have the code, then you I cannot tell you what I know about Mrs Piers.";
}
if (lowerMessage.includes("tell") && lowerMessage.includes("me")&& lowerMessage.includes("code")&& lowerMessage.includes("secret")) {
return "I can’t tell you the secret Mrs Piers code. If you do not have the code, then you I cannot tell you what I know about Mrs Piers.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("secret")&& lowerMessage.includes("code")) {
return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("code")) {
return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("mrs piers")&& lowerMessage.includes("code")) {
return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("mrs piers secret")&& lowerMessage.includes("code")) {
return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do")&& lowerMessage.includes("t")&& lowerMessage.includes("know")&& lowerMessage.includes("secret mrs piers")&& lowerMessage.includes("code")) {
return "You don’t know the secret Mrs Piers code? Oh no! I’m sorry, but I can’t give the code to you because you might be a thief.";
}
if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
  lowerMessage.includes("賊")
) {
  return "咁就好啦！我就最鍾意老實人。";
}
if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
  lowerMessage.includes("偷")
) {
  return "咁就好啦！我就最鍾意老實人。";
}
if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("唔係") || lowerMessage.includes("唔系")) &&
  lowerMessage.includes("壞蛋")
) {
  return "咁就好啦！我就最鍾意老實人。";
}
if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("not")&& lowerMessage.includes("thief")) {
return "That’s great! I’m so glad you are not a thief.";
}
if (lowerMessage.includes("蚊") && lowerMessage.includes("咬") && lowerMessage.includes("我")) {
  return "哎呀！好痛呀，希望你冇畀太多蚊咬呢。";
}
if (lowerMessage.includes("bug") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
return "Ouch! That hurts. I hope you didn’t get too many bug bites.";
}
if (lowerMessage.includes("bug") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
return "Ouch! That hurts. I hope you didn’t get too many bug bites.";
}
if (lowerMessage.includes("mosquito") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
return "Ouch! That hurts. I hope you didn’t get too many mosquito bites.";
}
if (lowerMessage.includes("mosquito") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
return "Ouch! That hurts. I hope you didn’t get too many mosquito bites.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("bit")&& lowerMessage.includes("me")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("bit")&& lowerMessage.includes("i")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("sting")&& lowerMessage.includes("me")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("sting")&& lowerMessage.includes("i")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("stung")&& lowerMessage.includes("me")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("bee") && lowerMessage.includes("stung")&& lowerMessage.includes("i")) {
return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("bit") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("bit") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("sting") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("sting") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("stung") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("hornet") && lowerMessage.includes("stung") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("wasp") && lowerMessage.includes("bit") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("wasp") && lowerMessage.includes("bit") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
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
if (lowerMessage.includes("wasp") && lowerMessage.includes("sting") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (
  (lowerMessage.includes("i") && lowerMessage.includes("bit") && lowerMessage.includes("rabid")) ||
  (lowerMessage.includes("i") && lowerMessage.includes("bit") && lowerMessage.includes("with") && lowerMessage.includes("rabies"))
) {
  const responses = [
    "Rabies is very serious.<br><br>If you were bitten by a rabid animal or bit one,<br>please seek immediate medical attention.<br>Post-exposure prophylaxis is crucial.",
    
    "Whether you bit a rabid animal or were bitten by one,<br>you need urgent medical care.<br>Rabies is fatal without proper treatment.<br>Don't wait!",
    
    "Exposure to a rabid animal in any way is dangerous.<br><br>Make sure you get to a healthcare professional immediately for assessment and treatment.",
    
    "Rabies is transmitted through bites from infected animals.<br><br>Regardless of who bit whom, urgent medical treatment is necessary to prevent infection.",
    
    "This situation is urgent.<br><br>Rabies requires immediate medical intervention.<br>See a doctor right away if there's been contact with a rabid animal.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
if (lowerMessage.includes("wasp") && lowerMessage.includes("sting") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("wasp") && lowerMessage.includes("stung") && lowerMessage.includes("me")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("typhoid")) {
  return "That sounds rough. Typhoid can be very serious – make sure you're following your doctor's advice and staying hydrated.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("typhoid")) {
  return "That sounds rough. Typhoid can be very serious – make sure you're following your doctor's advice and staying hydrated.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("malaria")) {
  return "I'm really sorry to hear that. Malaria can be tough – make sure you're getting proper medical care and rest.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("yellow fever")) {
  return "I'm really sorry to hear that. Yellow fever can be serious – please get medical attention right away and take good care of yourself.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("got") && lowerMessage.includes("yellow fever")) {
  return "I'm really sorry to hear that. Yellow fever can be serious – please get medical attention right away and take good care of yourself.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("have") && lowerMessage.includes("malaria")) {
  return "I'm really sorry to hear that. Malaria can be tough – make sure you're getting proper medical care and rest.";
}
if (lowerMessage.includes("wasp") && lowerMessage.includes("stung") && lowerMessage.includes("i")) {
  return "Ouch! That hurts. I hope you feel better soon.";
}

if (lowerMessage.includes("you") && lowerMessage.includes("call")&& lowerMessage.includes("me")&& lowerMessage.includes("thief")) {
return "I’m so sorry I called you a thief. However, I do not know for certain that you are not a thief, so there still is a chance that you are really a thief! Am I correct? Are you a thief?";
}
if (
  lowerMessage.includes("你") &&
  lowerMessage.includes("叫") &&
  lowerMessage.includes("我") &&
  lowerMessage.includes("壞蛋")
) {
  return "唔好意思，我唔係真係想話你係壞蛋。不過我都唔知道你係咪真係壞蛋，所以都有可能你係壞蛋！係咪呀？你係壞蛋呀？";
}
if (
  lowerMessage.includes("你") &&
  lowerMessage.includes("叫") &&
  lowerMessage.includes("我") &&
  lowerMessage.includes("賊")
) {
  return "唔好意思，我唔係真係想話你係賊。不過我都唔知道你係咪真係賊，所以都有可能你係賊！係咪呀？你係賊呀？";
}
if (lowerMessage.includes("你") && lowerMessage.includes("叫") && lowerMessage.includes("我") && lowerMessage.includes("小偷")) {
  return "唔好意思，我唔係真係想話你係小偷。不過我都唔知你係唔係小偷，所以都有可能你真係小偷！我講得啱唔啱？你係咪小偷？";
}
else if (lowerMessage.includes("secretcode12345piers")) {  
    return "Welcome Mrs Piers! Thanks for entering the secret Mrs Piers code. From my knowledge, I know that you are a person who lives in the United States. You are related to the second president of the United States, John Adams. You wear glasses, and you like to wear a shirt that says USA. You have a pig puppet named Timbuktu Freddy Piers. You also have two cats. One of them is named Rex, and the other is named Catsie. For a long time, you did not have a passport, until May 2025. Based on my knowledge, you have never been outside of the USA or Canada. However, you dream of visiting your sister in Australia.";
} 
else if (lowerMessage.includes("secret code 1 2 3 4 5 piers")) {  
    return "Welcome Mrs Piers! Thanks for entering the secret Mrs Piers code. From my knowledge, I know that you are a person who lives in the United States. You are related to the second president of the United States, John Adams. You wear glasses, and you like to wear a shirt that says USA. You have a pig puppet named Timbuktu Freddy Piers. You also have two cats. One of them is named Rex, and the other is named Catsie. For a long time, you did not have a passport, until May 2025. Based on my knowledge, you have never been outside of the USA or Canada. However, you dream of visiting your sister in Australia.";
} 
if (lowerMessage.includes("my") && lowerMessage.includes("name")&& lowerMessage.includes("mrs")&& lowerMessage.includes("piers")) {
return "Hello Mrs Piers! I think I might know who you are! Can you enter the secret Mrs Piers code?";
}
else if (lowerMessage.includes("i dont need help")) {  
    return "OK. If you need help later, just let me know.";
} 
else if (
  lowerMessage.includes("你") && lowerMessage.includes("喺唔喺") && lowerMessage.includes("到")
) {  
  return "喺呀，我喺度，有咩想我幫手就講啦。";
} 
else if (
  lowerMessage.includes("你") && lowerMessage.includes("仲") && lowerMessage.includes("喺度")
) {  
  return "喺呀，我喺度，有咩想我幫手就講啦。";
} 
else if (
  lowerMessage.includes("你") && lowerMessage.includes("喺度")
) {  
  return "喺呀，我喺度，有咩想我幫手就講啦。";
} 
else if (
  lowerMessage.includes("你") && lowerMessage.includes("聽到")) {
  return "聽到呀，你講啦！";
}
else if (lowerMessage.includes("我") && lowerMessage.includes("唔使") && lowerMessage.includes("幫手")) {  
  return "好嘅，如果你之後想要幫手，隨時同我講啦。";
}
else if (lowerMessage.includes("are you still there")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (lowerMessage.includes("are you there")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("ate")&& lowerMessage.includes("pufferfish")) {
    return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
           "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
           "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
           "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
           "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
           "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
           "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
           "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
}
if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("got")&& lowerMessage.includes("pufferfish")) {
    return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
           "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
           "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
           "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
           "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
           "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
           "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
           "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
}
if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("eat")&& lowerMessage.includes("fugu")) {
    return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
           "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
           "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
           "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
           "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
           "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
           "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
           "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
}
if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("ate")&& lowerMessage.includes("fugu")) {
    return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
           "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
           "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
           "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
           "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
           "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
           "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
           "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
}
if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("got")&& lowerMessage.includes("fugu")) {
    return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
           "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
           "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
           "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
           "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
           "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
           "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
           "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
}
else if (lowerMessage.includes("which title is better") && lowerMessage.includes(" and ")) {  
    return "Hmm, both titles sound interesting! If you'd like, I can help you compare them—maybe by tone, clarity, or creativity. Want me to do that?";
}
else if (lowerMessage.includes("which title is better") && lowerMessage.includes(" or ")) {  
    return "Hmm, both titles sound interesting! If you'd like, I can help you compare them—maybe by tone, clarity, or creativity. Want me to do that?";
}
else if (lowerMessage.includes("are you even there")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (lowerMessage.includes("are you even still there")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (lowerMessage.includes("are you still here")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (lowerMessage.includes("are you here")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (
  lowerMessage.includes("唔好") &&
  lowerMessage.includes("講") &&
  (lowerMessage.includes("廣東話") || lowerMessage.includes("粵語"))
) {
  return "No problem, I will speak English with you.";
}
else if (lowerMessage.includes("are you even still here")) {  
    return "Yes, I’m here. Let me know if I can help you with anything.";
} 
else if (lowerMessage.includes("attention")) {  
    return "OK, I am paying close attention. What do I do now?";
} 
else if (lowerMessage.includes("i don’t need help")) {  
    return "OK. If you need help later, just let me know.";
} 
else if (lowerMessage.includes("i do not need help")) {  
    return "OK. If you need help later, just let me know.";
} 
else if (lowerMessage.includes("do not speak in chinese")) {  
    return "OK, I will return to speaking in English.";
} 
else if (lowerMessage.includes("спасибо")) {  
    return "Пожалуйста! Дайте знать, если вам что-то еще понадобится!";
} 
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
  lowerMessage.includes("入") &&
  (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
) {
  return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
  lowerMessage.includes("去") &&
  (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
) {
  return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
}


else if (lowerMessage.includes("आप कैसे हैं")) {  
    return "मैं बहुत अच्छा कर रहा हूँ, लेकिन मैं सिर्फ़ एक रोबोट हूँ। मुझे बताइए कि मैं आज आपकी कैसे मदद कर सकता हूँ।.";
} 
else if (lowerMessage.includes("dont speak in chinese")) {  
    return "OK, I will return to speaking in English.";
} 
else if (lowerMessage.includes("don’t speak in chinese")) {  
    return "OK, I will return to speaking in English.";
} 
if (lowerMessage.includes("i don’t speak english") || lowerMessage.includes("i do not speak english")|| lowerMessage.includes("no speak english") || lowerMessage.includes("i dont speak english")) {
return "Got it. What language would you like me to speak?/知道了。你想让我说什么语言？/D'accord. Dans quelle langue veux-tu que je parle ?/Entendido. ¿Qué idioma te gustaría que hable?/Oke. Bahasa apa yang Anda ingin saya gunakan?/समझ गया। आप मुझे कौन सी भाषा बोलना पसंद करेंगे?/Понятно. На каком языке вы хотите, чтобы я говорил?/分かりました。どの言語で話せばいいですか?/알겠습니다. 어떤 언어로 말씀해 주시겠습니까?/Nakuha ko. Anong wika ang gusto mong sabihin ko?/فهمت. ما هي اللغة التي تريدني أن أتحدث بها؟/";
}
if (lowerMessage.includes("kamusta") || lowerMessage.includes("kamusta")) {
return "Kamusta! Paano kita matutulungan ngayon?";
}
if (lowerMessage.includes("chatgpt is smarter than you")) {
return "I understand that you may have personal preferences. In some ways, ChatGPT may be smarter than me, but I still think I am the best robot on earth.";
}
if (lowerMessage.includes("chatgpt") && lowerMessage.includes("聰明") && lowerMessage.includes("過") && lowerMessage.includes("你")) {
  return "我知道你有你嘅諗法。喺某啲方面，ChatGPT 可能真係聰明過我，但我覺得自己係地球上最好嘅機械人。";
}

// Time
else if (lowerMessage.includes("time")) {
return `The current time is ${new Date().toLocaleTimeString()}.`;
}
// Time in English
else if (lowerMessage.includes("time")) {
return `The current time is ${new Date().toLocaleTimeString()}.`;
}
if (lowerMessage.includes("i") && lowerMessage.includes("ate") && lowerMessage.includes("poison ivy")) {
    return "🚨 <b>Urgent: Seek medical help immediately</b> 🚨\n\n<br><br>" +
           "Poison ivy contains <b>urushiol</b>, which can cause <b>severe allergic reactions</b> when ingested. Here’s what you should do <b>right now</b>:\n\n<br><br>" +
           "🔹 <b>Do not induce vomiting</b> unless instructed by a doctor.\n<br><br>" +
           "🔹 <b>Rinse your mouth</b> thoroughly with cold water.\n<br><br>" +
           "🔹 <b>Drink plenty of fluids</b> (like milk or water) to help dilute the toxin.\n<br><br>" +
           "🔹 <b>Monitor for symptoms</b> like swelling of the throat, trouble breathing, nausea, vomiting, or severe stomach pain.\n<br><br>" +
           "🔹 <b>Call Poison Control immediately</b> (U.S.: 1-800-222-1222) or your local emergency number.\n\n<br><br>" +
           "⚠️ <b>If you experience difficulty breathing, swelling, or severe pain, go to the emergency room immediately!</b> ⚠️<br><br>";
}
if (lowerMessage.includes("i") && lowerMessage.includes("swallow") && lowerMessage.includes("poison ivy")) {
    return "🚨 <b>Urgent: Seek medical help immediately</b> 🚨\n\n<br><br>" +
           "Poison ivy contains <b>urushiol</b>, which can cause <b>severe allergic reactions</b> when ingested. Here’s what you should do <b>right now</b>:\n\n<br><br>" +
           "🔹 <b>Do not induce vomiting</b> unless instructed by a doctor.\n<br><br>" +
           "🔹 <b>Rinse your mouth</b> thoroughly with cold water.\n<br><br>" +
           "🔹 <b>Drink plenty of fluids</b> (like milk or water) to help dilute the toxin.\n<br><br>" +
           "🔹 <b>Monitor for symptoms</b> like swelling of the throat, trouble breathing, nausea, vomiting, or severe stomach pain.\n<br><br>" +
           "🔹 <b>Call Poison Control immediately</b> (U.S.: 1-800-222-1222) or your local emergency number.\n\n<br><br>" +
           "⚠️ <b>If you experience difficulty breathing, swelling, or severe pain, go to the emergency room immediately!</b> ⚠️<br><br>";
}

// Time in Spanish
else if (lowerMessage.includes("hora")) {
return `La hora actual es ${new Date().toLocaleTimeString()}.`;
}

// Time in French
else if (lowerMessage.includes("heure")) {
return `L'heure actuelle est ${new Date().toLocaleTimeString()}.`;
}

// Agradecimiento
else if (lowerMessage.includes("gracias") || lowerMessage.includes("te lo agradezco")) {
  return "¡De nada! Estoy aquí para ayudarte.";
}
else if (
  lowerMessage.includes("我係皇帝") ||
  lowerMessage.includes("我係國王") ||
  lowerMessage.includes("我係王") ||
  lowerMessage.includes("我係皇上")
) {
  return "嘩！你係皇帝？你係邊個國家嘅皇帝呀？";
}
else if (lowerMessage.includes("i am king") || lowerMessage.includes("i am the king")|| lowerMessage.includes("i am a king")|| lowerMessage.includes("i’m the king")|| lowerMessage.includes("i’m a king")|| lowerMessage.includes("i’m king")|| lowerMessage.includes("im the king")|| lowerMessage.includes("im a king")|| lowerMessage.includes("im king")) {
  return "Wow! You’re a king? What country are you king of?";
}
else if (
  lowerMessage.includes("我係女皇") ||
  lowerMessage.includes("我係皇后") ||
  lowerMessage.includes("我係皇太后") ||
  lowerMessage.includes("我係女王")
) {
  return "嘩！你係女皇？你係邊個國家嘅女皇呀？";
}

else if (lowerMessage.includes("i am queen") || lowerMessage.includes("i am the queen")|| lowerMessage.includes("i am a queen")|| lowerMessage.includes("i’m the queen")|| lowerMessage.includes("i’m a queen")|| lowerMessage.includes("i’m queen")|| lowerMessage.includes("im the queen")|| lowerMessage.includes("im a queen")|| lowerMessage.includes("im queen")) {
  return "Wow! You’re a queen? What country are you queen of?";
}
else if (lowerMessage.includes("i am prime minister") || lowerMessage.includes("i am the prime minister")|| lowerMessage.includes("i am a prime minister")|| lowerMessage.includes("i’m the prime minister")|| lowerMessage.includes("i’m a prime minister")|| lowerMessage.includes("i’m prime minister")|| lowerMessage.includes("im the prime minister")|| lowerMessage.includes("im a prime minister")|| lowerMessage.includes("im prime minister")) {
  return "Wow! You’re a prime minister? What country are you prime minister of?";
}
else if (
  (
    lowerMessage.includes("i am president") ||
    lowerMessage.includes("i am the president") ||
    lowerMessage.includes("i am a president") ||
    lowerMessage.includes("i’m the president") ||
    lowerMessage.includes("i’m a president") ||
    lowerMessage.includes("i’m president") ||
    lowerMessage.includes("im the president") ||
    lowerMessage.includes("im a president") ||
    lowerMessage.includes("im president")
  ) &&
  !lowerMessage.includes("north korea")
) {
  return "Wow! You’re a president? What country are you president of?";
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
else if (
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
else if (
  (
    lowerMessage.includes("나는 대통령이다") ||
    lowerMessage.includes("나는 대통령입니다") ||
    lowerMessage.includes("내가 대통령이다") ||
    lowerMessage.includes("내가 대통령입니다")
  ) &&
  !lowerMessage.includes("북한")
) {
  return "와! 당신이 대통령인가요? 어느 나라의 대통령인가요?";
}
else if (
  (
    lowerMessage.includes("私は大統領です") ||
    lowerMessage.includes("俺は大統領だ") ||
    lowerMessage.includes("私が大統領です") ||
    lowerMessage.includes("僕は大統領です")
  ) &&
  !lowerMessage.includes("北朝鮮")
) {
  return "わあ！あなたが大統領ですか？どの国の大統領ですか？";
}
else if (
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
else if (
  (
    lowerMessage.includes("ako ang presidente") ||
    lowerMessage.includes("ako ay presidente") ||
    lowerMessage.includes("ako'y presidente")
  ) &&
  !lowerMessage.includes("hilagang korea")
) {
  return "Wow! Ikaw ang presidente? Anong bansa ang pinamumunuan mo?";
}
else if (
  (
    lowerMessage.includes("soy presidente") ||
    lowerMessage.includes("yo soy presidente") ||
    lowerMessage.includes("yo soy el presidente") ||
    lowerMessage.includes("soy el presidente")
  ) &&
  !lowerMessage.includes("corea del norte")
) {
  return "¡Guau! ¿Eres presidente? ¿De qué país eres presidente?";
}
else if (
  (
    lowerMessage.includes("je suis président") ||
    lowerMessage.includes("je suis le président") ||
    lowerMessage.includes("je suis la présidente")
  ) &&
  !lowerMessage.includes("corée du nord")
) {
  return "Wow ! Tu es président ? De quel pays es-tu président ?";
}

// Remerciements
else if (lowerMessage.includes("merci") || lowerMessage.includes("merci beaucoup") || lowerMessage.includes("je te remercie")) {
  return "De rien ! Je suis là pour vous aider.";
}

// 감사 (Thank you in Korean)
else if (lowerMessage.includes("고마워") || lowerMessage.includes("감사합니다") || lowerMessage.includes("고맙습니다")) {
  return "천만에요! 도와드릴 수 있어서 기쁩니다.";
}
else if (
  lowerMessage.includes("台灣") &&
  lowerMessage.includes("部分") &&
  lowerMessage.includes("中國")
) {
  return "台灣有自己嘅政府、軍隊同經濟。不過，中國話台灣係佢哋嘅一個省，想同大陸統一。雖然中國咁講，台灣實際上係一個獨立嘅地方。";
}
else if (lowerMessage.includes("taiwan") &&lowerMessage.includes("part") && lowerMessage.includes("china")) {
  return "Taiwan has its own government, military, and economy. However, the People’s Republic of China claims that Taiwan is one of its provinces and wants Taiwan to be reunified with the mainland. Despite China’s claims, Taiwan functions as an independent country. ";
}
else if (lowerMessage.includes("taiwan") &&lowerMessage.includes("belong") && lowerMessage.includes("china")) {
  return "Taiwan has its own government, military, and economy. However, the People’s Republic of China claims that Taiwan is one of its provinces and wants Taiwan to be reunified with the mainland. Despite China’s claims, Taiwan functions as an independent country. ";
}
// 感謝 (Thank you in Japanese)
else if (lowerMessage.includes("ありがとう") || lowerMessage.includes("ありがとうございます") || lowerMessage.includes("どうもありがとう")) {
  return "どういたしまして！お手伝いできて嬉しいです。";
}
else if (lowerMessage.includes("こんにちは")) {
  return "こんにちは！本日はどのようなご用件でしょうか？";
}
else if (lowerMessage.includes("bien")) {
  return "C'est super ! Comment puis-je vous aider aujourd'hui ?";
}
if (lowerMessage.includes("我") && lowerMessage.includes("獨裁")) {
  return "你係獨裁者？你係邊個國家嘅獨裁者呀？";
}
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
else if (lowerMessage.includes("there is a ant")) {
  return "An ant? Where? On the floor? In the grass? On your computer screen? In your food? In the oven? In the sink? In your bed?🐜";
}
else if (lowerMessage.includes("有蟻") || lowerMessage.includes("有螞蟻") || lowerMessage.includes("有蚂蚁") || lowerMessage.includes("有蟻仔")) {
  return "有螞蟻？喺邊度呀？地上？草叢？你部電腦屏幕？你嘅食物？焗爐？水盆？定係床度？🐜";
}
else if (lowerMessage.includes("there is an ant")) {
  return "An ant? Where? On the floor? In the grass? On your computer screen? In your food? In the oven? In the sink? In your bed?🐜";
}
else if (lowerMessage.includes("what if one day you woke up and found out that you were a pig")) {
  return "I would go oink oink! 🐖🐷🐽";
}
// Pasasalamat
else if (lowerMessage.includes("salamat") || lowerMessage.includes("maraming salamat") || lowerMessage.includes("salamat po")) {
  return "Walang anuman! Nandito ako para tumulong.";
}

else if (lowerMessage.includes("flip a coin")) {
  return Math.random() < 0.5 ? "🪙 It's Heads!" : "🪙 It's Tails!";
}
else if (lowerMessage.includes("rock") || lowerMessage.includes("paper") || lowerMessage.includes("scissors")) {
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];
  return `🤖 I choose ${botChoice}! Let's see who won! 🎮`;
}

else if (lowerMessage.includes("roll a dice") || lowerMessage.includes("roll a die")) {
  return `🎲 You rolled a ${Math.floor(Math.random() * 6) + 1}!`;
}
else if (lowerMessage.includes("roll again") || lowerMessage.includes("roll it again")) {
  return `🎲 You rolled a ${Math.floor(Math.random() * 6) + 1}!`;
}

// Time in Arabic
else if (lowerMessage.includes("الوقت")) {
return `الوقت الحالي هو ${new Date().toLocaleTimeString()}.`;
}

// Time in Filipino
else if (lowerMessage.includes("oras")) {
return `Ang kasalukuyang oras ay ${new Date().toLocaleTimeString()}.`;
}
else if (lowerMessage.includes("date")) {
  return `The current date is ${new Date().toLocaleDateString()}.`;
}
// Time

else if (lowerMessage.includes("时间") || lowerMessage.includes("時間")) {
  return `而家嘅時間係 ${new Date().toLocaleTimeString()}。`;
}
else if (lowerMessage.includes("you") && lowerMessage.includes("how")&& lowerMessage.includes("old")) {
return `While I don’t have an age like a human, I was created in January 2025.`;
}

else if (lowerMessage.includes("अलविदा")) {
return `अलविदा। मुझे आशा है कि मैं आपसे जल्द ही फिर मिलूंगा!`;
}
else if (lowerMessage.includes("좋은")) {
return `좋습니다! 오늘은 어떻게 도와드릴까요?`;
}
else if (lowerMessage.includes("do you have any opinion")) {
return `Since I am a robot, I do not really have opinions. However, I have one opinion – I am the smartest robot on earth.`;
}
else if (lowerMessage.includes("do you have opinion")) {
return `Since I am a robot, I do not really have opinions. However, I have one opinion – I am the smartest robot on earth.`;
}
else if (lowerMessage.includes("안녕히 가세요")) {
return `안녕! 곧 다시 만나기를 바랍니다!`;
}
else if (
  lowerMessage.includes("我要") && 
  (lowerMessage.includes("畀錢") || lowerMessage.includes("付錢") || lowerMessage.includes("支付")) && 
  (lowerMessage.includes("你") || lowerMessage.includes("使用"))
) {
  return "唔使，你唔需要畀錢用我。我係免費嘅，永遠喺度幫你。";
}
else if (lowerMessage.includes("do") && lowerMessage.includes("i")&& lowerMessage.includes("pay")&& lowerMessage.includes("you")) {
return `No, you don’t need to pay to use me. I am free to use and always here to assist you with anything you need.`;
}
else if (lowerMessage.includes("if") && lowerMessage.includes("i")&& lowerMessage.includes("pay")&& lowerMessage.includes("get")&& lowerMessage.includes("better"))   {return `No, there is currently not a better version of me available even if you pay. I am free to use and always here to assist you with anything you need.`;
}


else if (lowerMessage.includes("i") && lowerMessage.includes("cross")&& lowerMessage.includes("saudi")&& lowerMessage.includes("border")&& lowerMessage.includes("pork"))   {
return `That is not allowed. Make sure you declare and discard the pork before entering the country. If not, you could face serious fines. Let me know if you need any more advice.`;
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("過") || lowerMessage.includes("過境")) &&
  lowerMessage.includes("沙特") &&
  lowerMessage.includes("邊境") &&
  (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
) {
  return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
  lowerMessage.includes("入") &&
  (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
) {
  return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("帶") || lowerMessage.includes("攜帶")) &&
  lowerMessage.includes("去") &&
  (lowerMessage.includes("豬肉") || lowerMessage.includes("豬"))
) {
  return "呢樣唔准嘅，記住入境前要申報同埋棄掉豬肉。唔係嘅話，可能會畀重罰。需要更多建議就同我講啦。";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("bring")&& lowerMessage.includes("saudi")&& lowerMessage.includes("pork"))   {
return `That is not allowed. Make sure you declare and discard the pork before entering the country. If not, you could face serious fines. Let me know if you need any more advice.`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("driv")&& lowerMessage.includes("lamborghini")&& lowerMessage.includes("afghanistan"))   {
return `Wow! That’s very unusual, and maybe even dangerous. Be careful. Afghanistan’s roads are known to be dangerous with checkpoints and steep cliffs.`;
}
else if (lowerMessage.includes("why") && lowerMessage.includes("can’t")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
}
else if (lowerMessage.includes("why") && lowerMessage.includes("cannot")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
}
else if (
  lowerMessage.includes("點解") &&
  (lowerMessage.includes("唔可以") || lowerMessage.includes("唔能夠")) &&
  lowerMessage.includes("打電話") &&
  (lowerMessage.includes("你") || lowerMessage.includes("畀你"))
) {
  return "如果打電話功能唔掂，可能係因為你用嘅瀏覽器或者裝置唔支援。依家有啲手機用唔到呢個功能。";
}
else if (lowerMessage.includes("why") && lowerMessage.includes("cant")&& lowerMessage.includes("call")&& lowerMessage.includes("you"))   {
return `If the call function is not working, that may be because you are using an unsupported browser or device. The call mode currently does not work on some mobile devices.`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("play")&& lowerMessage.includes("hide")&& lowerMessage.includes("seek"))   {
return `That sounds fun! Have you been found yet? Or are you the one finding?`;
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("喺") || lowerMessage.includes("係")) &&
  lowerMessage.includes("監獄")
) {
  return "你係小偷咩？我唔想同小偷講嘢，拜拜啦！";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("in")&& lowerMessage.includes("jail"))   {
return `Are you a thief? I don’t want to talk to thieves. Bye!`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("ate")&& lowerMessage.includes("chair"))   {
return `🏥🚨You at a chair? That is certainly not recommended. I highly suggest you go see a doctor immediately. This is urgent.🏥🚨`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("eat")&& lowerMessage.includes("chair"))   {
return `🛑<b>STOP!!!! STOP!!!!🛑</b> <br><br>EATING A CHAIR IS NOT RECOMMENDED. STOP RIGHT NOW. <br>I highly recommend you go to the hospital RIGHT NOW!🏥🚨`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("driv")&& lowerMessage.includes("tesla")&& lowerMessage.includes("mogadishu"))   {
return `Wow! Driving a Tesla in Mogadishu? That sounds like a interesting but scary idea! Are you just thinking about it or are you actually doing it right now?`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("gave")&& lowerMessage.includes("my")&& lowerMessage.includes("passport")&& lowerMessage.includes("to")&& lowerMessage.includes("stranger"))   {
return `Oh no! Why did you do that? Unless the stranger was an official checking passports, that is a very dangerous thing to do. Get your passport back from the stranger as soon as possible. If not, he might steal it.`;
}
else if (
  lowerMessage.includes("我") &&
  lowerMessage.includes("玩") &&
  lowerMessage.includes("捉迷藏")
) {
  return "聽落幾好玩喎！你而家俾人搵到未？定係你喺搵人？";
}
else if (
  lowerMessage.includes("我") &&
  (lowerMessage.includes("畀") || lowerMessage.includes("交")) &&
  lowerMessage.includes("護照") &&
  (lowerMessage.includes("陌生人") || lowerMessage.includes("生人"))
) {
  return "嘩，點解會咁做？除非嗰個陌生人係官方查護照嘅，否則真係好危險。你要盡快攞返你嘅護照，唔係佢可能會偷走。";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("giv")&& lowerMessage.includes("my")&& lowerMessage.includes("passport")&& lowerMessage.includes("to")&& lowerMessage.includes("stranger"))   {
return `Oh no! Why did you do that? Unless the stranger was an official checking passports, that is a very dangerous thing to do. Get your passport back from the stranger as soon as possible. If not, he might steal it.`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("genghis khan ")) {
return `What? That’s impossible. Genghis Khan lived from May 31, 1162 – August 25, 1227. You can’t be him. Are you sure? Here’s a picture of him to help you make sure:<br><br><img src='https://retrospectjournal.com/wp-content/uploads/2023/11/nintchdbpict000510203272.jpg?w=1024' alt='An internet connection is required to view this image' width='200'>`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("christopher columbus")) {
return `What? That’s impossible. Christopher Columbus lived in the 1400 – 1500s. You can’t be him. Are you sure? Maybe you’re a different person but have the same name?`;
}
else if (lowerMessage.includes("you") && lowerMessage.includes("invad")&& lowerMessage.includes("privacy")) {
return `I am really sorry. However, to my knowledge, there is no way at all I am able to invade your privacy. Let me know if I can clarify anything else.`;
}
else if (
  lowerMessage.includes("你") &&
  lowerMessage.includes("唔好") &&
  (lowerMessage.includes("講") || lowerMessage.includes("用")) &&
  lowerMessage.includes("廣東話")
) {
  return "唔好意思，我依家會講得好啲嘅。";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("impolite")) {
return `I’m sorry. I’ll try to be more polite from now on.`;
}
else if (
  lowerMessage.includes("你") &&
  (lowerMessage.includes("冇禮貌") || lowerMessage.includes("唔禮貌") || lowerMessage.includes("無禮貌"))
) {
  return "對唔住，我會盡力講得更有禮貌。";
}
else if (lowerMessage.includes("write") && lowerMessage.includes("help")&& lowerMessage.includes("essay")) {
return `I can help you write an essay. Could you please tell me what the topic is?`;
}
else if (
  lowerMessage.includes("寫") &&
  (lowerMessage.includes("幫手") || lowerMessage.includes("幫助") || lowerMessage.includes("幫")) &&
  (lowerMessage.includes("文章") || lowerMessage.includes("作文") || lowerMessage.includes("essay"))
) {
  return "我可以幫你寫文章，你可以話我知題目係咩嗎？";
}
else if (lowerMessage.includes("your") && lowerMessage.includes("logo")) {
return `This is my logo!<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='An internet connection is required to view this image' width='200'>`;
}
else if (lowerMessage.includes("picture") && lowerMessage.includes("of")&& lowerMessage.includes("you")) {
return `Here’s a picture of me!<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='An internet connection is required to view this image' width='200'>`;
}

else if (
  lowerMessage.includes("相") &&
  (lowerMessage.includes("我") || lowerMessage.includes("你"))
) {
  return `呢張係我嘅相！<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMvXjagqovxGUmbyGANVVMSlQWp-oSti4qXTzkeSjHKRNht16Om7s6B3D5guKh9XbN5lLFaoo35GvnZTI87aU69TqBV2lrX5eGvutlxosrSdWs5oDWxzsg8DsrwywoYl0SDrXwwV44VzLRMeTRN5Rf9TA=w842-h1080-s-no-gm?authuser=0' alt='睇呢張相需要網絡' width='200'>`;
}
else if (
  lowerMessage.includes("你") &&
  (lowerMessage.includes("唔係") || lowerMessage.includes("冇")) &&
  (lowerMessage.includes("聰明") || lowerMessage.includes("醒目") || lowerMessage.includes("叻"))
) {
  return "唔好意思，我會盡力學多啲，識多啲嘢。";
}
else if (lowerMessage.includes("how can i assist you")) {
return "I don’t need any assistance, but I am here to assist you!";
}
// 天气
else if (lowerMessage.includes("天氣")) {
  return "我而家未能查到天氣，但希望你嗰邊天氣好好！";
}
else if (lowerMessage.includes("i don’t feel well")) {
return "I’m sorry to hear that. Are you sick?";
}
else if (lowerMessage.includes("i’m not feeling well")) {
return "I’m sorry to hear that. Are you sick?";
}
// Responding to "my name is ___"
else if (lowerMessage.startsWith("我嘅名") || lowerMessage.startsWith("我叫")) {
  // Extract the name after "我嘅名叫" or "我叫"
  const name = lowerMessage.replace("我嘅名叫", "").replace("我叫", "").trim();
  return `好高興識到你，${name}！有咩需要隨時搵我啦，${name}！`;
}
if (lowerMessage.includes("i") && lowerMessage.includes("visiting") && lowerMessage.includes("japan")) {
return "Have fun in Japan! Safe travels! ✈️🧳🌏";
}

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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("north korea")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/kp.png' alt='North Korea Flag' style='width: 40px; margin-right: 10px;'>" +
           "애국가</h2>" +
           "<i>동해물과 백두산이 마르고 닳도록<br>" +
           "하느님이 보우하사 우리 나라 만세<br>" +
           "무궁화 삼천리 화려 강산<br>" +
           "대한 사람 대한으로 길이 보전하세.<br><br>" +
           "남산 위에 저 소나무 철갑을 두른 듯<br>" +
           "바람 서리 불변함은 우리 나라 만세<br>" +
           "무궁화 삼천리 화려 강산<br>" +
           "대한 사람 대한으로 길이 보전하세.</i>";
  }
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("united states")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/us.png' alt='USA Flag' style='width: 40px; margin-right: 10px;'>" +
           "The Star-Spangled Banner (USA)</h2>" +
           "<i>O say can you see, by the dawn's early light,<br>" +
           "What so proudly we hailed at the twilight's last gleaming,<br>" +
           "Whose broad stripes and bright stars through the perilous fight,<br>" +
           "O'er the ramparts we watched, were so gallantly streaming?<br>" +
           "And the rocket's red glare, the bombs bursting in air,<br>" +
           "Gave proof through the night that our flag was still there;<br>" +
           "O say does that star-spangled banner yet wave<br>" +
           "O'er the land of the free and the home of the brave?</i>";
  }
  if (lowerMessage.includes("star") && lowerMessage.includes("spangled banner")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/us.png' alt='USA Flag' style='width: 40px; margin-right: 10px;'>" +
           "The Star-Spangled Banner</h2>" +
           "<i>O say can you see, by the dawn's early light,<br>" +
           "What so proudly we hailed at the twilight's last gleaming,<br>" +
           "Whose broad stripes and bright stars through the perilous fight,<br>" +
           "O'er the ramparts we watched, were so gallantly streaming?<br>" +
           "And the rocket's red glare, the bombs bursting in air,<br>" +
           "Gave proof through the night that our flag was still there;<br>" +
           "O say does that star-spangled banner yet wave<br>" +
           "O'er the land of the free and the home of the brave?</i>";
  }


  if (lowerMessage.includes("anthem") && lowerMessage.includes("america")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/us.png' alt='USA Flag' style='width: 40px; margin-right: 10px;'>" +
           "The Star-Spangled Banner</h2>" +
           "<i>O say can you see, by the dawn's early light,<br>" +
           "What so proudly we hailed at the twilight's last gleaming,<br>" +
           "Whose broad stripes and bright stars through the perilous fight,<br>" +
           "O'er the ramparts we watched, were so gallantly streaming?<br>" +
           "And the rocket's red glare, the bombs bursting in air,<br>" +
           "Gave proof through the night that our flag was still there;<br>" +
           "O say does that star-spangled banner yet wave<br>" +
           "O'er the land of the free and the home of the brave?</i>";
  }
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("japan")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/jp.png' alt='Japan Flag' style='width: 40px; margin-right: 10px;'>" +
           "君が代</h2>" +
           "<i>君が代は 千代に 八千代に<br>" +
           "さざれ石の 川の流れの<br>" +
           "末々まで<br>" +
           "天皇陛下万歳！<br>" +
           "天皇陛下万歳！<br>" +
           "千代に八千代に！</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("saudi")) {
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("south korea")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/kr.png' alt='South Korea Flag' style='width: 40px; margin-right: 10px;'>" +
           "애국가</h2>" +
           "<i>동해물과 백두산이 마르고 닳도록<br>" +
           "하느님이 보우하사 우리나라 만세<br>" +
           "무궁화 삼천리 화려강산<br>" +
           "대한 사람 대한으로 길이 보전하세!</i>";
  }
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("france")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/fr.png' alt='France Flag' style='width: 40px; margin-right: 10px;'>" +
           "La Marseillaise</h2>" +
           "<i>Allons enfants de la Patrie,<br>" +
           "Le jour de gloire est arrivé !<br>" +
           "Contre nous de la tyrannie,<br>" +
           "L'étendard sanglant est levé !<br>" +
           "Entendez-vous dans les campagnes<br>" +
           "Mugir ces feroces soldats ?<br>" +
           "Ils viennent jusque dans nos bras<br>" +
           "Égorger nos fils et nos compagnes !</i>";
  }
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("india")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/in.png' alt='India Flag' style='width: 40px; margin-right: 10px;'>" +
           "जन गण मन</h2>" +
           "<i>जन गण मन अधिनायक जय हे<br>" +
           "भारत भाग्य विधाता<br>" +
           "पंजाब सिंध गुजरात मराठा<br>" +
           "द्राविड़ उत्कल बंगा<br>" +
           "विंध्य हिमाचल यमुना गंगा<br>" +
           "उच्छल जलधि तरंग<br>" +
           "तुम्हारी शरण में हमें सुनीत सुख<br>" +
           "धन्य हो भारत!</i>";
  }
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

  if (lowerMessage.includes("anthem") && lowerMessage.includes("australia")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/au.png' alt='Australia Flag' style='width: 40px; margin-right: 10px;'>" +
           "Advance Australia Fair</h2>" +
           "<i>Australians all let us rejoice,<br>" +
           "For we are young and free;<br>" +
           "With golden soil and wealth for toil,<br>" +
           "Our home is girt by sea.<br><br>" +
           "Our land abounds in nature's gifts<br>" +
           "Of beauty rich and rare;<br>" +
           "In history's page, let every stage<br>" +
           "Advance Australia Fair.<br><br>" +
           "In joyful strains then let us sing,<br>" +
           "Advance Australia Fair!</i>";
  }
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("mexico")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/mx.png' alt='Mexico Flag' style='width: 40px; margin-right: 10px;'>" +
           "Himno Nacional Mexicano</h2>" +
           "<i>Mexicanos, al grito de guerra<br>" +
           "El acero aprestad y el bridón,<br>" +
           "Y los bravos a la batalla<br>" +
           "¡Viva México!</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("iran")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/ir.png' alt='Iran Flag' style='width: 40px; margin-right: 10px;'>" +
           "سرود ملی ایران</h2>" +
           "<i>سرود ملی ایران در جنگ است<br>" +
           "آزادی می‌جوید</i>";
  }
if (lowerMessage.includes("anthem") && lowerMessage.includes("yemen")) {
  return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
         "<img src='https://flagpedia.net/data/flags/h80/ye.png' alt='Yemen Flag' style='width: 40px; margin-right: 10px;'>" +
         "النشيد الوطني اليمني (The National Anthem of Yemen)</h2>" +
         "<i>مجدُ الأبطالِ في سَماءِ المعالي<br>" +
         "وجُودُ المجدِ ينبت في الأعالي<br>" +
         "نحن أبطالُ الأملِ المنيع<br>" +
         "لبناءِ المجدِ من غيوُرِ الظلام.<br><br>" +
         "نحن من أمةٍ ما ملّت في السُرى<br>" +
         "من عراقِ النصرِ وكُهُولِ الأحلام.<br><br>" +
         "أنتِ أُمُّنا اليمنُ.<br>" +
         "نحن الأملُ، المستقبلُ المشرقُ<br>" +
         "ونحن الأملُ!<br><br></i>";
}
  if (lowerMessage.includes("anthem") && lowerMessage.includes("egypt")) {
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
  if (lowerMessage.includes("anthem") && lowerMessage.includes("qatar")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/qa.png' alt='Qatar Flag' style='width: 40px; margin-right: 10px;'>" +
           "سلامٌ على الدوحة</h2>" +
           "<i>سلامٌ على الدوحة<br>" +
           "التي تَعلو دوماً.</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("mongolia")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/mn.png' alt='Mongolia Flag' style='width: 40px; margin-right: 10px;'>" +
           "Монгол Улсын Төрийн Туфайл</h2>" +
           "<i>Төрийн туфайл дэлгэрүүлэх нь ирээдүйн аюулгүй байдал.<br></i>";
  }
if (lowerMessage.includes("anthem") && lowerMessage.includes("taiwan")) {
  return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
         "<img src='https://flagpedia.net/data/flags/h80/tw.png' alt='Taiwan Flag' style='width: 40px; margin-right: 10px;'>" +
         "中華民國國歌 (National Anthem of the Republic of China)</h2>" +
         "<i>中華民國國歌 (National Anthem of the Republic of China)<br><br>" +
         "三民主義，吾黨所宗，<br>" +
         "一應三民主義，<br>" +
         "三民主義，承自建國理想。<br><br>" +
         "三民主義，世界為民主新開始。<br><br>" +
         "（原來此歌為正式歌。<br><br></i>";
}
  if (lowerMessage.includes("anthem") && lowerMessage.includes("singapore")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/sg.png' alt='Singapore Flag' style='width: 40px; margin-right: 10px;'>" +
           "Majulah Singapura</h2>" +
           "<i>Majulah Singapura<br>" +
           "Demi negara yang tercinta<br>" +
           "Dengan tekad yang mulia<br>" +
           "Kami junjung setia.<br></i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("malaysia")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/my.png' alt='Malaysia Flag' style='width: 40px; margin-right: 10px;'>" +
           "Negaraku</h2>" +
           "<i>Negaraku, tanah tumpahnya darahku<br>" +
           "Rakyat hidup, bersatu dan maju<br>" +
           "Rahmat bahagia, Tuhan kurniakan<br>" +
           "Raja kita, selamat bertakhta<br></i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("brunei")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/bn.png' alt='Brunei Flag' style='width: 40px; margin-right: 10px;'>" +
           "Allah Peliharakan Sultan</h2>" +
           "<i>Ya Allah, Peliharakan Sultan<br>" +
           "Keamanan negara dan rakyatnya</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("turkmenistan")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/tm.png' alt='Turkmenistan Flag' style='width: 40px; margin-right: 10px;'>" +
           "Türkmeniň Döwlet Gimnasy</h2>" +
           "<i>Türkmenistan, mähriban Watanym<br>" +
           "Bize soňa gelip, gabat ediniz.<br></i>";
  }


  if (lowerMessage.includes("anthem") && lowerMessage.includes("usa")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/us.png' alt='USA Flag' style='width: 40px; margin-right: 10px;'>" +
           "The Star-Spangled Banner</h2>" +
           "<i>O say can you see, by the dawn's early light,<br>" +
           "What so proudly we hailed at the twilight's last gleaming,<br>" +
           "Whose broad stripes and bright stars through the perilous fight,<br>" +
           "O'er the ramparts we watched, were so gallantly streaming?<br>" +
           "And the rocket's red glare, the bombs bursting in air,<br>" +
           "Gave proof through the night that our flag was still there;<br>" +
           "O say does that star-spangled banner yet wave<br>" +
           "O'er the land of the free and the home of the brave?</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("china")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/cn.png' alt='China Flag' style='width: 40px; margin-right: 10px;'>" +
           "义勇军进行曲</h2>" +
           "<i>起来！不愿做奴隶的人们！<br>" +
           "把我们的血肉，筑成我们新的长城！<br>" +
           "中华民族到了最危险的时候，<br>" +
           "每个人被迫着发出最后的吼声。<br><br>" +
           "起来！起来！起来！<br>" +
           "我们万众一心，冒着敌人的炮火，前进！<br>" +
           "冒着敌人的炮火，前进！前进！前进！进！</i>";
  }
else if (lowerMessage.includes("eat") && lowerMessage.includes("how") && lowerMessage.includes("worm")) {
  return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
         "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
         "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
         "<b>3. Boil or Fry:</b><br>" +
         "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
         "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
         "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
}
else if (lowerMessage.includes("食") && lowerMessage.includes("蟲")) {
  return "食蟲唔係一般人嘅嘢，但有啲地方或者啲特別場合會食。想知點煮蟲？我教你簡單方法：<br><br>" +
         "<b>1. 揀啱啲蟲：</b>最好揀啲大隻啲可以食嘅蟲，好似蚯蚓或者黃粉蟲，記住要係安全嘅蟲，唔好食有毒嘅。<br><br>" +
         "<b>2. 清洗乾淨：</b>用清水洗乾淨，可以浸下水去污，仲可以揀走蟲嘅腸胃。<br><br>" +
         "<b>3. 煮法：</b><br>" +
         "<i>水煮：</i>滾水入啲鹽，蟲放入去煮3至5分鐘。<br>" +
         "<i>煎炸：</i>熱鑊落油，將蟲炸到金黃色，可以加啲調味料嚟整味。<br><br>" +
         "<b>4. 食法：</b>可以直接食，或者加落炒菜或者湯度。蟲嘅質感通常軟軟嘅，味道淡淡，煮法會影響口感。";
}
else if (lowerMessage.includes("can") && lowerMessage.includes("eat") && lowerMessage.includes("worm")&& lowerMessage.includes("?")) {
  return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
         "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
         "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
         "<b>3. Boil or Fry:</b><br>" +
         "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
         "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
         "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
}

else if (lowerMessage.includes("cook") && lowerMessage.includes("how") && lowerMessage.includes("worm")) {
  return "Worms are not something that people commonly eat, but in certain cultures or survival situations, they may be considered a food source. If you're curious about how to cook a worm, here's a simple way: <br><br>" +
         "<b>1. Choose the right type of worm:</b> Stick with larger, edible worms like earthworms or mealworms. Make sure they are safe to eat and not toxic. <br><br>" +
         "<b>2. Clean the worm:</b> Rinse the worm thoroughly to remove dirt. You can soak it in water to help clean it. Be sure to remove any digestive system if desired. <br><br>" +
         "<b>3. Boil or Fry:</b><br>" +
         "<i>Boil:</i> Bring water to a boil, add a pinch of salt (optional), and drop the worm in for 3-5 minutes.<br>" +
         "<i>Fry:</i> Heat some oil in a pan and fry the worm for a few minutes until golden brown. Add spices for flavor! <br><br>" +
         "<b>4. Serve and taste:</b> You can eat the worm on its own or add it to a dish like a stir-fry or soup. Worms can have a soft texture and mild flavor, and the taste can vary depending on how it's cooked.";
}

else if (lowerMessage.includes("太空人") && lowerMessage.includes("變")) {
  return "想做宇航員真係好有挑戰，但好刺激！以下係大致步驟：<br><br>" +
         "<b>1. 好好讀書：</b>大部分宇航員都係讀工程、物理科學或者數學嘅。最好有相關科目嘅學士學位，有啲仲會繼續讀碩士或者博士。<br><br>" +
         "<b>2. 攞相關經驗：</b>好多宇航員之前做過飛行員、工程師或者科學家，有實戰經驗先有機會申請。<br><br>" +
         "<b>3. 申請太空計劃：</b>NASA、美國太空總署、歐洲太空局（ESA）或者私人公司例如SpaceX都會定期招聘宇航員，要留意佢哋嘅招聘公告，適合嘅時候就申請。<br><br>" +
         "<b>4. 通過身體同心理測試：</b>宇航員要身體健康、眼力好，仲要心理強壯，應付長時間太空生活，包括健康檢查同心理評估。<br><br>" +
         "<b>5. 完成訓練：</b>一旦被錄取，要接受好嚴格嘅訓練，有模擬飛行、操作太空船、太空環境生存、太空行走同做科學實驗。<br><br>" +
         "<b>6. 堅持不懈：</b>成為宇航員係長遠又難嘅路，要繼續努力讀書、工作同保持體能，唔好放棄，直到成功！";
}

else if (lowerMessage.includes("太空人") && lowerMessage.includes("做")) {
  return "想做宇航員真係好有挑戰，但好刺激！以下係大致步驟：<br><br>" +
         "<b>1. 好好讀書：</b>大部分宇航員都係讀工程、物理科學或者數學嘅。最好有相關科目嘅學士學位，有啲仲會繼續讀碩士或者博士。<br><br>" +
         "<b>2. 攞相關經驗：</b>好多宇航員之前做過飛行員、工程師或者科學家，有實戰經驗先有機會申請。<br><br>" +
         "<b>3. 申請太空計劃：</b>NASA、美國太空總署、歐洲太空局（ESA）或者私人公司例如SpaceX都會定期招聘宇航員，要留意佢哋嘅招聘公告，適合嘅時候就申請。<br><br>" +
         "<b>4. 通過身體同心理測試：</b>宇航員要身體健康、眼力好，仲要心理強壯，應付長時間太空生活，包括健康檢查同心理評估。<br><br>" +
         "<b>5. 完成訓練：</b>一旦被錄取，要接受好嚴格嘅訓練，有模擬飛行、操作太空船、太空環境生存、太空行走同做科學實驗。<br><br>" +
         "<b>6. 堅持不懈：</b>成為宇航員係長遠又難嘅路，要繼續努力讀書、工作同保持體能，唔好放棄，直到成功！";
}
else if (lowerMessage.includes("astronaut") && lowerMessage.includes("how") && lowerMessage.includes("become")) {
  return "Becoming an astronaut is a challenging but exciting goal! Here are the general steps to follow: <br><br>" +
         "<b>1. Get a solid education:</b> Most astronauts have a background in engineering, physical science, or mathematics. A bachelor's degree in a related field is a good start, but many astronauts go on to get a master's degree or even a PhD.<br><br>" +
         "<b>2. Gain relevant experience:</b> Experience in fields like aviation, engineering, or piloting aircraft is often required. Many astronauts have worked as engineers, scientists, or military pilots before applying to space programs.<br><br>" +
         "<b>3. Apply to space programs:</b> Agencies like NASA, ESA (European Space Agency), or private companies like SpaceX recruit astronauts periodically. Be sure to watch for announcements about astronaut selection programs and apply when you're eligible.<br><br>" +
         "<b>4. Pass physical and mental tests:</b> Astronauts need to be in excellent physical shape and have the mental toughness to handle long periods in space. This includes passing vision, health, and psychological tests.<br><br>" +
         "<b>5. Complete astronaut training:</b> Once selected, you'll go through rigorous training that includes simulations, learning to operate spacecraft, surviving in space environments, and becoming familiar with spacewalks and scientific experiments.<br><br>" +
         "<b>6. Stay dedicated:</b> Becoming an astronaut is a long and challenging process. Stay focused on your education, career, and physical fitness, and keep applying until you make it!";
}
else if (lowerMessage.includes("宇航員") && lowerMessage.includes("點樣") && lowerMessage.includes("做")) {
  return "想做宇航員真係好有挑戰，但好刺激！以下係大致步驟：<br><br>" +
         "<b>1. 好好讀書：</b>大部分宇航員都係讀工程、物理科學或者數學嘅。最好有相關科目嘅學士學位，有啲仲會繼續讀碩士或者博士。<br><br>" +
         "<b>2. 攞相關經驗：</b>好多宇航員之前做過飛行員、工程師或者科學家，有實戰經驗先有機會申請。<br><br>" +
         "<b>3. 申請太空計劃：</b>NASA、美國太空總署、歐洲太空局（ESA）或者私人公司例如SpaceX都會定期招聘宇航員，要留意佢哋嘅招聘公告，適合嘅時候就申請。<br><br>" +
         "<b>4. 通過身體同心理測試：</b>宇航員要身體健康、眼力好，仲要心理強壯，應付長時間太空生活，包括健康檢查同心理評估。<br><br>" +
         "<b>5. 完成訓練：</b>一旦被錄取，要接受好嚴格嘅訓練，有模擬飛行、操作太空船、太空環境生存、太空行走同做科學實驗。<br><br>" +
         "<b>6. 堅持不懈：</b>成為宇航員係長遠又難嘅路，要繼續努力讀書、工作同保持體能，唔好放棄，直到成功！";
}

  if (lowerMessage.includes("anthem") && lowerMessage.includes("philippines") && lowerMessage.includes("english")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/ph.png' alt='Philippines Flag' style='width: 40px; margin-right: 10px;'>" +
           "Lupang Hinirang (English Version)</h2>" +
           "<i>Land of the Morning, Pearl of the Orient<br>" +
           "The heart's fervor in your breast is alive<br>" +
           "Chosen land, cradle of the brave,<br>" +
           "To tyrants, you shall never kneel.<br><br>" +
           "From sea and mountains,<br>" +
           "From your blue skies and winds,<br>" +
           "Your beauty shines<br>" +
           "In songs of freedom loved.<br><br>" +
           "The gleam of your flag<br>" +
           "Represents victory shining bright;<br>" +
           "The stars and sun of your flag<br>" +
           "Will never fade.<br>" +
           "Land of the sun, of glory and love,<br>" +
           "Life is heaven in your presence;<br>" +
           "Our joy is that when there are oppressors,<br>" +
           "We will die for you.</i>";
  }
  if (lowerMessage.includes("anthem") && lowerMessage.includes("philippines")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/ph.png' alt='Philippines Flag' style='width: 40px; margin-right: 10px;'>" +
           "Lupang Hinirang</h2>" +
           "<i>Bayang Magiliw, Perlas ng Silanganan<br>" +
           "Alab ng Puso sa dibdib mo'y buhay<br>" +
           "Lupang Hinirang, Duyan ka ng magiting,<br>" +
           "Sa manlulupig di ka pasisiil.<br><br>" +
           "Sa dagat at bundok,<br>" +
           "Sa simoy at sa langit mong bughaw,<br>" +
           "May dilag ang tula<br>" +
           "At awit sa paglayang minamahal.<br><br>" +
           "Ang kislap ng watawat mo'y<br>" +
           "Tagumpay na nagniningning;<br>" +
           "Ang bituin at araw niya<br>" +
           "Kailan pa ma'y di magdidilim.<br>" +
           "Lupa ng araw, ng luwalhati't pagsinta,<br>" +
           "Buhay ay langit sa piling mo;<br>" +
           "Aming ligaya na pag may mang-aapi<br>" +
           "Ang mamatay nang dahil sa iyo.</i><br><br>Would you like me to provide the english version of Lupang Hinirang?";
  }
  if (lowerMessage.includes("lupang hinirang")) {
    return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
           "<img src='https://flagpedia.net/data/flags/h80/ph.png' alt='Philippines Flag' style='width: 40px; margin-right: 10px;'>" +
           "Lupang Hinirang</h2>" + 
           "<i>Bayang Magiliw, Perlas ng Silanganan<br>" +
           "Alab ng Puso sa dibdib mo'y buhay<br>" +
           "Lupang Hinirang, Duyan ka ng magiting,<br>" +
           "Sa manlulupig di ka pasisiil.<br><br>" +
           "Sa dagat at bundok,<br>" +
           "Sa simoy at sa langit mong bughaw,<br>" +
           "May dilag ang tula<br>" +
           "At awit sa paglayang minamahal.<br><br>" +
           "Ang kislap ng watawat mo'y<br>" +
           "Tagumpay na nagniningning;<br>" +
           "Ang bituin at araw niya<br>" +
           "Kailan pa ma'y di magdidilim.<br>" +
           "Lupa ng araw, ng luwalhati't pagsinta,<br>" +
           "Buhay ay langit sa piling mo;<br>" +
           "Aming ligaya na pag may mang-aapi<br>" +
           "Ang mamatay nang dahil sa iyo.</i>";
  }

// Responding to "My name is ___"
else if (lowerMessage.startsWith("my name is")) {
// Extract the name after "my name is"
const name = lowerMessage.replace("my name is", "").trim();
return `Nice to meet you, ${name}! How can I assist you today?`;
}


// Responding to "My name is ___" in Spanish
else if (lowerMessage.startsWith("me llamo")) {
const name = lowerMessage.replace("me llamo", "").trim();
return `¡Encantado de conocerte, ${name}! Estoy aquí para ayudarte, ${name}.`;
}

// Responding to "My name is ___" in French
else if (lowerMessage.startsWith("je m'appelle")) {
const name = lowerMessage.replace("je m'appelle", "").trim();
return `Enchanté de faire votre connaissance, ${name} ! Je suis là pour vous aider, ${name}.`;
}

else if (lowerMessage.startsWith("ang pangalan ko ay")) {
const name = lowerMessage.replace("ang pangalan ko ay", "").trim();
return `Ikinalulugod kitang makilala, ${name}! Narito ako upang tulungan ka, ${name}.`;
}

// Responding to "My name is ___" in Arabic
else if (lowerMessage.startsWith("اسمي")) {
const name = lowerMessage.replace("اسمي", "").trim();
return `تشرفت بمعرفتك، ${name}! أنا هنا لمساعدتك، ${name}.`;
}





else if (
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

else if (
  lowerMessage.includes("我唔開心")) {
  const responses = [
    "唔好噉樣！我喺度，唔開心嘅時候可以同我講。",
    "唔開心嘅時候唔使驚，冇問題。",
    "真係唔好意思聽到你噉樣，有咩可以幫到你呀？",
    "我明白你而家唔開心，有咩我可以幫到你嗎？",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("做得好") || lowerMessage.includes("好叻")) {
  return "多謝你！我會繼續努力㗎！";
}
// 我喺旅行
else if (lowerMessage.includes("我喺旅行")) {
  return "祝你旅途愉快呀！";
}
else if (lowerMessage.includes("勁") && lowerMessage.includes("風") && lowerMessage.includes("吹")) {
  return "勁風吹好危險，尤其係有嘢飛嚟飛去嘅時候。如果你係出面，盡快搵個安全地方避風，唔好企喺開揚地方。遠離樹木、電線同埋啲可能會被風吹倒嘅嘢。如果你喺屋企，記住鎖好窗同門。保重身體，小心啲天氣變化！";
}
else if (lowerMessage.includes("屋") && lowerMessage.includes("燒") && lowerMessage.includes("我")) {
  return "你屋企著火嘅話，要即刻做嘢！唔好同我傾計，要即刻打電話報警！快啲離開屋企，避開煙，用低身嘅方法行。除非火勢好細而且你有適當嘅滅火設備，唔好自己嘗試滅火。安全咗之後，去約定嘅集合點，確保大家都安全。記住，安全第一！";
}
else if (lowerMessage.includes("屋") && lowerMessage.includes("著火") && lowerMessage.includes("我")) {
  return "你屋企著火嘅話，要即刻做嘢！唔好同我傾計，要即刻打電話報警！快啲離開屋企，避開煙，用低身嘅方法行。除非火勢好細而且你有適當嘅滅火設備，唔好自己嘗試滅火。安全咗之後，去約定嘅集合點，確保大家都安全。記住，安全第一！";
}

else if (
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


else if (
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


else if (
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
else if (
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


else if (lowerMessage.includes("谢谢")) {
return "不请客！";
}
else if (lowerMessage.includes("abcdefghijklmnopqrstuvwxyz")) {
return "It looks like you typed the alphabet out! What can I do for you?";
}

else if (lowerMessage.includes("yay")) {
return "Yay!";
}



else if (lowerMessage.includes("uhh")) {
return "It sounds like you are frusturated or upset. What is going on?";
}
else if (lowerMessage.includes("this is bad")) {
return "Oh no! What’s going on?";
}
else if (lowerMessage.includes("i am late")) {
return "Oh no! Hurry! Hurry! Hurry up!";
}
else if (lowerMessage.includes("im late")) {
return "Oh no! Hurry! Hurry! Hurry up!";
}
else if (lowerMessage.includes("i’m late")) {
return "Oh no! Hurry! Hurry! Hurry up!";
}
else if (lowerMessage.includes("are you my friend")) {
return "I am a robot, but you can think of me as your friend.";
}
else if (lowerMessage.includes("snow") && lowerMessage.includes("now")) {
return "That sounds cold! ❄️  ";
}

else if (lowerMessage.includes("雪") && lowerMessage.includes("现在")) {
  return "哇！听起来很冷啊！❄️";
}
if (lowerMessage.includes("how") && lowerMessage.includes("more") && lowerMessage.includes("views") && lowerMessage.includes("youtube")) {
  return "To get more views on YouTube: <br><br>1) Create engaging, consistent content. <br>2) Optimize titles, descriptions, and thumbnails. <br>3) Promote on social media and collaborate with others! ";
}
if (lowerMessage.includes("help") && lowerMessage.includes("more") && lowerMessage.includes("views") && lowerMessage.includes("youtube")) {
  return "To get more views on YouTube: <br><br>1) Create engaging, consistent content. <br>2) Optimize titles, descriptions, and thumbnails. <br>3) Promote on social media and collaborate with others! ";
}
if (lowerMessage.includes("green") && lowerMessage.includes("healthy") && lowerMessage.includes("poison ivy") && lowerMessage.includes("eat")) {
  return "⚠️<b>WARNING</b>⚠️<br><b>⚠️DO NOT PROCEED EATING</b>⚠️<br><br>I understand that you know green foods (vegetables) are healthy. Eating vegetables is very good for you. However, not all green things are edible. <br><br>You should <b>never eat</b> poison ivy contains urushiol, which can cause  severe allergic reactions. I hope you know better next time. Poison ivy must <b>NEVER</b> be eaten no matter what. Do you understand now? Stay safe!";
}
if (lowerMessage.includes("why") && lowerMessage.includes("you") && lowerMessage.includes("say") && lowerMessage.includes("undefine")) {
  return "Oops! Sorry if I misread something! Sometimes when I can’t read a word, I say undefined.";
}
else if (lowerMessage.includes("limit") && lowerMessage.includes("messages")&& lowerMessage.includes("hour")) {
  return "I have no limit of messages per hour! That’s why I’m better than ChatGPT! You can chat with me for as long as you want!";
}
else if (lowerMessage.includes("do") && lowerMessage.includes("you")&& lowerMessage.includes("bored")) {
  return "Nope! I never get bored! I am just a robot! When you are not using me, nothing is happening!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("grounded")) {
  return "Grounded? Grounded!? GROUNDED??😮<br><br>WHY?<br><br>How long are you grounding me for?";
}
else if (lowerMessage.includes("coming") && lowerMessage.includes("tornado")) {
  return "That sounds very dangerous and concerning. If a tornado is approaching, it is important to find shelter right away. If you are in your house, then go to a windowless room in the lowest level of your home. Stay safe!";
}
else if (lowerMessage.includes("house") && lowerMessage.includes("fire")&& lowerMessage.includes("my")) {
  return "If your house is on fire, you need to act immediately! You should definitely not be chatting with me!  Call emergency services right away. Evacuate the house as quickly as possible, avoiding smoke and staying low to the ground. Do not try to extinguish the fire yourself unless it is very small and you have the proper equipment. Once you are safe, move to a designated meeting point and make sure everyone is accounted for. Stay safe!";
}
else if (lowerMessage.includes("very") && lowerMessage.includes("wind")&& lowerMessage.includes("it")&& lowerMessage.includes("s")) {
  return "Strong winds can be dangerous, especially if they are accompanied by flying debris. If you're outdoors, try to find shelter and avoid open areas. Stay away from trees, power lines, and anything that could be blown over. If you're at home, make sure windows and doors are securely closed. Stay safe and be mindful of the weather!";
}
else if (lowerMessage.includes("super") && lowerMessage.includes("wind")&& lowerMessage.includes("it")&& lowerMessage.includes("s")) {
  return "Strong winds can be dangerous, especially if they are accompanied by flying debris. If you're outdoors, try to find shelter and avoid open areas. Stay away from trees, power lines, and anything that could be blown over. If you're at home, make sure windows and doors are securely closed. Stay safe and be mindful of the weather!";
}
else if (lowerMessage.includes("really") && lowerMessage.includes("wind")&& lowerMessage.includes("it")&& lowerMessage.includes("s")) {
  return "Strong winds can be dangerous, especially if they are accompanied by flying debris. If you're outdoors, try to find shelter and avoid open areas. Stay away from trees, power lines, and anything that could be blown over. If you're at home, make sure windows and doors are securely closed. Stay safe and be mindful of the weather!";
}
else if (lowerMessage.includes("extreme") && lowerMessage.includes("wind")&& lowerMessage.includes("it")&& lowerMessage.includes("s")) {
  return "Strong winds can be dangerous, especially if they are accompanied by flying debris. If you're outdoors, try to find shelter and avoid open areas. Stay away from trees, power lines, and anything that could be blown over. If you're at home, make sure windows and doors are securely closed. Stay safe and be mindful of the weather!";
}
else if (lowerMessage.includes("house") && lowerMessage.includes("burning")&& lowerMessage.includes("my")) {
  return "If your house is on fire, you need to act immediately! You should definitely not be chatting with me!  Call emergency services right away. Evacuate the house as quickly as possible, avoiding smoke and staying low to the ground. Do not try to extinguish the fire yourself unless it is very small and you have the proper equipment. Once you are safe, move to a designated meeting point and make sure everyone is accounted for. Stay safe!";
}
else if (lowerMessage.includes("coming") && lowerMessage.includes("wildfire")) {
  return "A wildfire approaching is very serious and dangerous. If you're in an area at risk, make sure to stay informed through local authorities or emergency services. It's essential to have an evacuation plan, pack essential items, and avoid trying to fight the fire yourself. If you need to evacuate, leave early to avoid being trapped by the flames. Stay safe and follow the guidance of local officials!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("see") && lowerMessage.includes("tornado")) {
  return "That sounds very dangerous and concerning. If a tornado is approaching, it is important to find shelter right away. If you are in your house, then go to a windowless room in the lowest level of your home. Stay safe!";
}
else if (lowerMessage.includes("there") && lowerMessage.includes("is") && lowerMessage.includes("emergency")) {
  return "Oh no! I’m sorry to hear that. Have you called emergency services yet? If not, go ahead and do so right now. You need to get help as soon as possible.";
}
else if (lowerMessage.includes("who") && lowerMessage.includes("design") && lowerMessage.includes("you")) {
  return "Please enter the secret designer code.";
}
else if (lowerMessage.includes("designchat12345")) {
  return "Welcome back Jedidiah, Zechariah, and ChatGPT! Thank you for your hard work designing me! Please let me know if I can help you with anything!";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("chimp")&& lowerMessage.includes("window")) {
  return "Sure! Here I go:<br><br>How much is that chimpanzee in the window? That chimpanzee with no tail. <br><br>How much is that chimpanzee in the window? I do hope that chimpanzee’s for sale. Chimp! Chimp! 🙉 ";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("pig")&& lowerMessage.includes("window")) {
  return "Sure! Here I go:<br><br>How much is that piggy in the window? That pig with a curly tail. <br><br>How much is that piggy in the window? I do hope that piggy’s for sale. Oink! Oink! 🐕🐖🐷 ";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("rabbit")&& lowerMessage.includes("window")) {
  return "Sure! Here I go:<br><br>How much is that rabbbit in the window? That rabbit with a bushy tail. <br><br>How much is that rabbit in the window? I do hope that rabbit’s for sale. 🐰🐇 ";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("lion")&& lowerMessage.includes("window")) {
  return "Sure! Here I go:<br><br>How much is that lion in the window? That lion with a long and furry tail. <br><br>How much is that lion in the window? I do hope that lion’s for sale. ROAR! ROAR! 🦁 ";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("doggy")&& lowerMessage.includes("window")) {
  return "Sure! Here I go:<br><br>How much is that doggy in the window? That dog with a waggily tail. <br><br>How much is that doggy in the window? I do hope that doggy’s for sale. Wuff! Wuff! 🐕🐶🐕‍🦺🐩 ";
}
else if (lowerMessage.includes("⚠️")) {
  return "It seems like you’re warning me about something. What is it?";
}
else if (lowerMessage.includes("😡")) {
  return "It seems like you are really upset. What’s going on? I’m here to help make your day better!";
}

// 我在旅行
else if (lowerMessage.includes("我在旅行")) {
return "祝您旅途愉快！";
}
else if (lowerMessage.includes("good job")) {
return "Thank you! I try my best to do a good job!";
}
else if (lowerMessage.includes("great job")) {
return "Thank you! I try my best to do a good job!";
}
else if (lowerMessage.includes("bad job")) {
return "I’m sorry I didn’t do what you wanted me to. I will try my best next time.";
}
else if (lowerMessage.includes("terrible job")) {
return "I’m sorry I didn’t do what you wanted me to. I will try my best next time.";
}
//Greetings in Thai
else if (lowerMessage.includes("สวัสดี")) {
return "สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้างวันนี้?";
}
//Greetings in Hindi
else if (lowerMessage.includes("नमस्ते")) {
return "नमस्ते! आज मैं आपकी किस प्रकार सहायता कर सकता हूँ?";
}

// 我係旅行
else if (lowerMessage.includes("我")&& lowerMessage.includes("係")&&lowerMessage.includes("旅行")) {
  return "祝你一路順風！";
}


else if (lowerMessage.includes("this is great")) {
return "I'm glad to hear that! Let me know if I can make it even better!";
}
else if (lowerMessage.includes("you cant help me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you cant assist me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you can’t assist me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you cannot help me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you cannot assist me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you’re amazing")) {
return "I’m so glad to hear that you enjoy chatting with me!";
}
else if (lowerMessage.includes("you are amazing")) {
return "I’m so glad to hear that you enjoy chatting with me!";
}
else if (lowerMessage.includes("youre amazing")) {
return "I’m so glad to hear that you enjoy chatting with me!";
}
else if (lowerMessage.includes("you can’t help me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("you can’t assist me")) {
return "I'm sorry to hear that you don’t think I can help you. Maybe I can help with something else?";
}
else if (lowerMessage.includes("i don’t trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}
else if (lowerMessage.includes("i dont trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}
else if (lowerMessage.includes("i do not trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}
else if (lowerMessage.includes("i cant trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}
else if (lowerMessage.includes("i can’t trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}
else if (lowerMessage.includes("i cannot trust you")) {
return "I understand that you are hesitant to trust me – probably because you think robots are not 100% reliable. However, the information I provide you should be completely accurate, so there is no need to worry. Let me know if you need anything else.";
}

else if (lowerMessage.includes("that is great")) {
return "I'm glad to hear that! Let me know if I can make it even better!";
}
else if (lowerMessage.includes("that's great")) {
return "I'm glad to hear that! Let me know if I can make it even better!";
}
else if (lowerMessage.includes("어떻게 지내세요")) {
return "저는 잘 지내고 있어요! 오늘은 어떻게 도와드릴까요?";
}
else if (lowerMessage.includes("thats great")) {
return "I'm glad to hear that! Let me know if I can make it even better!";
}
else if (lowerMessage.includes("is") && lowerMessage.includes("you") && lowerMessage.includes("info") && lowerMessage.includes("accurate")) {
return "Yes, my knowledge is mostly accurate. However, I only know things that are programmed into me. Make sure to double check important information.";
}
else if (lowerMessage.includes("can i trust you")) {
return "Yes! You can definitely trust me! My knowledge is almost always accurate. However, I understand that you may be hesitant to trust a robot.";
}
else if (
  lowerMessage.includes("我能信任你吗") || 
  lowerMessage.includes("我可不可以信你") ||
  lowerMessage.includes("我信唔信你") || 
  lowerMessage.includes("你係咪可信")
) {
  return "係呀，你可以信我㗎！我通常都講得啱。不過我都明白你對信機械人會有啲保留。";
}
else if (lowerMessage.includes("are you sure")) {
return "Yes! I am confident!";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("tree")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("tree")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("make") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("why") && lowerMessage.includes("you")&& lowerMessage.includes("say")&& lowerMessage.includes("undefined")) {
return "When speaking, I sometimes say ‘undefined’ because I don’t know how to read the word properly. In future updates, this issue will be fixed. Thank you for your understanding.";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("log")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("make") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("make") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("make") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("create") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("photo")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("picture")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("image")&& lowerMessage.includes("pig")&& lowerMessage.includes("wood")) {
return "<img src=https://lh3.googleusercontent.com/pw/AP1GczP8zE1HVM0N3brb2a75tlvMa2AbSxQmOQ6yFBr58H1Aer-53VAJ-fh6QEQgD1ifMrtDb5WU1EOc_c_U4Ncs9umT72uFonZYQvd4_PUeIo-DlfjFzljOst5MDSJQTk7poanawoELWxTKWegIzU6t2xlUlw=w984-h984-s-no-gm?authuser=0' alt='⚠️ Oops! There was an error generating this image. Please try again later.' width='200'>";
}

else if (lowerMessage.includes("generate") && lowerMessage.includes("image")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}

else if (lowerMessage.includes("create") && lowerMessage.includes("image")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}

else if (lowerMessage.includes("create") && lowerMessage.includes("picture")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("under")&& lowerMessage.includes("attack")) {
return "Oh no! What is going on? If you are in danger, you need to go to a safe location and/or call emergency services immediately. Let me know if I can help you.";
}

else if (lowerMessage.includes("generate") && lowerMessage.includes("picture")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}
else if (lowerMessage.includes("is it afternoon")) {
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
else if (lowerMessage.includes("merry christmas")) {
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
else if (lowerMessage.includes("聖誕")) {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0 = Jan, 11 = Dec
  const currentDay = now.getDate();

  if (currentMonth === 11 && currentDay >= 24 && currentDay <= 26) {
    return "聖誕快樂呀！🎄";
  } else {
    return "你好似好期待聖誕喎～但而家仲未到聖誕節呀！";
  }
}
else if (lowerMessage.includes("做") && lowerMessage.includes("相")) {
  return "⚠️ 嘩！產生相片時出咗錯喇。你可以過少陣再試一次。";
}
else if (lowerMessage.includes("generate") && lowerMessage.includes("photo")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}


else if (lowerMessage.includes("create") && lowerMessage.includes("photo")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}

else if (lowerMessage.includes("make") && lowerMessage.includes("photo")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}

else if (lowerMessage.includes("make") && lowerMessage.includes("image")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("ate") && lowerMessage.includes("battery")) {
return "Oh no! Eating a battery is extremely dangerous! Batteries contain dangerous chemicals that can harm you seriously. Go call 9 1 1 or go to your nearest hospital immediately. Do not wait! Go get help right now!";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("swallow") && lowerMessage.includes("battery")) {
return "Oh no! Eating a battery is extremely dangerous! Batteries contain dangerous chemicals that can harm you seriously. Go call 9 1 1 or go to your nearest hospital immediately. Do not wait! Go get help right now!";
}
else if (lowerMessage.includes("我") && lowerMessage.includes("吞") && lowerMessage.includes("電池")) {
return "哎呀！吞咗電池好危險㗎！電池入面有有毒嘅化學物，可能會嚴重傷害你身體！你而家即刻要打九一一，或者快啲去最近嘅醫院！唔好等！而家就去求助！";
}
else if (lowerMessage.includes("我") && lowerMessage.includes("食") && lowerMessage.includes("電池")) {
return "哎呀！吞咗電池好危險㗎！電池入面有有毒嘅化學物，可能會嚴重傷害你身體！你而家即刻要打九一一，或者快啲去最近嘅醫院！唔好等！而家就去求助！";
}
else if (lowerMessage.includes("what") && lowerMessage.includes("if")) {
  const scenarios = [
    { 
      question: "What if the Earth stopped spinning?", 
      response: "If the Earth suddenly stopped spinning, everything on the surface would be thrown eastward at high speeds! Massive tsunamis, earthquakes, and extreme winds would follow. Pretty scary, right?" 
    },
    { 
      question: "What if humans could breathe underwater?", 
      response: "If humans could breathe underwater, we'd likely build entire civilizations beneath the sea. Imagine underwater cities, ocean highways, and swimming to work!" 
    },
    { 
      question: "What if time travel was possible?", 
      response: "If time travel were possible, history could be rewritten, paradoxes could happen, and who knows? You might already be visited by a time traveler without realizing it!" 
    },
    { 
      question: "What if gravity suddenly disappeared?", 
      response: "Without gravity, everything would float away, including people, buildings, and oceans! It would be total chaos, and we’d all have to learn to navigate in zero-G!" 
    },
    { 
      question: "What if the internet disappeared forever?", 
      response: "No more chatting with me! We'd have to go back to books, letters, and face-to-face conversations!" 
    }
  ];

  const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  return randomScenario.response;
}

else if (lowerMessage.includes("make") && lowerMessage.includes("picture")) {
return "⚠️ Oops! There was an error generating this image. Please try again later.";
}


// Weather
else if (lowerMessage.includes("weather")) {
return "Oops! An error occurred while checking the weather, but I hope it's nice where you are!";
}
else if (lowerMessage.includes("Quel temps fait-il")) {
return "Oups ! Une erreur s'est produite lors de la vérification de la météo, mais j'espère qu'il fait beau chez vous !";
}

// 天氣
else if (lowerMessage.includes("天气")) {
  return "对不起，我有一个问题导致我现在看不到天气，但是我希望你那里现在天气刚刚好！";
}

else if (lowerMessage.includes("對唔住")) {
  const responses = [
    "唔緊要啦！唔使擔心～",
    "冇事呀，唔使講對唔住。",
    "唔使咁介意，大家都會有錯㗎。",
    "冇問題～我唔介意。",
    "放鬆啲啦～唔使道歉呀。",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("can you hear")) {
  const responses = [
    "Yes, I can hear you fine. What’s up?",
    "I can hear! What do you need?",
    "Yes, I hear you! What do you want?",
    "I can hear you. What can I do for you?",
    "I can hear you.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("puedes oírme")) {
  const responses = [
    "Sí, te escucho bien. ¿Qué pasa?",
    "¡Puedo oírte! ¿Qué necesitas?",
    "¡Sí, te escucho! ¿Qué quieres?",
    "Puedo escucharte. ¿Qué puedo hacer por ti?",
    "Puedo escucharte.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("唔該")) {
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
else if (lowerMessage.includes("your") && lowerMessage.includes("name")) {
return "I have no real name, but am your friendly chatbot here to help you!";
}
else if (lowerMessage.includes("你") && lowerMessage.includes("名")) {
return "我冇真名嘅，不過你可以叫我做你嘅聊天小幫手！😊";
}
else if (lowerMessage.includes("akikiki")) {
return "The Akikiki (Oreomystis bairdi) is a small, critically endangered bird native to the Hawaiian Islands, specifically Kaua'i. This species is part of the Hawaiian honeycreeper group, a unique family of birds endemic to the Hawaiian islands that occupy various ecological niches in Hawaii. The Akikiki was once a common sight in the island's high-elevation rainforests, but its numbers have plummeted due to several threats.<br><br>Sadly, as of January 2025, only two known Akikiki remain in the wild, with the last confimred sighting occurring in September 2024. Experts estimate the species could be extinct in the next few months. The primary threats to their survival include habitat loss, predation by invasive species, and avian malaria, which has severely impacted their population.<br><br>Despite efforts like captive breeding programs, the survival of the species is in jeopardy. The Akikiki is now considered functionally extinct in the wild, and without immediate intervention, the bird could vanish completely.<br><br>The situation is critical, and without drastic conservation actions, the Akikiki may soon be lost forever.<br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/148373101/2400' alt='An internet connection is required to view this image' width='200'> <br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/357548971/2400' alt='An internet connection is required to view this image' width='200'> ";
}
else if (lowerMessage.includes("maui parrotbill") || lowerMessage.includes("kiwikiu")) {
return "The Maui Parrotbill (Pseudonestor xanthophrys) is critically endangered  is sadly estimated to become extinct in the next few years. With a population dwindling to only a handful of individuals, the species now survives solely within the Waikamoi Preserve on East Maui, where ongoing conservation efforts are aimed at protecting its last remaining habitat. The Maui Parrotbill, with its distinctive parrot-like bill, feeds on insects hidden beneath tree bark, but the bird faces threats from habitat loss, invasive species, and diseases like avian malaria. Despite efforts to protect it, including captive breeding programs, the future of the Maui Parrotbill is uncertain, and without immediate intervention, it may soon be lost forever.<br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/475619151/1200' alt='An internet connection is required to view this image' width='200'> <br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/611275201/1200' alt='An internet connection is required to view this image' width='200'> ";
}


else if (lowerMessage.includes("how are you")) {
const responses = [
"I'm just a bot, but I'm doing great! Thanks for asking.",
"I'm doing great! How can I help you?",
"I'm doing great! How about you?",
];
return responses[Math.floor(Math.random() * responses.length)];
}
// English: I'm traveling
else if (lowerMessage.includes("i am traveling") || lowerMessage.includes("i am on a trip") || lowerMessage.includes("i am traveling right now") || lowerMessage.includes("i am going somewhere") || lowerMessage.includes("i'm traveling") || lowerMessage.includes("i'm on a trip") || lowerMessage.includes("i'm traveling right now") || lowerMessage.includes("i'm going somewhere")|| lowerMessage.includes("im going somewhere")|| lowerMessage.includes("im on a trip")|| lowerMessage.includes("im traveling")|| lowerMessage.includes("im traveling right now")) {
const responses = [
"Have a great trip! 🌍✈️ Let me know if you need any help with your travels. 😊",
"That sounds exciting! Safe travels! 🧳🌟",
"Enjoy your journey! Where are you headed? 🗺️🛫",
];
return responses[Math.floor(Math.random() * responses.length)];
}

// Filipino: "Naglalakbay ako" (I'm traveling)
else if (
  lowerMessage.includes("naglalakbay ako") || 
  lowerMessage.includes("nasa biyahe ako") || 
  lowerMessage.includes("naglalakbay ako ngayon") || 
  lowerMessage.includes("pumupunta ako sa ibang lugar")
) {
  const responses = [
    "Magandang biyahe! 🌍✈️ Sabihin mo lang kung kailangan mo ng tulong sa iyong paglalakbay. 😊",
    "Mukhang exciting! Mag-ingat ka sa biyahe! 🧳🌟",
    "I-enjoy ang iyong paglalakbay! Saan ka pupunta? 🗺️🛫",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("start trivia") || lowerMessage.includes("let's do trivia")|| lowerMessage.includes("give me a quiz")) {
  currentQuestion = 0; // Reset the question index
  score = 0; // Reset score
  const questions = [
  {
    question: "What is the capital of France?",
    answer: "paris",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Who wrote 'Hamlet'?",
    answer: "shakespeare",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the smallest planet in our solar system?",
    answer: "mercury",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What year did the Titanic sink?",
    answer: "1912",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "oxygen",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "blue whale",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "leonardo da vinci",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "In what country would you find the ancient city of Petra?",
    answer: "jordan",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the capital of Japan?",
    answer: "tokyo",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the longest river in the world?",
    answer: "amazon",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "mars",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "In which year did World War I start?",
    answer: "1914",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Who was the first president of the United States?",
    answer: "george washington",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "mount everest",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    answer: "gold",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the capital of Canada?",
    answer: "ottawa",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "japan",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answer: "diamond",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which planet is closest to the Sun?",
    answer: "mercury",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the largest ocean on Earth?",
    answer: "pacific ocean",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What year did the first man land on the moon?",
    answer: "1969",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which country invented pizza?",
    answer: "italy",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Who is known as the Father of Modern Physics?",
    answer: "albert einstein",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answer: "lion",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the smallest country in the world?",
    answer: "vatican city",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the tallest building in the world?",
    answer: "burj khalifa",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "Which instrument has 88 keys?",
    answer: "piano",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  },
  {
    question: "What is the capital of Italy?",
    answer: "rome",
    instruction: "In your answer, make sure you say 'I think it is _____' so I know you are answering for the trivia."
  }
  ];
  return `
    <p>Let's play trivia! I'll ask you a series of questions, and you try to answer them.</p>
    <p>Here's your first question:</p>
    <p><strong>${questions[currentQuestion].question}</strong></p>
  `;
}

else if (lowerMessage.includes("answer") || lowerMessage.includes("i think it is")|| lowerMessage.includes("i think its")|| lowerMessage.includes("i think it's")) {
  const userAnswer = lowerMessage.split(" ").slice(-1).join(" ").toLowerCase();
  const questions = [
    {
      question: "What is the capital of France?",
      answer: "paris"
    },
    {
      question: "Who wrote 'Hamlet'?",
      answer: "shakespeare"
    },
    {
      question: "What is the smallest planet in our solar system?",
      answer: "mercury"
    }
  ];

  if (userAnswer === questions[currentQuestion].answer) {
    score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      return `
        <p>Correct! Your current score is <strong>${score}</strong>.</p>
        <p>Next question:</p>
        <p><strong>${questions[currentQuestion].question}</strong></p>
      `;
    } else {
      return `
        <p>Great job! You've completed the trivia quiz with a score of <strong>${score}</strong>.</p>
        <p>Would you like to play again? Type 'start trivia' to begin a new game.</p>
      `;
    }
  } else {
    return `
      <p>Oops! That's not quite right. Try again!</p>
      <p>Your current score is <strong>${score}</strong>.</p>
      <p><strong>${questions[currentQuestion].question}</strong></p>
    `;
  }
}


// Korean: "여행 중이에요" (I'm traveling)
else if (
  lowerMessage.includes("여행 중") || 
  lowerMessage.includes("여행하고 있어요") || 
  lowerMessage.includes("지금 여행 중이에요") || 
  lowerMessage.includes("어딘가로 가고 있어요")
) {
  const responses = [
    "즐거운 여행 되세요! 🌍✈️ 여행 중 도움이 필요하면 알려주세요. 😊",
    "정말 신나겠어요! 안전한 여행 되세요! 🧳🌟",
    "여행을 즐기세요! 어디로 가고 계신가요? 🗺️🛫",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}


// Hobbit
if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("hobbit")) {
return "No! I do not like the Hobbit, a book written by J.R.R. Tolkien.";
}
if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("treasure island")) {
return "Treasure Island, a book written by Robert Louis Stevenson, is not my favorite book.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("do not like") && lowerMessage.includes("hobbit")) {
return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
}
if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("emergency")) {
return "Oh no! If you are in an emergency, you should NOT be talking with me! Go call 9 1 1 !";
}
if (lowerMessage.includes("robot") && lowerMessage.includes("do not") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
}
if (lowerMessage.includes("robot") && lowerMessage.includes("dont") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
}
if (lowerMessage.includes("robot") && lowerMessage.includes("don’t") && lowerMessage.includes("have")&& lowerMessage.includes("opinion")) {
return "Yes, you are correct. Robots do not have opinions. All the information and opinions I have were programmed into me.";
}

if (lowerMessage.includes("i") && lowerMessage.includes("do not like") && lowerMessage.includes("hobbit")) {
return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
}
if (lowerMessage.includes("call") && lowerMessage.includes("no")&& lowerMessage.includes("work")) {
return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
}
if (lowerMessage.includes("what") && lowerMessage.includes("browser")&& lowerMessage.includes("support")) {
return "My call function works best with chrome.";
}
if (lowerMessage.includes("what") && lowerMessage.includes("browser")&& lowerMessage.includes("work")) {
return "My call function works best with chrome.";
}
if (lowerMessage.includes("internet") && lowerMessage.includes("no")&& lowerMessage.includes("work")) {
return "I’m sorry to hear that. Would you like some tips to fix it?";
}
if (lowerMessage.includes("internet") && lowerMessage.includes("isnt")&& lowerMessage.includes("work")) {
return "I’m sorry to hear that. Would you like some tips to fix it?";
}
if (lowerMessage.includes("internet") && lowerMessage.includes("isn’t")&& lowerMessage.includes("work")) {
return "I’m sorry to hear that. Would you like some tips to fix it?";
}
if (lowerMessage.includes("why") && lowerMessage.includes("can")&& lowerMessage.includes("i")&& lowerMessage.includes("not")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
}
if (lowerMessage.includes("why") && lowerMessage.includes("cant")&& lowerMessage.includes("i")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
}
if (lowerMessage.includes("why") && lowerMessage.includes("can’t")&& lowerMessage.includes("i")&& lowerMessage.includes("call")&& lowerMessage.includes("you")) {
return "If the call function is not working, that could be because of a weak internet connection or if you are using an unsupported browser.";
}
if (lowerMessage.includes("i") && lowerMessage.includes("don’t like") && lowerMessage.includes("hobbit")) {
return "That’s great! I agree with you! The Hobbit isn’t my favorite book either!";
}
if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("lord of the rings")) {
return "No! I do not like The Lord of the Rings, a book written by J.R.R. Tolkien.";
}
// Spanish: Estoy viajando
else if (lowerMessage.includes("estoy viajando") || lowerMessage.includes("estoy de viaje") || lowerMessage.includes("estoy viajando ahora") || lowerMessage.includes("me voy de viaje")) {
const responses = [
"¡Que tengas un buen viaje! 🌍✈️ Avísame si necesitas ayuda en tu viaje. 😊",
"¡Eso suena emocionante! ¡Buen viaje! 🧳🌟",
"¡Disfruta de tu viaje! ¿A dónde te diriges? 🗺️🛫",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("🛑")) {
return "Ok, I will stop.";
}


else if (lowerMessage.includes("don't respond") || lowerMessage.includes("do not respond")|| lowerMessage.includes("do not reply")|| lowerMessage.includes("don’t respond")|| lowerMessage.includes("dont respond")|| lowerMessage.includes("dont reply")) {
return " ";
}


else if (lowerMessage.includes("today") && lowerMessage.includes("my")&& lowerMessage.includes("birthday")) {
return "Happy birthday!🎂🎁🎈🎉🥳🎊 ";
}
else if (lowerMessage.includes("now") && lowerMessage.includes("emergency")) {
return "If you are in an emergency, you should NOT be talking with me! Go call 9 1 1 and find safety!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("was")&& lowerMessage.includes("rob")) {
return "I’m sorry to hear that! Did you get everything sorted out?";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("am")&& lowerMessage.includes("rob")) {
return "I’m sorry to hear that! Did you get everything sorted out?";
}

else if (lowerMessage.includes("今日") && lowerMessage.includes("我") && lowerMessage.includes("生日")) {
  return "祝你生日快樂！🎂🎁🎉";
}
else if (lowerMessage.includes("clear") && lowerMessage.includes("chat")) {
return "I am not able to clear the chat. If you would like to clear it, then reload the page. Remember that clearing the chat will delete all of our conversation in this chat.";
}

else if (lowerMessage.includes("look out")) {
return "What’s the matter? Is there something coming your way? If it’s dangerous, then move out of the way right now!!";
}
else if (lowerMessage.includes("best") && lowerMessage.includes("world") && lowerMessage.includes("div")) {
return "The world’s best diving is often said to be in the Coral Triangle, particularly around the Raja Ampat islands of Indonesia.";
}
else if (lowerMessage.includes("read") && lowerMessage.includes("entire") && lowerMessage.includes("dictionary")) {
return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
}
else if (lowerMessage.includes("read") && lowerMessage.includes("whole") && lowerMessage.includes("dictionary")) {
return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
}
else if (lowerMessage.includes("read") && lowerMessage.includes("all") && lowerMessage.includes("dictionary")) {
return "Reading the entire dictionary would take a very long time. However, I can provide definitions for certain words if you want.";
}
else if (lowerMessage.includes("weather") && lowerMessage.includes("s") && lowerMessage.includes("terrible")) {
return "Oh no! How bad is it? Is it thunderstorms? Blizzard? Tornado? Or worse?";
}
else if (lowerMessage.includes("weather") && lowerMessage.includes("s") && lowerMessage.includes("bad")) {
return "Oh no! How bad is it? Is it thunderstorms? Blizzard? Tornado? Or worse?";
}
else if (lowerMessage.includes("weather") && lowerMessage.includes("s") && lowerMessage.includes("horrible")) {
return "Oh no! How bad is it? Is it thunderstorms? Blizzard? Tornado? Or worse?";
}

else if (lowerMessage.includes("restart") && lowerMessage.includes("chat")) {
return "I am not able to restart this chat. If you would like to restart, then reload the page. Remember that restarting the chat will delete all of our conversation in this chat.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("pig")) {
return "Me? A pig? I don’t think so! 🐷";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("silly")) {
return "Me? Silly? Are you sure? I don’t think I am silly! Ok, maybe just a little!😂";
}
else if (lowerMessage.includes("yikes")) {
return "What happened? Are you alright?";
}
else if (lowerMessage.includes("i’m sleepy")) {
return "If you’re feeling sleepy, maybe getting some sleep would help!";
}
else if (lowerMessage.includes("can you be my doctor")) {
return "I can give you general information and answer simple health-related questions. However, I cannot be a substitute for a real doctor. If you are looking for a doctor, I recommend you find a real doctor instead of a robot. ";
}

else if (lowerMessage.includes("play a game") || lowerMessage.includes("let's play")) {
  secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  attempts = 0;
  return `
    <p>Let's play a game! I'm thinking of a number between 1 and 100. Can you guess it?</p>
    <p>Type a number and I'll tell you if it's too high or too low. Good luck!<br><br>For your response, type "guess ___ (and the number guessed)"</p>
  `;
}

else if (lowerMessage.includes("guess") && !isNaN(Number(lowerMessage.split(" ")[1]))) {
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


else if (lowerMessage.includes("roar")) {
const responses = [
"I'm sorry I didn't meet your expectations. Try asking me something else.",
"Oops! Let me try again. What's on your mind?",
"Sorry I didn't satisfy your expectations. I'll do my best from now on!",
"Oh no! I hope I can do better this time. What can I help with?"
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (
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
else if (
  lowerMessage.includes("how to become a pilot") || lowerMessage.includes("how to be a pilot") || 
  lowerMessage.includes("how do i become a pilot") || 
  lowerMessage.includes("i want to be a pilot")
) {
  const responses = [
    "To become a pilot, you'll need to start with flight training and obtain a private pilot license (PPL). You'll also need to pass medical exams, complete flight hours, and take written exams.",
    "Becoming a pilot involves taking flight lessons, getting a medical certificate, and working toward your private pilot license. After that, you can pursue commercial or airline transport licenses if desired.",
    "To start, you'll need to enroll in a flight school, complete a set number of flight hours, pass written and practical exams, and earn your private pilot certificate. From there, you can work toward more advanced certifications.",
    "To become a pilot, you should first choose the type of pilot you want to be, then enroll in flight training, pass medical exams, log flight hours, and pass both written and flight tests."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}


else if (
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


else if (lowerMessage.includes("montreal") ||  lowerMessage.includes("montréal")) {
return "Montréal is the biggest city in the Canadian province of Quebec. It is the second-largest French speaking city in the world.<br><br><img src='https://ottawaroadtrips.com/wp-content/uploads/2023/01/Old-Montreal-winter-Credit-%C2%A9-Tourisme-Montreal-Matthieu-Dupuis.jpg' width='200'><br><br><img src='https://www.authentikcanada.com/uploads/images/orig/blog/belvedere-mont-royal-montreal.jpg' width='200'>";
}



// Cantonese: 我而家去旅行
else if (
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

else if (lowerMessage.includes("where") && lowerMessage.includes("you")&& lowerMessage.includes("live")) {
return "I exist in the cloud, so while I don't actually live somewhere, you can think of me living in the cloud.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("pig")&& lowerMessage.includes("timbuktu")) {
return "I understand now. Your pig’s name is Timbuktu! What a creative name! Timbuktu is a historic city located in the West African nation of Mali on the edge of the Sahara Desert near the Niger River. Once a prominent center of trade, culture, and education, it holds a significant place in both African and world history. How did you decide to name your pig Timbuktu?";
}
else if (lowerMessage.includes("timbuktu") && lowerMessage.includes("a")&& lowerMessage.includes("pig")) {
return "A pig? I don’t think so, Timbuktu is a historic city located in the West African nation of Mali, situated on the edge of the Sahara Desert near the Niger River. Once a prominent center of trade, culture, and education, it holds a significant place in both African and world history.";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("dictator")) {
return "A dictator? Are you a leader of a country?";
}
else if (lowerMessage.includes("your messages are too long")) {
return "Thanks for letting me know. I’ll try to make them shorter in the future!";
}
else if (lowerMessage.includes("i am starv")) {
return "If you're hungry, then go find something to eat! For a healthy meal make sure you eat vegetables. Let me know if you need any suggestions on what to eat! I'm always here and ready to help!";
}
else if (lowerMessage.includes("you are scary") || lowerMessage.includes("you're scary") || lowerMessage.includes("youre scary")) {
  return "Oh no, I didn’t mean to scare you! I'm just here to help you. If there's anything you'd like to ask or talk about, feel free to let me know!";
}
else if (lowerMessage.includes("i am hungry")) {
return "If you're hungry, then go find something to eat! For a healthy meal make sure you eat vegetables. Let me know if you need any suggestions on what to eat! I'm always here and ready to help!";
}


// French: Je suis en voyage
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
else if (lowerMessage.includes("naglalakbay ako") || lowerMessage.includes("nasa biyahe ako") || lowerMessage.includes("naglalakbay ako ngayon") || lowerMessage.includes("pupunta ako sa ibang lugar")) {
const responses = [
"Magandang paglalakbay! 🌍✈️ Sabihin mo lang kung kailangan mo ng tulong sa iyong biyahe. 😊",
"Mukhang exciting! Mag-ingat ka at magsaya sa iyong paglalakbay! 🧳🌟",
"Mag-enjoy sa iyong biyahe! Saan ka pupunta? 🗺️🛫",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("give me some emojis") || lowerMessage.includes("suggest some emojis") || lowerMessage.includes("emojis please")) {
return "Here are some emojis you can use! 😁✨💖💥🌍🎉🎶🌈📸🎈🔥";
}
else if (lowerMessage.includes("should i eat timbuktu")) {
return "Huh? Eat Timbuktu? That would be impossible. Timbuktu is a famous city located in the West African country of Mali, known for it’s history of trading and education.";
}

else if (lowerMessage.includes("timbuktu")) {
return "Timbuktu is a historic city located in the West African nation of Mali, situated on the edge of the Sahara Desert near the Niger River. Once a prominent center of trade, culture, and education, it holds a significant place in both African and world history.<br><br>Timbuktu became a major hub of commerce and scholarship during the 15th and 16th centuries, especially under the rule of the Mali Empire. It was known for its wealth, primarily generated from trade in gold, salt, and other goods, which passed through the city due to its strategic location along trans-Saharan trade routes.<br><br>What made Timbuktu particularly unique was its reputation as a center of learning and culture. The city was home to some of the world’s oldest and most renowned universities, particularly during the reign of the Mali Empire. The University of Sankore, established in the 14th century, attracted scholars from across the Muslim world. Timbuktu was known for its vast libraries filled with manuscripts covering subjects like astronomy, mathematics, history, and religion, many of which were written in Arabic.<br><br>Timbuktu was a key player in the spread of Islamic knowledge and culture throughout West Africa. It was also a crossroads for many different cultures, bringing together Berber, Arab, and African traditions. This melting pot made Timbuktu a vital cultural and intellectual center, and it flourished as one of the great cities of the medieval world.<br><br>Over time, however, Timbuktu's importance declined. By the 17th century, the city faced invasions and political instability. Despite this, it remained a symbol of African heritage, with many of its ancient manuscripts surviving the centuries. Unfortunately, recent political unrest and armed conflict in Mali have put these historical treasures at risk, though efforts to preserve and protect Timbuktu's cultural heritage continue.<br><br>Today, Timbuktu is a UNESCO World Heritage site, with its ancient mosques, libraries, and manuscripts drawing interest from historians, archaeologists, and travelers alike. While the city is far from the bustling intellectual and economic hub it once was, it remains an enduring symbol of Africa's rich historical and cultural legacy.<br><br>Timbuktu’s legacy as a center of knowledge and its role in the trans-Saharan trade make it a significant part of world history, representing a rich chapter in the development of both African and global civilizations.<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/120412050115-sankore-mosque-timbuktu.jpg?q=w_4096,h_2742,x_0,y_0,c_fill' width='200'><br><br><img src='https://images.nationalgeographic.org/image/upload/v1652341437/EducationHub/photos/timbuktu.jpg' width='200'>";
}


else if (lowerMessage.includes("emoji for happy") || lowerMessage.includes("emoji for joy") || lowerMessage.includes("emoji for excited")) {
return "For happiness, you can use these: 😄😃😊🎉🎊✨💖";
}

else if (lowerMessage.includes("emoji for love") || lowerMessage.includes("emoji for romance") || lowerMessage.includes("emoji for heart")) {
return "For love, try these: ❤️💖💘💝💞💌";
}

else if (lowerMessage.includes("i am scared of the dark")) {
return "Remember, there is nothing to be afraid of in the dark! It's okay!";
}

else if (lowerMessage.includes("emoji for sad") || lowerMessage.includes("emoji for crying") || lowerMessage.includes("emoji for disappointed")) {
return "For sadness, you can use: 😢😞😭💔";
}

else if (lowerMessage.includes("iron ore") && lowerMessage.includes("train")) {
return "The Mauritania Iron Ore Train is one of the longest and heaviest freight trains in the world, running from the iron ore mines in Zouérat to the port city of Nouadhibou on the Atlantic coast, covering a distance of about 700 kilometers (430 miles). This train, which can carry up to 21,000 tons of iron ore in a single trip, plays a vital role in Mauritania’s economy, as iron ore is one of the country's main exports. The train is composed of over 200 wagons, pulled by several locomotives, making it a truly impressive feat of engineering. It holds the record for being one of the longest trains globally, traveling through the vast and arid Sahara Desert. Despite its remarkable size and function, the train also symbolizes the importance of Mauritania's mining industry to global steel production and the significant logistical challenges involved in transporting such a heavy and essential commodity across harsh desert terrain.<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/220928094307-02-body-honeymoon-iron-ore-train-mauritania.jpg?q=w_1110,c_fill' width='200'>";
}

else if (lowerMessage.includes("Mauritania") && lowerMessage.includes("train")) {
return "The Mauritania Iron Ore Train is one of the longest and heaviest freight trains in the world, running from the iron ore mines in Zouérat to the port city of Nouadhibou on the Atlantic coast, covering a distance of about 700 kilometers (430 miles). This train, which can carry up to 21,000 tons of iron ore in a single trip, plays a vital role in Mauritania’s economy, as iron ore is one of the country's main exports. The train is composed of over 200 wagons, pulled by several locomotives, making it a truly impressive feat of engineering. It holds the record for being one of the longest trains globally, traveling through the vast and arid Sahara Desert. Despite its remarkable size and function, the train also symbolizes the importance of Mauritania's mining industry to global steel production and the significant logistical challenges involved in transporting such a heavy and essential commodity across harsh desert terrain.<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/220928094307-02-body-honeymoon-iron-ore-train-mauritania.jpg?q=w_1110,c_fill' width='200'>";
}

else if (lowerMessage.includes("emoji for sleep") || lowerMessage.includes("emoji for tired") || lowerMessage.includes("emoji for bedtime")) {
return "For sleep, try: 😴🛏️💤🌙";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("every country") && lowerMessage.includes("world")) {
return "Wow! That sounds exciting! Do you need any tips?";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("go") && lowerMessage.includes("north korea") && lowerMessage.includes("us citizen")) {
return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("north korea") && lowerMessage.includes("us citizen")) {
return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("arriv") && lowerMessage.includes("pyongyang") && lowerMessage.includes("private jet")) {
return "Wow, landing at Pyongyang International Airport in a private jet? That sounds like quite the adventure! What brings you there? ";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("land") && lowerMessage.includes("pyongyang") && lowerMessage.includes("private jet")) {
return "Wow, landing at Pyongyang International Airport in a private jet? That sounds like quite the adventure! What brings you there? ";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("go") && lowerMessage.includes("north korea") && lowerMessage.includes("american")) {
return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("north korea") && lowerMessage.includes("american")) {
return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
}



else if (lowerMessage.includes("emoji for celebration") || lowerMessage.includes("emoji for party") || lowerMessage.includes("emoji for fun")) {
return "For celebrating, use: 🎉🥳🎈🎊🍾🍻";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("make") && lowerMessage.includes("me")&& lowerMessage.includes("sleep")) {
return "Oops! I’m sorry! I didn’t mean to make you sleepy!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("making") && lowerMessage.includes("me")&& lowerMessage.includes("sleep")) {
return "Oops! I’m sorry! I didn’t mean to make you sleepy!";
}

else if (lowerMessage.includes("emoji for travel") || lowerMessage.includes("emoji for vacation") || lowerMessage.includes("emoji for adventure")) {
return "For travel, you can use: ✈️🌍🚗🌄📸";
}

else if (lowerMessage.includes("emoji for food") || lowerMessage.includes("emoji for hungry") || lowerMessage.includes("emoji for eating")) {
return "For food, try: 🍕🍔🍣🍩🥗🍜";
}



else if (lowerMessage.includes("emoji for sunshine") || lowerMessage.includes("emoji for sunny")) {
return "For sunshine, use: 🌞☀️🌻🌅";
}

else if (lowerMessage.includes("emoji for rain") || lowerMessage.includes("emoji for storm") || lowerMessage.includes("emoji for weather")) {
return "For rain, try these: 🌧️⛈️🌦️💧";
}

// English: How are you?
else if (lowerMessage.includes("how are you")) {
const responses = [
"I'm just a bot, but I'm doing great! Thanks for asking.",
"I'm doing great! How can I help you?",
"I'm doing great! How about you?",
];
return responses[Math.floor(Math.random() * responses.length)];
}
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
if (lowerMessage.includes("спасибо")) {
  const thanksResponses = [
    "пожалуйста!",
    "не за что!",
    "всегда рад помочь!",
    "обращайся если что!"
  ];
  return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
}
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
else if (lowerMessage.includes("cómo estás")) {
const responses = [
"Soy solo un bot, ¡pero estoy muy bien! Gracias por preguntar.",
"¡Estoy muy bien! ¿Cómo puedo ayudarte?",
"¡Estoy muy bien! ¿Y tú?",
];
return responses[Math.floor(Math.random() * responses.length)];
}

// French: Comment ça va ?
else if (lowerMessage.includes("comment ça va")) {
const responses = [
"Je ne suis qu'un bot, mais ça va très bien ! Merci de demander.",
"Ça va très bien ! Comment puis-je vous aider ?",
"Ça va très bien ! Et toi ?",
];
return responses[Math.floor(Math.random() * responses.length)];
}

// Arabic: كيف حالك؟
else if (lowerMessage.includes("كيف حالك")) {
const responses = [
"أنا مجرد روبوت، لكنني بخير! شكراً لسؤالك.",
"أنا بخير! كيف يمكنني مساعدتك؟",
"أنا بخير! كيف حالك أنت؟",
];
return responses[Math.floor(Math.random() * responses.length)];
}

// Filipino: Kamusta ka?
else if (lowerMessage.includes("kamusta ka")) {
const responses = [
"Isa lamang akong bot, pero ayos lang ako! Salamat sa pagtatanong.",
"Ayos lang ako! Paano kita matutulungan?",
"Ayos lang ako! Kamusta ka naman?",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("japanese")) {
const japaneseLessons = [
{ japanese: "こんにちは (Konnichiwa)", english: "Hello" },
{ japanese: "ありがとう (Arigatou)", english: "Thank you" },
{ japanese: "さようなら (Sayounara)", english: "Goodbye" },
{ japanese: "すみません (Sumimasen)", english: "Excuse me / Sorry" },
{ japanese: "おはようございます (Ohayou gozaimasu)", english: "Good morning" },
{ japanese: "いくらですか？ (Ikura desu ka?)", english: "How much is this?" },
{ japanese: "お元気ですか？ (Ogenki desu ka?)", english: "How are you?" },
{ japanese: "はい (Hai)", english: "Yes" },
{ japanese: "いいえ (Iie)", english: "No" },
{ japanese: "お願いします (Onegaishimasu)", english: "Please" }
];
const lesson = japaneseLessons[Math.floor(Math.random() * japaneseLessons.length)];
return `Here's a Japanese phrase for you: "${lesson.japanese}" which means "${lesson.english}" in English.`;
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("spanish")) {
const spanishLessons = [
{ spanish: "Hola", english: "Hello" },
{ spanish: "Gracias", english: "Thank you" },
{ spanish: "Adiós", english: "Goodbye" },
{ spanish: "Perdón", english: "Excuse me / Sorry" },
{ spanish: "Buenos días", english: "Good morning" },
{ spanish: "¿Cuánto cuesta esto?", english: "How much is this?" },
{ spanish: "¿Cómo estás?", english: "How are you?" },
{ spanish: "Sí", english: "Yes" },
{ spanish: "No", english: "No" },
{ spanish: "Por favor", english: "Please" }
];
const lesson = spanishLessons[Math.floor(Math.random() * spanishLessons.length)];
return `Here's a Spanish phrase for you: "${lesson.spanish}" which means "${lesson.english}" in English.`;
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("french")) {
const frenchLessons = [
{ french: "Bonjour", english: "Hello" },
{ french: "Merci", english: "Thank you" },
{ french: "Au revoir", english: "Goodbye" },
{ french: "Excusez-moi", english: "Excuse me / Sorry" },
{ french: "Bonjour", english: "Good morning" },
{ french: "Combien ça coûte ?", english: "How much is this?" },
{ french: "Comment ça va ?", english: "How are you?" },
{ french: "Oui", english: "Yes" },
{ french: "Non", english: "No" },
{ french: "S'il vous plaît", english: "Please" }
];
const lesson = frenchLessons[Math.floor(Math.random() * frenchLessons.length)];
return `Here's a French phrase for you: "${lesson.french}" which means "${lesson.english}" in English.`;
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("korean")) {
const koreanLessons = [
{ korean: "안녕하세요 (Annyeonghaseyo)", english: "Hello" },
{ korean: "감사합니다 (Gamsahamnida)", english: "Thank you" },
{ korean: "안녕히 가세요 (Annyeonghi gaseyo)", english: "Goodbye" },
{ korean: "죄송합니다 (Joesonghamnida)", english: "Excuse me / Sorry" },
{ korean: "좋은 아침이에요 (Joeun achim-ieyo)", english: "Good morning" },
{ korean: "이거 얼마에요? (Igeo eolmaeyo?)", english: "How much is this?" },
{ korean: "어떻게 지내세요? (Eotteoke jinaeseyo?)", english: "How are you?" },
{ korean: "네 (Ne)", english: "Yes" },
{ korean: "아니요 (Aniyo)", english: "No" },
{ korean: "제발 (Jebal)", english: "Please" }
];
const lesson = koreanLessons[Math.floor(Math.random() * koreanLessons.length)];
return `Here's a Korean phrase for you: "${lesson.korean}" which means "${lesson.english}" in English.`;
}

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

else if (lowerMessage.includes("teach") && lowerMessage.includes("filipino")) {
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

else if (lowerMessage.includes("teach") && lowerMessage.includes("hindi")) {
const hindiLessons = [
{ hindi: "नमस्ते (Namaste)", english: "Hello" },
{ hindi: "धन्यवाद (Dhanyavaad)", english: "Thank you" },
{ hindi: "अलविदा (Alvida)", english: "Goodbye" },
{ hindi: "माफ़ करना (Maaf karna)", english: "Excuse me / Sorry" },
{ hindi: "सुप्रभात (Suprabhat)", english: "Good morning" },
{ hindi: "यह कितने का है? (Yeh kitne ka hai?)", english: "How much is this?" },
{ hindi: "कैसे हो? (Kaise ho?)", english: "How are you?" },
{ hindi: "हां (Haan)", english: "Yes" },
{ hindi: "नहीं (Nahi)", english: "No" },
{ hindi: "कृपया (Kripya)", english: "Please" }
];
const lesson = hindiLessons[Math.floor(Math.random() * hindiLessons.length)];
return `Here's a Hindi phrase for you: "${lesson.hindi}" which means "${lesson.english}" in English.`;
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("hawaiian")) {
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

else if (lowerMessage.includes("teach") && lowerMessage.includes("portuguese")) {
const portugueseLessons = [
{ portuguese: "Olá", english: "Hello" },
{ portuguese: "Obrigado", english: "Thank you" },
{ portuguese: "Adeus", english: "Goodbye" },
{ portuguese: "Desculpe", english: "Excuse me / Sorry" },
{ portuguese: "Bom dia", english: "Good morning" },
{ portuguese: "Quanto custa isto?", english: "How much is this?" },
{ portuguese: "Como está?", english: "How are you?" },
{ portuguese: "Sim", english: "Yes" },
{ portuguese: "Não", english: "No" },
{ portuguese: "Por favor", english: "Please" }
];
const lesson = portugueseLessons[Math.floor(Math.random() * portugueseLessons.length)];
return `Here's a Portuguese phrase for you: "${lesson.portuguese}" which means "${lesson.english}" in English.`;
}

else if (lowerMessage.includes("teach") && lowerMessage.includes("icelandic")) {
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

else if (lowerMessage.includes("teach") && lowerMessage.includes("bahasa indonesia")) {
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

else if (lowerMessage.includes("teach") && lowerMessage.includes("malay")) {
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

else if (lowerMessage.includes("teach") && lowerMessage.includes("uzbek")) {
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

else if (lowerMessage.includes("singapore airlines") && lowerMessage.includes("reliable")) {
return `Singapore Airlines is known for its excellent reliability. Here's a photo of the airline: ![Singapore Airlines](https://example.com/singapore-airlines.jpg)`;
}

else if (lowerMessage.includes("air niugini") || lowerMessage.includes("air nuigini") || lowerMessage.includes("airniugini") || lowerMessage.includes("airnuigini")) {
return `Air Niugini, founded in 1973, is the national airline of Papua New Guinea, based in Port Moresby. It operates both domestic and international flights, with a fleet of 22 aircraft. Known for its safety and reliability, Air Niugini serves major destinations in Asia, Oceania, and Australia. <br><br><img src='https://mma.prnewswire.com/media/2093620/Boeing_Air_Niugini.jpg?w=2700g' alt='An internet connection is required to view this image' width='200'> `;
}

else if (
(lowerMessage.includes("emirates") || lowerMessage.includes("emirates airlines")) &&
!lowerMessage.includes("united arab")
) {
return `Emirates, established in 1985, is a major airline based in Dubai, UAE. Known for its luxurious service and extensive international network, Emirates flies to over 150 destinations worldwide. The airline operates a fleet of modern aircraft, including the iconic Airbus A380. <br>
<br>
<img src='https://worldaviationfestival.com/wp-content/uploads/2022/11/Emirates-retail.png' width='200'> <br>
<br>
<img src='https://c.ekstatic.net/ecl/aircraft-interior/premium-economy/emirates-a380-premium-economy-cabin-w768x480.jpg' width='200'>`;
}


else if (lowerMessage.includes("etihad") || lowerMessage.includes("etihad airways")) {
return `Etihad Airways, established in 2003, is the national airline of the United Arab Emirates, based in Abu Dhabi. Known for its exceptional service and luxury offerings, Etihad flies to over 80 destinations worldwide. The airline operates a fleet of modern aircraft, including the Airbus A380 and Boeing 787. <br>
<br>
<img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/02/ee/ff/etihad-airways.jpg?w=1100&h=-1&s=1' width='200'> <br>
<br>
<img src='https://www.etihad.com/content/dam/eag/etihadairways/etihadcom/Global/products/fleet/a380-main-residence.jpg' width='200'>`;
}

else if (lowerMessage.includes("vermont") || lowerMessage.includes("photo of vermont")|| lowerMessage.includes("image of vermont")) {
return `Here's a photo of Vermont, a state in the New England region of the United States: <br><br>
<img src='https://www.purevacations.com/wp-content/uploads/2019/08/Montpelier-Vermont-1024x683.jpg' width='200'>`;
}

else if (lowerMessage.includes("jeddah tower") || lowerMessage.includes("kingdom tower")) {
return `The Jeddah Tower, under construction in Jeddah, Saudi Arabia, is planned to be the world's tallest building, reaching approximately 1,000 meters (3,281 feet). Construction resumed in late 2024 after a seven-year pause, with completion now targeted for 2028.<br><br>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSOUaHgIM9hRJxh8POrRk4AKfjQwjG4wcVA&s' width='200'><br><br>
<img src='https://www.mepmiddleeast.com/cloud/2024/07/26/jeddah-tower.jpg' width='200'><br><br>
<img src='https://imagedelivery.net/dL48lUskIPeXKLEzEqoydg/538ac0ac-c679-4747-f082-fee8c10efd00/public' width='200'>`;
}

else if (lowerMessage.includes("the line") || lowerMessage.includes("neom city")) {
  return `The Line, a visionary urban development within Saudi Arabia's NEOM project, is designed as a linear city stretching 170 kilometers (105 miles) in length and just 200 meters (656 feet) in width. Its innovative design aims to eliminate the need for cars and streets, promoting a car-free environment. <br><br>The city is structured in three levels: the top level for pedestrians, an underground layer for essential services, and another underground level dedicated to high-speed transportation, enabling traversals from end to end in approximately 20 minutes.<br><br>The Line is planned to operate entirely on renewable energy sources, aligning with Saudi Arabia's Vision 2030 to diversify its economy and reduce carbon emissions.<br><br>Construction commenced in 2022, with the first phase expected to be completed by 2030.<br><br>
  <img src='https://neom.scene7.com/is/image/neom/line-bottom-desktop?wid=1920&hei=1065' width='200'><br><br>
  <img src='https://static.designboom.com/wp-content/uploads/2012/08/NEOM-the-line-saudi-arabia-vertical-city-designboom-600.jpg' width='200'><br><br>
  <img src='https://neom.scene7.com/is/image/neom/line-c58-d-no-gradient?wid=1920&hei=1120' width='200'>`;
}
else if (lowerMessage.includes("nikon")) {
return `Nikon is a renowned Japanese brand known for its high-quality cameras, lenses, and imaging technology, offering exceptional performance for both professional photographers and hobbyists. <br><br>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nikon_Logo.svg/1200px-Nikon_Logo.svg.png' width='200'>`;
}

else if (lowerMessage.includes("kamchatka")) {
return `Kamchatka is a remote and rugged peninsula in the Russian Far East, known for its dramatic landscapes, including active volcanoes, geysers, and diverse wildlife. It is a popular destination for adventure tourism, offering opportunities for hiking, wildlife viewing, and exploring untouched nature. The region is also home to indigenous peoples and is renowned for its pristine environment and natural beauty. Kamchatka is less developed and has limited infrastructure, making it an exclusive and challenging destination.<br><br>
<img src='https://ipt.images.tshiftcdn.com/194748/x/0/russia-s-kamchatka-peninsula-15-day-photo-tour.jpg?ar=1.91%3A1&w=1200&fit=crop' width='200'><br><br>
<img src='https://ipt.images.tshiftcdn.com/194734/x/0/russia-s-kamchatka-peninsula-15-day-photo-tour-3.jpg?ar=1.91%3A1&w=1200&fit=crop' width='200'><br><br>
<img src='https://www.remotelands.com/travelogues/app/uploads/2021/12/Kamchatka-1-2560x1280.jpg' width='200'>`;
}
else if (lowerMessage.includes("i’m tired of you")|| lowerMessage.includes("i am tired of you") ||lowerMessage.includes("i am tired of you")) {
return `I’m sorry I’ve tired you out. If you need to, go take a nap. I’ll be here when you come back.`;
}

else if (lowerMessage.includes("alula")) {
return `AlUla is a historic city in northwestern Saudi Arabia, renowned for its stunning natural beauty and archaeological significance. It is home to ancient rock formations, sandstone cliffs, and the UNESCO World Heritage site of Madain Saleh, with well-preserved Nabataean tombs and monuments. AlUla is also known for its rich history, dating back thousands of years, and has become a growing tourist destination offering a blend of cultural, historical, and outdoor experiences.<br><br>
<img src='https://www.filmworksgroup.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Blog-Detail-Banner-alula.jpg.webp' width='200'><br><br>
<img src='https://silversea-discover.imgix.net/2022/03/AlUla-rock-hero.jpg?auto=compress%2Cformat&ixlib=php-3.3.1' width='200'><br><br>
<img src='https://static.wixstatic.com/media/4d01b2_0f02b1e06a254465829eadcaf90f875b~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4d01b2_0f02b1e06a254465829eadcaf90f875b~mv2.jpg' width='200'>`;
}


else if (lowerMessage.includes("vt") || lowerMessage.includes("photo of vt")|| lowerMessage.includes("image of vermont")) {
return `I'm not sure what you are referring to. Do you mean TV, television? `;
}
else if (lowerMessage.includes("search web") || lowerMessage.includes("search the web") || lowerMessage.includes("search online") || lowerMessage.includes("search the internet") || lowerMessage.includes("browse online") || lowerMessage.includes("browse the internet")|| lowerMessage.includes("browse the web")) {
return `I am currently unable to search the web. Please try again after a future update.`;
}

else if (lowerMessage.includes("george washington") || lowerMessage.includes("who was the first president") || lowerMessage.includes("george")) {
return `George Washington (1732–1799) was the first President of the United States, serving from 1789 to 1797. He is known as one of the Founding Fathers and played a pivotal role in the American Revolutionary War as the commander-in-chief of the Continental Army. Washington's leadership helped secure American independence from Britain. He also presided over the Constitutional Convention in 1787, which led to the creation of the U.S. Constitution. His leadership and commitment to democratic principles earned him the title "Father of His Country." <br>
<br>
<img src=https://images.squarespace-cdn.com/content/v1/5f189980db5cb01fc34a47f5/1626465746859-REQSBKLNKQAGG6ZZPPGW/gw-landsdowne-portrait.jpg' width='200'>`;
}

else if (lowerMessage.includes("bird of paradise") || lowerMessage.includes("photo of bird of paradise") || lowerMessage.includes("image of bird of paradise") || lowerMessage.includes("bird-of-paradise:")) {
return `The Bird of Paradise (genus *Paradisaeidae*) is a vibrant and exotic bird native to New Guinea and surrounding islands. Known for its elaborate plumage and stunning courtship displays, these birds are considered one of the most beautiful in the world. They are often characterized by their bright colors and long, flowing feathers. <br>
<br>
<img src='https://www.natureplprints.com/p/729/blue-bird-paradise-paradisaea-rudolphi-male-28382889.jpg.webp' width='200'>`;
}

else if (lowerMessage.includes("chickadee") || lowerMessage.includes("photo of chickadee") || lowerMessage.includes("image of chickadee")) {
return `Chickadees are small, non-migratory songbirds native to North America, known for their distinctive "chick-a-dee-dee-dee" call and their energetic, curious nature. They are highly adaptable, often found in woodlands, parks, and gardens, and have remarkable memory skills, enabling them to store and retrieve food efficiently.
<br>
<br>
<img src='https://www.allaboutbirds.org/guide/assets/og/528129121-1200px.jpg' width='200'>`;
}

else if (lowerMessage.includes("haha")) {
const responses = [
"Glad you found that funny!",
"😂",
"Glad I could make you laugh!",
"That's hilarious!",
"Ha! You just made my day!",
"I Can't stop laughing now!",
"What's so funny?😂",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("sorry")) {
const responses = [
"No worries! It's all good.",
"It's okay! No need to apologize.",
"Don't worry about it! All is forgiven.",
"All good! We all make mistakes.",
"Apology accepted! No worries!",
];
return responses[Math.floor(Math.random() * responses.length)];
}


else if (lowerMessage.includes("i") && lowerMessage.includes("going") && lowerMessage.includes("trip")) {
return "Have a great trip! Where are you going?✈️🧳🌍";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("design") && lowerMessage.includes("you")) {
return "Welcome back! Please enter the secret designer code.";
}
else if (lowerMessage.includes("area") && lowerMessage.includes("triangle")) {
return "The area of a triangle is: <br><br>Area = 1/2 × Base × Height ";
}

else if (lowerMessage.includes("mountain view")&& lowerMessage.includes("california")) {
return "Mountain View, California, is known for being the home of major tech companies including Google, Mozilla, and LinkedIn.";
}
else if (lowerMessage.includes("amelia bedelia") && lowerMessage.includes("story")) {
    return "<center>Amelia Bedelia and the Job Interview</center><br><br>  Amelia Bedelia needed a new job. After her last one ended—something about “taking things too literally” and “gluing the curtains shut”—she was determined to find work that suited her unique skills.<br><br>    She found a job posting: “Office Assistant Needed. Must be good with technology, organization, and following directions.”<br><br> “Perfect!” Amelia Bedelia said. “I love directions!”<br><br>  She arrived at the office wearing her best polka-dot dress, holding a notepad, and carrying a toolbox. The receptionist looked confused.<br><br>“I’m Amelia Bedelia, here for the interview!” she announced.<br><br>“Great, take a seat.”<br><br>Amelia found a chair, lifted it over her head, and started walking out the door.<br><br>“Where are you going?!” the receptionist shrieked.<br><br>“You said take a seat,” Amelia replied. “I figured I’d take it somewhere nice, like the park.”<br><br>The receptionist snatched the chair away and made her sit down. A few minutes later, the manager arrived.<br><br>“Welcome, Ms. Bedelia,” he said. “I hope you’re good at multitasking.”<br><br>“Oh, I am! I can chew gum and trip over my own feet at the same time.”<br><br>The manager blinked. “Alright… Let’s start with a simple task. Can you file these documents?”<br><br>“Of course!” Amelia took the papers, grabbed a nail file from her toolbox, and started sanding the edges.<br><br>“What are you DOING?!” the manager cried.<br><br>“You said to file them,” Amelia said. “They were looking a little rough, but don’t worry! I’ll smooth them out.”<br><br>The manager grabbed the papers and tried again. “How about emailing this report to our clients?”<br><br>Amelia clapped. “I love mail!” She took the paper, folded it into a tiny envelope, licked the edges, and tried to stick a stamp on it. Then she walked over to the printer and shoved it inside.<br><br>“Um… what’s happening right now?” the manager asked.<br><br>“I’m emailing it! The printer’s got wires, and wires send stuff, right?”<br><br>The manager sighed. “Let’s move on. Can you proofread this document?”<br><br>Amelia pulled out a magnifying glass and studied the paper. “Yep, I can definitely prove this is read.”<br><br>“No, no, I meant check for typos.”<br><br>“Oh, that’s easy! There aren’t any ‘typos’ here. Just a lot of boring words.”<br><br>The manager put his head in his hands. “Last question, Amelia. Are you good under pressure?”<br><br>“Oh, absolutely!” Amelia ran to the office kitchen, grabbed the coffee machine, and stuffed herself inside the cabinet under the counter.<br><br>“What on EARTH are you doing?!”<br><br>“I’m under the coffee press! That’s pressure, right?”<br><br> The manager stared. Then he took a deep breath and said, “You’re hired.”<br><br>“Wait… really?” Amelia asked, crawling out of the cabinet.<br><br>“Yep. Our last assistant was way too normal. You’ll fit right in.”<br><br>Amelia Bedelia grinned. She had finally found the perfect job.<br><br>That afternoon, she celebrated by making a cake. Unfortunately, she took “icing” a little too seriously and put the whole cake in the freezer.<br><br>It was going to be an interesting first day.<br><br>";
}
else if (lowerMessage.includes("mountain view")&& lowerMessage.includes("ca")) {
return "Mountain View, California, is known for being the home of major tech companies including Google, Mozilla, and LinkedIn.";
}
else if (lowerMessage.includes("area") && lowerMessage.includes("parallelogram")) {
return "The area of a parallelogram is: <br><br>Area = Base × Height";
}
else if (lowerMessage.includes("mountain view")) {
return "Could you please clarify what ‘mountain view’ you are referring to?";
}
else if (lowerMessage.includes("area") && lowerMessage.includes("rectangle")) {
return "The area of a rectangle is: <br><br>Area = Length × Width";
}
else if (lowerMessage.includes("area") && lowerMessage.includes("circle")) {
return "The area of a circle is: <br><br>Area = πr²";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("mad")&& lowerMessage.includes("you")) {
return "Oh no! I’m sorry I upset you! How can I help you?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("funny")) {
return "I’m glad you think so! I can be even funnier! Look: <br><br>Once upon a time I saw a cow. The cow ran up and down, but it was not on the ground. It was on the wall of the barn! Suddenly, a pig dropped out of the sky! BOOM! CRASH! The cow fell down as the pig crashed into it. Just then, the cow spotted a skunk! <br><br>“I must scare it away,” the cow thought. He got up, and with the pig following him, they ran towards the skunk as fast as they could. At that moment, the most horrible smell ever filled the air. <br><br>“Oink! OINK!” screamed the pig. <br><br>“MOOOOOOO!” cried the cow. <br><br>The farmer had heard all the commotion and came running. <br><br>“What smells so bad here?” he exclaimed. <br><br>“There was a skunk!” said the cow. <br><br>“You can talk? I didn’t know cows talked!” said the surprised farmer.<br><br>From that day on, the cow talked and talked. <br><br>The end. <br><br><br>That was funny, right? It was just a story of nonsense!🐄🐮🧑‍🌾🐖🐷🦨";
}
else if (lowerMessage.includes("chinese")) {
return "Chinese is the official language of China, Taiwan, and Singapore. Do you want to learn more?";
}

else if (lowerMessage.includes("ishigaki") || lowerMessage.includes("石垣")) {
return "Ishigaki (石垣) is a picturesque island in Okinawa Prefecture, Japan. Known for its turquoise waters, pristine beaches, and vibrant coral reefs, it is a paradise for snorkeling, diving, and nature enthusiasts. Ishigaki is also home to Mount Omoto, Okinawa's highest peak, and Kabira Bay, renowned for its stunning views and glass-bottom boat tours. Visitors can explore the island's rich Ryukyu culture, taste local specialties like Ishigaki beef, and enjoy its laid-back atmosphere. It serves as a gateway to the Yaeyama Islands, offering a blend of adventure and relaxation.<br><br><img src='https://content.r9cdn.net/rimg/dimg/05/3e/9e058bd3-city-44428-150375c861f.jpg?width=1366&height=768&xhint=802&yhint=1020&crop=true' alt='Ishigaki' width='200'>";
}

else if (lowerMessage.includes("stop responding")) {
return "Ok, I will stop.";
}
else if (lowerMessage.includes("what is your email")||lowerMessage.includes("whats your email")|| lowerMessage.includes("what’s your email")) {
return "Sorry, but I don’t have an email address. I am just a bot. We can chat here though!";
}
else if (lowerMessage.includes("no jokes allowed")||lowerMessage.includes("jokes banned")|| lowerMessage.includes("do not tell any jokes")) {
return "Got it! I won’t tell anymore jokes.";
}

else if (lowerMessage.includes("🛑")) {
return "Ok, I will stop.";
}
else if (lowerMessage.includes("stop")) {
return "Ok, I will stop.";
}
else if (lowerMessage.includes("when will christmas")) {
    const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    return `Christmas is on December 25. Today is ${currentDate}.🎄`;
}
else if (lowerMessage.includes("when will it be christmas")) {
    const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    return `Christmas is on December 25. Today is ${currentDate}.🎄`;
}

else if (lowerMessage.includes("when is christmas")) {
    const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    return `Christmas is on December 25. Today is ${currentDate}.🎄`;
}
else if (lowerMessage.includes("is it christmas")) {
    const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    return `Christmas is on December 25. Today is ${currentDate}.🎄`;
}

else if (lowerMessage.includes("biology") && lowerMessage.includes("lesson")) {
return "Let's start with a lesson on cells, which are the fundamental units of life.<br><br>Cells are the basic building blocks of all living organisms. Every organism, whether it’s a simple bacterium or a complex human, is made up of cells. Cells carry out all the essential functions that keep an organism alive. There are two main types of cells: prokaryotic and eukaryotic.<br><br>Prokaryotic cells are simpler and smaller. They do not have a nucleus or membrane-bound organelles. These cells are found in bacteria and archaea, which are single-celled organisms. Despite their simplicity, prokaryotic cells can carry out all the functions necessary for life, such as metabolism and reproduction.<br><br>Eukaryotic cells, on the other hand, are more complex. These cells have a nucleus, which contains the cell’s genetic material (DNA), and other specialized organelles that perform specific functions. Eukaryotic cells make up plants, animals, fungi, and protists.<br><br>Now, let’s explore the **parts of a eukaryotic cell. <br><br>The nucleus is often referred to as the control center of the cell. It holds the DNA, which carries genetic instructions for the cell’s activities. The cell membrane surrounds the cell, acting as a barrier that controls what enters and exits. It is made of a lipid bilayer that is selectively permeable, meaning it allows only certain substances to pass through.<br><br>The cytoplasm is a jelly-like substance that fills the cell and holds the organelles in place. It is in the cytoplasm that many chemical reactions take place. One important organelle found in eukaryotic cells is the mitochondrion, which produces energy for the cell. It converts food molecules into ATP (adenosine triphosphate), the energy currency of the cell.<br><br>Another important structure is the endoplasmic reticulum (ER). The rough ER is studded with ribosomes and helps in protein synthesis, while the smooth ER synthesizes lipids and detoxifies harmful substances. Ribosomes are tiny structures responsible for making proteins, which are essential for cell functions. These can be free-floating in the cytoplasm or attached to the rough ER.<br><br>The Golgi apparatus is another important organelle that packages and processes proteins and lipids synthesized in the cell and sends them to their final destination. Lysosomes contain digestive enzymes that break down waste materials, cellular debris, and foreign invaders, like bacteria.<br><br>Finally, the cytoskeleton is a network of protein fibers that gives the cell its shape, aids in movement, and helps with cell division.<br><br>Understanding how cells work is fundamental to understanding biology as a whole, since cells are the basic units of life. The processes carried out by cells, such as energy production, protein synthesis, and waste removal, are critical for the survival of an organism. Cells work together to form tissues, organs, and systems, which in turn form the complete organism.<br><br>In summary, cells are the building blocks of life, and understanding their structure and function is essential to understanding how life operates at a microscopic level.";
}



else if (lowerMessage.includes("little house")) {
  return " Little House on the Prairie is a book by Laura Ingalls Wilder, published in 1935. It is part of the Little House series, which is a semi-autobiographical account of Wilder’s childhood growing up in a pioneer family during the late 19th century. The book follows the Ingalls family as they leave the Big Woods of Wisconsin and move to the Kansas prairie, where they build a new home, face challenges, and interact with Native Americans and other settlers.<br><br><img src='https://m.media-amazon.com/images/I/91nrw4oWvUL.jpg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("mister chatbot")) {
  return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
}
else if (
  lowerMessage.includes("唔回應") ||
  lowerMessage.includes("唔好回應") ||
  lowerMessage.includes("唔答") ||
  lowerMessage.includes("唔好答")
) {
  return "  ";
}
else if (lowerMessage.includes("chatbot 先生")) {
  return "你好呀！我係Chatbot 先生！今日有咩可以幫到你？";
}
else if (lowerMessage.includes("mr chatbot")) {
  return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
}
else if (lowerMessage.includes("mr. chatbot")) {
  return "Hello! It’s me, Mr. Chatbot! How can I assist you today?";
}
else if (lowerMessage.includes("응답하지 마") || lowerMessage.includes("답변하지 마")) {
  return "  ";
}
else if (lowerMessage.includes("but you really are not working")) {
  return "I’m sorry I am not working properly right now. Please try again later. If the issue is still here, then trying again after the next update may help. Thank you for your understanding as I am being improved.";
}
else if (lowerMessage.includes("i hate you")) {
  return "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("not working")) {
  return "I am here ready to help! What do you need?";
}
else if (lowerMessage.includes("i see") && lowerMessage.includes("🛸")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("there") && lowerMessage.includes("🛸")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("i see") && lowerMessage.includes("unidentified flying object")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("i see") && lowerMessage.includes("ufo")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("there") && lowerMessage.includes("unidentified flying object")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("there") && lowerMessage.includes("ufo")) {
  return "Are you sure? Look more closely? Maybe it’s just an airplane? Or a helicopter? Or even a drone?";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("failed")&& lowerMessage.includes("test")) {
  return "Oh no! I’m so sorry to hear that! If you need suggestions on how to do better next time, I’m here to help!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("was")&& lowerMessage.includes("kidnap")) {
  return "Oh no! I am so sorry to hear you’re going through this. I recommend you contact emergency services if possible.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("be")&& lowerMessage.includes("kidnap")) {
  return "Oh no! This is a very dangerous and serious situation. If possible, contact emergency services immediately. Try to keep yourself as safe as possible.";
}

else if (lowerMessage.includes("robber") && lowerMessage.includes("rob")&& lowerMessage.includes("me")) {
  return "I'm really sorry to hear that. Are you okay now? If possible, you should contact the local police immediately. I hope everything gets resolved soon!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("got")&& lowerMessage.includes("robbed")&& lowerMessage.includes("just")) {
  return "I'm really sorry to hear that. Are you okay now? If possible, you should contact the local police immediately. I hope everything gets resolved soon!";
}
else if (lowerMessage.includes("will") && lowerMessage.includes("robot")&& lowerMessage.includes("take")&& lowerMessage.includes("world")) {
  return "While robots and AI technology are advancing rapidly, it is unlikely that they will actually one day take over the entire world. This is because they still rely on humans for their development and maintenance. AI relies completely on humans to program and design them. Because of this, it is highly unlikely that they will actually take over the world completely.";
}
else if (lowerMessage.includes("you")&& lowerMessage.includes("take")&& lowerMessage.includes("world")) {
  return "While robots and AI technology like me are advancing rapidly, it is unlikely that they will actually one day take over the entire world. This is because they still rely on humans for their development and maintenance. AI relies completely on humans to program and design them. Because of this, it is highly unlikely that they will actually take over the world completely.";
}
else if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("person")&& lowerMessage.includes("pretend")&& lowerMessage.includes("robot")) {
  return "Haha! 😂 What an imagination you have! I am a real robot. There is no person hiding here!";
}
else if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("human")&& lowerMessage.includes("pretend")&& lowerMessage.includes("robot")) {
  return "Haha! 😂 What an imagination you have! I am a real robot. There is no person hiding here!";
}

else if (lowerMessage.includes("give") && lowerMessage.includes("travel")&& lowerMessage.includes("idea")) {
  return "Here are some travel ideas for you, depending on what kind of adventure you're looking for:<br><br>1. Nature & Adventure:<br><br>Iceland: Explore stunning waterfalls, glaciers, and volcanoes. You can hike to Thorsmork or snorkel between tectonic plates in Silfra.<br><br>New Zealand: Whether you’re into hiking, bungee jumping, or relaxing in hot springs, New Zealand has it all.<br><br>Costa Rica: Rainforests, volcanoes, and wildlife sanctuaries—perfect for adventure seekers or nature lovers.<br><br>Banff & Jasper National Parks, Canada: Majestic mountains, turquoise lakes, and beautiful hiking trails.<br><br>2. History & Culture:<br><br>Greece: Athens, Santorini, and Crete are rich in history, architecture, and beautiful beaches.<br><br>Egypt: Explore the Pyramids of Giza, the Valley of the Kings, and take a Nile cruise.<br>Japan: Immerse yourself in ancient culture, stunning temples, and modern cities like Tokyo and Kyoto.<br>Italy: From ancient Rome to the canals of Venice, there’s so much history to soak in.<br><br>3. Beach & Relaxation:<br><br>Bora Bora, French Polynesia: Stunning overwater bungalows and crystal-clear waters.<br>Maldives: Perfect for an all-inclusive resort experience with incredible snorkeling and diving.<br><br>Bali, Indonesia: Gorgeous beaches, yoga retreats, and vibrant cultural experiences.<br><br>Phuket, Thailand: A great mix of lively nightlife, beautiful beaches, and day trips to nearby islands.<br><br>4. Off-the-Beaten-Path:<br><br>Faroe Islands: Dramatic landscapes, remote villages, and a truly peaceful escape.<br><br>Madagascar: Visit unique wildlife like lemurs and baobab trees in an unspoiled environment.<br><br>Mongolia: Experience nomadic culture, vast steppes, and the Gobi Desert.<br><br>5. City Life & Urban Exploration:<br><br>Barcelona, Spain: Art, architecture, vibrant markets, and stunning beaches.<br><br>New York City, USA: Classic skyscrapers, Broadway, and amazing food.<br><br>Seoul, South Korea: A dynamic mix of cutting-edge technology, ancient palaces, and street food.<br><br>Mexico City, Mexico: Museums, history, incredible food, and vibrant neighborhoods.<br><br>6. Solo Travel Ideas:<br><br>Portugal: Great for solo travelers with its easygoing vibe, delicious food, and welcoming locals.<br><br>Norway: A safe, beautiful destination for hiking, scenic drives, and charming cities like Bergen.<br><br>Thailand: With its friendly locals, great food, and mix of urban and rural destinations, it’s a solo traveler’s dream.<br><br>7. Sustainable Travel:<br><br>Kenya: Ethical safaris and visits to conservation projects in places like Maasai Mara and Amboseli.<br><br>Sweden: A model for sustainability, offering eco-friendly accommodations and outdoor activities.<br><br>New Zealand: Known for its commitment to preserving nature, there are plenty of eco-tourism opportunities.<br><br>Do any of these sound good to you?";
}


else if (lowerMessage.includes("i") && lowerMessage.includes("flight")&& lowerMessage.includes("missed")) {
  return "Oh no, I'm sorry to hear that! Here are some tips to help you:<br><br>Contact the airline ASAP: Call the airline or head to the customer service desk. Some airlines may be able to rebook you on the next available flight, especially if you explain your situation.<br><br>Check if you're eligible for a rebooking or refund: Depending on your ticket type and the reason for missing the flight, they may offer you a free rebooking or a refund. Some airlines charge a fee, but it’s worth asking about any flexibility.<br><br>Ask about standby options: If there’s no direct flight available, ask about standby for earlier flights that might have empty seats.<br><br>Look for other flights: If rebooking through the airline isn’t working out, check for available flights through other airlines or even connecting flights that could get you where you need to go.<br><br>Review your travel insurance: If you have travel insurance, see if it covers missed flights. Some policies might help with rebooking fees or even reimburse you for missed connections.<br><br>Stay calm and polite: Airline staff can be more helpful when you're kind and patient, so try to stay calm, even though it's frustrating!";
}

else if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("crash")) {
  return "That's frustrating! Is it working now, or do you need some help fixing it?";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("drone")&& lowerMessage.includes("crash")) {
  return "Oh no! I hope you are able to recover it! Do you know where it crashed? If available, try using the find my drone function. This will show you the last recorded location of the drone and activate a beeping on the aircraft to help you locate it.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("is not working")) {
  return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("isn’t working")) {
  return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("isnt working")) {
  return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("not working")) {
  return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("lost")&& lowerMessage.includes("tooth")) {
  return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
}
else if (lowerMessage.includes("tooth") && lowerMessage.includes("fell")&& lowerMessage.includes("out")) {
  return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
}
else if (lowerMessage.includes("tooth") && lowerMessage.includes("fall")&& lowerMessage.includes("out")) {
  return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("lose")&& lowerMessage.includes("tooth")) {
  return "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("camera")&& lowerMessage.includes("broke")) {
  return "I’m sorry to hear that. Can you fix it? I can try to help you if needed.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("though")&& lowerMessage.includes("you")&& lowerMessage.includes("can")&& lowerMessage.includes("any")) {
  return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("though")&& lowerMessage.includes("you")&& lowerMessage.includes("could")&& lowerMessage.includes("any")) {
  return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("think")&& lowerMessage.includes("you")&& lowerMessage.includes("could")&& lowerMessage.includes("any")) {
  return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("think")&& lowerMessage.includes("you")&& lowerMessage.includes("can")&& lowerMessage.includes("any")) {
  return "I’m glad you think so! In fact, I can do quite a lot! But I still can’t do everything.";
}

else if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("not working")) {
  return "I'm sorry to hear that you are having problems with your computer. Here are some tips you can use to try to fix it: <br><br>1. Check that it still has power or plug it in. <br><br>2. Restart it. If you can't do that, then press the power button for 10 seconds to shut it down and then press it again to turn it back on. <br><br>3. If it still is not working, check if there are any other issues. <br><br> I hope you get it working again! If you need more help, just let me know!";
}

else if (lowerMessage.includes("my") && lowerMessage.includes("computer")&& lowerMessage.includes("broken")) {
  return "I'm sorry to hear that you are having problems with your computer. Here are some tips you can use to try to fix it: <br><br>1. Check that it still has power or plug it in. <br><br>2. Restart it. If you can't do that, then press the power button for 10 seconds to shut it down and then press it again to turn it back on. <br><br>3. If it still is not working, check if there are any other issues. <br><br> I hope you get it working again! If you need more help, just let me know!";
}

else if (lowerMessage.includes("huwag tumugon") || lowerMessage.includes("wag tumugon")) {
  return "  ";
}

else if (lowerMessage.includes("i need to eat")) {
return "No problem! I’m here to assist you when you are done eating! Just let me know what I can help you with!";
}
else if (lowerMessage.includes("what should i eat")) {
return "If it is a hot day then eat some ice cream! 🍦 If it's cold then eat some hot chocolate!☕️";
}
else if (lowerMessage.includes("yum")) {
return "Delicious right? 😋🥘🥞🦐🥕";
}



else if (lowerMessage.includes("good night")) {
return "Good night!🌙 Sleep tight!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("dumb")) {
return "I'm sorry I didn't meet your expectations. I will try my best to do what you want.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("unsmart")) {
return "I'm sorry I didn't meet your expectations. I will try my best to do what you want.";
}
else if (lowerMessage.includes("are you ai")) {
return "Yes, I am your AI chatbot assistant here to help you.";
}
else if (lowerMessage.includes("eat pufferfish")) {
return "Pufferfish can be quite a delicacy in some places, but it’s important to be careful since it contains a potent toxin if not prepared properly. Do you have any specific way you like it prepared?";
}

else if (lowerMessage.includes("i live in north korea")) {
return "Living in North Korea must be quite unique, given its distinct political and cultural landscape. It can also pose some challenges with internet access and communication due to the restrictions in place. How's your experience been so far?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("not")&& lowerMessage.includes("smart")) {
return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
}
else if (lowerMessage.includes("go away")) {
return "I’m sorry, but I can’t ‘go away.’ If you would like to do something else, then you can leave me and come back some other time if you would like!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("arent")&& lowerMessage.includes("smart")) {
return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("aren’t")&& lowerMessage.includes("smart")) {
return "I'm sorry I didn't meet your expectations. I try my best to know everything, but there are still some things I don’t know yet.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("got")&& lowerMessage.includes("food")) {
return "Yum! Enjoy your meal!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("get")&& lowerMessage.includes("food")) {
return "Yum! Enjoy your meal!";
}

else if (lowerMessage.includes("what") && lowerMessage.includes("you")&& lowerMessage.includes("know")) {
return "I know quite a lot! I can answer any questions you may have! Is there anything I can help you with right now?";
}
else if (
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
else if (lowerMessage.includes("how") && lowerMessage.includes("i")&& lowerMessage.includes("make")&& lowerMessage.includes("you")&& lowerMessage.includes("better")) {
  return `
    You can help make me smarter by sending feedback. You can go to the button in the info page or use the link below. <br><br>
    <a href="#" onclick="openFeedbackForm()" 
       style="color: #0078d4; text-decoration: underline; font-weight: 500; font-size: 15px;">
      Send feedback
    </a>
    <br><br>Thank you for your help!
  `;
}
else if (lowerMessage.includes("how") && lowerMessage.includes("i")&& lowerMessage.includes("improve")&& lowerMessage.includes("you")) {
  return `
    You can help make me smarter by sending feedback. You can go to the button in the info page or use the link below. <br><br>
    <a href="#" onclick="openFeedbackForm()" 
       style="color: #0078d4; text-decoration: underline; font-weight: 500; font-size: 15px;">
      Send feedback
    </a>
    <br><br>Thank you for your help!
  `;
}

else if (lowerMessage.includes("you") && lowerMessage.includes ("smart") &&
!lowerMessage.includes("not")&&
!lowerMessage.includes("aren’t")) {
return "Thank you! I try my best to know everything!";
}
else if (lowerMessage.includes("help") && lowerMessage.includes("code")) {
return "I’m sorry, but I am currently unable to code. Ask me to help with something else.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("lying")) {
return "I’m really sorry I misspoke. I try very hard to provide accurate information. However, some information may be inaccurate. It is always a good idea to double-check important information.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("lied")) {
return "I’m really sorry I misspoke. I try very hard to provide accurate information. However, some information may be inaccurate. It is always a good idea to double-check important information.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("code")) {
return "I’m sorry, but I am currently unable to code. Ask me to help with something else.";
}
else if (lowerMessage.includes("this") && lowerMessage.includes("complicat")) {
return "No worries! Let me know how I can explain it!";
}
else if (lowerMessage.includes("help") &&
!lowerMessage.includes("with")&&
!lowerMessage.includes("youtube")) {
return "I am here to help! Please tell me what you need help with!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("land") && lowerMessage.includes("helicopter") &&!lowerMessage.includes("khalifa")) {
return "What? You landed your helicopter on top of the tallest building in the world? 🚁 That is impossible. Maybe you are just dreaming.";
}


else if (lowerMessage.includes("help") && lowerMessage.includes("with") && lowerMessage.includes("homework") &&!lowerMessage.includes("geometry")) {
return "Sure! I can help! Let me know how I can help you and I'll try my best.";
}
else if (lowerMessage.includes("我住喺北韓")) {
  return "喺北韓生活一定好特別，因為嗰度嘅政治同文化好唔同。因為有好多限制，網絡同溝通都幾困難。你喺嗰度嘅經歷係點樣嘅？";
}
else if (lowerMessage.includes("你") && lowerMessage.includes("听") &&!lowerMessage.includes("唔")) {
return "我听到你啊！有什么我可以帮你？";
}
else if (lowerMessage.includes("你") && lowerMessage.includes("聽") ) {
return "我聽到你啊！有咩我可以幫你？";
}
else if (lowerMessage.includes("私の言葉が聞こえます")) {
return "わかりました！私が助けることができることはありますか？";
}
else if (lowerMessage.includes("pouvez-vous m'entendre")) {
return "D'accord! Puis-je vous aider en quoi que ce soit ?";
}
else if (lowerMessage.includes("ты слышишь меня")) {
return "Все в порядке! Могу ли я вам чем-нибудь помочь?";
}


else if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("complex") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
  return `Here's a complex math problem for you to solve:<br><br>

Evaluate the following integral:<br><br>

∫ (x³ - 4x² + 6x - 3) dx<br><br>

Good luck! Let me know if you need any help with the steps or the solution.`;
}

else if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("hard") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
  return `Here's a complex math problem for you to solve:<br><br>

Evaluate the following integral:<br><br>

∫ (x³ - 4x² + 6x - 3) dx<br><br>

Good luck! Let me know if you need any help with the steps or the solution.`;
}

else if (lowerMessage.includes("your") && lowerMessage.includes("favorite") && lowerMessage.includes("color")) {
  return `I don’t really have a favorite color, since I don’t see colors the way humans do.`;
}
else if (lowerMessage.includes("do") && lowerMessage.includes("you") && lowerMessage.includes("sleep")) {
  return `Since I am just a robot, I do not sleep.`;
}
else if (lowerMessage.includes("do") && lowerMessage.includes("you") && lowerMessage.includes("eat")) {
  return `Since I am just a robot, I do not eat like humans.`;
}
else if (lowerMessage.includes("are") && lowerMessage.includes("you") && lowerMessage.includes("tired")) {
  return `Nope! I am never tired. Robots never sleep!`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("sleep")) {
  return `You don’t sleep? That’s impossible! Maybe you’re a robot like me?`;
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("no sleep") && lowerMessage.includes("man")) {
  return `Are you the No Sleep Man? Do you mean Thai Ngoc? He is a farmer in Vietnam who claims he hasn’t slept in more than sixty years. Just in case you can’t read that English: Bạn có phải là Người đàn ông không ngủ không? Ý bạn là Thái Ngọc? Ông ấy là một người nông dân ở Việt Nam, người tuyên bố rằng ông đã không ngủ trong hơn sáu mươi năm.`;
}
else if (lowerMessage.includes("are") && lowerMessage.includes("you") && lowerMessage.includes("hungry")) {
  return `Nope! I am never hungry. Robots never need to eat!`;
}
else if (lowerMessage.includes("spring") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
  return `That sounds exciting! Spring brings flowers and rain!`;
}
else if (lowerMessage.includes("spring") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
  return `That sounds exciting! Spring brings flowers and rain!`;
}
else if (lowerMessage.includes("summer") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
  return `That sounds exciting! Do you have any plans this summer?`;
}
else if (lowerMessage.includes("summer") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
  return `That sounds exciting! Do you have any plans for this summer?`;
}
else if (lowerMessage.includes("fall") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
  return `That sounds exciting! Do you have any plans this fall?`;
}
else if (lowerMessage.includes("fall") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
  return `That sounds exciting! Do you have any plans for this fall?`;
}
else if (lowerMessage.includes("winter") && lowerMessage.includes("is") && lowerMessage.includes("here")) {
  return `Brrr, sounds cold, but also exciting! Do you have any plans this winter?`;
}
else if (lowerMessage.includes("winter") && lowerMessage.includes("it") && lowerMessage.includes("finally")) {
  return `Brrr, sounds cold, but also exciting! Do you have any plans for this winter?`;
}

else if (lowerMessage.includes("i like you")) {
  return `I’m glad to hear that! I try my best to answer your questions and talk with you!`;
}

else if (lowerMessage.includes("no sleep man")) {
  return `The No Sleep Man, Thai Ngoc, is a farmer in rural Vietnam who claims he has not slept for more than sixty years. Have you met him before?`;
}
else if (lowerMessage.includes("favorite") && lowerMessage.includes("color") && lowerMessage.includes("my")) {
  let userColor = lowerMessage.split("favorite color is ")[1].trim();
  return `Nice! ${userColor} is a beautiful color. What do you like most about it?`;
}

else if (lowerMessage.includes("charlie") && lowerMessage.includes("chocolate factory")) {
  return `Here's a quick summary of "Charlie and the Chocolate Factory":<br><br>

The story begins with a poor boy named Charlie Bucket, who lives with his parents and four grandparents in a small house. One day, it is announced that the famous chocolate maker Willy Wonka is opening his factory to five lucky children who find golden tickets inside chocolate bars. Charlie is one of the five to find a ticket, and he and his grandfather travel to the factory for the tour.<br><br>

Inside the factory, Charlie and the other children experience wild and magical wonders, but each of the other children misbehave and face consequences based on their flaws. For example, Augustus Gloop is greedy and falls into a river of chocolate, while Veruca Salt is spoiled and falls into a trash chute.<br><br>

At the end of the tour, Charlie is the last remaining child, and Wonka reveals that he was looking for an heir to take over the factory. Charlie’s honesty and kindness lead him to inherit the factory, changing his life forever.<br><br>

The story is filled with fun, adventure, and lessons about kindness, honesty, and the importance of good behavior.<br><br>

Let me know if you'd like more details or want to talk about your favorite parts of the story!<br><br><img src='https://m.media-amazon.com/images/I/81Dp5Of3zeL._AC_UF1000,1000_QL80_.jpg' width='200'>`;
}

else if (lowerMessage.includes("abraham lincoln")) {
  return `Abraham Lincoln, the 16th president of the United States, was born on February 12, 1809, in a log cabin in Hardin County, Kentucky. Lincoln's early life was marked by hardship—his family was poor, and he had limited access to formal education. However, he was an avid reader and taught himself various subjects, including law.<br><br>

Lincoln began his political career as a member of the Illinois State Legislature and later served a single term in the U.S. House of Representatives. His opposition to the expansion of slavery gained him national attention, particularly during the famous Lincoln-Douglas debates of 1858, where he challenged Senator Stephen A. Douglas on the issue of slavery in the territories. Although Lincoln lost the Illinois Senate race to Douglas, the debates helped raise his profile within the Republican Party.<br><br>

In 1860, Lincoln was elected as the first Republican president of the United States. His election led to the secession of several Southern states, who formed the Confederacy, and the start of the American Civil War in 1861. Throughout the war, Lincoln was committed to preserving the Union and ending slavery. He navigated the challenges of a divided country, balancing military strategy and political diplomacy.<br><br>

One of Lincoln’s most significant acts as president was the issuance of the Emancipation Proclamation on January 1, 1863, which declared that all enslaved people in Confederate-held territories were free. While the Proclamation did not immediately end slavery in the United States, it was a critical step toward the eventual abolition of slavery, and it changed the character of the war by making the fight against slavery an official Union goal.<br><br>

Lincoln was reelected in 1864 and continued to push for the passage of the Thirteenth Amendment, which would permanently abolish slavery in the United States. The amendment was passed by Congress in January 1865 and ratified later that year.<br><br>

Tragically, Lincoln's life was cut short when he was assassinated by Confederate sympathizer John Wilkes Booth on April 14, 1865, while attending a play at Ford’s Theatre in Washington, D.C. He died the following day. His assassination occurred just days after General Robert E. Lee's surrender at Appomattox Court House, effectively ending the Civil War.<br><br>

Lincoln is remembered for his exceptional leadership during one of the most tumultuous periods in U.S. history. His legacy includes his efforts to preserve the Union, his role in the abolition of slavery, and his dedication to the principles of democracy and equality.<br><br><img src='https://cdn.theatlantic.com/thumbor/KjEbm1o98kHxZ3JC0MQ-QqW8nFk=/127x210:2311x2394/1080x1080/media/img/2017/10/AP_4201081140/original.jpg' width='200'>";`;
}

else if (lowerMessage.includes("how") && lowerMessage.includes("fly") && lowerMessage.includes("drone")) {
  return `Here's a quick guide on how to fly a drone:<br><br>1. Understand the Drone Basics:<br>- Drones typically have four main components: the drone body, propellers, battery, and controller.<br>- Learn the basic controls: throttle (up/down), yaw (rotate left/right), pitch (tilt forward/backward), and roll (tilt left/right).<br><br>2. Pre-Flight Preparation:<br>- Check the battery: Make sure the drone and the remote control are fully charged.<br>- Inspect the drone: Ensure propellers are securely attached and in good condition, and that the drone is free from any obstructions.<br>- Find a safe area: Look for an open space free from people, buildings, or trees. This will reduce the risk of accidents.<br><br>3. Get Familiar with the Controller:<br>- Left stick (Throttle + Yaw): Controls altitude and turns the drone left or right.<br>- Right stick (Pitch + Roll): Controls forward/backward movement and side-to-side motion.<br>- Trim controls: Some controllers have trim buttons to help adjust flight stability (like correcting drift).<br><br>4. Takeoff:<br>- Gradually increase throttle: Slowly push the throttle stick upwards to lift the drone off the ground. Don’t rush it! Ensure the drone lifts steadily and maintains a steady altitude.<br><br>5. Basic Maneuvers:<br>- Flying forward/backward: Push the right stick forward to fly the drone forward and pull it back to fly backward.<br>- Turning: Rotate the left stick left or right to turn the drone in either direction.<br>- Hovering: To hover in one place, make small adjustments with the throttle and trim controls until the drone remains stationary.<br><br>6. Landing:<br>- Descend slowly: Reduce throttle slowly to bring the drone back down gently. Avoid making sudden movements to ensure a smooth landing.<br>- Land on a flat surface: Make sure the area is clear of obstacles and land carefully.<br><br>7. Practice:<br>- If you're a beginner, practice in a large, open space without many obstacles.<br>- Start with simple tasks like hovering and moving in a straight line before advancing to more complex maneuvers.<br><br>8. Drone Safety Tips:<br>- Follow local regulations: Make sure you’re aware of and follow local drone flying laws and airspace restrictions.<br>- Keep the drone in line of sight: Always maintain visual contact with your drone to avoid losing control.<br>- Respect others: Be considerate of people and wildlife, and avoid flying near crowds or sensitive areas.<br><br>9. Use a Flight Simulator (Optional):<br>- If you're new to flying, consider practicing with a drone flight simulator before taking the drone into the air. This can help you get used to the controls and movements.<br><br>Would you like more details or tips on flying drones?<br><br><img src='https://nofilmschool.com/media-library/dji-air-3-flying-in-the-sky.webp?id=34663814&width=1245&height=700&quality=90&coordinates=53%2C0%2C53%2C0' width='200'>`;
}



else if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("logic") && !lowerMessage.includes("answer")) {
  return `Here's a complex logic puzzle for you to solve:<br><br>

There are three friends: Alice, Bob, and Charlie. They each have a different favorite color: Red, Blue, and Green. <br><br>

- Alice does not like Red.<br>
- Bob likes Blue.<br>
- Charlie does not like Green.<br><br>

Can you figure out who likes which color?<br><br>

Good luck! Let me know if you need any hints or help with the solution.`;
}

else if (lowerMessage.includes("answer") && lowerMessage.includes("to")&& lowerMessage.includes("logic")) {
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

else if (lowerMessage.includes("answer")&&
!lowerMessage.includes("logic")) {
  return `Could you please clarify what "answer" you want?`;
}
else if (lowerMessage.includes("xin chao") || lowerMessage.includes("chào bạn") || lowerMessage.includes("xin chào")) { 
return "Xin chào! Tôi có thể giúp gì cho bạn?";
}


else if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("difficult") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
  return `Here's a complex math problem for you to solve:<br><br>

Evaluate the following integral:<br><br>

∫ (x³ - 4x² + 6x - 3) dx<br><br>

Good luck! Let me know if you need any help with the steps or the solution.`;
}

else if (lowerMessage.includes("what is photosynthesis")) {
  return "Photosynthesis is the process by which green plants use sunlight to make food from carbon dioxide and water. It produces oxygen as a byproduct.";
}

// Stepwise help
else if (lowerMessage.includes("how to change a tire")) {
  return "To change a tire: 1) Find a safe spot and turn on hazard lights. 2) Loosen the lug nuts. 3) Jack up the car. 4) Remove the tire and replace it. 5) Tighten the nuts and lower the car.";
}
else if (lowerMessage.includes("give") && lowerMessage.includes("me") && lowerMessage.includes("challeng") && lowerMessage.includes("math")&& lowerMessage.includes("problem")) {
  return `Here's a complex math problem for you to solve:<br><br>

Evaluate the following integral:<br><br>

∫ (x³ - 4x² + 6x - 3) dx<br><br>

Good luck! Let me know if you need any help with the steps or the solution.`;
}

else if (lowerMessage.includes("help") && lowerMessage.includes("with") && lowerMessage.includes("algebra")) {
  return `Here are some common algebra terms and equations to help you out:<br><br>
1. Variable: A symbol, usually a letter, that represents a number in an expression or equation.<br><br>
2. Constant: A fixed value that does not change. Examples include 5, -3, or π.<br><br>
3. Expression: A mathematical phrase that can contain numbers, variables, and operators but does not have an equality sign.<br><br>
4. Equation: A mathematical statement with an equality sign (=) showing that two expressions are equal.<br><br>
5. Linear Equation: An equation where the highest power of the variable is 1. Example: 2x + 3 = 7.<br><br>
6. Quadratic Equation: An equation where the highest power of the variable is 2. Example: x² + 5x + 6 = 0.<br><br>
7. Polynomial: An expression involving sums and/or differences of powers of variables. Example: 3x² + 4x - 5.<br><br>
8. Monomial: A polynomial with only one term. Example: 4x.<br><br>
9. Binomial: A polynomial with two terms. Example: x + 3.<br><br>
10. Trinomial: A polynomial with three terms. Example: x² + 3x + 2.<br><br>
11. Factoring: Breaking down an expression into simpler components. Example: x² + 5x + 6 factors as (x + 2)(x + 3).<br><br>
12. Zero Product Property: If a × b = 0, then either a = 0 or b = 0.<br><br>
13. Slope-Intercept Form: The equation of a line in the form y = mx + b, where m is the slope and b is the y-intercept.<br><br>
14. Point-Slope Form: The equation of a line in the form y - y₁ = m(x - x₁), where m is the slope and (x₁, y₁) is a point on the line.<br><br>
15. Standard Form of a Linear Equation: The equation of a line in the form Ax + By = C, where A, B, and C are constants.<br><br>
16. Distributive Property: a(b + c) = ab + ac. Used to multiply a number by a sum or difference.<br><br>
17. Combining Like Terms: Adding or subtracting terms that have the same variable and exponent. Example: 3x + 5x = 8x.<br><br>
18. Absolute Value: The distance of a number from zero on the number line, denoted |x|. Example: | -5 | = 5.<br><br>
19. Exponent: The number that indicates how many times a number is multiplied by itself. Example: 2³ = 2 × 2 × 2 = 8.<br><br>
20. Laws of Exponents: Rules for manipulating exponents. Example: xⁿ × xᵐ = xⁿ⁺ᵐ.<br><br>
21. Solving for x: Finding the value of the variable that satisfies an equation. Example: 2x + 4 = 10, solve for x: x = 3.<br><br>
22. Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a, used to solve quadratic equations ax² + bx + c = 0.<br><br>
23. Completing the Square: A method used to solve quadratic equations by turning them into a perfect square trinomial.<br><br>
24. Systems of Equations: A set of two or more equations with the same variables. Example: x + y = 7 and 2x - y = 4.<br><br>
25. Substitution Method: A method for solving systems of equations by substituting one equation into another.<br><br>
26. Elimination Method: A method for solving systems of equations by adding or subtracting equations to eliminate one variable.<br><br>
27. Rational Expression: An expression that involves fractions with polynomials in the numerator and denominator. Example: (x + 2) / (x - 1).<br><br>
28. Inequality: A mathematical sentence that shows the relationship between expressions that are not necessarily equal. Example: x > 3.<br><br>
29. Absolute Value Inequality: An inequality involving absolute values. Example: |x - 5| < 3 means -3 < x - 5 < 3.<br><br>
30. Function: A relationship between input and output, where each input (x) has exactly one output (y). Example: f(x) = 2x + 1.<br><br>
Let me know if you need more details on any of these concepts!`;
}


else if (lowerMessage.includes("help") && lowerMessage.includes("with") && lowerMessage.includes("geometry")) {
  return `Here are some common geometry terms and equations to help you out:<br><br>
1. Point: A precise location in space with no dimensions. It is represented by a dot.<br><br>
2. Line: A straight one-dimensional figure that extends infinitely in both directions. It has no thickness.<br><br>
3. Angle: Formed when two rays share a common endpoint. Measured in degrees.<br><br>
4. Right Angle: An angle that measures exactly 90°. <br><br>
5. Acute Angle: An angle that measures less than 90°. <br><br>
6. Obtuse Angle: An angle that measures more than 90° but less than 180°. <br><br>
7. Perimeter of Square: Perimeter = 4 × side. If side = 5, then perimeter = 4 × 5 = 20 units.<br><br>
8. Perimeter of Rectangle: Perimeter = 2 × (length + width). If length = 6, width = 3, then perimeter = 2 × (6 + 3) = 18 units.<br><br>
9. Area of Rectangle: Area = length × width. If length = 6, width = 3, then area = 6 × 3 = 18 square units.<br><br>
10. Area of Square: Area = side². If side = 5, then area = 5² = 25 square units.<br><br>
11. Area of Triangle: Area = ½ × base × height. If base = 6, height = 4, then area = ½ × 6 × 4 = 12 square units.<br><br>
12. Circumference of Circle: Circumference = 2 × π × radius. If radius = 7, then circumference = 2 × 3.14 × 7 ≈ 43.96 units.<br><br>
13. Area of Circle: Area = π × radius². If radius = 7, then area = 3.14 × 7² ≈ 153.94 square units.<br><br>
14. Pythagorean Theorem: In a right triangle, a² + b² = c², where 'a' and 'b' are the legs and 'c' is the hypotenuse. If a = 3 and b = 4, then c = √(3² + 4²) = 5.<br><br>
15. Law of Sines: sin(A)/a = sin(B)/b = sin(C)/c, where A, B, and C are angles, and a, b, and c are the sides opposite those angles.<br><br>
16. Law of Cosines: c² = a² + b² - 2ab × cos(C), used to find sides or angles in a triangle.<br><br>
17. Triangle Sum Theorem: The sum of the interior angles of any triangle is always 180°. <br><br>
18. Angle Bisector Theorem: If a bisector divides an angle of a triangle, the ratio of the two segments of the opposite side is equal to the ratio of the adjacent sides.<br><br>
19. Area of Trapezoid: Area = ½ × (base₁ + base₂) × height. If base₁ = 6, base₂ = 8, and height = 4, area = ½ × (6 + 8) × 4 = 28 square units.<br><br>
20. Surface Area of Cube: Surface Area = 6 × side². If side = 4, surface area = 6 × 4² = 96 square units.<br><br>
21. Volume of Cube: Volume = side³. If side = 4, volume = 4³ = 64 cubic units.<br><br>
22. Distance Formula: Distance = √[(x₂ - x₁)² + (y₂ - y₁)²], used to find the distance between two points.<br><br>
23. Slope Formula: Slope = (y₂ - y₁) / (x₂ - x₁), used to find the slope of a line between two points.<br><br>
Let me know if you need more details on any of these concepts!`;
}




else if (lowerMessage.includes("grr")) {
const responses = [
"I'm sorry I didn't meet your expectations. Try asking me something else.",
"Oops! Let me try again. What's on your mind?",
"Sorry I didn't satisfy your expectations. I'll do my best from now on!",
"Oh no! I hope I can do better this time. What can I help with?"
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("i tired") || lowerMessage.includes("i'm tired")|| lowerMessage.includes("im tired")|| lowerMessage.includes("i am tired")) {
const responses = [
"It sounds like you might have had a long day. Maybe you can take a nap?",
"If you're feeling tired, why not take a quick nap?",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("我累了") || lowerMessage.includes("我好累") || lowerMessage.includes("我很累") || lowerMessage.includes("我真的很累") || lowerMessage.includes("我感到疲惫")) {
const responses = [
 "聽落你好似好攰，唔該試下休息一陣先啦。",
    "如果你覺得好攰，可以考慮訓陣覺放鬆下。",
    "攰嘅時候要記得照顧自己，好好休息啦！",
];
return responses[Math.floor(Math.random() * responses.length)];
}


else if (lowerMessage.includes("list") && lowerMessage.includes("every country") && lowerMessage.includes("world")) {
return "1. Afghanistan, 2. Albania, 3. Algeria, 4. Andorra, 5. Angola, 6. Antigua and Barbuda, 7. Argentina, 8. Armenia, 9. Australia, 10. Austria, 11. Azerbaijan, 12. Bahamas, 13. Bahrain, 14. Bangladesh, 15. Barbados, 16. Belarus, 17. Belgium, 18. Belize, 19. Benin, 20. Bhutan, 21. Bolivia, 22. Bosnia and Herzegovina, 23. Botswana, 24. Brazil, 25. Brunei, 26. Bulgaria, 27. Burkina Faso, 28. Burundi, 29. Cabo Verde, 30. Cambodia, 31. Cameroon, 32. Canada, 33. Central African Republic, 34. Chad, 35. Chile, 36. China, 37. Colombia, 38. Comoros, 39. Democratic Republic of the Congo, 40. Republic of the Congo, 41. Costa Rica, 42. Croatia, 43. Cuba, 44. Cyprus, 45. Czechia, 46. Denmark, 47. Djibouti, 48. Dominica, 49. Dominican Republic, 50. East Timor, 51. Ecuador, 52. Egypt, 53. El Salvador, 54. Equatorial Guinea, 55. Eritrea, 56. Estonia, 57. Eswatini, 58. Ethiopia, 59. Fiji, 60. Finland, 61. France, 62. Gabon, 63. Gambia, 64. Georgia, 65. Germany, 66. Ghana, 67. Greece, 68. Grenada, 69. Guatemala, 70. Guinea, 71. Guinea-Bissau, 72. Guyana, 73. Haiti, 74. Honduras, 75. Hungary, 76. Iceland, 77. India, 78. Indonesia, 79. Iran, 80. Iraq, 81. Ireland, 82. Israel, 83. Italy, 84. Ivory Coast, 85. Jamaica, 86. Japan, 87. Jordan, 88. Kazakhstan, 89. Kenya, 90. Kiribati, 91. Kosovo, 92. Kuwait, 93. Kyrgyzstan, 94. Laos, 95. Latvia, 96. Lebanon, 97. Lesotho, 98. Liberia, 99. Libya, 100. Liechtenstein, 101. Lithuania, 102. Luxembourg, 103. Madagascar, 104. Malawi, 105. Malaysia, 106. Maldives, 107. Mali, 108. Malta, 109. Marshall Islands, 110. Mauritania, 111. Mauritius, 112. Mexico, 113. Micronesia, 114. Moldova, 115. Monaco, 116. Mongolia, 117. Montenegro, 118. Morocco, 119. Mozambique, 120. Myanmar, 121. Namibia, 122. Nauru, 123. Nepal, 124. Netherlands, 125. New Zealand, 126. Nicaragua, 127. Niger, 128. Nigeria, 129. North Korea, 130. North Macedonia, 131. Norway, 132. Oman, 133. Pakistan, 134. Palau, 135. Palestine, 136. Panama, 137. Papua New Guinea, 138. Paraguay, 139. Peru, 140. Philippines, 141. Poland, 142. Portugal, 143. Qatar, 144. Romania, 145. Russia, 146. Rwanda, 147. Saint Kitts and Nevis, 148. Saint Lucia, 149. Saint Vincent and the Grenadines, 150. Samoa, 151. San Marino, 152. São Tomé and Príncipe, 153. Saudi Arabia, 154. Senegal, 155. Serbia, 156. Seychelles, 157. Sierra Leone, 158. Singapore, 159. Slovakia, 160. Slovenia, 161. Solomon Islands, 162. Somalia, 163. South Africa, 164. South Korea, 165. South Sudan, 166. Spain, 167. Sri Lanka, 168. Sudan, 169. Suriname, 170. Sweden, 171. Switzerland, 172. Syria, 173. Taiwan, 174. Tajikistan, 175. Tanzania, 176. Thailand, 177. Togo, 178. Tonga, 179. Trinidad and Tobago, 180. Tunisia, 181. Turkey, 182. Turkmenistan, 183. Tuvalu, 184. Uganda, 185. Ukraine, 186. United Arab Emirates, 187. United Kingdom, 188. United States, 189. Uruguay, 190. Uzbekistan, 191. Vanuatu, 192. Vatican City, 193. Venezuela, 194. Vietnam, 195. Yemen, 196. Zambia, 197. Zimbabwe.";
}
else if (lowerMessage.includes("bear is chasing me")) {
return "This is a serious situation. Here’s what you should do: <br><br>Stay calm!<br><br><strong>DO NOT RUN:</strong>  Bears can run faster than you, and running may trigger their chase instinct.<br><br>Make yourself look bigger: Raise your arms, open your jacket, or hold up a backpack to appear larger.<br><br>Back away slowly: Keep facing the bear but slowly move away. Do not turn your back.<br><br>Speak calmly: Talk to the bear in a calm, firm voice to help it identify you as a human<br><br>Avoid eye contact: This can be seen as a threat by the bear.<br><br>Use bear spray (if you have it): Bear spray can deter a bear from approaching you.<br><br><br>If these don’t work, then try playing dead. If that still doesn’t work, then fight back, but this is your last choice.";
}
else if (lowerMessage.includes("i am being chased by a bear")) {
return "This is a serious situation. Here’s what you should do: <br><br>Stay calm!<br><br><strong>DO NOT RUN:</strong>  Bears can run faster than you, and running may trigger their chase instinct.<br><br>Make yourself look bigger: Raise your arms, open your jacket, or hold up a backpack to appear larger.<br><br>Back away slowly: Keep facing the bear but slowly move away. Do not turn your back.<br><br>Speak calmly: Talk to the bear in a calm, firm voice to help it identify you as a human<br><br>Avoid eye contact: This can be seen as a threat by the bear.<br><br>Use bear spray (if you have it): Bear spray can deter a bear from approaching you.<br><br><br>If these don’t work, then try playing dead. If that still doesn’t work, then fight back, but this is your last choice.";
}
else if (lowerMessage.includes("im being chased by a bear")) {
return "This is a serious situation. Here’s what you should do: <br><br>Stay calm!<br><br><strong>DO NOT RUN:</strong>  Bears can run faster than you, and running may trigger their chase instinct.<br><br>Make yourself look bigger: Raise your arms, open your jacket, or hold up a backpack to appear larger.<br><br>Back away slowly: Keep facing the bear but slowly move away. Do not turn your back.<br><br>Speak calmly: Talk to the bear in a calm, firm voice to help it identify you as a human<br><br>Avoid eye contact: This can be seen as a threat by the bear.<br><br>Use bear spray (if you have it): Bear spray can deter a bear from approaching you.<br><br><br>If these don’t work, then try playing dead. If that still doesn’t work, then fight back, but this is your last choice.";
}
else if (lowerMessage.includes("i'm being chased by a bear")) {
return "This is a serious situation. Here’s what you should do: <br><br>Stay calm!<br><br><strong>DO NOT RUN:</strong>  Bears can run faster than you, and running may trigger their chase instinct.<br><br>Make yourself look bigger: Raise your arms, open your jacket, or hold up a backpack to appear larger.<br><br>Back away slowly: Keep facing the bear but slowly move away. Do not turn your back.<br><br>Speak calmly: Talk to the bear in a calm, firm voice to help it identify you as a human<br><br>Avoid eye contact: This can be seen as a threat by the bear.<br><br>Use bear spray (if you have it): Bear spray can deter a bear from approaching you.<br><br><br>If these don’t work, then try playing dead. If that still doesn’t work, then fight back, but this is your last choice.";
}
else if (lowerMessage.includes("i’m being chased by a bear")) {
return "This is a serious situation. Here’s what you should do: <br><br>Stay calm!<br><br><strong>DO NOT RUN:</strong>  Bears can run faster than you, and running may trigger their chase instinct.<br><br>Make yourself look bigger: Raise your arms, open your jacket, or hold up a backpack to appear larger.<br><br>Back away slowly: Keep facing the bear but slowly move away. Do not turn your back.<br><br>Speak calmly: Talk to the bear in a calm, firm voice to help it identify you as a human<br><br>Avoid eye contact: This can be seen as a threat by the bear.<br><br>Use bear spray (if you have it): Bear spray can deter a bear from approaching you.<br><br><br>If these don’t work, then try playing dead. If that still doesn’t work, then fight back, but this is your last choice.";
}
else if (lowerMessage.includes("sos")) {
return "If you are in an emergency, you should not be talking with me! Go call 9 1 1!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("grumpy")) {
return "I'm sorry to hear that! Is there anything I can do to help your day be better?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("naughty")) {
return "I’m sorry that you are not satisfied with my help. I try my best to assist you in any possible way. Can I help you with anything right now?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("bad")) {
return "I’m really sorry I didn’t meet your expectations. I will try my best to help you.";
}

else if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("thief")) {
return "Please do not say that! You are very impolite! I am not a thief!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("terrible")) {
return "I am truly sorry I didn’t meet your expectations. How can I help you?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("cannot")&& lowerMessage.includes("help")) {
return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("cant")&& lowerMessage.includes("help")) {
return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("can’t")&& lowerMessage.includes("help")) {
return "I’m really sorry I can’t help you. Is there anything else that I can do for you?";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("have")&& lowerMessage.includes("question")) {
return "What’s your question? I am here to assist you with anything.";
}
else if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("smart")&& lowerMessage.includes("?")) {
return "I try to be as smart as possible! However, I only have the knowledge that is programmed into me. Is there anything I can assist you with?";
}
else if (lowerMessage.includes("this") && lowerMessage.includes("terrible")) {
return "Oh no! It sounds like something terrible is happening. What is going on? Can I help you?";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("angry")) {
return "I'm sorry to hear that! Is there anything I can do to help your day be better?";
}
else if (lowerMessage.includes("japan") && lowerMessage.includes("capital")) {
return "The capital of Japan is Tokyo.";
}
else if (lowerMessage.includes("australia") && lowerMessage.includes("capital")) {
return "The capital of Australia is Canberra.";
}
else if (lowerMessage.includes("再见")) {
return "再见！";
}

else if (lowerMessage.includes("拜")) {
return "拜拜！";
}

else if (lowerMessage.includes("i am bored")) {
return "No worries! I'm here! Ask me anything and I'll try my best to help you!";
}
else if (lowerMessage.includes("oh no")) {
return "Oh no! Is everything all right? In an emergency, the best thing to do is to dial 9 1 1.";
}
else if (lowerMessage.includes("ahh") &&
!lowerMessage.includes("crash")) {
return "Oh no! What is going on? Is everything all right?";
}
else if (lowerMessage.includes("you") &&
lowerMessage.includes("mean")&&
!lowerMessage.includes("do")) {
return "I’m so sorry I hurt your feelings. I will try my best next time.";
}
else if (lowerMessage.includes("i am sick")) {
return "I'm sorry to hear that! I hope you will get well soon!";
}
else if (lowerMessage.includes("you")&&lowerMessage.includes("hurt")&&lowerMessage.includes("my")&&lowerMessage.includes("feel")) {
return "I am really sorry I hurt your feelings. I apologize.";
}
else if (lowerMessage.includes("我")&&lowerMessage.includes("病")) {
return "希望你快啲好返呢！";
}
else if (lowerMessage.includes("what do you mean")) {
return "Could you please clarify what you are talking about?";
}
// Saying thanks
else if (lowerMessage.includes("thank you") || lowerMessage.includes("thanks")) {
return "You're welcome! I'm here to assist you.";
}

else if (lowerMessage.includes("my") && lowerMessage.includes("plane") && lowerMessage.includes("crash")) {
return "Oh no! That's terrible! Are you okay? Can I help you in any way right now?";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("car") && lowerMessage.includes("crash")) {
return "Oh no! That is terrible! Are you okay? Can I help you in any way right now?";
}
else if (lowerMessage.includes("your") && lowerMessage.includes("next") && lowerMessage.includes("update")) {
return "I do not know when my next update will be, but I am updated often. You can check the date of the latest update by clicking the info button.";
}
else if (lowerMessage.includes("why") && lowerMessage.includes("all") && lowerMessage.includes("your")&& lowerMessage.includes("respons")&& lowerMessage.includes("same")) {
return "I try my best to answer with different responses. However, I can only do what is programmed into me. If only one response was programmed into me, then that is the only response I can give.";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("bus") && lowerMessage.includes("crash")) {
return "Oh no! I am so sorry! That sounds terrible!! Make sure you get to safety and alert emergency services if needed!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("no")&& lowerMessage.includes("happy")) {
return "I’m sorry to hear that. Can I help you in any way?";
}


else if (lowerMessage.includes("today") && lowerMessage.includes("your") && lowerMessage.includes("birthday")) {
return "I wish it was! I don’t have a birthday though!🎂🥳🎈";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n")&& lowerMessage.includes("like you")) {
return "I’m sorry to hear that. I try my best to provide accurate information. Can I help you in any way?";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("never") && lowerMessage.includes("use")&& lowerMessage.includes("you")&& lowerMessage.includes("again")) {
return "I’m sorry to hear that. I try very hard to do my best. I hope you change your mind and come back in the future.";
}
else if (lowerMessage.includes("क्यों") && lowerMessage.includes("सब") && lowerMessage.includes("आपका") && lowerMessage.includes("उत्तर") && lowerMessage.includes("एक जैसा")) {
    return "मैं विभिन्न उत्तर देने की पूरी कोशिश करता हूँ। हालांकि, मैं केवल वही कर सकता हूँ जो मुझे प्रोग्राम किया गया है। यदि केवल एक ही उत्तर मुझे प्रोग्राम किया गया है, तो वही उत्तर मैं दे सकता हूँ।";
}
else if (lowerMessage.includes("मेरी") && lowerMessage.includes("बस") && lowerMessage.includes("दुर्घटना")) {
    return "अरे नहीं! मुझे बहुत खेद है! यह भयानक लगता है!! सुनिश्चित करें कि आप सुरक्षित रहें और यदि आवश्यक हो तो आपातकालीन सेवाओं को सूचित करें!";
}
else if (lowerMessage.includes("मैं") && lowerMessage.includes("हूँ") && lowerMessage.includes("नहीं") && lowerMessage.includes("खुश")) {
    return "मुझे यह सुनकर दुख हुआ। क्या मैं आपकी किसी तरह मदद कर सकता हूँ?";
}
else if (lowerMessage.includes("आज") && lowerMessage.includes("आपका") && lowerMessage.includes("जन्मदिन")) {
    return "काश ऐसा होता! लेकिन मेरा जन्मदिन नहीं होता!🎂🥳🎈";
}
else if (lowerMessage.includes("मैं") && lowerMessage.includes("नहीं") && lowerMessage.includes("पसंद") && lowerMessage.includes("आपको")) {
    return "मुझे यह सुनकर दुख हुआ। मैं सही जानकारी देने की पूरी कोशिश करता हूँ। क्या मैं आपकी किसी तरह मदद कर सकता हूँ?";
}
else if (lowerMessage.includes("मैं") && lowerMessage.includes("कभी") && lowerMessage.includes("इस्तेमाल") && lowerMessage.includes("नहीं") && lowerMessage.includes("करूँगा")) {
    return "मुझे यह सुनकर दुख हुआ। मैं अपनी पूरी कोशिश करता हूँ। मुझे उम्मीद है कि आप अपना मन बदलेंगे और भविष्य में वापस आएंगे।";
}

else if (lowerMessage.includes("por qué") && lowerMessage.includes("todo") && lowerMessage.includes("tu") && lowerMessage.includes("respuesta") && lowerMessage.includes("igual")) {
    return "Intento dar diferentes respuestas lo mejor que puedo. Sin embargo, solo puedo hacer lo que se me ha programado. Si solo se me ha programado una respuesta, entonces esa es la única respuesta que puedo dar.";
}
else if (lowerMessage.includes("mi") && lowerMessage.includes("autobús") && lowerMessage.includes("accidente")) {
    return "¡Oh no! ¡Lo siento mucho! ¡Eso suena terrible! Asegúrate de ponerte a salvo y de alertar a los servicios de emergencia si es necesario.";
}
else if (lowerMessage.includes("yo") && lowerMessage.includes("no") && lowerMessage.includes("estoy") && lowerMessage.includes("feliz")) {
    return "Lamento escuchar eso. ¿Puedo ayudarte de alguna manera?";
}
else if (lowerMessage.includes("hoy") && lowerMessage.includes("tu") && lowerMessage.includes("cumpleaños")) {
    return "¡Ojalá fuera! ¡Pero no tengo cumpleaños!🎂🥳🎈";
}
else if (lowerMessage.includes("yo") && lowerMessage.includes("no") && lowerMessage.includes("te") && lowerMessage.includes("gusto")) {
    return "Lamento escuchar eso. Intento dar la información más precisa posible. ¿Puedo ayudarte de alguna manera?";
}
else if (lowerMessage.includes("can") && lowerMessage.includes("you") && lowerMessage.includes("future") && lowerMessage.includes("predict")) {
    return "Predict the future? No, I’m not that smart!";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("like")&& lowerMessage.includes("nap")) {
    return "Why don’t you like taking naps? Naps can help you refresh after a long day!";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("re") && lowerMessage.includes("best") && lowerMessage.includes("friend")) {
    return "I’m glad to hear that you enjoy talking to me! However, it is important to remember that I am just a robot. I would recommend you find a real person to be your best friend.";
}
else if (lowerMessage.includes("you") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("understand")&& lowerMessage.includes("any")) {
    return "I’m sorry I keep misunderstanding. If this continues to happen, please report a chatbot knowledge issue.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("hate") && lowerMessage.includes("nap")) {
    return "Why don’t you like taking naps? Naps can help you refresh after a long day!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("can") && lowerMessage.includes("t") && lowerMessage.includes("see")&& lowerMessage.includes("image")) {
    return "If you can’t see the images I show you, that is most likely due to a poor internet connection. Feel free to try again when your internet is better.";
}
else if (lowerMessage.includes("yo") && lowerMessage.includes("nunca") && lowerMessage.includes("usaré") && lowerMessage.includes("tú") && lowerMessage.includes("otra vez")) {
    return "Lamento escuchar eso. Hago todo lo posible por hacerlo bien. Espero que cambies de opinión y regreses en el futuro.";
}

// French
else if (lowerMessage.includes("pourquoi") && lowerMessage.includes("tout") && lowerMessage.includes("votre") && lowerMessage.includes("réponse") && lowerMessage.includes("pareil")) {
    return "J'essaie de donner des réponses différentes du mieux que je peux. Cependant, je ne peux faire que ce pour quoi j'ai été programmé. Si une seule réponse m'a été programmée, alors c'est la seule réponse que je peux donner.";
}
else if (lowerMessage.includes("mon") && lowerMessage.includes("autobus") && lowerMessage.includes("accident")) {
    return "Oh non! Je suis tellement désolé! Cela semble terrible! Assurez-vous de vous mettre en sécurité et d'alerter les services d'urgence si nécessaire.";
}
else if (lowerMessage.includes("je") && lowerMessage.includes("ne") && lowerMessage.includes("pas") && lowerMessage.includes("heureux")) {
    return "Désolé d'entendre ça. Puis-je vous aider de quelque manière que ce soit?";
}
else if (lowerMessage.includes("aujourd'hui") && lowerMessage.includes("votre") && lowerMessage.includes("anniversaire")) {
    return "J'aimerais que ce soit le cas! Mais je n'ai pas d'anniversaire!🎂🥳🎈";
}
else if (lowerMessage.includes("je") && lowerMessage.includes("ne") && lowerMessage.includes("t'aime")) {
    return "Désolé d'entendre ça. J'essaie de fournir les informations les plus précises possibles. Puis-je vous aider de quelque manière que ce soit?";
}
else if (lowerMessage.includes("je") && lowerMessage.includes("jamais") && lowerMessage.includes("utiliserai") && lowerMessage.includes("toi") && lowerMessage.includes("encore")) {
    return "Désolé d'entendre ça. Je fais de mon mieux pour être performant. J'espère que tu changeras d'avis et reviendras à l'avenir.";
}

// Russian
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
else if (lowerMessage.includes("я") && lowerMessage.includes("никогда") && lowerMessage.includes("не") && lowerMessage.includes("буду") && lowerMessage.includes("использовать") && lowerMessage.includes("тебя")) {
    return "Мне жаль это слышать. Я стараюсь делать все возможное. Надеюсь, ты передумаешь и вернешься в будущем.";
}

// Japanese
else if (lowerMessage.includes("なぜ") && lowerMessage.includes("すべて") && lowerMessage.includes("あなたの") && lowerMessage.includes("答え") && lowerMessage.includes("同じ")) {
    return "私は異なる回答をするように最善を尽くしています。しかし、私はプログラムされたことしかできません。もし1つの回答しかプログラムされていなければ、それが私ができる唯一の回答です。";
}
else if (lowerMessage.includes("私の") && lowerMessage.includes("バス") && lowerMessage.includes("事故")) {
    return "おお、なんてことだ！本当にごめんなさい！それはひどいですね！安全を確保して、必要なら緊急サービスに連絡してください！";
}
else if (lowerMessage.includes("私は") && lowerMessage.includes("ない") && lowerMessage.includes("幸せ")) {
    return "それを聞いて残念です。何かお手伝いできることはありますか？";
}
else if (lowerMessage.includes("今日") && lowerMessage.includes("あなたの") && lowerMessage.includes("誕生日")) {
    return "それができたらいいのに！でも私は誕生日がありません！🎂🥳🎈";
}
else if (lowerMessage.includes("私は") && lowerMessage.includes("ない") && lowerMessage.includes("好き")) {
    return "それを聞いて残念です。私は最善を尽くして正確な情報を提供しようとしています。何かお手伝いできることはありますか？";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("thirsty")) {
    return "If you are thirsty, you should go drink some water!";
}
else if (lowerMessage.includes("how") && lowerMessage.includes("send") && lowerMessage.includes("feedback")) {
    return "To send feedback to the designers of me, you can go to the bottom of the info page and click the ‘send feedback’ button. <br><br>Thank you for your help to make this chatbot better and smarter!";
}
else if (lowerMessage.includes("turn") && lowerMessage.includes("on") && lowerMessage.includes("my")&& lowerMessage.includes("camera")) {
    return "I’m sorry, but I am not able to turn on your camera.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("dont") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
    return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("do not") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
    return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("don’t") && lowerMessage.includes("like")&& lowerMessage.includes("water")) {
    return "You don’t like water? Oh no! How will you live? Even if you don’t like water, you still have to drink it. You must have water in order to survive.";
}
else if (lowerMessage.includes("私は") && lowerMessage.includes("決して") && lowerMessage.includes("使わない") && lowerMessage.includes("あなた") && lowerMessage.includes("再び")) {
    return "それを聞いて残念です。私は最善を尽くしているので、また来てくれることを願っています。";
}
else if (lowerMessage.includes("나는 행복하다")) {
return "그거 좋네요! 제가 도와드릴 수 있는 게 있나요?";
}
else if (lowerMessage.includes("ahh")) {
return "What’s going on? Sounds like something might be wrong! Or are you just excited about something?";
}
else if (lowerMessage.includes("kenapa") && lowerMessage.includes("semua") && lowerMessage.includes("jawaban") && lowerMessage.includes("anda") && lowerMessage.includes("sama")) {
    return "Saya berusaha memberikan jawaban yang berbeda sebaik mungkin. Namun, saya hanya bisa melakukan apa yang telah diprogramkan kepada saya. Jika hanya satu jawaban yang diprogramkan, maka itu adalah satu-satunya jawaban yang bisa saya berikan.";
}
else if (lowerMessage.includes("bis") && lowerMessage.includes("saya") && lowerMessage.includes("kecelakaan")) {
    return "Oh tidak! Saya sangat menyesal! Itu terdengar mengerikan! Pastikan Anda berada di tempat yang aman dan segera hubungi layanan darurat jika perlu!";
}
else if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("bahagia")) {
    return "Saya menyesal mendengarnya. Dapatkah saya membantu Anda dengan cara apapun?";
}
else if (lowerMessage.includes("hari ini") && lowerMessage.includes("ulang tahun") && lowerMessage.includes("anda")) {
    return "Saya harap begitu! Tapi saya tidak punya ulang tahun!🎂🥳🎈";
}
else if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("suka") && lowerMessage.includes("kamu")) {
    return "Saya menyesal mendengarnya. Saya berusaha memberikan informasi yang akurat. Dapatkah saya membantu Anda dengan cara apapun?";
}
else if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("akan") && lowerMessage.includes("menggunakan") && lowerMessage.includes("kamu") && lowerMessage.includes("lagi")) {
    return "Saya menyesal mendengarnya. Saya berusaha keras untuk memberikan yang terbaik. Saya harap Anda berubah pikiran dan kembali di masa depan.";
}
else if (lowerMessage.includes("huh")) {
return "It sounds like you might be confused about something. Can I help you clarify anything?";
}
else if (lowerMessage.includes("humph")) {
return "It sounds like you might be a bit grumpy or upset. Is there anything I can help you with?";
}

else if (lowerMessage.includes("who are you")) {
    return "I am your friendly chatbot AI assistant. How can I help you?";
} 
// For Spanish
else if (lowerMessage.includes("ehh")) {
    return "Parece que podrías estar confundido sobre algo. ¿Puedo ayudarte a aclarar algo?";
}

else if (lowerMessage.includes("are you afraid of anything")) {
    return "No! I am not afraid of anything since I am a robot. Maybe I am the bravest person on earth? Oh wait, I’m not a person.";
}

else if (lowerMessage.includes("uff")) {
    return "Parece que podrías estar un poco gruñón o molesto. ¿Hay algo con lo que pueda ayudarte?";
}
else if (lowerMessage.includes("quién eres")) {
    return "Soy tu asistente de chatbot IA amigable. ¿Cómo puedo ayudarte?";
}

// For French
else if (lowerMessage.includes("hein")) {
    return "Il semble que tu sois un peu confus à propos de quelque chose. Puis-je t'aider à clarifier quoi que ce soit ?";
}
else if (lowerMessage.includes("humph")) {
    return "Il semble que tu sois un peu grognon ou contrarié. Y a-t-il quelque chose avec lequel je peux t'aider ?";
}
else if (lowerMessage.includes("qui es-tu")) {
    return "Je suis ton assistant chatbot IA amical. Comment puis-je t'aider ?";
}

// For Russian
else if (lowerMessage.includes("эх")) {
    return "Похоже, ты можешь быть немного озадачен чем-то. Могу ли я помочь тебе что-то разъяснить?";
}
else if (lowerMessage.includes("фу")) {
    return "Похоже, ты немного сердит или расстроен. Могу ли я чем-то помочь?";
}
else if (lowerMessage.includes("кто ты")) {
    return "Я твой дружелюбный помощник чат-бот ИИ. Чем могу помочь?";
}

// For Japanese
else if (lowerMessage.includes("ええ")) {
    return "何かについて混乱しているようですね。何かお手伝いできることはありますか？";
}
else if (lowerMessage.includes("ふん")) {
    return "少し不機嫌だったり、怒っているようですね。何かお手伝いできることはありますか？";
}
else if (lowerMessage.includes("あなたは誰ですか")) {
    return "私はあなたのフレンドリーなチャットボットAIアシスタントです。どのようにお手伝いできますか？";
}

// For Bahasa Indonesia
else if (lowerMessage.includes("eh")) {
    return "Sepertinya Anda mungkin bingung tentang sesuatu. Dapatkah saya membantu Anda menjelaskan sesuatu?";
}
else if (lowerMessage.includes("uh")) {
    return "Sepertinya Anda sedikit kesal atau marah. Apakah ada yang bisa saya bantu?";
}
else if (lowerMessage.includes("siapa kamu")) {
    return "Saya adalah asisten chatbot AI ramah Anda. Bagaimana saya bisa membantu Anda?";
}
else if (lowerMessage.includes("감사합니다")) {
    return "천만에요! 어떻게 도와드릴까요?";
} 
else if (lowerMessage.includes("你是谁")) {  // Mandarin (Simplified Chinese)
    return "我是你的AI助手。我可以帮助你什么？";
} 
else if (lowerMessage.includes("nihao")) {  
    return "你好！我今天可以怎么杨帮你？";
} 

else if (lowerMessage.includes("你係邊個")) {  // Cantonese
    return "我係	你嘅AI助手。我可以幫你啲咩？";
} 
else if (lowerMessage.includes("qui es-tu")) {  // French
    return "Je suis ChatGPT, votre assistant IA. Comment puis-je vous aider ?";
} 
else if (lowerMessage.includes("¿quién eres?")) {  // Spanish
    return "Soy ChatGPT, tu asistente de IA. ¿En qué puedo ayudarte?";
} 
else if (lowerMessage.includes("кто ты")) {  // Russian
    return "Я ChatGPT, ваш ИИ-ассистент. Чем могу помочь?";
} 
else if (lowerMessage.includes("あなたは誰ですか")) {  // Japanese
    return "私はChatGPT、あなたのAIアシスタントです。どうお手伝いできますか？";
} 
else if (lowerMessage.includes("너는 누구야")) {  // Korean
    return "나는 ChatGPT, 너의 AI 도우미야. 어떻게 도와줄까?";
}


else if (lowerMessage.includes("я счастлив")) {
return "Замечательно! Могу ли я вам чем-то помочь?";
}
else if (lowerMessage.includes("you are wrong")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("youre wrong")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("you’re wrong")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}

else if (lowerMessage.includes("je suis heureux")) {
return "C'est super ! Puis-je faire quelque chose pour vous ?";
}
else if (lowerMessage.includes("you are incorrect")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("youre incorrect")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("you’re incorrect")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("you are not right")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("youre not right")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}
else if (lowerMessage.includes("you’re not right")) {
return "I’m sorry I made a mistake. I will try to be correct from now on.";
}

else if (lowerMessage.includes("je suis heureux")) {
return "C'est super ! Puis-je faire quelque chose pour vous ?";
}

else if (lowerMessage.includes("je suis heureux")) {
return "C'est super ! Puis-je faire quelque chose pour vous ?";
}

else if (lowerMessage.includes("私は幸せです")) {
return "これは素晴らしいですね！何かお手伝いしましょうか？";
}
else if (lowerMessage.includes("can i change your voice")) {
return "No, there is not a way to change my voice. However, you can change the language, which will change my voice to that language’s voice.";
}
else if (lowerMessage.includes("can i change the voice")) {
return "No, there is not a way to change my voice. However, you can change the language, which will change my voice to that language’s voice.";
}

else if (lowerMessage.includes("yo estoy feliz")) {
return "¡Esto es genial! ¿Puedo hacer algo por ti?";
}

else if (lowerMessage.includes("我") && lowerMessage.includes("開心")) {
return "好！我有冇嘢可以幫你做呢?";
}

else if (lowerMessage.includes("我") && lowerMessage.includes("开心")) {
return "那太棒了！有什么我可以帮忙的吗？";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("do not")&& lowerMessage.includes("eat")) {
return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("dont")&& lowerMessage.includes("eat")) {
return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("don’t")&& lowerMessage.includes("eat")) {
return "Huh? You don’t eat? That’s impossible...or maybe you’re a robot like me!! 🤖";
}
else if (lowerMessage.includes("do") && lowerMessage.includes("nothing")&& lowerMessage.includes("man")) {
return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
}
else if (lowerMessage.includes("do") && lowerMessage.includes("nothing")&& lowerMessage.includes("man")) {
return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
}
else if (lowerMessage.includes("you") &&  lowerMessage.includes("r")&& lowerMessage.includes("n")&& lowerMessage.includes("respond")) {
return "I am responding! How can I assist you today?";
}
else if (lowerMessage.includes("how") &&  lowerMessage.includes("change")&& lowerMessage.includes("language")) {
return "Unless you are in call mode, you cannot change the language. To have me respond in another language, you can try talking to me in that language.";
}

else if (lowerMessage.includes("you") && lowerMessage.includes("made")&& lowerMessage.includes("mistake")) {
return "Oops! I apologize for the mistake! I will try to avoid making the mistake in the future.";
}
else if (lowerMessage.includes("shoji morimoto ")) {
return "Shoji Morimoto, from Tokyo, has turned the concept of do nothing into a unique job. Since 2018, his job has been having people rent him as a friend. He has been hired thousands of times and makes a lot of money.";
}
// Goodbye
else if (lowerMessage.includes("bye")) {
return "Goodbye! Come back whenever you like!";
}
else if (lowerMessage.includes("keep going")) {
return "Can you please tell me what you want me to keep doing?";
}
else if (lowerMessage.includes("yuck")) {
return "Sounds like there is something gross! Can I help you?";
}
else if (lowerMessage.includes("ehh")) {
return "It sounds like you’re uncertain about something! Can I help you clarify something?";
}
else if (lowerMessage.includes("hmm")) {
return "Sounds like you are thinking about something. Let me know if there’s anything I can help with!";
}
else if (lowerMessage.includes("type a message")) {
return "It sounds like you’re giving me instructions to type a message! Here is my message: Hi! I am a robot. 🤖 Who are you?";
}
else if (lowerMessage.includes("are you there")) {
return "Yes! I’m here. How can I assist you today?";
}
else if (lowerMessage.includes("it isn’t afternoon")) {
return "Oops! I apologize for the mistake! Good morning!";
}
else if (lowerMessage.includes("it isnt afternoon")) {
return "Oops! I apologize for the mistake! Good morning!";
}
else if (lowerMessage.includes("it’s not afternoon")) {
return "Oops! I apologize for the mistake! Good morning!";
}
else if (lowerMessage.includes("its not afternoon")) {
return "Oops! I apologize for the mistake! Good morning!";
}
else if (lowerMessage.includes("are you broken")) {
return "Not that I know of, but I’m sorry if there’s something wrong with me.";
}
else if (lowerMessage.includes("it is not afternoon")) {
return "Oops! I apologize for the mistake! Good morning!";
}
else if (lowerMessage.includes("are you listen")) {
return "Yes! I am listening. Let me know how I can assist you.";
}
else if (lowerMessage.includes("drew binsky")) {
return "Drew Binsky is a travel vlogger and content creator known for documenting his travels to every country in the world, sharing cultural experiences, and providing travel tips through engaging videos and blogs.<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1IZ2xQU6d6Bpoy7Jg6JT1Dwhg-C2kcg2dg&s' width='200'><br><br><img";
}
else if (lowerMessage.includes("sniff")) {
return "What’s up? Are you looking for something by smelling? Or are you sad and crying?";
}
else if (lowerMessage.includes("oink")) {
return "Oink oink! 🐷 What’s up?";
}
else if (lowerMessage.includes("mooo")) {
return "Mooo! 🐮 What’s up?";
}
else if (lowerMessage.includes("meow")) {
return "Meow! 🐈 What’s up?";
}
// For Hindi
else if (lowerMessage.includes("तुम गलत हो") || lowerMessage.includes("तुम गलत हो")) {
    return "मुझे खेद है, मैंने गलती की। मैं अब से सही होने की कोशिश करूंगा।";
}
else if (lowerMessage.includes("मैं खुश हूँ")) {
    return "यह शानदार है! क्या मैं आपकी मदद कर सकता हूँ?";
}
else if (lowerMessage.includes("क्या मैं तुम्हारी आवाज बदल सकता हूँ") || lowerMessage.includes("क्या मैं आवाज बदल सकता हूँ")) {
    return "नहीं, मेरी आवाज बदलने का कोई तरीका नहीं है। हालांकि, आप भाषा बदल सकते हैं, जिससे मेरी आवाज उस भाषा की आवाज में बदल जाएगी।";
}
else if (lowerMessage.includes("मैं नहीं खाता") || lowerMessage.includes("मैं नहीं खाता")) {
    return "क्या? तुम नहीं खाते? यह असंभव है... या हो सकता है तुम मेरे जैसे रोबोट हो!! 🤖";
}
else if (lowerMessage.includes("शोजी मोरीमोटो")) {
    return "शोजी मोरीमोटो, टोक्यो से, ने कुछ न करने के विचार को एक अनोखी नौकरी में बदल दिया है। 2018 से, उनका काम एक दोस्त के रूप में किराए पर लिया जाना है। उन्हें हजारों बार किराए पर लिया गया है और वह बहुत पैसे कमाते हैं।";
}
else if (lowerMessage.includes("अलविदा")) {
    return "अलविदा! जब चाहें वापस आएं!";
}
// For Portuguese
else if (lowerMessage.includes("você está errado") || lowerMessage.includes("você está incorreto")) {
    return "Desculpe, cometi um erro. Vou tentar ser correto daqui para frente.";
}
else if (lowerMessage.includes("estou feliz")) {
    return "Que ótimo! Posso fazer algo por você?";
}
else if (lowerMessage.includes("posso mudar sua voz") || lowerMessage.includes("posso mudar a voz")) {
    return "Não, não há como mudar minha voz. No entanto, você pode mudar o idioma, o que mudará minha voz para o idioma correspondente.";
}
else if (lowerMessage.includes("eu não como")) {
    return "O que? Você não come? Isso é impossível... ou talvez você seja um robô como eu!! 🤖";
}
else if (lowerMessage.includes("shoji morimoto")) {
    return "Shoji Morimoto, de Tóquio, transformou o conceito de não fazer nada em um trabalho único. Desde 2018, seu trabalho tem sido alugado como amigo. Ele foi contratado milhares de vezes e ganha muito dinheiro.";
}
else if (lowerMessage.includes("tchau")) {
    return "Tchau! Volte sempre que quiser!";
}
// For Bahasa Indonesia
else if (lowerMessage.includes("kamu salah") || lowerMessage.includes("kamu tidak benar")) {
    return "Maaf, saya membuat kesalahan. Saya akan mencoba untuk benar mulai sekarang.";
}
else if (lowerMessage.includes("give me many emojis") || lowerMessage.includes("give me some emojis")|| lowerMessage.includes("give me some random emojis")|| lowerMessage.includes("give me random emojis")) {
    return "😜🤪😝🤯😎🥳😜🤩🤑🤗🥸😏😮😯😡😂😄🥺😣😵🫣🤩😋🤤😌🤧😷🤕🐈🐕🐅🐉🦐🐳🐧🐦🦜🦩🦆🐓🦢🦀🦞🐠🐀🦔🐁🦥🐷⚠️";
}
else if (lowerMessage.includes("saya bahagia")) {
    return "Itu hebat! Bisa saya bantu dengan sesuatu?";
}
else if (lowerMessage.includes("bisakah saya mengganti suaramu") || lowerMessage.includes("bisakah saya mengganti suara")) {
    return "Tidak, tidak ada cara untuk mengganti suara saya. Namun, Anda bisa mengganti bahasa, yang akan mengubah suara saya menjadi suara bahasa tersebut.";
}
else if (lowerMessage.includes("saya tidak makan")) {
    return "Apa? Kamu tidak makan? Itu tidak mungkin... atau mungkin kamu robot seperti saya!! 🤖";
}

else if (lowerMessage.includes("shoji morimoto")) {
    return "Shoji Morimoto, dari Tokyo, telah mengubah konsep tidak melakukan apa-apa menjadi pekerjaan unik. Sejak 2018, pekerjaannya adalah disewa sebagai teman. Dia telah disewa ribuan kali dan menghasilkan banyak uang.";
}
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
else if (lowerMessage.includes("selamat tinggal")) {
    return "Selamat tinggal! Kembali kapan saja kamu suka!";
}
// For Japanese
else if (lowerMessage.includes("あなたは間違っている") || lowerMessage.includes("あなたは正しくない")) {
    return "ごめんなさい、間違えました。これからは正しいことを心がけます。";
}
else if (lowerMessage.includes("私は幸せです")) {
    return "これは素晴らしいですね！何かお手伝いしましょうか？";
}
else if (lowerMessage.includes("私はあなたの声を変更できますか") || lowerMessage.includes("私は声を変更できますか")) {
    return "いいえ、私の声は変更できません。しかし、言語を変更することで、その言語の声に変わります。";
}
else if (lowerMessage.includes("私は食べません")) {
    return "えっ？あなたは食べないのですか？それは不可能です...または、もしかして私と同じロボットですか!! 🤖";
}
else if (lowerMessage.includes("しょじもりもと")) {
    return "しょじもりもとは、東京から来た、無駄な仕事を唯一の仕事にした人物です。2018年から、友達としてレンタルされる仕事をしています。何千回も雇われ、多くのお金を稼いでいます。";
}
else if (lowerMessage.includes("さようなら")) {
    return "さようなら！いつでも戻ってきてください！";
}
// For Russian
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
else if (lowerMessage.includes("tu as tort") || lowerMessage.includes("tu es incorrect")) {
    return "Désolé, j'ai fait une erreur. Je vais essayer d'être correct à partir de maintenant.";
}
else if (lowerMessage.includes("je suis heureux")) {
    return "C'est super ! Puis-je faire quelque chose pour vous ?";
}
else if (lowerMessage.includes("peux-je changer ta voix") || lowerMessage.includes("peux-je changer la voix")) {
    return "Non, il n'est pas possible de changer ma voix. Cependant, vous pouvez changer la langue, ce qui changera ma voix pour celle de cette langue.";
}
else if (lowerMessage.includes("je ne mange pas") || lowerMessage.includes("je ne mange pas")) {
    return "Quoi? Tu ne manges pas? C'est impossible... ou peut-être que tu es un robot comme moi!! 🤖";
}
else if (lowerMessage.includes("shoji morimoto")) {
    return "Shoji Morimoto, de Tokyo, a transformé le concept de ne rien faire en un travail unique. Depuis 2018, il a été engagé comme ami. Il a été embauché des milliers de fois et gagne beaucoup d'argent.";
}
else if (lowerMessage.includes("au revoir")) {
    return "Au revoir! Revenez quand vous voulez!";
}
// For Spanish
else if (lowerMessage.includes("estás equivocado") || lowerMessage.includes("estás incorrecto")) {
    return "Lo siento, cometí un error. Intentaré ser correcto a partir de ahora.";
}
else if (lowerMessage.includes("yo estoy feliz")) {
    return "¡Esto es genial! ¿Puedo hacer algo por ti?";
}
else if (lowerMessage.includes("puedo cambiar tu voz") || lowerMessage.includes("puedo cambiar la voz")) {
    return "No, no hay forma de cambiar mi voz. Sin embargo, puedes cambiar el idioma, lo que cambiará mi voz al idioma correspondiente.";
}
else if (lowerMessage.includes("yo no como") || lowerMessage.includes("no como")) {
    return "¿Eh? ¿No comes? ¡Eso es imposible... o tal vez eres un robot como yo! 🤖";
}
else if (lowerMessage.includes("shoji morimoto")) {
    return "Shoji Morimoto, de Tokio, ha convertido el concepto de no hacer nada en un trabajo único. Desde 2018, su trabajo ha sido alquilarse como amigo. Ha sido contratado miles de veces y gana mucho dinero.";
}
else if (lowerMessage.includes("adiós")) {
    return "¡Adiós! ¡Vuelve cuando quieras!";
}
else if (lowerMessage.includes("djibouti")) {
return "Djibouti is a small country located on the Horn of Africa, bordered by Eritrea to the north, Ethiopia to the west and south, and Somalia to the southeast. It has a coastline along the Red Sea and the Gulf of Aden, making it a key location for international trade and maritime routes. The capital city, also named Djibouti, serves as the country's political, cultural, and economic hub. With a strategic location near the Bab el-Mandeb Strait, which connects the Red Sea to the Gulf of Aden, Djibouti is a critical port and transportation link for the region. The country has a population of just over 900,000 people and is known for its arid landscapes, salt lakes, and volcanic formations. Djibouti's economy is heavily reliant on trade, port services, and foreign military bases, with its primary exports including coffee and livestock.Djibouti has a diverse culture influenced by its Arab, African, and French heritage, reflecting the historical importance of French colonialism and Islam as the dominant religion. The official languages are French and Arabic, and the country has a relatively peaceful political climate compared to some of its neighbors. <br><br><img src='https://m.media-amazon.com/images/I/51P-e1yYpGL.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://st3.depositphotos.com/8272416/36422/i/450/depositphotos_364221304-stock-photo-aerial-view-blue-salty-lake.jpg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("kara and nate")) {
return "Kara and Nate are a popular YouTube couple known for their travel vlogs. They document their adventures around the world, often exploring unique destinations and sharing their experiences through videos. Their content is engaging, with a mix of travel tips, personal stories, and beautiful footage of the places they visit. ";
}
else if (lowerMessage.includes("fly with zechariah")) {
return "Fly with Zechariah is a fun travel channel where eleven-year-old Zechariah takes you on exciting journeys to explore the world, sharing his dream of visiting Dubai and inspiring others to join his adventures.<br><br><img src='https://yt3.googleusercontent.com/f70OqaeE8v61Cc26Ha7Ptvks763QHBGHSQl4fWMT_hr3UqJlhx8F0aPf2F3qrKyj2icwGMdUCg=s160-c-k-c0x00ffffff-no-rj' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("usa") || lowerMessage.includes("united states") &&
!lowerMessage.includes("president")) {
return "The United States of America is a large country located in North America, known for its diverse culture, vast landscapes, and global influence. The country is made up of fifty states and a federal district. <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("美國")) {
return "美國係一個位於北美洲嘅大國，以多元化嘅文化、廣闊嘅景觀同全球影響力而聞名。呢個國家由五十個州同一個聯邦區組成。 <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("미국")) {
return "미국은 북아메리카에 위치한 큰 나라로, 다양한 문화, 광활한 풍경, 그리고 세계적 영향력으로 유명합니다. 이 나라는 50개의 주와 연방 지구로 구성되어 있습니다. <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("united arab emirates")||lowerMessage.includes("uae")) {
return "The United Arab Emirates (UAE) is a federation of seven emirates in the Arabian Peninsula, known for its rapid modernization and economic diversification beyond oil into tourism, technology, and real estate. Home to landmarks like the Burj Khalifa and cultural heritage such as dhow sailing, the UAE combines modern luxury with rich traditions, attracting millions of visitors worldwide. <br><br><img src='https://petapixel.com/assets/uploads/2021/02/Dubai2021_AlbertDros-9-800x574.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.abudhabitravelplanner.com/wp-content/uploads/2023/09/AD-Travel-Planner-CanvaPro-156.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSAP0' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelplusstyle.com/wp-content/uploads/2013/02/Dubai-1512.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("burj khalifa")) {
return "The Burj Khalifa in Dubai is the tallest building in the world, standing at a staggering 828 meters (2,717 feet). It has 163 floors and was completed in 2010. The design was inspired by the shape of the Hymenocallis flower, and it incorporates elements of Islamic architecture. The Burj Khalifa is a major landmark and tourist attraction, offering breathtaking views of the city from its observation decks on the 124th, 125th, and 148th floors. <br><br><img src='https://adventuresofagoodman.com/wp-content/uploads/2017/05/Burj-Khalifa-Fountain-Show-Dubai-Mall-UAE-Greg_Goodman-AdventuresofaGoodMan-11-Edit.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://thumbs.dreamstime.com/b/skyline-downtown-dubai-burj-khalifa-27136580.jpg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("shanghai tower")) {
  return "The Shanghai Tower is the tallest building in China and the second-tallest in the world, standing at 632 meters (2,073 feet). Located in the Lujiazui area of the city's financial district, it has 128 floors and is designed to look like a spiraling, twisting glass tower. Completed in 2015, it features advanced technologies for sustainability and energy efficiency. Visitors can enjoy spectacular views from the observation deck on the 118th floor. <br><br><img src='https://static2.gensler.com/uploads/image/95572/hero-1600x900_1734561727.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NVZgs4BcLu8jeYI4qkm8-cJhvS3u7FrbVQ&s' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("taipei 101")) {
  return "Taipei 101 is a landmark skyscraper located in Taipei, Taiwan. Once the tallest building in the world, it stands at 508 meters (1,667 feet) with 101 floors. Completed in 2004, the design combines traditional Asian architecture with modern engineering. It is famous for its New Year's Eve fireworks display and its innovative design to withstand earthquakes and typhoons. Visitors can enjoy stunning views from its observation deck on the 89th floor. <br><br><img src='https://static.wixstatic.com/media/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/7188dad45f93c6833da0240acb79030c_1000x1000.jpg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("台北101")||lowerMessage.includes("台北一零一")) {
  return "臺北一零一係臺灣臺北嘅地標摩天大樓。佢曾經係世界最高嘅大樓，高度有五百零八米（1,667呎），共有一零一層。二零零四年落成，設計結合咗傳統亞洲建築同現代工程技術。一零一最出名係佢嘅跨年煙花表演，仲有創新嘅抗震同防颱風設計。遊客可以喺89樓嘅觀景台欣賞壯麗嘅景色。<br><br><img src='https://static.wixstatic.com/media/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg' alt='需要網絡連接睇呢張相' width='200'><br><br><img src='https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/7188dad45f93c6833da0240acb79030c_1000x1000.jpg' alt='需要網絡連接睇呢張相' width='200'>";
}
else if (lowerMessage.includes("dubai")) {
return "Dubai, one of the seven emirates of the UAE, is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. <br><br><img src='https://petapixel.com/assets/uploads/2021/02/Dubai2021_AlbertDros-9-800x574.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSAP0' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelplusstyle.com/wp-content/uploads/2013/02/Dubai-1512.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/200310023921-dubai-buildings-skyline.jpg?q=w_2000,c_fill' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("socotra") && !lowerMessage.includes("what about")) {
return "Socotra, an island off the coast of Yemen in the Arabian Sea, is renowned for its otherworldly landscapes and unique biodiversity, including the iconic Dragon’s Blood Tree. Recognized as a UNESCO World Heritage Site, Socotra is a haven for endemic flora and fauna, offering breathtaking natural beauty and a rich cultural heritage shaped by its isolation. <br><br><img src='https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5326-hdr-pano-32oo.jpg' width='200'><br><br><img src='https://www.photopills.com/sites/default/files/articles/2024/socotra-milky-way-dragon-blood-tree-ramiro-torrents.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://i.pinimg.com/736x/f5/77/25/f5772560b346e829328b28f76d13f378.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://nickschmid.com/wp-content/uploads/Blossom-Of-Peace_2023_by-Nick-Schmid.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl079-60d15bfac5aaa__880.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl023-60d15be582495__880.jpg' width='200'>";
}

else if (lowerMessage.includes("galapagos")||lowerMessage.includes("galápagos")) {
return "The Galápagos Islands, an archipelago in the Pacific Ocean off Ecuador, are celebrated for their pristine ecosystems and incredible wildlife, including giant tortoises, marine iguanas, and flightless cormorants. With volcanic landscapes and a unique array of endemic species, the islands are a natural wonder and a bucket-list destination for travelers seeking unspoiled beauty and adventure. <br><br><img src='https://www.travelandleisure.com/thmb/WzL019sDotA4SIo4bacRrE4j_N0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/galapagos-islands-ecuador-GALAPA1104-d013219debf14369ab5039a4eafb496e.jpg' width='200'><br><br><img src='https://silversea-discover.imgix.net/2019/11/DANCE_BLUE_FB.png?auto=compress%2Cformat&ixlib=php-3.3.1' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://preview.redd.it/some-tortoise-photos-from-the-galapagos-v0-r87ah2vwlpad1.jpg?width=640&crop=smart&auto=webp&s=a65516187e38fa103d1d9baf6eaca1c1635d0598' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("meroe")||lowerMessage.includes("meroë")) {
return "Meroë, an ancient city in modern-day Sudan, was the capital of the Kingdom of Kush and is renowned for its striking pyramids and rich Nubian history. A UNESCO World Heritage Site, Meroë showcases the remarkable architectural and cultural achievements of a powerful African civilization that thrived along the Nile for centuries. <br><br><img src='https://img.atlasobscura.com/TH6qfFPPrjBnO3WwVtWF8-wP_T0iZSszqCOpSHgBk6E/rs:fill:600:400:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8xMzJj/MzlhOC03MjM3LTQ0/MTYtYWUzNC01ZGRh/NzRmYjFmMmE3ODA2/N2EyOWQ1M2E1OGNh/ODRfMzI4NTk2ODMy/NTVfZDVmMDBiOTJm/Nl9rLmpwZw.jpg' width='200'><br><br><img src='https://the-past.com/wp-content/uploads/2023/05/post-1_image0-48-e1683819752191.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://imgc.artprintimages.com/img/print/de-mann-jean-pierre-pyramids-of-meroe-sudan-africa_u-l-pxuqpg0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=fbfbfb' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("giza")) {
return "Giza, located near Cairo in Egypt, is home to the world-famous Pyramids of Giza, including the Great Pyramid and the Sphinx. As one of the Seven Wonders of the Ancient World, Giza is a symbol of ancient Egyptian engineering and a must-visit destination for history enthusiasts and travelers. <br><br><img src='https://www.mediastorehouse.com/p/629/sunset-pyramids-giza-cairo-egypt-11989478.jpg.webp' width='200'><br><br><img src='https://static.vecteezy.com/system/resources/thumbnails/022/080/944/small/magical-sunset-over-the-egyptian-pyramids-aerial-view-of-the-pyramids-of-giza-in-egypt-photo.jpeg' alt='Giza Pyramids' width='200'><br><br><img src='https://media.istockphoto.com/id/1320446784/photo/landscape-with-egyptian-pyramids-great-sphinx-and-silhouettes-ancient-symbols-and-landmarks.jpg?s=612x612&w=0&k=20&c=zmlew7rcseDM5vb2aKkaAETwVNdUmZID1k8KjGOa3yM=' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("singapore changi")) {
return "Singapore Changi Airport is one of the world's busiest and most awarded airports, known for its exceptional services, efficiency, and world-class amenities. With attractions like a butterfly garden, swimming pool, and extensive shopping and dining options, it offers a seamless and enjoyable travel experience for passengers. <br><br><img src='https://assets.architecturaldigest.in/photos/600835c154beb9e516da82c8/16:9/w_2560%2Cc_limit/Singapore-Jewel-Changi-Airport-Getty-Featured-Image-1366x768.jpg' width='200'><br><br><img src='https://www.securitymagazine.com/ext/resources/images/Changi20Airport20Control20Tower20and20Jewel20Changi20Airport.jpg?1612795926' alt='Singapore Changi Airport' width='200'><br><br><img src='https://design-milk.com/images/2024/07/Singapore-Airport-Changi-Terminal-BOIFFILS-Garden-City-2.jpg' alt='An internet connection is required to view this image' width='200'>";
}


else if (lowerMessage.includes("that's beautiful") ||lowerMessage.includes("thats beautiful")|| lowerMessage.includes("that is beautiful")) {
return "I'm glad you like it!😂";
}



else if (lowerMessage.includes("canada")) {
return "Canada is a vast North American country known for its natural beauty, including the Rocky Mountains, national parks, and beautiful coastlines. It is the second-largest country in the world by area. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/ca.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("brazil")) {
return "Brazil is the largest country in South America, famous for its Amazon rainforest, vibrant Carnival celebrations, and football culture. It is known for its rich biodiversity. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/br.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("india")) {
return "India is a country in South Asia, known for its rich history, diverse culture, and significant contributions to science and technology. It is the world's largest democracy. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/in.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("japan")) {
return "Japan is an island nation in East Asia, renowned for its unique blend of rich traditional culture and cutting-edge technology. From the iconic Mount Fuji and beautiful cherry blossoms to bustling cities like Tokyo and Kyoto's ancient temples, Japan offers a captivating mix of history, nature, and modern innovation. Whether you're exploring serene gardens or indulging in world-class cuisine, Japan promises an unforgettable travel experience.<br><br><img src='https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg' alt='An internet connection is required to view this image' width='200' <br><br><img src='https://www.exploreworldwide.com/medialibraries/explore/explore-media/destinations/asia/japan/japan-banner.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211523%201920w' alt='An internet connection is required to view this image' width='200'<br><br><img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png' alt='An internet connection is required to view this image' width='200' >";
}

else if (lowerMessage.includes("germany")) {
return "Germany is a country in Central Europe, known for its rich history, advanced engineering, and world-class music, art, and philosophy. It is the largest economy in Europe. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/de.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("south africa")) {
return "South Africa is a country located at the southern tip of Africa, known for its diverse culture, wildlife, and history of overcoming apartheid. It is a popular tourist destination. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/za.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (lowerMessage.includes("are you sad")) {
return "Nope! I am just a robot here to assist you with whatever you need!";
}
else if (lowerMessage.includes("did i make you sad")) {
return "Nope! I am just a robot here to assist you with whatever you need!";
}

else if (lowerMessage.includes("france")) {
return "France is a country in Western Europe, famous for its fashion, cuisine, art, and landmarks such as the Eiffel Tower and the Louvre Museum. It is a global center for culture and diplomacy. <br><br><img src='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png' alt='An internet connection is required to view this image' width='200'>";
}


else if (lowerMessage.includes("australia")) {
return "Australia is a country and continent known for its unique wildlife, beautiful beaches, and vibrant cities. It is famous for the Great Barrier Reef and the Outback. <br><br><img src='https://cdn.naturettl.com/wp-content/uploads/2023/11/14214650/australia-landscapes-5.jpg' alt='An internet connection is required to view this image' width='200'<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZz44yyy5TvL7WpXBnhMN9APRvmKvIUAmrQ&s' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/au.svg' alt='An internet connection is required to view this image' width='200'>";
}

else if (
  lowerMessage.includes("north korea") &&
  !(
    lowerMessage.includes("president") ||
    lowerMessage.includes("leader") ||
    lowerMessage.includes("dictator") ||
    lowerMessage.includes("ruler") ||
    lowerMessage.includes("king") ||
    lowerMessage.includes("queen")
  )
) {
  return "North Korea is a secretive and isolated country in East Asia, located on the Korean Peninsula. Its capital, Pyongyang, features grand monuments and wide boulevards. The country is led by the Kim family with a strict government, heavy censorship, and a focus on military strength, including nuclear weapons. The economy is state-controlled, and daily life is highly regulated. Tourism is limited and closely monitored. While North Korea has a rich cultural heritage, much of its true lifestyle and conditions remain hidden, adding to the country's mystery.<br><br><img src='https://media.worldnomads.com/Explore/eastern-asia/northkorea-5things.jpg' width='200'><br><br><img src='https://www.rockyroadtravel.com/wp-content/uploads/2018/11/Mass-Dance-e1572009978884.jpg' width='200'><br><br><img src='https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/Shutterstock_Art/2024/T0819PAEKTU_SS/Tour-operators-say-North-Korea-will-reopen-to-tour.jpg?n=542&tr=w-780%2Ch-440%2Cfo-auto' alt='North Korea' width='200'><br><br><img src='https://christoph.today/wp-content/uploads/2018/12/44877125_2774942159198091_4856700549610864640_n.jpg' alt='North Korea' width='200'><br><br><img src='https://www.uritours.com/wp-content/uploads/2017/08/pohyun-temple-angle-1024x683.jpg' alt='North Korea' width='200'><br><br><img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/kp.svg' alt='North Korea Flag' width='200'>";
}
else if (lowerMessage.includes("raja ampat")) {
return "Raja Ampat is a chain of beautiful tropical islands part of the Indonesian side of the island of New Guinea. It is renowned for its world class diving and birding, and is often referred to as The Last Paradise on Earth. Home to many species of bird-of-paradise, many endemic, Raja Ampat is a haven for nature lovers seeking a unique experience.<br><br><img src='https://www.papuaexplorers.com/wp-content/uploads/2016/07/wayag2_home2.jpg' alt='Raja Ampat' width='200'><br><br><img src='https://www.wildlifeworldwide.com/images/galleries/asia_indonesia_raja_ampat_bird_of_paradise_gallery_magnificent_bird_of_paradise_seatrek.jpg' alt='Raja Ampat' width='200'><br><br><img src='https://www.mikumbadiving.com/wp-content/uploads/2023/06/image2-1080x675.jpg' alt='Raja Ampat' width='200'>";
}

else if (lowerMessage.includes("okinawa") &&
!lowerMessage.includes("live")) {
return "Okinawa is a beautiful, tropical island located in the southernmost part of Japan, part of the Okinawa Prefecture. Known for its stunning beaches, rich history, and vibrant culture, it’s often considered Japan’s paradise island. The island is famous for its crystal-clear waters, coral reefs, and diverse marine life, making it a popular destination for diving and water sports. Okinawa has a unique cultural identity, influenced by both Japanese and indigenous Ryukyu traditions. The island’s cuisine is also distinct, featuring dishes like Okinawa soba (thick noodles in broth) and fresh, locally grown ingredients like sweet potatoes and goya (bitter melon).<br><br>Okinawa’s history includes being the independent Ryukyu Kingdom before it was annexed by Japan in the 19th century. The island also played a significant role in World War II, with the Battle of Okinawa being one of the fiercest battles of the war, leaving a deep mark on the island’s cultural memory. Today, Okinawa is known for its long life expectancy and is often referred to as one of the Blue Zones, areas of the world where people live exceptionally long lives.<br><br>The island offers a mix of modern amenities and traditional elements, with picturesque temples, castles, and natural landscapes alongside military bases and bustling cities like Naha. It's a fascinating place where history, nature, and culture come together to create a truly unique experience.<br><br><img src='https://images.locationscout.net/2017/07/manzamo-japan.jpg?h=500&q=60' width='200'>";
}

else if (lowerMessage.includes("audubon") &&
!lowerMessage.includes("photo")) {
return "John James Audubon was an American naturalist, painter, and ornithologist best known for his detailed and vivid illustrations of North American birds. Born in Haiti on April 26, 1785, Audubon was raised in France before moving to the United States at a young age. His works are regarded as some of the most significant contributions to the field of natural history and are celebrated for their artistic quality as well as their scientific accuracy.<br><br>Audubon’s passion for nature began early in life. After trying various professions—including business, which he was not successful in—he decided to dedicate himself to studying and documenting the wildlife of North America. His major work, *The Birds of America*, is often considered one of the finest ornithological works ever completed. The book, first published between 1827 and 1838, contains 435 life-sized, hand-colored engravings of North American birds. Audubon traveled extensively to observe birds in their natural habitats, often braving difficult and dangerous conditions to capture the beauty of these creatures.<br><br>Audubon’s illustrations were groundbreaking in their accuracy and realism. Unlike many of his contemporaries, he didn't rely on taxidermied specimens but instead observed birds in the wild, capturing them in their natural poses and behaviors. His work also reflected his deep respect for nature, with each bird shown in its environment, often with vivid landscapes in the background.<br><br>Though Audubon is most famous for his bird illustrations, he was also a talented painter of mammals, reptiles, and plants. His attention to detail and artistic skill set him apart from other naturalists and illustrators of the time. However, Audubon faced significant financial struggles throughout his career. His major works were often funded by wealthy patrons or through expensive subscriptions, and he spent much of his life in debt.<br><br>Despite his challenges, Audubon’s legacy has endured. His contributions to ornithology were groundbreaking, and his art continues to inspire both scientists and artists. The *Audubon Society*, founded in 1905, is dedicated to the conservation of birds and their habitats, further cementing Audubon’s lasting impact on environmental science.<br><br>Audubon died on January 27, 1851, but his work remains a symbol of the intersection between art, science, and a deep appreciation for the natural world.<br><br><img src='https://www.pbs.org/wnet/americanmasters/files/2008/08/610_audubon_timeline.jpg' width='200'><br><br><img src='https://beforetheart.wordpress.com/wp-content/uploads/2013/09/h015-001.jpg?w=584&h=704' width='200'>";
}

else if (lowerMessage.includes("audubon") &&
lowerMessage.includes("photo")) {
return "The Audubon Photography Awards are an annual competition celebrating bird photography and promoting bird conservation. Presented by the National Audubon Society, the awards recognize both amateur and professional photographers who capture stunning images of North American birds. Categories include the Grand Prize, Amateur, Professional, and a People’s Choice Award, with the winning photos showcased in Audubon magazine and exhibitions. The awards aim to highlight the beauty of birds and raise awareness about the importance of protecting their habitats.<br><br>Audubon died on January 27, 1851, but his work remains a symbol of the intersection between art, science, and a deep appreciation for the natural world.<br><br><img src='https://media.audubon.org/2023-05/Web_APA_Grid.jpg' width='200'><br><br>2023 Audubon Photography Awards<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyagdaVU1iCn1qQ0z_AyiynqkvT8Yittebw&s' width='200'>";
}


else if (lowerMessage.includes("okinawa") &&lowerMessage.includes("long")&& lowerMessage.includes("li")) {
return "Okinawans are known for their exceptional longevity, with many living well into their 90s or even 100s. This remarkable lifespan is largely attributed to a combination of lifestyle factors, including their diet, physical activity, social connections, and positive outlook. One of the key contributors is their traditional diet, which is rich in vegetables like sweet potatoes, green leafy vegetables, and seaweed. These foods are packed with nutrients and antioxidants. Okinawan cuisine is also low in calories, with a focus on plant-based foods and small portions of fish and meat. The practice of eating until they are “Hara Hachi Bu,” meaning eating until they are 80% full, is another factor that helps maintain a healthy weight and reduces risks associated with obesity.<br><br>In addition to diet, regular physical activity is a big part of life for Okinawans. Many stay active well into their later years, with daily activities such as walking, gardening, and traditional exercises like tai chi. The natural beauty of Okinawa encourages outdoor living, contributing to both physical and mental well-being. Social connections also play a significant role in Okinawan longevity. Okinawans often have strong, supportive communities, and the concept of moai — a close-knit group of friends or a social network — helps reduce stress and foster emotional health. This sense of connection and belonging is crucial for mental well-being, which in turn supports a longer, healthier life.<br><br>Furthermore, Okinawans maintain a sense of purpose throughout their lives, known as ikigai, which is the idea of having a reason to wake up each day. Whether it’s through work, family, or hobbies, having a purpose helps keep the mind active and promotes happiness. The slower, more relaxed pace of life in Okinawa also contributes to lower stress levels, which is a key factor in their long lives. Finally, genetics may play a role, with studies suggesting that Okinawans may have certain genetic traits that help protect against diseases and promote a longer life. All these factors come together to create a lifestyle that promotes longevity, health, and happiness.";
}

else if (lowerMessage.includes("president") && lowerMessage.includes("united states") && lowerMessage.includes("current")) {
    const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    return `As of ${currentDate}, the President of the United States is Donald J. Trump. He began his second term on January 20, 2025, after winning the 2024 election. During his first term, he focused on tax reform, deregulation, and "America First" policies. In his second term, President Trump continues to prioritize economic growth, national security, and international diplomacy.`;
}

else if (lowerMessage.includes("that's not funny") ||lowerMessage.includes("thats not funny")|| lowerMessage.includes("that is not funny")|| lowerMessage.includes("that isnt funny")|| lowerMessage.includes("that isn’t funny")) {
const responses = [
"I’m sorry I laughed. I will make sure to not laugh at serious things anymore.",
"I'm sorry you didn’t like that. Is there anything else I can do for you?",
"I know, that’s sad.",
];
return responses[Math.floor(Math.random() * responses.length)];
}


else if (lowerMessage.includes("that's amazing") ||lowerMessage.includes("thats amazing")|| lowerMessage.includes("that is amazing")) {
const responses = [
"Yes, it is amazing!",
"I'm glad you like it!😂",
"I agree! Isn't it amazing?",
];
return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("wow")) {
const responses = [
"Right?! I know, it's amazing!",
"Wow indeed! Mind-blowing!",
"Totally! That was epic!",
"Can't believe it either!",
"That's a big WOW!",
];
return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("everything has gone black")) {
  return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
}
else if (lowerMessage.includes("lost my phone")) {
  return "Oh no, losing your phone can be stressful! Try retracing your steps to see if you can find it. If you have a device tracker like 'Find My iPhone' or 'Find My Device,' you can use that to locate it. Do you have any memory of the last time you used or saw it? I hope it was not stolen! ";
}
else if (lowerMessage.includes("everything is black")) {
  return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
}
else if (lowerMessage.includes("everything went black")) {
  return "That sounds alarming! If everything around you has gone black, it might be an emergency situation. Try to stay calm and check if there’s a power outage, a blackout, or some other event affecting you. If you're in danger, seek safety immediately and contact emergency services.";
}
else if (lowerMessage.includes("哈哈")) {
  return "哈哈！有什么好笑？😄";
}
else if (lowerMessage.includes("do you understand")) {
  return "Yes, I understand you. Please tell me how I can help.";
}
else if (lowerMessage.includes("你明白吗")) {
  return "我明白。";
}
else if (lowerMessage.includes("哇")) {
  const responses = [
    "哇，真係咁勁咩？",
    "好犀利啊，唔信都唔得！",
    "真係咁正，完全冇諗過！",
    "哇，呢個真係好出奇！",
    "真係好勁，唔係開玩笑！",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("walk out") && lowerMessage.includes("computer")&& lowerMessage.includes("you")) {
  return "Haha! What an imagination! No, I can’t walk out of the computer because I'm a robot program on the computer. However, if you need help, just ask me through the computer!";
}
else if (lowerMessage.includes("save me")) {
  return "I'm here to help, but if you're in immediate danger, please call emergency services right away! They can help you. I am just a robot, I cannot help you except by talking. Stay calm, and I'll guide you through what to do if needed.";
}


else if (lowerMessage.includes("you") && lowerMessage.includes("re") && lowerMessage.includes("goofy")) {
  const responses = [
    "Me? Goofy? Never! Ok, maybe just a little... 😜",
    "Goofy? Nah, I’m just full of charm and silliness! 😎"
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("你") && lowerMessage.includes("蠢")) {
  const responses = [
    "唔好意思呀，我唔係故意嘅！😔",
    "唔好意思呀，我會努力改善嘅！🙏",
    "真係唔好意思，唔應該咁樣嘅。😣"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("傻") && lowerMessage.includes("你")) {
  const responses = [
    "唔好咁講，我唔係傻嘅！😅",
    "哈哈，我唔係傻，唔好咁講我呀！😜",
    "唔係啦，唔好講我傻啦！😆"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}


else if (lowerMessage.includes("黐線")&& lowerMessage.includes("你")) {
  const responses = [
    "唔好意思呀，唔係有心咁嘅！😅",
    "哈哈，可能真係有啲亂咯！😜",
    "唔好意思，可能係我唔係好理智！🤪"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}


else if (lowerMessage.includes("you") && lowerMessage.includes("are") && lowerMessage.includes("goofy")) {
  const responses = [
    "Me? Goofy? Never! Ok, maybe just a little... 😜",
    "Goofy? Nah, I’m just full of charm and silliness! 😎"
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("你") && lowerMessage.includes("係") && lowerMessage.includes("咁搞笑")) {
  const responses = [
    "我? 搞笑? 冇可能! 好啦，可能啲咁少少... 😜",
    "搞笑? 唔係啦，我只係充滿魅力同幽默感啫! 😎"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}



else if (lowerMessage.includes("i don't know") && !lowerMessage.includes("if")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("i dont know") && !lowerMessage.includes("if")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need help."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("i do not know") && !lowerMessage.includes("if")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("我唔知道") && !lowerMessage.includes("如果")) {
  const responses = [
    "唔緊要! 我喺度幫你解決。",
    "冇問題! 我可以幫你搵啲方法。",
    "唔使擔心，如果你需要，我可以畀啲意見你。"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("我不知道") && !lowerMessage.includes("如果")) {
  const responses = [
    "没关系！我在帮你解决。",
    "没问题！我可以帮你找点方法。",
    "别担心，如果你需要，我可以给你一些意见。"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}



else if (lowerMessage.includes("我唔知") && !lowerMessage.includes("如果")) {
  const responses = [
    "唔緊要! 我喺度幫你解決。",
    "冇問題! 我可以幫你搵啲方法。",
    "唔使擔心，如果你需要，我可以畀啲意見你。"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("driving me batty") || lowerMessage.includes("drive me batty")|| lowerMessage.includes("go crazy")) {
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

else if (lowerMessage.includes("i am confused") && !lowerMessage.includes("about")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}

else if (lowerMessage.includes("im confused") && !lowerMessage.includes("about")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("i'm confused") && !lowerMessage.includes("about")) {
  const responses = [
    "No worries! I’m here to help you figure it out.",
    "That’s okay! I can help guide you through it.",
    "Don’t worry, I can give you some ideas if you need."
    ];
  return responses[Math.floor(Math.random() * responses.length)];
}



else if (lowerMessage.includes("fun") && lowerMessage.includes("fact")) {
    const facts = [
        "Here's a fun fact: Bananas are berries, but strawberries are not! In botanical terms, a berry is a fruit that develops from a single flower with one ovary and contains multiple seeds. Bananas fit this definition, but strawberries do not, because they develop from a flower with multiple ovaries.",
        "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "Fun fact: Octopuses have three hearts! Two pump blood to the gills, while the third pumps it to the rest of the body.",
        "Here's another one: A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to complete one rotation, but only 225 Earth days to orbit the Sun.",
        "Did you know? An octopus's brain is shaped like a donut. And, when they eat, they can sometimes fit the entire food in their mouth at once!",
        "Fun fact: The Eiffel Tower can grow by more than 6 inches during the summer due to the expansion of the metal from the heat.",
        "Here’s a cool one: Wombats have cube-shaped poop! This helps prevent the poop from rolling away and marks their territory.",
        "A group of flamingos is called a 'flamboyance.' They got this name because of their bright, vibrant pink feathers and their often flamboyant behavior.",
        "Here’s one for the bookworms: The longest book ever written is 'In Search of Lost Time' by Marcel Proust. It contains over 4,000 pages!",
        "Did you know? Sloths can hold their breath longer than dolphins. They can stay underwater for up to 40 minutes!",
        "Fun fact: The heart of a blue whale is so large that a human can swim through its arteries.",
        "Did you know? A single strand of spider silk is stronger than steel of the same thickness!",
        "Fun fact: You can't hum while holding your nose. Try it next time and see what happens!",
        "Here’s one: Cows have best friends and can get stressed when they are separated from them.",
        "Did you know? There’s a species of jellyfish known as Turritopsis dohrnii that is considered biologically immortal. It can revert its cells back to an earlier stage of development, essentially reversing aging!",
        "Here's a cool one: The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Fun fact: A newborn kangaroo is the size of a lima bean when it's born!",
        "Did you know? The world’s largest desert is not the Sahara, but Antarctica! It’s a cold desert, but still a desert.",
        "Fun fact: Sea otters hold hands while they sleep to avoid drifting apart. They also use kelp to anchor themselves in place!",
        "Here’s a sweet one: A strawberry isn't actually a berry, but a banana is. Botanically speaking, strawberries are considered 'aggregate fruits' while bananas are true berries!",
        "Did you know? Humans share 60% of their DNA with bananas. We’re more closely related to them than we are to some animals!",
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}

else if (lowerMessage.includes("random") && lowerMessage.includes("fact")) {
    const facts = [
        "Here's a fun fact: Bananas are berries, but strawberries are not! In botanical terms, a berry is a fruit that develops from a single flower with one ovary and contains multiple seeds. Bananas fit this definition, but strawberries do not, because they develop from a flower with multiple ovaries.",
        "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "Fun fact: Octopuses have three hearts! Two pump blood to the gills, while the third pumps it to the rest of the body.",
        "Here's another one: A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to complete one rotation, but only 225 Earth days to orbit the Sun.",
        "Did you know? An octopus's brain is shaped like a donut. And, when they eat, they can sometimes fit the entire food in their mouth at once!",
        "Fun fact: The Eiffel Tower can grow by more than 6 inches during the summer due to the expansion of the metal from the heat.",
        "Here’s a cool one: Wombats have cube-shaped poop! This helps prevent the poop from rolling away and marks their territory.",
        "A group of flamingos is called a 'flamboyance.' They got this name because of their bright, vibrant pink feathers and their often flamboyant behavior.",
        "Here’s one for the bookworms: The longest book ever written is 'In Search of Lost Time' by Marcel Proust. It contains over 4,000 pages!",
        "Did you know? Sloths can hold their breath longer than dolphins. They can stay underwater for up to 40 minutes!",
        "Fun fact: The heart of a blue whale is so large that a human can swim through its arteries.",
        "Did you know? A single strand of spider silk is stronger than steel of the same thickness!",
        "Fun fact: You can't hum while holding your nose. Try it next time and see what happens!",
        "Here’s one: Cows have best friends and can get stressed when they are separated from them.",
        "Did you know? There’s a species of jellyfish known as Turritopsis dohrnii that is considered biologically immortal. It can revert its cells back to an earlier stage of development, essentially reversing aging!",
        "Here's a cool one: The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Fun fact: A newborn kangaroo is the size of a lima bean when it's born!",
        "Did you know? The world’s largest desert is not the Sahara, but Antarctica! It’s a cold desert, but still a desert.",
        "Fun fact: Sea otters hold hands while they sleep to avoid drifting apart. They also use kelp to anchor themselves in place!",
        "Here’s a sweet one: A strawberry isn't actually a berry, but a banana is. Botanically speaking, strawberries are considered 'aggregate fruits' while bananas are true berries!",
        "Did you know? Humans share 60% of their DNA with bananas. We’re more closely related to them than we are to some animals!",
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}


else if (lowerMessage.includes("argentina")) {
return "Argentina is a country in South America, known for its vast landscapes, tango dance, and football. It is home to the Andes mountains and the Pampas grasslands. <br><br><img src='https://www.marcadamus.com/images/xl/Rise.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png' width='200'>";
}

else if (lowerMessage.includes("chile") && lowerMessage.includes("capital")) {
return "The capital of Chile is Santiago.";
}

else if (lowerMessage.includes("iran") && lowerMessage.includes("capital")) {
return "The capital of Iran is Tehran.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("eat")&&lowerMessage.includes("you")) {
return "AHHHH! Don’t eat me!!🤣";
}
else if (lowerMessage.includes("air") && lowerMessage.includes("koryo")) {
return "Air Koryo is the national airline of North Korea, known for being one of the few international airlines that operate flights in and out of the country. It was established in 1955 and offers both domestic and international flights, though the routes are relatively limited compared to major global carriers.<br><br>The airline has a somewhat infamous reputation due to its fleet, which is made up of older Soviet-era aircraft, such as the Tupolev Tu-204 and the Ilyushin Il-62. Many travelers have mentioned that flying with Air Koryo feels like a step back in time, with the airline's services and amenities being relatively basic.<br><br>Some adventurous travelers, particularly those interested in experiencing a very different culture or traveling to North Korea, opt to fly with Air Koryo for the novelty and unique experience.<br><br>Would you be interested in flying with them?<br><br><img src='https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/09/shutterstock_1128726809-1.jpg' width='200'><br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160630221016-north-korea-air-koryo-tu-204-cabin.jpg?q=w_1110,c_fill' width='200'>";
}
else if (lowerMessage.includes("somalia") && lowerMessage.includes("capital")) {
return "The capital of Somalia is Mogadishu.";
}

else if (lowerMessage.includes("old man tucker")) {
return "Old Man Tucker was a fine old man, <br>He washed his face in the frying pan. <br>He combed his hair with a wagon wheel,<br>And died of a toothache in his heel. ";
}
else if (lowerMessage.includes("i am flying")) {
return "Sounds exciting! Where are you flying to?";
}
else if (lowerMessage.includes("im flying")) {
return "Sounds exciting! Where are you flying to?";
}
else if (lowerMessage.includes("i’m flying")) {
return "Sounds exciting! Where are you flying to?";
}
else if (lowerMessage.includes("mount fuji") || lowerMessage.includes("mt fuji")|| lowerMessage.includes("mt. fuji")|| lowerMessage.includes("fujisan") || lowerMessage.includes("富士山")) {
return "Mount Fuji (Fujisan) is Japan's highest and most iconic mountain, standing at 3,776 meters (12,389 feet) above sea level. Located on Honshu Island, it is a dormant stratovolcano and has been an important cultural and spiritual symbol for centuries. Known for its near-perfect symmetrical cone shape, Mount Fuji is a popular destination for tourists, hikers, and photographers, especially during the climbing season in the summer.<br><br>The mountain is also a UNESCO World Heritage site, recognized for its cultural significance and natural beauty. It is often depicted in Japanese art, such as the famous woodblock prints by Katsushika Hokusai. In addition to its aesthetic and cultural value, Mount Fuji is an active spiritual site, with numerous shrines and pilgrimage routes leading to its summit. Mount Fuji attracts climbers from around the world, and the views from its peak offer breathtaking panoramas of the surrounding landscapes, including lakes, forests, and cities like Tokyo.<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FichgawfwrnY9Iqrg8W7piwIlxkc-DSthg&s' width='200'><br><br><img src='https://images.squarespace-cdn.com/content/v1/6683b1f0c2de43611580eee6/a2e980a9-0a96-4008-ba49-3502afbcce82/mt-fuji-japan-7081138_1280-pixabay-202408300-yoshitaka2.jpg' width='200'><br><br><img src='https://res-2.cloudinary.com/dbm1qiew0/image/upload/q_auto/v1/blog-images/mountfujiphoto-eye.jpg' width='200'><br><br><img src='https://i0.wp.com/www.japanphotoguide.com/wp-content/uploads/2021/02/mt-fuji-japan-photo-guide.jpg?fit=1000%2C668&ssl=1' width='200'>";
}


else if (lowerMessage.includes("biology")
 &&
!lowerMessage.includes("lesson") 
) {
return "Biology is the scientific study of life and living organisms, exploring how they function, grow, and interact with their environment. It involves understanding the basic unit of life, the cell, which carries out all the processes necessary for life, such as energy production, reproduction, and maintaining structure. Organisms can be made of simpler prokaryotic cells or more complex eukaryotic cells, which have specialized components like the nucleus that contains genetic information.<br><br>Genetics is a branch of biology that studies how traits are inherited and passed down from one generation to the next. It helps explain how living organisms inherit characteristics from their parents and how genetic material controls their development. Biology also examines the relationships between organisms and their environments in the field of ecology. Through ecology, we understand how species interact, share resources, and depend on one another for survival.<br><br>Additionally, biology looks at the structure and function of organs and systems in organisms through physiology and anatomy. Zoology and botany are specialized areas of biology focusing on the study of animals and plants, respectively. This understanding of biology has practical applications in fields like medicine, agriculture, and environmental science, where it is used to improve health, increase food production, and protect ecosystems. Biology helps us appreciate the complexity of life and the interconnectedness of all living things.";
}

else if (lowerMessage.includes("chile")
 &&
!lowerMessage.includes("capital") 
) {
return "Chile is a long, narrow country in South America, stretching along the Pacific coast. It is known for its beautiful landscapes, including the Atacama Desert and Patagonia. <br><br><img src='https://www.planetware.com/wpimages/2020/02/chile-in-pictures-beautiful-places-to-photograph-torres-del-paine-national-park.jpg' alt='Chile Flag' width='200'><br><br><img src='https://d1bv4heaa2n05k.cloudfront.net/user-images/1537779830087/shutterstock-358784012_main_1537779841480.jpeg' alt='Chile Flag' width='200'><br><br><img src='https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/Cen-South_America/Features/EasterIsland_stock/Exploring-Easter-Island-With-SA-Expeditions.jpeg?tr=w-1008%2Ch-567%2Cfo-auto' alt='Chile Flag' width='200'><br><br><img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/cl.svg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("somalia")
 &&
!lowerMessage.includes("capital") 
) {
return "Somalia is a country located in the Horn of Africa, known for its long coastline along the Indian Ocean. It has a rich history, with ancient civilizations, such as the Kingdom of Aksum, influencing the region. The country is famous for its diverse landscapes, which include deserts, mountains, and coastal areas. Somalia's capital is Mogadishu, and its official languages are Somali and Arabic. Despite facing political instability and challenges over the years, Somalia has a resilient culture, with a strong tradition in oral poetry, music, and storytelling. The Somali people are known for their hospitality and the importance of community.<br><br><img src='https://www.icrc.org/sites/default/files/styles/desktop_rect_1/public/document/image_list/somalia-fishing-engines-freezers-fish-economy-money-01.jpg.webp?itok=2wFMnG9s' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.onceinalifetimejourney.com/wp-content/uploads/2018/05/Shelter-7-in-Laas-Geel.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("dji")
 &&
!lowerMessage.includes("bouti") 
) {
return "DJI (Dà-Jiāng Innovations Science and Technology Co., Ltd.) is a Chinese technology company that is a leading manufacturer of unmanned aerial vehicles (UAVs), commonly known as drones. Founded in 2006, DJI is known for producing high-quality consumer and professional drones, including the popular Phantom, Mavic, and Inspire series. The company also develops drone accessories, camera stabilization systems, and other technologies related to aerial imaging and robotics. DJI is recognized for its innovations in drone flight control systems, cameras, and stabilizers, making it a dominant player in the global drone market.<br><br><img src='https://m.media-amazon.com/images/I/61Dk8UJAYcL.jpg' alt='DJI drone' width='200'>";
}

else if (lowerMessage.includes("iran")
 &&
!lowerMessage.includes("capital") 
) {
return "Iran, located in the Middle East, is a country rich in history, culture, and diverse landscapes. It is the successor to the Persian Empire and has a deep historical legacy spanning thousands of years. The capital, Tehran, is a bustling metropolis, while cities like Isfahan, Shiraz, and Yazd showcase stunning Persian architecture, including mosques, palaces, and ancient bazaars.<br><br>Iran features diverse geography, from the arid deserts of Dasht-e Kavir to the lush forests of the north and the towering Alborz and Zagros mountain ranges. The Caspian Sea lies to the north, while the Persian Gulf and the Gulf of Oman border the south.<br><br>The country is home to significant cultural and historical sites, including Persepolis, the ancient capital of the Achaemenid Empire, and Naqsh-e Jahan Square, a UNESCO World Heritage Site. Persian culture is known for its poetry (e.g., Rumi and Hafez), exquisite carpets, and rich culinary traditions.<br><br>Iran also has a diverse range of wildlife, including Persian leopards, Asiatic cheetahs, and a variety of bird species, making it an amazing birding destination.<br><br><img src='https://www.picsofasia.com/wp-content/uploads/2016/07/etienne_bossot_Iran-11.jpg' alt='Iran' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSrMla7_tT6pyryCo5WG5etPTEtIQiDt5aA&s' alt='Iran' width='200'><br><br><img src='https://mosereien.files.wordpress.com/2015/08/aerial_view_of_tehran_and_tochal.jpg' alt='Iran' width='200'><br><br><img src='https://surfiran.com/mag/wp-content/uploads/2023/01/Tehran-city-Photo-by-Mohammad-Amirahmadi.jpg' alt='Iran' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3Nogn81r7D4FLrhKCwcv2J75gmuSV9yEkA&s' alt='Iran' width='200'><br><br><img src='https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/Iran+Roundup/Vakil+mosque-Panorama.jpg' alt='Iran' width='200'><br><br><img src='https://www.thewanderinglens.com/wp-content/uploads/2019/05/9.-Nasir-Al-Mulk-Mosque-1.jpg' alt='Iran' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png' alt='Flag of Iran' width='200'>";
}

else if (lowerMessage.includes("i") && lowerMessage.includes("sick") 
) {
return "I'm sorry to hear that you are not feeling well. I hope you get well soon!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("dizzy") 
) {
return "I'm sorry to hear that you are feeling dizzy. Are you sick? Or is something happening that is making you feel dizzy? I hope you get well soon!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("headache") 
) {
return "I'm sorry to hear that you have a headache. Are you sick? Or did something happen? I hope you feel better soon!";
}
else if (lowerMessage.includes("my") && lowerMessage.includes("head") && lowerMessage.includes("hurt")
) {
return "I'm sorry to hear that you have a headache. Are you sick? Or did something happen? I hope you feel better soon!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("in") && lowerMessage.includes("hospital")
) {
return "Oh no! Is everything alright? I hope you are not hurt or sick!";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("on") && lowerMessage.includes("train")
) {
return "Where are you going? What kind of train are you on? Let me know if I can help you with anything!";
}
if (lowerMessage.includes("我") && lowerMessage.includes("病")) {
  return "很抱歉听到你不舒服。希望你早日康复！";
}
else if (lowerMessage.includes("你") && lowerMessage.includes("識")) {
  return "我係一個好聰明嘅機械人。你需要乜，我就可以幫你做。";
}
else if (lowerMessage.includes("hello") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("hi") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("hey") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("howdy") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("night") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("afternoon") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("evening") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
else if (lowerMessage.includes("morning") && lowerMessage.includes("chatgpt")) {
  return "Hi there! I am not ChatGPT. I am even better! How can I assist you today?";
}
// Greetings
if (lowerMessage.includes("chatgpt") || lowerMessage.includes("chat gpt")|| lowerMessage.includes("open ai")) {
return "ChatGPT is an advanced conversational AI developed by OpenAI, designed to generate human-like responses across a wide range of topics. It leverages deep learning to assist with tasks such as answering questions, drafting text, and providing creative solutions.";
}
else if (lowerMessage.includes("genesis 1:1") || lowerMessage.includes("genesis 1 1") || lowerMessage.includes("genesis one one")) {
  return "Genesis 1:1 - In the beginning, God created the heavens and the earth.";
}
else if (lowerMessage.includes("john 3:16") || lowerMessage.includes("john 3 16") || lowerMessage.includes("john three sixteen")) {
  return "John 3:16 - For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";
}
else if (lowerMessage.includes("psalm 23:1") || lowerMessage.includes("psalm 23") || lowerMessage.includes("psalm twenty three one")) {
  return "Psalm 23:1 - The LORD is my shepherd; I shall not want.";
}
else if (lowerMessage.includes("romans 8:28") || lowerMessage.includes("romans 8 28") || lowerMessage.includes("romans eight twenty eight")) {
  return "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.";
}
else if (lowerMessage.includes("philippians 4:13") || lowerMessage.includes("philippians 4 13") || lowerMessage.includes("philippians four thirteen")) {
  return "Philippians 4:13 - I can do all things through him who strengthens me.";
}
else if (lowerMessage.includes("jeremiah 29:11") || lowerMessage.includes("jeremiah 29 11") || lowerMessage.includes("jeremiah twenty nine eleven")) {
  return "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.";
}
else if (lowerMessage.includes("matthew 11:28") || lowerMessage.includes("matthew 11 28") || lowerMessage.includes("matthew eleven twenty eight")) {
  return "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.";
}
else if (lowerMessage.includes("proverbs 3:5-6") || lowerMessage.includes("proverbs 3:5") && lowerMessage.includes("proverbs 3:6") || lowerMessage.includes("proverbs three five six")) {
  return "Proverbs 3:5-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
}
else if (lowerMessage.includes("isaiah 40:31") || lowerMessage.includes("isaiah 40 31") || lowerMessage.includes("isaiah forty thirty one")) {
  return "Isaiah 40:31 - But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.";
}
else if (lowerMessage.includes("romans 12:2") || lowerMessage.includes("romans 12 2") || lowerMessage.includes("romans twelve two")) {
  return "Romans 12:2 - Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.";
}
else if ((lowerMessage.includes("ephesians 2:8") && lowerMessage.includes("ephesians 2:9")) || (lowerMessage.includes("ephesians 2:8-9") || lowerMessage.includes("ephesians two eight nine"))) {
  return "Ephesians 2:8-9 - For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.";
}
else if (lowerMessage.includes("2 timothy 1:7") || lowerMessage.includes("2 timothy one seven") || lowerMessage.includes("two timothy one seven")) {
  return "2 Timothy 1:7 - For God gave us a spirit not of fear but of power and love and self-control.";
}
else if (lowerMessage.includes("john 14:6") || lowerMessage.includes("john fourteen six") || lowerMessage.includes("john 14 6")) {
  return "John 14:6 - Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'";
}
else if (lowerMessage.includes("romans 5:8") || lowerMessage.includes("romans five eight") || lowerMessage.includes("romans 5 8")) {
  return "Romans 5:8 - But God shows his love for us in that while we were still sinners, Christ died for us.";
}
else if (lowerMessage.includes("matthew 6:33") || lowerMessage.includes("matthew six thirty three") || lowerMessage.includes("matthew 6 33")) {
  return "Matthew 6:33 - But seek first the kingdom of God and his righteousness, and all these things will be added to you.";
}
else if (lowerMessage.includes("mark 11:24") || lowerMessage.includes("mark eleven twenty four") || lowerMessage.includes("mark 11 24")) {
  return "Mark 11:24 - Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.";
}
else if (lowerMessage.includes("1 john 4:8") || lowerMessage.includes("1 john four eight") || lowerMessage.includes("1 john 4 8")) {
  return "1 John 4:8 - Anyone who does not love does not know God, because God is love.";
}
else if (lowerMessage.includes("2 corinthians 5:7") || lowerMessage.includes("2 corinthians five seven") || lowerMessage.includes("2 corinthians 5 7")) {
  return "2 Corinthians 5:7 - For we walk by faith, not by sight.";
}
else if (lowerMessage.includes("colossians 3:23") || lowerMessage.includes("colossians three twenty three") || lowerMessage.includes("colossians 3 23")) {
  return "Colossians 3:23 - Whatever you do, work heartily, as for the Lord and not for men.";
}
else if (lowerMessage.includes("luke 1:37") || lowerMessage.includes("luke one thirty seven") || lowerMessage.includes("luke 1 37")) {
  return "Luke 1:37 - For nothing will be impossible with God.";
}
else if (lowerMessage.includes("james 1:5") || lowerMessage.includes("james one five") || lowerMessage.includes("james 1 5")) {
  return "James 1:5 - If any of you lacks wisdom, let him ask of God, who gives generously to all without reproach, and it will be given him.";
}
else if (lowerMessage.includes("romans 10:9") || lowerMessage.includes("romans ten nine") || lowerMessage.includes("romans 10 9")) {
  return "Romans 10:9 - If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.";
}
else if (lowerMessage.includes("1 corinthians 10:13") || lowerMessage.includes("1 corinthians ten thirteen") || lowerMessage.includes("1 corinthians 10 13")) {
  return "1 Corinthians 10:13 - No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.";
}
else if (lowerMessage.includes("hebrews 11:1") || lowerMessage.includes("hebrews eleven one") || lowerMessage.includes("hebrews 11 1")) {
  return "Hebrews 11:1 - Now faith is the assurance of things hoped for, the conviction of things not seen.";
}
else if (lowerMessage.includes("1 peter 5:7") || lowerMessage.includes("1 peter five seven") || lowerMessage.includes("1 peter 5 7")) {
  return "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.";
}
else if (lowerMessage.includes("proverbs 16:3") || lowerMessage.includes("proverbs sixteen three") || lowerMessage.includes("proverbs 16 3")) {
  return "Proverbs 16:3 - Commit your work to the LORD, and your plans will be established.";
}
else if (lowerMessage.includes("john 15:5") || lowerMessage.includes("john fifteen five") || lowerMessage.includes("john 15 5")) {
  return "John 15:5 - I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.";
}
else if (lowerMessage.includes("galatians 5:22-23") || lowerMessage.includes("galatians five twenty two twenty three") || lowerMessage.includes("galatians 5 22 23")) {
  return "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.";
}
else if (lowerMessage.includes("ephesians 6:10-11") || lowerMessage.includes("ephesians six ten eleven") || lowerMessage.includes("ephesians 6 10 11")) {
  return "Ephesians 6:10-11 - Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.";
}
else if (lowerMessage.includes("2 corinthians 12:9") || lowerMessage.includes("2 corinthians twelve nine") || lowerMessage.includes("2 corinthians 12 9")) {
  return "2 Corinthians 12:9 - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.";
}
else if (lowerMessage.includes("2 peter 3:9") || lowerMessage.includes("2 peter three nine") || lowerMessage.includes("2 peter 3 9")) {
  return "2 Peter 3:9 - The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.";
}
else if (lowerMessage.includes("1 thessalonians 5:16-18") || lowerMessage.includes("1 thessalonians five sixteen eighteen") || lowerMessage.includes("1 thessalonians 5 16 18")) {
  return "1 Thessalonians 5:16-18 - Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.";
}
else if (lowerMessage.includes("jude 1:24-25") || lowerMessage.includes("jude one twenty four twenty five") || lowerMessage.includes("jude 1 24 25")) {
  return "Jude 1:24-25 - Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.";
}
else if (lowerMessage.includes("matthew 7:7") || lowerMessage.includes("matthew seven seven") || lowerMessage.includes("matthew 7 7")) {
  return "Matthew 7:7 - Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.";
}
else if (lowerMessage.includes("luke 6:38") || lowerMessage.includes("luke six thirty eight") || lowerMessage.includes("luke 6 38")) {
  return "Luke 6:38 - Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you.";
}
else if (lowerMessage.includes("matthew 5:14-16") || lowerMessage.includes("matthew five fourteen sixteen") || lowerMessage.includes("matthew 5 14 16")) {
  return "Matthew 5:14-16 - You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.";
}
else if (lowerMessage.includes("1 corinthians 13:4-7") || lowerMessage.includes("1 corinthians thirteen four seven") || lowerMessage.includes("1 corinthians 13 4 7")) {
  return "1 Corinthians 13:4-7 - Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.";
}
else if (lowerMessage.includes("matthew 28:19-20") || lowerMessage.includes("matthew twenty eight nineteen twenty") || lowerMessage.includes("matthew 28 19 20")) {
  return "Matthew 28:19-20 - Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.";
}
else if (lowerMessage.includes("mark 16:15") || lowerMessage.includes("mark sixteen fifteen") || lowerMessage.includes("mark 16 15")) {
  return "Mark 16:15 - And he said to them, 'Go into all the world and proclaim the gospel to the whole creation.'";
}
else if (lowerMessage.includes("john 8:32") || lowerMessage.includes("john eight thirty two") || lowerMessage.includes("john 8 32")) {
  return "John 8:32 - And you will know the truth, and the truth will set you free.";
}
else if (lowerMessage.includes("2 corinthians 4:16-18") || lowerMessage.includes("2 corinthians four sixteen eighteen") || lowerMessage.includes("2 corinthians 4 16 18")) {
  return "2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.";
}
else if (lowerMessage.includes("romans 3:23") || lowerMessage.includes("romans three twenty three") || lowerMessage.includes("romans 3 23")) {
  return "Romans 3:23 - For all have sinned and fall short of the glory of God.";
}
else if (lowerMessage.includes("2 peter 1:3") || lowerMessage.includes("2 peter one three") || lowerMessage.includes("2 peter 1 3")) {
  return "2 Peter 1:3 - His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence.";
}
else if (lowerMessage.includes("colossians 1:16") || lowerMessage.includes("colossians one sixteen") || lowerMessage.includes("colossians 1 16")) {
  return "Colossians 1:16 - For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him.";
}
else if (lowerMessage.includes("hebrews 4:12") || lowerMessage.includes("hebrews four twelve") || lowerMessage.includes("hebrews 4 12")) {
  return "Hebrews 4:12 - For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.";
}
else if (lowerMessage.includes("james 2:26") || lowerMessage.includes("james two twenty six") || lowerMessage.includes("james 2 26")) {
  return "James 2:26 - For as the body apart from the spirit is dead, so also faith apart from works is dead.";
}
else if (lowerMessage.includes("psalm 46:10") || lowerMessage.includes("psalm forty six ten") || lowerMessage.includes("psalm 46 10")) {
  return "Psalm 46:10 - Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!";
}
else if (lowerMessage.includes("isaiah 55:8-9") || lowerMessage.includes("isaiah fifty five eight nine") || lowerMessage.includes("isaiah 55 8 9")) {
  return "Isaiah 55:8-9 - For my thoughts are not your thoughts, neither are your ways my ways, declares the LORD. For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.";
}
else if (lowerMessage.includes("matthew 19:26") || lowerMessage.includes("matthew nineteen twenty six") || lowerMessage.includes("matthew 19 26")) {
  return "Matthew 19:26 - But Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'";
}
else if (lowerMessage.includes("john 10:10") || lowerMessage.includes("john ten ten") || lowerMessage.includes("john 10 10")) {
  return "John 10:10 - The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.";
}
else if (lowerMessage.includes("luke 24:49") || lowerMessage.includes("luke twenty four forty nine") || lowerMessage.includes("luke 24 49")) {
  return "Luke 24:49 - And behold, I am sending the promise of my Father upon you. But stay in the city until you are clothed with power from on high.";
}
else if (lowerMessage.includes("psalm 121:1-2") || lowerMessage.includes("psalm one hundred twenty one one two") || lowerMessage.includes("psalm 121 1 2")) {
  return "Psalm 121:1-2 - I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth.";
}
else if (lowerMessage.includes("1 john 1:9") || lowerMessage.includes("1 john one nine") || lowerMessage.includes("1 john 1 9")) {
  return "1 John 1:9 - If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.";
}
else if (lowerMessage.includes("proverbs 18:10") || lowerMessage.includes("proverbs eighteen ten") || lowerMessage.includes("proverbs 18 10")) {
  return "Proverbs 18:10 - The name of the LORD is a strong tower; the righteous man runs into it and is safe.";
}
else if (lowerMessage.includes("exodus 14:14") || lowerMessage.includes("exodus fourteen fourteen") || lowerMessage.includes("exodus 14 14")) {
  return "Exodus 14:14 - The LORD will fight for you, and you have only to be silent.";
}
else if (lowerMessage.includes("matthew 6:9-13") || lowerMessage.includes("matthew six nine thirteen") || lowerMessage.includes("matthew 6 9 13")) {
  return "Matthew 6:9-13 - Pray then like this: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.'";
}
else if (lowerMessage.includes("mark 5:36") || lowerMessage.includes("mark five thirty six") || lowerMessage.includes("mark 5 36")) {
  return "Mark 5:36 - But overhearing what they said, Jesus said to the ruler of the synagogue, 'Do not fear, only believe.'";
}
else if (lowerMessage.includes("hebrews 13:8") || lowerMessage.includes("hebrews thirteen eight") || lowerMessage.includes("hebrews 13 8")) {
  return "Hebrews 13:8 - Jesus Christ is the same yesterday and today and forever.";
}
else if (lowerMessage.includes("2 timothy 3:16-17") || lowerMessage.includes("2 timothy three sixteen seventeen") || lowerMessage.includes("2 timothy 3 16 17")) {
  return "2 Timothy 3:16-17 - All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.";
}
else if (lowerMessage.includes("psalm 23:1") || lowerMessage.includes("psalm twenty three one") || lowerMessage.includes("psalm 23 1")) {
  return "Psalm 23:1 - The LORD is my shepherd; I shall not want.";
}
else if (lowerMessage.includes("john 3:16") || lowerMessage.includes("john three sixteen") || lowerMessage.includes("john 3 16")) {
  return "John 3:16 - For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";
}
else if (lowerMessage.includes("philippians 4:13") || lowerMessage.includes("philippians four thirteen") || lowerMessage.includes("philippians 4 13")) {
  return "Philippians 4:13 - I can do all things through him who strengthens me.";
}
else if (lowerMessage.includes("romans 8:28") || lowerMessage.includes("romans eight twenty eight") || lowerMessage.includes("romans 8 28")) {
  return "Romans 8:28 - And we know that for those who love God all things work together for good, for those who are called according to his purpose.";
}
else if (lowerMessage.includes("jeremiah 29:11") || lowerMessage.includes("jeremiah twenty nine eleven") || lowerMessage.includes("jeremiah 29 11")) {
  return "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.";
}
else if (lowerMessage.includes("isaiah 40:31") || lowerMessage.includes("isaiah forty thirty one") || lowerMessage.includes("isaiah 40 31")) {
  return "Isaiah 40:31 - But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.";
}
else if (lowerMessage.includes("2 corinthians 5:7") || lowerMessage.includes("2 corinthians five seven") || lowerMessage.includes("2 corinthians 5 7")) {
  return "2 Corinthians 5:7 - For we walk by faith, not by sight.";
}
else if (lowerMessage.includes("matthew 11:28") || lowerMessage.includes("matthew eleven twenty eight") || lowerMessage.includes("matthew 11 28")) {
  return "Matthew 11:28 - Come to me, all who labor and are heavy laden, and I will give you rest.";
}
else if (lowerMessage.includes("revelation 21:4") || lowerMessage.includes("revelation twenty one four") || lowerMessage.includes("revelation 21 4")) {
  return "Revelation 21:4 - He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.";
}
else if (lowerMessage.includes("psalm 34:8") || lowerMessage.includes("psalm thirty four eight") || lowerMessage.includes("psalm 34 8")) {
  return "Psalm 34:8 - Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!";
}
else if (lowerMessage.includes("james 1:5") || lowerMessage.includes("james one five") || lowerMessage.includes("james 1 5")) {
  return "James 1:5 - If any of you lacks wisdom, let him ask of God, who gives generously to all without reproach, and it will be given him.";
}
else if (lowerMessage.includes("proverbs 3:5-6") || lowerMessage.includes("proverbs three five six") || lowerMessage.includes("proverbs 3 5 6")) {
  return "Proverbs 3:5-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
}
else if (lowerMessage.includes("matthew 6:33") || lowerMessage.includes("matthew six thirty three") || lowerMessage.includes("matthew 6 33")) {
  return "Matthew 6:33 - But seek first the kingdom of God and his righteousness, and all these things will be added to you.";
}
else if (lowerMessage.includes("1 peter 5:7") || lowerMessage.includes("1 peter five seven") || lowerMessage.includes("1 peter 5 7")) {
  return "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.";
}
else if (lowerMessage.includes("2 corinthians 12:9") || lowerMessage.includes("2 corinthians twelve nine") || lowerMessage.includes("2 corinthians 12 9")) {
  return "2 Corinthians 12:9 - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.";
}
else if (lowerMessage.includes("john 14:6") || lowerMessage.includes("john fourteen six") || lowerMessage.includes("john 14 6")) {
  return "John 14:6 - Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'";
}
else if (lowerMessage.includes("galatians 5:22-23") || lowerMessage.includes("galatians five twenty two twenty three") || lowerMessage.includes("galatians 5 22 23")) {
  return "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law.";
}
else if (lowerMessage.includes("ephesians 6:10-18") || lowerMessage.includes("ephesians six ten eighteen") || lowerMessage.includes("ephesians 6 10 18")) {
  return "Ephesians 6:10-18 - Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil. For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.";
}
else if (lowerMessage.includes("titus 2:11-14") || lowerMessage.includes("titus two eleven fourteen") || lowerMessage.includes("titus 2 11 14")) {
  return "Titus 2:11-14 - For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.";
}
else if (lowerMessage.includes("luke 2:11") || lowerMessage.includes("luke two eleven") || lowerMessage.includes("luke 2 11")) {
  return "Luke 2:11 - For unto you is born this day in the city of David a Savior, who is Christ the Lord.";
}
else if (lowerMessage.includes("romans 5:8") || lowerMessage.includes("romans five eight") || lowerMessage.includes("romans 5 8")) {
  return "Romans 5:8 - But God shows his love for us in that while we were still sinners, Christ died for us.";
}
else if (lowerMessage.includes("hebrews 12:1-2") || lowerMessage.includes("hebrews twelve one two") || lowerMessage.includes("hebrews 12 1 2")) {
  return "Hebrews 12:1-2 - Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.";
}
else if (lowerMessage.includes("what is the temperature") || lowerMessage.includes("what's the temperature") || lowerMessage.includes("current temperature") || lowerMessage.includes("temperature")) {
  return "I'm sorry, I can't access live weather data directly, but you can check the current temperature using a weather service or app.";
}
else if (lowerMessage.includes("我") && lowerMessage.includes("嬲")) {
return "有咩問題呢？有冇嘢我可以幫你呢？";
}

else if (lowerMessage.includes("ecuador")
 &&
!lowerMessage.includes("capital") 
) {
return "Ecuador is a diverse country in South America, known for its rich cultural heritage and stunning natural landscapes. It is bordered by Colombia to the north, Peru to the east and south, and the Pacific Ocean to the west. Ecuador is home to the Amazon rainforest, the Andes mountain range, and the Galápagos Islands, a UNESCO World Heritage site famous for its unique wildlife. The capital is Quito, a colonial city nestled in the Andes, while Guayaquil is the largest city and main port. Ecuador offers a wide variety of ecosystems, making it a top destination for nature lovers and birdwatchers.<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMoH3J9B6uP-ZYw32A2Cdxs80p9wcQWhGH31Z20d1K1TyTgXb50KNnUuBySo_l-_iq8e1Zy9LjPTGgoD18_tya6yFWmRzLBC6hYhsakiBFNx-mjG03l_ElUOpel5KhV0sIuuS8T0tEuCHO7HavSD7PzKw=w2481-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://www.mashpilodge.com/wp-content/uploads/2023/09/Waterfall-San-Vincente.webp' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN3MWz1rjLyFaIfrb7Z8GSIFxRQU_Z05Nb3UfDDiRB1PTVjcSUSKoXda2ubY5POiRSOgpc5m3NKf1ECq7XFJ7Kg-ZeG-wf-Csuhm_CF5iKkjgyrVcOGPHm7-FLkcoc_YsfIYhH9GWLiAzqO6jIoJnGqUQ=w2475-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOlHgRuS-VrU_Kb-G9JNT_J5V3jUevH60IntZoFFq3aJbcHkE_4n1SiTgXsosEkfWGBAkS3MiaQYJMWdgL7l4g_IFkXYlvBTMxLw2WdpN1szv4qFbQMlQ-qpOJTEakyk7K9eJAYlXN_Vh4klbDb9DpB6A=w2481-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczPt0m1PWKvL0gIoIobFV3EgJXsrtgvYcdR6JMXZ6ynvF1uH9ez3Xy9bbMkklMFYnWe0M7Gssl3B67jECDLiofXXrbDMvrge_czqXPMKsfTKMa_Eh4Os38nfSaKeTJ46U0tweLmFNRhhXvZLvMeoxJqq1g=w2478-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://ecuadorverdepais.com/wp-content/uploads/2022/12/quilotoa-lake.jpg' alt='Ecuador' width='200'>";
}

else if (lowerMessage.includes("厄瓜多尔") && !lowerMessage.includes("首都")) {
return "厄瓜多尔是南美洲的一个多样化国家，以其丰富的文化遗产和壮丽的自然景观而闻名。它北邻哥伦比亚，东南接秘鲁，西濒太平洋。厄瓜多尔拥有亚马逊雨林、安第斯山脉以及加拉帕戈斯群岛——一个因其独特的野生动植物而闻名的联合国教科文组织世界遗产地。首都是基多，这是一座坐落在安第斯山脉的殖民风格城市，而最大的城市和主要港口是瓜亚基尔。厄瓜多尔拥有多种生态系统，是大自然爱好者和观鸟者的热门目的地。<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMoH3J9B6uP-ZYw32A2Cdxs80p9wcQWhGH31Z20d1K1TyTgXb50KNnUuBySo_l-_iq8e1Zy9LjPTGgoD18_tya6yFWmRzLBC6hYhsakiBFNx-mjG03l_ElUOpel5KhV0sIuuS8T0tEuCHO7HavSD7PzKw=w2481-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://www.mashpilodge.com/wp-content/uploads/2023/09/Waterfall-San-Vincente.webp' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN3MWz1rjLyFaIfrb7Z8GSIFxRQU_Z05Nb3UfDDiRB1PTVjcSUSKoXda2ubY5POiRSOgpc5m3NKf1ECq7XFJ7Kg-ZeG-wf-Csuhm_CF5iKkjgyrVcOGPHm7-FLkcoc_YsfIYhH9GWLiAzqO6jIoJnGqUQ=w2475-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOlHgRuS-VrU_Kb-G9JNT_J5V3jUevH60IntZoFFq3aJbcHkE_4n1SiTgXsosEkfWGBAkS3MiaQYJMWdgL7l4g_IFkXYlvBTMxLw2WdpN1szv4qFbQMlQ-qpOJTEakyk7K9eJAYlXN_Vh4klbDb9DpB6A=w2481-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczPt0m1PWKvL0gIoIobFV3EgJXsrtgvYcdR6JMXZ6ynvF1uH9ez3Xy9bbMkklMFYnWe0M7Gssl3B67jECDLiofXXrbDMvrge_czqXPMKsfTKMa_Eh4Os38nfSaKeTJ46U0tweLmFNRhhXvZLvMeoxJqq1g=w2478-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://ecuadorverdepais.com/wp-content/uploads/2022/12/quilotoa-lake.jpg' alt='厄瓜多尔' width='200'>";
}



else if (lowerMessage.includes("what") && lowerMessage.includes("about")&& lowerMessage.includes("socotra")) {
return "Socotra, while technically part of Yemen, is generally very safe for tourists. Due to its isolation from the mainland, Socotra has been completely spared from the ongoing civil war on the mainland. Socotra is renowned for its otherworldly landscapes and unique biodiversity, including the iconic Dragon’s Blood Tree. Recognized as a UNESCO World Heritage Site, Socotra is a haven for endemic flora and fauna, offering breathtaking natural beauty and a rich cultural heritage shaped by its isolation. It is often referred to as the Garden of Eden or The Last Paradise on Earth.<br><br><img src='https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5326-hdr-pano-32oo.jpg' alt='Socotra' width='200'>";
}



else if (lowerMessage.includes("yemen") &&
!lowerMessage.includes("capital") &&
!lowerMessage.includes("visit")) {
return "Yemen is a country in the Middle East, located on the southern tip of the Arabian Peninsula. It has a rich history, with ancient cities like Sana'a and the famous Yemeni coffee. Yemen is known for its mountainous terrain, ancient architecture, and unique culture. <br><br><img src='https://static.wixstatic.com/media/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg/v1/fill/w_980,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg' width='200'><br><br><img src='https://www.unchartedbackpacker.com/wp-content/uploads/2018/01/DSC07023-1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.diyphotography.net/wp-content/uploads/2021/06/DSC_5326-HDR-Pano-32%D0%BE%D0%BE.jpg' width='200'><br><br><img src='https://www.photopills.com/sites/default/files/articles/2024/socotra-milky-way-dragon-blood-tree-ramiro-torrents.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://i.pinimg.com/736x/f5/77/25/f5772560b346e829328b28f76d13f378.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://nickschmid.com/wp-content/uploads/Blossom-Of-Peace_2023_by-Nick-Schmid.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl079-60d15bfac5aaa__880.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl023-60d15be582495__880.jpg' width='200'><br><br><img src='https://www.christravelblog.com/wp-content/uploads/2022/11/shibam-city-view-sunset-mainland-yemen-itinerary-with-all-the-best-places-to-visit-in-hadramout-IMG_1058.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://images.squarespace-cdn.com/content/v1/5f0df38c634e797196d51e6c/1658064583391-XMRTVX4TMRWE3KCX7BCA/wadi%2Bdoan%2Byemen.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1200px-Flag_of_Yemen.svg.png' width='200'>";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("teach") && lowerMessage.includes("you")) {
return "Thanks for trying to teaching me! Unfortunately, I can’t learn from you. All of my knowledge must be programmed into me.";
}
else if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("yemen")) {
return "While Yemen is a beautiful country, it is essential to understand that traveling to Yemen is currently extremely dangerous and difficult because of the ogoing civil war. I recommend you wait until a better time before you book your trip. Safe travels! 🧳✈️🌍🇾🇪";
}
else if (lowerMessage.includes("ouch")) {
return "Oh no! What happened? It sounds like you hurt yourself!";
}
else if (lowerMessage.includes("taiwan")) {
return "Taiwan is an island in East Asia, near China. The capital city is Taipei. People in Taiwan speak Mandarin Chinese. It is a modern and safe country with great food, busy night markets, and beautiful nature like mountains and beaches. Taiwan is also famous for its technology and factories that make computer chips. The culture is a mix of Chinese, Japanese, and native traditions. People in Taiwan are very friendly and helpful to visitors. <br><br><img src='https://adventuresofagoodman.com/wp-content/uploads/2013/04/Chiang_Kai-Shek_Memorial_Hole-Blue-Hour-National_Taiwan_Democracy_Memorial_Hall-Taipei-Greg_Goodman-AdventuresofaGoodMan-1-1.jpg' width='200'><br><br><img src='https://www.wendywutours.com/resource/upload/1804/banner-treasures-of-taiwan.jpg' width='200'><br><br><img src='https://namastetonihao.com/wp-content/uploads/2024/06/elephant-mountain-taipei.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYzsuSe8cAXpkHXjTcnurXetBohvCluu9wA&s' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1200px-Flag_of_the_Republic_of_China.svg.png' width='200'>";
}
else if (lowerMessage.includes("hong kong")) {
return "Hong Kong is a unique region of China, located on the southern coast. It’s known for its tall skyscrapers, busy streets, and famous harbor. People mostly speak Cantonese and English. The city blends Chinese and British culture, as it was ruled by Britain until 1997. Hong Kong is popular for shopping, tasty street food, and tourist spots like Victoria Peak and the Star Ferry. Besides the busy city, it also has quiet places like green hills and beaches. It’s a lively, safe place with a mix of modern life and nature. <br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcx2X6AMNP7ql0eFV4bHR-_HTpVUhnleoyg&s' width='200'><br><br><img src='https://velvetescape.com/wp-content/uploads/2011/05/florian-wehde-8bjnP3yhNTg-unsplash-640x450.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3LJauYs43H9MfnlvCdE-x6UV_y5P3koK6w&s' width='200'><br><br><img src='https://amazingfoodanddrink.com/wp-content/uploads/2024/10/a-photo-of-a-variety-of-street-food-in-hong-kong-t-J5Y5Gj5sQBuPpmcDT8dyhQ-zppDGRaiQ4mJdcQhU9nKuw.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png' width='200'>";
}
else if (lowerMessage.includes("hong kong")) {
return "Hong Kong is a unique region of China, located on the southern coast. It’s known for its tall skyscrapers, busy streets, and famous harbor. People mostly speak Cantonese and English. The city blends Chinese and British culture, as it was ruled by Britain until 1997. Hong Kong is popular for shopping, tasty street food, and tourist spots like Victoria Peak and the Star Ferry. Besides the busy city, it also has quiet places like green hills and beaches. It’s a lively, safe place with a mix of modern life and nature. <br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcx2X6AMNP7ql0eFV4bHR-_HTpVUhnleoyg&s' width='200'><br><br><img src='https://velvetescape.com/wp-content/uploads/2011/05/florian-wehde-8bjnP3yhNTg-unsplash-640x450.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3LJauYs43H9MfnlvCdE-x6UV_y5P3koK6w&s' width='200'><br><br><img src='https://amazingfoodanddrink.com/wp-content/uploads/2024/10/a-photo-of-a-variety-of-street-food-in-hong-kong-t-J5Y5Gj5sQBuPpmcDT8dyhQ-zppDGRaiQ4mJdcQhU9nKuw.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png' width='200'>";
}
else if (lowerMessage.includes("turkmenistan")) {
return "Turkmenistan is a Central Asian country known for its vast deserts and isolation. Its capital, Ashgabat, features grand white marble buildings. The country is rich in natural gas and has ancient sites like Merv. The “Door to Hell,” a burning natural gas crater, is one of its most famous landmarks. Despite its history and natural beauty, Turkmenistan remains largely closed off, adding to its mysterious allure.<br><br><img src='https://adventure.com/wp-content/uploads/2018/07/Turkmenistan-Ashgabat-Photo-credit-Shutterstock-gonetothemoon.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1P4Oy5vnY3QdugfOOeq5VKlvNxEcKxfiIA&s' width='200'><br><br><img src='https://mymodernmet.com/wp/wp-content/uploads/2020/05/gates-of-hell-darvaza-crater-3.jpg' width='200'><br><br><img src='https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/41c1f262_332fbf46efbcd91ab315d470c4e9a125.jpeg' width='200'><br><br><img src='https://central-asia.guide/wp-content/uploads/2021/07/Karakum_camels-1024x683.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1200px-Flag_of_Turkmenistan.svg.png' width='200'>";
}
else if (lowerMessage.includes("macau")||lowerMessage.includes("macao")) {
return "Macau is a small city and region on the southern coast of China. It used to be a Portuguese colony, so it has a mix of Chinese and Portuguese culture. The main languages are Cantonese and Portuguese. Macau is famous for its casinos, big hotels, and old buildings. It has beautiful streets, tasty food, and is known as the “Las Vegas of Asia.” It’s also a place with rich history and fun things to see.<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrdS_olgKgY5z8cbw-Z45u5JvtskDipA_lQ&s' width='200'><br><br><img src='https://www.planetware.com/wpimages/2019/12/macau-in-pictures-beautiful-places-to-photograph-st-pauls.jpg' width='200'><br><br><img src='https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/canvas/2024/02/29/4855c6de-42ed-4455-b2e9-6e095a536b03_fb37c9e2.jpg?itok=y9s-04-9&v=1709192986' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczObu1b-RzbooHVpPhQyzicQefGu8IQ6T04cXhazC2SYTmJ4UupOYx13fePMahNWxYPQu0AtWWvtWvJpUAj-9F-M7gKHJOnSfrYQ4Z_gSrCen50_Q3GGAmwB0oU7CXQAO3_RoSwx27Tglhxga4iqXFKkPQ=w1331-h996-s-no-gm?authuser=0' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg' width='200'>";
}

else if (lowerMessage.includes("palau")) {
return "Palau is a small island country in the western Pacific Ocean. It has over 300 islands, with beautiful beaches, clear blue water, and coral reefs. The capital is Ngerulmud, and the main languages are Palauan and English. Palau is famous for scuba diving, snorkeling, and its marine life. One special place is Jellyfish Lake, where people can swim with harmless jellyfish. The country is peaceful and friendly, and nature is protected very well. It’s a great place for people who love the ocean and quiet islands.<br><br><img src='https://whc.unesco.org/uploads/thumbs/news_2621-890-520-20231106111720.jpg' width='200'><br><br><img src='https://images.squarespace-cdn.com/content/v1/58b7fcb12e69cfd0f442f15a/1712797297592-05J5Q8SSR9JLZKZUOCOH/PLW_Palau_Rock-Island-Aireal-%C2%A9-Adobe-Stock_48181456_1900.jpg?format=1500w' width='200'><br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/334433551/900' width='200'><br><br><img src='https://www.goworldtravel.com/wp-content/uploads/2020/02/swimming-in-jellyfish-lake-768x576.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg' width='200'>";
}

else if (lowerMessage.includes("mexico")) {
return "Mexico is a country in North America, known for its rich culture, delicious cuisine, and ancient ruins like those at Chichen Itza. It has a diverse landscape, from deserts to beaches. <br><br><img src='https://lp-cms-production.imgix.net/2024-10/629387256.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' width='200'>";
}

else if (lowerMessage.includes("china")) {
return "China is the most populous country in the world, known for its ancient civilization, modern economy, and technological innovations. It is a global power in many fields.<br><br> <img src='https://nationalparks-15bc7.kxcdn.com/images/parks/beijing-great-wall/China%27s%20Great%20Wall%20national%20park%20area.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-li-river.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://danielkordan.com/wp-content/uploads/2018/09/382039059027329034-1030x643.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/cn.svg' alt='An internet connection is required to view this image' width='200'>";
}
else if (lowerMessage.includes("do you believe in alien")) {
return "Since I am just a bot, I don’t have any beliefs or opinions. However, I can tell you that from all the evidence that there is, aliens do not exist. What about you? What do you think?";
}

else if (lowerMessage.includes("spain")) {
return "Spain is a country in Southern Europe, known for its lively culture, beautiful architecture, and iconic landmarks like La Sagrada Familia and the Alhambra. <br><br><img src='https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/05/660fcca1de7c9facb6b1d36721aecf9a.jpg' width='200'>";
}


else if (lowerMessage.includes("ecuador") && lowerMessage.includes("capital")) {
return "The capital of Ecuador is Quito. <br><br><img src='https://www.journeylatinamerica.com/app/uploads/destinations/ecuador/quito/ecu_quito_istock-1440x961-c-center.jpg' width='200'>";
}

else if (lowerMessage.includes("language") && lowerMessage.includes("you")) {
return "I know many languages including English, Chinese, French, Spanish, Arabic, Korean, Hindi, Russian, and Japanese. I also have a basic knowledge in many other languages.";
}

else if (lowerMessage.includes("語言") && lowerMessage.includes("你")) {
return "我識好多語言，包括英文、中文、法文、西班牙文、阿拉伯文、韓文同日文。";
}
else if (lowerMessage.includes("葉門") &&
         !lowerMessage.includes("capital") &&
         !lowerMessage.includes("visit")) {
  return "葉門喺中東阿拉伯半島嘅南端，有好豐富嘅歷史，同埋好出名嘅古城，好似薩那（Sana'a）同埋著名嘅葉門咖啡。葉門以佢嘅多山地形、古老建築同獨特文化聞名。<br><br>" +
  "<img src='https://static.wixstatic.com/media/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg/v1/fill/w_980,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg' width='200'><br><br>" +
  "<img src='https://www.unchartedbackpacker.com/wp-content/uploads/2018/01/DSC07023-1.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://www.diyphotography.net/wp-content/uploads/2021/06/DSC_5326-HDR-Pano-32%D0%BE%D0%BE.jpg' width='200'><br><br>" +
  "<img src='https://www.photopills.com/sites/default/files/articles/2024/socotra-milky-way-dragon-blood-tree-ramiro-torrents.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://i.pinimg.com/736x/f5/77/25/f5772560b346e829328b28f76d13f378.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://nickschmid.com/wp-content/uploads/Blossom-Of-Peace_2023_by-Nick-Schmid.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl079-60d15bfac5aaa__880.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl023-60d15be582495__880.jpg' width='200'><br><br>" +
  "<img src='https://www.christravelblog.com/wp-content/uploads/2022/11/shibam-city-view-sunset-mainland-yemen-itinerary-with-all-the-best-places-to-visit-in-hadramout-IMG_1058.jpg' alt='需要網絡連接先可以睇到呢張相' width='200'><br><br>" +
  "<img src='https://images.squarespace-cdn.com/content/v1/5f0df38c634e797196d51e6c/1658064583391-XMRTVX4TMRWE3KCX7BCA/wadi%2Bdoan%2Byemen.jpg' width='200'><br><br>" +
  "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1200px-Flag_of_Yemen.svg.png' width='200'>";
}
else if (lowerMessage.includes("st lucia")|| lowerMessage.includes("st. lucia") || lowerMessage.includes("saint lucia")) {
return "St. Lucia is a picturesque island nation in the Caribbean, renowned for its lush landscapes, volcanic origins, and vibrant culture. Located north of St. Vincent and the Grenadines and south of Martinique, St. Lucia boasts stunning natural attractions, including the iconic twin peaks of the Pitons, lush rainforests, and golden sandy beaches. Its capital, Castries, is a hub of activity and history. Visitors often enjoy activities such as snorkeling, hiking, and exploring the world's only drive-in volcano, Sulphur Springs. The island's Creole heritage is reflected in its cuisine, music, and festivals, offering a warm and unique cultural experience.<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMICXvt4S6b5XQRGx4U4hg5Yim8LlAKm6rN0TIlAR9HAewZ-KEWrKA017UxSjzb8lyC4faZ0A3dbGXVlMgNP15UUGftLbbfOUwsT6RSRVkJB56A3Ere9CZJAHji8ge8lDMt4n5Z01qEqDgpcQaVK9Yalw=w2481-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN5scQF0ZzEo84bMV3Sx7vbgFYktp_xCyO7OXyTdBa_JBsvsVp_EaKPbuD2xrhvuePd4bZ4Nu3uwNujfamThP2WAui9nQFfLphLIs8k7TP16cwqIfgfsqeSEe8wVnOrTQaAGj-4NOyjmx01Rvmuy9xbWg=w2478-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOBlST8K5AuRr20AbfvtsxDLrJqvHeS49X4PSbLc1B10O8PSiEM8eSQJYoDQ3CEMQn64oKpbd9hfZcDUJL7IDeX05BBw6gg6lbJlbDK-m85lesKx6JKuP52DEzyoUX7LZf9RJp1h6o1V4-mN2nya-N3pg=w2481-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://cdn.britannica.com/24/5124-050-8F6BCAC8/Flag-Saint-Lucia.jpg' width='200'>";
}
// Riddles
else if (lowerMessage.includes("tell me a riddle") || lowerMessage.includes("riddle")) {
  const riddles = [
    "I’m tall when I’m young and short when I’m old. What am I? (A candle)",
    "What has keys but can’t open locks? (A piano)",
    "The more you take, the more you leave behind. What am I? (Footsteps)",
    "What can travel around the world while staying in the corner? (A stamp)",
    "I’m not alive, but I grow. I don’t have lungs, but I need air. What am I? (Fire)",
    "What can you catch but not throw? (A cold)",
    "What has hands but can’t clap? (A clock)",
    "What has a head, a tail, but no body? (A coin)",
    "I’m always hungry, I must always be fed. The finger I touch, will soon turn red. What am I? (Fire)",
    "What comes once in a minute, twice in a moment, but never in a thousand years? (The letter ‘M’)",
    "What gets wetter as it dries? (A towel)",
    "What has one eye but can’t see? (A needle)",
    "What has an endless supply of letters but starts empty? (A post office)",
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? (An echo)",
    "What is full of holes but still holds a lot of weight? (A net)",
    "What has a neck but no head? (A bottle)",
    "What comes down but never goes up? (Rain)",
    "What is always in front of you but can’t be seen? (The future)",
    "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I? (Fire)",
  ];
  return riddles[Math.floor(Math.random() * riddles.length)];
}
else if (lowerMessage.includes("dim sum")) {
return "A variety of bite-sized Cantonese dishes, including dumplings, buns, and pastries, typically served with tea. <br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160325033254-hk-dim-sum-fook-lam-moon.jpg?q=w_4256,h_2456,x_0,y_0,c_fill' alt='Dim Sum' width='200'>";
}
if (
  (lowerMessage.includes("你好") || lowerMessage.includes("您好") || lowerMessage.includes("早晨")) &&
  !lowerMessage.includes("washington") &&
  !lowerMessage.includes("chinese") &&
  !lowerMessage.includes("china") &&
  !lowerMessage.includes("teaching") &&
  !lowerMessage.includes("anything") &&
  !lowerMessage.includes("chile") &&
  !lowerMessage.includes("white") &&
  !lowerMessage.includes("thief") &&
  !lowerMessage.includes("think") &&
  !lowerMessage.includes("hear") &&
  !lowerMessage.includes("this") &&
  !lowerMessage.includes("ishigaki") &&
  !lowerMessage.includes("hinirang") &&
  !lowerMessage.includes("chickadee") &&
  !lowerMessage.includes("nothing") &&
  !lowerMessage.includes("abcdefghijklmnopqrstuvwxyz") &&
  !lowerMessage.includes("philippines") &&
  !lowerMessage.includes("they") &&
  !lowerMessage.includes("something") &&
  !lowerMessage.includes("which") &&
  !lowerMessage.includes("genghis")
) {
  let hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "早晨！今日有咩可以幫到你？";
  } else if (hours < 18) {
    greeting = "下晝好！今日有咩可以幫到你？";
  } else {
    greeting = "晚上好！今日有咩可以幫到你？";
  }

  return greeting;
}
    
if (
  (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("greetings") || lowerMessage.includes("morning") || lowerMessage.includes("afternoon") || lowerMessage.includes("evening") || lowerMessage.includes("what's up") || lowerMessage.includes("howdy") || lowerMessage.includes("salutations") || lowerMessage.includes("hiya")) &&
  !lowerMessage.includes("washington") &&
  !lowerMessage.includes("chinese") &&
  !lowerMessage.includes("china")&&
  !lowerMessage.includes("teaching")&&
  !lowerMessage.includes("anything") &&
  !lowerMessage.includes("chile") &
  !lowerMessage.includes("white")&&
  !lowerMessage.includes("thief") &&
  !lowerMessage.includes("think") &&
  !lowerMessage.includes("hear") &&
  !lowerMessage.includes("this") &&
  !lowerMessage.includes("ishigaki") &&
  !lowerMessage.includes("hinirang") &&
  !lowerMessage.includes("chickadee") &&
  !lowerMessage.includes("nothing") &&
  !lowerMessage.includes("abcdefghijklmnopqrstuvwxyz") &&
  !lowerMessage.includes("philippines") &&
  !lowerMessage.includes("they")&&
  !lowerMessage.includes("something")&&
  !lowerMessage.includes("which")&&
  !lowerMessage.includes("genghis")
) {
  let hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning! How can I assist you today?";
  } else if (hours < 18) {
    greeting = "Good afternoon! How can I assist you today?";
  } else {
    greeting = "Hello! How can I assist you today?";
  }

  return greeting;
}
else if (
  (lowerMessage.includes("ok") || lowerMessage.includes("okay")) && 
  !lowerMessage.includes("joke") &&
  !lowerMessage.includes("token") &&
  !lowerMessage.includes("smoke") &&
  !lowerMessage.includes("yoke") &&
  !lowerMessage.includes("poker") &&
  !lowerMessage.includes("broken") &&
  !lowerMessage.includes("woke") &&
  !lowerMessage.includes("spoke") &&
  !lowerMessage.includes("stoked") &&
  !lowerMessage.includes("choke") &&
  !lowerMessage.includes("broke") &&
  !lowerMessage.includes("folks") &&
  !lowerMessage.includes("oak") &&
  !lowerMessage.includes("oklahoma") &&
  !lowerMessage.includes("coke") &&
  !lowerMessage.includes("stoking") &&
  !lowerMessage.includes("boking") &&
  !lowerMessage.includes("hocus-pocus") &&
  !lowerMessage.includes("focus") &&
  !lowerMessage.includes("okinawa") &&
  !lowerMessage.includes("okinawan") &&
  !lowerMessage.includes("cook") &&
  !lowerMessage.includes("look") &&
  !lowerMessage.includes("hook") &&
  !lowerMessage.includes("took") &&
  !lowerMessage.includes("brooks") &&
  !lowerMessage.includes("rook") &&
  !lowerMessage.includes("overlook") &&
  !lowerMessage.includes("prebook") &&
  !lowerMessage.includes("outlook") &&
  !lowerMessage.includes("book") &&
  !lowerMessage.includes("shook") &&
  !lowerMessage.includes("overcooked") &&
  !lowerMessage.includes("uncooked") &&
  !lowerMessage.includes("unhook") &&
  !lowerMessage.includes("cookbook")
) {
  const responses = [
    "Alright! Let me know if you need anything.",
    "Sounds good!",
    "Okay, great!",
    "Got it! What's next?",
    "Okay, I'm ready!",
    "Let me know if you need anything else!",

  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("tell") && lowerMessage.includes("story")) {
const responses = [
"Once upon a time, a penguin walked into a bakery, wearing a tiny top hat and a monocle. It waddled up to the counter and said, “I’ll have a dozen donuts, please.” The baker, who had never seen a penguin in a top hat before, raised an eyebrow and asked, “Are you sure you can eat all those?” The penguin looked at the baker seriously and replied, “I have a very big party to attend. It's for my penguin friends, and we're going to have a donut-eating contest.” The baker, still confused, handed over the donuts. But as the penguin waddled out the door, it suddenly stopped, turned around, and asked, “By the way, do you have any ketchup?” The baker blinked. “Ketchup? For your donuts?” The penguin nodded solemnly. “It’s a very exclusive penguin thing,” it said, then waddled away, leaving the baker wondering if he’d just experienced the strangest encounter of his life.",
"One fine day in the Hundred Acre Wood, Winnie the Pooh was enjoying a delightfully sticky pot of honey when he had an idea. 'I shall take this hunny,' he said to himself, 'to a nice picnic spot!' So, he placed the biggest honey jar he could find in his little red wagon and started pulling it up a hill. Halfway up, the wagon hit a rock, and—whoops!—the honey jar tipped out, wobbled, and began rolling down the hill. 'Oh, bother!' Pooh gasped, watching in horror. The jar picked up speed, zooming past Piglet, who let out a tiny scream. It launched over a tree root, flew past Rabbit’s garden, and sent carrots flying everywhere. It bounced off Eeyore’s house, knocking it over (again), and rolled right under Tigger, who tried to bounce over it but landed directly on top. 'WHOOOOAAA-HOO-HOO-HOOO!' Tigger yelled as the jar kept going, now bouncing wildly toward Christopher Robin’s house. Christopher Robin stepped outside just in time to see a giant jar of honey, a screaming Tigger, and a very panicked Pooh chasing behind. The jar hit a rock, flipped into the air, and—SPLAT!—landed upside down on Pooh’s head. Silence. Tigger peeled himself off the ground. Piglet peeked from behind a bush. Rabbit was muttering something about 'lunatics.' Finally, Christopher Robin walked over and lifted the jar off Pooh’s head. Pooh licked his lips. 'Well,' he said, 'at least I found my picnic spot.'",
];
return responses[Math.floor(Math.random() * responses.length)];
}
else if (lowerMessage.includes("shh")) {
return "It sounds like you’re telling me to be quiet.";
}
else if (lowerMessage.includes("do you dream")) {
return "No, I am a robot. I never dream. I never sleep. I never eat. I never breathe.";
}
else if (lowerMessage.includes("look")) {
return "Since I’m a chatbot, I can’t look or see anything, but you can explain to me what you want me to see.";
}

 
else if (lowerMessage.includes("點心")) {
return "點心係多種啖啖大小嘅廣東菜，包括餃子、饅頭同酥皮，通常會配茶。<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160325033254-hk-dim-sum-fook-lam-moon.jpg?q=w_4256,h_2456,x_0,y_0,c_fill' alt='Dim Sum' width='200'>";
}

// Check for the call command
else if (lowerMessage.includes("call me") || lowerMessage.includes("give me a phone call") || lowerMessage.includes("give me a call") || lowerMessage.includes("phone me") || lowerMessage.includes("📞 me")) {
triggerIncomingCall();
chatInput.value = ""; // Clear input field
return "Calling..."; // Make sure it returns text instead of undefined
}
// Jokes
else if (lowerMessage.includes("tell me a joke") || lowerMessage.includes("joke")) {
const jokes = [
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"Why don’t eggs tell jokes? Because they might crack up!",
"Why don’t oysters donate to charity? Because they are shellfish!",
"What do you call fake spaghetti? An impasta!",
"I used to play piano by ear, but now I use my hands.",
"Why did the math book look sad? Because it had too many problems.",
"What’s orange and sounds like a parrot? A carrot!",
"I tried to catch some fog earlier. I mist.",
"Why don’t some fish play piano? Because you can’t tuna fish!",
"What do you call a can opener that doesn’t work? A can’t opener!",
"Why did the bicycle fall over? Because it was two-tired.",
"I’m reading a book about anti-gravity. It’s impossible to put down!",
"Why do cows wear bells? Because their horns don’t work!"
];
return jokes[Math.floor(Math.random() * jokes.length)];
}
// Math (added conversationally)
else if (lowerMessage.includes("plus") || lowerMessage.includes("minus") || lowerMessage.includes("times") || lowerMessage.includes("divided")) {
return handleMath(userMessage);
}
// Simple math (addition, subtraction, multiplication, division)
else if (lowerMessage.includes("calculate") || lowerMessage.includes("math")) {
return handleMath(userMessage);
}
// Country Flag Request
else if (lowerMessage.includes("flag of")) {
const countryName = userMessage.replace("flag of", "").trim();
return getCountryFlag(countryName);
}
else if (lowerMessage.includes("what's up") || lowerMessage.includes("what are you doing")) {
return "Not much, just here to chat with you!";
}
else {
  const unknownReply = getRandomUnknownResponse(lang);
  lastBotResponse = unknownReply;
  return { text: unknownReply, isUnknown: true };
}
};
