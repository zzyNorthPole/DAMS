var repair_manage_finish = document.getElementById("repair_manage_finish");
var repair_manage_cancel = document.getElementById("repair_manage_cancel");
var repair_manage_mask = document.getElementById("repair_manage_mask");
var repair_manage_main_page = document.getElementById("repair_manage_main_page");

function repair_manage_put() {
    location.reload();
}
repair_manage_finish.onclick = function() {
    var tmp_category = document.getElementById("repair_manage_category").innerText;
    var tmp_comment = document.getElementById("repair_manage_comment").innerText;
    var tmp_state = document.getElementById("repair_manage_state").value;
    var tmp_uuid = document.getElementById("repair_manage_uuid").innerText;
    var tmp_student_username = document.getElementById("repair_manage_student_username").innerText;
    var tmp_repairman_username = document.getElementById("repair_manage_repairman_username").innerText;
    var tmp_repair_manage_building_label = document.getElementById("repair_manage_building_label").innerText;
    let tmp = {
        "building_label": tmp_repair_manage_building_label,
        "category": tmp_category,
        "comment": tmp_comment,
        "repairman_username": tmp_repairman_username,
        "state": tmp_state,
        "student_username": tmp_student_username
    };
    put("http://47.97.18.183:8002/admin/repair/"+tmp_uuid, repair_manage_put, JSON.stringify(tmp));
    repair_manage_mask.style.display = "none"
    repair_manage_main_page.style.display = "block"
}
repair_manage_cancel.onclick = function() {
    repair_manage_mask.style.display = "none"
    repair_manage_main_page.style.display = "block"
}
function set_repair_manage_mask(obj, uuid) {
    document.getElementById("repair_manage_building_label").innerText = obj["building_label"];
    document.getElementById("repair_manage_category").innerText = obj["category"];
    document.getElementById("repair_manage_comment").innerText = obj["comment"];
    document.getElementById("repair_manage_state").value = obj["state"];
    document.getElementById("repair_manage_student_username").innerText = obj["student_username"];
    document.getElementById("repair_manage_repairman_username").innerText = obj["repairman_username"];
    document.getElementById("repair_manage_uuid").innerText = uuid;
}
function repair_manage_delete() {
    location.reload();
}
function repair_information_update(obj) {
    console.log(obj);
    var tmp_line_element = document.getElementById("repair_manage_lines");
    while (tmp_line_element.firstChild)
        tmp_line_element.removeChild(tmp_line_element.firstChild);
    for (let i in obj) {
        let tmp = obj[i];

        var tmp_building_tabel = document.createElement('div');
        tmp_building_tabel.style = "width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;"
        var tmp_building_tabel_child = document.createElement('div');
        tmp_building_tabel_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_building_tabel_child.innerText = tmp["building_label"];
        tmp_building_tabel.appendChild(tmp_building_tabel_child);
        tmp_line_element.appendChild(tmp_building_tabel);

        var tmp_category = document.createElement('div');
        tmp_category.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_category_child = document.createElement('div');
        tmp_category_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_category_child.innerText = tmp["category"];
        tmp_category.appendChild(tmp_category_child);
        tmp_line_element.appendChild(tmp_category);

        var tmp_comment = document.createElement('div');
        tmp_comment.style = "width: 32vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_comment_child = document.createElement('div');
        tmp_comment_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_comment_child.innerText = tmp["comment"];
        tmp_comment.appendChild(tmp_comment_child);
        tmp_line_element.appendChild(tmp_comment);

        var tmp_state = document.createElement('div');
        tmp_state.style = "width: 14vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_state_child = document.createElement('div');
        tmp_state_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_state_child.innerText = tmp["state"];
        tmp_state.appendChild(tmp_state_child);
        tmp_line_element.appendChild(tmp_state);

        var tmp_uuid = document.createElement('div');
        tmp_uuid.style = "display: none;";
        tmp_uuid.classList.add("uuid");
        tmp_uuid.innerText = tmp["uuid"];
        tmp_line_element.appendChild(tmp_uuid);

        var tmp_manage = document.createElement('div');
        tmp_manage.style = "width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_manage_child = document.createElement('div');
        tmp_manage_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1);";
        tmp_manage_child.classList.add("manage_color");
        tmp_manage_child.classList.add("repair_manage_manage");
        tmp_manage_child.innerText = "管理"
        tmp_manage.appendChild(tmp_manage_child);
        tmp_line_element.appendChild(tmp_manage);

        var tmp_delete = document.createElement('div');
        tmp_delete.style = "width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_delete_child = document.createElement('div');
        tmp_delete_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1);";
        tmp_delete_child.classList.add("manage_color");
        tmp_delete_child.classList.add("repair_manage_delete");
        tmp_delete_child.innerText = "删除";
        tmp_delete.appendChild(tmp_delete_child);
        tmp_line_element.appendChild(tmp_delete);
    }

    var tmp_uuid_element = tmp_line_element.getElementsByClassName("uuid");
    var tmp_manage_element = tmp_line_element.getElementsByClassName("repair_manage_manage");
    var tmp_delete_element = tmp_line_element.getElementsByClassName("repair_manage_delete");
    for (let i in tmp_manage_element) {
        let tmp = tmp_manage_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            get("http://47.97.18.183:8002/admin/repair/"+tmp_uuid_element[i].innerText, set_repair_manage_mask, tmp_uuid_element[i].innerText, 1);
            repair_manage_mask.style.display = "block";
            repair_manage_main_page.style.display = "none";
        }
    }

    var tmp_delete_element = tmp_line_element.getElementsByClassName("repair_manage_delete");
    for (let i in tmp_delete_element) {
        let tmp = tmp_delete_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            delete_("http://47.97.18.183:8002/admin/repair/"+tmp_uuid_element[i].innerText, repair_manage_delete);
        }
    }
}
get("http://47.97.18.183:8002/admin/repair", repair_information_update);

var repair_manage_add_repair = document.getElementById("repair_manage_add_repair");
var repair_manage_add = document.getElementById("repair_manage_add");
repair_manage_add.onclick = function() {
    repair_manage_add_repair.style.display = "flex";
    repair_manage_main_page.style.display = "none";
}

function repair_manage_add_form_clear() {
    document.getElementById("repair_manage_add_student_username").value = "";
    document.getElementById("repair_manage_add_repairman_username").value = "";
    document.getElementById("repair_manage_add_category").value = "";
    document.getElementById("repair_manage_add_comment").value = "";
    document.getElementById("repair_manage_add_state").value = "";
    location.reload();
}

var repair_manage_add_finish = document.getElementById("repair_manage_add_finish");
repair_manage_add_finish.onclick = function() {
    var repair_manage_add_building_label = document.getElementById("repair_manage_add_building_label").value;
    var repair_manage_add_student_username = document.getElementById("repair_manage_add_student_username").value;
    var repair_manage_add_repairman_username = document.getElementById("repair_manage_add_repairman_username").value;
    var repair_manage_add_category = document.getElementById("repair_manage_add_category").value;
    var repair_manage_add_comment = document.getElementById("repair_manage_add_comment").value;
    var repair_manage_add_state = document.getElementById("repair_manage_add_state").value;
    let tmp = {
        "category": repair_manage_add_category,
        "comment": repair_manage_add_comment,
        "repairman_username": repair_manage_add_repairman_username,
        "state": repair_manage_add_state,
        "student_username": repair_manage_add_student_username,
        "building_label": repair_manage_add_building_label
    };
    repair_manage_add_repair.style.display = "none";
    repair_manage_main_page.style.display = "block";
    post("http://47.97.18.183:8002/admin/repair", repair_manage_add_form_clear, JSON.stringify(tmp));
}

var repair_manage_add_cancel = document.getElementById("repair_manage_add_cancel");
repair_manage_add_cancel.onclick = function() {
    repair_manage_add_form_clear();
    repair_manage_add_repair.style.display = "none";
    repair_manage_main_page.style.display = "block";
}
