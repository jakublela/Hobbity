const mainDiv = document.getElementById("main");
const uBio = document.getElementById("uBio")

const showUserData = (userData) => {
    if(document.getElementById("divUserData")) {
        let imgProfilePic = document.getElementById("imgProfilePic");
        imgProfilePic.src = userData.profile_image.large;

        let h2Username = document.getElementById("h2Username");
        h2Username.innerHTML = userData.name;

        let pUserBio = document.getElementById("pUserBio");
        pUserBio.inn = userData.bio;

        let divUserContent = document.getElementById("userContent");
        divUserContent.innerHTML = "";
    } else {
        let divUserData = document.createElement("div");
        divUserData.className = "uData";
        main.appendChild(divUserData);

        let imgProfilePic = document.createElement("img");
        imgProfilePic.className = "imgPfp";
        imgProfilePic.src = userData.profile_image.large;
        divUserData.appendChild(imgProfilePic);

        let h2Username = document.createElement("h2");
        h2Username.className = "user"
        h2Username.innerHTML = userData.name;
        divUserData.appendChild(h2Username);

        let pUserBio = document.createElement("p");
        pUserBio.id = "pUserBio"
        pUserBio.innerHTML = userData.bio;
        divUserData.appendChild(pUserBio);

        let btnShowUserPhotos = document.createElement("button");
        btnShowUserPhotos.innerHTML = "Show user's photos";
        btnShowUserPhotos.onclick = function() {getUserPhotos(username)};
        divUserData.appendChild(btnShowUserPhotos); 

        let btnShowUserLikes = document.createElement("button");
        btnShowUserLikes.innerHTML = "Show user's likes";
        btnShowUserLikes.onclick = function() {getUserLikes(username)};
        divUserData.appendChild(btnShowUserLikes);

        let btnShowUserColletions = document.createElement("button");
        btnShowUserColletions.innerHTML = "Show user's collections";
        btnShowUserColletions.onclick = function() {getUserColletions(username)};
        divUserData.appendChild(btnShowUserColletions);

        let btnShowUserStats = document.createElement("button");
        btnShowUserStats.innerHTML = "Show user's stats";
        btnShowUserStats.onclick = function() {getUserStats(username)};
        divUserData.appendChild(btnShowUserStats);

        let divUserContent = document.createElement("div");
        divUserContent.id = "userContent";
        main.appendChild(divUserContent);

        uBio.appendChild(h2Username).appendChild(pUserBio);
    }
}

const showUserPhotos = (userPhotos) => {
    let divUserContent = document.getElementById("userContent");
    divUserContent.innerHTML = "";

    userPhotos.forEach(element => {
        let photo = document.createElement("img");
        photo.class = "userPhoto";
        photo.src = element.urls.thumb;
        divUserContent.appendChild(photo);
    });
}

const showUserLikes = (userLikes) => {
    let divUserContent = document.getElementById("userContent");
    divUserContent.innerHTML = "";

    userLikes.forEach(element => {
        let photo = document.createElement("img");
        photo.class = "userPhoto";
        photo.src = element.urls.thumb;
        divUserContent.appendChild(photo);
    });
}

const showUserStats = (userStats) => {
    let divUserContent = document.getElementById("userContent");
    divUserContent.innerHTML = "";
        
    const downloadTable = document.createElement("table");
    const downloadStats = userStats.downloads.historical.values;

    const tableHead = document.createElement("th");
    tableHead.innerHTML = "Dowloads for last 30 days";
    tableHead.setAttribute("colspan", "2");
    downloadTable.appendChild(tableHead);

    tableHead = document.createElement("th");
    tableHead.innerHTML = "Dowloads for last 30 days";
    tableHead.setAttribute("colspan", "2");
    downloadTable.appendChild(tableHead);

    for (const element of downloadStats) {
        const tableRow = document.createElement("tr");
    
        const cellDate = document.createElement("td");
        cellDate.innerHTML = element.date;
        tableRow.appendChild(cellDate);
            
        const cellValue = document.createElement("td");
        cellValue.innerHTML = element.value;
        tableRow.appendChild(cellValue);

        downloadTable.appendChild(tableRow)
    }

    var tableRow = document.createElement("tr");
    
    
    divUserContent.appendChild(downloadTable);
    downloadTable.setAttribute("border", "2")
}