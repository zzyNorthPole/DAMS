var finish_buttom = document.getElementById("finish")
finish_buttom.onmouseover = function() {
    finish_buttom.style.backgroundColor = "rgba(0, 102, 204, 1)"
}
finish_buttom.onmouseleave = function() {
    finish_buttom.style.backgroundColor = "rgba(2, 149, 255, 1)"
}
var right_part = document.getElementById("right_part")
var right_part_mask = document.getElementById("right_part_mask")
finish_buttom.onclick = function() {
    right_part_mask.style.display = 'none'
    right_part.style.display = "block"
}
