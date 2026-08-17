// Chatbot Version 7 knowledge — mandarin / travel
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 1065, language: "mandarin", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("葉門") &&
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
  return undefined;
}});
