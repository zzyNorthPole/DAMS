function idf_chosen(obj) {
    if (obj == 4) {
        document.getElementById("admin_type_left_side").style.display = "block";
        document.getElementById("user_type_left_side").style.display = "none";
    }
    else {
        document.getElementById("admin_type_left_side").style.display = "none";
        document.getElementById("user_type_left_side").style.display = "block";
    }
}
get("http://47.97.18.183:8002/auth/user-type", idf_chosen);