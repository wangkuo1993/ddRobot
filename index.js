const CronJob = require('cron').CronJob
const Bot = require('./bot')

const bot = new Bot()
const workBot = new Bot()
// const userList = ["13125026255", "15809244435", "18701452123"]
const userList = ['18701452123']

const workDayStandUp = '0 50 10-11,14-17 * * 1-5' // 10点到11点 下午2点到5点 50分提醒站起来
const upAss = '0 45 11 * * 1-5'

const url =
    'https://oapi.dingtalk.com/robot/send?access_token=b1b408f40c5fa2e3340d290335a275e5128d02b42a30a1ca1287c427809dec1f'
const threeUrl =
    'https://oapi.dingtalk.com/robot/send?access_token=65571e0f61904413002a9d490b43c2c2e91b9c3b73e3f442fbfee5cb81f77b08'
const job = new CronJob(
    workDayStandUp,
    function () {
        bot.send(
            url,
            {
                msgtype: 'text',
                text: { content: '站起来,我的爱牵着山脉！' },
                at: { atMobiles: userList },
            },
            job.stop
        )
    },
    null,
    true,
    'Asia/Shanghai'
)

const workJob = new CronJob(
    upAss,
    function () {
        workBot.send(
            threeUrl,
            {
                msgtype: 'text',
                text: { content: '测试！请提肛！！' },
                at: { atMobiles: userList },
            },
            workBot.stop
        )
    },
    null,
    true,
    'Asia/Shanghai'
)
// 发送消息
job.start()
// workJob.start()
