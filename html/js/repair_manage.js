var repair_manage_finish = document.getElementById("repair_manage_finish");
var repair_manage_cancel = document.getElementById("repair_manage_cancel");
var repair_manage_mask = document.getElementById("repair_manage_mask");
var repair_manage_main_page = document.getElementById("repair_manage_main_page");
var repair_manage_manage = document.getElementsByClassName("repair_manage_manage");

repair_manage_finish.onclick = function() {
    repair_manage_mask.style.display = "none"
    repair_manage_main_page.style.display = "block"
}
repair_manage_cancel.onclick = function() {
    repair_manage_mask.style.display = "none"
    repair_manage_main_page.style.display = "block"
}

for (let i in repair_manage_manage) {
    let tmp = repair_manage_manage[i];
    tmp.onclick = function() {
        repair_manage_mask.style.display = "block"
        repair_manage_main_page.style.display = "none"
    }
}