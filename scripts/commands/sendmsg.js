const fs = require('fs');
const request = require('request');

module.exports.config = {
	name: "sendnoti",
	version: "0.0.2",
	permission: 2,
  prefix: true,
	credits: "Imran",
	description: "sendmsg",
	category: "admin",
	usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};


let atmDir = [];
const moment = require('moment-timezone');
 const gio = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || hh:mm:s"); 
const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;

    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n--------------------\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n--------------------\n『 𝗪𝗼𝗿𝗱 』: ${name}\n--------------------\n『 𝗚𝗿𝘂𝗽 』: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n『 𝗡𝗼𝘁𝗲 』: ${body}\n`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n--------------------\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n--------------------\n『 𝗡𝗼𝘁𝗲 』: ${body}\n--------------------\n『 𝗚𝗿𝘂𝗽 』: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n『 𝗪𝗼𝗿𝗱 』: ${note}\n`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n--------------------\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n--------------------\n『 𝗪𝗼𝗿𝗱 』: ${name} 𝗪𝗶𝘁𝗵 𝗟𝗼𝘃𝗲!\n--------------------\n『 𝗡𝗼𝘁𝗲 』: ${body}\n--------------------\n-----『 𝗧𝗶𝗽𝘀 』-----`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n--------------------\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n--------------------\n『 𝗪𝗼𝗿𝗱 』: ${name} 𝗪𝗶𝘁𝗵 𝗟𝗼𝘃𝗲!\n--------------------\n『 𝗡𝗼𝘁𝗲 』: ${body}\n--------------------\n-----『 𝗧𝗶𝗽𝘀 』-----`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n=============\n『 𝗔𝗱𝗺𝗶𝗻 』: ${await Users.getNameUser(senderID)}\n=============\n\n『 𝗡𝗼𝘁𝗲 』:  ${args.join(" ")}\n\n=============\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n=============\n=====『 𝗧𝗶𝗽𝘀 』======\n𝗧𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘄𝗶𝗹𝗹 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗮𝗱𝗺𝗶𝗻 𝗶𝗳 𝘆𝗼𝘂 𝗿𝗲𝗽𝗹𝘆 !!!` ;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `===『 𝗦𝗘𝗡𝗗𝗡𝗢𝗧𝗜 』===\n=============\n『 𝗔𝗱𝗺𝗶𝗻 』: ${await Users.getNameUser(senderID)}\n=============\n\n『 𝗡𝗼𝘁𝗲 』:  ${args.join(" ")}\n\n=============\n『 𝗧𝗶𝗺𝗲 』: ${gio}\n=============\n=====『 𝗧𝗶𝗽𝘀 』======\n𝗧𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘄𝗶𝗹𝗹 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗮𝗱𝗺𝗶𝗻 𝗶𝗳 𝘆𝗼𝘂 𝗿𝗲𝗽𝗹𝘆 !!!`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`『 𝗡𝗼𝘁𝗲 』 → 𝐒𝐞𝐧𝐝 𝐧𝐨𝐭𝐞𝐬 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 ${can} 𝐠𝐫𝐨𝐮𝐩, 𝐟𝐚𝐢𝐥𝐞𝐝 ${canNot} 𝐆𝐫𝐨𝐮𝐩`, threadID);
              }
