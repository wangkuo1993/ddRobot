const request = require("request");
const headers = {
  "Content-Type": "application/json;charset=utf-8",
};
const defaultUrl = "https://oapi.dingtalk.com/robot/send?access_token=b1b408f40c5fa2e3340d290335a275e5128d02b42a30a1ca1287c427809dec1f";
const defaultOptions = {
  msgtype: "text",
  text: {
    content: "hello~",
  },
};

class Bot {
  send(url = defaultUrl, json = defaultOptions, callback) {
    try {
      let options = {
        headers,
        json,
      };
      request.post(
        url,
        options,
        function (_error, _response, body) {
          console.log(`send msg, response: ${JSON.stringify(body)}`);
        }
      );
    } catch (err) {
      console.error(err);
      callback && callback()
      return false;
    }
  }
}

module.exports = Bot;
