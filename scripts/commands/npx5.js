module.exports.config = {
  name: "💙",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};


module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("💙")==0 || (event.body.indexOf("💙")==0) || event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0 ||
event.body.indexOf("💙")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/JCKoVuP.mp4",
        ];
     var callback = () => api.sendMessage({body:`•—»✨ [ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n-ভালোবাসবা বাসো-!!❤️😇\n-আল্লাহ কে ভালোবাসো-!!❤️🌸\nতুমি কখনো ঠকবে না ❤️😊\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧 ]✨«—•\n[🐰] → 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗 : 💙\n[⌛] → 𝐃𝐚𝐭𝐞 : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🍒] → ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);   const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`http://toan-culi.tutoan205.repl.co/text/cadao`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}
  
  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
		"successText": `🧠`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["💙"] == "undefined" || data["💙"] == true) data["💙"] = false;
	else data["💙"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["💙"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
