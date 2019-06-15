var topic = [
    "尚未開學",
    "國定假日",
    "隨機準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

function judgegray(classdate)
{
    if(classdate === "2019/4/1")
        return true;
    return false;
}

setMonthAndDay(4,1);