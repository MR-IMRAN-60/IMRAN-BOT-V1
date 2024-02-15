module.exports.config = {
  name: "Good Night",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Imran",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("good night ")==0 || (event.body.indexOf("gd n8")==0) || event.body.indexOf("Good Night")==0 ||
event.body.indexOf("সুভ রাত্রি")==0 ||
event.body.indexOf("Good night ")==0 ||
event.body.indexOf("@everyone Good Night")==0 ||
event.body.indexOf("Good Night")==0 ||
event.body.indexOf("good Night")==0 ||
event.body.indexOf("good night")==0 ||
event.body.indexOf("Good Night")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/bCDbHqT.mp4",
        ];
     var callback = () => api.sendMessage({body:`__Good Night প্রিয় বন্ধুরা ✨💖🥱`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
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
	if (typeof data["Good Night"] == "undefined" || data["Good Night"] == true) data["good Night "] = false;
	else data["good night"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["good night"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
