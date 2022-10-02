var down_bottom_square = document.getElementById("down_bottom_square")
var down_content_square = document.getElementById("down_content_square")
var down_content = document.getElementsByClassName("down_txt_square_ex")


down_bottom_square.onclick = function() {
    down_bottom_square.style.display = "none"
    down_content_square.style.display = "inline-block"
    var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
    console.log(xmlhttp.status)
    xmlhttp.onreadystatechange = function() {
        console.log(xmlhttp.status)
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			down_content_square.innerHTML = xmlhttp.responseText
		}
	}
    xmlhttp.open("get", "Access-Control-Allow-Origin: http://47.97.18.183:8001/dormitory", true)
    xmlhttp.send()
}

for (var j = 0; j < down_content.length; j++) {
    let tmp = down_content[j];
    tmp.onclick = function() {
        down_content_square.style.display = "none"
        down_bottom_square.style.display = "block"
        down_bottom_square.innerHTML = "<div style=\"margin-top: 5pt\">"+tmp.innerHTML+"</div>"
    }
}