var xmlhttp2 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp2.onreadystatechange = function() {
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200) {
	    var text = xmlhttp2.responseText;
        var obj = JSON.parse(text);
        var str = "";
        for (var i in obj) {
            let tmp = "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["name"]
            + "</div>"
            + "</div>"
            + "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["user_type_str"]
            + "</div>"
            + "</div>"
            + "<div style=\"width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["username"]
            + "</div>"
            + "</div>"
            + "<div style=\"width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["department"]
            + "</div>"
            + "</div>"
            + "<div style=\"width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["building_label"] + obj[i]["dormitory_label"]
            + "</div>"
            + "</div>"
            + "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
            + obj[i]["check_in"]
            + "</div>"
            + "</div>"
            + "<div class=\"person_manage_look\" style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
            + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color: rgba(2, 149, 255, 1)\">"
            + "查看"
            + "</div>"
            + "</div>"
            str += tmp             
        }
        document.getElementById("person_manage_lines").innerHTML = str;
        var person_manage_look = document.getElementsByClassName("person_manage_look")
        for (var j = 0; j < person_manage_look.length; ++j) {
            let person_manage_look_buttom = person_manage_look[j]
            person_manage_look_buttom.onclick = function() {
                document.getElementById("person_manage_right_part").style.display = "none"
                document.getElementById("person_manage_right_part_mask").style.display = "block"
            }
        }
    }
}
xmlhttp2.open("get", "http://47.97.18.183:8002/user", true);
xmlhttp2.send();

var xmlhttp3 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp3.onreadystatechange = function() {
    if (xmlhttp3.readyState==4 && xmlhttp3.status==200) {
        var text = xmlhttp3.responseText
        var obj = JSON.parse(text)
        var str = "<div class=\"down_content_txt\" style=\"width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"
        +"</div>"
        +"<hr style=\"width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">";
        for (let i in obj) {
            let tmp = "<div class=\"down_content_txt\" style=\"width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"
            +"<div style=\"width: 12vw;margin-top: 0.5vh;margin-bottom: 0.5vh;float: left;\">"
            +obj[i]
            +"</div>"
            +"</div>"
            +"<hr style=\"width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">"
            str += tmp;
        }
        document.getElementById("person_manage_type_content").innerHTML = str;
        let person_manage_type_down_txt = document.getElementById("person_manage_type_content").getElementsByClassName("down_content_txt");
        for (let i in person_manage_type_down_txt) {
            let tmp_type = person_manage_type_down_txt[i];
            tmp_type.onclick = function() {
                document.getElementById("person_manage_type_bottom").innerHTML = tmp_type.innerHTML;
            }
        }
    }
}
xmlhttp3.open("get", "http://47.97.18.183:8002/summary/type", true);
xmlhttp3.send();

var xmlhttp4 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp4.onreadystatechange = function() {
    if (xmlhttp4.readyState==4 && xmlhttp4.status==200) {
        var text = xmlhttp4.responseText
        var obj = JSON.parse(text)
        var str = "<div class=\"down_content_txt\" style=\"width: 20vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"       
        +"</div>"
        +"<hr style=\"width: 18vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">";
        for (let i in obj) {
            let tmp = "<div class=\"down_content_txt\" style=\"width: 20vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"
            +"<div style=\"width: 20vw;margin-top: 0.5vh;margin-bottom: 0.5vh;float: left;\">"
            +obj[i]
            +"</div>"
            +"</div>"
            +"<hr style=\"width: 18vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">";
            str += tmp;
        }
        document.getElementById("person_manage_department_content").innerHTML = str;
        let person_manage_department_down_txt = document.getElementById("person_manage_department_content").getElementsByClassName("down_content_txt");
        for (let i in person_manage_department_down_txt) {
            let tmp_department = person_manage_department_down_txt[i];
            tmp_department.onclick = function() {
                document.getElementById("person_manage_department_bottom").innerHTML = tmp_department.innerHTML;
            }
        }
    }
}
xmlhttp4.open("get", "http://47.97.18.183:8002/summary/department", true);
xmlhttp4.send();