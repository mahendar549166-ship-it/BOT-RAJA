const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "radhe-radhe",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "ARYAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/qNBc7Pt.gif",
                "https://i.imgur.com/aJcN3vz.gif",
                "https://i.imgur.com/DyEfZKz.gif",
                "https://i.imgur.com/7oTvCWC.gif",
                "https://i.imgur.com/0YAGLIN.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷💝🙏ʝ𝗔ɣ 𝐬ɧr᩶ɘɘ ƙr᩶i͠𝐬ɧɳ𝗔 🙏💫💝\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷💝🙏ʝ𝗔ɣ 𝐬ɧr᩶ɘɘ ƙr᩶i͠𝐬ɧɳ𝗔 🙏💫💝\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷💝🙏ʝ𝗔ɣ 𝐬ɧr᩶ɘɘ ƙr᩶i͠𝐬ɧɳ𝗔 🙏💫💝\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷💝🙏ʝ𝗔ɣ 𝐬ɧr᩶ɘɘ ƙr᩶i͠𝐬ɧɳ𝗔 🙏💫💝\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷💝🙏ʝ𝗔ɣ 𝐬ɧr᩶ɘɘ ƙr᩶i͠𝐬ɧɳ𝗔 🙏💫💝\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("radhe radhe") || 
                                event.body.toLowerCase().startsWith("Radhe radhe") || 
                                event.body.toLowerCase().startsWith("Radhe Radhe") ||
                                event.body.toLowerCase().startsWith("RADHE RADHE") || 
                                event.body.toLowerCase().startsWith("jay shree krishna") ||
                                event.body.toLowerCase().startsWith("Jay shree krishna") || 
                                event.body.toLowerCase().startsWith("Jay Shree Krishna") || 
                                event.body.toLowerCase().startsWith("JAY SHREE KRISHNA") ||
                                event.body.toLowerCase().startsWith("Jay Shree Shyam") ||
                                event.body.toLowerCase().startsWith("jay shree shyam") || 
                                event.body.toLowerCase().startsWith("Jay Shree shyam") ||
                                event.body.toLowerCase().startsWith("JAY SHREE SHYAM") ||
                                event.body.toLowerCase().startsWith("Jay Shree Krishna")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'love-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🙏", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
