const fs = require("fs");
module.exports.config = {
        name: "lassi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "lassi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("lassi")==0 || event.body.indexOf("Lassi")==0 || event.body.indexOf("LASSI")==0 || event.body.indexOf("LASSEE")==0) {
                var msg = {
                                body: "꧁•🦋✨🍁❉‌‌্᭄...─┼\n𝗢𝗪𝗡𝗘𝗥   ➻  𝐒ɧɣ𝗔ɱ 𝐃i͠Ꮗ𝗔ɳi͠ \n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂ \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐋𝐚𝐒𝐒𝐢\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/d190b09072f95cf62eda8634c130be8c.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥛", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
