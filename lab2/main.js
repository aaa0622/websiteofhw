$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x=0;x<topicCount;x++)
    {
        isgray = judgegray(new Date(startDate.getTime()+x*7*dayUnit).toLocaleDateString());
        console.log(isgray);
        if(isgray)
            $("#courseTable").append(+"<tr>"+"<td>"+(x+1)+"</td>"+"<td>"+"<font  style=\"color:gray;\">"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</font>"+"</td>"+"<td>"+topic[x]+"</td>"+"</tr>");
        else
            $("#courseTable").append("<tr>"+"<td>"+(x+1)+"</td>"+"<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>"+"<td>"+topic[x]+"</td>"+"</tr>");
        
    }
});