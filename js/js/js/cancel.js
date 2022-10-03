var cancel_buttom = document.getElementById("cancel")
cancel_buttom.onmouseover = function() {
    cancel_buttom.style.backgroundColor = "rgba(255, 102, 102, 1)"
}
cancel_buttom.onmouseleave = function() {
    cancel_buttom.style.backgroundColor = "rgba(255, 161, 135, 1)"
}
var right_part = document.getElementById("right_part")
var right_part_mask = document.getElementById("right_part_mask")
cancel_buttom.onclick = function() {
    right_part_mask.style.display = 'none'
    right_part.style.display = "block"
}