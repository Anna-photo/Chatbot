// Chatbot Version 7 knowledge — english / geography
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'english', category: 'geography', run: function(lowerMessage, userMessage, lang) {
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
  else if (lowerMessage.includes("i") && lowerMessage.includes("ate") && lowerMessage.includes("poison ivy")) {
        return "🚨 <b>Urgent: Seek medical help immediately</b> 🚨\n\n<br><br>" +
               "Poison ivy contains <b>urushiol</b>, which can cause <b>severe allergic reactions</b> when ingested. Here’s what you should do <b>right now</b>:\n\n<br><br>" +
               "🔹 <b>Do not induce vomiting</b> unless instructed by a doctor.\n<br><br>" +
               "🔹 <b>Rinse your mouth</b> thoroughly with cold water.\n<br><br>" +
               "🔹 <b>Drink plenty of fluids</b> (like milk or water) to help dilute the toxin.\n<br><br>" +
               "🔹 <b>Monitor for symptoms</b> like swelling of the throat, trouble breathing, nausea, vomiting, or severe stomach pain.\n<br><br>" +
               "🔹 <b>Call Poison Control immediately</b> (U.S.: 1-800-222-1222) or your local emergency number.\n\n<br><br>" +
               "⚠️ <b>If you experience difficulty breathing, swelling, or severe pain, go to the emergency room immediately!</b> ⚠️<br><br>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("swallow") && lowerMessage.includes("poison ivy")) {
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
  else if (lowerMessage.includes("i am king") || lowerMessage.includes("i am the king")|| lowerMessage.includes("i am a king")|| lowerMessage.includes("i’m the king")|| lowerMessage.includes("i’m a king")|| lowerMessage.includes("i’m king")|| lowerMessage.includes("im the king")|| lowerMessage.includes("im a king")|| lowerMessage.includes("im king")) {
      return "Wow! You’re a king? What country are you king of?";
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
  else if (lowerMessage.includes("taiwan") &&lowerMessage.includes("part") && lowerMessage.includes("china")) {
      return "Taiwan has its own government, military, and economy. However, the People’s Republic of China claims that Taiwan is one of its provinces and wants Taiwan to be reunified with the mainland. Despite China’s claims, Taiwan functions as an independent country. ";
    }
  else if (lowerMessage.includes("taiwan") &&lowerMessage.includes("belong") && lowerMessage.includes("china")) {
      return "Taiwan has its own government, military, and economy. However, the People’s Republic of China claims that Taiwan is one of its provinces and wants Taiwan to be reunified with the mainland. Despite China’s claims, Taiwan functions as an independent country. ";
    }
    // 感謝 (Thank you in Japanese)
  else if (lowerMessage.includes("i") && lowerMessage.includes("cross")&& lowerMessage.includes("saudi")&& lowerMessage.includes("border")&& lowerMessage.includes("pork"))   {
    return `That is not allowed. Make sure you declare and discard the pork before entering the country. If not, you could face serious fines. Let me know if you need any more advice.`;
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("bring")&& lowerMessage.includes("saudi")&& lowerMessage.includes("pork"))   {
    return `That is not allowed. Make sure you declare and discard the pork before entering the country. If not, you could face serious fines. Let me know if you need any more advice.`;
    }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("mexico")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/mx.png' alt='Mexico Flag' style='width: 40px; margin-right: 10px;'>" +
               "Himno Nacional Mexicano</h2>" +
               "<i>Mexicanos, al grito de guerra<br>" +
               "El acero aprestad y el bridón,<br>" +
               "Y los bravos a la batalla<br>" +
               "¡Viva México!</i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("malaysia")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/my.png' alt='Malaysia Flag' style='width: 40px; margin-right: 10px;'>" +
               "Negaraku</h2>" +
               "<i>Negaraku, tanah tumpahnya darahku<br>" +
               "Rakyat hidup, bersatu dan maju<br>" +
               "Rahmat bahagia, Tuhan kurniakan<br>" +
               "Raja kita, selamat bertakhta<br></i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("brunei")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/bn.png' alt='Brunei Flag' style='width: 40px; margin-right: 10px;'>" +
               "Allah Peliharakan Sultan</h2>" +
               "<i>Ya Allah, Peliharakan Sultan<br>" +
               "Keamanan negara dan rakyatnya</i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("turkmenistan")) {
        return "<h2 style='display: flex; align-items: center; justify-content: center;'>" +
               "<img src='https://flagpedia.net/data/flags/h80/tm.png' alt='Turkmenistan Flag' style='width: 40px; margin-right: 10px;'>" +
               "Türkmeniň Döwlet Gimnasy</h2>" +
               "<i>Türkmenistan, mähriban Watanym<br>" +
               "Bize soňa gelip, gabat ediniz.<br></i>";
      }
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("philippines") && lowerMessage.includes("english")) {
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
  else if (lowerMessage.includes("anthem") && lowerMessage.includes("philippines")) {
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
  else if (lowerMessage.includes("lupang hinirang")) {
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
  else if (lowerMessage.includes("you") && lowerMessage.includes("like") && lowerMessage.includes("treasure island")) {
    return "Treasure Island, a book written by Robert Louis Stevenson, is not my favorite book.";
    }
  else if (lowerMessage.includes("best") && lowerMessage.includes("world") && lowerMessage.includes("div")) {
    return "The world’s best diving is often said to be in the Coral Triangle, particularly around the Raja Ampat islands of Indonesia.";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("m")&& lowerMessage.includes("dictator")) {
    return "A dictator? Are you a leader of a country?";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("every country") && lowerMessage.includes("world")) {
    return "Wow! That sounds exciting! Do you need any tips?";
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
  else if (lowerMessage.includes("nikon")) {
    return `Nikon is a renowned Japanese brand known for its high-quality cameras, lenses, and imaging technology, offering exceptional performance for both professional photographers and hobbyists. <br><br>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nikon_Logo.svg/1200px-Nikon_Logo.svg.png' width='200'>`;
    }
  else if (lowerMessage.includes("search web") || lowerMessage.includes("search the web") || lowerMessage.includes("search online") || lowerMessage.includes("search the internet") || lowerMessage.includes("browse online") || lowerMessage.includes("browse the internet")|| lowerMessage.includes("browse the web")) {
    return `I am currently unable to search the web. Please try again after a future update.`;
    }
  else if (lowerMessage.includes("mountain view")&& lowerMessage.includes("california")) {
    return "Mountain View, California, is known for being the home of major tech companies including Google, Mozilla, and LinkedIn.";
    }
  else if (lowerMessage.includes("mountain view")&& lowerMessage.includes("ca")) {
    return "Mountain View, California, is known for being the home of major tech companies including Google, Mozilla, and LinkedIn.";
    }
  else if (lowerMessage.includes("mountain view")) {
    return "Could you please clarify what ‘mountain view’ you are referring to?";
    }
  else if (lowerMessage.includes("ishigaki") || lowerMessage.includes("石垣")) {
    return "Ishigaki (石垣) is a picturesque island in Okinawa Prefecture, Japan. Known for its turquoise waters, pristine beaches, and vibrant coral reefs, it is a paradise for snorkeling, diving, and nature enthusiasts. Ishigaki is also home to Mount Omoto, Okinawa's highest peak, and Kabira Bay, renowned for its stunning views and glass-bottom boat tours. Visitors can explore the island's rich Ryukyu culture, taste local specialties like Ishigaki beef, and enjoy its laid-back atmosphere. It serves as a gateway to the Yaeyama Islands, offering a blend of adventure and relaxation.<br><br><img src='https://content.r9cdn.net/rimg/dimg/05/3e/9e058bd3-city-44428-150375c861f.jpg?width=1366&height=768&xhint=802&yhint=1020&crop=true' alt='Ishigaki' width='200'>";
    }
  else if (lowerMessage.includes("little house")) {
      return " Little House on the Prairie is a book by Laura Ingalls Wilder, published in 1935. It is part of the Little House series, which is a semi-autobiographical account of Wilder’s childhood growing up in a pioneer family during the late 19th century. The book follows the Ingalls family as they leave the Big Woods of Wisconsin and move to the Kansas prairie, where they build a new home, face challenges, and interact with Native Americans and other settlers.<br><br><img src='https://m.media-amazon.com/images/I/91nrw4oWvUL.jpg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("m") && lowerMessage.includes("no sleep") && lowerMessage.includes("man")) {
      return `Are you the No Sleep Man? Do you mean Thai Ngoc? He is a farmer in Vietnam who claims he hasn’t slept in more than sixty years. Just in case you can’t read that English: Bạn có phải là Người đàn ông không ngủ không? Ý bạn là Thái Ngọc? Ông ấy là một người nông dân ở Việt Nam, người tuyên bố rằng ông đã không ngủ trong hơn sáu mươi năm.`;
    }
  else if (lowerMessage.includes("no sleep man")) {
      return `The No Sleep Man, Thai Ngoc, is a farmer in rural Vietnam who claims he has not slept for more than sixty years. Have you met him before?`;
    }
  else if (lowerMessage.includes("japan") && lowerMessage.includes("capital")) {
    return "The capital of Japan is Tokyo.";
    }
  else if (lowerMessage.includes("australia") && lowerMessage.includes("capital")) {
    return "The capital of Australia is Canberra.";
    }
  else if (lowerMessage.includes("selamat tinggal")) {
        return "Selamat tinggal! Kembali kapan saja kamu suka!";
    }
    // For Japanese
  else if (lowerMessage.includes("burj khalifa")) {
    return "The Burj Khalifa in Dubai is the tallest building in the world, standing at a staggering 828 meters (2,717 feet). It has 163 floors and was completed in 2010. The design was inspired by the shape of the Hymenocallis flower, and it incorporates elements of Islamic architecture. The Burj Khalifa is a major landmark and tourist attraction, offering breathtaking views of the city from its observation decks on the 124th, 125th, and 148th floors. <br><br><img src='https://adventuresofagoodman.com/wp-content/uploads/2017/05/Burj-Khalifa-Fountain-Show-Dubai-Mall-UAE-Greg_Goodman-AdventuresofaGoodMan-11-Edit.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://thumbs.dreamstime.com/b/skyline-downtown-dubai-burj-khalifa-27136580.jpg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("canada")) {
    return "Canada is a vast North American country known for its natural beauty, including the Rocky Mountains, national parks, and beautiful coastlines. It is the second-largest country in the world by area. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/ca.svg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("brazil")) {
    return "Brazil is the largest country in South America, famous for its Amazon rainforest, vibrant Carnival celebrations, and football culture. It is known for its rich biodiversity. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/br.svg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("president") && lowerMessage.includes("united states") && lowerMessage.includes("current")) {
        const currentDate = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
        return `As of ${currentDate}, the President of the United States is Donald J. Trump. He began his second term on January 20, 2025, after winning the 2024 election. During his first term, he focused on tax reform, deregulation, and "America First" policies. In his second term, President Trump continues to prioritize economic growth, national security, and international diplomacy.`;
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
  else if (lowerMessage.includes("somalia") && lowerMessage.includes("capital")) {
    return "The capital of Somalia is Mogadishu.";
    }
  else if (lowerMessage.includes("matthew 5:14-16") || lowerMessage.includes("matthew five fourteen sixteen") || lowerMessage.includes("matthew 5 14 16")) {
      return "Matthew 5:14-16 - You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.";
    }
  else if (lowerMessage.includes("luke 24:49") || lowerMessage.includes("luke twenty four forty nine") || lowerMessage.includes("luke 24 49")) {
      return "Luke 24:49 - And behold, I am sending the promise of my Father upon you. But stay in the city until you are clothed with power from on high.";
    }
  else if (lowerMessage.includes("luke 2:11") || lowerMessage.includes("luke two eleven") || lowerMessage.includes("luke 2 11")) {
      return "Luke 2:11 - For unto you is born this day in the city of David a Savior, who is Christ the Lord.";
    }
  else if (lowerMessage.includes("hebrews 12:1-2") || lowerMessage.includes("hebrews twelve one two") || lowerMessage.includes("hebrews 12 1 2")) {
      return "Hebrews 12:1-2 - Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.";
    }
  else if (lowerMessage.includes("what") && lowerMessage.includes("about")&& lowerMessage.includes("socotra")) {
    return "Socotra, while technically part of Yemen, is generally very safe for tourists. Due to its isolation from the mainland, Socotra has been completely spared from the ongoing civil war on the mainland. Socotra is renowned for its otherworldly landscapes and unique biodiversity, including the iconic Dragon’s Blood Tree. Recognized as a UNESCO World Heritage Site, Socotra is a haven for endemic flora and fauna, offering breathtaking natural beauty and a rich cultural heritage shaped by its isolation. It is often referred to as the Garden of Eden or The Last Paradise on Earth.<br><br><img src='https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5326-hdr-pano-32oo.jpg' alt='Socotra' width='200'>";
    }
  else if (lowerMessage.includes("taiwan")) {
    return "Taiwan is an island in East Asia, near China. The capital city is Taipei. People in Taiwan speak Mandarin Chinese. It is a modern and safe country with great food, busy night markets, and beautiful nature like mountains and beaches. Taiwan is also famous for its technology and factories that make computer chips. The culture is a mix of Chinese, Japanese, and native traditions. People in Taiwan are very friendly and helpful to visitors. <br><br><img src='https://adventuresofagoodman.com/wp-content/uploads/2013/04/Chiang_Kai-Shek_Memorial_Hole-Blue-Hour-National_Taiwan_Democracy_Memorial_Hall-Taipei-Greg_Goodman-AdventuresofaGoodMan-1-1.jpg' width='200'><br><br><img src='https://www.wendywutours.com/resource/upload/1804/banner-treasures-of-taiwan.jpg' width='200'><br><br><img src='https://namastetonihao.com/wp-content/uploads/2024/06/elephant-mountain-taipei.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYzsuSe8cAXpkHXjTcnurXetBohvCluu9wA&s' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1200px-Flag_of_the_Republic_of_China.svg.png' width='200'>";
    }
  else if (lowerMessage.includes("mexico")) {
    return "Mexico is a country in North America, known for its rich culture, delicious cuisine, and ancient ruins like those at Chichen Itza. It has a diverse landscape, from deserts to beaches. <br><br><img src='https://lp-cms-production.imgix.net/2024-10/629387256.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' width='200'>";
    }
  else if (lowerMessage.includes("spain")) {
    return "Spain is a country in Southern Europe, known for its lively culture, beautiful architecture, and iconic landmarks like La Sagrada Familia and the Alhambra. <br><br><img src='https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/05/660fcca1de7c9facb6b1d36721aecf9a.jpg' width='200'>";
    }
  else if (lowerMessage.includes("ecuador") && lowerMessage.includes("capital")) {
    return "The capital of Ecuador is Quito. <br><br><img src='https://www.journeylatinamerica.com/app/uploads/destinations/ecuador/quito/ecu_quito_istock-1440x961-c-center.jpg' width='200'>";
    }
  else if (lowerMessage.includes("calculate") || lowerMessage.includes("math")) {
    return handleMath(userMessage);
    }
    // Country Flag Request
  else if (lowerMessage.includes("flag of")) {
    const countryName = userMessage.replace("flag of", "").trim();
    return getCountryFlag(countryName);
    }
  return undefined;
}});
