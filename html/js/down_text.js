var down_bottom = document.getElementsByClassName("down_bottom")
var down_content = document.getElementsByClassName("down_content")

for (var i = 0; i < down_content.length; i++) {
    let tmp_down_bottom = down_bottom[i]
    let tmp_down_content = down_content[i]
    
    tmp_down_bottom.onclick = function() {
        tmp_down_bottom.style.display = "none"
        tmp_down_content.style.display = "inline-block"
    }
    tmp_down_content.onclick = function() {
        tmp_down_bottom.style.display = "block"
        tmp_down_content.style.display = "none"
    }
}