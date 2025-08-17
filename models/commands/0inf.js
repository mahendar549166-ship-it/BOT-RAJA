module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"ARIF BABU" ,
  description: "THIS BOT IS MADE BY PRINCE MEGHWANSI",
  usePrefix: true,
  commandCategory: "INFORMATION",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
const juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
var link =                                     
["https://i.ibb.co/NNfZmPF/image.jpg","https://i.ibb.co/LzxXvnQ/image.jpg","https://i.ibb.co/MphKKHp/image.jpg"];
var callback = () => api.sendMessage({body:`◁➽▷ 𝐀𝐃𝐌𝐈𝐍 & 𝐁𝐎𝐓 ◁➽▷\n\n☞𝗕𝗼𝘁 𝗡𝗮𝗺𝗲☜☞${global.config.BOTNAME\n\n*╔══❖•ೋ° °ೋ•❖══╗\n*💋*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  𝐀 𝐊 ⏤͟͟͞͞★\n*╚══❖•ೋ° °ೋ•❖══╝*\n\n➤𝗔𝗗𝗠𝗜𝗡 𝗬𝗢𝗨𝗧𝗨𝗕𝗘➤ \n\n\n🍂𝗣𝗘𝗥𝗙𝗜𝗫🍂 ═➤ 👉🏻${PREFIX}👈🏻\n\n➽ 𝗨𝗣𝗧𝗜𝗠𝗘 ➽\n\n➤ 𝗧𝗢𝗗𝗔𝗬 𝗜𝗦 ➽➤  ${juswa}\n\n𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙉𝙄𝙉𝙂⚡ \n🕛${hours}:${minutes}:${seconds}🕧\n\n✅Thanks for using Sony Bot🖤`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
