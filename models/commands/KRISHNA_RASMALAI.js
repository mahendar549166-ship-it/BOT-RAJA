const fs = require("fs");
module.exports.config = {
  name: "rasmalai",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("rasmalai") ||
     react.includes("Rasmalai") ||
     react.includes("RASMALAI") ||
react.includes("RaSmAlAi")) {
    var msg = {
        body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆✦𝐊𝐫𝐢𝐬𝐡𝐧𝐚 𝐁𝐚𝐛𝐮✦\n\n★━━━━━━━━━━━━━★\n   𝐊𝐡𝐚 𝐥𝐨 𝐦𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 🙈\n★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/rasmalai.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍨", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
