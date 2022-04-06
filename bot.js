const request = require('request')
const crypto = require('crypto')
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
}
const defaultOptions = {
    msgtype: 'text',
    text: {
        content: 'hello~',
    },
}

class Bot {
    _initData = {
        base_url: '',
        access_token: '',
        secret: '',
    }
    constructor(_initData) {
        const {
            access_token,
            secret,
            base_url = 'https://oapi.dingtalk.com/robot/send',
        } = _initData
        const timestamp = new Date().getTime()
        const sign = this.signFn(secret, `${timestamp}\n${secret}`)
        this._webhookUrl = `${base_url}?access_token=${access_token}&timestamp=${timestamp}&sign=${sign}`
    }
    signFn = (secret, content) => {
        const str = crypto
            .createHmac('sha256', secret)
            .update(content)
            .digest()
            .toString('base64')
        return encodeURIComponent(str)
    }
    send(json = defaultOptions, callback) {
        try {
            let options = {
                headers,
                json,
            }
            console.log(this._webhookUrl)
            request.post(
                this._webhookUrl,
                options,
                function (_error, _response, body) {
                    console.log(`send msg, response: ${JSON.stringify(body)}`)
                }
            )
        } catch (err) {
            console.error(err)
            callback && callback()
            return false
        }
    }
}

module.exports = Bot
