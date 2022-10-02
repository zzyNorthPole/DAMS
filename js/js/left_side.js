var sc_buttom = document.getElementById("sc")
var dm_buttom = document.getElementById("dm")
var bm_buttom = document.getElementById("bm")
var pm_buttom = document.getElementById("pm")
var rm_buttom = document.getElementById("rm")
var sm_buttom = document.getElementById("sm")
var sc_page = document.getElementById("self_center_page")
var dm_page = document.getElementById("domitory_manage_page")
var bm_page = document.getElementById("building_manage_page")
var sm_page = document.getElementById("stu_manage_page")
var pm_page = document.getElementById("person_manage_page")
var rm_page = document.getElementById("repair_manage_page")
var sc_flag = 0
var dm_flag = 0
var bm_flag = 0
var pm_flag = 0
var rm_flag = 0
var sm_flag = 0

sc_buttom.onmouseover = function() {
    sc_buttom.style.color = "rgba(21, 21, 21, 1)"
}
sc_buttom.onmouseout = function() {
    if (!sc_flag) sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
sc_buttom.onclick = function() {
    sc_buttom.style.color = "rgba(21, 21, 21, 1)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sc_flag = 1
    dm_flag = bm_flag = pm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "block"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

dm_buttom.onmouseover = function() {
    dm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
dm_buttom.onmouseout = function() {
    if (!dm_flag) dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
dm_buttom.onclick = function() {
    dm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_flag = 1
    sc_flag = bm_flag = pm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "block"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

bm_buttom.onmouseover = function() {
    bm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
bm_buttom.onmouseout = function() {
    if (!bm_flag) bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
bm_buttom.onclick = function() {
    bm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_flag = 1
    sc_flag = dm_flag = pm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "block"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}

pm_buttom.onmouseover = function() {
    pm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
pm_buttom.onmouseout = function() {
    if (!pm_flag) pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
pm_buttom.onclick = function() {
    pm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_flag = 1
    sc_flag = bm_flag = dm_flag = rm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "block"
    rm_page.style.display = "none"
}

rm_buttom.onmouseover = function() {
    rm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
rm_buttom.onmouseout = function() {
    if (!rm_flag) rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
rm_buttom.onclick = function() {
    rm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_flag = 1
    sc_flag = bm_flag = pm_flag = dm_flag = sm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "none"
    pm_page.style.display = "none"
    rm_page.style.display = "block"
}

sm_buttom.onmouseover = function() {
    sm_buttom.style.color = "rgba(21, 21, 21, 1)"
}
sm_buttom.onmouseout = function() {
    if (!sm_flag) sm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
}
sm_buttom.onclick = function() {
    sm_buttom.style.color = "rgba(21, 21, 21, 1)"
    sc_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    bm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    dm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    pm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    rm_buttom.style.color = "rgba(116, 116, 116, 0.8)"
    sm_flag = 1
    sc_flag = bm_flag = pm_flag = rm_flag = dm_flag = 0
    sc_page.style.display = "none"
    dm_page.style.display = "none"
    bm_page.style.display = "none"
    sm_page.style.display = "block"
    pm_page.style.display = "none"
    rm_page.style.display = "none"
}