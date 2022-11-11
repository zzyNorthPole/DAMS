var left_side = document.getElementsByClassName("left_side");
var right_side = document.getElementsByClassName("right_side");
var flag = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < left_side.length; i++) {
    let tmp_i = left_side[i];
    tmp_i.onmouseover = function() {
        tmp_i.style.color = "rgba(21, 21, 21, 1)";
    }
    tmp_i.onmouseout = function() {
        if (!flag[i]) tmp_i.style.color = "rgba(116, 116, 116, 0.5)";
    }
    tmp_i.onclick = function() {
        for (let j = 0; j < right_side.length; j++) {
            let tmp_left_j = left_side[j];
            let tmp_right_j = right_side[j];
            if (j != i) {
                flag[j] = 0;
                tmp_right_j.style.display = "none";
                tmp_left_j.style.color = "rgba(116, 116, 116, 0.5)";
            }
            else {
                flag[j] = 1;
                tmp_right_j.style.display = "block";
                tmp_left_j.style.color = "rgba(21, 21, 21, 1)";
            }
        }
    }
}