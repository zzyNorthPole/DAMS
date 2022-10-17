var left_side = document.getElementsByClassName("left_side")
var right_side = document.getElementsByClassName("right_side")

for (let i = 0; i < left_side.length; i++) {
    var tmp_i = left_side[i]
    tmp_i.onclick = function() {
        let right_side = document.getElementsByClassName("right_side")
        for (let j = 0; j < right_side.length; j++) {
            let tmp_j = right_side[j]
            if (j != i) tmp_j.style.display = "none"
            else tmp_j.style.display = "block"
        }
    }
}