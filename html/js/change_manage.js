var change_manage_main_page = document.getElementById("change_manage_main_page");

function change_manage_put() {
    location.reload();
}

function change_manage_manage(obj, uuid) {
    if (obj["state"] == "已提交申请") {
        let tmp = {
            "new_dormitory_label": obj["new_dormitory_label"],
            "original_dormitory_label": obj["original_dormitory_label"],
            "reason": obj["reason"],
            "state": "同意",
            "student_username": obj["student_username"]
        };
        put("http://47.97.18.183:8002/admin/changing/"+uuid, change_manage_put, JSON.stringify(tmp));
    }
}
function change_manage_delete() {
    location.reload();
}
function change_information_update(obj) {
    var tmp_line_element = document.getElementById("change_manage_lines");
    while (tmp_line_element.firstChild)
        tmp_line_element.removeChild(tmp_line_element.firstChild);
    for (let i in obj) {
        let tmp = obj[i];

        var tmp_name = document.createElement('div');
        tmp_name.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_name_child = document.createElement('div');
        tmp_name_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_name_child.innerText = tmp["name"];
        tmp_name.appendChild(tmp_name_child);
        tmp_line_element.appendChild(tmp_name);

        var tmp_new_dormitory_label = document.createElement('div');
        tmp_new_dormitory_label.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_new_dormitory_label_child = document.createElement('div');
        tmp_new_dormitory_label_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_new_dormitory_label_child.innerText = tmp["new_dormitory_label"];
        tmp_new_dormitory_label.appendChild(tmp_new_dormitory_label_child);
        tmp_line_element.appendChild(tmp_new_dormitory_label);

        var tmp_original_dormitory_label = document.createElement('div');
        tmp_original_dormitory_label.style = "width: 13vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_original_dormitory_label_child = document.createElement('div');
        tmp_original_dormitory_label_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_original_dormitory_label_child.innerText = tmp["original_dormitory_label"];
        tmp_original_dormitory_label.appendChild(tmp_original_dormitory_label_child);
        tmp_line_element.appendChild(tmp_original_dormitory_label);
        
        var tmp_reason = document.createElement('div');
        tmp_reason.style = "width: 24vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_reason_child = document.createElement('div');
        tmp_reason_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_reason_child.innerText = tmp["reason"];
        tmp_reason.append(tmp_reason_child);
        tmp_line_element.append(tmp_reason);

        var tmp_state = document.createElement('div');
        tmp_state.style = "width: 14vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_state_child = document.createElement('div');
        tmp_state_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_state_child.innerText = tmp["state"];
        tmp_state.appendChild(tmp_state_child);
        tmp_line_element.appendChild(tmp_state);

        var tmp_uuid = document.createElement('div');
        tmp_uuid.style = "display:none;";
        tmp_uuid.classList.add("uuid");
        tmp_uuid.innerText = tmp["uuid"];
        tmp_line_element.appendChild(tmp_uuid);

        var tmp_manage = document.createElement('div');
        tmp_manage.style = "width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_manage_child = document.createElement('div');
        tmp_manage_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1);";
        tmp_manage_child.classList.add("change_manage_manage");
        tmp_manage_child.innerText = "批准";
        tmp_manage.appendChild(tmp_manage_child);
        tmp_line_element.appendChild(tmp_manage);

        var tmp_delete = document.createElement('div');
        tmp_delete.style = "width: 7vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_delete_child = document.createElement('div');
        tmp_delete_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;color:rgba(2, 149, 255, 1)";
        tmp_delete_child.classList.add("change_manage_delete");
        tmp_delete_child.innerText = "删除";
        tmp_delete.appendChild(tmp_delete_child);
        tmp_line_element.appendChild(tmp_delete);
    }

    var tmp_uuid_element = tmp_line_element.getElementsByClassName("uuid");
    var tmp_manage_element = tmp_line_element.getElementsByClassName("change_manage_manage");
    var tmp_delete_element = tmp_line_element.getElementsByClassName("change_manage_delete");
    for (let i in tmp_manage_element) {
        let tmp = tmp_manage_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            get("http://47.97.18.183:8002/admin/changing/"+tmp_uuid_element[i].innerText, change_manage_manage, tmp_uuid_element[i].innerText, 1);
        }
    }

    var tmp_delete_element = tmp_line_element.getElementsByClassName("change_manage_delete");
    for (let i in tmp_delete_element) {
        let tmp = tmp_delete_element[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            delete_("http://47.97.18.183:8002/admin/changing/"+tmp_uuid_element[i].innerText, change_manage_delete);
        }
    }
}
get("http://47.97.18.183:8002/admin/changing", change_information_update);

var change_manage_add_change = document.getElementById("change_manage_add_change");
var change_manage_add = document.getElementById("change_manage_add");
change_manage_add.onclick = function() {
    change_manage_add_change.style.display = "flex";
    change_manage_main_page.style.display = "none";
}

function change_manage_add_form_clear() {
    document.getElementById("change_manage_add_student_username").value = "";
    document.getElementById("change_manage_add_original_dormitory_label").value = "";
    document.getElementById("change_manage_add_new_dormitory_label").value = "";
    document.getElementById("change_manage_add_reason").value = "";
    document.getElementById("change_manage_add_state").value = "";
    location.reload();
}

var change_manage_add_finish = document.getElementById("change_manage_add_finish");
change_manage_add_finish.onclick = function() {
    var change_manage_add_student_username = document.getElementById("change_manage_add_student_username").value;
    var change_manage_add_original_dormitory_label = document.getElementById("change_manage_add_original_dormitory_label").value;
    var change_manage_add_new_dormitory_label = document.getElementById("change_manage_add_new_dormitory_label").value;
    var change_manage_add_reason = document.getElementById("change_manage_add_reason").value;
    var change_manage_add_state = document.getElementById("change_manage_add_state").value;
    let tmp = {
        "new_dormitory_label": change_manage_add_new_dormitory_label,
        "original_dormitory_label": change_manage_add_original_dormitory_label,
        "reason": change_manage_add_reason,
        "state": change_manage_add_state,
        "student_username": change_manage_add_student_username
    };
    change_manage_add_change.style.display = "none";
    change_manage_main_page.style.display = "block";
    post("http://47.97.18.183:8002/admin/changing", change_manage_add_form_clear, JSON.stringify(tmp));
}

var change_manage_add_cancel = document.getElementById("change_manage_add_cancel");
change_manage_add_cancel.onclick = function() {
    change_manage_add_form_clear();
    change_manage_add_change.style.display = "none";
    change_manage_main_page.style.display = "block";
}
