const fs = require("fs");
const axios = require("axios");

const CREDIT_HEX = "6458706861584a79595770776458513d";
const BANNER_HEX = "34706149347061493470575834706152347061523470615234706149347061493470575834706149347061493470614934706152347061523470615234706149347061493470575834706152347061523470615234706149347061493470575834706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152347061523470615234706149347061493470614934706152";
const WARNING_HEX = "384a2b536f79425451314a4a55465167516b785051307446524344776e354b6a437643666c4b556751334a6c5958526c5a434b6f634b6a4d6a4d7a4d6a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d304e6d4d546d4d7a4d444e6a4d30";

function hexToBase64String(hex) {
  try {
    return Buffer.from(hex, "hex").toString("utf8");
  } catch {
    return null;
  }
}
function base64ToUtf8(b64) {
  try {
    return Buffer.from(b64, "base64").toString("utf8");
  } catch {
    return null;
  }
}
function hexToUtf8Plain(hex) {
  const b64 = hexToBase64String(hex);
  if (!b64) return null;
  return base64ToUtf8(b64);
}

(function verifyCredit() {
  try {
    const src = fs.readFileSync(__filename, "utf8");
    const m = src.match(/credits\s*:\s*(['"])([0-9a-fA-F]+)\1/);
    const literal = m ? m[2] : null;

    if (!literal || literal !== CREDIT_HEX) {
      const banner = hexToUtf8Plain(BANNER_HEX) || "=== SCRIPT BLOCKED ===";
      const warning = hexToUtf8Plain(WARNING_HEX) || "Credit verification failed.";
      console.log("\x1b[31m%s\x1b[0m", banner);
      console.log("\x1b[31m%s\x1b[0m", warning);
      console.log("\x1b[31m%s\x1b[0m", "🚫 Script blocked: credit verification failed.");
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Credit verification failed:", err?.message || err);
    process.exit(1);
  }
})();

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "6458706861584a79595770776458513d",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image to groups only.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function getDecodedCredit() {
  try {
    const base64 = Buffer.from(module.exports.config.credits, "hex").toString("utf8");
    return Buffer.from(base64, "base64").toString("utf8");
  } catch {
    return null;
  }
}

const shayariList = [
"❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁",
  "❁══❀ ༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒ ❀══❁"
];

const imgLinks = [
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
  "https://i.ibb.co/N2rhDnhP/20250808-155301.jpg",
];

let lastSentHour = null;

async function sendHourlyMessages(api) {
  try {
    const now = new Date();
    const karachiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const currentHour = karachiTime.getHours();
    const currentMinute = karachiTime.getMinutes();

    if (currentMinute !== 0 || lastSentHour === currentHour) return;

    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = karachiTime.getDate();
    const month = months[karachiTime.getMonth()];
    const year = karachiTime.getFullYear();
    const day = days[karachiTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message =
      `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃ 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 ❃ ━━━━━ ❁`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const groupThreads = threadList.filter(thread => thread.isSubscribed && thread.isGroup);

    for (const thread of groupThreads) {
      try {
        const imageStream = await axios.get(randomImage, { responseType: "stream" }).then(res => res.data);
        await api.sendMessage({ body: message, attachment: imageStream }, thread.threadID);
      } catch (err) {
        console.error(`Failed to send message to thread ${thread.threadID}:`, err.message);
      }
    }

    console.log(`Hourly message sent to ${groupThreads.length} groups.`);
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
}

module.exports.handleEvent = async function({ api }) {
  if (!global.hourlyInterval) {
    global.hourlyInterval = setInterval(() => {
      sendHourlyMessages(api);
    }, 60000);
  }
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("Hourly announcements activated! Bot will send time updates every hour in groups only.", event.threadID);
};
