var student_manage_buildings = document.getElementById("student_manage_buildings");
var student_manage_departments = document.getElementById("student_manage_departments");
var student_manage_sexes = document.getElementById("student_manage_sexes");
var student_manage_user_types = document.getElementById("student_manage_user_types");

var tmp_buildings_state = [];
var tmp_departments_state = [];
var tmp_sexes_state = [];
var tmp_user_types_state = [];
function student_manage_buildings_update(obj) {
    while (student_manage_buildings.firstChild)
        student_manage_buildings.removeChild(student_manage_buildings.firstChild);
    for (let i in obj) {
        var tmp_buildings = document.createElement('div');
        tmp_buildings.style = "width: 16vw;height: 6vh;text-align: center;background-color: white;";
        var tmp_buildings_child = document.createElement('div');
        tmp_buildings_child.style = "padding-top: 1vh;font-size: 2.7vmin;";
        tmp_buildings_child.innerText = obj[i]["label"];
        tmp_buildings.classList.add("content_txt");
        tmp_buildings.appendChild(tmp_buildings_child);
        student_manage_buildings.appendChild(tmp_buildings);

        var tmp_uuid = document.createElement('div');
        tmp_uuid.style.display = "none";
        tmp_uuid.innerText = obj[i]["uuid"];
        tmp_uuid.classList.add("uuid");
        student_manage_buildings.appendChild(tmp_uuid);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 14vw;margin-top: 0vh;margin-bottom: 0vh;margin-left: 1vw;color: rgba(217, 217, 217, 0.3);";
        student_manage_buildings.appendChild(tmp_hr);
    }

    var tmp_buildings = student_manage_buildings.getElementsByClassName("content_txt");
    for (let i = 0; i < tmp_buildings.length; ++i) tmp_buildings_state.push(0);
    for (let i in tmp_buildings) {
        let tmp = tmp_buildings[i];
        tmp.onclick = function() {
            if (tmp_buildings_state[i] == 0) {
                tmp.style.backgroundColor = "aliceblue";
            }
            else {
                tmp.style.backgroundColor = "white";
            }
            tmp_buildings_state[i] ^= 1;
        }
    }
}
function student_manage_departments_update(obj) {
    while (student_manage_departments.firstChild)
        student_manage_departments.removeChild(student_manage_departments.firstChild);
    for (let i in obj) {
        var tmp_departments = document.createElement('div');
        tmp_departments.style = "width: 16vw;height: 6vh;text-align: center;background-color: white;";
        var tmp_departments_child = document.createElement('div');
        tmp_departments_child.style = "padding-top: 1vh;font-size: 2.7vmin;";
        tmp_departments_child.innerText = obj[i];
        tmp_departments.classList.add("content_txt");
        tmp_departments.appendChild(tmp_departments_child);
        student_manage_departments.appendChild(tmp_departments);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 14vw;margin-top: 0vh;margin-bottom: 0vh;margin-left: 1vw;color: rgba(217, 217, 217, 0.3);";
        student_manage_departments.appendChild(tmp_hr);
    }

    var tmp_departments = student_manage_departments.getElementsByClassName("content_txt");
    for (let i = 0; i < tmp_departments.length; ++i) tmp_departments_state.push(0);
    for (let i in tmp_departments) {
        let tmp = tmp_departments[i];
        tmp.onclick = function() {
            if (tmp_departments_state[i] == 0) {
                tmp.style.backgroundColor = "aliceblue";
            }
            else {
                tmp.style.backgroundColor = "white";
            }
            tmp_departments_state[i] ^= 1;
        }
    }
}
function student_manage_sexes_update(obj) {
    while (student_manage_sexes.firstChild)
        student_manage_sexes.removeChild(student_manage_sexes.firstChild);
    for (let i in obj) {
        var tmp_sexes = document.createElement('div');
        tmp_sexes.style = "width: 16vw;height: 6vh;text-align: center;background-color: white;";
        var tmp_sexes_child = document.createElement('div');
        tmp_sexes_child.style = "padding-top: 1vh;font-size: 2.7vmin;";
        tmp_sexes_child.innerText = obj[i];
        tmp_sexes.classList.add("content_txt");
        tmp_sexes.appendChild(tmp_sexes_child);
        student_manage_sexes.appendChild(tmp_sexes);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 14vw;margin-top: 0vh;margin-bottom: 0vh;margin-left: 1vw;color: rgba(217, 217, 217, 0.3);";
        student_manage_sexes.appendChild(tmp_hr);
    }

    var tmp_sexes = student_manage_sexes.getElementsByClassName("content_txt");
    for (let i = 0; i < tmp_sexes.length; ++i) tmp_sexes_state.push(0);
    for (let i in tmp_sexes) {
        let tmp = tmp_sexes[i];
        tmp.onclick = function() {
            if (tmp_sexes_state[i] == 0) {
                tmp.style.backgroundColor = "aliceblue";
            }
            else {
                tmp.style.backgroundColor = "white";
            }
            tmp_sexes_state[i] ^= 1;
        }
    }
}
function student_manage_user_types_update(obj) {
    while (student_manage_user_types.firstChild)
        student_manage_user_types.removeChild(student_manage_user_types.firstChild);
    for (let i in obj) {
        var tmp_user_types = document.createElement('div');
        tmp_user_types.style = "width: 16vw;height: 6vh;text-align: center;background-color: white;";
        var tmp_user_types_child = document.createElement('div');
        tmp_user_types_child.style = "padding-top: 1vh;font-size: 2.7vmin;";
        tmp_user_types_child.innerText = obj[i];
        tmp_user_types.classList.add("content_txt");
        tmp_user_types.appendChild(tmp_user_types_child);
        student_manage_user_types.appendChild(tmp_user_types);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 14vw;margin-top: 0vh;margin-bottom: 0vh;margin-left: 1vw;color: rgba(217, 217, 217, 0.3);";
        student_manage_user_types.appendChild(tmp_hr);
    }

    var tmp_user_types = student_manage_user_types.getElementsByClassName("content_txt");
    for (let i = 0; i < tmp_user_types.length; ++i) tmp_user_types_state.push(0);
    for (let i in tmp_user_types) {
        let tmp = tmp_user_types[i];
        tmp.onclick = function() {
            if (tmp_user_types_state[i] == 0) {
                tmp.style.backgroundColor = "aliceblue";
            }
            else {
                tmp.style.backgroundColor = "white";
            }
            tmp_user_types_state[i] ^= 1;
        }
    }
}

get("http://47.97.18.183:8002/admin/building", student_manage_buildings_update);
get("http://47.97.18.183:8002/admin/summary/department", student_manage_departments_update);
get("http://47.97.18.183:8002/admin/summary/sex", student_manage_sexes_update);
get("http://47.97.18.183:8002/admin/summary/type", student_manage_user_types_update);

var student_manage_allocation = document.getElementById("student_manage_allocation");
function student_manage_clear() {
    location.reload();
}
student_manage_allocation.onclick = function() {
    var building = [];
    var department = [];
    var sex = [];
    var user_type = [];
    var buildings_element = student_manage_buildings.getElementsByClassName("content_txt");
    var uuid_element = student_manage_buildings.getElementsByClassName("uuid");
    var department_element = student_manage_departments.getElementsByClassName("content_txt");
    var sex_element = student_manage_sexes.getElementsByClassName("content_txt");
    var user_types_element = student_manage_user_types.getElementsByClassName("content_txt");
    for (let i in buildings_element) {
        if (tmp_buildings_state[i] == 1) building.push(uuid_element[i].innerText);
    }
    for (let i in department_element) {
        if (tmp_departments_state[i] == 1) department.push(department_element[i].innerText);
    }
    for (let i in sex_element) {
        if (tmp_sexes_state[i] == 1) sex.push(sex_element[i].innerText);
    }
    for (let i in user_types_element) {
        if (tmp_user_types_state[i] == 1) user_type.push(query_user_type(user_types_element[i].innerText));
    }
    console.log(department);
    let tmp = {
        "building_uuids": building,
        "departments": department,
        "sexes": sex,
        "user_types": user_type
    }
    post("http://47.97.18.183:8002/admin/allocation", student_manage_clear, JSON.stringify(tmp));
}