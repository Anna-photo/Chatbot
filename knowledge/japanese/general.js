// Chatbot Version 7 knowledge — japanese / general
// This file keeps the original Version 6.7 trigger style.
// Add new knowledge by adding another "else if (...) { return ...; }" before the final return undefined;

window.registerKnowledgeModule({ language: 'japanese', category: 'general', run: function(lowerMessage, userMessage, lang) {
  if (
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
  else if (lowerMessage.includes("ありがとう") || lowerMessage.includes("ありがとうございます") || lowerMessage.includes("どうもありがとう")) {
      return "どういたしまして！お手伝いできて嬉しいです。";
    }
  else if (lowerMessage.includes("こんにちは")) {
      return "こんにちは！本日はどのようなご用件でしょうか？";
    }
  else if (lowerMessage.includes("私の言葉が聞こえます")) {
    return "わかりました！私が助けることができることはありますか？";
    }
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
  else if (lowerMessage.includes("私は") && lowerMessage.includes("決して") && lowerMessage.includes("使わない") && lowerMessage.includes("あなた") && lowerMessage.includes("再び")) {
        return "それを聞いて残念です。私は最善を尽くしているので、また来てくれることを願っています。";
    }
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
  else if (lowerMessage.includes("私は幸せです")) {
    return "これは素晴らしいですね！何かお手伝いしましょうか？";
    }
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
  return undefined;
}});
