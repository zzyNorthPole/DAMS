function delete_(url, Work) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            Work();
        }
    }
    xml_http.open("delete", url, true);
    xml_http.withCredentials = true;
    xml_http.send();
}

function post(url, Work, form) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            Work();
        }
    }
    xml_http.open("post", url, true);
    xml_http.withCredentials = true;
    xml_http.setRequestHeader("Content-Type", "application/json");
    xml_http.send(form);
}

function get(url, Work, uuid, flag) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            var text = xml_http.responseText;
            var obj = JSON.parse(text);
            if (flag) Work(obj, uuid);
            else Work(obj);
        }
    }
    xml_http.open("get", url, true);
    xml_http.withCredentials = true;
    xml_http.send();
}

function put(url, Work, form) {
    var xml_http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == 4 && xml_http.status == 200) {
            Work();
        }
    }
    xml_http.open("put", url, true);
    xml_http.withCredentials = true;
    xml_http.setRequestHeader("Content-Type", "application/json");
    xml_http.send(form);
}