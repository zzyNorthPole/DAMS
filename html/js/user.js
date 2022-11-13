//TODO：密码重置接口如何获取usid
// var in_page = document.getElementById("loginbu")
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

// in_page.onclick = function(){
function reset(){
    // document.getElementById("result").innerHTML="ppp"
    var usid = document.getElementById("userid")
    xmlhttp.open("post", "/user/"+usid+"/reset-password", true)
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xmlhttp.send('new password=a1234567');
    // document.getElementById("result").innerText="结束"
}