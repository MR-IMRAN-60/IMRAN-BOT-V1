/*
» 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧 FB: fb.com/Mohammad.Rakib240
*/
module.exports.config = {
  name: "sendmsg",
	version: "0.0.2",
	permission: 2,
  prefix: true,
	credits: "Imran",
	description: "sendmsg",
	category: "admin",
	usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Dhaka").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    let uid = event.senderID;
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "chỉ có tệp" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`‼️ Bạn chưa nhập nội dung`, tid, mid);
    var msg = `📣===[ 𝗔𝗱𝗺𝗶𝗻 𝗡𝗼𝘁𝗶𝗰𝗲 ]===📣\n━━━━━━━━━━━━━━━━\n👤 𝗙𝗿𝗼𝗺 𝗔𝗗𝗠𝗜𝗡: ${(await Users.getData(sid)).name}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n🏘️ 𝗪𝗵𝗲𝗿𝗲 𝘁𝗼 𝗦𝗲𝗻𝗱 : ${event.isGroup == true ? '𝗚𝗿𝗼𝘂𝗽 ' + global.data.threadInfo.get(event.threadID).threadName: 'From a private conversation with a bot'}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n━━━━━━━━━━━━━━━━\n\n💬 𝗠𝗮𝘀𝘀𝗮𝗴𝗲: ${content}\n\n━━━━━━━━━━━━━━━━\n 𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁
 ( 𝗳𝗲𝗲𝗱𝗯𝗮𝗰𝗸 ) 𝗔𝗗𝗠𝗜𝗡 💞`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`✅ 𝗦𝗲𝗻𝗱 𝗮 𝘀𝘂𝗰𝗰𝗲𝘀𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 ${r} 𝗴𝗿𝗼𝘂𝗽`, tid, mid)).catch(async(err) => api.sendMessage(`❌ 𝗖𝗮𝗻'𝘁 𝘀𝗲𝗻𝗱 𝗻𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 ${err} 𝗴𝗿𝗼𝘂𝗽`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `👤 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗨𝘀𝗲𝗿𝘀: ${(await Users.getData(sid)).name}\n👪 𝗴𝗿𝗼𝘂𝗽: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n━━━━━━━━━━━━━━━━\n💬 𝗠𝗮𝘀𝘀𝗮𝗴𝗲: ${atm == "nofile" ? body : "Only files come to you"}\n━━━━━━━━━━━━━━━━\n» 𝗥𝗲𝗽𝗹𝘆 ( 𝗳𝗲𝗲𝗱𝗯𝗮𝗰𝗸 ) 𝘂𝘀𝗲𝗿`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`📨 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝘁𝗼 𝗔𝗱𝗺𝗶𝗻 ${(await Users.getData(h.author)).name} và ${+r1-1} 𝗢𝘁𝗵𝗲𝗿 𝗮𝗱𝗺𝗶𝗻𝘀`, tid, mid)).catch(async(err) => api.sendMessage(`❌ 𝗖𝗮𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝘁𝗼 ${err} 𝐀𝐝𝐦𝐢𝐧`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗮𝗱𝗺𝗶𝗻 ${(await Users.getData(sid)).name}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n━━━━━━━━━━━━━━━━\n\n💬 𝗠𝗮𝘀𝘀𝗮𝗴𝗲: ${atm == "nofile" ? body : "Only files come to you"}\n━━━━━━━━━━━━━━━━\n𝗥𝗲𝗽𝗹𝘆 ( 𝗳𝗲𝗲𝗱𝗯𝗮𝗰𝗸 ) 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝘀𝗲𝗻𝗱 𝗻𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝘁𝗼 𝗔𝗱𝗺𝗶𝗻💓`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`📨 📨 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝘁𝗼 𝗨𝘀𝗲𝗿 ${(await Users.getData(h.idUser)).name} 𝗮𝘁 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};
