const fs = require("fs");
module.exports.config = {
        name: "shadi",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "ARYAN",
        description: "THIS BOT IS MR ARYAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("shadi") ||
     react.includes("Shadi") || react.includes("Shadi") || react.includes("SHADI") ||
react.includes("ShAdI") ||
react.includes("sHaDi")) {
                var msg = {
                                body: `𝐁𝐄𝐁𝐘 𝐀𝐀𝐏𝐊𝐈 𝐒𝐇𝐀𝐃𝐈 𝐁𝐇𝐔𝐓 𝐉𝐀𝐋𝐃𝐈 𝐇𝐎𝐆𝐈 𝐁𝐀𝐒 𝐊𝐔𝐂𝐇 𝐓𝐈𝐌𝐄 𝐖𝐀𝐈𝐓 𝐊𝐀𝐑𝐎😁🌸🥀\n★━━━━━━━━━━━━━★\n𝐎𝐑 𝐀𝐀𝐏𝐊𝐈 𝐒𝐇𝐀𝐃𝐈 𝐌𝐄 𝐃𝐀𝐍𝐂𝐄 𝐊𝐀𝐑𝐔𝐍𝐆𝐈 𝐀𝐈𝐒𝐄 👇👇👇 `,attachment: fs.createReadStream(__dirname + `/noprefix/shadi.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💃", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
