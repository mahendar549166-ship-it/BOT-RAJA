const fs = require("fs");
module.exports.config = {
	name: "KHANA",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ram ram") ||
     react.includes("Jay shree Ram") || react.includes("Jay shree ram") || react.includes("Jay Shree Ram") ||
react.includes("jay shree ram") ||
react.includes("JAY SHREE RAM")) {
		var msg = {
				body: ``,attachment: fs.createReadStream(__dirname + `/noprefix/radhe.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
