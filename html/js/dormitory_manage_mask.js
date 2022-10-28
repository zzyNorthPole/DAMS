let dormitory_manage_finish = document.getElementById("dormitory_manage_finish")
dormitory_manage_finish.onclick = function() {
    var main_page = document.getElementById("dormitory_manage_right_part")
    var main_page_mask = document.getElementById("dormitory_manage_right_part_mask")
    main_page_mask.style.display = "none"
    main_page.style.display = "block"
}