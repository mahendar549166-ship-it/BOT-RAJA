const fs = require("fs");
const axios = require("axios");
const { createCanvas, loadImage } = require("canvas");

function hiddenCredit(F) {
  const data = [60,51,40,32,59,59,40,35,57,60,61];
  const key = "undefined".length * "function".length + "a".length;
  return F(...data.map(n => n ^ key));
}

const REQUIRED_CREDIT = hiddenCredit(String.fromCharCode);

process.nextTick(() => {
  try {
    const actual = (module.exports?.config?.credits ?? "").toString().trim().toLowerCase();
    if (actual !== REQUIRED_CREDIT) {
      console.clear();
      console.log("❌ CREDIT ERROR — BOT BLOCKED ❌");
      process.exit(1);
    }
  } catch { process.exit(1); }
});

const __lock = (() => {
  const fs = require("fs");
  const path = require("path");
  const _b64 = s => Buffer.from(s, "base64").toString("utf8");
  const UZ = _b64("dXphaXI=");
  const MTX = _b64("bXR4");
  const PIMG = _b64("cGFpcjEwLmpwZw==");
  const C = Object.freeze({
    A: { W: 235, H: 235, X: 225, Y: 138 },
    B: { W: 230, H: 230, X: 803, Y: 140 }
  });
  const ROOT = () => path.resolve(__dirname, UZ, MTX);
  const PAIR_PATH = (resolveFn, base) => resolveFn(base, `${UZ}/${MTX}`, PIMG);
  try {
    const text = fs.readFileSync(__filename, "utf8");
    if (!/dXphaXI=/i.test(text) || !/bXR4/i.test(text) || !/cGFpcjEwLmpwZw==/i.test(text)) {
      throw new Error("constants missing");
    }
  } catch { process.exit(1); }
  return Object.freeze({ ROOT, PAIR_PATH, C });
})();

try { Object.freeze(Object); Object.freeze(Array.prototype); } catch {}

module.exports.config = {
  name: "pair11",
  version: "1.0.2",
  hasPermssion: 0,
  credits: ((F)=>(
    (()=>{ 
      const _d=[60,51,40,32,59,59,40,35,57,60,61];
      const k="undefined".length*"function".length+"a".length;
      return F(..._d.map(n=>n^k));
    })()
  ))(String.fromCharCode),
  description: "Tag se ya random pairing photo",
  commandCategory: "Picture",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "jimp": ""
  }
};

module.exports.onLoad = async () => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __lock.ROOT() + "/";
  const pathFile = __lock.PAIR_PATH(resolve, __dirname);
  if (!existsSync(dirMaterial)) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(pathFile)) {
    await downloadFile("https://i.ibb.co/wGtVnws/janu.jpg", pathFile);
  }
};

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
  const jimp = global.nodemodule["jimp"];
  const __root = __lock.ROOT();
  let pairing_img = await jimp.read(__root + "/pair10.jpg");
  let outPath = __root + `/pairing_${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,{ responseType: "arraybuffer" })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, "utf-8"));
  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,{ responseType: "arraybuffer" })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, "utf-8"));
  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  pairing_img.composite(circleOne.resize(__lock.C.A.W, __lock.C.A.H), __lock.C.A.X, __lock.C.A.Y).composite(circleTwo.resize(__lock.C.B.W, __lock.C.B.H), __lock.C.B.X, __lock.C.B.Y);
  let raw = await pairing_img.getBufferAsync("image/png");
  fs.writeFileSync(outPath, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);
  return outPath;
}

async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ api, event, args }) {
  const fs = require("fs-extra");
  const { threadID, messageID, senderID, mentions } = event;
  let partnerID;
  let partnerName;
  if (Object.keys(mentions).length > 0) {
    partnerID = Object.keys(mentions)[0];
    partnerName = mentions[partnerID];
  } else {
    const threadInfo = await api.getThreadInfo(threadID);
    const others = threadInfo.participantIDs.filter(id => id !== senderID);
    partnerID = others[Math.floor(Math.random() * others.length)];
    let info = await api.getUserInfo(partnerID);
    partnerName = info[partnerID].name;
  }
  const senderInfo = await api.getUserInfo(senderID);
  const senderName = senderInfo[senderID].name;
  const tl = ['21%','67%','19%','37%','17%','96%','52%','62%','76%','83%','100%','99%',"0%","48%"];
  const tle = tl[Math.floor(Math.random() * tl.length)];
  const gender = (await api.getUserInfo(partnerID))[partnerID].gender;
  const genderText = gender == 2 ? "Male" : gender == 1 ? "Female" : "Other";
  const arraytag = [
    { id: senderID, tag: senderName },
    { id: partnerID, tag: partnerName }
  ];
  const one = senderID, two = partnerID;
  return makeImage({ one, two }).then(path =>
    api.sendMessage({
      body:`𝐂𝐫𝐞𝐝𝐢𝐭 ➻    💐 𝐌𝐫 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 💐✦ ━━━━━━━ 💝 ━━━━━━━ ✦[•||•●•||•┼┼──🌸,💟..#_𝕋𝕦𝕞𝕙𝕠 𝕂𝕠 𝕁𝕒𝕒𝕟 💟...💗 𝕊𝕖 #_ℙ𝕪𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕝𝕒...💗 🥰𝔻𝕚𝕝 _💖 𝕂𝕒 𝕊𝕦𝕜𝕦𝕟_𝔸𝕒𝕟𝕜𝕙 𝕂𝕒 𝕋𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕲𝕒 🥰... 🌸✦ ━━━━━━━ 💝 ━━━━━━━ ✦ #_𝔸𝕓 𝕋𝕦𝕞 𝕊𝕒𝕥𝕙 𝔻𝕠 𝕐𝕒 𝕄𝕒𝕥 𝔻𝕠 𝕍𝕠 𝔸𝕒𝕡𝕜𝕪 𝕄𝕒𝕣𝕛𝕚🐬__💖 #_ℍ𝕒𝕞𝕟𝕖 𝕋𝕠 𝕒𝕒𝕡𝕜𝕠 𝕁𝕚𝕟𝕕𝕖𝕘𝕚 𝕂𝕒 𝕊𝕒𝕙𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒•||•🐬•||•]]✦ ━━━━━━━ 💝 ━━━━━━━ ✦😻😘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎 😘😻 ✦ ━━━━━━━ 😻 ━━━━━━━ ✦➻ ${senderName} 😻💞😻 ${partnerName}✦ ━━━━━━━ 💝 ━━━━━━━ ✦𝐋𝐎𝐕𝐄 𝐑𝐀𝐓𝐈𝐎: ${tle} 😻💞😻💐 ℂ𝕆𝔻𝔼 𝔹𝕐 :- 💖 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗔𝗕𝗨`,
      mentions: arraytag,
      attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path), messageID)
  );
};
