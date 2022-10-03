var op_ex = document.getElementsByClassName("op_ex")

for (var i = 0; i < op_ex.length; i++) {
    let op_ex_buttom = op_ex[i]
    op_ex_buttom.onmouseover = function() {
        op_ex_buttom.style.fontWeight = 800
    }
    op_ex_buttom.onmouseleave = function() {
        op_ex_buttom.style.fontWeight = 400
    }
}