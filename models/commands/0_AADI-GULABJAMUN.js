const fs = require("fs");
module.exports.config = {
        name: "gulabjamun",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "jumabjamun",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("julabjamun")==0 || event.body.indexOf("GULABJAMUN")==0 || event.body.indexOf("Gulabjamun")==0 || event.body.indexOf("sargulla")==0) {
                var msg = {
                                body: "=꧁•🦋✨🍁❉‌‌্᭄...─┼\n𝗢𝗪𝗡𝗘𝗥   ➻  𝐒ɧɣ𝗔ɱ 𝐃i͠Ꮗ𝗔ɳi͠ \n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂\n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐆𝐮𝐥𝐚𝐁𝐣𝐚𝐌𝐮𝐧 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pinterest-Foodie-Heaven-Dessert-Recipe-Cake-Recipe-Cooking-Tips-Gulab-Jamun-Recipe.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
