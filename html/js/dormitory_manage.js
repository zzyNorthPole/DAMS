var main_page = document.getElementById("dormitory_manage_right_part")
var main_page_mask = document.getElementById("dormitory_manage_right_part_mask")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    var text = xmlhttp.responseText
        var obj = JSON.parse(text)
        var str = "";
        for (var i in obj) {
            let tmp = "<div style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 600;float: left;\">" + obj[i]["label"] + "</div>"
            + "<div style=\"width: 7.5vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 600;float: left;\">" + obj[i]["assigned_beds"] + "/" + obj[i]["total_beds"] + "</div>"
            + "<div style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 600;float: left;\">" + obj[i]["rep_name"] + "</div>"
            + "<div style=\"width: 20vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 600;float: left;\">" + obj[i]["member_names"] + "</div>"
            + "<div class=\"dormitory_manage\" style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 600;color: rgba(2, 149, 255, 1);float: left;\">" + "管理"
            + "<div style=\"display: none;\">" + obj[i]["uuid"] + "</div>"
            + "</div>"
            + "<hr style=\"width: 53vw;margin-left: 2.5vw;margin-right: 2.5vw;color: rgba(217, 217, 217, 0.3);\">"
            str += tmp             
        }
        document.getElementById("dormitory_manage_right_part_lines").innerHTML = str
        let dormitory_manage = document.getElementsByClassName("dormitory_manage")
        console.log(dormitory_manage.length)
        for (var j = 0; j < dormitory_manage.length; j++) {
            let dormitory_manage_buttom = dormitory_manage[j]
            dormitory_manage_buttom.onclick = function() {
                let uuid = dormitory_manage_buttom.children[0].innerHTML
                console.log(uuid)
                let xmlhttp_son = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
                xmlhttp_son.onreadystatechange = function() {
                    if (xmlhttp_son.readyState == 4 && xmlhttp_son.status == 200) {
                        let son_text = xmlhttp_son.responseText
                        let son_obj = JSON.parse(son_text)
                        console.log(son_obj)
                        main_page_mask.style.display = "block"
                        main_page.style.display = "none"
                    }
                }
                xmlhttp_son.open("get", "http://47.97.18.183:8002/dormitory/"+String(uuid), true)
                xmlhttp_son.send()
            }
        }
    }
}
xmlhttp.open("get", "http://47.97.18.183:8002/dormitory", true)
xmlhttp.send()