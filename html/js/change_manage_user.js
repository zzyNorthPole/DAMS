var change_manage_main_page_user = document.getElementById("change_manage_main_page_user");

function change_information_update_user(obj) {
    var tmp_line_element = document.getElementById("change_manage_lines_user");
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

        var tmp_original_dormitory_label = document.createElement('div');
        tmp_original_dormitory_label.style = "width: 13vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_original_dormitory_label_child = document.createElement('div');
        tmp_original_dormitory_label_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_original_dormitory_label_child.innerText = tmp["original_dormitory_label"];
        tmp_original_dormitory_label.appendChild(tmp_original_dormitory_label_child);
        tmp_line_element.appendChild(tmp_original_dormitory_label);
        
        var tmp_new_dormitory_label = document.createElement('div');
        tmp_new_dormitory_label.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_new_dormitory_label_child = document.createElement('div');
        tmp_new_dormitory_label_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_new_dormitory_label_child.innerText = tmp["new_dormitory_label"];
        tmp_new_dormitory_label.appendChild(tmp_new_dormitory_label_child);
        tmp_line_element.appendChild(tmp_new_dormitory_label);

        var tmp_reason = document.createElement('div');
        tmp_reason.style = "width: 24vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        var tmp_reason_child = document.createElement('div');
        tmp_reason_child.style = "margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;";
        tmp_reason_child.innerText = tmp["reason"];
        tmp_reason.append(tmp_reason_child);
        tmp_line_element.append(tmp_reason);

        var tmp_state = document.createElement('div');
        tmp_state.style = "width: 28vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
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
    }
}
get("http://47.97.18.183:8002/changing", change_information_update_user);

var change_manage_add_change_user = document.getElementById("change_manage_add_change_user");
var change_manage_add_user = document.getElementById("change_manage_add_user");
change_manage_add_user.onclick = function() {
    change_manage_add_change_user.style.display = "flex";
    change_manage_main_page_user.style.display = "none";
}

function change_manage_add_form_clear_user() {
    document.getElementById("change_manage_add_original_dormitory_label_user").value = "";
    document.getElementById("change_manage_add_new_dormitory_label_user").value = "";
    document.getElementById("change_manage_add_reason_user").value = "";
    location.reload();
}

var change_manage_add_finish_user = document.getElementById("change_manage_add_finish_user");
change_manage_add_finish_user.onclick = function() {
    var change_manage_add_original_dormitory_label_user = document.getElementById("change_manage_add_original_dormitory_label_user").value;
    var change_manage_add_new_dormitory_label_user = document.getElementById("change_manage_add_new_dormitory_label_user").value;
    var change_manage_add_reason_user = document.getElementById("change_manage_add_reason_user").value;
    let tmp = {
        "new_dormitory_label": change_manage_add_new_dormitory_label_user,
        "original_dormitory_label": change_manage_add_original_dormitory_label_user,
        "reason": change_manage_add_reason_user
    };
    change_manage_add_change_user.style.display = "none";
    change_manage_main_page_user.style.display = "block";
    post("http://47.97.18.183:8002/changing", change_manage_add_form_clear_user, JSON.stringify(tmp));
}

var change_manage_add_cancel_user = document.getElementById("change_manage_add_cancel_user");
change_manage_add_cancel_user.onclick = function() {
    change_manage_add_form_clear_user();
    change_manage_add_change_user.style.display = "none";
    change_manage_main_page_user.style.display = "block";
}
