const showUserData = (userData) => {
    if(document.getElementById("divUserData")) {
        let imgProfilePic = document.getElementById("imgProfilePic");
        imgProfilePic.src = userData.profile_image.large;

        let h2Username = document.getElementById("h2Username");
        h2Username.innerHTML = userData.name;

        let pUserBio = document.getElementById("pUserBio");
        pUserBio.innerHTML = userData.bio;
    } else {
        let divUserData = document.createElement("div");
        divUserData.id = "divUserData";
        document.body.appendChild(divUserData);

        let imgProfilePic = document.createElement("img");
        imgProfilePic.id = "imgProfilePic";
        imgProfilePic.src = userData.profile_image.large;
        imgProfilePic.style.float = "left";
        divUserData.appendChild(imgProfilePic);

        let h2Username = document.createElement("h2");
        h2Username.id = "h2Username"
        h2Username.innerHTML = userData.name;
        divUserData.appendChild(h2Username);

        let pUserBio = document.createElement("p");
        pUserBio.id = "pUserBio"
        pUserBio.innerHTML = userData.bio;
        divUserData.appendChild(pUserBio);
    }
}

