//获取usid并返回
var info_page = document.getElementById("loginbu")
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

// info_page.onclick = function(){
function log(){
    document.getElementById("result").innerHTML="ppp"
    var usid = document.getElementById("userid")
    var psid = document.getElementById("passid")
    xmlhttp.open("get", "http://47.97.18.183:8002/user/test", true)
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xmlhttp.send();
    res = "ppp"
    document.getElementById("result").innerText="结束"
}