var left_side_user = document.getElementsByClassName("left_side_user");
var right_side_user = document.getElementsByClassName("right_side_user");
var flag_user = [0, 0, 0];
for (let i = 0; i < left_side_user.length; i++) {
    let tmp_i = left_side_user[i];
    tmp_i.onmouseover = function() {
        tmp_i.style.color = "rgba(21, 21, 21, 1)";
    }
    tmp_i.onmouseout = function() {
        if (!flag_user[i]) tmp_i.style.color = "rgba(116, 116, 116, 0.5)";
    }
    tmp_i.onclick = function() {
        for (let j = 0; j < right_side_user.length; j++) {
            let tmp_left_j = left_side_user[j];
            let tmp_right_j = right_side_user[j];
            if (j != i) {
                flag_user[j] = 0;
                tmp_right_j.style.display = "none";
                tmp_left_j.style.color = "rgba(116, 116, 116, 0.5)";
            }
            else {
                flag_user[j] = 1;
                tmp_right_j.style.display = "block";
                tmp_left_j.style.color = "rgba(21, 21, 21, 1)";
            }
        }
    }
}