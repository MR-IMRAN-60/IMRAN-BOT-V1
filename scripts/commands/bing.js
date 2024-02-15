 module.exports = {
  config: {
    name: "bing",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "with prefix",
    usages: "bing prompt",
    cooldowns: 10,
},

   languages: {
   "vi": {},
       "en": {
           "missing": 'use : /bing cat'
       }
   },

start: async function({ nayan, events, args, lang}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if(!prompt) return nayan.reply(lang('missing'), events.threadID, events.messageID)

  const rndm = ['15fRPYFV_DBYATRjpUzrZSYbryc20uFsCQW6Zn6s-kKzU0Vv33FzrdBPVzE36w8sdZ1DSfjQ91_dW_dK7-wgRhzDCXot-bVB0MRW-TsnOYzyN9MqMM_-Qe9CjgWxFCM0m6X47weCmQ-i21-MpoQPQpi2WQidKVexQJtVrF1oDsS3it0HxlIvOmP_v8IseaAGLOTzkG8IheqAvMf8BUyN0MA','1qIjkUFbW3bwnVbCzvZR0ekGAAvHVQgm2CsrR2jb-6l9Di6ZIiMx3kjP3YEpuRuPmGwzSyDQCIZWpbI5YKet5UZnPsgAlpUpQCVbVu9GtsSSVtpSt3Xdqv8ybvWvDfPgvxRgkfYQWSPybuQYpVoiJfBWUlFkqGXPYPrjr9OBW8EKKcH1BCWdcaxOs3cALOokqS0mdpbqZocHJ6PVRrCRv-Q7ElW-EZXmJkwOpvZofFvg','1di7nUC7xiyjGBXkmDfYvZ6q7nd1ab3-rl2n2VkQdXvW3Nb6Zj7-bjcOWXGGjlWdxMgsvJk2yzNw9XSvVok45uHbWmMTsdgCxixrDbcIKM_NjMvHbYhANOmKVlovT9bDsOjWeOrhwUJCa64cjEb3A4NML1DRQXYA37YwuzZtWVuXawfo5RGvkFDpLT_CLzMKwe4qCeLeAzeA-7FdowvH24A','15o-jz7blbk7bQlKr9CZntF7Rk4my3ecYf6N1-zr7uBZOb21RnkmRSZct7jf0o0C3nrs1bFtyOQQnxDFW8OA9zVX4oEgRkkhGJ4b3AD-xbhWr-WG1WTybGCbnLaO4giWUW3nGSjPD08dgznzMz3Koim7cpKlD_-HtcQ3dDDGNvw-TFjhpJiPVNLQFvWZlRwSkrn6nlE5l94hrEnFfjnEQsEK1ZJBDpXw-H0XN2rA5T9A'] // input your cookie hare

  var cookie = rndm[Math.floor(Math.random() * rndm.length)];


    const res = await axios.get(`http://eu4.diresnode.com:3143/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);

  
  console.log(res.data)
    const data = res.data.result;
  const numberSearch = data.length
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    
    nayan.reply({
        attachment: imgData,
        body: "🔍Bing Search Result🔍\n\n📝Prompt: " + prompt + "\n\n#️⃣Number of Images: " + numberSearch
    }, events.threadID, events.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
}
}
