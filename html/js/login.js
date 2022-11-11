var in_page = document.getElementById("loginbu")
// var res = document.getElementById("result")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    document.getElementById("result").innerHTML="登录成功"
        document.location.href = 'a.html'
    }
    // else if(xmlhttp.readyState==4 && xmlhttp.status==401){
    //     document.getElementById("result").text="登录成功"
    // }
    else
        document.getElementById("result").innerHTML="登录失败"
}

// in_page.onclick = function(){
function log(){
    document.getElementById("result").innerHTML="ppp"
    var usid = document.getElementById("userid")
    var psid = document.getElementById("passid")
    xmlhttp.open("post", "http://47.97.18.183:8002/identity/login", true)
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xmlhttp.send('password='+usid+'&username='+psid);
    res = "ppp"
    document.getElementById("result").innerText="结束"
}