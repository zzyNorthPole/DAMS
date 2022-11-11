var full_student_information;
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
        tmp_user_type_str.innerText = obj[i]["user_type_str"];
        tmp_line_element.appendChild(tmp_user_type_str);

        var tmp_username = document.createElement('div');
        tmp_username.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_username.innerText = obj[i]["username"];
        tmp_line_element.appendChild(tmp_username);

        var tmp_department = document.createElement('div');
        tmp_department.style = "width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_department.innerText = obj[i]["department"];
        tmp_line_element.appendChild(tmp_department);

        var tmp_label = document.createElement('div');
        tmp_label.style = "width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_label.innerText = obj[i]["building_label"] + obj[i]["dormitory_label"];
        tmp_line_element.appendChild(tmp_label);

        var tmp_check_in = document.createElement('div');
        tmp_check_in.style = "width: 8vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;";
        tmp_check_in.innerText = obj[i]["check_in"];
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

    var tmp_person_manage_look = tmp_line_element.getElementsByClassName("person_manage_look");
    for (var i in tmp_person_manage_look) {
        let tmp = tmp_person_manage_look[i];
        tmp.onmouseover = function() {
            tmp.style.fontWeight = 600;
        }
        tmp.onmouseout = function() {
            tmp.style.fontWeight = 400
        }
        tmp.onclick = function() {
            document.getElementById("person_manage_right_part").style.display = "none"
            document.getElementById("person_manage_right_part_mask").style.display = "block"
        }
    }
}

get("http://47.97.18.183:8002/user", students_information_update, 1, 1);

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
                    if (full_student_information[j]["user_type_str"] == tmp.innerText) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
                else {
                    if (full_student_information[j]["user_type_str"] == tmp.innerText && full_student_information[j]["department"] == tmp_department) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
            }
            students_information_update(tmp_obj);
        }
    }
}
get("http://47.97.18.183:8002/summary/type", person_manage_type_content_update, "", 0);

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
                console.log(full_student_information);
                if (tmp_type == "") {
                    if (full_student_information[j]["department"] == tmp.innerText) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
                else {
                    if (full_student_information[j]["department"] == tmp.innerText && full_student_information[j]["user_type_str"] == tmp_type) {
                        tmp_obj.push(full_student_information[j]);
                    }
                }
            }
            students_information_update(tmp_obj);
        }
    }
}
get("http://47.97.18.183:8002/summary/department", person_manage_department_content_update, "", 0);