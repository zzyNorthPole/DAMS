var down_bottom_square = document.getElementById("down_bottom_square")
var down_content_square = document.getElementById("down_content_square")
var down_content = document.getElementsByClassName("down_txt_square_ex")


down_bottom_square.onclick = function() {
    down_bottom_square.style.display = "none"
    down_content_square.style.display = "inline-block"
}

for (var j = 0; j < down_content.length; j++) {
    let tmp = down_content[j];
    tmp.onclick = function() {
        down_content_square.style.display = "none"
        down_bottom_square.style.display = "block"
        down_bottom_square.innerHTML = "<div style=\"margin-top: 5pt\">"+tmp.innerHTML+"</div>"
    }
}