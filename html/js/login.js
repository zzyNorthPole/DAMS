var in_page = document.getElementById("loginbu")
var res = document.getElementById("result")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    res = "登录成功"
    }
    else if(xmlhttp.readyState==4 && xmlhttp.status==401){
        res = "登录失败"
    }
    else
        res = "qqq"
}

in_page.onclick = function(){
    var usid = document.getElementById("userid")
    var psid = document.getElementById("passid")
    xmlhttp.open("post", "http://47.97.18.183:8002/identity/login", true)
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xmlhttp.send('password='+usid+'&username='+psid);
    res = "ppp"
}