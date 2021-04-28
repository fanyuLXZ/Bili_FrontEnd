let now = new Date()
let last_day = new Date(now)
last_day.setDate(last_day.getDate()-1)
let last_week = new Date(now)
last_week.setDate(last_week.getDate()-7)
let last_month = new Date(now)
last_month.setMonth(last_month.getMonth()-1)
function format(date){
    return Math.floor(date.valueOf()/100000000)
}
export default [
    {
        label:"1个月前",
        condition:time=> {
            let date = new Date(time)
            return format(date)<format(last_month)
        },
        class:"lastthreemonthlabel"
    },
    {
        label:"1周前",
        condition:time=> {
            let date = new Date(time)
            return format(date)<format(last_week)&&format(date)>=format(last_month)
        },
        class:"lastmonthlabel"
    },
    {
        label:"近1周",
        condition:time=> {
            let date= new Date(time)
            return format(date)<format(last_day)&&format(date)>=format(last_week)
        },
        class:"lastweeklabel"
    },
    {
        label:"昨天",
        condition:time=> {
            let date = new Date(time)
            return format(date)===format(last_day)
        },
        class:"lastdaylabel"
    },
    {
        label:"今天",
        condition:time=> {
            let date= new Date(time)
            return format(date)===format(now)
        },
        class:"todaylabel"
    }
]