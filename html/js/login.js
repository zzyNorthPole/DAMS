var in_page = document.getElementById("login_buttom")
// var res = document.getElementById("result")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            document.getElementById("result").innerHTML = "登录成功";
            window.location.href = 'a.html';
        }
        else {
            document.getElementById("result").innerHTML = "登录失败";
        }
    }
}

function wk()
{
    document.getElementById("result").innerHTML="登录成功";
    window.location.href = 'a.html';
}
function post(url, Work, form) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            Work();
        }
        else
        document.getElementById("result").innerHTML="登录失败"
        // document.getElementById("result").innerHTML=document.getElementById("passid").value
    }
    xml_http.open("post", url, true);
    xml_http.setRequestHeader("Content-Type", "application/json");
    xml_http.withCredentials = true;
    xml_http.send(form);
}

function login(){
    document.getElementById("result").innerHTML="ppp"
    var usid = document.getElementById("userid").value
    var psid = document.getElementById("passid").value
    let user_info = {
        "username": usid,
        "password": psid
    }
    post("http://47.97.18.183:8002/auth/login", wk, JSON.stringify(user_info));
    // res = "ppp"
    // document.getElementById("result").innerText="登录完毕"
    let tmp = {
        "username": document.getElementById("userid").value,
        "password": document.getElementById("passid").value
    };
    xmlhttp.open("post", "http://47.97.18.183:8002/auth/login", true)
    xmlhttp.setRequestHeader("Content-Type", "application/json")
    xmlhttp.withCredentials = true;
    xmlhttp.send(JSON.stringify(tmp));
    res = "ppp"
    document.getElementById("result").innerText="结束"
}
