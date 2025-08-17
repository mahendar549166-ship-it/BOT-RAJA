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
const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
const hours = moment.tz("Asia/Kolkata").format("HH");
var link =                                     
["https://i.ibb.co/NNfZmPF/image.jpg","https://i.ibb.co/LzxXvnQ/image.jpg","https://i.ibb.co/MphKKHp/image.jpg"];
var callback = () => api.sendMessage({body:`┏━━━━━┓\n     ✦❥⋆⃝𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 ✦                    ✧═══•❁🙊❁•═══✧\n┗━━━━━┛\n\n❁ ═════════ ❃•❃ ═════════ ❁\n         ♥️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ♥️         \n❁ ═════════ ❃•❃ ═════════ ❁\n\n🌺  [ 1 ]  𒁍 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄   →   ${global.config.BOTNAME}\n🌺  [ 2 ]  𒁍 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍   →   ✦❥⋆⃝𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 ✦\n🌺  [ 3 ]  𒁍 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗   →   [ ${global.config.PREFIX} ]\n🌺  [ 4 ]  𒁍  𝐃𝐀𝐓𝐄   → ${time}\n🌺  [ 5 ]  𒁍  𝐁𝐎𝐓 𝐑𝐔𝐍𝐈𝐍𝐆 𝐓𝐈𝐌𝐄  →  [ ${hours}:${minutes}:${seconds} ]\n🌺  [ 6 ]  𒁍  https://www.facebook.com/profile.php?id=61573328623221\n🌺  [ 7 ]  𒁍 WHATSAPP → [ +91 𝟖𝟎𝟗𝟒𝟖𝟐𝟖𝟐𝟑𝟕 ]\n🌺  [ 8 ]  𒁍 INSTAGRAM →  krishna_brand_legend\n🌺THANKYOU FOR USING ${global.config.BOTNAME} BOT♥️\n\n
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
