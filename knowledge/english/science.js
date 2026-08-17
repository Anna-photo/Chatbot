// Chatbot Version 7 knowledge — english / science
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'english', category: 'science', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("astronaut") && lowerMessage.includes("how") && lowerMessage.includes("become")) {
      return "Becoming an astronaut is a challenging but exciting goal! Here are the general steps to follow: <br><br>" +
             "<b>1. Get a solid education:</b> Most astronauts have a background in engineering, physical science, or mathematics. A bachelor's degree in a related field is a good start, but many astronauts go on to get a master's degree or even a PhD.<br><br>" +
             "<b>2. Gain relevant experience:</b> Experience in fields like aviation, engineering, or piloting aircraft is often required. Many astronauts have worked as engineers, scientists, or military pilots before applying to space programs.<br><br>" +
             "<b>3. Apply to space programs:</b> Agencies like NASA, ESA (European Space Agency), or private companies like SpaceX recruit astronauts periodically. Be sure to watch for announcements about astronaut selection programs and apply when you're eligible.<br><br>" +
             "<b>4. Pass physical and mental tests:</b> Astronauts need to be in excellent physical shape and have the mental toughness to handle long periods in space. This includes passing vision, health, and psychological tests.<br><br>" +
             "<b>5. Complete astronaut training:</b> Once selected, you'll go through rigorous training that includes simulations, learning to operate spacecraft, surviving in space environments, and becoming familiar with spacewalks and scientific experiments.<br><br>" +
             "<b>6. Stay dedicated:</b> Becoming an astronaut is a long and challenging process. Stay focused on your education, career, and physical fitness, and keep applying until you make it!";
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
  else if (lowerMessage.includes("make") && lowerMessage.includes("picture")) {
    return "⚠️ Oops! There was an error generating this image. Please try again later.";
    }
    
    
    // Weather
  else if (lowerMessage.includes("weather")) {
    return "Oops! An error occurred while checking the weather, but I hope it's nice where you are!";
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
  else if (lowerMessage.includes("emoji for rain") || lowerMessage.includes("emoji for storm") || lowerMessage.includes("emoji for weather")) {
    return "For rain, try these: 🌧️⛈️🌦️💧";
    }
    
    // English: How are you?
  else if (lowerMessage.includes("singapore airlines") && lowerMessage.includes("reliable")) {
    return `Singapore Airlines is known for its excellent reliability. Here's a photo of the airline: ![Singapore Airlines](https://example.com/singapore-airlines.jpg)`;
    }
  else if (lowerMessage.includes("the line") || lowerMessage.includes("neom city")) {
      return `The Line, a visionary urban development within Saudi Arabia's NEOM project, is designed as a linear city stretching 170 kilometers (105 miles) in length and just 200 meters (656 feet) in width. Its innovative design aims to eliminate the need for cars and streets, promoting a car-free environment. <br><br>The city is structured in three levels: the top level for pedestrians, an underground layer for essential services, and another underground level dedicated to high-speed transportation, enabling traversals from end to end in approximately 20 minutes.<br><br>The Line is planned to operate entirely on renewable energy sources, aligning with Saudi Arabia's Vision 2030 to diversify its economy and reduce carbon emissions.<br><br>Construction commenced in 2022, with the first phase expected to be completed by 2030.<br><br>
      <img src='https://neom.scene7.com/is/image/neom/line-bottom-desktop?wid=1920&hei=1065' width='200'><br><br>
      <img src='https://static.designboom.com/wp-content/uploads/2012/08/NEOM-the-line-saudi-arabia-vertical-city-designboom-600.jpg' width='200'><br><br>
      <img src='https://neom.scene7.com/is/image/neom/line-c58-d-no-gradient?wid=1920&hei=1120' width='200'>`;
    }
  else if (lowerMessage.includes("george washington") || lowerMessage.includes("who was the first president") || lowerMessage.includes("george")) {
    return `George Washington (1732–1799) was the first President of the United States, serving from 1789 to 1797. He is known as one of the Founding Fathers and played a pivotal role in the American Revolutionary War as the commander-in-chief of the Continental Army. Washington's leadership helped secure American independence from Britain. He also presided over the Constitutional Convention in 1787, which led to the creation of the U.S. Constitution. His leadership and commitment to democratic principles earned him the title "Father of His Country." <br>
    <br>
    <img src=https://images.squarespace-cdn.com/content/v1/5f189980db5cb01fc34a47f5/1626465746859-REQSBKLNKQAGG6ZZPPGW/gw-landsdowne-portrait.jpg' width='200'>`;
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("was")&& lowerMessage.includes("kidnap")) {
      return "Oh no! I am so sorry to hear you’re going through this. I recommend you contact emergency services if possible.";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("be")&& lowerMessage.includes("kidnap")) {
      return "Oh no! This is a very dangerous and serious situation. If possible, contact emergency services immediately. Try to keep yourself as safe as possible.";
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
  else if (lowerMessage.includes("peux-je changer ta voix") || lowerMessage.includes("peux-je changer la voix")) {
        return "Non, il n'est pas possible de changer ma voix. Cependant, vous pouvez changer la langue, ce qui changera ma voix pour celle de cette langue.";
    }
  else if (lowerMessage.includes("shanghai tower")) {
      return "The Shanghai Tower is the tallest building in China and the second-tallest in the world, standing at 632 meters (2,073 feet). Located in the Lujiazui area of the city's financial district, it has 128 floors and is designed to look like a spiraling, twisting glass tower. Completed in 2015, it features advanced technologies for sustainability and energy efficiency. Visitors can enjoy spectacular views from the observation deck on the 118th floor. <br><br><img src='https://static2.gensler.com/uploads/image/95572/hero-1600x900_1734561727.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NVZgs4BcLu8jeYI4qkm8-cJhvS3u7FrbVQ&s' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("audubon") &&
    lowerMessage.includes("photo")) {
    return "The Audubon Photography Awards are an annual competition celebrating bird photography and promoting bird conservation. Presented by the National Audubon Society, the awards recognize both amateur and professional photographers who capture stunning images of North American birds. Categories include the Grand Prize, Amateur, Professional, and a People’s Choice Award, with the winning photos showcased in Audubon magazine and exhibitions. The awards aim to highlight the beauty of birds and raise awareness about the importance of protecting their habitats.<br><br>Audubon died on January 27, 1851, but his work remains a symbol of the intersection between art, science, and a deep appreciation for the natural world.<br><br><img src='https://media.audubon.org/2023-05/Web_APA_Grid.jpg' width='200'><br><br>2023 Audubon Photography Awards<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyagdaVU1iCn1qQ0z_AyiynqkvT8Yittebw&s' width='200'>";
    }
  else if (lowerMessage.includes("okinawa") &&lowerMessage.includes("long")&& lowerMessage.includes("li")) {
    return "Okinawans are known for their exceptional longevity, with many living well into their 90s or even 100s. This remarkable lifespan is largely attributed to a combination of lifestyle factors, including their diet, physical activity, social connections, and positive outlook. One of the key contributors is their traditional diet, which is rich in vegetables like sweet potatoes, green leafy vegetables, and seaweed. These foods are packed with nutrients and antioxidants. Okinawan cuisine is also low in calories, with a focus on plant-based foods and small portions of fish and meat. The practice of eating until they are “Hara Hachi Bu,” meaning eating until they are 80% full, is another factor that helps maintain a healthy weight and reduces risks associated with obesity.<br><br>In addition to diet, regular physical activity is a big part of life for Okinawans. Many stay active well into their later years, with daily activities such as walking, gardening, and traditional exercises like tai chi. The natural beauty of Okinawa encourages outdoor living, contributing to both physical and mental well-being. Social connections also play a significant role in Okinawan longevity. Okinawans often have strong, supportive communities, and the concept of moai — a close-knit group of friends or a social network — helps reduce stress and foster emotional health. This sense of connection and belonging is crucial for mental well-being, which in turn supports a longer, healthier life.<br><br>Furthermore, Okinawans maintain a sense of purpose throughout their lives, known as ikigai, which is the idea of having a reason to wake up each day. Whether it’s through work, family, or hobbies, having a purpose helps keep the mind active and promotes happiness. The slower, more relaxed pace of life in Okinawa also contributes to lower stress levels, which is a key factor in their long lives. Finally, genetics may play a role, with studies suggesting that Okinawans may have certain genetic traits that help protect against diseases and promote a longer life. All these factors come together to create a lifestyle that promotes longevity, health, and happiness.";
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
  else if (lowerMessage.includes("2 peter 1:3") || lowerMessage.includes("2 peter one three") || lowerMessage.includes("2 peter 1 3")) {
      return "2 Peter 1:3 - His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence.";
    }
  else if (lowerMessage.includes("what is the temperature") || lowerMessage.includes("what's the temperature") || lowerMessage.includes("current temperature") || lowerMessage.includes("temperature")) {
      return "I'm sorry, I can't access live weather data directly, but you can check the current temperature using a weather service or app.";
    }
  else if (lowerMessage.includes("china")) {
    return "China is the most populous country in the world, known for its ancient civilization, modern economy, and technological innovations. It is a global power in many fields.<br><br> <img src='https://nationalparks-15bc7.kxcdn.com/images/parks/beijing-great-wall/China%27s%20Great%20Wall%20national%20park%20area.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-li-river.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://danielkordan.com/wp-content/uploads/2018/09/382039059027329034-1030x643.jpg' alt='An internet connection is required to view this image' width='200'><br><br> <img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/cn.svg' alt='An internet connection is required to view this image' width='200'>";
    }
  return undefined;
}});
