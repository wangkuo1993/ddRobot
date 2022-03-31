const request = require("request");
const headers = {
  "Content-Type": "application/json;charset=utf-8",
};

const defaultOptions = {
  msgtype: "text",
  text: {
    content: "hello~",
  },
};

class Bot {
  send(json = defaultOptions) {
    try {
      let options = {
        headers,
        json,
      };
      request.post(
        "https://oapi.dingtalk.com/robot/send?access_token=b1b408f40c5fa2e3340d290335a275e5128d02b42a30a1ca1287c427809dec1f",
        options,
        function (_error, _response, body) {
          console.log(`send msg, response: ${JSON.stringify(body)}`);
        }
      );
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = Bot;
