const fs = require("fs");
module.exports.config = {
        name: "heppy raksha bandhan",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "KRISHNA", 
        description: "THIS BOT IS AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("happy raksha bandhan") ||
     react.includes("Heppy raksha bandhan") || react.includes("Heppy Raksha bandhan") || react.includes("Heppy Raksha Bandhan") ||
react.includes("HEPPY RAKSHA BANDHAN") ||
react.includes("HePpY RaKsHa BaNdHaN")) {
                var msg = {
                                body: `*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ. ༄𒁍≛⃝𝐊𝐑𝐈𝐒𝐇𝐍𝐀🍒💝\n❥────────────────────❥\n𝐇𝐄𝐏𝐏𝐘 𝐑𝐀𝐊𝐒𝐇𝐀 𝐁𝐀𝐍𝐃𝐇𝐀𝐍 💖🌸🍒\n❥────────────────────❥\n𝐀𝐀𝐏𝐊𝐎 𝐎𝐑 𝐀𝐀𝐏𝐊𝐄 𝐏𝐀𝐑𝐈𝐕𝐀𝐑 𝐇𝐀𝐑𝐃𝐈𝐊 𝐀𝐔𝐁𝐇𝐊𝐀𝐌𝐍𝐀𝐘 🥀💖🌸🍒\n❥────────────────────❥\n🌟 भाई-बहन का रिश्ता है सबसे प्यारा,\n🎀 राखी का बंधन है सबसे नज़ारा।\n💞 तेरी खुशियों की दुआ करती हूँ मैं\n🛡️ हर मुश्किल में तेरा साथ दूँगी मैं।`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🩵", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
