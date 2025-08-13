module.exports.config = {
    name: "groupowner",
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
    const path = resolve(__dirname, 'KRISHNA/Babu', 'group.jpg');
    if (!existsSync(dirMaterial + "Babu")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/g207Bs88/group.jpg", path); 
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "KRISHNA", "Babu");

    let batgiam_img = await jimp.read(__root + "/group.jpg");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(10, 10), 5, 5).composite(circleTwo.resize(325, 325), 452, 192);
    
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
    if (!mention[0]) return api.sendMessage("💐🐬🌸__ 𝙶𝚁𝙾𝚄𝙿 𝙰𝙳𝙼𝙸𝙽 𝙺𝙾 𝙼𝙴𝙽𝚂𝙾𝙸𝙽 𝙺𝙰𝚁𝙾 𝙽𝙷𝙸 𝚃𝙾 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 𝚂𝙴 𝙿𝚄𝙲𝙷 𝙻𝙾___🙋🐥🧚", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐘𝐄 𝐋𝐎 𝐀𝐀𝐏𝐊𝐄 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
  }
