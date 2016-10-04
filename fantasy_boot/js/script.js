/**
 * Created by wisdom king on 2016/3/27.
 */
var lineChartData = {
    labels:["周一","周二","周三" ,"周四","周五","周六","周日"],
    datasets:[
    {
        //统计表背景颜色
        fillColor:"rgba(177,177,177,0.2)",
        //统计表画笔颜色
        strokeColor:"#b1b1b1",
        //点的颜色
        pointColor:"#b1b1b1",
        //点边框的颜色
        pointStokeColor:"#fff",
        //鼠标触发时点的颜色
        pointHighlightFill:"#fff",
        //鼠标触发时点边框的颜色
        pointHighlightStoke:"rgba(220,220,220,1)",
        //Y坐标数据
        data:[600,800,500,600,500,600,200,1000]
    },
        {//统计表背景颜色
        fillColor:"rgba(92,184,0,0.1)",
        //统计表画笔颜色
        strokeColor:"rgba(92,184,0,1)",
        //点的颜色
        pointColor:"rgba(23,126,23,1)",
        //点边框的颜色
        pointStokeColor:"#fff",
        //鼠标触发时点的颜色
        pointHighlightFill:"#fff",
        //鼠标触发时点边框的颜色
        pointHighlightStoke:"rgba(151,187,205,1)",
        //Y坐标数据
        data:[500,400,300,700,500,300,400,1000]
        }
    ]
}
window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData,{
        responsive:true
    })
}