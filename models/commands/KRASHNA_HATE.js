//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "hate-you",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("I hate you") ||
     react.includes("i hate you") || react.includes("I HATE YOU") || react.includes("hate") ||
react.includes("Hate") ||
react.includes("HATE")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★\n  😹 i͠ ɧ𝗔𝗧ɘ ɣ❍𝘂 𝗧❍ ßɘßɣ  😹 \n★━━━━━━━━━━━━━★\n c͠ɧ𝗔ɭ❍ ɘ𝐬ɘ p᩶i͠c͠ɧ𝗔 c͠ɧɧ𝘂𝗧𝗔 𝗔ß ƙ❍i͠ ❍r᩶ p᩶𝗔r᩶ ɭi͠ɳɘ ɱ𝗔r᩶𝗧i͠ ɧ𝘂 😂😆😁`,attachment: fs.createReadStream(__dirname + `/noprefix/hate.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
