// Chatbot Version 7 knowledge — english / travel
// Extracted from Version 6.7. Rule order is preserved globally.

window.registerKnowledgeRule({ order: 19, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("go")&& lowerMessage.includes("dubai")) {
  return "That sounds exciting! Dubai is one of the seven emirates of the UAE, and is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. Would you like me to give you some tips on what to do in Dubai?";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 73, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("secretcode12345piers")) {  
      return "Welcome Mrs Piers! Thanks for entering the secret Mrs Piers code. From my knowledge, I know that you are a person who lives in the United States. You are related to the second president of the United States, John Adams. You wear glasses, and you like to wear a shirt that says USA. You have a pig puppet named Timbuktu Freddy Piers. You also have two cats. One of them is named Rex, and the other is named Catsie. For a long time, you did not have a passport, until May 2025. Based on my knowledge, you have never been outside of the USA or Canada. However, you dream of visiting your sister in Australia.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 74, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("secret code 1 2 3 4 5 piers")) {  
      return "Welcome Mrs Piers! Thanks for entering the secret Mrs Piers code. From my knowledge, I know that you are a person who lives in the United States. You are related to the second president of the United States, John Adams. You wear glasses, and you like to wear a shirt that says USA. You have a pig puppet named Timbuktu Freddy Piers. You also have two cats. One of them is named Rex, and the other is named Catsie. For a long time, you did not have a passport, until May 2025. Based on my knowledge, you have never been outside of the USA or Canada. However, you dream of visiting your sister in Australia.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 180, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("gave")&& lowerMessage.includes("my")&& lowerMessage.includes("passport")&& lowerMessage.includes("to")&& lowerMessage.includes("stranger"))   {
  return `Oh no! Why did you do that? Unless the stranger was an official checking passports, that is a very dangerous thing to do. Get your passport back from the stranger as soon as possible. If not, he might steal it.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 183, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("giv")&& lowerMessage.includes("my")&& lowerMessage.includes("passport")&& lowerMessage.includes("to")&& lowerMessage.includes("stranger"))   {
  return `Oh no! Why did you do that? Unless the stranger was an official checking passports, that is a very dangerous thing to do. Get your passport back from the stranger as soon as possible. If not, he might steal it.`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 201, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("visiting") && lowerMessage.includes("japan")) {
  return "Have fun in Japan! Safe travels! ✈️🧳🌏";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 205, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 206, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 207, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 234, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 381, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how are you")) {
  const responses = [
  "I'm just a bot, but I'm doing great! Thanks for asking.",
  "I'm doing great! How can I help you?",
  "I'm doing great! How about you?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  // English: I'm traveling
  return undefined;
}});

window.registerKnowledgeRule({ order: 382, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i am traveling") || lowerMessage.includes("i am on a trip") || lowerMessage.includes("i am traveling right now") || lowerMessage.includes("i am going somewhere") || lowerMessage.includes("i'm traveling") || lowerMessage.includes("i'm on a trip") || lowerMessage.includes("i'm traveling right now") || lowerMessage.includes("i'm going somewhere")|| lowerMessage.includes("im going somewhere")|| lowerMessage.includes("im on a trip")|| lowerMessage.includes("im traveling")|| lowerMessage.includes("im traveling right now")) {
  const responses = [
  "Have a great trip! 🌍✈️ Let me know if you need any help with your travels. 😊",
  "That sounds exciting! Safe travels! 🧳🌟",
  "Enjoy your journey! Where are you headed? 🗺️🛫",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Filipino: "Naglalakbay ako" (I'm traveling)
  return undefined;
}});

window.registerKnowledgeRule({ order: 455, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("iron ore") && lowerMessage.includes("train")) {
  return "The Mauritania Iron Ore Train is one of the longest and heaviest freight trains in the world, running from the iron ore mines in Zouérat to the port city of Nouadhibou on the Atlantic coast, covering a distance of about 700 kilometers (430 miles). This train, which can carry up to 21,000 tons of iron ore in a single trip, plays a vital role in Mauritania’s economy, as iron ore is one of the country's main exports. The train is composed of over 200 wagons, pulled by several locomotives, making it a truly impressive feat of engineering. It holds the record for being one of the longest trains globally, traveling through the vast and arid Sahara Desert. Despite its remarkable size and function, the train also symbolizes the importance of Mauritania's mining industry to global steel production and the significant logistical challenges involved in transporting such a heavy and essential commodity across harsh desert terrain.<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/220928094307-02-body-honeymoon-iron-ore-train-mauritania.jpg?q=w_1110,c_fill' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 456, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("Mauritania") && lowerMessage.includes("train")) {
  return "The Mauritania Iron Ore Train is one of the longest and heaviest freight trains in the world, running from the iron ore mines in Zouérat to the port city of Nouadhibou on the Atlantic coast, covering a distance of about 700 kilometers (430 miles). This train, which can carry up to 21,000 tons of iron ore in a single trip, plays a vital role in Mauritania’s economy, as iron ore is one of the country's main exports. The train is composed of over 200 wagons, pulled by several locomotives, making it a truly impressive feat of engineering. It holds the record for being one of the longest trains globally, traveling through the vast and arid Sahara Desert. Despite its remarkable size and function, the train also symbolizes the importance of Mauritania's mining industry to global steel production and the significant logistical challenges involved in transporting such a heavy and essential commodity across harsh desert terrain.<br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/220928094307-02-body-honeymoon-iron-ore-train-mauritania.jpg?q=w_1110,c_fill' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 461, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("arriv") && lowerMessage.includes("pyongyang") && lowerMessage.includes("private jet")) {
  return "Wow, landing at Pyongyang International Airport in a private jet? That sounds like quite the adventure! What brings you there? ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 462, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("land") && lowerMessage.includes("pyongyang") && lowerMessage.includes("private jet")) {
  return "Wow, landing at Pyongyang International Airport in a private jet? That sounds like quite the adventure! What brings you there? ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 468, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("emoji for travel") || lowerMessage.includes("emoji for vacation") || lowerMessage.includes("emoji for adventure")) {
  return "For travel, you can use: ✈️🌍🚗🌄📸";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 497, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("air niugini") || lowerMessage.includes("air nuigini") || lowerMessage.includes("airniugini") || lowerMessage.includes("airnuigini")) {
  return `Air Niugini, founded in 1973, is the national airline of Papua New Guinea, based in Port Moresby. It operates both domestic and international flights, with a fleet of 22 aircraft. Known for its safety and reliability, Air Niugini serves major destinations in Asia, Oceania, and Australia. <br><br><img src='https://mma.prnewswire.com/media/2093620/Boeing_Air_Niugini.jpg?w=2700g' alt='An internet connection is required to view this image' width='200'> `;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 499, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("etihad") || lowerMessage.includes("etihad airways")) {
  return `Etihad Airways, established in 2003, is the national airline of the United Arab Emirates, based in Abu Dhabi. Known for its exceptional service and luxury offerings, Etihad flies to over 80 destinations worldwide. The airline operates a fleet of modern aircraft, including the Airbus A380 and Boeing 787. <br>
  <br>
  <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/02/ee/ff/etihad-airways.jpg?w=1100&h=-1&s=1' width='200'> <br>
  <br>
  <img src='https://www.etihad.com/content/dam/eag/etihadairways/etihadcom/Global/products/fleet/a380-main-residence.jpg' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 500, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("vermont") || lowerMessage.includes("photo of vermont")|| lowerMessage.includes("image of vermont")) {
  return `Here's a photo of Vermont, a state in the New England region of the United States: <br><br>
  <img src='https://www.purevacations.com/wp-content/uploads/2019/08/Montpelier-Vermont-1024x683.jpg' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 504, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kamchatka")) {
  return `Kamchatka is a remote and rugged peninsula in the Russian Far East, known for its dramatic landscapes, including active volcanoes, geysers, and diverse wildlife. It is a popular destination for adventure tourism, offering opportunities for hiking, wildlife viewing, and exploring untouched nature. The region is also home to indigenous peoples and is renowned for its pristine environment and natural beauty. Kamchatka is less developed and has limited infrastructure, making it an exclusive and challenging destination.<br><br>
  <img src='https://ipt.images.tshiftcdn.com/194748/x/0/russia-s-kamchatka-peninsula-15-day-photo-tour.jpg?ar=1.91%3A1&w=1200&fit=crop' width='200'><br><br>
  <img src='https://ipt.images.tshiftcdn.com/194734/x/0/russia-s-kamchatka-peninsula-15-day-photo-tour-3.jpg?ar=1.91%3A1&w=1200&fit=crop' width='200'><br><br>
  <img src='https://www.remotelands.com/travelogues/app/uploads/2021/12/Kamchatka-1-2560x1280.jpg' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 514, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("going") && lowerMessage.includes("trip")) {
  return "Have a great trip! Where are you going?✈️🧳🌍";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 537, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("biology") && lowerMessage.includes("lesson")) {
  return "Let's start with a lesson on cells, which are the fundamental units of life.<br><br>Cells are the basic building blocks of all living organisms. Every organism, whether it’s a simple bacterium or a complex human, is made up of cells. Cells carry out all the essential functions that keep an organism alive. There are two main types of cells: prokaryotic and eukaryotic.<br><br>Prokaryotic cells are simpler and smaller. They do not have a nucleus or membrane-bound organelles. These cells are found in bacteria and archaea, which are single-celled organisms. Despite their simplicity, prokaryotic cells can carry out all the functions necessary for life, such as metabolism and reproduction.<br><br>Eukaryotic cells, on the other hand, are more complex. These cells have a nucleus, which contains the cell’s genetic material (DNA), and other specialized organelles that perform specific functions. Eukaryotic cells make up plants, animals, fungi, and protists.<br><br>Now, let’s explore the **parts of a eukaryotic cell. <br><br>The nucleus is often referred to as the control center of the cell. It holds the DNA, which carries genetic instructions for the cell’s activities. The cell membrane surrounds the cell, acting as a barrier that controls what enters and exits. It is made of a lipid bilayer that is selectively permeable, meaning it allows only certain substances to pass through.<br><br>The cytoplasm is a jelly-like substance that fills the cell and holds the organelles in place. It is in the cytoplasm that many chemical reactions take place. One important organelle found in eukaryotic cells is the mitochondrion, which produces energy for the cell. It converts food molecules into ATP (adenosine triphosphate), the energy currency of the cell.<br><br>Another important structure is the endoplasmic reticulum (ER). The rough ER is studded with ribosomes and helps in protein synthesis, while the smooth ER synthesizes lipids and detoxifies harmful substances. Ribosomes are tiny structures responsible for making proteins, which are essential for cell functions. These can be free-floating in the cytoplasm or attached to the rough ER.<br><br>The Golgi apparatus is another important organelle that packages and processes proteins and lipids synthesized in the cell and sends them to their final destination. Lysosomes contain digestive enzymes that break down waste materials, cellular debris, and foreign invaders, like bacteria.<br><br>Finally, the cytoskeleton is a network of protein fibers that gives the cell its shape, aids in movement, and helps with cell division.<br><br>Understanding how cells work is fundamental to understanding biology as a whole, since cells are the basic units of life. The processes carried out by cells, such as energy production, protein synthesis, and waste removal, are critical for the survival of an organism. Cells work together to form tissues, organs, and systems, which in turn form the complete organism.<br><br>In summary, cells are the building blocks of life, and understanding their structure and function is essential to understanding how life operates at a microscopic level.";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 564, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("flight")&& lowerMessage.includes("missed")) {
    return "Oh no, I'm sorry to hear that! Here are some tips to help you:<br><br>Contact the airline ASAP: Call the airline or head to the customer service desk. Some airlines may be able to rebook you on the next available flight, especially if you explain your situation.<br><br>Check if you're eligible for a rebooking or refund: Depending on your ticket type and the reason for missing the flight, they may offer you a free rebooking or a refund. Some airlines charge a fee, but it’s worth asking about any flexibility.<br><br>Ask about standby options: If there’s no direct flight available, ask about standby for earlier flights that might have empty seats.<br><br>Look for other flights: If rebooking through the airline isn’t working out, check for available flights through other airlines or even connecting flights that could get you where you need to go.<br><br>Review your travel insurance: If you have travel insurance, see if it covers missed flights. Some policies might help with rebooking fees or even reimburse you for missed connections.<br><br>Stay calm and polite: Airline staff can be more helpful when you're kind and patient, so try to stay calm, even though it's frustrating!";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 639, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("how") && lowerMessage.includes("fly") && lowerMessage.includes("drone")) {
    return `Here's a quick guide on how to fly a drone:<br><br>1. Understand the Drone Basics:<br>- Drones typically have four main components: the drone body, propellers, battery, and controller.<br>- Learn the basic controls: throttle (up/down), yaw (rotate left/right), pitch (tilt forward/backward), and roll (tilt left/right).<br><br>2. Pre-Flight Preparation:<br>- Check the battery: Make sure the drone and the remote control are fully charged.<br>- Inspect the drone: Ensure propellers are securely attached and in good condition, and that the drone is free from any obstructions.<br>- Find a safe area: Look for an open space free from people, buildings, or trees. This will reduce the risk of accidents.<br><br>3. Get Familiar with the Controller:<br>- Left stick (Throttle + Yaw): Controls altitude and turns the drone left or right.<br>- Right stick (Pitch + Roll): Controls forward/backward movement and side-to-side motion.<br>- Trim controls: Some controllers have trim buttons to help adjust flight stability (like correcting drift).<br><br>4. Takeoff:<br>- Gradually increase throttle: Slowly push the throttle stick upwards to lift the drone off the ground. Don’t rush it! Ensure the drone lifts steadily and maintains a steady altitude.<br><br>5. Basic Maneuvers:<br>- Flying forward/backward: Push the right stick forward to fly the drone forward and pull it back to fly backward.<br>- Turning: Rotate the left stick left or right to turn the drone in either direction.<br>- Hovering: To hover in one place, make small adjustments with the throttle and trim controls until the drone remains stationary.<br><br>6. Landing:<br>- Descend slowly: Reduce throttle slowly to bring the drone back down gently. Avoid making sudden movements to ensure a smooth landing.<br>- Land on a flat surface: Make sure the area is clear of obstacles and land carefully.<br><br>7. Practice:<br>- If you're a beginner, practice in a large, open space without many obstacles.<br>- Start with simple tasks like hovering and moving in a straight line before advancing to more complex maneuvers.<br><br>8. Drone Safety Tips:<br>- Follow local regulations: Make sure you’re aware of and follow local drone flying laws and airspace restrictions.<br>- Keep the drone in line of sight: Always maintain visual contact with your drone to avoid losing control.<br>- Respect others: Be considerate of people and wildlife, and avoid flying near crowds or sensitive areas.<br><br>9. Use a Flight Simulator (Optional):<br>- If you're new to flying, consider practicing with a drone flight simulator before taking the drone into the air. This can help you get used to the controls and movements.<br><br>Would you like more details or tips on flying drones?<br><br><img src='https://nofilmschool.com/media-library/dji-air-3-flying-in-the-sky.webp?id=34663814&width=1245&height=700&quality=90&coordinates=53%2C0%2C53%2C0' width='200'>`;
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 814, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("drew binsky")) {
  return "Drew Binsky is a travel vlogger and content creator known for documenting his travels to every country in the world, sharing cultural experiences, and providing travel tips through engaging videos and blogs.<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1IZ2xQU6d6Bpoy7Jg6JT1Dwhg-C2kcg2dg&s' width='200'><br><br><img";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 864, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("kara and nate")) {
  return "Kara and Nate are a popular YouTube couple known for their travel vlogs. They document their adventures around the world, often exploring unique destinations and sharing their experiences through videos. Their content is engaging, with a mix of travel tips, personal stories, and beautiful footage of the places they visit. ";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 865, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("fly with zechariah")) {
  return "Fly with Zechariah is a fun travel channel where eleven-year-old Zechariah takes you on exciting journeys to explore the world, sharing his dream of visiting Dubai and inspiring others to join his adventures.<br><br><img src='https://yt3.googleusercontent.com/f70OqaeE8v61Cc26Ha7Ptvks763QHBGHSQl4fWMT_hr3UqJlhx8F0aPf2F3qrKyj2icwGMdUCg=s160-c-k-c0x00ffffff-no-rj' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 869, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("united arab emirates")||lowerMessage.includes("uae")) {
  return "The United Arab Emirates (UAE) is a federation of seven emirates in the Arabian Peninsula, known for its rapid modernization and economic diversification beyond oil into tourism, technology, and real estate. Home to landmarks like the Burj Khalifa and cultural heritage such as dhow sailing, the UAE combines modern luxury with rich traditions, attracting millions of visitors worldwide. <br><br><img src='https://petapixel.com/assets/uploads/2021/02/Dubai2021_AlbertDros-9-800x574.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.abudhabitravelplanner.com/wp-content/uploads/2023/09/AD-Travel-Planner-CanvaPro-156.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSAP0' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelplusstyle.com/wp-content/uploads/2013/02/Dubai-1512.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 872, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("taipei 101")) {
    return "Taipei 101 is a landmark skyscraper located in Taipei, Taiwan. Once the tallest building in the world, it stands at 508 meters (1,667 feet) with 101 floors. Completed in 2004, the design combines traditional Asian architecture with modern engineering. It is famous for its New Year's Eve fireworks display and its innovative design to withstand earthquakes and typhoons. Visitors can enjoy stunning views from its observation deck on the 89th floor. <br><br><img src='https://static.wixstatic.com/media/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a37760_8a061daaab5c459fb7ad0d59c4a684d6~mv2.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/02/7188dad45f93c6833da0240acb79030c_1000x1000.jpg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 874, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("dubai")) {
  return "Dubai, one of the seven emirates of the UAE, is a global city known for its iconic skyscrapers like the Burj Khalifa, luxury shopping, and innovative architecture. Famous for its vibrant tourism, world-class attractions, and rich Emirati culture, Dubai seamlessly blends modernity with tradition, making it a top destination for travelers worldwide. <br><br><img src='https://petapixel.com/assets/uploads/2021/02/Dubai2021_AlbertDros-9-800x574.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSAP0' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://www.travelplusstyle.com/wp-content/uploads/2013/02/Dubai-1512.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/200310023921-dubai-buildings-skyline.jpg?q=w_2000,c_fill' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 876, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("galapagos")||lowerMessage.includes("galápagos")) {
  return "The Galápagos Islands, an archipelago in the Pacific Ocean off Ecuador, are celebrated for their pristine ecosystems and incredible wildlife, including giant tortoises, marine iguanas, and flightless cormorants. With volcanic landscapes and a unique array of endemic species, the islands are a natural wonder and a bucket-list destination for travelers seeking unspoiled beauty and adventure. <br><br><img src='https://www.travelandleisure.com/thmb/WzL019sDotA4SIo4bacRrE4j_N0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/galapagos-islands-ecuador-GALAPA1104-d013219debf14369ab5039a4eafb496e.jpg' width='200'><br><br><img src='https://silversea-discover.imgix.net/2019/11/DANCE_BLUE_FB.png?auto=compress%2Cformat&ixlib=php-3.3.1' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://preview.redd.it/some-tortoise-photos-from-the-galapagos-v0-r87ah2vwlpad1.jpg?width=640&crop=smart&auto=webp&s=a65516187e38fa103d1d9baf6eaca1c1635d0598' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 879, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("singapore changi")) {
  return "Singapore Changi Airport is one of the world's busiest and most awarded airports, known for its exceptional services, efficiency, and world-class amenities. With attractions like a butterfly garden, swimming pool, and extensive shopping and dining options, it offers a seamless and enjoyable travel experience for passengers. <br><br><img src='https://assets.architecturaldigest.in/photos/600835c154beb9e516da82c8/16:9/w_2560%2Cc_limit/Singapore-Jewel-Changi-Airport-Getty-Featured-Image-1366x768.jpg' width='200'><br><br><img src='https://www.securitymagazine.com/ext/resources/images/Changi20Airport20Control20Tower20and20Jewel20Changi20Airport.jpg?1612795926' alt='Singapore Changi Airport' width='200'><br><br><img src='https://design-milk.com/images/2024/07/Singapore-Airport-Changi-Terminal-BOIFFILS-Garden-City-2.jpg' alt='An internet connection is required to view this image' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 891, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (
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
  return undefined;
}});

window.registerKnowledgeRule({ order: 933, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("air") && lowerMessage.includes("koryo")) {
  return "Air Koryo is the national airline of North Korea, known for being one of the few international airlines that operate flights in and out of the country. It was established in 1955 and offers both domestic and international flights, though the routes are relatively limited compared to major global carriers.<br><br>The airline has a somewhat infamous reputation due to its fleet, which is made up of older Soviet-era aircraft, such as the Tupolev Tu-204 and the Ilyushin Il-62. Many travelers have mentioned that flying with Air Koryo feels like a step back in time, with the airline's services and amenities being relatively basic.<br><br>Some adventurous travelers, particularly those interested in experiencing a very different culture or traveling to North Korea, opt to fly with Air Koryo for the novelty and unique experience.<br><br>Would you be interested in flying with them?<br><br><img src='https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/09/shutterstock_1128726809-1.jpg' width='200'><br><br><img src='https://media.cnn.com/api/v1/images/stellar/prod/160630221016-north-korea-air-koryo-tu-204-cabin.jpg?q=w_1110,c_fill' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 943, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("dji")
   &&
  !lowerMessage.includes("bouti") 
  ) {
  return "DJI (Dà-Jiāng Innovations Science and Technology Co., Ltd.) is a Chinese technology company that is a leading manufacturer of unmanned aerial vehicles (UAVs), commonly known as drones. Founded in 2006, DJI is known for producing high-quality consumer and professional drones, including the popular Phantom, Mavic, and Inspire series. The company also develops drone accessories, camera stabilization systems, and other technologies related to aerial imaging and robotics. DJI is recognized for its innovations in drone flight control systems, cameras, and stabilizers, making it a dominant player in the global drone market.<br><br><img src='https://m.media-amazon.com/images/I/61Dk8UJAYcL.jpg' alt='DJI drone' width='200'>";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1050, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("i") && lowerMessage.includes("visit") && lowerMessage.includes("yemen")) {
  return "While Yemen is a beautiful country, it is essential to understand that traveling to Yemen is currently extremely dangerous and difficult because of the ogoing civil war. I recommend you wait until a better time before you book your trip. Safe travels! 🧳✈️🌍🇾🇪";
  }
  return undefined;
}});

window.registerKnowledgeRule({ order: 1057, language: "english", category: "travel", run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("palau")) {
  return "Palau is a small island country in the western Pacific Ocean. It has over 300 islands, with beautiful beaches, clear blue water, and coral reefs. The capital is Ngerulmud, and the main languages are Palauan and English. Palau is famous for scuba diving, snorkeling, and its marine life. One special place is Jellyfish Lake, where people can swim with harmless jellyfish. The country is peaceful and friendly, and nature is protected very well. It’s a great place for people who love the ocean and quiet islands.<br><br><img src='https://whc.unesco.org/uploads/thumbs/news_2621-890-520-20231106111720.jpg' width='200'><br><br><img src='https://images.squarespace-cdn.com/content/v1/58b7fcb12e69cfd0f442f15a/1712797297592-05J5Q8SSR9JLZKZUOCOH/PLW_Palau_Rock-Island-Aireal-%C2%A9-Adobe-Stock_48181456_1900.jpg?format=1500w' width='200'><br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/334433551/900' width='200'><br><br><img src='https://www.goworldtravel.com/wp-content/uploads/2020/02/swimming-in-jellyfish-lake-768x576.jpg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg' width='200'>";
  }
  return undefined;
}});
