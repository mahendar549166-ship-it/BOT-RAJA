const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "good-morning",
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
                "https://i.imgur.com/EVeZwbd.gif",
                "https://i.imgur.com/lfBAZr3.gif",
                "https://i.imgur.com/nKRf0ee.gif",
                "https://i.imgur.com/Tsfd0xi.gif",
                "https://i.imgur.com/l9XC2We.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("gm") || 
                                event.body.toLowerCase().startsWith("GM") || 
                                event.body.toLowerCase().startsWith("good morning") || 
                                event.body.toLowerCase().startsWith("Good morning") || 
                                event.body.toLowerCase().startsWith("GOOD MORNING") || 
                                event.body.toLowerCase().startsWith("morning") || 
                                event.body.toLowerCase().startsWith("Morning") || 
                                event.body.toLowerCase().startsWith("MORNING")) { 

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
                                                api.setMessageReaction("🌞", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
