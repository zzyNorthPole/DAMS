// var main_page = document.getElementById("person_manage_lines")
// var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
// xmlhttp.onreadystatechange = function() {
// 	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
// 	    var text = xmlhttp.responseText
//         var obj = JSON.parse(text)
//         var str = "";
//         for (var i in obj) {
//             let tmp = "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + text[i]["name"]
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + text[i]["user_type_str"]
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + text[i]["username"]
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 20vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + ""
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 15vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + text[i]["building_label"] + text[i]["dormitory_label"]
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + text[i]["checked_in"]
//             + "</div>"
//             + "</div>"
//             + "<div style=\"width: 10vw;height: 5vh;margin-left: 0vw;font-size: 2.7vmin;float: left;\">"
//             + "<div style=\"margin-left: 2vw;margin-right: 0.5vw;margin-top: 0.5vh;margin-bottom: 0.5vh;text-align: left;\">"
//             + "查看"
//             + "</div>"
//             + "</div>"
//             str += tmp             
//         }
//         document.getElementById("dormitory_manage_right_part_lines").innerHTML = str
//     }
// }
// xmlhttp.open("get", "http://47.97.18.183:8002/user", true)
// xmlhttp.send()
var person_manage_look = document.getElementsByClassName("person_manage_look")
for (var j = 0; j < person_manage_look.length; ++j) {
    let person_manage_look_buttom = person_manage_look[j]
    person_manage_look_buttom.onclick = function() {
        document.getElementById("person_manage_right_part").style.display = "none"
        document.getElementById("person_manage_right_part_mask").style.display = "block"
    }
}