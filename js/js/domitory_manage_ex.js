var dme_buttom = document.getElementById("domitory_manage_ex")
dme_buttom.onmouseover = function() {
    dme_buttom.style.fontWeight = 800
}
dme_buttom.onmouseleave = function() {
    dme_buttom.style.fontWeight = 400
}
var right_part = document.getElementById("right_part")
var right_part_mask = document.getElementById("right_part_mask")
dme_buttom.onclick = function() {
    right_part_mask.style.display = 'block'
    right_part.style.display = "none"
}