function self_manage_update(obj) {
    document.getElementById("self_manage_main_information_name").innerText = obj["name"];
    document.getElementById("self_manage_main_information_department").innerText = obj["department"];
    document.getElementById("self_manage_basic_information_username").innerText = obj["username"];
    document.getElementById("self_manage_basic_information_department").innerText = obj["department"];

    var self_manage_favorite_information_bottom = document.getElementById("self_manage_favorite_information_bottom");
    var self_manage_favorite_information_content_txt = document.getElementById("self_manage_favorite_information_content").getElementsByClassName("down_content_txt");
    var self_manage_favorite_information_game = document.getElementById("self_manage_favorite_information_game");
    var self_manage_favorite_information_temprature = document.getElementById("self_manage_favorite_information_temprature");
    self_manage_favorite_information_bottom.onclick = function() {
        self_manage_favorite_information_bottom.style.display = "none";
        document.getElementById("self_manage_favorite_information_content").style.display = "block";
        self_manage_favorite_information_game.style.display = "none";
        self_manage_favorite_information_temprature.style.display = "none";
    }
    for (let i in self_manage_favorite_information_content_txt) {
        let tmp = self_manage_favorite_information_content_txt[i];
        tmp.onclick = function() {
            self_manage_favorite_information_bottom.innerText = tmp.innerText;
            self_manage_favorite_information_game.style.display = "block";
            self_manage_favorite_information_temprature.style.display = "block";
        }
    }

    var self_manage_mask_finish = document.getElementById("self_manage_mask_finish");
    self_manage_mask_finish.onclick = function() {
        let old_password = document.getElementById("self_manage_old_password").value;
        let new_password = document.getElementById("self_manage_new_password").value;
        let repeat_password = document.getElementById("self_manage_repeat_password").value;
        
        if (old_password != "" && new_password != "" && repeat_password != "") {
            if (new_password == repeat_password) {
                let tmp_password = {
                    "new_password": new_password,
                    "old_password": old_password
                };
                post("http://47.97.18.183:8002/user/modify-password", function(){location.reload();}, JSON.stringify(tmp_password));
            }
        }

        let tmp_favorite = {
            "ac_temperature": self_manage_favorite_information_temprature.value,
            "gaming": query_person_manage_favorite_information_game(self_manage_favorite_information_game.value),
            "sleeping_time": query_person_manage_favorite_information_time(self_manage_favorite_information_bottom.innerText)
        };
        post("http://47.97.18.183:8002/user/preference", self_manage_form_clear, JSON.stringify(tmp_favorite));
    }
}
get("http://47.97.18.183:8002/user", self_manage_update);

function self_manage_form_clear() {
    document.getElementById("self_manage_favorite_information_game").value = "";
    document.getElementById("self_manage_favorite_information_temprature").value = "";
    location.reload();
}