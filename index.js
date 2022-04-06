const CronJob = require('cron').CronJob
const Bot = require('./bot')
const Shit = require('./bullshit')
const randomFun = (arr) => {
    return Shit[Math.round(Math.random() * arr.length)]
}

const loveConfig = {
    access_token:
        '65571e0f61904413002a9d490b43c2c2e91b9c3b73e3f442fbfee5cb81f77b08',
    secret: 'SECbfd35799f34ae17a669ff152a2941e262b0d115dad7c79317e51a2ecd27821ab',
}
const bot = new Bot({
    access_token:
        'b1b408f40c5fa2e3340d290335a275e5128d02b42a30a1ca1287c427809dec1f',
    secret: 'SEC38430eb25497ea258769614d7c337f7576c1e8fde9eb2cf39ddc81b45252b320',
})
const loveBot = new Bot(loveConfig)
const drinkBot = new Bot(loveConfig)
const nightBot = new Bot(loveConfig)

const userList = ['13125026255', '15809244435', '18701452123']
// const userList = ['18701452123']

const loveUserList = ['17612247470']

const workDayStandUp = '0 50 10-11,14-17 * * 1-5' // 10点到11点 下午2点到5点 50分提醒站起来
const upAss = '0 45 11 * * 1-5'
const dailyLove = '0 0 14 * * *'
const dailyDrink = '0 0 10 * * *'
const dailyNight = '0 30 23 * * *'
const testCron = '* * * * * *'

const threeUrl = 'https://oapi.dingtalk.com/robot/send?access_token='

const nightJob = new CronJob(
    dailyNight,
    function () {
        nightBot.send(
            {
                msgtype: 'text',
                text: { content: '宝宝晚安～！记得提肛～！' },
                at: { atMobiles: loveUserList },
            },
            nightJob.stop
        )
    },
    null,
    true,
    'Asia/Shanghai'
)
const loveJob = new CronJob(
    dailyLove,
    function () {
        loveBot.send(
            {
                msgtype: 'text',
                text: { content: randomFun(Shit) },
                at: { atMobiles: loveUserList },
            },
            loveJob.stop
        )
    },
    null,
    true,
    'Asia/Shanghai'
)

const drinkJob = new CronJob(
    dailyDrink,
    function () {
        drinkBot.send(
            {
                msgtype: 'text',
                text: { content: '宝宝早安～，起来多喝水哦～！' },
                at: { atMobiles: loveUserList },
            },
            drinkJob.stop
        )
    },
    null,
    true,
    'Asia/Shanghai'
)
const job = new CronJob(
    workDayStandUp,
    function () {
        bot.send(
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

// const workJob = new CronJob(
//     upAss,
//     function () {
//         workBot.send(
//             threeUrl,
//             {
//                 msgtype: 'text',
//                 text: { content: '测试！请提肛！！' },
//                 at: { atMobiles: userList },
//             },
//             workBot.stop
//         )
//     },
//     null,
//     true,
//     'Asia/Shanghai'
// )
// 发送消息
job.start()
loveJob.start()
nightJob.start()
drinkJob.start()
// workJob.start()
