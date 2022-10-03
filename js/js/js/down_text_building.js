var down_bottom_building = document.getElementById("down_bottom_building")
var down_content_building = document.getElementById("down_content_building")
var down_content = document.getElementsByClassName("down_txt_building_ex")
down_bottom_building.onclick = function() {
    down_bottom_building.style.display = "none"
    down_content_building.style.display = "inline-block"
}

for (var j = 0; j < down_content.length; j++) {
    let tmp = down_content[j];
    tmp.onclick = function() {
        down_content_building.style.display = "none"
        down_bottom_building.style.display = "block"
        down_bottom_building.innerHTML = "<div style=\"margin-top: 5pt\">"+tmp.innerHTML+"</div>"
    }
}
