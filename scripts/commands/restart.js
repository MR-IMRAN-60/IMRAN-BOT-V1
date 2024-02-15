module.exports.config = {
	name: "restart",
	version: "7.0.0",
	permission: 2,
	credits: "ryuko",
	prefix: false,
	description: "restart bot system",
	category: "admin",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};

module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Dhaka").format("HH");
  var phut = moment.tz("Asia/Dhaka").format("mm");
  var giay = moment.tz("Asia/Dhaka").format("ss");
const fs = require("fs");
  let name = await Users.getNameUser(event.senderID)
if (event.senderID != 100075122837809) return api.sendMessage(`[❗]➜ Get out there`, event.threadID, event.messageID)
if(args.length == 0) api.sendMessage(`[💟]➜ 𝗛𝗶 𝗯𝗼𝘀𝘀: ${name}\n[🔰]➜ 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗳𝗼𝗿 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁, 𝘁𝗵𝗲 𝗯𝗼𝘁 𝘀𝘆𝘀𝘁𝗲𝗺 𝘄𝗶𝗹𝗹 𝗿𝗲𝘀𝘁𝗮𝗿𝘁 𝗮𝗳𝘁𝗲𝗿 𝟭𝟬 𝘀𝗲𝗰𝗼𝗻𝗱𝘀`,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`[🔮]➜ 𝗧𝗵𝗲 𝗯𝗼𝘁 𝘄𝗶𝗹𝗹 𝗿𝗲𝘀𝘂𝗺𝗲 𝗹𝗮𝘁𝗲𝗿: ${gio}s\n[⏰]➜ 𝗡𝗼𝘄: ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("[⌛]➜ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗮𝘁 𝘁𝗵𝗲 𝗯𝗲𝗴𝗶𝗻𝗻𝗶𝗻𝗴",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
