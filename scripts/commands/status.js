const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "status",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "Imran",
  description: "sad video",
  category: "user",
  usages: "",
    cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("status") === 0 || event.body.indexOf("Status") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();
  const q = args.join(" "); 

try {
        const res = await axios.get("https://3f5p37-3000.csb.app/status");
        const data = res.data.data;
        const title = data.title;
        const url = data.url;
        const authorName = res.data.author.name;
        const authorContact = res.data.author.contact;

        const videoResponse = await axios.get(url, { responseType: 'stream' });
        const videoStream = videoResponse.data;

        const videoFileName = __dirname + "/cache/video.mp4";
        const writeStream = fs.createWriteStream(videoFileName);

        videoStream.pipe(writeStream);

        writeStream.on("finish", () => {
            const msg = `°\n\n__${title}\n\n✨🌺${authorName}..!🍂`;

            return api.sendMessage({
                body: msg,
                attachment: fs.createReadStream(videoFileName)
            }, event.threadID, (error, info) => {
                if (error) {
                    console.error("Error sending the video:", error);
                }
                fs.unlinkSync(videoFileName); 
            });
        });
    } catch (error) {
        console.error("Error fetching and sending the video:", error);
        return api.sendMessage("An error occurred while fetching and sending the video.", event.threadID);
    }
}
module.exports.run = async function ({ api }) {}
