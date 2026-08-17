// Chatbot Version 7 knowledge — mandarin / geography
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 229, language: "mandarin", category: "geography", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 235, language: "mandarin", category: "geography", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 1046, language: "mandarin", category: "geography", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("厄瓜多尔") && !lowerMessage.includes("首都")) {
  return "厄瓜多尔是南美洲的一个多样化国家，以其丰富的文化遗产和壮丽的自然景观而闻名。它北邻哥伦比亚，东南接秘鲁，西濒太平洋。厄瓜多尔拥有亚马逊雨林、安第斯山脉以及加拉帕戈斯群岛——一个因其独特的野生动植物而闻名的联合国教科文组织世界遗产地。首都是基多，这是一座坐落在安第斯山脉的殖民风格城市，而最大的城市和主要港口是瓜亚基尔。厄瓜多尔拥有多种生态系统，是大自然爱好者和观鸟者的热门目的地。<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMoH3J9B6uP-ZYw32A2Cdxs80p9wcQWhGH31Z20d1K1TyTgXb50KNnUuBySo_l-_iq8e1Zy9LjPTGgoD18_tya6yFWmRzLBC6hYhsakiBFNx-mjG03l_ElUOpel5KhV0sIuuS8T0tEuCHO7HavSD7PzKw=w2481-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://www.mashpilodge.com/wp-content/uploads/2023/09/Waterfall-San-Vincente.webp' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN3MWz1rjLyFaIfrb7Z8GSIFxRQU_Z05Nb3UfDDiRB1PTVjcSUSKoXda2ubY5POiRSOgpc5m3NKf1ECq7XFJ7Kg-ZeG-wf-Csuhm_CF5iKkjgyrVcOGPHm7-FLkcoc_YsfIYhH9GWLiAzqO6jIoJnGqUQ=w2475-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOlHgRuS-VrU_Kb-G9JNT_J5V3jUevH60IntZoFFq3aJbcHkE_4n1SiTgXsosEkfWGBAkS3MiaQYJMWdgL7l4g_IFkXYlvBTMxLw2WdpN1szv4qFbQMlQ-qpOJTEakyk7K9eJAYlXN_Vh4klbDb9DpB6A=w2481-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczPt0m1PWKvL0gIoIobFV3EgJXsrtgvYcdR6JMXZ6ynvF1uH9ez3Xy9bbMkklMFYnWe0M7Gssl3B67jECDLiofXXrbDMvrge_czqXPMKsfTKMa_Eh4Os38nfSaKeTJ46U0tweLmFNRhhXvZLvMeoxJqq1g=w2478-h1653-s-no-gm?authuser=0' alt='厄瓜多尔' width='200'><br><br><img src='https://ecuadorverdepais.com/wp-content/uploads/2022/12/quilotoa-lake.jpg' alt='厄瓜多尔' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1069, language: "mandarin", category: "geography", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});
