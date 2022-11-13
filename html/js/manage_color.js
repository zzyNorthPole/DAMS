let manage_color = document.getElementsByClassName("manage_color");
for (var i = 0; i < manage_color.length; i++) {
    let tmp_i = manage_color[i];
    tmp_i.onmouseover = function() {
        tmp_i.style.fontWeight = 600;
    }
    tmp_i.onmouseout = function() {
        tmp_i.style.fontWeight = 400
    }
}