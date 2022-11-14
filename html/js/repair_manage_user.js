var repair_manage_finish_user = document.getElementById("repair_manage_finish_user");
var repair_manage_cancel_user = document.getElementById("repair_manage_cancel_user");
var repair_manage_main_page_user = document.getElementById("repair_manage_main_page_user");

function repair_information_update_user(obj) {
    var tmp_line_element = document.getElementById("repair_manage_lines_user");
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
    }
}
get("http://47.97.18.183:8002/repair", repair_information_update_user);

var repair_manage_add_repair_user = document.getElementById("repair_manage_add_repair_user");
var repair_manage_add_user = document.getElementById("repair_manage_add_user");
repair_manage_add_user.onclick = function() {
    repair_manage_add_repair_user.style.display = "flex";
    repair_manage_main_page_user.style.display = "none";
}

function repair_manage_add_form_clear_user() {
    document.getElementById("repair_manage_add_category_user").value = "";
    document.getElementById("repair_manage_add_comment_user").value = "";
    document.getElementById("repair_manage_add_building_label_user").value = "";
    location.reload();
}

var repair_manage_add_finish_user = document.getElementById("repair_manage_add_finish_user");
repair_manage_add_finish_user.onclick = function() {
    var repair_manage_add_building_label_user = document.getElementById("repair_manage_add_building_label_user").value;
    var repair_manage_add_category_user = document.getElementById("repair_manage_add_category_user").value;
    var repair_manage_add_comment_user = document.getElementById("repair_manage_add_comment_user").value;
    let tmp = {
        "category": repair_manage_add_category_user,
        "comment": repair_manage_add_comment_user,
        "building_label": repair_manage_add_building_label_user
    };
    repair_manage_add_repair_user.style.display = "none";
    repair_manage_main_page_user.style.display = "block";
    post("http://47.97.18.183:8002/repair", repair_manage_add_form_clear_user, JSON.stringify(tmp));
}

var repair_manage_add_cancel_user = document.getElementById("repair_manage_add_cancel_user");
repair_manage_add_cancel_user.onclick = function() {
    repair_manage_add_form_clear_user();
    repair_manage_add_repair_user.style.display = "none";
    repair_manage_main_page_user.style.display = "block";
}
