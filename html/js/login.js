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

// in_page.onclick = function(){
function log(){
    document.getElementById("result").innerHTML="ppp"
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