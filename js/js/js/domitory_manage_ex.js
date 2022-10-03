var right_part = document.getElementById("right_part")
var right_part_mask = document.getElementById("right_part_mask")
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    var text = xmlhttp.responseText
        var obj = JSON.parse(text)
        var str = "";
        for (var i in obj) {
            let tmp ="<div class=\"second_line\" style=\"width: 660pt; height: 20pt; padding-left: 0pt; padding-top: 0pt;\">"
                    +"<hr style=\"width: 630pt; margin-left: 0pt; margin-top: 20pt; color: rgba(217, 217, 217, 0.3)\"/>"
                    +"<text class=\"domitory_ex\">"+obj[i]["label"]+"</text>"
                    +"<text class=\"live_in_person_num_ex\">"+"1"+"</text>"
                    +"<text class=\"domitory_leader_ex\">"+"100"+"</text>"
                    +"<text class=\"domitory_mem_ex\">"+"100"+"</text>"
                    +"<div class=\"domitory_manage_ex\">"+"管理"
                    +"<text style=\"display: none;\">"+obj[i]["uuid"]+"</text>"
                    +"</div>"
                    +"</div>"
            str += tmp             
        }
        document.getElementById("multi_line").innerHTML = str
        let dme = document.getElementsByClassName("second_line")
        for (var j = 0; j < dme.length; j++) {
            let dme_buttom = dme[j].getElementsByClassName("domitory_manage_ex")[0]
            dme_buttom.onmouseover = function() {
                dme_buttom.style.fontWeight = 800
            }
            dme_buttom.onmouseleave = function() {
                dme_buttom.style.fontWeight = 400
            }
            dme_buttom.onclick = function() {
                /*var bed = document.getElementsByClassName("bed")
                var name = document.getElementsByClassName("name_ex")
                var school = document.getElementsByClassName("school_ex")
                var grade = document.getElementsByClassName("grade_ex")
                var status = document.getElementsByClassName("status_ex")
                var op = document.getElementsByClassName("op_ex")*/
                var uuid = dme_buttom.children[0].innerHTML
                var xmlhttp_son = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
                xmlhttp_son.onreadystatechange = function() {
                    if (xmlhttp_son.readyState==4 && xmlhttp_son.status==200) {
                        var son_text = xmlhttp_son.responseText
                        var son_obj = JSON.parse(son_text)
                        console.log(son_obj)
                        document.getElementById("domitory_building_display").innerHTML = son_obj["label"]
                    }
                }
                console.log(uuid)
                xmlhttp_son.open("get", "http://47.97.18.183:8001/dormitory/"+String(uuid), true)
                xmlhttp_son.send()
                right_part_mask.style.display = "block"
                right_part.style.display = "none"
            }
        }
    }
}
xmlhttp.open("get", "http://47.97.18.183:8001/dormitory", true)
xmlhttp.send()