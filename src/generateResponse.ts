import crypto from "crypto";

const responses = [
  "It is certain.",
  "Ask again later.",
  "Don't count on it.",
  "Better not tell you now.",
  "Yes.",
  "My sources say no.",
  "Cannot predict now.",
  "Outlook good.",
  "Concentrate and ask again.",
  "Very doubtful.",
  "Outlook not so hot dog.",
  "The magic 8-ball is on lunch break. Try again later.",
  "Better not tell you now, my lawyer advised me against it.",
  "My sources say 'ask again after happy hour.'",
  "You're barking up the wrong 8-ball.",
  "Signs point to a nap first.",
  "It is decidedly so... on opposite day.",
  "Ask again once you've finished your homework.",
  "Yes, but only if you dance the Macarena first.",
  "Don't count on it, unless you're counting sheep.",
  "Reply hazy, ask again after you've had your coffee.",
  "Ask again later, the 8-ball is in a game of ping pong.",
  "My reply is no, but my heart says yes... to pizza.",
  "It is certain, but only in an alternate universe.",
  "Cannot predict now, the 8-ball is currently at a yoga class.",
  "Outlook good, but only if you've brought snacks.",
  "Signs point to yes, but my horoscope says otherwise.",
  "Without a doubt, but only if you're willing to wear a tutu.",
  "Yes, but only if you sing the 8-ball a lullaby.",
  "My sources say no, but they're a little drunk at the moment.",
  "Reply hazy, try again with a more sophisticated question.",
  "My code of ethics prohibits me from answering that question.",
  "I don't know, I'm just a ball with a number on it.",
  "No way, José!",
  "Yes, if you bribe me with chocolate.",
  "It's a mystery, but not the good kind like on TV.",
  "The answer is blowing in the wind, go chase it.",
  "I'm feeling extra mystical today, ask again later.",
  "The stars say no, but what do they know?",
  "You're asking the wrong magic 8-ball, I'm just a knockoff.",
  "My psychic powers are out of office today.",
  "It is certain... that I could really use a coffee.",
  "All signs point to chaos theory.",
  "The answer is written on a Post-it note on the underside of your desk. Good luck finding it!",
  "Error 404: Answer not found.",
  "My sources say 'let's not and say we did.'",
  "Reply hazy, try again after you've done 10 jumping jacks.",
  "The Magic 8-Ball is feeling a little rebellious today. Ask again later.",
  "It is certain... that you need to shake the 8-ball again. This time, do it while standing on one foot and singing 'I Will Survive.'",
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "Outlook not so good, unless you're a pineapple. Pineapples always win.",
  "My horoscope says you're out of luck, but my gut says you're awesome. Let's go with the gut.",
];

export default function generateEightBallResponse() {
  const randomSize = crypto.randomBytes(1)[0];
  const randomValues = crypto.randomBytes(randomSize);
  const randomIndex =
    randomValues[Math.floor(Math.random() * randomSize)] % responses.length;
  return responses[randomIndex];
}
