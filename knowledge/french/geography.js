// Chatbot Version 7 knowledge — french / geography
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'french', category: 'geography', run: function(lowerMessage, userMessage, lang) {
  if (lowerMessage.includes("list") && lowerMessage.includes("every country") && lowerMessage.includes("world")) {
    return "1. Afghanistan, 2. Albania, 3. Algeria, 4. Andorra, 5. Angola, 6. Antigua and Barbuda, 7. Argentina, 8. Armenia, 9. Australia, 10. Austria, 11. Azerbaijan, 12. Bahamas, 13. Bahrain, 14. Bangladesh, 15. Barbados, 16. Belarus, 17. Belgium, 18. Belize, 19. Benin, 20. Bhutan, 21. Bolivia, 22. Bosnia and Herzegovina, 23. Botswana, 24. Brazil, 25. Brunei, 26. Bulgaria, 27. Burkina Faso, 28. Burundi, 29. Cabo Verde, 30. Cambodia, 31. Cameroon, 32. Canada, 33. Central African Republic, 34. Chad, 35. Chile, 36. China, 37. Colombia, 38. Comoros, 39. Democratic Republic of the Congo, 40. Republic of the Congo, 41. Costa Rica, 42. Croatia, 43. Cuba, 44. Cyprus, 45. Czechia, 46. Denmark, 47. Djibouti, 48. Dominica, 49. Dominican Republic, 50. East Timor, 51. Ecuador, 52. Egypt, 53. El Salvador, 54. Equatorial Guinea, 55. Eritrea, 56. Estonia, 57. Eswatini, 58. Ethiopia, 59. Fiji, 60. Finland, 61. France, 62. Gabon, 63. Gambia, 64. Georgia, 65. Germany, 66. Ghana, 67. Greece, 68. Grenada, 69. Guatemala, 70. Guinea, 71. Guinea-Bissau, 72. Guyana, 73. Haiti, 74. Honduras, 75. Hungary, 76. Iceland, 77. India, 78. Indonesia, 79. Iran, 80. Iraq, 81. Ireland, 82. Israel, 83. Italy, 84. Ivory Coast, 85. Jamaica, 86. Japan, 87. Jordan, 88. Kazakhstan, 89. Kenya, 90. Kiribati, 91. Kosovo, 92. Kuwait, 93. Kyrgyzstan, 94. Laos, 95. Latvia, 96. Lebanon, 97. Lesotho, 98. Liberia, 99. Libya, 100. Liechtenstein, 101. Lithuania, 102. Luxembourg, 103. Madagascar, 104. Malawi, 105. Malaysia, 106. Maldives, 107. Mali, 108. Malta, 109. Marshall Islands, 110. Mauritania, 111. Mauritius, 112. Mexico, 113. Micronesia, 114. Moldova, 115. Monaco, 116. Mongolia, 117. Montenegro, 118. Morocco, 119. Mozambique, 120. Myanmar, 121. Namibia, 122. Nauru, 123. Nepal, 124. Netherlands, 125. New Zealand, 126. Nicaragua, 127. Niger, 128. Nigeria, 129. North Korea, 130. North Macedonia, 131. Norway, 132. Oman, 133. Pakistan, 134. Palau, 135. Palestine, 136. Panama, 137. Papua New Guinea, 138. Paraguay, 139. Peru, 140. Philippines, 141. Poland, 142. Portugal, 143. Qatar, 144. Romania, 145. Russia, 146. Rwanda, 147. Saint Kitts and Nevis, 148. Saint Lucia, 149. Saint Vincent and the Grenadines, 150. Samoa, 151. San Marino, 152. São Tomé and Príncipe, 153. Saudi Arabia, 154. Senegal, 155. Serbia, 156. Seychelles, 157. Sierra Leone, 158. Singapore, 159. Slovakia, 160. Slovenia, 161. Solomon Islands, 162. Somalia, 163. South Africa, 164. South Korea, 165. South Sudan, 166. Spain, 167. Sri Lanka, 168. Sudan, 169. Suriname, 170. Sweden, 171. Switzerland, 172. Syria, 173. Taiwan, 174. Tajikistan, 175. Tanzania, 176. Thailand, 177. Togo, 178. Tonga, 179. Trinidad and Tobago, 180. Tunisia, 181. Turkey, 182. Turkmenistan, 183. Tuvalu, 184. Uganda, 185. Ukraine, 186. United Arab Emirates, 187. United Kingdom, 188. United States, 189. Uruguay, 190. Uzbekistan, 191. Vanuatu, 192. Vatican City, 193. Venezuela, 194. Vietnam, 195. Yemen, 196. Zambia, 197. Zimbabwe.";
    }
  else if (lowerMessage.includes("france")) {
    return "France is a country in Western Europe, famous for its fashion, cuisine, art, and landmarks such as the Eiffel Tower and the Louvre Museum. It is a global center for culture and diplomacy. <br><br><img src='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg' alt='An internet connection is required to view this image' width='200'><br><br><img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png' alt='An internet connection is required to view this image' width='200'>";
    }
  else if (
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
  return undefined;
}});
