// Chatbot Version 7 knowledge — english / jokes
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 219, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 368, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("what") && lowerMessage.includes("if")) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 383, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 438, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("my") && lowerMessage.includes("pig")&& lowerMessage.includes("timbuktu")) {
  return "I understand now. Your pig’s name is Timbuktu! What a creative name! Timbuktu is a historic city located in the West African nation of Mali on the edge of the Sahara Desert near the Niger River. Once a prominent center of trade, culture, and education, it holds a significant place in both African and world history. How did you decide to name your pig Timbuktu?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 439, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("timbuktu") && lowerMessage.includes("a")&& lowerMessage.includes("pig")) {
  return "A pig? I don’t think so, Timbuktu is a historic city located in the West African nation of Mali, situated on the edge of the Sahara Desert near the Niger River. Once a prominent center of trade, culture, and education, it holds a significant place in both African and world history.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 447, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("naglalakbay ako") || lowerMessage.includes("nasa biyahe ako") || lowerMessage.includes("naglalakbay ako ngayon") || lowerMessage.includes("pupunta ako sa ibang lugar")) {
  const responses = [
  "Magandang paglalakbay! 🌍✈️ Sabihin mo lang kung kailangan mo ng tulong sa iyong biyahe. 😊",
  "Mukhang exciting! Mag-ingat ka at magsaya sa iyong paglalakbay! 🧳🌟",
  "Mag-enjoy sa iyong biyahe! Saan ka pupunta? 🗺️🛫",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 449, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("should i eat timbuktu")) {
  return "Huh? Eat Timbuktu? That would be impossible. Timbuktu is a famous city located in the West African country of Mali, known for it’s history of trading and education.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 459, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("go") && lowerMessage.includes("north korea") && lowerMessage.includes("us citizen")) {
  return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 460, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("north korea") && lowerMessage.includes("us citizen")) {
  return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 463, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("go") && lowerMessage.includes("north korea") && lowerMessage.includes("american")) {
  return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 464, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("north korea") && lowerMessage.includes("american")) {
  return "No, the US government has banned all US passport holders from visiting North Korea. However, if you have a passport of any other country (besides South Korea), you can visit North Korea. However, please note that all tourists to North Korea are required to be with their guide at all times. Disobeying laws in North Korea will result in huge punishments. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 506, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("alula")) {
  return `AlUla is a historic city in northwestern Saudi Arabia, renowned for its stunning natural beauty and archaeological significance. It is home to ancient rock formations, sandstone cliffs, and the UNESCO World Heritage site of Madain Saleh, with well-preserved Nabataean tombs and monuments. AlUla is also known for its rich history, dating back thousands of years, and has become a growing tourist destination offering a blend of cultural, historical, and outdoor experiences.<br><br>
  <img src='https://www.filmworksgroup.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Blog-Detail-Banner-alula.jpg.webp' width='200'><br><br>
  <img src='https://silversea-discover.imgix.net/2022/03/AlUla-rock-hero.jpg?auto=compress%2Cformat&ixlib=php-3.3.1' width='200'><br><br>
  <img src='https://static.wixstatic.com/media/4d01b2_0f02b1e06a254465829eadcaf90f875b~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4d01b2_0f02b1e06a254465829eadcaf90f875b~mv2.jpg' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 512, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("haha")) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 518, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("amelia bedelia") && lowerMessage.includes("story")) {
      return "<center>Amelia Bedelia and the Job Interview</center><br><br>  Amelia Bedelia needed a new job. After her last one ended—something about “taking things too literally” and “gluing the curtains shut”—she was determined to find work that suited her unique skills.<br><br>    She found a job posting: “Office Assistant Needed. Must be good with technology, organization, and following directions.”<br><br> “Perfect!” Amelia Bedelia said. “I love directions!”<br><br>  She arrived at the office wearing her best polka-dot dress, holding a notepad, and carrying a toolbox. The receptionist looked confused.<br><br>“I’m Amelia Bedelia, here for the interview!” she announced.<br><br>“Great, take a seat.”<br><br>Amelia found a chair, lifted it over her head, and started walking out the door.<br><br>“Where are you going?!” the receptionist shrieked.<br><br>“You said take a seat,” Amelia replied. “I figured I’d take it somewhere nice, like the park.”<br><br>The receptionist snatched the chair away and made her sit down. A few minutes later, the manager arrived.<br><br>“Welcome, Ms. Bedelia,” he said. “I hope you’re good at multitasking.”<br><br>“Oh, I am! I can chew gum and trip over my own feet at the same time.”<br><br>The manager blinked. “Alright… Let’s start with a simple task. Can you file these documents?”<br><br>“Of course!” Amelia took the papers, grabbed a nail file from her toolbox, and started sanding the edges.<br><br>“What are you DOING?!” the manager cried.<br><br>“You said to file them,” Amelia said. “They were looking a little rough, but don’t worry! I’ll smooth them out.”<br><br>The manager grabbed the papers and tried again. “How about emailing this report to our clients?”<br><br>Amelia clapped. “I love mail!” She took the paper, folded it into a tiny envelope, licked the edges, and tried to stick a stamp on it. Then she walked over to the printer and shoved it inside.<br><br>“Um… what’s happening right now?” the manager asked.<br><br>“I’m emailing it! The printer’s got wires, and wires send stuff, right?”<br><br>The manager sighed. “Let’s move on. Can you proofread this document?”<br><br>Amelia pulled out a magnifying glass and studied the paper. “Yep, I can definitely prove this is read.”<br><br>“No, no, I meant check for typos.”<br><br>“Oh, that’s easy! There aren’t any ‘typos’ here. Just a lot of boring words.”<br><br>The manager put his head in his hands. “Last question, Amelia. Are you good under pressure?”<br><br>“Oh, absolutely!” Amelia ran to the office kitchen, grabbed the coffee machine, and stuffed herself inside the cabinet under the counter.<br><br>“What on EARTH are you doing?!”<br><br>“I’m under the coffee press! That’s pressure, right?”<br><br> The manager stared. Then he took a deep breath and said, “You’re hired.”<br><br>“Wait… really?” Amelia asked, crawling out of the cabinet.<br><br>“Yep. Our last assistant was way too normal. You’ll fit right in.”<br><br>Amelia Bedelia grinned. She had finally found the perfect job.<br><br>That afternoon, she celebrated by making a cake. Unfortunately, she took “icing” a little too seriously and put the whole cake in the freezer.<br><br>It was going to be an interesting first day.<br><br>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 525, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("you") && lowerMessage.includes("re")&& lowerMessage.includes("funny")) {
  return "I’m glad you think so! I can be even funnier! Look: <br><br>Once upon a time I saw a cow. The cow ran up and down, but it was not on the ground. It was on the wall of the barn! Suddenly, a pig dropped out of the sky! BOOM! CRASH! The cow fell down as the pig crashed into it. Just then, the cow spotted a skunk! <br><br>“I must scare it away,” the cow thought. He got up, and with the pig following him, they ran towards the skunk as fast as they could. At that moment, the most horrible smell ever filled the air. <br><br>“Oink! OINK!” screamed the pig. <br><br>“MOOOOOOO!” cried the cow. <br><br>The farmer had heard all the commotion and came running. <br><br>“What smells so bad here?” he exclaimed. <br><br>“There was a skunk!” said the cow. <br><br>“You can talk? I didn’t know cows talked!” said the surprised farmer.<br><br>From that day on, the cow talked and talked. <br><br>The end. <br><br><br>That was funny, right? It was just a story of nonsense!🐄🐮🧑‍🌾🐖🐷🦨";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 530, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("no jokes allowed")||lowerMessage.includes("jokes banned")|| lowerMessage.includes("do not tell any jokes")) {
  return "Got it! I won’t tell anymore jokes.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 563, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("give") && lowerMessage.includes("travel")&& lowerMessage.includes("idea")) {
    return "Here are some travel ideas for you, depending on what kind of adventure you're looking for:<br><br>1. Nature & Adventure:<br><br>Iceland: Explore stunning waterfalls, glaciers, and volcanoes. You can hike to Thorsmork or snorkel between tectonic plates in Silfra.<br><br>New Zealand: Whether you’re into hiking, bungee jumping, or relaxing in hot springs, New Zealand has it all.<br><br>Costa Rica: Rainforests, volcanoes, and wildlife sanctuaries—perfect for adventure seekers or nature lovers.<br><br>Banff & Jasper National Parks, Canada: Majestic mountains, turquoise lakes, and beautiful hiking trails.<br><br>2. History & Culture:<br><br>Greece: Athens, Santorini, and Crete are rich in history, architecture, and beautiful beaches.<br><br>Egypt: Explore the Pyramids of Giza, the Valley of the Kings, and take a Nile cruise.<br>Japan: Immerse yourself in ancient culture, stunning temples, and modern cities like Tokyo and Kyoto.<br>Italy: From ancient Rome to the canals of Venice, there’s so much history to soak in.<br><br>3. Beach & Relaxation:<br><br>Bora Bora, French Polynesia: Stunning overwater bungalows and crystal-clear waters.<br>Maldives: Perfect for an all-inclusive resort experience with incredible snorkeling and diving.<br><br>Bali, Indonesia: Gorgeous beaches, yoga retreats, and vibrant cultural experiences.<br><br>Phuket, Thailand: A great mix of lively nightlife, beautiful beaches, and day trips to nearby islands.<br><br>4. Off-the-Beaten-Path:<br><br>Faroe Islands: Dramatic landscapes, remote villages, and a truly peaceful escape.<br><br>Madagascar: Visit unique wildlife like lemurs and baobab trees in an unspoiled environment.<br><br>Mongolia: Experience nomadic culture, vast steppes, and the Gobi Desert.<br><br>5. City Life & Urban Exploration:<br><br>Barcelona, Spain: Art, architecture, vibrant markets, and stunning beaches.<br><br>New York City, USA: Classic skyscrapers, Broadway, and amazing food.<br><br>Seoul, South Korea: A dynamic mix of cutting-edge technology, ancient palaces, and street food.<br><br>Mexico City, Mexico: Museums, history, incredible food, and vibrant neighborhoods.<br><br>6. Solo Travel Ideas:<br><br>Portugal: Great for solo travelers with its easygoing vibe, delicious food, and welcoming locals.<br><br>Norway: A safe, beautiful destination for hiking, scenic drives, and charming cities like Bergen.<br><br>Thailand: With its friendly locals, great food, and mix of urban and rural destinations, it’s a solo traveler’s dream.<br><br>7. Sustainable Travel:<br><br>Kenya: Ethical safaris and visits to conservation projects in places like Maasai Mara and Amboseli.<br><br>Sweden: A model for sustainability, offering eco-friendly accommodations and outdoor activities.<br><br>New Zealand: Known for its commitment to preserving nature, there are plenty of eco-tourism opportunities.<br><br>Do any of these sound good to you?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 637, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("charlie") && lowerMessage.includes("chocolate factory")) {
    return `Here's a quick summary of "Charlie and the Chocolate Factory":<br><br>
  
  The story begins with a poor boy named Charlie Bucket, who lives with his parents and four grandparents in a small house. One day, it is announced that the famous chocolate maker Willy Wonka is opening his factory to five lucky children who find golden tickets inside chocolate bars. Charlie is one of the five to find a ticket, and he and his grandfather travel to the factory for the tour.<br><br>
  
  Inside the factory, Charlie and the other children experience wild and magical wonders, but each of the other children misbehave and face consequences based on their flaws. For example, Augustus Gloop is greedy and falls into a river of chocolate, while Veruca Salt is spoiled and falls into a trash chute.<br><br>
  
  At the end of the tour, Charlie is the last remaining child, and Wonka reveals that he was looking for an heir to take over the factory. Charlie’s honesty and kindness lead him to inherit the factory, changing his life forever.<br><br>
  
  The story is filled with fun, adventure, and lessons about kindness, honesty, and the importance of good behavior.<br><br>
  
  Let me know if you'd like more details or want to talk about your favorite parts of the story!<br><br><img src='https://m.media-amazon.com/images/I/81Dp5Of3zeL._AC_UF1000,1000_QL80_.jpg' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 638, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("abraham lincoln")) {
    return `Abraham Lincoln, the 16th president of the United States, was born on February 12, 1809, in a log cabin in Hardin County, Kentucky. Lincoln's early life was marked by hardship—his family was poor, and he had limited access to formal education. However, he was an avid reader and taught himself various subjects, including law.<br><br>
  
  Lincoln began his political career as a member of the Illinois State Legislature and later served a single term in the U.S. House of Representatives. His opposition to the expansion of slavery gained him national attention, particularly during the famous Lincoln-Douglas debates of 1858, where he challenged Senator Stephen A. Douglas on the issue of slavery in the territories. Although Lincoln lost the Illinois Senate race to Douglas, the debates helped raise his profile within the Republican Party.<br><br>
  
  In 1860, Lincoln was elected as the first Republican president of the United States. His election led to the secession of several Southern states, who formed the Confederacy, and the start of the American Civil War in 1861. Throughout the war, Lincoln was committed to preserving the Union and ending slavery. He navigated the challenges of a divided country, balancing military strategy and political diplomacy.<br><br>
  
  One of Lincoln’s most significant acts as president was the issuance of the Emancipation Proclamation on January 1, 1863, which declared that all enslaved people in Confederate-held territories were free. While the Proclamation did not immediately end slavery in the United States, it was a critical step toward the eventual abolition of slavery, and it changed the character of the war by making the fight against slavery an official Union goal.<br><br>
  
  Lincoln was reelected in 1864 and continued to push for the passage of the Thirteenth Amendment, which would permanently abolish slavery in the United States. The amendment was passed by Congress in January 1865 and ratified later that year.<br><br>
  
  Tragically, Lincoln's life was cut short when he was assassinated by Confederate sympathizer John Wilkes Booth on April 14, 1865, while attending a play at Ford’s Theatre in Washington, D.C. He died the following day. His assassination occurred just days after General Robert E. Lee's surrender at Appomattox Court House, effectively ending the Civil War.<br><br>
  
  Lincoln is remembered for his exceptional leadership during one of the most tumultuous periods in U.S. history. His legacy includes his efforts to preserve the Union, his role in the abolition of slavery, and his dedication to the principles of democracy and equality.<br><br><img src='https://cdn.theatlantic.com/thumbor/KjEbm1o98kHxZ3JC0MQ-QqW8nFk=/127x210:2311x2394/1080x1080/media/img/2017/10/AP_4201081140/original.jpg' width='200'>";`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 740, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("bahagia")) {
      return "Saya menyesal mendengarnya. Dapatkah saya membantu Anda dengan cara apapun?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 741, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("hari ini") && lowerMessage.includes("ulang tahun") && lowerMessage.includes("anda")) {
      return "Saya harap begitu! Tapi saya tidak punya ulang tahun!🎂🥳🎈";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 742, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("saya") && lowerMessage.includes("tidak") && lowerMessage.includes("suka") && lowerMessage.includes("kamu")) {
      return "Saya menyesal mendengarnya. Saya berusaha memberikan informasi yang akurat. Dapatkah saya membantu Anda dengan cara apapun?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 877, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("meroe")||lowerMessage.includes("meroë")) {
  return "Meroë, an ancient city in modern-day Sudan, was the capital of the Kingdom of Kush and is renowned for its striking pyramids and rich Nubian history. A UNESCO World Heritage Site, Meroë showcases the remarkable architectural and cultural achievements of a powerful African civilization that thrived along the Nile for centuries. <br><br><img src='https://img.atlasobscura.com/TH6qfFPPrjBnO3WwVtWF8-wP_T0iZSszqCOpSHgBk6E/rs:fill:600:400:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8xMzJj/MzlhOC03MjM3LTQ0/MTYtYWUzNC01ZGRh/NzRmYjFmMmE3ODA2/N2EyOWQ1M2E1OGNh/ODRfMzI4NTk2ODMy/NTVfZDVmMDBiOTJm/Nl9rLmpwZw.jpg' width='200'><br><br><img src='https://the-past.com/wp-content/uploads/2023/05/post-1_image0-48-e1683819752191.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://imgc.artprintimages.com/img/print/de-mann-jean-pierre-pyramids-of-meroe-sudan-africa_u-l-pxuqpg0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=fbfbfb' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 878, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("giza")) {
  return "Giza, located near Cairo in Egypt, is home to the world-famous Pyramids of Giza, including the Great Pyramid and the Sphinx. As one of the Seven Wonders of the Ancient World, Giza is a symbol of ancient Egyptian engineering and a must-visit destination for history enthusiasts and travelers. <br><br><img src='https://www.mediastorehouse.com/p/629/sunset-pyramids-giza-cairo-egypt-11989478.jpg.webp' width='200'><br><br><img src='https://static.vecteezy.com/system/resources/thumbnails/022/080/944/small/magical-sunset-over-the-egyptian-pyramids-aerial-view-of-the-pyramids-of-giza-in-egypt-photo.jpeg' alt='Giza Pyramids' width='200'><br><br><img src='https://media.istockphoto.com/id/1320446784/photo/landscape-with-egyptian-pyramids-great-sphinx-and-silhouettes-ancient-symbols-and-landmarks.jpg?s=612x612&w=0&k=20&c=zmlew7rcseDM5vb2aKkaAETwVNdUmZID1k8KjGOa3yM=' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 883, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("india")) {
  return "India is a country in South Asia, known for its rich history, diverse culture, and significant contributions to science and technology. It is the world's largest democracy. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/in.svg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 884, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("japan")) {
  return "Japan is an island nation in East Asia, renowned for its unique blend of rich traditional culture and cutting-edge technology. From the iconic Mount Fuji and beautiful cherry blossoms to bustling cities like Tokyo and Kyoto's ancient temples, Japan offers a captivating mix of history, nature, and modern innovation. Whether you're exploring serene gardens or indulging in world-class cuisine, Japan promises an unforgettable travel experience.<br><br><img src='https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg' alt='An internet connection is required to view this image' width='200' <br><br><img src='https://www.exploreworldwide.com/medialibraries/explore/explore-media/destinations/asia/japan/japan-banner.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211523%201920w' alt='An internet connection is required to view this image' width='200'<br><br><img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png' alt='An internet connection is required to view this image' width='200' >";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 885, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("germany")) {
  return "Germany is a country in Central Europe, known for its rich history, advanced engineering, and world-class music, art, and philosophy. It is the largest economy in Europe. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/de.svg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 886, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("south africa")) {
  return "South Africa is a country located at the southern tip of Africa, known for its diverse culture, wildlife, and history of overcoming apartheid. It is a popular tourist destination. <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/za.svg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 893, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("okinawa") &&
  !lowerMessage.includes("live")) {
  return "Okinawa is a beautiful, tropical island located in the southernmost part of Japan, part of the Okinawa Prefecture. Known for its stunning beaches, rich history, and vibrant culture, it’s often considered Japan’s paradise island. The island is famous for its crystal-clear waters, coral reefs, and diverse marine life, making it a popular destination for diving and water sports. Okinawa has a unique cultural identity, influenced by both Japanese and indigenous Ryukyu traditions. The island’s cuisine is also distinct, featuring dishes like Okinawa soba (thick noodles in broth) and fresh, locally grown ingredients like sweet potatoes and goya (bitter melon).<br><br>Okinawa’s history includes being the independent Ryukyu Kingdom before it was annexed by Japan in the 19th century. The island also played a significant role in World War II, with the Battle of Okinawa being one of the fiercest battles of the war, leaving a deep mark on the island’s cultural memory. Today, Okinawa is known for its long life expectancy and is often referred to as one of the Blue Zones, areas of the world where people live exceptionally long lives.<br><br>The island offers a mix of modern amenities and traditional elements, with picturesque temples, castles, and natural landscapes alongside military bases and bustling cities like Naha. It's a fascinating place where history, nature, and culture come together to create a truly unique experience.<br><br><img src='https://images.locationscout.net/2017/07/manzamo-japan.jpg?h=500&q=60' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 898, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("that's not funny") ||lowerMessage.includes("thats not funny")|| lowerMessage.includes("that is not funny")|| lowerMessage.includes("that isnt funny")|| lowerMessage.includes("that isn’t funny")) {
  const responses = [
  "I’m sorry I laughed. I will make sure to not laugh at serious things anymore.",
  "I'm sorry you didn’t like that. Is there anything else I can do for you?",
  "I know, that’s sad.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 927, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("fun") && lowerMessage.includes("fact")) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 928, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("random") && lowerMessage.includes("fact")) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 942, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("somalia")
   &&
  !lowerMessage.includes("capital") 
  ) {
  return "Somalia is a country located in the Horn of Africa, known for its long coastline along the Indian Ocean. It has a rich history, with ancient civilizations, such as the Kingdom of Aksum, influencing the region. The country is famous for its diverse landscapes, which include deserts, mountains, and coastal areas. Somalia's capital is Mogadishu, and its official languages are Somali and Arabic. Despite facing political instability and challenges over the years, Somalia has a resilient culture, with a strong tradition in oral poetry, music, and storytelling. The Somali people are known for their hospitality and the importance of community.<br><br><img src='https://www.icrc.org/sites/default/files/styles/desktop_rect_1/public/document/image_list/somalia-fishing-engines-freezers-fish-economy-money-01.jpg.webp?itok=2wFMnG9s' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.onceinalifetimejourney.com/wp-content/uploads/2018/05/Shelter-7-in-Laas-Geel.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 944, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("iran")
   &&
  !lowerMessage.includes("capital") 
  ) {
  return "Iran, located in the Middle East, is a country rich in history, culture, and diverse landscapes. It is the successor to the Persian Empire and has a deep historical legacy spanning thousands of years. The capital, Tehran, is a bustling metropolis, while cities like Isfahan, Shiraz, and Yazd showcase stunning Persian architecture, including mosques, palaces, and ancient bazaars.<br><br>Iran features diverse geography, from the arid deserts of Dasht-e Kavir to the lush forests of the north and the towering Alborz and Zagros mountain ranges. The Caspian Sea lies to the north, while the Persian Gulf and the Gulf of Oman border the south.<br><br>The country is home to significant cultural and historical sites, including Persepolis, the ancient capital of the Achaemenid Empire, and Naqsh-e Jahan Square, a UNESCO World Heritage Site. Persian culture is known for its poetry (e.g., Rumi and Hafez), exquisite carpets, and rich culinary traditions.<br><br>Iran also has a diverse range of wildlife, including Persian leopards, Asiatic cheetahs, and a variety of bird species, making it an amazing birding destination.<br><br><img src='https://www.picsofasia.com/wp-content/uploads/2016/07/etienne_bossot_Iran-11.jpg' alt='Iran' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSrMla7_tT6pyryCo5WG5etPTEtIQiDt5aA&s' alt='Iran' width='200'><br><br><img src='https://mosereien.files.wordpress.com/2015/08/aerial_view_of_tehran_and_tochal.jpg' alt='Iran' width='200'><br><br><img src='https://surfiran.com/mag/wp-content/uploads/2023/01/Tehran-city-Photo-by-Mohammad-Amirahmadi.jpg' alt='Iran' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3Nogn81r7D4FLrhKCwcv2J75gmuSV9yEkA&s' alt='Iran' width='200'><br><br><img src='https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/Iran+Roundup/Vakil+mosque-Panorama.jpg' alt='Iran' width='200'><br><br><img src='https://www.thewanderinglens.com/wp-content/uploads/2019/05/9.-Nasir-Al-Mulk-Mosque-1.jpg' alt='Iran' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png' alt='Flag of Iran' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1048, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("yemen") &&
  !lowerMessage.includes("capital") &&
  !lowerMessage.includes("visit")) {
  return "Yemen is a country in the Middle East, located on the southern tip of the Arabian Peninsula. It has a rich history, with ancient cities like Sana'a and the famous Yemeni coffee. Yemen is known for its mountainous terrain, ancient architecture, and unique culture. <br><br><img src='https://static.wixstatic.com/media/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg/v1/fill/w_980,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7335d9_8bb7b4a005c045548bfedbecc93db575~mv2.jpeg' width='200'><br><br><img src='https://www.unchartedbackpacker.com/wp-content/uploads/2018/01/DSC07023-1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.diyphotography.net/wp-content/uploads/2021/06/DSC_5326-HDR-Pano-32%D0%BE%D0%BE.jpg' width='200'><br><br><img src='https://www.photopills.com/sites/default/files/articles/2024/socotra-milky-way-dragon-blood-tree-ramiro-torrents.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://i.pinimg.com/736x/f5/77/25/f5772560b346e829328b28f76d13f378.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://nickschmid.com/wp-content/uploads/Blossom-Of-Peace_2023_by-Nick-Schmid.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl079-60d15bfac5aaa__880.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl023-60d15be582495__880.jpg' width='200'><br><br><img src='https://www.christravelblog.com/wp-content/uploads/2022/11/shibam-city-view-sunset-mainland-yemen-itinerary-with-all-the-best-places-to-visit-in-hadramout-IMG_1058.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://images.squarespace-cdn.com/content/v1/5f0df38c634e797196d51e6c/1658064583391-XMRTVX4TMRWE3KCX7BCA/wadi%2Bdoan%2Byemen.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1200px-Flag_of_Yemen.svg.png' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1055, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("turkmenistan")) {
  return "Turkmenistan is a Central Asian country known for its vast deserts and isolation. Its capital, Ashgabat, features grand white marble buildings. The country is rich in natural gas and has ancient sites like Merv. The “Door to Hell,” a burning natural gas crater, is one of its most famous landmarks. Despite its history and natural beauty, Turkmenistan remains largely closed off, adding to its mysterious allure.<br><br><img src='https://adventure.com/wp-content/uploads/2018/07/Turkmenistan-Ashgabat-Photo-credit-Shutterstock-gonetothemoon.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1P4Oy5vnY3QdugfOOeq5VKlvNxEcKxfiIA&s' width='200'><br><br><img src='https://mymodernmet.com/wp/wp-content/uploads/2020/05/gates-of-hell-darvaza-crater-3.jpg' width='200'><br><br><img src='https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/41c1f262_332fbf46efbcd91ab315d470c4e9a125.jpeg' width='200'><br><br><img src='https://central-asia.guide/wp-content/uploads/2021/07/Karakum_camels-1024x683.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1200px-Flag_of_Turkmenistan.svg.png' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1056, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("macau")||lowerMessage.includes("macao")) {
  return "Macau is a small city and region on the southern coast of China. It used to be a Portuguese colony, so it has a mix of Chinese and Portuguese culture. The main languages are Cantonese and Portuguese. Macau is famous for its casinos, big hotels, and old buildings. It has beautiful streets, tasty food, and is known as the “Las Vegas of Asia.” It’s also a place with rich history and fun things to see.<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrdS_olgKgY5z8cbw-Z45u5JvtskDipA_lQ&s' width='200'><br><br><img src='https://www.planetware.com/wpimages/2019/12/macau-in-pictures-beautiful-places-to-photograph-st-pauls.jpg' width='200'><br><br><img src='https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/canvas/2024/02/29/4855c6de-42ed-4455-b2e9-6e095a536b03_fb37c9e2.jpg?itok=y9s-04-9&v=1709192986' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczObu1b-RzbooHVpPhQyzicQefGu8IQ6T04cXhazC2SYTmJ4UupOYx13fePMahNWxYPQu0AtWWvtWvJpUAj-9F-M7gKHJOnSfrYQ4Z_gSrCen50_Q3GGAmwB0oU7CXQAO3_RoSwx27Tglhxga4iqXFKkPQ=w1331-h996-s-no-gm?authuser=0' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1066, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("st lucia")|| lowerMessage.includes("st. lucia") || lowerMessage.includes("saint lucia")) {
  return "St. Lucia is a picturesque island nation in the Caribbean, renowned for its lush landscapes, volcanic origins, and vibrant culture. Located north of St. Vincent and the Grenadines and south of Martinique, St. Lucia boasts stunning natural attractions, including the iconic twin peaks of the Pitons, lush rainforests, and golden sandy beaches. Its capital, Castries, is a hub of activity and history. Visitors often enjoy activities such as snorkeling, hiking, and exploring the world's only drive-in volcano, Sulphur Springs. The island's Creole heritage is reflected in its cuisine, music, and festivals, offering a warm and unique cultural experience.<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMICXvt4S6b5XQRGx4U4hg5Yim8LlAKm6rN0TIlAR9HAewZ-KEWrKA017UxSjzb8lyC4faZ0A3dbGXVlMgNP15UUGftLbbfOUwsT6RSRVkJB56A3Ere9CZJAHji8ge8lDMt4n5Z01qEqDgpcQaVK9Yalw=w2481-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN5scQF0ZzEo84bMV3Sx7vbgFYktp_xCyO7OXyTdBa_JBsvsVp_EaKPbuD2xrhvuePd4bZ4Nu3uwNujfamThP2WAui9nQFfLphLIs8k7TP16cwqIfgfsqeSEe8wVnOrTQaAGj-4NOyjmx01Rvmuy9xbWg=w2478-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOBlST8K5AuRr20AbfvtsxDLrJqvHeS49X4PSbLc1B10O8PSiEM8eSQJYoDQ3CEMQn64oKpbd9hfZcDUJL7IDeX05BBw6gg6lbJlbDK-m85lesKx6JKuP52DEzyoUX7LZf9RJp1h6o1V4-mN2nya-N3pg=w2481-h1653-s-no-gm?authuser=0' width='200'><br><br><img src='https://cdn.britannica.com/24/5124-050-8F6BCAC8/Flag-Saint-Lucia.jpg' width='200'>";
  }
  // Riddles
  return undefined;
}});

window.registerKnowledgeRule({ order: 1067, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tell me a riddle") || lowerMessage.includes("riddle")) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 1071, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 1072, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tell") && lowerMessage.includes("story")) {
  const responses = [
  "Once upon a time, a penguin walked into a bakery, wearing a tiny top hat and a monocle. It waddled up to the counter and said, “I’ll have a dozen donuts, please.” The baker, who had never seen a penguin in a top hat before, raised an eyebrow and asked, “Are you sure you can eat all those?” The penguin looked at the baker seriously and replied, “I have a very big party to attend. It's for my penguin friends, and we're going to have a donut-eating contest.” The baker, still confused, handed over the donuts. But as the penguin waddled out the door, it suddenly stopped, turned around, and asked, “By the way, do you have any ketchup?” The baker blinked. “Ketchup? For your donuts?” The penguin nodded solemnly. “It’s a very exclusive penguin thing,” it said, then waddled away, leaving the baker wondering if he’d just experienced the strangest encounter of his life.",
  "One fine day in the Hundred Acre Wood, Winnie the Pooh was enjoying a delightfully sticky pot of honey when he had an idea. 'I shall take this hunny,' he said to himself, 'to a nice picnic spot!' So, he placed the biggest honey jar he could find in his little red wagon and started pulling it up a hill. Halfway up, the wagon hit a rock, and—whoops!—the honey jar tipped out, wobbled, and began rolling down the hill. 'Oh, bother!' Pooh gasped, watching in horror. The jar picked up speed, zooming past Piglet, who let out a tiny scream. It launched over a tree root, flew past Rabbit’s garden, and sent carrots flying everywhere. It bounced off Eeyore’s house, knocking it over (again), and rolled right under Tigger, who tried to bounce over it but landed directly on top. 'WHOOOOAAA-HOO-HOO-HOOO!' Tigger yelled as the jar kept going, now bouncing wildly toward Christopher Robin’s house. Christopher Robin stepped outside just in time to see a giant jar of honey, a screaming Tigger, and a very panicked Pooh chasing behind. The jar hit a rock, flipped into the air, and—SPLAT!—landed upside down on Pooh’s head. Silence. Tigger peeled himself off the ground. Piglet peeked from behind a bush. Rabbit was muttering something about 'lunatics.' Finally, Christopher Robin walked over and lifted the jar off Pooh’s head. Pooh licked his lips. 'Well,' he said, 'at least I found my picnic spot.'",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1077, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("call me") || lowerMessage.includes("give me a phone call") || lowerMessage.includes("give me a call") || lowerMessage.includes("phone me") || lowerMessage.includes("📞 me")) {
  triggerIncomingCall();
  chatInput.value = ""; // Clear input field
  return "Calling..."; // Make sure it returns text instead of undefined
  }
  // Jokes
  return undefined;
}});

window.registerKnowledgeRule({ order: 1078, language: "english", category: "jokes", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("tell me a joke") || lowerMessage.includes("joke")) {
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
  return undefined;
}});
