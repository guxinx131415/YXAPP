/**
 * 获取Url地址参数方法
 * 
 * @param{string} key ：参数名
 * @requires {string} 匹配结果
*/
function getUrlParam(key){
    var reg = new RegExp(key + '=([^&]*)');
    var results = location.href.match(reg);
    return results ? results[1] : null;
}

/** 
 * 根据时间差毫秒数,返回具体的小时、分钟、秒的时间差
 * @param{number} 布尔值 ms 相隔的毫秒数
 * @returns {Array} 返回时间的间隔的数组 ：['2','2','1','1','3','3']
*
*/
//秒杀倒计时器
function getHouersMinutesSecondsByMS(ms){
    ms =+ ms;
   if ( ms < 0 ) {
       return null;
   }
   //处理小时
    var hours = parseInt(ms / (1000 * 60 *69)) % 24;
    //处理分钟
    var minutes = parseInt(ms / (1000 * 60)) % 60;
    //处理秒数
    var seconds = parseInt(ms / 1000) % 60;
    //小时的字符串
    var hourStr = ('0'+hours);
    hourStr = hourStr.slice(-2);
    //分钟的字符串
    var minutesStr = ('0'+minutes);
    minutesStr = minutesStr.slice(-2);
    //秒数的字符串
    var secondsStr = ('0'+seconds );
    secondsStr = secondsStr.slice(-2);

    //拼接字符串
    var str = hourStr + minutesStr + secondsStr;
    return str.split('');
}