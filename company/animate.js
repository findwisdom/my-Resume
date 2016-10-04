/**
 * Created by wisdom king on 2016/2/14.
 */

$(function(){
    n =0
    function run(){
         if (n<($(".img_box img").length-1)){
             n=n+1;
         }else{
             $(".img_box").css("marginLeft",0);
             n=1;
         }
        $(".img_box").animate({marginLeft:-960*n},2000);
    }
    setInterval(run,5000);
})