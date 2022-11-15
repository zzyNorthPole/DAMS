var full_student_information;
function person_delete() {
    location.reload();
}

function query_person_manage_favorite_information_game(text) {
    if (text == "是") return 1;
    else return 0;
}
function query_person_manage_favorite_information_time(text) {
    if (text == "22:00之前") return 1;
    else if (text == "22:00-23:00") return 2;
    else if (text == "23:00-0:00") return 3;
    else if (text == "0:00-1:00") return 4;
    else if (text == "1:00之后") return 5;
}

function query_person_manage_checkedin(assigned, checked_in) {
    if (assigned == 0) return "未分配";
    else {
        if (checked_in == 0) return "未入住";
        else return "已入住";
    }
}

function query_person_manage_building_and_dormitory(building, dormitory) {
    if (building == "null") return "无"
    else {
        if (dormitory == "null") return "无"
        else return building + dormitory;
    }
}

function person_manage_mask_update(obj) {
    document.getElementById("person_manage_main_information_name").innerText = obj["name"];
    document.getElementById("person_manage_main_information_department").innerText = obj["department"];
    document.getElementById("person_manage_basic_information_username").innerText = obj["username"];
    document.getElementById("person_manage_basic_information_department").innerText = obj["department"];
    let tmp_password = {
        "new_password": "123456"
    };
    document.getElementById("person_manage_basic_information_reset").onclick = function() {
        post("http://47.97.18.183:8002/admin/user/"+obj["username"]+"/reset-password", function(){location.reload();}, JSON.stringify(tmp_password));
    }

    var person_manage_favorite_information_bottom = document.getElementById("person_manage_favorite_information_bottom");
    var person_manage_favorite_information_content_txt = document.getElementById("person_manage_favorite_information_content").getElementsByClassName("down_content_txt");
    var person_manage_favorite_information_game = document.getElementById("person_manage_favorite_information_game");
    var person_manage_favorite_information_temprature = document.getElementById("person_manage_favorite_information_temprature");
    person_manage_favorite_information_bottom.onclick = function() {
        person_manage_favorite_information_bottom.style.display = "none";
        document.getElementById("person_manage_favorite_information_content").style.display = "block";
        person_manage_favorite_information_game.style.display = "none";
        person_manage_favorite_information_temprature.style.display = "none";
    }
    for (let i in person_manage_favorite_information_content_txt) {
        let tmp = person_manage_favorite_information_content_txt[i];
        tmp.onclick = function() {
            person_manage_favorite_information_bottom.innerText = tmp.innerText;
            person_manage_favorite_information_game.style.display = "block";
            person_manage_favorite_information_temprature.style.display = "block";
        }
    }

    let person_manage_mask_finish = document.getElementById("person_manage_mask_finish")
    person_manage_mask_finish.onclick = function() {
        let tmp_favorite = {
            "ac_temperature": person_manage_favorite_information_temprature.value,
            "gaming": query_person_manage_favorite_information_game(person_manage_favorite_information_game.value),
            "sleeping_time": query_person_manage_favorite_information_time(person_manage_favorite_information_bottom.innerText)
        };
        post("http://47.97.18.183:8002/admin/user/"+obj["username"]+"/preference", function(){location.reload();}, JSON.stringify(tmp_favorite));
        document.getElementById("person_manage_right_part").style.display = "block";
        document.getElementById("person_manage_right_part_mask").style.display = "none";
    }
}

function students_information_update(obj, flag) {
    if (flag) full_student_information = obj;
    var tmp_line_element = document.getElementById("person_manage_lines");
    while (tmp_line_element.firstChild)
        tmp_line_element.removeChild(tmp_line_element.firstChild);
    for (var i in obj) {
        var tmp_name = document.createElement('div');
        tmp_name.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;margin-left: 2vw;float: left;";
        tmp_name.innerText = obj[i]["name"];
        tmp_line_element.appendChild(tmp_name);

        var tmp_user_type_str = document.createElement('div');
        tmp_user_type_str.style = "width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_user_type_str.innerText = anti_query_user_type(obj[i]["user_type_str"]);
        tmp_line_element.appendChild(tmp_user_type_str);

        var tmp_username = document.createElement('div');
        tmp_username.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_username.classList.add("person_manage_username");
        tmp_username.innerText = obj[i]["username"];
        tmp_line_element.appendChild(tmp_username);

        var tmp_department = document.createElement('div');
        tmp_department.style = "width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_department.innerText = obj[i]["department"];
        tmp_line_element.appendChild(tmp_department);

        var tmp_label = document.createElement('div');
        tmp_label.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_label.innerText = query_person_manage_building_and_dormitory(String(obj[i]["building_label"]), String(obj[i]["dormitory_label"]));
        tmp_line_element.appendChild(tmp_label);

        var tmp_check_in = document.createElement('div');
        tmp_check_in.style = "width: 8vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_check_in.innerText = query_person_manage_checkedin(obj[i]["assigned"], obj[i]["checked_in"]);
        tmp_line_element.appendChild(tmp_check_in);

        var tmp_look = document.createElement('div');
        tmp_look.style = "width: 6vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;color: rgba(2, 149, 255, 1)";
        tmp_look.classList.add("person_manage_look");
        tmp_look.innerText = "查看";
        tmp_line_element.appendChild(tmp_look);

        var tmp_delete = document.createElement('div');
        tmp_delete.style = "width: 4vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;color: rgba(2, 149, 255, 1)";
        tmp_delete.classList.add("person_manage_delete");
        tmp_delete.innerText = "删除";
        tmp_line_element.appendChild(tmp_delete);
    }

    var tmp_person_manage_username = tmp_line_element.getElementsByClassName("person_manage_username");
    var tmp_person_manage_look = tmp_line_element.getElementsByClassName("person_manage_look");
    for (let i in tmp_person_manage_look) {
        let tmp = tmp_person_manage_look[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            get("http://47.97.18.183:8002/admin/user/"+tmp_person_manage_username[i].innerText, person_manage_mask_update);
            document.getElementById("person_manage_right_part").style.display = "none"
            document.getElementById("person_manage_right_part_mask").style.display = "block"
        }
    }

    var tmp_person_manage_delete = tmp_line_element.getElementsByClassName("person_manage_delete");
    for (let i in tmp_person_manage_delete) {
        let tmp = tmp_person_manage_delete[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400;
        }
        tmp.onclick = function() {
            console.log(tmp_person_manage_username[i].innerText);
            delete_("http://47.97.18.183:8002/admin/user/"+tmp_person_manage_username[i].innerText, person_delete);
        }
    }
}

get("http://47.97.18.183:8002/admin/user", students_information_update, 1, 1);

function person_manage_type_content_update(obj) {
    build_content(
        "person_manage_type_content",
        obj,
        "",
        "width: 12vw;height: 5vh;text-align: center;font-size: 2.7vmin;",
        "width: 10vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);",
        1
    );
    let tmp_line_element = document.getElementById("person_manage_type_content").getElementsByClassName("down_content_txt");
    for (var i in tmp_line_element) {
        let tmp = tmp_line_element[i];
        tmp.onclick = function() {
            document.getElementById("person_manage_type_bottom").innerHTML = tmp.innerHTML;
            let tmp_obj = [];
            let tmp_department = document.getElementById("person_manage_department_bottom").innerText;
            for (let j in full_student_information) {
                if (tmp_department == "") {
                    if (anti_query_user_type(full_student_information[j]["user_type_str"]) == tmp.innerText || tmp.innerText == "") {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
                else {
                    if ((anti_query_user_type(full_student_information[j]["user_type_str"]) == tmp.innerText || tmp.innerText == "") && full_student_information[j]["department"] == tmp_department) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
            }
            students_information_update(tmp_obj);
        }
    }
}
get("http://47.97.18.183:8002/admin/summary/type", person_manage_type_content_update, "", 0);

function person_manage_department_content_update(obj) {
    build_content(
        "person_manage_department_content",
        obj,
        "",
        "width: 20vw;height: 5vh;text-align: center;font-size: 2.7vmin;",
        "width: 18vw;margin-left: 1vw;margin-right: 1vw;color: rgba(217, 217, 217, 0.3);",
        1
    );
    let tmp_line_element = document.getElementById("person_manage_department_content").getElementsByClassName("down_content_txt");
    for (var i in tmp_line_element) {
        let tmp = tmp_line_element[i];
        tmp.onclick = function() {
            document.getElementById("person_manage_department_bottom").innerHTML = tmp.innerHTML;
            let tmp_obj = [];
            let tmp_type = document.getElementById("person_manage_type_bottom").innerText;
            for (let j in full_student_information) {
                if (tmp_type == "") {
                    if (full_student_information[j]["department"] == tmp.innerText || tmp.innerText == "") {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
                else {
                    if ((full_student_information[j]["department"] == tmp.innerText || tmp.innerText == "") && anti_query_user_type(full_student_information[j]["user_type_str"]) == tmp_type) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
            }
            students_information_update(tmp_obj);
        }
    }
}
get("http://47.97.18.183:8002/admin/summary/department", person_manage_department_content_update, "", 0);

function set_person_manage_add_user_type_content_onclick() {
    var tmp_bottom = document.getElementById("person_manage_add_user_type_bottom");
    var tmp_content_element = document.getElementById("person_manage_add_user_type_content").getElementsByClassName("down_content_txt");
    for (var i in tmp_content_element) {
        let tmp = tmp_content_element[i];
        tmp.onclick = function() {
            tmp_bottom.innerText = tmp.innerText;
        }
    }
}
set_person_manage_add_user_type_content_onclick();

var person_manage_search = document.getElementById("person_manage_search");
person_manage_search.onclick = function() {
    let tmp_obj = [];
    let tmp_name_or_username = document.getElementById("person_manage_search_index").value;
    let tmp_type = document.getElementById("person_manage_type_bottom").innerText;
    let tmp_department = document.getElementById("person_manage_department_bottom").innerText;
    for (let i in full_student_information) {
        let tmp = full_student_information[i];
        if (
            (tmp_type == "" || anti_query_user_type(tmp["user_type_str"]) == tmp_type) && 
            (tmp_department == "" || tmp["department"] == tmp_department) && 
            (tmp["name"] == tmp_name_or_username || tmp["username"] == tmp_name_or_username)
        ){
            tmp_obj.push(tmp);
        }
    }
    students_information_update(tmp_obj);
    document.getElementById("person_manage_search_index").value = "";
}

var person_manage_add = document.getElementById("person_manage_add");
var person_manage_right_part = document.getElementById("person_manage_right_part");
var person_manage_add_person = document.getElementById("person_manage_add_person");
person_manage_add.onclick = function() {
    person_manage_add_person.style.display = "flex";
    person_manage_right_part.style.display = "none";
}

var person_manage_add_finish = document.getElementById("person_manage_add_finish");
function person_manage_add_form_clear() {
    document.getElementById("person_manage_add_name").value = "";
    document.getElementById("person_manage_add_username").value = "";
    document.getElementById("person_manage_add_sex").value = "";
    document.getElementById("person_manage_add_department").value = "";
    document.getElementById("person_manage_add_user_type_bottom").innerText = "";
    location.reload();
}

function query_user_type(text) {
    if (text == "学生") return 1;
    else if (text == "教职工") return 2;
    else if (text == "楼栋管理员") return 3;
    else if (text == "后勤管理员") return 4;
}

function anti_query_user_type(text) {
    if (text == 1) return "学生";
    else if (text == 2) return "教职工";
    else if (text == 3) return "楼栋管理员";
    else if (text == 4) return "后勤管理员";
}
person_manage_add_finish.onclick = function() {
    person_manage_add_person.style.display = "none";
    person_manage_right_part.style.display = "block";
    var person_manage_add_name = document.getElementById("person_manage_add_name").value;
    var person_manage_add_username = document.getElementById("person_manage_add_username").value;
    var person_manage_add_sex = document.getElementById("person_manage_add_sex").value;
    var person_manage_add_department = document.getElementById("person_manage_add_department").value;
    var person_manage_add_user_type = query_user_type(document.getElementById("person_manage_add_user_type_bottom").innerText)
    let tmp = {
        "department": person_manage_add_department,
        "name": person_manage_add_name,
        "password": "123456",
        "sex": person_manage_add_sex,
        "user_type": person_manage_add_user_type,
        "username": person_manage_add_username
    }
    post("http://47.97.18.183:8002/admin/user", person_manage_add_form_clear, JSON.stringify(tmp));
}

var person_manage_add_cancel = document.getElementById("person_manage_add_cancel");
person_manage_add_cancel.onclick = function() {
    person_manage_add_person.style.display = "none";
    person_manage_right_part.style.display = "block";
    person_manage_add_form_clear();
}