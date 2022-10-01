var down_bottom_square = document.getElementById("down_bottom_square")
var down_content_square = document.getElementById("down_content_square")

down_bottom_square.onclick = function() {
    down_bottom_square.style.display = "none"
    down_content_square.style.display = "block"
}
down_content_square.onclick = function() {
    down_content_square.style.display = "none"
    down_bottom_square.style.display = "block"
}
