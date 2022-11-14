//获取usid并返回
// var info_page = document.getElementById("loginbu")
// var res = document.getElementById("result")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    document.getElementById("result").innerHTML="登录成功"
        window.location.href = 'a.html'
    }
    // else if(xmlhttp.readyState==4 && xmlhttp.status==401){
    //     document.getElementById("result").text="登录成功"
    // }
    else
        document.getElementById("result").innerHTML="登录失败"
}

var info = [];

function wk(obj){
    info["assigned"] = obj["assigned"];
    info["building_area"]=obj["building_area"];
    info["building_label"]=obj["building_label"];
    info["department"]=obj["department"];
    info["dormitory_label"]=obj["dormitory_label"];
    info["name"]=obj["name"];
    info["username"]=obj["username"];
}



function get_info(ty){
    return 
}

function get(url, Work, uuid, flag) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            var text = xml_http.responseText;
            var obj = JSON.parse(text);
            if (flag) Work(obj, uuid);
            else Work(obj);
        }
    }
    xml_http.open("get", url, true);
    xml_http.send();
}

// info_page.onclick = function(){
load()
function load(){
    get("http://47.97.18.183:8002/user/", wk)
    
    var inner="<div style=\"width: 90vw; height: 25vh; margin-left: 0vw; margin-top: 0vh; display: flex;\">" +
        "<img src=\"png/swt.jpg\" style=\"width: 10vw; height: 20vh; margin-left: 5vw; margin-top: 5vh; float: left;\">" +
        "<div style=\"width: 78vw; margin-left: 0vw; margin-top: 0vh;font-size: 20pt;\">" +
        "<div style=\"font-size: 5vmin;margin-left: 4vw;margin-top: 5vh; font-weight: 600;\">" +
        info["name"] + "</div>" +
        "<div style=\"font-size: 4vmin;margin-left: 4vw;margin-top: 2vh;\">"+
        info["department"] + "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +

    "<div style=\"width: 85vw; height: 30vh; margin-left: 5vw; margin-top: 2vh;\">" +
    "<div style=\"width: 10vw; height: 5vh; font-size: 2.5vmin; font-weight: 600;\">" +
    "基本信息" +
    "</div>" +
    "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "学工号" +
        "</div>" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
        info["username"] +
        "</div>" +
      "</div>" +
      "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "单位" +
        "</div>" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
        info["department"] +
        "</div>" +
        "</div>" +
      "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "重置密码" +
        "</div>" +
        "<script src=\"js/user.js\"></script>" +
        "<button style=\"width: 5vw; height: 4vh; border-radius: 4pt; background-color:white; font-size: 14pt; left:10vw;\"" +
                "id=\"reset\" onclick=\"reset()\">" +
        "重置" +
        "</button>" +
        "<div style=\"width: 10vw; height: 5vh;\" id=\"result\"></div>"+
      "</div>" +
    "</div>" +
    "</div>" +
    "<div style=\"width: 85vw; height: 30vh; margin-left: 5vw; margin-top: 2vh;\">" +
    "<div style=\"width: 10vw; height: 5vh; font-size: 2.5vmin; font-weight: 600;\">" +
    "个人偏好" +
    "</div>" +
    "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "空调温度" +
        "</div>" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
        info["ac_temperature"] +
        "</div>" +
      "</div>" +
      "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "是否打游戏" +
        "</div>" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
        info["gaming"] +
        "</div>" +
        "</div>" +
      "<div style=\"width: 40vw; height: 5vh; font-size: 2.5vmin; display: flex;\">" +
        "<div style=\"width: 10vw; height: 5vh;\">" +
          "睡觉时间" +
        "</div>" +
        info["sleeping_time"] +
        
      "</div>" +
    "</div>" +
  "</div>"
    ;
    document.getElementById("person_info").innerHTML=inner;
}