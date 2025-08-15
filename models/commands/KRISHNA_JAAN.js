module.exports.config = {
    name: "love",
    version: "7.3.1",
    hasPermssion: 0,
    credits: " Priyansh Rajput", 
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

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/KRISHNA/Babu/`;
    const path = resolve(__dirname, 'KRISHNA/Babu', 'janu.jpg');
    if (!existsSync(dirMaterial + "Babu")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.ibb.co/wGtVnws/janu.jpg", path); 
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "KRISHNA", "Babu");

    let batgiam_img = await jimp.read(__root + "/janu.jpg");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(220, 220), 238, 145).composite(circleTwo.resize(220, 220), 808,145);
    
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
    if (!mention[0]) return api.sendMessage("🍒🌸 𝙿𝙷𝙴𝙻𝙴 𝙰𝙰𝙿𝙽𝙸 𝙹𝙰𝙰𝙽 𝙺𝙾 𝙼𝙴𝙽𝚂𝙸𝙾𝙽 𝙺𝙰𝚁𝙾, 𝙽𝙷𝙸 𝚃𝙾 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 𝚂𝙴 𝙿𝚄𝙲𝙷𝙻𝙾 😁", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "🩷😘 𝗗𝗢 𝗗𝗜𝗟💞𝗘𝗞 𝗝𝗔𝗔𝗡 😘🩷\n✧═════════•❁❀❁•═════════✧\n🤭💝 𝚈𝙴 𝙻𝙾 𝙰𝙰𝙹 𝚂𝙴 𝚃𝚄𝙼 𝙳𝙾𝙽𝙾 𝙴𝙺 𝙳𝚄𝚂𝚁𝙴 𝙺𝙸 𝙹𝙰𝙰𝙽 𝙱𝙰𝙽 𝙶𝚈𝙴 🙈💞\n✧═════════•❁❀❁•═════════✧\n😏😜 𝙰𝙱 𝙼𝙰𝚃 𝙱𝙾𝙻𝙽𝙰 𝙼𝙴𝚁𝚂𝙴 𝙺𝙸 𝙹𝙰𝙰𝙽 𝙱𝙰𝙽𝙰𝙾 𝙼𝙴𝚁𝙸 😐🤭\n✧═════════•❁❀❁•═════════✧\n😘😍 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝚂𝙾 𝙼𝚄𝙲𝙷 𝙼𝙴𝚁𝙸 𝙴𝙺𝙻𝙾𝚃𝙸 𝙹𝙰𝙰𝙽 💋💝\n✧═════════•❁❀❁•═════════✧\n❍Ꮗɳɘr᩶ ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌ 🇧‌🇦‌🇧‌🇺‌✨🩵\n✧═════════•❁❀❁•═════════✧", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }
      
