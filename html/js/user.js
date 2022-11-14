//TODO：密码重置接口如何获取usid
// var in_page = document.getElementById("loginbu")
// var res = document.getElementById("result")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    document.getElementById("result").innerHTML="重置成功"
    }
    // else if(xmlhttp.readyState==4 && xmlhttp.status==401){
    //     document.getElementById("result").text="登录成功"
    // }
    else
        document.getElementById("result").innerHTML="重置失败"
}

function post(url, Work, form) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            Work();
        }
    }
    xml_http.open("post", url, true);
    xml_http.setRequestHeader("Content-Type", "application/json");
    xml_http.send(form);
}

function _(){}

// in_page.onclick = function(){
function reset(user){
    // document.getElementById("result").innerHTML="ppp"
    // var usid = document.getElementById("userid")
    // xmlhttp.open("post", "/user/"+usid+"/reset-password", true)
    // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    post("http://47.97.18.183:8002/admin/user/"+user+"/reset-password",_ ,'new password=123456')
    // xmlhttp.send('new password=123456');
    document.getElementById("result").innerText="重置结束"
}