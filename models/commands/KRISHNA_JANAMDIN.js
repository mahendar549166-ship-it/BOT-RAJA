module.exports.config = {
  name: "janamdin",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "KRISHNA", 
  description: "Get Pair From Mention",
  commandCategory: "png",
  usages: "[@mention]",
  cooldowns: 5, 
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};

module.exports.onLoad = async() => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/KRISHNA/Babu/`;
  const path = resolve(__dirname, 'KRISHNA/Babu', 'day1.jpg');
  if (!existsSync(dirMaterial + "Babu")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.postimg.cc/KvCVCfs3/day1.jpg", path); 
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "KRISHNA", "Babu");

  let batgiam_img = await jimp.read(__root + "/day1.jpg");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(10, 10), 5, 5).composite(circleTwo.resize(525, 525), 260, 164);

  let raw = await batgiam_img.getBufferAsync("image/png");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("💐🎂🌸__ 𝙹𝙸𝚂𝙺𝙰 𝙱𝙸𝚁𝚃𝙷𝙳𝙰𝚈 𝚄𝚂𝙴 𝙼𝙴𝙽𝚂𝙾𝙸𝙽 𝙺𝙰𝚁𝙾 𝙽𝙷𝙸 𝚃𝙾 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 𝚂𝙴 𝙿𝚄𝙲𝙷 𝙻𝙾___🙋🎂🧚", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "🌸🎂𝐇𝐄𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 𝐉𝐈🎂🌸\n✧═════════•❁❀❁•═════════✧\nफूलो Sa महकता रहे #_Hamesha जीवन तुम्हारा,😊#KHUSIYAN चूमे कदम तुम्हरे #_Bahoot सारा ☺️ प्यार Aurआशीर्वाद #Hamara 👌😎\n✧═════════•❁❀❁•═════════✧\n👏#_Janamdin तुम्हे मुबारक हो..हर #_Din युही खुस रहो...✍️👩‍👧‍👧 खुशियाँ Aur तरक्की #Tumhari साथ हो...💘हर साल Janamdin मानते रहो...🍰\n✧═════════•❁❀❁•═════════✧\nबार-बार यह दिन 🌞 आए…बार-बार यह 💕 दिल गाये…तुम 👲 जिए हजारो साल…यही है 👸 मेरी आरज़ू…🥗 जन्मदिन की हार्दिक शुभकामनाये 🥗\n✧═════════•❁❀❁•═════════✧\nएक दुआ 🙏 माँगते है हम अपने भगवान से,चाहते है आपकी खुशी पूरे ईमान से,सब हसरतें पूरी हो आपकीऔर आप मुस्कुराएँ दिलो ❤ जान 💗 से…🎂🎀🎁Happy Birthday🎂🎂\n✧═════════•❁❀❁•═════════✧", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
    }
