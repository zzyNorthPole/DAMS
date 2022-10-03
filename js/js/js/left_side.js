var dm_func = function() {
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
}

var sc_buttom = document.getElementById("sc")
var dm_buttom = document.getElementById("dm")
var bm_buttom = document.getElementById("bm")
var pm_buttom = document.getElementById("pm")
var rm_buttom = document.getElementById("rm")
var sm_buttom = document.getElementById("sm")
var sc_page = document.getElementById("self_center_page")
var dm_page = document.getElementById("domitory_manage_page")
var bm_page = document.getElementById("building_manage_page")
var sm_page = document.getElementById("stu_manage_page")
var pm_page = document.getElementById("person_manage_page")
var rm_page = document.getElementById("repair_manage_page")
var sc_flag = 0
var dm_flag = 0
var bm_flag = 0
var pm_flag = 0
var rm_flag = 0
var sm_flag = 0

sc_buttom.onmouseover = function() {
    sc_buttom.style.color = "rgba(21, 21, 21, 1)"
}
sc_buttom.onmouseout = function() {
    if (!sc_flag) sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
sc_buttom.onclick = function() {
    sc_buttom.style.color = "rgba(21, 21, 21, 1)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sc_flag = 1
    dm_flag = bm_flag = pm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "block"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

dm_buttom.onmouseover = function() {
    dm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
dm_buttom.onmouseout = function() {
    if (!dm_flag) dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
dm_buttom.onclick = function() {
    dm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_flag = 1
    sc_flag = bm_flag = pm_flag = rm_flag = sm_flag = 0
    dm_func()
    sc_page.style.display = "none"
    dm_page.style.display = "block"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

bm_buttom.onmouseover = function() {
    bm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
bm_buttom.onmouseout = function() {
    if (!bm_flag) bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
bm_buttom.onclick = function() {
    bm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_flag = 1
    sc_flag = dm_flag = pm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "block"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

pm_buttom.onmouseover = function() {
    pm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
pm_buttom.onmouseout = function() {
    if (!pm_flag) pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
pm_buttom.onclick = function() {
    pm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_flag = 1
    sc_flag = bm_flag = dm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "block"
    rm_page.style.display = "none"
}

rm_buttom.onmouseover = function() {
    rm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
rm_buttom.onmouseout = function() {
    if (!rm_flag) rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
rm_buttom.onclick = function() {
    rm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_flag = 1
    sc_flag = bm_flag = pm_flag = dm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "block"
}

sm_buttom.onmouseover = function() {
    sm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
sm_buttom.onmouseout = function() {
    if (!sm_flag) sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
sm_buttom.onclick = function() {
    sm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_flag = 1
    sc_flag = bm_flag = pm_flag = rm_flag = dm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "block"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}
