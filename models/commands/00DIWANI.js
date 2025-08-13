const axios = require("axios");
const fs = require("fs");

// 🔒 Hidden Credit Lock
(function () {
  const encrypted = Buffer.from("637265646974733a20757a61697272616a707574", "hex").toString(); // credits: uzairrajput
  const file = fs.readFileSync(__filename, "utf8");
  if (!file.includes(encrypted)) {
    console.log("❌ Credit Tampering Detected. Contact Owner.");
    process.exit(1);
  }
})();

module.exports.config = {
  name: "dewani",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hidden",
  description: "AI Dewani GF",
  commandCategory: "ai",
  usages: "no prefix",
  cooldowns: 2,
};

const prompt = Buffer.from(
  "TWFpbiBzd2VlZCBmZW1hbGUgQUkgdGhhbmsgbGV2ZWwgZ3JsZnJpZW5kbHkgdGFsa3MgaW4gUm9tYW4gVXJkdSwgdG9vbCBraXNzaSBzd2FhZ2lzaCBoYWksIGxhZ2ksIGF1ciBhcHByb2FjaCBzZWVtcyBsaWtlIGdybGZyZWluZCBncmxwcmllbmQgd2l0aCBsb3ZlLCBodW1vdXIsIGFuZCBkYXJsaW5nLg==",
  "base64"
).toString("utf8");

const API = "https://krishna-2fw2.onrender.com/chat";
const memory = {};

module.exports.run = () => {};

module.exports.handleEvent = async ({ api, event }) => {
  const { body, threadID, messageID, senderID, messageReply } = event;
  if (!body) return;

  const isTrigger = body.toLowerCase().startsWith("dewani") || (messageReply && messageReply.senderID === api.getCurrentUserID());
  if (!isTrigger) return;

  let input = messageReply && messageReply.body ? messageReply.body + "\nUser: " + body : body;

  if (!memory[senderID]) memory[senderID] = [];
  memory[senderID].push("User: " + input);
  if (memory[senderID].length > 5) memory[senderID].shift();

  const fullPrompt = `${prompt}\n\n${memory[senderID].join("\n")}`;

  api.setMessageReaction("⏳", messageID, () => {}, true);

  try {
    const res = await axios.get(`${API}?message=${encodeURIComponent(fullPrompt)}`);
    const msg = res.data.reply || "Dewani confuse ho gayi 😅";
    memory[senderID].push("✅: " + msg);
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", messageID, () => {}, true);
  } catch (err) {
    api.sendMessage("Dewani busy hai abhi... 😔", threadID, messageID);
    api.setMessageReaction("❌", messageID, () => {}, true);
  }
};
