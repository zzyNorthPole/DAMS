var dormitory_manage_main_page = document.getElementById("dormitory_manage_right_part");
var dormitory_manage_main_page_mask = document.getElementById("dormitory_manage_right_part_mask");

var xmlhttp1 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp1.onreadystatechange = function() {
    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
        var text = xmlhttp1.responseText;
        var obj = JSON.parse(text);
        let area = [], building_cnt = [], dormitory_cnt = [], person_cnt = [];
        for (let i in obj) {
            let tmp = 0, tmp_id = 0;
            for (let j = 0; j < area.length; ++j) {
                if (area[j] == obj[i]["area"]) tmp = 1, tmp_id = j;
            }
            if (tmp == 0) area.push(obj[i]["area"]), building_cnt.push(1), dormitory_cnt.push(Number(obj[i]["total_dormitories"])), person_cnt.push(0);
            else building_cnt[tmp_id] += 1, dormitory_cnt[tmp_id] += Number(obj[i]["total_dormitories"]);
        }
        var area_content_str = "<div class=\"down_content_txt\" style=\"width: 25vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;\"></div>"
        + "<hr style=\"width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\"></hr>"
        for (let i = 0; i < area.length - 1; ++i) {
            let tmp = "<div class=\"down_content_txt\" style=\"width: 25vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;\">"
            + area[i]
            + "</div>"
            + "<hr style=\"width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\"></hr>";
            area_content_str += tmp;
        }
        area_content_str += "<div class=\"down_content_txt\" style=\"width: 25vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;\">";
        area_content_str += area[area.length - 1];
        area_content_str += "</div>";
        document.getElementById("area_content").innerHTML = area_content_str;
        let area_down_txt = document.getElementById("area_content").getElementsByClassName("down_content_txt");
        for (let i = 0; i < area_down_txt.length; i++) {
            let tmp_area_down_txt_bottom = area_down_txt[i];
            tmp_area_down_txt_bottom.onclick = function() {
                document.getElementById("area_bottom").innerHTML = tmp_area_down_txt_bottom.innerHTML;
                document.getElementById("table_area").innerHTML = tmp_area_down_txt_bottom.innerHTML
                document.getElementById("table_area_buildings").innerHTML = building_cnt[i - 1];
                document.getElementById("table_area_dormitories").innerHTML = dormitory_cnt[i - 1];
                document.getElementById("table_area_persons").innerHTML = person_cnt[i - 1];
                let building_content_str = "<div class=\"down_content_txt\" style=\"width: 25vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;\"></div>"
                + "<hr style=\"width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">";
                for (let j in obj) {
                    if (obj[j]["area"] == area[i - 1]) {
                        let tmp = "<div class=\"down_content_txt\" style=\"width: 25vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;\">"
                        + obj[j]["label"]
                        + "<div class=\"uuid\" style=\"display: none\">"
                        + obj[j]["uuid"]
                        +"</div>"
                        + "</div>"
                        + "<hr style=\"width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">";
                        building_content_str += tmp;
                    }
                }
                document.getElementById("building_content").innerHTML = building_content_str;
                let building_down_txt = document.getElementById("building_content").getElementsByClassName("down_content_txt");
                for (let j = 0; j < building_down_txt.length; ++j) {
                    let tmp_building_down_txt_bottom = building_down_txt[j];
                    tmp_building_down_txt_bottom.onclick = function() {
                        document.getElementById("building_bottom").innerHTML = tmp_building_down_txt_bottom.innerHTML;
                        let uuid_str = document.getElementById("building_bottom").getElementsByClassName("uuid")[0].innerHTML;
                        let xmlhttp_son = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        xmlhttp_son.onreadystatechange = function() {
                            if (xmlhttp_son.readyState == 4 && xmlhttp_son.status == 200) {
                                let son_text = xmlhttp_son.responseText;
                                let son_obj = JSON.parse(son_text);
                                document.getElementById("table_building_floors").innerHTML = 0;
                                console.log(son_obj)
                                document.getElementById("table_building_dormitories").innerHTML = son_obj["total_dormitories"];
                                document.getElementById("table_building_persons").innerHTML = 0;

                                let xmlhttp_son_son = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                                xmlhttp_son_son.onreadystatechange = function() {
                                    if (xmlhttp_son_son.readyState == 4 && xmlhttp_son_son.status == 200) {
                                        var son_son_text = xmlhttp_son_son.responseText;
                                        var son_son_obj = JSON.parse(son_son_text);
                                        var dormitory_manage_right_part_lines_str = "";
                                        for (let k in son_son_obj) {
                                            let tmp = "<div style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;\">" + son_son_obj[k]["label"] + "</div>"
                                            + "<div style=\"width: 7.5vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;\">" + son_son_obj[k]["assigned_beds"] + "/" + son_son_obj[k]["total_beds"] + "</div>"
                                            + "<div style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;\">" + son_son_obj[k]["rep_name"] + "</div>"
                                            + "<div style=\"width: 20vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;\">" + son_son_obj[k]["member_names"] + "</div>"
                                            + "<div class=\"dormitory_manage manage_color\" style=\"width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;color: rgba(2, 149, 255, 1);float: left;\">" + "管理"
                                            + "<div style=\"display: none;\">" + son_son_obj[k]["uuid"] + "</div>"
                                            + "</div>"
                                            + "<hr style=\"width: 53vw;margin-left: 2.5vw;margin-right: 2.5vw;color: rgba(217, 217, 217, 0.3);\">";
                                            dormitory_manage_right_part_lines_str += tmp;
                                        }
                                        document.getElementById("dormitory_manage_right_part_lines").innerHTML = dormitory_manage_right_part_lines_str;
                                        let manage_color = document.getElementsByClassName("manage_color");
                                        for (let k = 0; k < manage_color.length; k++) {
                                            let tmp_k = manage_color[k];
                                            tmp_k.onmouseover = function() {
                                                tmp_k.style.fontWeight = 600;
                                            }
                                            tmp_k.onmouseout = function() {
                                                tmp_k.style.fontWeight = 400
                                            }
                                        }
                                        let dormitory_manage = document.getElementsByClassName("dormitory_manage");
                                        for (var k = 0; k < dormitory_manage.length; k++) {
                                            let dormitory_manage_buttom = dormitory_manage[k];
                                            dormitory_manage_buttom.onclick = function() {
                                                let uuid = dormitory_manage_buttom.children[0].innerHTML
                                                console.log(uuid)
                                                let xmlhttp_son_son_son = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
                                                xmlhttp_son_son_son.onreadystatechange = function() {
                                                    if (xmlhttp_son_son_son.readyState == 4 && xmlhttp_son_son_son.status == 200) {
                                                        let son_son_son_text = xmlhttp_son_son_son.responseText
                                                        let son_son_son_obj = JSON.parse(son_son_son_text)
                                                        dormitory_manage_main_page_mask.style.display = "inline-block"
                                                        dormitory_manage_main_page.style.display = "none"
                                                    }
                                                }
                                                xmlhttp_son_son_son.open("get", "http://47.97.18.183:8002/dormitory/"+String(uuid)+"?building="+String(uuid_str), true)
                                                xmlhttp_son_son_son.send()
                                            }
                                        }
                                    }
                                }
                                xmlhttp_son_son.open("get", "http://47.97.18.183:8002/dormitory?building="+String(uuid_str), true);
                                xmlhttp_son_son.send();
                            }
                        }
                        xmlhttp_son.open("get", "http://47.97.18.183:8002/building/" + String(uuid_str), true);
                        xmlhttp_son.send();
                    }
                }
            }
        }

        var building_manage_area_content_str = "<div class=\"down_content_txt\" style=\"width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"
        +"</div>"
        +"<hr style=\"width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">"
        for (let i = 0; i < area.length - 1; ++i) {
            let tmp = "<div class=\"down_content_txt\" style=\"width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">"
            +"<div style=\"width: 12vw;margin-top: 0.5vh;margin-bottom: 0.5vh;float: left;\">"
            + area[i]
            +"</div>"
            +"</div>"
            +"<hr style=\"width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);\">"
            building_manage_area_content_str += tmp;
        }
        building_manage_area_content_str += "<div class=\"down_content_txt\" style=\"width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;\">";
        building_manage_area_content_str += "<div style=\"width: 12vw;margin-top: 0.5vh;margin-bottom: 0.5vh;float: left;\">";
        building_manage_area_content_str += area[area.length - 1];
        building_manage_area_content_str += "</div>";
        building_manage_area_content_str += "</div>";
        document.getElementById("building_manage_area_content").innerHTML = building_manage_area_content_str;
        let building_manage_area_down_txt = document.getElementById("building_manage_area_content").getElementsByClassName("down_content_txt");
        for (let i = 0; i < building_manage_area_down_txt.length; ++i) {
            let tmp_building_manage_area_down_txt_bottom = building_manage_area_down_txt[i];
            tmp_building_manage_area_down_txt_bottom.onclick = function() {
                document.getElementById("building_manage_area_bottom").innerHTML = tmp_building_manage_area_down_txt_bottom.innerHTML;
                var building_manage_lines_str = "";
                for (let j in obj) {
                    if (obj[j]["area"] == area[i - 1]){
                        let tmp = "<div style=\"width: 13vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["label"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["sex"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["total_dormitories"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["total_beds"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["assigned_beds"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
                        +obj[j]["comment"]
                        +"</div>"+"</div>"
                        +"<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div class=\"manage_color\" style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1)\">"
                        +"查看"
                        +"</div>"+"</div>"
                        +"<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
                        +"<div class=\"manage_color\" style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1)\">"
                        +"删除"
                        +"</div>"+"</div>";
                        building_manage_lines_str += tmp;
                    }
                }
                document.getElementById("building_manage_lines").innerHTML = building_manage_lines_str;
            }
        }
    }
}
xmlhttp1.open("get", "http://47.97.18.183:8002/building", true);
xmlhttp1.send();

var building_manage_add = document.getElementById("building_manage_add");
var building_manage_add_building = document.getElementById("building_manage_add_building");
var building_manage_main_page = document.getElementById("building_manage_main_page");
building_manage_add.onclick = function() {
    building_manage_add_building.style.display = "flex";
    building_manage_main_page.style.display = "none";
}

var building_manage_add_finish = document.getElementById("building_manage_add_finish");
building_manage_add_finish.onclick = function() {
    building_manage_add_building.style.display = "none";
    building_manage_main_page.style.display = "block";
    var xmlhttp_add_building = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp_add_building.onreadystatechange = function() {
        if (xmlhttp_add_building.readyState == 4 && xmlhttp_add_building.status == 200) {

        }
    }
    xmlhttp_add_building.open("post", "http://47.97.18.183:8002/building", true)
    xmlhttp_add_building.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var building_manage_add_area = document.getElementById("building_manage_add_area").value
    var building_manage_add_label = document.getElementById("building_manage_add_label").value
    var building_manage_add_sex = document.getElementById("building_manage_add_sex").value
    var building_manage_add_comment = document.getElementById("building_manage_add_comment").value
    var tmp = "{"
    +"\"area\":" +"\"" +building_manage_add_area +"\","
    +"\"comment\":" +"\"" +building_manage_add_comment +"\","
    +"\"label\":" +"\"" +building_manage_add_label +"\","
    +"\"sex\":" +"\"" +building_manage_add_sex +"\""
    +"}";
    console.log(tmp)
    xmlhttp_add_building.send(tmp);
}

var building_manage_add_cancel = document.getElementById("building_manage_add_cancel");
building_manage_add_cancel.onclick = function() {
    building_manage_add_building.style.display = "none";
    building_manage_main_page.style.display = "block";
}