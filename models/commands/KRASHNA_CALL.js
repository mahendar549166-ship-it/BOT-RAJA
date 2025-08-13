//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "rasmalai",
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
	if(react.includes("call") ||
     react.includes("Call") || react.includes("CALL") || react.includes("coll") ||
react.includes("Coll") ||
react.includes("COLL")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★\n  🥀🍒 मे कैसे आउ कॉल मे तो बोट हु 🥀🍒💖\n★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/call.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
