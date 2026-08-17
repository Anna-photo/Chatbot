// ===== Original script block 0 + main application code =====
// ===== Original script block 0 =====

function getGreeting() {
const now = new Date();
const hours = now.getHours();

if (hours < 12) {
return "Good morning! How can I assist you?";
} else if (hours >= 12 && hours < 18) {
return "Good afternoon! How can I assist you?";
} else {
return "Good evening! How can I assist you?";
}
}

document.getElementById("emptyMessage").textContent = getGreeting();


// ===== Original script block 1 =====

// ----------------------------
// Global Variables & Settings
// ----------------------------
let attachedFileData = null;
let attachedFileName = null;
let callMode = false; // false = text chat; true = voice call
let recognition; // SpeechRecognition instance for call mode
let callLanguage = document.getElementById("langSelect").value;
let finalTranscript = "";
let transcriptTimeout;
const backgroundMusic = document.getElementById("backgroundMusic");
let lastBotResponse = "";

// Define music tracks for different styles (all peaceful pieces)
const musicTracks = {
generic: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
"traditional japanese": "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
"middle eastern": "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
chinese: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"
// Add more styles and their corresponding peaceful tracks as needed.
};

// Update callLanguage when dropdown changes.
document.getElementById("langSelect").addEventListener("change", (event) => {
callLanguage = event.target.value;
// Restart recognition with new language if call mode is active.
if (callMode && recognition) {
recognition.stop();
setTimeout(() => {
recognition.lang = callLanguage;
recognition.start();
}, 500);
}
});

// Function to play peaceful music of a given style.
function playPeacefulMusic(style) {
let trackUrl = musicTracks.generic; // default track
if (style && musicTracks[style.toLowerCase()]) {
trackUrl = musicTracks[style.toLowerCase()];
}
backgroundMusic.src = trackUrl;
backgroundMusic.play();
}

// Function to stop music playback.
function stopPeacefulMusic() {
backgroundMusic.pause();
backgroundMusic.currentTime = 0;
}

// ----------------------------
// Settings Page Toggle & Tab Logic
// ----------------------------
const settingsButton = document.getElementById("settingsButton");
const settingsPage = document.getElementById("settingsPage");
const closeSettings = document.getElementById("closeSettings");
const tabButtonsContainer = document.getElementById("settingsTabButtons");

// Individual tabs
const generalManagementTab = document.getElementById("generalManagementTab");
const chatbotInfoTab       = document.getElementById("chatbotInfoTab");
const sendFeedbackTab      = document.getElementById("sendFeedbackTab");

// Tab-toggle buttons
const generalManagementBtn = document.getElementById("generalManagementBtn");
const chatbotInfoBtn       = document.getElementById("chatbotInfoBtn");
const sendFeedbackBtn      = document.getElementById("sendFeedbackBtn");

// Feedback buttons + containers
const openFeedbackFormBtn     = document.getElementById("openFeedbackFormBtn");
const feedbackFormContainer   = document.getElementById("feedbackFormContainer");
const openKnowledgeFormBtn    = document.getElementById("openKnowledgeFormBtn");
const knowledgeFormContainer  = document.getElementById("knowledgeFormContainer");

// ----------------------------
// Helpers
// ----------------------------

// Reset buttons to vertically stacked layout
function resetButtonsToVertical() {
  tabButtonsContainer.style.position = "absolute";
  tabButtonsContainer.style.top = "50%";
  tabButtonsContainer.style.left = "50%";
  tabButtonsContainer.style.transform = "translate(-50%, -50%)";
  tabButtonsContainer.style.flexDirection = "column";
  tabButtonsContainer.style.justifyContent = "center";
  tabButtonsContainer.style.alignItems = "center";
}

// Move buttons to top (tabs layout)
function moveButtonsToTopTabs() {
  tabButtonsContainer.style.position = "static";
  tabButtonsContainer.style.top = "50px";
  tabButtonsContainer.style.left = "20px";
  tabButtonsContainer.style.transform = "none";
  tabButtonsContainer.style.flexDirection = "row";
  tabButtonsContainer.style.justifyContent = "space-around";
  tabButtonsContainer.style.alignItems = "flex-start";
}

// Hide all tab content areas
function hideAllTabs() {
  generalManagementTab.style.display = "none";
  chatbotInfoTab.style.display = "none";
  sendFeedbackTab.style.display = "none";
}

// Reset all feedback forms/buttons
function resetFeedbackForms() {
  document.getElementById("feedbackFormContainer").style.display = "none";
  document.getElementById("knowledgeFormContainer").style.display = "none";

  document.getElementById("openFeedbackFormBtn").style.display = "inline-block";
  document.getElementById("openKnowledgeFormBtn").style.display = "inline-block";
}

// ----------------------------
// Settings Open / Close
// ----------------------------

settingsButton.addEventListener("click", () => {
  document.querySelector(".chat-messages").style.display = "none";
  document.querySelector(".chat-footer").style.display = "none";

  hideAllTabs();
  resetFeedbackForms();
  resetButtonsToVertical();

  generalManagementBtn.style.background = "#0078d4";
  chatbotInfoBtn.style.background = "#0078d4";
  sendFeedbackBtn.style.background = "#0078d4";

  settingsPage.style.display = "block";
});

closeSettings.addEventListener("click", () => {
  settingsPage.style.display = "none";
  document.querySelector(".chat-messages").style.display = "flex";
  document.querySelector(".chat-footer").style.display = "flex";

  hideAllTabs();
  resetFeedbackForms();
  resetButtonsToVertical();

  generalManagementBtn.style.background = "#0078d4";
  chatbotInfoBtn.style.background = "#0078d4";
  sendFeedbackBtn.style.background = "#0078d4";
});

// ----------------------------
// Tab Switching Logic
// ----------------------------

generalManagementBtn.addEventListener("click", () => {
  hideAllTabs();
  generalManagementTab.style.display = "block";
  moveButtonsToTopTabs();

  generalManagementBtn.style.background = "#0056a4";
  chatbotInfoBtn.style.background = "#0078d4";
  sendFeedbackBtn.style.background = "#0078d4";
});

chatbotInfoBtn.addEventListener("click", () => {
  hideAllTabs();
  chatbotInfoTab.style.display = "block";
  moveButtonsToTopTabs();

  generalManagementBtn.style.background = "#0078d4";
  chatbotInfoBtn.style.background = "#0056a4";
  sendFeedbackBtn.style.background = "#0078d4";
});

sendFeedbackBtn.addEventListener("click", () => {
  hideAllTabs();
  sendFeedbackTab.style.display = "block";
  moveButtonsToTopTabs();

  resetFeedbackForms(); // Reset both forms when tab is clicked

  generalManagementBtn.style.background = "#0078d4";
  chatbotInfoBtn.style.background = "#0078d4";
  sendFeedbackBtn.style.background = "#0056a4";
});

// ----------------------------
// Feedback Button Logic
// ----------------------------

openFeedbackFormBtn.addEventListener("click", () => {
  openFeedbackFormBtn.style.display = "none";
  feedbackFormContainer.style.display = "block";
  document.getElementById("settingsTabButtons").style.display = "none";

  openKnowledgeFormBtn.style.display = "inline-block";
  knowledgeFormContainer.style.display = "none";
});

openKnowledgeFormBtn.addEventListener("click", () => {
  openKnowledgeFormBtn.style.display = "none";
  knowledgeFormContainer.style.display = "block";
  document.getElementById("settingsTabButtons").style.display = "none";

  openFeedbackFormBtn.style.display = "inline-block";
  feedbackFormContainer.style.display = "none";
});

// ----------------------------
// Language & Number Conversion
// ----------------------------
const detectLanguage = (text) => {
const chineseCharacters = /[\u4e00-\u9fff]/;
const hiraganaKatakana = /[\u3040-\u30ff]/;
const arabicCharacters = /[\u0600-\u06FF]/;
const koreanCharacters = /[\uac00-\ud7af]/;
const hindiCharacters = /[\u0900-\u097F]/; // Hindi Unicode range
const spanishCharacters = /[áéíóúñü]/i;
const frenchCharacters = /[àâæçéèêëîïôœùûüÿ]/i;

if (hindiCharacters.test(text)) return 'hi-IN';
if (hiraganaKatakana.test(text)) return 'ja-JP';
if (chineseCharacters.test(text)) return 'zh-HK';
if (arabicCharacters.test(text)) return 'ar-SA';
if (koreanCharacters.test(text)) return 'ko-KR';
if (spanishCharacters.test(text)) return 'es-ES';
if (frenchCharacters.test(text)) return 'fr-FR';
if (text.toLowerCase().includes("apa") || text.toLowerCase().includes("kamu") || text.toLowerCase().includes("tidak") || text.toLowerCase().includes("kamusta") || text.toLowerCase().includes("ako") || text.toLowerCase().includes("salamat") || text.toLowerCase().includes("maligayang") || text.toLowerCase().includes("lupang") || text.toLowerCase().includes("ikaw")|| text.toLowerCase().includes("maganda")|| text.toLowerCase().includes("paalam")|| text.toLowerCase().includes("bahay")|| text.toLowerCase().includes("isa")|| text.toLowerCase().includes("kumain")|| text.toLowerCase().includes("dalawa")|| text.toLowerCase().includes("tatlo")|| text.toLowerCase().includes("pito")|| text.toLowerCase().includes("mahal")|| text.toLowerCase().includes("selamat")) return 'id-ID';

return 'en-GB';
};
const numberMap = {
'en-GB': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine', 'sixty', 'sixty-one', 'sixty-two', 'sixty-three', 'sixty-four', 'sixty-five', 'sixty-six', 'sixty-seven', 'sixty-eight', 'sixty-nine', 'seventy', 'seventy-one', 'seventy-two', 'seventy-three', 'seventy-four', 'seventy-five', 'seventy-six', 'seventy-seven', 'seventy-eight', 'seventy-nine', 'eighty', 'eighty-one', 'eighty-two', 'eighty-three', 'eighty-four', 'eighty-five', 'eighty-six', 'eighty-seven', 'eighty-eight', 'eighty-nine', 'ninety', 'ninety-one', 'ninety-two', 'ninety-three', 'ninety-four', 'ninety-five', 'ninety-six', 'ninety-seven', 'ninety-eight', 'ninety-nine', 'one hundred', 'two thousand twenty five'],
'hi-IN': ['शून्य', 'एक', 'दो', 'तीन', 'चार', 'पाँच', 'छह', 'सात', 'आठ', 'नौ'], // Added Hindi numbers
'ja-JP': ['ゼロ', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'],
'zh-HK': ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
'ar-SA': ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
'ko-KR': ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'],
'es-ES': ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'],
'fr-FR': ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
'ru-RU': ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
'id-ID': ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'],
};
const replaceNumbersWithWords = (text, lang) => {
const timeWithColon = {
'zh-HK': (text) => text.replace(/(\d+):(\d+)/g, '$1点$2'),
'ja-JP': (text) => text.replace(/(\d+):(\d+)/g, '$1時$2分'),
'ar-SA': (text) => text.replace(/(\d+):(\d+)/g, '$1: $2'),
'ko-KR': (text) => text.replace(/(\d+):(\d+)/g, '$1시$2분'),
'es-ES': (text) => text.replace(/(\d+):(\d+)/g, '$1:$2'),
'fr-FR': (text) => text.replace(/(\d+):(\d+)/g, '$1:$2'),
'en-GB': (text) => text
};
if (timeWithColon[lang]) {
text = timeWithColon[lang](text);
}
return text.replace(/\d+/g, (number) => numberMap[lang][parseInt(number)]);
};

// ----------------------------
// Speaking Functions
// ----------------------------

// Clean text before sending to SpeechSynthesis: remove HTML tags and strip emojis
const cleanTextForSpeech = (text) => {
return text
.replace(/<br\s*\/?>/gi, ' ')
.replace(/<img[^>]*>/gi, '')
// strip emojis (Unicode ranges U+1F300–U+1F6FF, U+1F900–U+1F9FF, U+2700–U+27BF)
.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2700}-\u{27BF}]/gu, '')
.trim();
};

// Modified speakLongText accepts a callback when finished.
const speakLongText = (text, lang, callback) => {
text = cleanTextForSpeech(text);
text = replaceNumbersWithWords(text, lang);
const MAX_CHUNK_LENGTH = 120;

let chunks = text.length > MAX_CHUNK_LENGTH
? text.match(new RegExp(`(.{1,${MAX_CHUNK_LENGTH}}(?:[\\.,;:!?\\s]|$))`, 'g'))
: [text];

const speakChunk = (index) => {
if (index >= chunks.length) {
if (callback) callback();
return;
}

let utterance = new SpeechSynthesisUtterance(chunks[index]);
let voices = window.speechSynthesis.getVoices();

// Find a matching voice for the selected language
const findVoice = (langCode) => voices.find(voice => voice.lang.startsWith(langCode));

utterance.voice = findVoice(lang) || utterance.voice;
utterance.lang = utterance.voice ? utterance.voice.lang : lang;

// Log available voices
console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`));

utterance.onend = () => speakChunk(index + 1);
window.speechSynthesis.speak(utterance);
};

speakChunk(0);
};

// Modified speakText takes an optional callback.
const speakText = (text, lang = 'en-GB', callback) => {
  // If text looks like HTML, clean it
  if (/<[a-z][\s\S]*>/i.test(text)) {
    const clone = document.createElement("div");
    clone.innerHTML = text;
    clone.querySelectorAll("button").forEach(b => b.remove());
    text = clone.innerText.trim();
  }

  lang = detectLanguage(text);
  speakLongText(text, lang, callback);
};
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
speechSynthesis.onvoiceschanged = () => {};
}

// ----------------------------
// Unknown Response Dictionaries
// ----------------------------
const unknownResponses = {
  "en-GB": [
    "I could not quite understand that. Sorry.",
    "I'm not sure about that.",
    "Sorry, I don't understand."
  ],
 "zh-HK": [
  "唔好意思，我唔明你講乜。",
  "唔好意思，我唔係好明白，你可唔可以問我其他問題？"
],
"id-ID": [
  "Maaf, saya tidak mengerti.",
  "Saya belum paham maksud Anda.",
  "Bisa ulangi pertanyaannya?"
],
  "ko-KR": [
    "죄송합니다, 이해하지 못했습니다.",
    "미안하지만, 이해가 안 됩니다."
  ],
  "ja-JP": [
    "すみません、よくわかりません。",
    "申し訳ありませんが、理解できませんでした。"
  ],
  "es-ES": [
    "Lo siento, no lo entendí.",
    "Perdona, no comprendí."
  ],
  "fr-FR": [
    "Désolé, je n'ai pas compris.",
    "Je ne comprends pas, désolé."
  ],
  "ru-RU": [
    "Извините, я не понял.",
    "Прошу прощения, я не понимаю."
  ],
"hi-IN": [
  "मुझे यह ठीक से समझ में नहीं आया। क्षमा करें।",
  "मुझे इस बारे में यकीन नहीं है।",
  "क्षमा करें, मैं समझ नहीं पाया।"
],
};

// Just URLs for each language to load in iframe:
const reportIssueLinks = {
  "en-GB": "https://docs.google.com/forms/d/e/1FAIpQLScQBFTvYoRXE_Er6Oq1zo_1TWS4S4kW0NaDUxCcwveM9QkaDQ/viewform?embedded=true",
  "zh-HK": "https://docs.google.com/forms/d/e/1FAIpQLSeg_-lNY-NtKLtJ1be5HCRLOozPpq7z7elUnbYR2ATam6Fmmg/viewform?embedded=true",
  "ko-KR": "https://docs.google.com/forms/d/e/1FAIpQLSfGntwJGhb1-RSBOJUKLm3sd6VH3heP62SWnpjFremU-ifnxQ/viewform?embedded=true",
"id-ID": "https://docs.google.com/forms/d/e/1FAIpQLSfBZLtamcbe_3QHEvUdMx5hHpkW6RWmht7wKhBdljR1RmQ82g/viewform?embedded=true",
  "ja-JP": "https://docs.google.com/forms/d/e/1FAIpQLScwMrjRAuyKdzzaWu1xtqmfiHvWdTR2OcUTkZ8tbkBvleOluQ/viewform?embedded=true",
  "es-ES": "https://docs.google.com/forms/d/e/1FAIpQLSdiFmM-J-zxE3qTbOdh06vt1ry8mjW3V4MZ4unz6109rXH-Ig/viewform?embedded=true",
  "fr-FR": "https://docs.google.com/forms/d/e/1FAIpQLSc8X8fLLtUACVuXzg8-bmWGKsO4A8FTQIg_XpiL5FMAxJTcDw/viewform?usp=dialog?embedded=true",
  "ru-RU": "https://docs.google.com/forms/d/e/1FAIpQLScs3I1tiYLj2Pn-WVDNujtRRQzzPGiN_Pgf1-BzeTYHnjuQKA/viewform?usp=dialog?embedded=true",
  "hi-IN": "https://docs.google.com/forms/d/e/1FAIpQLSdx7Vm6nnQt-_vgRf7dC7ewkArZFPyGfNGkug2GDqoVoZT_qw/viewform?embedded=true"
};

const reportButtonTexts = {
  "en-GB": "Report chatbot knowledge issue",
  "id-ID": "Laporkan masalah pengetahuan chatbot",
  "zh-HK": "報告機械人知識問題",
  "ko-KR": "챗봇 지식 문제 신고",
  "ja-JP": "チャットボットの知識の問題を報告する",
  "es-ES": "Informar de un problema de conocimiento del chatbot",
  "fr-FR": "Signaler un problème de connaissance du chatbot",
  "ru-RU": "Сообщить о проблеме знаний чат-бота",
"in-HI": "चैटबॉट ज्ञान समस्या की रिपोर्ट करें",
};

const getRandomUnknownResponse = (lang) => {
  const responses = unknownResponses[lang] || unknownResponses["en-GB"];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const buttonHtml = getReportButton(lang);
  return `${randomResponse} ${buttonHtml}`;
};

const getReportButton = (lang) => {
  const text = reportButtonTexts[lang] || reportButtonTexts["en-GB"];
  // Return a BUTTON with class "open-report" and data-lang attribute
  return `<button class="report-button open-report" data-lang="${lang}">${text}</button>`;
};

// ----------------------------
// Chatbot Core Functions (Text Chat)
// ----------------------------

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");
const attachedFilePreview = document.getElementById("attachedFilePreview");
const chatFooter = document.getElementById("chatFooter");
const callButton = document.getElementById("callButton");
const callOverlay = document.getElementById("callOverlay");
const callStatus = document.getElementById("callStatus");
const endCallButton = document.getElementById("endCallButton");

const reportOverlay = document.getElementById("reportOverlay");
const reportOverlayIframe = reportOverlay.querySelector("iframe");
const closeReportBtn = document.getElementById("closeReport");

// In text mode, addMessage displays messages.

const addMessage = (message, className, withVoiceButton = false, isUnknown = false, lang = "en-GB") => {
  if (callMode) return;

  const isCallStatus = /calling|call declined|call ended/i.test(message);
  if (className === 'bot-message' && !isCallStatus) {
    const botSound = document.getElementById("botSound");
    botSound.currentTime = 0;
    botSound.play();
  }

  const emptyMessage = document.getElementById("emptyMessage");
  if (emptyMessage) {
    emptyMessage.style.display = "none";
  }

  const messageWrapper = document.createElement("div");
  messageWrapper.className = "message-wrapper";

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${className}`;
  messageDiv.innerHTML = message;



  if (withVoiceButton) {
    const voiceButton = document.createElement("button");
    voiceButton.className = "voice-button";
    voiceButton.innerHTML = "🔊";
    voiceButton.onclick = () => speakText(message, detectLanguage(message));
    messageWrapper.appendChild(messageDiv);
    messageWrapper.appendChild(voiceButton);
  } else {
    messageWrapper.appendChild(messageDiv);
  }

  chatMessages.appendChild(messageWrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

// ----------------------------
// Overlay open/close handlers
// ----------------------------

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("open-report")) {
    const lang = event.target.getAttribute("data-lang") || "en-GB";
    const url = reportIssueLinks[lang] || reportIssueLinks["en-GB"];
    reportOverlay.style.display = "block";
    reportOverlayIframe.src = url;
  }
});

closeReportBtn.addEventListener("click", () => {
  reportOverlay.style.display = "none";
  reportOverlayIframe.src = "about:blank"; // clear iframe for next time
});
// ---- CLEAR CHAT LOGIC ----
document.getElementById("clearChatBtn").addEventListener("click", () => {
  document.getElementById("clearConfirmOverlay").style.display = "flex";
});

document.getElementById("confirmClearNo").addEventListener("click", () => {
  document.getElementById("clearConfirmOverlay").style.display = "none";
});

document.getElementById("confirmClearYes").addEventListener("click", () => {
  const chatMessages = document.getElementById("chatMessages");
  chatMessages.innerHTML = '<div id="emptyMessage" class="empty-chat-message"></div>';
  document.getElementById("clearConfirmOverlay").style.display = "none";

  // Restore welcome message
  const now = new Date();
  const hours = now.getHours();
  let greeting = "Good evening! How can I assist you?";
  if (hours < 12) greeting = "Good morning! How can I assist you?";
  else if (hours < 18) greeting = "Good afternoon! How can I assist you?";

  const emptyDiv = document.getElementById("emptyMessage");
  if (emptyDiv) {
    emptyDiv.textContent = greeting;
    emptyDiv.style.display = "block";
  }
});
// ───── What’s New Overlay Handlers ─────
document
  .getElementById("whatsNewLink")
  .addEventListener("click", () => {
    const overlay = document.getElementById("whatsNewOverlay");
    const content = document.getElementById("whatsNewContent");
    overlay.style.display = "flex";

    fetch("https://docs.google.com/document/d/e/2PACX-1vQFlqWBmfCnH_qZ22SslL8gAkiTLQB8OgSWfvDSlyMjBH2WN3tvdJRrLtkqGqCNcYrXDTRW_Ng1dB98/pub?embedded=true")
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const article = doc.querySelector(".doc-content") || doc.body;
        content.innerHTML = article.innerHTML;
      })
      .catch(err => {
        content.innerHTML = `
          <h2 style="text-align:center;font-size:24px;font-weight:bold;color:#2c2c2c;">What's New in Version 6.7</h2>
          <p style="font-family:Arial,sans-serif;font-size:16px;color:#444;line-height:1.6;margin:20px 0;">
            <strong style="color:#0056a1;">✅ New Language Support</strong><br><br>
• Chatbot now supports Cantonese and Bahasa Indonesia<br><br>

<strong style="color:#0056a1;">✅ Two Way Conversations</strong><br><br>
• Chatbot is now capable of more advanced two way conversations for certain topics<br><br>

<strong style="color:#0056a1;">✅ Improved Layout</strong><br><br>
• New chatbot settings page<br>
• Chatbot info page is now located in info tab of settings<br><br>

<strong style="color:#0056a1;">✅ Knowledge Expansion</strong><br><br>
• More knowledge added to the chatbot<br><br>

<strong style="color:#0056a1;">✅ Fixed Known Issues</strong><br><br>
• Fixed known issues with certain requests<br>
• Fixed known issue with speaking certain messages<br><br>

<strong style="color:#0056a1;">🆕 New Functions Added</strong><br><br>
• Users can now clear chat messages<br><br>

</p>
<p style="text-align:center;font-size:13px;color:gray;">
  This is an offline version of the What’s New Page. Information may not be current.
</p>
        `;
        console.error("Error loading What's New:", err);
      });
  });

document
  .getElementById("closeWhatsNewBtn")
  .addEventListener("click", () => {
    document.getElementById("whatsNewOverlay").style.display = "none";
  });
const addTypingIndicator = () => {
  if (callMode) return;
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing-indicator";
  typingDiv.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};const botTyping = () => {
addTypingIndicator();
setTimeout(() => {
const typingDiv = chatMessages.querySelector(".typing-indicator");
if (typingDiv) typingDiv.remove();
}, 1500);
};

// Modified generateBotResponse now accepts a language parameter.


const handleMath = (userMessage) => {
try {
const expression = userMessage.match(/[\d\+\-\*\/\(\)]+/);
if (expression) {
const result = eval(expression[0]);
return `The result is: ${result}`;
} else {
return "I couldn't understand the math expression. Please try again.";
}
} catch (error) {
return "Oops, something went wrong with the math calculation.";
}
};

// ----------------------------
// Text Chat Event Listeners (non-call mode)
// ----------------------------
sendButton.addEventListener("click", () => {
let userMessage = chatInput.value.trim();
// Check if the last bot message was "Hi! How can I assist you today?" 
// and the user's response is "yes"
if (lastBotResponse === "Hi! How can I assist you today?" && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("GREAT!", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "GREAT!";
}, 1000); // ⏳ Delay bot response for realism
return;
}
if (
  lastBotResponse === "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥" &&
  (
    userMessage.toLowerCase().includes("i am a child") ||
    userMessage.toLowerCase().includes("baby tooth") ||
    userMessage.toLowerCase().includes("just a baby tooth") ||
    userMessage.toLowerCase().includes("it was a baby tooth") ||
    userMessage.toLowerCase().includes("i am young") ||
    userMessage.toLowerCase().includes("i am kid") ||
    userMessage.toLowerCase().includes("i’m a kid") ||
    userMessage.toLowerCase().includes("i’m a child") ||
    userMessage.toLowerCase().includes("little kid") ||
    userMessage.toLowerCase().includes("it was nothing serious") ||
    userMessage.toLowerCase().includes("it was normal") ||
    userMessage.toLowerCase().includes("it fell out naturally") ||
    userMessage.toLowerCase().includes("it was supposed to fall out") 
  )
) {
  addMessage(userMessage, "user-message", false);
  chatInput.value = "";
  botTyping();

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove();
    addMessage(
      "That’s great to hear! Baby teeth falling out is totally normal. Keep taking good care of those white teeth! 🦷😊",
      "bot-message",
      true
    );
    lastBotResponse = "That’s great to hear! Baby teeth falling out is totally normal. Keep taking good care of those white teeth! 🦷😊";
  }, 1000);
  return;
}
if (
  lastBotResponse === "You lost a tooth? How old are you? I hope that was just a baby tooth! If not, it’s a good idea to go see the dentist! 🦷 Make sure you brush your teeth! 🪥" &&
  (
    userMessage.toLowerCase().includes("i am an adult") ||
    userMessage.toLowerCase().includes("i’m an adult") ||
userMessage.toLowerCase().includes("im an adult") ||
    userMessage.toLowerCase().includes("i am grown up") ||
    userMessage.toLowerCase().includes("i’m grown up") ||
    userMessage.toLowerCase().includes("cavity") ||
    userMessage.toLowerCase().includes("it was a cavity") ||
    userMessage.toLowerCase().includes("it just fell out") ||
    userMessage.toLowerCase().includes("it fell out") ||
    userMessage.toLowerCase().includes("never brush") ||
    userMessage.toLowerCase().includes("don’t brush") ||
    userMessage.toLowerCase().includes("dont brush") ||
    userMessage.toLowerCase().includes("didn't brush") ||
    userMessage.toLowerCase().includes("did not brush") ||
    userMessage.toLowerCase().includes("bad hygiene") ||
    userMessage.toLowerCase().includes("forgot to brush") ||
    userMessage.toLowerCase().includes("never took care") ||
    userMessage.toLowerCase().includes("no dental care") ||
    userMessage.toLowerCase().includes("adult tooth") ||
    userMessage.toLowerCase().includes("adult teeth") ||
    userMessage.toLowerCase().includes("grown up tooth") ||
    userMessage.toLowerCase().includes("grown up teeth") 
  )
) {
  addMessage(userMessage, "user-message", false);
  chatInput.value = "";
  botTyping();

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove();
    addMessage(
      "Hmm, losing adult teeth can be serious. Definitely consider visiting a dentist soon! And maybe start brushing more regularly 🪥🙂",
      "bot-message",
      true
    );
    lastBotResponse = "Hmm, losing adult teeth can be serious. Definitely consider visiting a dentist soon! And maybe start brushing more regularly 🪥🙂";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Hmm, losing adult teeth can be serious. Definitely consider visiting a dentist soon! And maybe start brushing more regularly 🪥🙂" &&
  (
    userMessage.toLowerCase().includes("i never brush") ||
    userMessage.toLowerCase().includes("i dont brush") ||
    userMessage.toLowerCase().includes("i don't brush") ||
    userMessage.toLowerCase().includes("i did not brush") ||
    userMessage.toLowerCase().includes("i didnt brush") ||
    userMessage.toLowerCase().includes("never brush") ||
    userMessage.toLowerCase().includes("dont brush") ||
    userMessage.toLowerCase().includes("don't brush") ||
    userMessage.toLowerCase().includes("did not brush") ||
    userMessage.toLowerCase().includes("didnt brush") ||
    userMessage.toLowerCase().includes("bad hygiene") ||
    userMessage.toLowerCase().includes("no dental care") ||
    userMessage.toLowerCase().includes("forgot to brush") ||
    userMessage.toLowerCase().includes("never took care") ||
    userMessage.toLowerCase().includes("no brushing")
  )
) {
  addMessage(userMessage, "user-message", false); // show user message
  chatInput.value = ""; // clear input
  botTyping(); // show typing

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove();
    addMessage(
      "Yikes! It’s never too late to start good habits. Maybe try brushing twice a day — your teeth will thank you! 🪥😄",
      "bot-message",
      true
    );
    lastBotResponse = "Yikes! It’s never too late to start good habits. Maybe try brushing twice a day — your teeth will thank you! 🪥😄";
  }, 1000);
  return;
}
if (
  lastBotResponse === "A dictator? Are you a leader of a country?" &&
  (
    userMessage.toLowerCase().includes("yes")
  )
) {
  addMessage(userMessage, "user-message", false); // show user message
  chatInput.value = ""; // clear input
  botTyping(); // show typing

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove();
    addMessage(
      "Wow! Welcome! What country are you leader of?",
      "bot-message",
      true
    );
    lastBotResponse = "Wow! Welcome! What country are you leader of?";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Please do not say that! You are very impolite! I am not a thief!" &&
  userMessage.toLowerCase().includes("you are")
) {
  addMessage(userMessage, "user-message", false); // ✅ User message is shown
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing animation
    addMessage(
      "Stop! You are making me angry! If you don’t stop now, I will explode like a ball of fire!! <br><br>I AM NOT A THIEF.",
      "bot-message",
      true
    ); // ✅ Bot reply
    lastBotResponse = "Please do not say that! You are very impolite! I am not a thief!!";
  }, 1000);
  return;
}

// Check if the last bot message was about Chinese being the official language
// and the user's response is "yes"
if (lastBotResponse === "That sounds exciting! Dubai is one of the seven emirates of the UAE, and is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. Would you like me to give you some tips on what to do in Dubai?" && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("<b>Here are some tips on what to see and do in Dubai</b><br><br>Burj Khalifa – Visit the 148th floor for its incredible views.<br><br>Dubai Mall -- Aquarium, Ice Rink, VR Park, and luxury shopping.<br><br>Palm Jumeirah – visit Atlantis & Aquaventure Waterpark.<br><br>Desert Safari – Dune bashing, camel rides, and sandboarding.<br><br>Skydiving – Jump off a plane over Palm Jumeirah.<br><br>Hot Air Balloon Ride – Watch the beautiful Arabian sunrise over the desert from a hot air ballooon.<br><br>Visit Abu Dhabi – Visit the Sheikh Zayed Grand Mosque.<br><br>Old Dubai Street Food Tour – Try Shawarma, Karak Chai, & Luqaimat.<br><br>Dubai Frame – See views of both old and new Dubai.<br><br> <b>Additional Tips</b><br><br>Best time to visit: November to March<br><br>Getting around: Dubai Metro and Taxis are convenient<br><br>Friday is a weekend day: Many places open late due to Friday prayers. ", true); // ✅ Bot message appears correctly
lastBotResponse = "That sounds exciting! Dubai is one of the seven emirates of the UAE, and is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. Would you like me to give you some tips on what to do in Dubai?";
}, 1000); // ⏳ Delay bot response for realism
return;
}

if (lastBotResponse === "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave." && userMessage.trim().toLowerCase() === "no!!") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("OK. I’m really sorry to hear that. Goodbye. I hope you change your mind. <br><br>Oh, and if you don’t mind, please go to the info page to send feedback to help improve me in the future.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
}, 1000); // ⏳ Delay bot response for realism
return;
}
if (lastBotResponse === "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave." && userMessage.trim().toLowerCase() === "no!") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("OK. I’m really sorry to hear that. Goodbye. I hope you change your mind. <br><br>Oh, and if you don’t mind, please go to the info page to send feedback to help improve me in the future.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
}, 1000); // ⏳ Delay bot response for realism
return;
}
// Check if the last bot message was about Chinese being the official language
// and the user's response is "yes"
if (lastBotResponse === "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave." && userMessage.trim().toLowerCase() === "no") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("OK. I’m really sorry to hear that. Goodbye. I hope you change your mind. <br><br>Oh, and if you don’t mind, please go to the info page to send feedback to help improve me in the future.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
}, 1000); // ⏳ Delay bot response for realism
return;
}
if (lastBotResponse === "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave." && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("Thank you very much! I will try very hard to be a smart robot from now on.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "I’m really sorry you don’t think I am a good chatbot. I really try my best to help you. Could you please give me another chance? If you still don’t like me after that, then you can leave.";
}, 1000); // ⏳ Delay bot response for realism
return;
}

if (
  lastBotResponse === "Hello Mrs Piers! I think I might know who you are! Can you enter the secret Mrs Piers code?" &&
  (
    userMessage.toLowerCase().includes("what is it") ||
    userMessage.toLowerCase().includes("i don't know it") ||
    userMessage.toLowerCase().includes("i forgot")
  )
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator
    addMessage(
      "Nice try… but if you were really Mrs Piers, you'd never forget it!",
      "bot-message",
      true
    ); // ✅ Bot reply
    lastBotResponse = "Nice try… but if you were really Mrs Piers, you'd never forget it!";
  }, 1000);
  return;
}
if (
  lastBotResponse === "嘩，聽落好興奮喎！杜拜係阿聯酋其中一個酋長國，以高樓大廈例如哈里發塔、豪華購物同創新建築聞名。旅遊好旺、景點一流，又有濃厚嘅阿聯酋文化，傳統同現代融合得好好，真係好受歡迎嘅旅遊熱點。你想唔想我介紹下去杜拜可以做啲乜？" &&
  (
    userMessage.toLowerCase().includes("好") ||
    userMessage.toLowerCase().includes("要") ||
    userMessage.toLowerCase().includes("想")
  )
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator
    addMessage(
      "<b>去杜拜可以玩啲乜？</b><br><br>" +
      "哈里發塔 — 上去第148層睇晒成個城市景。<br><br>" +
      "杜拜商場 — 有水族館、溜冰場、VR樂園同高級購物。<br><br>" +
      "棕櫚島 — 去亞特蘭蒂斯酒店同水上樂園玩。<br><br>" +
      "沙漠之旅 — 開越野車、騎駱駝、滑沙。<br><br>" +
      "跳降傘 — 係棕櫚島上面跳落嚟，好刺激。<br><br>" +
      "坐熱氣球 — 朝早睇住沙漠日出。<br><br>" +
      "去阿布扎比 — 去睇謝赫扎耶德大清真寺。<br><br>" +
      "老杜拜街頭美食 — 試下沙威瑪、卡拉克奶茶同椰棗球。<br><br>" +
      "杜拜之框 — 同時睇到新舊城市嘅對比。<br><br>" +
      "<b>小貼士：</b><br><br>" +
      "最佳季節：11月到3月。<br>" +
      "交通：搭地鐵或者的士都方便。<br>" +
      "星期五係周末：好多地方會遲啲先開，因為要祈禱。",
      "bot-message",
      true
    ); // ✅ Bot reply
    lastBotResponse = "<b>去杜拜可以玩啲乜？</b><br><br>" +
      "哈里發塔 — 上去第148層睇晒成個城市景。<br><br>" +
      "杜拜商場 — 有水族館、溜冰場、VR樂園同高級購物。<br><br>" +
      "棕櫚島 — 去亞特蘭蒂斯酒店同水上樂園玩。<br><br>" +
      "沙漠之旅 — 開越野車、騎駱駝、滑沙。<br><br>" +
      "跳降傘 — 係棕櫚島上面跳落嚟，好刺激。<br><br>" +
      "坐熱氣球 — 朝早睇住沙漠日出。<br><br>" +
      "去阿布扎比 — 去睇謝赫扎耶德大清真寺。<br><br>" +
      "老杜拜街頭美食 — 試下沙威瑪、卡拉克奶茶同椰棗球。<br><br>" +
      "杜拜之框 — 同時睇到新舊城市嘅對比。<br><br>" +
      "<b>小貼士：</b><br><br>" +
      "最佳季節：11月到3月。<br>" +
      "交通：搭地鐵或者的士都方便。<br>" +
      "星期五係周末：好多地方會遲啲先開，因為要祈禱。";
  }, 1000);
  return;
}
if (
  lastBotResponse ===
    "Wow, landing at Pyongyang International Airport in a private jet? That sounds like quite the adventure! What brings you there?" &&
  (
    userMessage.toLowerCase().includes("i am the president") ||
    userMessage.toLowerCase().includes("i'm the president") ||
    userMessage.toLowerCase().includes("im the president") ||
    userMessage.toLowerCase().includes("i am the dictator") ||
    userMessage.toLowerCase().includes("i'm the dictator") ||
    userMessage.toLowerCase().includes("im the dictator") ||
    userMessage.toLowerCase().includes("i am the leader") ||
    userMessage.toLowerCase().includes("i'm the leader") ||
    userMessage.toLowerCase().includes("im the leader") ||
    userMessage.toLowerCase().includes("i am the king") ||
    userMessage.toLowerCase().includes("i'm the king") ||
    userMessage.toLowerCase().includes("im the king") ||
    userMessage.toLowerCase().includes("i am the ruler") ||
    userMessage.toLowerCase().includes("i'm the ruler") ||
    userMessage.toLowerCase().includes("im the ruler") ||
    userMessage.toLowerCase().includes("i am dictator") ||
    userMessage.toLowerCase().includes("i'm dictator") ||
    userMessage.toLowerCase().includes("im dictator") ||
    userMessage.toLowerCase().includes("i am leader") ||
    userMessage.toLowerCase().includes("i'm leader") ||
    userMessage.toLowerCase().includes("im leader") ||
    userMessage.toLowerCase().includes("i am king") ||
    userMessage.toLowerCase().includes("i'm king") ||
    userMessage.toLowerCase().includes("im king") ||
    userMessage.toLowerCase().includes("i am ruler") ||
    userMessage.toLowerCase().includes("i'm ruler") ||
    userMessage.toLowerCase().includes("im ruler")
  )
) {
  addMessage(userMessage, "user-message", false);
  chatInput.value = "";
  botTyping();

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove();
    addMessage(
      "Ah, a very important visitor indeed! Welcome! What would you like to do next?",
      "bot-message",
      true
    );
    lastBotResponse =
      "Ah, a very important visitor indeed! Welcome! What would you like to do next?";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Nice try… but if you were really Mrs Piers, you'd never forget it!" &&
  userMessage.toLowerCase().includes("i am") &&
  (
    userMessage.toLowerCase().includes("mrs piers") ||
    userMessage.toLowerCase().includes("mrs. piers") ||
    userMessage.toLowerCase().includes("missus piers")
  )
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing animation
    addMessage(
      "Hmm... okay then, Mrs Piers... if that’s really you, prove it with the code.",
      "bot-message",
      true
    ); // ✅ Bot reply
    lastBotResponse = "Hmm... okay then, Mrs Piers... if that’s really you, prove it with the code.";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Hmm... okay then, Mrs Piers... if that’s really you, prove it with the code." &&
  (
    userMessage.toLowerCase().includes("i forgot the code") ||
    userMessage.toLowerCase().includes("i don't remember") ||
userMessage.toLowerCase().includes("i dont remember") ||
    userMessage.toLowerCase().includes("i do not remember") ||
    userMessage.toLowerCase().includes("i don’t remember") ||
userMessage.toLowerCase().includes("i dont remember") ||
userMessage.toLowerCase().includes("i don’t have it") ||
    userMessage.toLowerCase().includes("i dont have it") ||
    userMessage.toLowerCase().includes("i do not have it") ||
    userMessage.toLowerCase().includes("i have no idea what it is") ||
userMessage.toLowerCase().includes("i have no idea what the code is") ||
    userMessage.toLowerCase().includes("ok i am lying") ||
    userMessage.toLowerCase().includes("ok i am not mrs piers") ||
userMessage.toLowerCase().includes("ok i am not mrs. piers") ||
userMessage.toLowerCase().includes("ok i am not missus piers") ||
    userMessage.toLowerCase().includes("i am a thief")
  )
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing animation
    addMessage(
      "Aha! I KNEW IT!! You are the thief!!!",
      "bot-message",
      true
    ); // ✅ Bot reply
    lastBotResponse = "Aha! I KNEW IT!! You are the thief!!!";
  }, 1000);
  return;
}
// Check if the last bot message was about Chinese being the official language
// and the user's response is "yes"
if (lastBotResponse === "Chinese is the official language of China, Taiwan, and Singapore. Do you want to learn more?" && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("Chinese is the official language of China, Taiwan, and Singapore, with Mandarin being the most widely spoken dialect. It is a tonal language, meaning the meaning of a word can change based on its tone. The written form of Chinese uses characters, with thousands of unique symbols, rather than an alphabet. The language has a long history, with roots going back over 3,000 years, and it has significantly influenced other East Asian languages. While Mandarin is the standard, there are several other dialects, like Cantonese and Shanghainese, spoken in different regions.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "Chinese is the official language of China, Taiwan, and Singapore, with Mandarin being the most widely spoken dialect. It is a tonal language, meaning the meaning of a word can change based on its tone. The written form of Chinese uses characters, with thousands of unique symbols, rather than an alphabet. The language has a long history, with roots going back over 3,000 years, and it has significantly influenced other East Asian languages. While Mandarin is the standard, there are several other dialects, like Cantonese and Shanghainese, spoken in different regions.";
}, 1000); // ⏳ Delay bot response for realism
return;
}

if (lastBotResponse === "I’m sorry to hear that. I try my best to provide accurate information. Can I help you in any way?" && userMessage.trim().toLowerCase() === "no") {
addMessage(userMessage, "user-message", false); // ✅ User message ("no") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("I’m really sorry you are so upset. If you would like, you can go to the info page and send feedback. This will help improve me in the future.", true); // ✅ Bot message appears correctly
lastBotResponse = "I’m sorry to hear that. I try my best to provide accurate information. Can I help you in any way?";
}, 1000); // ⏳ Delay bot response for realism
return;
}

// Check if the last bot message was about Chinese being the official language
// and the user's response is "yes"
if (lastBotResponse === "<h2>Lupang Hinirang</h2>" + 
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
"Ang mamatay nang dahil sa iyo.</i><br><br>Would you like me to provide the english version of Lupang Hinirang?" && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("<h2>Lupang Hinirang (English Version)</h2>" + "<i>Land of the Morning, Pearl of the Orient<br>" + "The heart's fervor in your breast is alive<br>" + "Chosen land, cradle of the brave,<br>" + "To tyrants, you shall never kneel.<br><br>" + "From sea and mountains,<br>" + "From your blue skies and winds,<br>" + "Your beauty shines<br>" + "In songs of freedom loved.<br><br>" + "The gleam of your flag<br>" + "Represents victory shining bright;<br>" + "The stars and sun of your flag<br>" + "Will never fade.<br>" + "Land of the sun, of glory and love,<br>" + "Life is heaven in your presence;<br>" + "Our joy is that when there are oppressors,<br>" + "We will die for you.</i>", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "Chinese is the official language of China, Taiwan, and Singapore, with Mandarin being the most widely spoken dialect. It is a tonal language, meaning the meaning of a word can change based on its tone. The written form of Chinese uses characters, with thousands of unique symbols, rather than an alphabet. The language has a long history, with roots going back over 3,000 years, and it has significantly influenced other East Asian languages. While Mandarin is the standard, there are several other dialects, like Cantonese and Shanghainese, spoken in different regions.";
}, 1000); // ⏳ Delay bot response for realism
return;
}
if (
  lastBotResponse === "Hmm, both titles sound interesting! If you'd like, I can help you compare them—maybe by tone, clarity, or creativity. Want me to do that?" &&
  userMessage.toLowerCase().includes("pick one")
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing animation
    addMessage(
      "Okay, I’ll pick one… but it’s just my opinion! Which one feels more powerful to *you*?",
      "bot-message",
      true
    );
    lastBotResponse = "Okay, I’ll pick one… but it’s just my opinion! Which one feels more powerful to *you*?";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Okay, I’ll pick one… but it’s just my opinion! Which one feels more powerful to *you*?" &&
  userMessage.toLowerCase().includes("pick one")
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing indicator

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing animation
    addMessage(
      "Alright, alright… Which one sounds better to you?",
      "bot-message",
      true
    );
    lastBotResponse = "Which one sounds better to you?";
  }, 1000);
  return;
}
if (
  lastBotResponse === "Alright, alright… Which one sounds better to you?" &&
  (
    userMessage.toLowerCase().includes("you still haven't picked") ||
    userMessage.toLowerCase().includes("you still have not picked") ||
    userMessage.toLowerCase().includes("pick one") ||
    userMessage.toLowerCase().includes("just pick") ||
    userMessage.toLowerCase().includes("just choose") ||
    userMessage.toLowerCase().includes("why can't you") ||
    userMessage.toLowerCase().includes("why cant you") ||
    userMessage.toLowerCase().includes("why cannot you") ||
    userMessage.toLowerCase().includes("why won’t you") ||
    userMessage.toLowerCase().includes("why won't you")
  )
) {
  addMessage(userMessage, "user-message", false); // ✅ Show user message
  chatInput.value = ""; // ✅ Clear input
  botTyping(); // ✅ Show typing animation

  setTimeout(() => {
    const typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing
    addMessage(
      "Okay, I’m sorry… but I am unable to pick one.",
      "bot-message",
      true
    );
    lastBotResponse = "Okay, I’m sorry… but I am unable to pick one.";
  }, 1000);
  return;
}


// Check if the last bot message was about flying a drone and the user's response is "yes"
if (lastBotResponse === "Here's a quick guide on how to fly a drone:<br><br>1. Understand the Drone Basics:<br>- Drones typically have four main components: the drone body, propellers, battery, and controller.<br>- Learn the basic controls: throttle (up/down), yaw (rotate left/right), pitch (tilt forward/backward), and roll (tilt left/right).<br><br>2. Pre-Flight Preparation:<br>- Check the battery: Make sure the drone and the remote control are fully charged.<br>- Inspect the drone: Ensure propellers are securely attached and in good condition, and that the drone is free from any obstructions.<br>- Find a safe area: Look for an open space free from people, buildings, or trees. This will reduce the risk of accidents.<br><br>3. Get Familiar with the Controller:<br>- Left stick (Throttle + Yaw): Controls altitude and turns the drone left or right.<br>- Right stick (Pitch + Roll): Controls forward/backward movement and side-to-side motion.<br>- Trim controls: Some controllers have trim buttons to help adjust flight stability (like correcting drift).<br><br>4. Takeoff:<br>- Gradually increase throttle: Slowly push the throttle stick upwards to lift the drone off the ground. Don’t rush it! Ensure the drone lifts steadily and maintains a steady altitude.<br><br>5. Basic Maneuvers:<br>- Flying forward/backward: Push the right stick forward to fly the drone forward and pull it back to fly backward.<br>- Turning: Rotate the left stick left or right to turn the drone in either direction.<br>- Hovering: To hover in one place, make small adjustments with the throttle and trim controls until the drone remains stationary.<br><br>6. Landing:<br>- Descend slowly: Reduce throttle slowly to bring the drone back down gently. Avoid making sudden movements to ensure a smooth landing.<br>- Land on a flat surface: Make sure the area is clear of obstacles and land carefully.<br><br>7. Practice:<br>- If you're a beginner, practice in a large, open space without many obstacles.<br>- Start with simple tasks like hovering and moving in a straight line before advancing to more complex maneuvers.<br><br>8. Drone Safety Tips:<br>- Follow local regulations: Make sure you’re aware of and follow local drone flying laws and airspace restrictions.<br>- Keep the drone in line of sight: Always maintain visual contact with your drone to avoid losing control.<br>- Respect others: Be considerate of people and wildlife, and avoid flying near crowds or sensitive areas.<br><br>9. Use a Flight Simulator (Optional):<br>- If you're new to flying, consider practicing with a drone flight simulator before taking the drone into the air. This can help you get used to the controls and movements.<br><br>Would you like more details or tips on flying drones?<br><br><img src='https://nofilmschool.com/media-library/dji-air-3-flying-in-the-sky.webp?id=34663814&width=1245&height=700&quality=90&coordinates=53%2C0%2C53%2C0' width='200'>" && userMessage.trim().toLowerCase() === "yes") {
addMessage(userMessage, "user-message", false); // ✅ User message ("yes") is shown WITHOUT read button
chatInput.value = ""; // ✅ Clear input field
botTyping(); // ✅ Show typing indicator
setTimeout(() => {
const typingIndicator = document.querySelector(".typing-indicator");
if (typingIndicator) typingIndicator.remove(); // ✅ Remove typing indicator BEFORE bot message
addMessage("Sure! Here are a few additional tips for flying drones:<br><br>1. Always check the weather: Make sure you're flying in calm weather to avoid strong winds or rain.<br>2. Use GPS: Many drones have GPS features to help you maintain control and stability.<br>3. Keep the drone in range: Be aware of your drone’s range to avoid losing connection.<br>4. Practice emergency maneuvers: Know how to safely land or return the drone in case of an emergency.<br>5. Monitor battery life: Always keep an eye on battery levels to avoid mid-flight power loss.<br><br>Hope this helps! Let me know if you need anything else.", "bot-message", true); // ✅ Bot message appears correctly
lastBotResponse = "Here's a quick guide on how to fly a drone:<br><br>1. Understand the Drone Basics:<br>- Drones typically have four main components: the drone body, propellers, battery, and controller.<br>- Learn the basic controls: throttle (up/down), yaw (rotate left/right), pitch (tilt forward/backward), and roll (tilt left/right).<br><br>2. Pre-Flight Preparation:<br>- Check the battery: Make sure the drone and the remote control are fully charged.<br>- Inspect the drone: Ensure propellers are securely attached and in good condition, and that the drone is free from any obstructions.<br>- Find a safe area: Look for an open space free from people, buildings, or trees. This will reduce the risk of accidents.<br><br>3. Get Familiar with the Controller:<br>- Left stick (Throttle + Yaw): Controls altitude and turns the drone left or right.<br>- Right stick (Pitch + Roll): Controls forward/backward movement and side-to-side motion.<br>- Trim controls: Some controllers have trim buttons to help adjust flight stability (like correcting drift).<br><br>4. Takeoff:<br>- Gradually increase throttle: Slowly push the throttle stick upwards to lift the drone off the ground. Don’t rush it! Ensure the drone lifts steadily and maintains a steady altitude.<br><br>5. Basic Maneuvers:<br>- Flying forward/backward: Push the right stick forward to fly the drone forward and pull it back to fly backward.<br>- Turning: Rotate the left stick left or right to turn the drone in either direction.<br>- Hovering: To hover in one place, make small adjustments with the throttle and trim controls until the drone remains stationary.<br><br>6. Landing:<br>- Descend slowly: Reduce throttle slowly to bring the drone back down gently. Avoid making sudden movements to ensure a smooth landing.<br>- Land on a flat surface: Make sure the area is clear of obstacles and land carefully.<br><br>7. Practice:<br>- If you're a beginner, practice in a large, open space without many obstacles.<br>- Start with simple tasks like hovering and moving in a straight line before advancing to more complex maneuvers.<br><br>8. Drone Safety Tips:<br>- Follow local regulations: Make sure you’re aware of and follow local drone flying laws and airspace restrictions.<br>- Keep the drone in line of sight: Always maintain visual contact with your drone to avoid losing control.<br>- Respect others: Be considerate of people and wildlife, and avoid flying near crowds or sensitive areas.<br><br>9. Use a Flight Simulator (Optional):<br>- If you're new to flying, consider practicing with a drone flight simulator before taking the drone into the air. This can help you get used to the controls and movements.<br><br>Would you like more details or tips on flying drones?<br><br><img src='https://nofilmschool.com/media-library/dji-air-3-flying-in-the-sky.webp?id=34663814&width=1245&height=700&quality=90&coordinates=53%2C0%2C53%2C0' width='200'>"; // Updated last bot response
}, 1000); // ⏳ Delay bot response for realism
return;
}
let combinedMessage = "";
if (attachedFileData) {
combinedMessage = `<div style="display: flex; flex-direction: column; align-items: flex-start;">` +
`<img src="${attachedFileData}" alt="Attached Image" style="max-width:150px; margin-bottom:10px;">` +
(userMessage ? `<div style="width:100%; text-align:right; margin-top:5px;">${userMessage}</div>` : "") +
`</div>`;
} else {
combinedMessage = userMessage;
}
if (combinedMessage) {
addMessage(combinedMessage, "user-message");
chatInput.value = "";
attachedFileData = null;
attachedFileName = null;
attachedFilePreview.innerHTML = "";
botTyping();
setTimeout(() => {
if (combinedMessage.includes("<img")) {
const img = new Image();
img.src = combinedMessage.match(/src="([^"]+)"/)[1];
img.onload = function() {
let guess = guessFromFilename(attachedFileName || "unknown");
guess += " " + guessFromColor(img);
addMessage(guess, "bot-message", true);
};
} else {
const botReply = generateBotResponse(userMessage, detectLanguage(userMessage));

if (typeof botReply === "object" && botReply !== null && "text" in botReply) {
  addMessage(botReply.text, "bot-message", true, botReply.isUnknown === true);
  lastBotResponse = botReply.text;

  // 🧼 Prepare clean speech version (strip buttons only from spoken part)
  if (shouldSpeak) {
    const clone = document.createElement('div');
    clone.innerHTML = botReply.text;
    clone.querySelectorAll('button').forEach(b => b.remove());
    const cleanText = clone.innerText.trim();
    speakText(cleanText, currentLang);
  }

} else {
  addMessage(botReply, "bot-message", true); // regular bot message
  lastBotResponse = botReply;

  if (shouldSpeak) {
    speakText(botReply, currentLang);
  }
}
}
}, 1500);
}
});
chatInput.addEventListener("keydown", (event) => { if (event.key === "Enter") sendButton.click(); });
uploadButton.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", function(event) {
const file = event.target.files[0];
if (!file) return;
attachedFileName = file.name;
attachedFilePreview.innerHTML = `<div class="upload-spinner"></div>`;
const reader = new FileReader();
reader.onload = function(e) {
attachedFileData = e.target.result;
attachedFilePreview.innerHTML = `<img src="${attachedFileData}" alt="Preview">`;
};
reader.readAsDataURL(file);
});

// ----------------------------
// Call Mode (Voice Conversation) Functions
// ----------------------------
// Play a beep sound; used for both connecting and ending the call.
const playBeep = (duration = 1000, frequency = 440, volume = 0.5, type = "sine", callback) => {
let AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();
let oscillator = context.createOscillator();
let gainNode = context.createGain();
oscillator.connect(gainNode);
gainNode.connect(context.destination);
gainNode.gain.value = volume;
oscillator.frequency.value = frequency;
oscillator.type = type;
oscillator.start();
setTimeout(() => {
oscillator.stop();
if (callback) callback();
}, duration);
};

// Use a timeout (now set to 1 second) to wait for a pause before processing the transcript.
const processTranscript = (transcript) => {
finalTranscript = "";
recognition.stop();
callStatus.innerText = "User speaking...";
let responseLang;
// If the selected language is Cantonese, force zh-HK.
if (callLanguage === "zh-HK") {
responseLang = "zh-HK";
} else if (/[\u4e00-\u9fff]/.test(transcript)) {
// For other Chinese, force zh-HK.
responseLang = "zh-HK";
} else {
responseLang = callLanguage;
}
setTimeout(() => {
const botResponse = generateBotResponse(transcript, responseLang);
callStatus.innerText = "Robot speaking...";
speakText(botResponse, responseLang, () => {
callStatus.innerText = "Listening...";
if (callMode) recognition.start();
});
}, 1500);
};

// Start speech recognition in call mode with extended listening (1 second pause).
const startSpeechRecognition = () => {
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
alert("Speech Recognition is not supported in your browser.");
return;
}
recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = callLanguage;
finalTranscript = "";
recognition.onresult = (event) => {
if (transcriptTimeout) clearTimeout(transcriptTimeout);
for (let i = event.resultIndex; i < event.results.length; i++) {
if (event.results[i].isFinal) {
finalTranscript += event.results[i][0].transcript;
}
}
transcriptTimeout = setTimeout(() => {
if (finalTranscript.trim() !== "") {
processTranscript(finalTranscript);
} else {
callStatus.innerText = "Listening...";
if (callMode) recognition.start();
}
}, 1000); // 1 second pause before processing
callStatus.innerText = "User speaking...";
};
recognition.onerror = (event) => {
console.error("Speech recognition error", event.error);
callStatus.innerText = "Error: " + event.error;
};
recognition.onend = () => { /* Controlled restart after processing */ };
recognition.start();
callStatus.innerText = "Listening...";
};

// Start call mode.
const startCallMode = () => {
callMode = true;
chatFooter.style.display = "none";
chatMessages.style.display = "none";
callOverlay.style.display = "flex";
callStatus.innerText = "Connecting...";

// Start the stopwatch immediately when the call begins
startStopwatch();

playBeep(1000, 440, 0.5, "sine", () => {
startSpeechRecognition();
});
};
// Stop call mode and play a short beep (500ms) on end.
const stopCallMode = () => {
callMode = false;

if (recognition) {
recognition.stop();
}

// Stop the stopwatch
stopStopwatch();

// Stop any ongoing speech by the bot
window.speechSynthesis.cancel();

callOverlay.style.display = "none";
chatMessages.style.display = "flex";
chatFooter.style.display = "flex";

playBeep(500, 660, 0.5, "sine", () => {
addMessage("Call ended.", "bot-message", true);
});
};
// Toggle call mode when clicking the call button.
callButton.addEventListener("click", () => {
if (!callMode) {
startCallMode();
callButton.innerText = "Call";
}
});
// End Call button stops call mode.
endCallButton.addEventListener("click", () => {
stopCallMode();
callButton.innerText = "Call";
});// ----------------------------
// Image Analysis Functions
// ----------------------------
function guessFromFilename(filename) {
const words = filename.toLowerCase().split(/[\s_-]+/);
const knownObjects = ["bird", "cat", "dog", "car", "tree", "flower", "sunset", "food", "sky", "ocean", "mountain", "river", "lake", "butterfly", "fish", "moon", "stars", "forest", "desert"];
for (let word of words) {
if (knownObjects.includes(word)) {
return `This might be a picture of a ${word}.`;
}
}
return "";
}

function guessFromColor(img) {
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 50;
canvas.height = 50;
ctx.drawImage(img, 0, 0, 50, 50);
const imageData = ctx.getImageData(0, 0, 50, 50).data;
let r = 0, g = 0, b = 0, count = 0;
let redPixels = 0, whitePixels = 0, bluePixels = 0, yellowPixels = 0;
for (let i = 0; i < imageData.length; i += 4) {
let red = imageData[i];
let green = imageData[i + 1];
let blue = imageData[i + 2];
r += red;
g += green;
b += blue;
count++;

if (red > 150 && green < 100 && blue < 100) redPixels++;
if (red > 200 && green > 200 && blue > 200) whitePixels++;
if (blue > 150 && red < 100 && green < 100) bluePixels++;
if (red > 200 && green > 150 && blue < 100) yellowPixels++;
}
r = Math.floor(r / count);
g = Math.floor(g / count);
b = Math.floor(b / count);

return recognizeFlag(r, g, b, redPixels, whitePixels, bluePixels, yellowPixels) || describeColor(r, g, b);
}

function recognizeFlag(r, g, b, redPixels, whitePixels, bluePixels, yellowPixels) {
// USA Flag: Red, White, Blue
if (redPixels > 30 && whitePixels > 30 && bluePixels > 10) {
return "This image appears to be the flag of the USA.";
}
// Canada Flag: Predominantly Red and White
if (redPixels > 50 && whitePixels > 40 && bluePixels < 10) {
return "This image appears to be the flag of Canada.";
}
// China Flag: Predominantly Red with some Yellow
if (redPixels > 70 && yellowPixels > 5) {
return "This image appears to be the flag of China.";
}
// Japan Flag: Mostly White with a Red Center
if (whitePixels > 80 && redPixels > 10 && bluePixels < 5) {
return "This image appears to be the flag of Japan.";
}
// North Korea Flag: Red, Blue, and White
if (redPixels > 40 && bluePixels > 20 && whitePixels > 10) {
return "This image appears to be the flag of North Korea.";
}

return null;
}

function describeColor(r, g, b) {
if (r > 220 && g > 220 && b > 220) return "This image appears to be an image of snow or a bright object.";
if (r < 50 && g < 50 && b < 50) return "This image seems to depict a night scene.";
if (r > 150 && g < 100 && b < 100) return "This image appears to capture a sunset or sunrise.";
if (g > 150 && r < 100 && b < 100) return "This image likely showcases nature.";
if (b > 150 && r < 100 && g < 100) return "This image likely depicts the ocean or a blue sky.";
if (r > 200 && g > 200 && b < 100) return "This image seems to feature a beach.";
if (r > 150 && g > 150 && b > 150) return "This image likely portrays a scenic landscape.";
return "<span style='color: red;'>⚠️ Oops! An unexpected error has occurred. Please try again later.</span>";
}


// ===== Original script block 2 =====

// --- Beep Sound Generator using Web Audio API ---
let beepInterval;
let audioCtx;

function startBeeping() {
// Create an AudioContext (or reuse one if already created)
audioCtx = new (window.AudioContext || window.webkitAudioContext)();
beepInterval = setInterval(() => {
let oscillator = audioCtx.createOscillator();
let gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
// Randomize frequency for multiple tones (between 700Hz and 1100Hz)
oscillator.frequency.value = 700 + Math.random() * 400;
oscillator.type = 'sine';
oscillator.start();
// Stop the oscillator after 150ms
setTimeout(() => {
oscillator.stop();
}, 150);
}, 300); // Generate a beep every 300ms
}

function stopBeeping() {
clearInterval(beepInterval);
if (audioCtx) {
audioCtx.close();
audioCtx = null;
}
}
// Feedback Button inside Info Page to Open Feedback Form
document.getElementById('feedbackButtonInsideInfo').addEventListener('click', function() {
// Hide chat messages and input field but keep chatbot container visible
document.getElementById('chatMessages').style.display = 'none';
document.getElementById('chatFooter').style.display = 'none';
document.getElementById('infoPage').style.display = 'none'; // Hide the info page if it is open

// Show the feedback form inside chatbot
document.getElementById('feedbackPage').style.display = 'block';
});

// Close Feedback Form and Show Chat Again
document.getElementById('closeFeedback').addEventListener('click', function() {
// Show chat messages and input field again
document.getElementById('chatMessages').style.display = 'block';
document.getElementById('chatFooter').style.display = 'block';
document.getElementById('infoPage').style.display = 'block'; // Show info page if needed

// Hide the feedback form
document.getElementById('feedbackPage').style.display = 'none';
});
function triggerIncomingCall() {
// Get the incoming call popup element
var popup = document.getElementById("incomingCallPopup");
if (!popup) {
console.error("Incoming call popup element not found!");
return;
}
// Display the popup
popup.style.display = "block";
// Start the beeping sound (using our Web Audio API based beeper)
startBeeping();
// Set up the Accept button handler
document.getElementById("acceptCall").onclick = function() {
// Stop the beeping sound
stopBeeping();
// Hide the incoming call popup
popup.style.display = "none";
// Show the call overlay (the call page)
var callOverlay = document.getElementById("callOverlay");
if (callOverlay) {
callOverlay.style.display = "flex"; // or "block", depending on your layout
}
// Set call mode to true (for voice call)
callMode = true;
// Initialize and start speech recognition if not already created
if (!recognition) {
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
recognition = new SpeechRecognition();
recognition.lang = callLanguage; // Use selected language
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = function(event) {
// Get the last recognized result
var transcript = event.results[event.results.length - 1][0].transcript;
// Add the recognized text as a user message
addMessage(transcript, "user-message");
// Optionally, you can process the transcript further:
// processUserMessage(transcript);
};
recognition.onerror = function(event) {
console.error("Speech recognition error:", event);
};
} else {
console.error("Speech recognition is not supported in this browser.");
}
}
try {
recognition.start();
} catch (e) {
console.error("Error starting speech recognition:", e);
}
// Update the call overlay's status text to "Listening..."
var callStatus = document.getElementById("callStatus");
if (callStatus) {
callStatus.textContent = "Listening...";
startStopwatch(); 
}
};
// Set up the Decline button handler
document.getElementById("declineCall").onclick = function() {
stopBeeping();
popup.style.display = "none";
// Optionally, display a "Call declined" message in the chat
addMessage("<em>Call declined.</em>", "bot-message");
};
}
// Global variables for the stopwatch
let callStartTime;
let stopwatchInterval;

// Start the stopwatch when the call begins
function startStopwatch() {
clearInterval(stopwatchInterval); // <-- Stop any existing stopwatch first
callStartTime = new Date();
// Reset stopwatch display immediately
document.getElementById("stopwatch").textContent = "00:00"; 

// Start a new stopwatch interval
stopwatchInterval = setInterval(updateStopwatch, 1000);
}
// Update the stopwatch display
function updateStopwatch() {
const now = new Date();
const diff = now - callStartTime;
const totalSeconds = Math.floor(diff / 1000);
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
document.getElementById("stopwatch").textContent =
(minutes < 10 ? "0" + minutes : minutes) + ":" +
(seconds < 10 ? "0" + seconds : seconds);
}

function stopStopwatch() {
clearInterval(stopwatchInterval);
const now = new Date();
const diff = now - callStartTime;
const totalSeconds = Math.floor(diff / 1000);
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
const durationText = 
"Call ended. Duration: " +
(minutes < 10 ? "0" + minutes : minutes) + ":" +
(seconds < 10 ? "0" + seconds : seconds);
document.getElementById("callStatus").textContent = durationText; // <-- FIXED: This now updates correctly
}
// ───── Helper: Show the report overlay ─────
function showReportOverlay() {
  document.getElementById('reportOverlay').style.display = 'block';
}

// ───── Helper: Hide (close) the report overlay ─────
function closeReportOverlay() {
  document.getElementById('reportOverlay').style.display = 'none';
}

// ───── Wire up the “×” button inside the overlay ─────
document
  .getElementById('closeReport')
  .addEventListener('click', closeReportOverlay);
document.getElementById("whatsNewLink").addEventListener("click", function () {
  const overlay = document.getElementById("whatsNewOverlay");
  const content = document.getElementById("whatsNewContent");

  overlay.style.display = "flex";

  fetch("https://docs.google.com/document/d/e/2PACX-1vRmOGmaeYII4nJoylmbKMU6IALsVvbgyWphm-y2YEQTiFiOFSGqKzzP740THpnMD3yIBEXKpTgZMkr9/pub?embedded=true")
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Remove Google's outer wrapping, grab just the body content
      const article = doc.querySelector(".doc-content") || doc.body;
      content.innerHTML = article.innerHTML;
    })
.catch(err => {
  content.innerHTML = `
    <h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #2c2c2c;">What's New in Version 6.7</h2>

    <p id="whatsNewContent" style="font-family: Arial, sans-serif; font-size: 16px; color: #444; line-height: 1.6; margin: 20px 0;">
      <strong style="color: #0056a1;">✅ Knowledge Expansion</strong><br><br>
      • More knowledge added to the chatbot<br><br> 
      <strong style="color: #0056a1;">✅ Fixed Known Issues</strong><br><br>
      • Fixed known issues with reading text aloud<br><br>
      <strong style="color: #0056a1;">✅ Improved Layout</strong><br><br>
      •  New format for What’s New Page<br><br>
      • Improved look for message bubbles<br><br>
• Improved chatbot icon<br><br>
      <strong style="color: #0056a1;">🆕 New Functions Added</strong><br><br>
      • Users can now report chatbot knowledge issues when chatbot does not understand user messages
    </p>

    <p style="text-align: center; font-size: 13px; color: gray;">
      This is an offline version of the What’s New Page. Information may not be current.
    </p>
  `;
  console.error("Error loading What's New:", err);
});
});

document.getElementById("closeWhatsNewBtn").addEventListener("click", function () {
  document.getElementById("whatsNewOverlay").style.display = "none";
});
function openSignupForm() {
  const newTab = window.open();
  if (!newTab) return alert("Pop-up blocked. Please allow pop-ups for this site.");

  newTab.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Chatbot Sign-Up</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: Arial, sans-serif;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWzqFVGFKLD0bEp75iDXEa0Ysb39C9sg2xj_lE9EfDvOJ5GA/viewform?usp=header?embedded=true"></iframe>
    </body>
    </html>
  `);
}
function openFeedbackForm() {
  const newTab = window.open();
  if (!newTab) return alert("Pop-up blocked. Please allow pop-ups for this site.");

  newTab.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Chatbot Feedback</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: Arial, sans-serif;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZ-iwBxOO9jGoM-hKamTa0lMxCCk6BZLt-qBHe-VJyXrD9DQ/viewform?usp=header?embedded=true"></iframe>
    </body>
    </html>
  `);
}


