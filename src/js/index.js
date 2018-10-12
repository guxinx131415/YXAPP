var timer,
timerIndex = -1, // 时钟索引
//空数组
timerFnArray = []; //存放主时钟的回调函数
// 页面加载完成事件
$(function(){
    $('#btnSrch').on('tap',function (e) { 
     //第一步：获取搜索文本框的文本
     var txt =  $('#srchTxt').val() || "";
     //第二步：页面跳转到搜索页面
     window.location.href = './srch.html?kw=' + txt;
    });

//页面卸载之前情理时钟
window.onunload = function() {
  this.clearInterval(timer);
}
//注册时钟回调函数  时间的公用
timerFnArray.push(updateMSTimer);

//初始化秒杀时钟
  timer = setInterval(function() {
    timerIndex += 1;
    timerIndex = timerIndex % 100;
       //放入函数容器
        for(var i = 0; i<timerFnArray.length; i++){
        timerFnArray[i](); //调用数组中的每个回调函数执行
       }
  },200);
});

//更新当前时间与秒杀借宿事件差的span标签数字
function updateMSTimer(){
  //每秒钟去更新页面中的时间
   if(timerIndex % 5 != 0){
     return;
   }
   //满一秒钟 计算时间差，并更新到页面的span中去
 var endDate = new Date(loadData.ms.endTimer);
 var strArr = getHouersMinutesSecondsByMS(endDate - Date.now());

//  绑定事件span更新
  $('#msTimerBox .timer-num').each(function(index, item) {
     $(item).html(strArr[index]);
  });
}

//初始化轮播图
initBannerSwiper();

function initBannerSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      });        
}
