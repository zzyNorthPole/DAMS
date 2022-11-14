var full_building_information;
var dormitory_manage_right_part = document.getElementById("dormitory_manage_right_part");
var dormitory_manage_right_part_mask = document.getElementById("dormitory_manage_right_part_mask");

function build_content(content_id, content_obj, uuid, content_txt_style, hr_style, flag) {
    var tmp_content_element = document.getElementById(content_id);

    // delete previous children elements
    while (tmp_content_element.firstChild)
        tmp_content_element.removeChild(tmp_content_element.firstChild);

    var tmp_init_div = document.createElement('div');
    tmp_init_div.style = content_txt_style;
    tmp_init_div.classList.add("down_content_txt");
    tmp_content_element.appendChild(tmp_init_div);
    if (flag == 1) {
        var tmp_uuid = document.createElement('div');
        tmp_uuid.style.display = "none";
        tmp_uuid.classList.add("uuid");
        tmp_content_element.appendChild(tmp_uuid);
    }
    var tmp_init_hr = document.createElement('hr');
    tmp_init_hr.style = hr_style;
    tmp_content_element.appendChild(tmp_init_hr);
    for (var i in content_obj) {
        var tmp_div = document.createElement('div');
        tmp_div.style = content_txt_style;
        tmp_div.classList.add("down_content_txt");
        var tmp_div_child = document.createElement('div');
        tmp_div_child.style = "margin-top:0.5vh;margin-bottom:0.5vh;";
        tmp_div_child.innerText = content_obj[i];
        tmp_div.appendChild(tmp_div_child);
        tmp_content_element.appendChild(tmp_div);
        if (flag == 1) {
            var tmp_uuid = document.createElement('div');
            tmp_uuid.style.display = "none";
            tmp_uuid.classList.add("uuid");
            tmp_uuid.innerText = uuid[i];
            tmp_content_element.appendChild(tmp_uuid);
        }
        var tmp_hr = document.createElement('hr');
        tmp_hr.style = hr_style;
        tmp_content_element.appendChild(tmp_hr);
    }
}

function set_table(a, b) {
    for (var i in a) {
        let tmp = a[i];
        document.getElementById(tmp).innerHTML = b[i];
    }
}

function building_table_update(obj) {
    set_table(
        [
            "table_building_floors",
            "table_building_dormitories",
            "table_building_persons"
        ],
        [
            0,
            obj["total_dormitories"],
            0
        ]
    );
}

function certain_dormitory(obj) {
    var tmp_label = document.getElementById("certain_dormitory_label");
    while (tmp_label.firstChild) tmp_label.removeChild(tmp_label.firstChild);
    var tmp_label_child = document.createElement('div');
    tmp_label_child.style = "margin-top: 0.5vh;margin-bottom: 0.5vh;";
    tmp_label_child.innerText = obj["label"];
    tmp_label.appendChild(tmp_label_child);
    var tmp_label_uuid = document.createElement('div');
    tmp_label_uuid.style.display = "none";
    tmp_label_uuid.innerText = obj["uuid"];
    tmp_label.appendChild(tmp_label_uuid);

    var certain_dormitory_member = document.getElementById("certain_dormitory_member");
    while (certain_dormitory_member.firstChild) certain_dormitory_member.removeChild(certain_dormitory_member.firstChild);
    console.log(obj["members"].length);
    for (let i = 1; i <= 4; ++i) {
        for (let j in obj["members"]) {
            let tmp = obj["members"][j];
            if (tmp["bed_position"] == i) {
        		let certain_dormitory_member_line = document.createElement('div');
        		certain_dormitory_member_line.style = "display: flex";

        		let tmp_bed = document.createElement('div');
        		tmp_bed.style = "width: 5vw;height: 4.8vh;margin-left: 2vw;margin-top: 0.2vh;font-size: 2.5vmin;font-weight: 400;";
        		tmp_bed.innerText = tmp["bed_position"];
        		certain_dormitory_member_line.appendChild(tmp_bed);
        		console.log(tmp_bed.innerText);

        		let tmp_name = document.createElement('div');
        		tmp_name.style = "width: 10vw;height: 5vh;margin-left: 2vw;font-size: 2.5vmin;font-weight: 400;";
        		tmp_name.innerText = tmp["name"];
        		certain_dormitory_member_line.appendChild(tmp_name);

        		let tmp_department = document.createElement('div');
        		tmp_department.style = "width: 15vw;height: 5vh;margin-left: 2vw;font-size: 2.5vmin;font-weight: 400;";
        		tmp_department.innerText = tmp["department"];
        		certain_dormitory_member_line.appendChild(tmp_department);

                let tmp_username = document.createElement('div');
                tmp_username.style.display = "none";
                tmp_username.classList.add("username");
                tmp_username.innerText = tmp["username"];
                certain_dormitory_member_line.appendChild(tmp_username);

        		let tmp_grade = document.createElement('div');
        		tmp_grade.style = "width: 5vw;height: 4.8vh;margin-left: 2vw;margin-top: 0.2vh;font-size: 2.5vmin;font-weight: 400;";
        		certain_dormitory_member_line.appendChild(tmp_grade);

        		let tmp_state = document.createElement('div');
        		tmp_state.style = "width: 5vw;height: 5vh;margin-left: 2vw;font-size: 2.5vmin;font-weight: 400;";
                tmp_state.classList.add("state");
        		if (tmp["checked_in"] == 0) tmp_state.innerText = "未入住";
        		else tmp_state.innerText = "已入住";
        		certain_dormitory_member_line.appendChild(tmp_state);

        		let tmp_op = document.createElement('div');
        		tmp_op.style = "width: 5vw;height: 5vh;margin-left: 2vw;font-size: 2.5vmin;font-weight: 400;color: rgba(2, 149, 255, 1);";
        		tmp_op.classList.add("certain_dormitory_member_op");
        		if (tmp["checked_in"] == 0) tmp_op.innerText = "入住";
        		else tmp_op.innerText = "退宿";
        		certain_dormitory_member_line.appendChild(tmp_op);

        		certain_dormitory_member.appendChild(certain_dormitory_member_line);
            }
        }
    }

    var certain_dormitory_member_username_element = document.getElementById("certain_dormitory_member").getElementsByClassName("username");
    var certain_dormitory_member_state_element = document.getElementById("certain_dormitory_member").getElementsByClassName("state");
    var certain_dormitory_member_op_element = document.getElementById("certain_dormitory_member").getElementsByClassName("certain_dormitory_member_op");
    let check_in_or_out_flag = [0, 0, 0, 0];
    for (let i in certain_dormitory_member_op_element) {
        let tmp = certain_dormitory_member_op_element[i];
        tmp.onclick = function() {
            if (tmp.innerText == "入住") {
                check_in_or_out_flag[i] = 1;
                certain_dormitory_member_state_element[i].innerText = "已入住";
                tmp.innerText = "退宿";
                //post("http://47.97.18.183:8002/admin/user/"+certain_dormitory_member_username_element[i].innerText+"/check-in", function(){location.reload();}, "");
            }
            else if (tmp.innerText == "退宿") {
                check_in_or_out_flag[i] = -1;
                certain_dormitory_member_state_element[i].innerText = "未入住";
                tmp.innerText = "入住";
                //post("http://47.97.18.183:8002/admin/user/"+certain_dormitory_member_username_element[i].innerText+"/check-out", function(){location.reload();}, "");
            }
        }
    }
    let dormitory_manage_finish = document.getElementById("dormitory_manage_finish");
    dormitory_manage_finish.onclick = function() {
        console.log(check_in_or_out_flag);
        for (let i in certain_dormitory_member_op_element) {
            if (check_in_or_out_flag[i] == 1) {
                post("http://47.97.18.183:8002/admin/user/"+certain_dormitory_member_username_element[i].innerText+"/check-in", function(){}, "");
            }
            else if (check_in_or_out_flag[i] == -1) {
                post("http://47.97.18.183:8002/admin/user/"+certain_dormitory_member_username_element[i].innerText+"/check-out", function(){}, "");
            }
        }
        var main_page = document.getElementById("dormitory_manage_right_part")
        var main_page_mask = document.getElementById("dormitory_manage_right_part_mask")
        main_page_mask.style.display = "none"
        main_page.style.display = "block"
    }

    let dormitory_manage_cancel = document.getElementById("dormitory_manage_cancel")
    dormitory_manage_cancel.onclick = function() {
        var main_page = document.getElementById("dormitory_manage_right_part")
        var main_page_mask = document.getElementById("dormitory_manage_right_part_mask")
        main_page_mask.style.display = "none"
        main_page.style.display = "block"
    }
    dormitory_manage_right_part_mask.style.display = "inline-block";
    dormitory_manage_right_part.style.display = "none";
}

function dormitory_delete() {
    location.reload();
}

function dormitory_update(obj, uuid) {
    var tmp_line_element = document.getElementById("dormitory_manage_right_part_lines");
    while (tmp_line_element.firstChild)
        tmp_line_element.removeChild(tmp_line_element.firstChild);
    console.log(obj);
    for (var i in obj) {
        var tmp_label = document.createElement('div');
        tmp_label.style = "width: 5vw;height: 5vh;margin-left: 2.5vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;";
        tmp_label.innerText = obj[i]["label"];
        tmp_line_element.appendChild(tmp_label);

        var tmp_bed = document.createElement('div');
        tmp_bed.style = "width: 7.5vw;height: 5vh;margin-left: 1vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;";
        tmp_bed.innerText = obj[i]["assigned_beds"] + '/' + obj[i]["total_beds"];
        tmp_line_element.appendChild(tmp_bed);

        var tmp_rep = document.createElement('div');
        tmp_rep.style = "width: 5vw;height: 5vh;margin-left: 1vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;";
        tmp_rep.innerText = obj[i]["rep_name"];
        tmp_line_element.appendChild(tmp_rep);

        var tmp_member = document.createElement('div');
        tmp_member.style = "width: 20vw;height: 5vh;margin-left: 1vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;float: left;";
        tmp_member.innerText = obj[i]["member_names"];
        tmp_line_element.appendChild(tmp_member);

        var tmp_manage = document.createElement('div');
        tmp_manage.style = "width: 5vw;height: 5vh;margin-left: 1vw;margin-right: 0vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;color: rgba(2, 149, 255, 1);float: left;";
        tmp_manage.classList.add("dormitory_manage");
        tmp_manage.classList.add("manage_color");
        tmp_manage.innerText = "管理";
        tmp_line_element.appendChild(tmp_manage);

        var tmp_delete = document.createElement('div');
        tmp_delete.style = "width: 5vw;height: 5vh;margin-left: 1vw;margin-right: 2.5vw;margin-top: 1vh;font-size: 2.5vmin;font-weight: 400;color: rgba(2, 149, 255, 1);float: left;";
        tmp_delete.classList.add("dormitory_delete");
        tmp_delete.classList.add("manage_color");
        tmp_delete.innerText = "删除";
        tmp_line_element.appendChild(tmp_delete);

        var tmp_uuid = document.createElement('div');
        tmp_uuid.style.display = "none";
        tmp_uuid.classList.add("uuid");
        tmp_uuid.innerText = obj[i]["uuid"];
        tmp_line_element.appendChild(tmp_uuid);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 53vw;margin-left: 2.5vw;margin-right: 2.5vw;color: rgba(217, 217, 217, 0.3);";
        tmp_line_element.appendChild(tmp_hr);
    }

    var tmp_line_manage_element = tmp_line_element.getElementsByClassName("dormitory_manage");
    var tmp_line_delete_element = tmp_line_element.getElementsByClassName("dormitory_delete");
    var tmp_line_uuid_element = tmp_line_element.getElementsByClassName("uuid");
    for (var i in tmp_line_manage_element) {
        let tmp = tmp_line_manage_element[i];
        let tmp_uuid = tmp_line_uuid_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400
        }
        tmp.onclick = function() {
            get("http://47.97.18.183:8002/admin/dormitory/"+tmp_uuid.innerText+"?building="+uuid, certain_dormitory);
        }
    }
    for (var i in tmp_line_delete_element) {
        let tmp = tmp_line_delete_element[i];
        let tmp_uuid = tmp_line_uuid_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400
        }
        tmp.onclick = function() {
            delete_("http://47.97.18.183:8002/admin/dormitory/"+tmp_uuid.innerText+"?building="+uuid, dormitory_delete);
        }
    }
}

function set_certain_building_onclick(tmp_down_txt, uuid) {
    document.getElementById("building_bottom").innerHTML = tmp_down_txt.innerHTML;
    document.getElementById("table_building_building").innerHTML = tmp_down_txt.innerHTML;
    get("http://47.97.18.183:8002/admin/building/"+uuid.innerText, building_table_update, "", 0);
    get("http://47.97.18.183:8002/admin/dormitory?building="+uuid.innerText, dormitory_update, uuid.innerText, 1);
}

function set_certain_dormitory_manage_add_label_onclick(tmp_down_txt, uuid) {
    let tmp_bottom = document.getElementById("dormitory_manage_add_label_bottom");
    tmp_bottom.innerHTML = tmp_down_txt.innerHTML;
    var tmp_uuid = document.createElement('div');
    tmp_uuid.style.display = "none";
    tmp_uuid.innerText = uuid.innerText;
    tmp_uuid.classList.add("uuid");
    tmp_bottom.appendChild(tmp_uuid);
}

function set_building_onclick() {
    var content_down_txt = document.getElementById("building_content").getElementsByClassName("down_content_txt");
    var uuid = document.getElementById("building_content").getElementsByClassName("uuid");
    for (let i in content_down_txt) {
        let tmp_down_txt = content_down_txt[i];
        tmp_down_txt.onclick = function() {
            set_certain_building_onclick(tmp_down_txt, uuid[i]);
            set_certain_dormitory_manage_add_label_onclick(tmp_down_txt, uuid[i]);
        }
    }
}

function set_dormitory_manage_add_label_onclick() {
    var content_down_txt = document.getElementById("dormitory_manage_add_label_content").getElementsByClassName("down_content_txt");
    var uuid = document.getElementById("dormitory_manage_add_label_content").getElementsByClassName("uuid");
    for (let i in content_down_txt) {
        let tmp_down_txt = content_down_txt[i];
        tmp_down_txt.onclick = function() {
            set_certain_building_onclick(tmp_down_txt, uuid[i]);
            set_certain_dormitory_manage_add_label_onclick(tmp_down_txt, uuid[i]);
        }
    }
}

function set_certain_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i) {
    document.getElementById("area_bottom").innerHTML = tmp_down_txt.innerHTML;
    set_table(
        [
            "table_area",
            "table_area_buildings",
            "table_area_dormitories",
            "table_area_persons"
        ],
        [
            tmp_down_txt.innerHTML,
            building_cnt[i - 1],
            dormitory_cnt[i - 1],
            person_cnt[i - 1]
        ]
    );

    let buildings = [], uuid = [];
    for (let j in obj) {
        if (obj[j]["area"] == tmp_down_txt.innerText) {
            buildings.push(obj[j]["label"]);
            uuid.push(obj[j]["uuid"]);
        }
    }
    build_content(
        "building_content", 
        buildings, 
        uuid, 
        "width: 25vw;height: 5vh;text-align: center;font-size: 2.7vmin;margin-left: 1vw;margin-right: 1vw;margin-top: 1vh;margin-bottom: 1vh;", 
        "width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);", 
        1
    );

    set_building_onclick();
}

function set_certain_dormitory_manage_add_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i) {
    document.getElementById("dormitory_manage_add_area_bottom").innerHTML = tmp_down_txt.innerHTML;

    let buildings = [], uuid = [];
    for (let j in obj) {
        if (obj[j]["area"] == tmp_down_txt.innerText) {
            buildings.push(obj[j]["label"]);
            uuid.push(obj[j]["uuid"]);
        }
    }

    build_content(
        "dormitory_manage_add_label_content", 
        buildings, 
        uuid, 
        "width: 18vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;", 
        "width: 18vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);", 
        1
    );

    set_dormitory_manage_add_label_onclick();
}

function set_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt) {
    var content_down_txt = document.getElementById("area_content").getElementsByClassName("down_content_txt");
    for (let i in content_down_txt) {
        let tmp_down_txt = content_down_txt[i];
        tmp_down_txt.onclick = function() {
            set_certain_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
            set_certain_dormitory_manage_add_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
            set_certain_building_manage_area_onclick(obj, tmp_down_txt);
        }
    }
}

function set_dormitory_manage_add_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt) {
    var content_down_txt = document.getElementById("dormitory_manage_add_area_content").getElementsByClassName("down_content_txt");
    for (let i in content_down_txt) {
        let tmp_down_txt = content_down_txt[i];
        tmp_down_txt.onclick = function() {
            set_certain_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
            set_certain_dormitory_manage_add_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
            set_certain_building_manage_area_onclick(obj, tmp_down_txt);
        }
    }
}

function building_delete() {
    location.reload();
}

function set_certain_building_manage_area_onclick(obj, tmp_down_txt) {
    let tmp_bottom_element = document.getElementById("building_manage_area_bottom");
    while (tmp_bottom_element.firstChild)
        tmp_bottom_element.removeChild(tmp_bottom_element.firstChild);
    var tmp_bottom_element_txt = document.createElement('div');
    tmp_bottom_element_txt.style = "margin-top:0.5vh";
    tmp_bottom_element_txt.innerText = tmp_down_txt.innerText;
    tmp_bottom_element.appendChild(tmp_bottom_element_txt);

    var tmp_line_element = document.getElementById("building_manage_lines");
    while (tmp_line_element.firstChild)
        tmp_line_element.removeChild(tmp_line_element.firstChild);
    for (var j in obj) {
        let tmp = obj[j];
        if (tmp["area"] == tmp_down_txt.innerText) {
            var tmp_label = document.createElement('div');
            tmp_label.style = "width: 13vw;height: 5vh;margin-left: 2vw;font-size: 2.7vmin;float: left;";
            tmp_label.innerText = tmp["label"];
            tmp_label.classList.add("building_manage_label");
            tmp_line_element.appendChild(tmp_label);

            var tmp_uuid = document.createElement('div');
            tmp_uuid.style.display = "none";
            tmp_uuid.classList.add("uuid");
            tmp_uuid.innerText = tmp["uuid"];
            tmp_line_element.appendChild(tmp_uuid);

            var tmp_sex = document.createElement('div');
            tmp_sex.style = "width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
            tmp_sex.innerText = tmp["sex"];
            tmp_line_element.appendChild(tmp_sex);

            var tmp_total_dormitories = document.createElement('div');
            tmp_total_dormitories.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
            tmp_total_dormitories.innerText = tmp["total_dormitories"];
            tmp_line_element.appendChild(tmp_total_dormitories);

            var tmp_total_beds = document.createElement('div');
            tmp_total_beds.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
            tmp_total_beds.innerText = tmp["total_beds"];
            tmp_line_element.appendChild(tmp_total_beds);

            var tmp_assigned_beds = document.createElement('div');
            tmp_assigned_beds.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
            tmp_assigned_beds.innerText = tmp["assigned_beds"];
            tmp_line_element.appendChild(tmp_assigned_beds);

            var tmp_comment = document.createElement('div');
            tmp_comment.style = "width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
            tmp_comment.innerText = tmp["comment"];
            tmp_line_element.appendChild(tmp_comment);

            var tmp_look = document.createElement('div');
            tmp_look.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;color:rgba(2, 149, 255, 1);";
            tmp_look.classList.add("building_manage_look");
            tmp_look.innerText = "查看";
            tmp_line_element.appendChild(tmp_look);

            var tmp_delete = document.createElement('div');
            tmp_delete.style = "width: 8vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;color:rgba(2, 149, 255, 1);";
            tmp_delete.classList.add("building_manage_delete");
            tmp_delete.innerText = "删除";
            tmp_line_element.appendChild(tmp_delete);
        }
    }

    let tmp_label_element = tmp_line_element.getElementsByClassName("building_manage_label");
    let tmp_look_element = tmp_line_element.getElementsByClassName("building_manage_look");
    let tmp_delete_element = tmp_line_element.getElementsByClassName("building_manage_delete");
    let tmp_uuid_element = tmp_line_element.getElementsByClassName("uuid");

    for (let j in tmp_look_element) {
        let tmp = tmp_look_element[j];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            set_certain_building_onclick(tmp_label_element[j], tmp_uuid_element[j]);
            set_certain_dormitory_manage_add_label_onclick(tmp_label_element[j], tmp_uuid_element[j]);
            right_side[2].style.display = "none";
            right_side[1].style.display = "block";
            flag[2] = 0, flag[1] = 1;
            left_side[2].style.color = "rgba(116, 116, 116, 0.5)";
            left_side[1].style.color = "rgba(21, 21, 21, 1)";
        }
    }

    for (var j in tmp_delete_element) {
        let tmp = tmp_delete_element[j];
        let tmp_uuid = tmp_uuid_element[j];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            delete_("http://47.97.18.183:8002/admin/building/"+tmp_uuid.innerText, building_delete);
        }
    }
}

function set_building_manage_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt) {
    var content_down_txt = document.getElementById("building_manage_area_content").getElementsByClassName("down_content_txt");
    for (let i in content_down_txt) {
        let tmp_down_txt = content_down_txt[i];
        tmp_down_txt.onclick = function() {
            set_certain_building_manage_area_onclick(obj, tmp_down_txt);
            set_certain_dormitory_manage_add_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
            set_certain_area_onclick(obj, tmp_down_txt, building_cnt, dormitory_cnt, person_cnt, i);
        }
    }
}

function area_content_update(obj) {
    full_building_information = obj;

    let area = [], building_cnt = [], dormitory_cnt = [], person_cnt = [];
    for (let i in obj) {
        let tmp = 0, tmp_id = 0;
        for (let j = 0; j < area.length; ++j) {
            if (area[j] == obj[i]["area"]) tmp = 1, tmp_id = j;
        }
        if (tmp == 0) area.push(obj[i]["area"]), building_cnt.push(1), dormitory_cnt.push(Number(obj[i]["total_dormitories"])), person_cnt.push(0);
        else building_cnt[tmp_id] += 1, dormitory_cnt[tmp_id] += Number(obj[i]["total_dormitories"]);
    }

    build_content(
        "area_content", 
        area, 
        [], 
        "width: 25vw;height: 5vh;text-align: center;font-size: 2.7vmin;margin-left: 1vw;margin-right: 1vw;margin-top: 1vh;margin-bottom: 1vh;", 
        "width: 25vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);", 
        0
    );

    build_content(
        "building_manage_area_content",
        area,
        [],
        "width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;",
        "width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);",
        0
    );

    build_content(
        "dormitory_manage_add_area_content",
        area,
        [],
        "width: 18vw;height: 5vh;text-align: center;font-size: 3vmin;margin-left: 1vw;margin-right: 1vw;",
        "width: 18vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);"
    );

    set_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt);

    document.getElementById("dormitory_manage_add_area_bottom").onclick = function() {
        document.getElementById("dormitory_manage_add_area_bottom").style.display = "none";
        document.getElementById("dormitory_manage_add_area_content").style.display = "block";
        document.getElementById("dormitory_manage_add_label_bottom").style.display = "none";
        document.getElementById("dormitory_manage_add_id").style.display = "none";
        document.getElementById("dormitory_manage_add_beds").style.display = "none";
    }

    document.getElementById("dormitory_manage_add_area_content").onclick = function() {
        document.getElementById("dormitory_manage_add_area_bottom").style.display = "block";
        document.getElementById("dormitory_manage_add_area_content").style.display = "none";
        document.getElementById("dormitory_manage_add_label_bottom").style.display = "block";
        document.getElementById("dormitory_manage_add_id").style.display = "block";
        document.getElementById("dormitory_manage_add_beds").style.display = "block";
    }

    document.getElementById("dormitory_manage_add_label_bottom").onclick = function() {
        document.getElementById("dormitory_manage_add_label_bottom").style.display = "none";
        document.getElementById("dormitory_manage_add_label_content").style.display = "block";
        document.getElementById("dormitory_manage_add_id").style.display = "none";
        document.getElementById("dormitory_manage_add_beds").style.display = "none";
    }

    document.getElementById("dormitory_manage_add_label_content").onclick = function() {
        document.getElementById("dormitory_manage_add_label_bottom").style.display = "block";
        document.getElementById("dormitory_manage_add_label_content").style.display = "none";
        document.getElementById("dormitory_manage_add_id").style.display = "block";
        document.getElementById("dormitory_manage_add_beds").style.display = "block";
    }

    set_dormitory_manage_add_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt);

    set_building_manage_area_onclick(obj, building_cnt, dormitory_cnt, person_cnt);
}

get("http://47.97.18.183:8002/admin/building", area_content_update, "", 0);

var table_area_manage = document.getElementById("table_area_manage");
table_area_manage.onclick = function() {
    var tmp_area = document.getElementById("area_bottom");
    if (tmp_area.innerText != "") {
        right_side[1].style.display = "none";
        right_side[2].style.display = "block";
        flag[1] = 0, flag[2] = 1;
        left_side[1].style.color = "rgba(116, 116, 116, 0.5)";
        left_side[2].style.color = "rgba(21, 21, 21, 1)";
    }
}

var building_manage_add = document.getElementById("building_manage_add");
var building_manage_add_building = document.getElementById("building_manage_add_building");
var building_manage_main_page = document.getElementById("building_manage_main_page");
building_manage_add.onclick = function() {
    building_manage_add_building.style.display = "flex";
    building_manage_main_page.style.display = "none";
}

var building_manage_add_finish = document.getElementById("building_manage_add_finish");
function building_manage_add_form_clear() {
    document.getElementById("building_manage_add_area").value = "";
    document.getElementById("building_manage_add_label").value = "";
    document.getElementById("building_manage_add_sex").value = "";
    document.getElementById("building_manage_add_comment").value = "";
    location.reload();
}

building_manage_add_finish.onclick = function() {
    building_manage_add_building.style.display = "none";
    building_manage_main_page.style.display = "block";
    var building_manage_add_area = document.getElementById("building_manage_add_area").value;
    var building_manage_add_label = document.getElementById("building_manage_add_label").value;
    var building_manage_add_sex = document.getElementById("building_manage_add_sex").value;
    var building_manage_add_comment = document.getElementById("building_manage_add_comment").value;
    let tmp = {
        "area": building_manage_add_area,
        "label": building_manage_add_label,
        "sex": building_manage_add_sex,
        "comment": building_manage_add_comment
    };
    post("http://47.97.18.183:8002/admin/building", building_manage_add_form_clear, JSON.stringify(tmp));
}

var building_manage_add_cancel = document.getElementById("building_manage_add_cancel");
building_manage_add_cancel.onclick = function() {
    building_manage_add_building.style.display = "none";
    building_manage_main_page.style.display = "block";
    building_manage_add_form_clear();
}

var dormitory_manage_add = document.getElementById("dormitory_manage_add");
var dormitory_manage_add_dormitory = document.getElementById("dormitory_manage_add_dormitory");
var dormitory_manage_main_page = document.getElementById("dormitory_manage_main_page");
dormitory_manage_add.onclick = function() {
    dormitory_manage_add_dormitory.style.display = "flex";
    dormitory_manage_main_page.style.display = "none";
}

var dormitory_manage_add_finish = document.getElementById("dormitory_manage_add_finish");
function dormitory_manage_add_form_clear() {
    document.getElementById("dormitory_manage_add_id").value = "";
    document.getElementById("dormitory_manage_add_beds").value = "";
    location.reload();
}

dormitory_manage_add_finish.onclick = function() {
    dormitory_manage_add_dormitory.style.display = "none";
    dormitory_manage_main_page.style.display = "block";
    var dormitory_manage_add_uuid = document.getElementById("dormitory_manage_add_label_bottom").getElementsByClassName("uuid")[0].innerText;
    var dormitory_manage_add_id = document.getElementById("dormitory_manage_add_id").value;
    var dormitory_manage_add_beds = document.getElementById("dormitory_manage_add_beds").value;
    let tmp = {
        "label": dormitory_manage_add_id,
        "total_beds": dormitory_manage_add_beds
    }
    post("http://47.97.18.183:8002/admin/dormitory?building="+dormitory_manage_add_uuid, dormitory_manage_add_form_clear, JSON.stringify(tmp));
}

var dormitory_manage_add_cancel = document.getElementById("dormitory_manage_add_cancel");
dormitory_manage_add_cancel.onclick = function() {
    dormitory_manage_add_dormitory.style.display = "none";
    dormitory_manage_main_page.style.display = "block";
    dormitory_manage_add_form_clear();
}
