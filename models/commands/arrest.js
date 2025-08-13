const fs = require("fs");

// 🛡️ Encrypted ASCII Banner + Encrypted Credit Lock
(function () {
  const b = Buffer.from("ICDCt8KkwqDDo8K7wqDDhMKkIMKkw5PCr8KtwqDCrMKkw5HCrMKkw5XDlMKkwqDDjMKtwqDDjcKkw5rDjMKwIMKkwrPDg8K7wqDDhMKkIMKkw5PCr8KtwqDDqsKkw5jDpcKkw5nDjMKzIMKkwrzCrsKtwqDDjMKmwqDDtMKwIMKwwr3CrMKtIMKkwrPDg8K7wqDDhMKkIMKkw5PCr8KtwqDCqcKkwq3DgMKkIMKkwrTDgcKwIMKkwrnDiMKuwqDDjcKkw5jCrcKjIMKkwqXDiMKhwqDCoMKkw6bDmsKkIMKkw5bCpMKgwoTCpMKswqDDiMKowqDDmMKs", "base64").toString("utf-8");
  console.log(b);

  const script = fs.readFileSync(__filename, "utf8");
  const encryptedName = Buffer.from("dXphaXJyYWpwdXQ=", "base64").toString("utf-8"); // 'uzairrajput'
  const creditLine = script.match(/credits\s*:\s*["']([^"']+)["'`]/i);
  const actualCredit = creditLine ? creditLine[1].trim().toLowerCase() : null;

  if (actualCredit !== encryptedName) {
    console.log("\n❌ Credit badla gaya hai! Script exit ho rahi hai.");
    process.exit(1);
  }
})();

module.exports.config = {
  name: "giraftar",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "uzairrajput", // 🔒 Encrypted Checked, not editable
  description: "Get Pair From Mention",
  commandCategory: "img",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};

// 🔐 Encrypted onLoad Function
module.exports.onLoad = async () => {
  const encoded = "Y29uc3QgeyByZXNvbHZlIH0gPSBnbG9iYWwubm9kZW1vZHVsZVsicGF0aCJdOw0KY29uc3QgeyBleGlzdHNTeW5jLCBta2RpclN5bmMgfSA9IGdsb2JhbC5ub2RlbW9kdWxlWyJmcy1leHRyYSJdOw0KY29uc3QgeyBkb3dubG9hZEZpbGUgfSA9IGdsb2JhbC51dGlsczsNCmNvbnN0IGRpck1hdGVyaWFsID0gX19kaXJuYW1lICsgIi91emFpci9tdHgvIjsNCmNvbnN0IHBhdGggPSByZXNvbHZlKGRpck1hdGVyaWFsLCAiYXJzdC5wbmciKTsNCmlmICghZXhpc3RzU3luYyhkaXJNYXRlcmlhbCkpIG1rZGlyU3luYyhmaXJNYXRlcmlhbCwgeyByZWN1cnNpdmU6IHRydWUgfSk7DQppZiAoIWV4aXN0c1N5bmMocGF0aCkpIGF3YWl0IGRvd25sb2FkRmlsZSgiaHR0cHM6Ly9pLmliYi5jby9yS3FKNHM1NS9hcnN0LnBuZyIsIHBhdGgpOw==";
  eval(Buffer.from(encoded, "base64").toString("utf-8"));
};

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "uzair", "mtx");

  const bgPath = path.join(__root, "arst.png");
  const pathImg = path.join(__root, `pair_${one}_${two}.jpeg`);
  const avatarOne = path.join(__root, `avt_${one}.jpeg`);
  const avatarTwo = path.join(__root, `avt_${two}.jpeg`);

  const img1 = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(img1, 'utf-8'));

  const img2 = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(img2, 'utf-8'));

  const frame = await jimp.read(bgPath);
  const circle1 = await jimp.read(await circle(avatarOne));
  const circle2 = await jimp.read(await circle(avatarTwo));

  frame.composite(circle1.resize(70, 70), 372, 20)
    .composite(circle2.resize(65, 65), 162, 110);

  const raw = await frame.getBufferAsync("image/jpeg");
  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);
  return pathImg;
}

async function circle(imagePath) {
  const jimp = require("jimp");
  const img = await jimp.read(imagePath);
  img.circle();
  return await img.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);

  if (!mention[0]) {
    return api.sendMessage("⛔ Barae Meherbani Kisi Ko Mention Karen!", threadID, messageID);
  } else {
    const one = senderID;
    const two = mention[0];
    try {
      const imagePath = await makeImage({ one, two });
      api.sendMessage({
        body: "🚨 *He is a very dangerous criminal!* 😹\nUsne group mein ladkiyon ko kidnap kia hai aur chori bhi ki hai!\n\n👮‍♂️ *Arrested Successfully!*\n\n💖 Code by: KRISHNA BABU",
        attachment: fs.createReadStream(imagePath)
      }, threadID, () => fs.unlinkSync(imagePath), messageID);
    } catch (err) {
      console.log(err);
      return api.sendMessage("⚠️ Error! Dobara koshish karain.", threadID, messageID);
    }
  }
};
