const CronJob = require('cron').CronJob;
const Bot = require("./bot");
const bot = new Bot();
const userList = ["13125026255", "15809244435", "18701452123"]
const url = "https://oapi.dingtalk.com/robot/send?access_token=b1b408f40c5fa2e3340d290335a275e5128d02b42a30a1ca1287c427809dec1f"

const job = new CronJob('*/5 * * * * *', function() {
  bot.send(url, {
    msgtype: "text",
    text: { content: "在干嘛？" },
    at: { atMobiles: userList },
  }, job.stop);
}, null, true, 'America/Los_Angeles');
// 发送消息
job.start();