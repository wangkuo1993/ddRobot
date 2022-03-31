const Bot = require("./bot");
const bot = new Bot();

// 发送消息
bot.send({
  msgtype: "text",
  text: { content: "在干嘛？" },
  at: { atMobiles: ["13125026255", "15809244435"] },
});
