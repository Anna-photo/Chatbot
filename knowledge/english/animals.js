// Chatbot Version 7 knowledge — english / animals
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'english', category: 'animals', run: function(lowerMessage, userMessage, lang) {
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
  else if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("ate")&& lowerMessage.includes("pufferfish")) {
        return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
               "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
               "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
               "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
               "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
               "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
               "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
               "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("got")&& lowerMessage.includes("pufferfish")) {
        return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
               "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
               "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
               "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
               "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
               "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
               "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
               "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("eat")&& lowerMessage.includes("fugu")) {
        return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
               "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
               "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
               "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
               "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
               "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
               "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
               "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("ate")&& lowerMessage.includes("fugu")) {
        return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
               "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
               "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
               "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
               "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
               "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
               "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
               "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("poison")&& lowerMessage.includes("got")&& lowerMessage.includes("fugu")) {
        return "🚨 <b>Fugu poisoning is extremely dangerous and can be fatal. Seek emergency medical help immediately!</b> 🚨\n\n<br><br>" +
               "Fugu (pufferfish) contains <b>tetrodotoxin</b>, a potent neurotoxin that can cause:\n\n<br><br>" +
               "🔹 <b>Numbness or tingling</b> in the lips, tongue, and extremities\n<br><br>" +
               "🔹 <b>Dizziness, nausea, and vomiting</b>\n<br><br>" +
               "🔹 <b>Paralysis and difficulty breathing</b>\n<br><br>" +
               "🔹 <b>Loss of consciousness and, in severe cases, death</b>\n\n<br><br>" +
               "⚠️ <b>There is no known antidote. Immediate medical intervention is crucial.</b> ⚠️\n\n<br><br>" +
               "<b>Call emergency services right now or go to the nearest hospital emergency room. Do not wait for symptoms to worsen!</b>";
    }
  else if (lowerMessage.includes("you") && lowerMessage.includes("invad")&& lowerMessage.includes("privacy")) {
    return `I am really sorry. However, to my knowledge, there is no way at all I am able to invade your privacy. Let me know if I can clarify anything else.`;
    }
  else if (lowerMessage.includes("coming") && lowerMessage.includes("tornado")) {
      return "That sounds very dangerous and concerning. If a tornado is approaching, it is important to find shelter right away. If you are in your house, then go to a windowless room in the lowest level of your home. Stay safe!";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("see") && lowerMessage.includes("tornado")) {
      return "That sounds very dangerous and concerning. If a tornado is approaching, it is important to find shelter right away. If you are in your house, then go to a windowless room in the lowest level of your home. Stay safe!";
    }
  else if (lowerMessage.includes("how") && lowerMessage.includes("much") && lowerMessage.includes("doggy")&& lowerMessage.includes("window")) {
      return "Sure! Here I go:<br><br>How much is that doggy in the window? That dog with a waggily tail. <br><br>How much is that doggy in the window? I do hope that doggy’s for sale. Wuff! Wuff! 🐕🐶🐕‍🦺🐩 ";
    }
  else if (lowerMessage.includes("is") && lowerMessage.includes("you") && lowerMessage.includes("info") && lowerMessage.includes("accurate")) {
    return "Yes, my knowledge is mostly accurate. However, I only know things that are programmed into me. Make sure to double check important information.";
    }
  else if (lowerMessage.includes("can i trust you")) {
    return "Yes! You can definitely trust me! My knowledge is almost always accurate. However, I understand that you may be hesitant to trust a robot.";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("under")&& lowerMessage.includes("attack")) {
    return "Oh no! What is going on? If you are in danger, you need to go to a safe location and/or call emergency services immediately. Let me know if I can help you.";
    }
  else if (lowerMessage.includes("Quel temps fait-il")) {
    return "Oups ! Une erreur s'est produite lors de la vérification de la météo, mais j'espère qu'il fait beau chez vous !";
    }
    
    // 天氣
  else if (lowerMessage.includes("akikiki")) {
    return "The Akikiki (Oreomystis bairdi) is a small, critically endangered bird native to the Hawaiian Islands, specifically Kaua'i. This species is part of the Hawaiian honeycreeper group, a unique family of birds endemic to the Hawaiian islands that occupy various ecological niches in Hawaii. The Akikiki was once a common sight in the island's high-elevation rainforests, but its numbers have plummeted due to several threats.<br><br>Sadly, as of January 2025, only two known Akikiki remain in the wild, with the last confimred sighting occurring in September 2024. Experts estimate the species could be extinct in the next few months. The primary threats to their survival include habitat loss, predation by invasive species, and avian malaria, which has severely impacted their population.<br><br>Despite efforts like captive breeding programs, the survival of the species is in jeopardy. The Akikiki is now considered functionally extinct in the wild, and without immediate intervention, the bird could vanish completely.<br><br>The situation is critical, and without drastic conservation actions, the Akikiki may soon be lost forever.<br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/148373101/2400' alt='An internet connection is required to view this image' width='200'> <br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/357548971/2400' alt='An internet connection is required to view this image' width='200'> ";
    }
  else if (lowerMessage.includes("maui parrotbill") || lowerMessage.includes("kiwikiu")) {
    return "The Maui Parrotbill (Pseudonestor xanthophrys) is critically endangered  is sadly estimated to become extinct in the next few years. With a population dwindling to only a handful of individuals, the species now survives solely within the Waikamoi Preserve on East Maui, where ongoing conservation efforts are aimed at protecting its last remaining habitat. The Maui Parrotbill, with its distinctive parrot-like bill, feeds on insects hidden beneath tree bark, but the bird faces threats from habitat loss, invasive species, and diseases like avian malaria. Despite efforts to protect it, including captive breeding programs, the future of the Maui Parrotbill is uncertain, and without immediate intervention, it may soon be lost forever.<br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/475619151/1200' alt='An internet connection is required to view this image' width='200'> <br><br><img src='https://cdn.download.ams.birds.cornell.edu/api/v2/asset/611275201/1200' alt='An internet connection is required to view this image' width='200'> ";
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
  else if (lowerMessage.includes("my") && lowerMessage.includes("drone")&& lowerMessage.includes("crash")) {
      return "Oh no! I hope you are able to recover it! Do you know where it crashed? If available, try using the find my drone function. This will show you the last recorded location of the drone and activate a beeping on the aircraft to help you locate it.";
    }
  else if (lowerMessage.includes("eat pufferfish")) {
    return "Pufferfish can be quite a delicacy in some places, but it’s important to be careful since it contains a potent toxin if not prepared properly. Do you have any specific way you like it prepared?";
    }
  else if (lowerMessage.includes("i live in north korea")) {
    return "Living in North Korea must be quite unique, given its distinct political and cultural landscape. It can also pose some challenges with internet access and communication due to the restrictions in place. How's your experience been so far?";
    }
  else if (lowerMessage.includes("this") && lowerMessage.includes("complicat")) {
    return "No worries! Let me know how I can explain it!";
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
  else if (lowerMessage.includes("are") && lowerMessage.includes("you")&& lowerMessage.includes("smart")&& lowerMessage.includes("?")) {
    return "I try to be as smart as possible! However, I only have the knowledge that is programmed into me. Is there anything I can assist you with?";
    }
  else if (lowerMessage.includes("you") && lowerMessage.includes("do") && lowerMessage.includes("n") && lowerMessage.includes("understand")&& lowerMessage.includes("any")) {
        return "I’m sorry I keep misunderstanding. If this continues to happen, please report a chatbot knowledge issue.";
    }
  else if (lowerMessage.includes("usa") || lowerMessage.includes("united states") &&
    !lowerMessage.includes("president")) {
    return "The United States of America is a large country located in North America, known for its diverse culture, vast landscapes, and global influence. The country is made up of fifty states and a federal district. <br><br><img src='https://morethanjustparks.com/wp-content/uploads/2022/04/grand-canyon1.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("socotra") && !lowerMessage.includes("what about")) {
    return "Socotra, an island off the coast of Yemen in the Arabian Sea, is renowned for its otherworldly landscapes and unique biodiversity, including the iconic Dragon’s Blood Tree. Recognized as a UNESCO World Heritage Site, Socotra is a haven for endemic flora and fauna, offering breathtaking natural beauty and a rich cultural heritage shaped by its isolation. <br><br><img src='https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5326-hdr-pano-32oo.jpg' width='200'><br><br><img src='https://www.photopills.com/sites/default/files/articles/2024/socotra-milky-way-dragon-blood-tree-ramiro-torrents.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://i.pinimg.com/736x/f5/77/25/f5772560b346e829328b28f76d13f378.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://nickschmid.com/wp-content/uploads/Blossom-Of-Peace_2023_by-Nick-Schmid.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl079-60d15bfac5aaa__880.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://static.boredpanda.com/blog/wp-content/uploads/2021/06/owl023-60d15be582495__880.jpg' width='200'>";
    }
  else if (lowerMessage.includes("australia")) {
    return "Australia is a country and continent known for its unique wildlife, beautiful beaches, and vibrant cities. It is famous for the Great Barrier Reef and the Outback. <br><br><img src='https://cdn.naturettl.com/wp-content/uploads/2023/11/14214650/australia-landscapes-5.jpg' alt='An internet connection is required to view this image' width='200'<br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZz44yyy5TvL7WpXBnhMN9APRvmKvIUAmrQ&s' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/au.svg' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (lowerMessage.includes("raja ampat")) {
    return "Raja Ampat is a chain of beautiful tropical islands part of the Indonesian side of the island of New Guinea. It is renowned for its world class diving and birding, and is often referred to as The Last Paradise on Earth. Home to many species of bird-of-paradise, many endemic, Raja Ampat is a haven for nature lovers seeking a unique experience.<br><br><img src='https://www.papuaexplorers.com/wp-content/uploads/2016/07/wayag2_home2.jpg' alt='Raja Ampat' width='200'><br><br><img src='https://www.wildlifeworldwide.com/images/galleries/asia_indonesia_raja_ampat_bird_of_paradise_gallery_magnificent_bird_of_paradise_seatrek.jpg' alt='Raja Ampat' width='200'><br><br><img src='https://www.mikumbadiving.com/wp-content/uploads/2023/06/image2-1080x675.jpg' alt='Raja Ampat' width='200'>";
    }
  else if (lowerMessage.includes("lost my phone")) {
      return "Oh no, losing your phone can be stressful! Try retracing your steps to see if you can find it. If you have a device tracker like 'Find My iPhone' or 'Find My Device,' you can use that to locate it. Do you have any memory of the last time you used or saw it? I hope it was not stolen! ";
    }
  else if (lowerMessage.includes("proverbs 3:5-6") || lowerMessage.includes("proverbs 3:5") && lowerMessage.includes("proverbs 3:6") || lowerMessage.includes("proverbs three five six")) {
      return "Proverbs 3:5-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
    }
  else if (lowerMessage.includes("isaiah 40:31") || lowerMessage.includes("isaiah 40 31") || lowerMessage.includes("isaiah forty thirty one")) {
      return "Isaiah 40:31 - But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.";
    }
  else if (lowerMessage.includes("isaiah 40:31") || lowerMessage.includes("isaiah forty thirty one") || lowerMessage.includes("isaiah 40 31")) {
      return "Isaiah 40:31 - But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.";
    }
  else if (lowerMessage.includes("proverbs 3:5-6") || lowerMessage.includes("proverbs three five six") || lowerMessage.includes("proverbs 3 5 6")) {
      return "Proverbs 3:5-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.";
    }
  else if (lowerMessage.includes("ecuador")
     &&
    !lowerMessage.includes("capital") 
    ) {
    return "Ecuador is a diverse country in South America, known for its rich cultural heritage and stunning natural landscapes. It is bordered by Colombia to the north, Peru to the east and south, and the Pacific Ocean to the west. Ecuador is home to the Amazon rainforest, the Andes mountain range, and the Galápagos Islands, a UNESCO World Heritage site famous for its unique wildlife. The capital is Quito, a colonial city nestled in the Andes, while Guayaquil is the largest city and main port. Ecuador offers a wide variety of ecosystems, making it a top destination for nature lovers and birdwatchers.<br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczMoH3J9B6uP-ZYw32A2Cdxs80p9wcQWhGH31Z20d1K1TyTgXb50KNnUuBySo_l-_iq8e1Zy9LjPTGgoD18_tya6yFWmRzLBC6hYhsakiBFNx-mjG03l_ElUOpel5KhV0sIuuS8T0tEuCHO7HavSD7PzKw=w2481-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://www.mashpilodge.com/wp-content/uploads/2023/09/Waterfall-San-Vincente.webp' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczN3MWz1rjLyFaIfrb7Z8GSIFxRQU_Z05Nb3UfDDiRB1PTVjcSUSKoXda2ubY5POiRSOgpc5m3NKf1ECq7XFJ7Kg-ZeG-wf-Csuhm_CF5iKkjgyrVcOGPHm7-FLkcoc_YsfIYhH9GWLiAzqO6jIoJnGqUQ=w2475-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczOlHgRuS-VrU_Kb-G9JNT_J5V3jUevH60IntZoFFq3aJbcHkE_4n1SiTgXsosEkfWGBAkS3MiaQYJMWdgL7l4g_IFkXYlvBTMxLw2WdpN1szv4qFbQMlQ-qpOJTEakyk7K9eJAYlXN_Vh4klbDb9DpB6A=w2481-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://lh3.googleusercontent.com/pw/AP1GczPt0m1PWKvL0gIoIobFV3EgJXsrtgvYcdR6JMXZ6ynvF1uH9ez3Xy9bbMkklMFYnWe0M7Gssl3B67jECDLiofXXrbDMvrge_czqXPMKsfTKMa_Eh4Os38nfSaKeTJ46U0tweLmFNRhhXvZLvMeoxJqq1g=w2478-h1653-s-no-gm?authuser=0' alt='Ecuador' width='200'><br><br><img src='https://ecuadorverdepais.com/wp-content/uploads/2022/12/quilotoa-lake.jpg' alt='Ecuador' width='200'>";
    }
  else if (lowerMessage.includes("i") && lowerMessage.includes("teach") && lowerMessage.includes("you")) {
    return "Thanks for trying to teaching me! Unfortunately, I can’t learn from you. All of my knowledge must be programmed into me.";
    }
  else if (lowerMessage.includes("hong kong")) {
    return "Hong Kong is a unique region of China, located on the southern coast. It’s known for its tall skyscrapers, busy streets, and famous harbor. People mostly speak Cantonese and English. The city blends Chinese and British culture, as it was ruled by Britain until 1997. Hong Kong is popular for shopping, tasty street food, and tourist spots like Victoria Peak and the Star Ferry. Besides the busy city, it also has quiet places like green hills and beaches. It’s a lively, safe place with a mix of modern life and nature. <br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcx2X6AMNP7ql0eFV4bHR-_HTpVUhnleoyg&s' width='200'><br><br><img src='https://velvetescape.com/wp-content/uploads/2011/05/florian-wehde-8bjnP3yhNTg-unsplash-640x450.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3LJauYs43H9MfnlvCdE-x6UV_y5P3koK6w&s' width='200'><br><br><img src='https://amazingfoodanddrink.com/wp-content/uploads/2024/10/a-photo-of-a-variety-of-street-food-in-hong-kong-t-J5Y5Gj5sQBuPpmcDT8dyhQ-zppDGRaiQ4mJdcQhU9nKuw.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png' width='200'>";
    }
  else if (lowerMessage.includes("hong kong")) {
    return "Hong Kong is a unique region of China, located on the southern coast. It’s known for its tall skyscrapers, busy streets, and famous harbor. People mostly speak Cantonese and English. The city blends Chinese and British culture, as it was ruled by Britain until 1997. Hong Kong is popular for shopping, tasty street food, and tourist spots like Victoria Peak and the Star Ferry. Besides the busy city, it also has quiet places like green hills and beaches. It’s a lively, safe place with a mix of modern life and nature. <br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcx2X6AMNP7ql0eFV4bHR-_HTpVUhnleoyg&s' width='200'><br><br><img src='https://velvetescape.com/wp-content/uploads/2011/05/florian-wehde-8bjnP3yhNTg-unsplash-640x450.jpg' width='200'><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3LJauYs43H9MfnlvCdE-x6UV_y5P3koK6w&s' width='200'><br><br><img src='https://amazingfoodanddrink.com/wp-content/uploads/2024/10/a-photo-of-a-variety-of-street-food-in-hong-kong-t-J5Y5Gj5sQBuPpmcDT8dyhQ-zppDGRaiQ4mJdcQhU9nKuw.jpeg' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png' width='200'>";
    }
  else if (lowerMessage.includes("plus") || lowerMessage.includes("minus") || lowerMessage.includes("times") || lowerMessage.includes("divided")) {
    return handleMath(userMessage);
    }
    // Simple math (addition, subtraction, multiplication, division)
  return undefined;
}});
