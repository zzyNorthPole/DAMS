var student_manage_buildings = document.getElementById("student_manage_buildings");
var student_manage_departments = document.getElementById("student_manage_departments");
var student_manage_sexes = document.getElementById("student_manage_sexes");
var student_manage_user_types = document.getElementById("student_manage_user_types");

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
        student_manage_buildings.appendChild(tmp_uuid);

        var tmp_hr = document.createElement('hr');
        tmp_hr.style = "width: 14vw;margin-top: 0vh;margin-bottom: 0vh;margin-left: 1vw;color: rgba(217, 217, 217, 0.3);";
        student_manage_buildings.appendChild(tmp_hr);
    }

    var tmp_buildings = student_manage_buildings.getElementsByClassName("content_txt");
    for (let i in tmp_buildings) {
        let tmp = tmp_buildings[i];
        tmp.onclick = function() {
            
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
}
get("http://47.97.18.183:8002/admin/building", student_manage_buildings_update);
get("http://47.97.18.183:8002/admin/summary/department", student_manage_departments_update);
get("http://47.97.18.183:8002/admin/summary/sex", student_manage_sexes_update);
get("http://47.97.18.183:8002/admin/summary/type", student_manage_user_types_update);
