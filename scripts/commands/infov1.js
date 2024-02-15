module.exports.config = {
  name: "info", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran",
  description: "admin information",
  prefix: true,
  category: "Media", 
  usages: "", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/sxv41ptq/MIT08334.jpg","https://i.postimg.cc/zfvGyxWx/20230422-185643.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️🅑︎🅞︎🅣︎ 🅝︎🅐︎🅜︎🅔︎ : ${global.config.BOTNAME}

❇️𝐁𝐎𝐓 𝐀𝐅𝐌𝐈𝐍 : 『𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧』

❇️𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :  

_____________CONTACT_____________

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃: https://www.facebook.com/Mohammad.Rakib240

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐏𝐀𝐆𝐄 : বাল চাল 𝐍𝐎𝐓 𝐀𝐋𝐋𝐎𝐖 🤟🤟

❇️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : {𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐈𝐌𝐑𝐀𝐍}

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
