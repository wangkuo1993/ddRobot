const CronJob = require('cron').CronJob;
const Bot = require("./bot");
const bot = new Bot();

const job = new CronJob('*/5 * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
// 发送消息
// bot.send({
//   msgtype: "text",
//   text: { content: "在干嘛？" },
//   at: { atMobiles: ["13125026255", "15809244435"] },
// });

job.start();


setTimeout(() => { 
  job.stop();
}, 30000)
