function idf_chosen(obj) {
    if (obj >= 3) {
        document.getElementById("admin_type_left_side").style.display = "block";
        document.getElementById("user_type_left_side").style.display = "none";
    }
    else {
        document.getElementById("admin_type_left_side").style.display = "none";
        document.getElementById("user_type_left_side").style.display = "block";
    }
}
var xml_http_idf = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xml_http_idf.onreadystatechange = function() {
    if (xml_http_idf.readyState == 4) {
        if (xml_http_idf.status == 200) {
            var text = xml_http_idf.responseText;
            var obj = JSON.parse(text);
            idf_chosen(obj);
        }
        else if (xml_http_idf.status == 404) {
            window.location.href = "login.html";
        }
    }
}
xml_http_idf.open("get", "http://47.97.18.183:8002/auth/user-type", true);
xml_http_idf.withCredentials = true;
xml_http_idf.send();