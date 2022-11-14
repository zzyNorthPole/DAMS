var log_out = document.getElementById("log_out");
log_out.onclick = function() {
    var xml_http_log_out = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http_log_out.onreadystatechange = function() {
        if (xml_http_log_out.readyState == 4 && xml_http_log_out.status == 200) {
            window.location.href = "login.html";
        }
    }
    xml_http_log_out.open("get", "http://47.97.18.183:8002/auth/logout", true);
    xml_http_log_out.withCredentials = true;
    xml_http_log_out.send();
}