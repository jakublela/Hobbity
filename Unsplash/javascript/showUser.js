const mainDiv = document.getElementById("main");
const uData = document.getElementById("uData");
const divUserContent = document.getElementById("userContent");

const showUserData = (userData) => {
    if(document.getElementById("uBio")) {
        let imgProfilePic = document.getElementById("imgPfp");
        imgProfilePic.src = userData.profile_image.large;

        let h2Username = document.getElementById("user");
        h2Username.innerHTML = userData.name;

        let pUserBio = document.getElementById("pUserBio");
        pUserBio.innerHTML = userData.bio;

        divUserContent.innerHTML = "";
    } else {
        let divUserBio = document.createElement("div");
        divUserBio.id = "uBio";
        divUserBio.className = "uBio";
        uData.appendChild(divUserBio);

        let imgProfilePic = document.createElement("img");
        imgProfilePic.id = "imgPfp"
        imgProfilePic.className = "imgPfp";
        imgProfilePic.src = userData.profile_image.large;
        divUserBio.appendChild(imgProfilePic);

        let h2Username = document.createElement("h2");
        h2Username.id = "user";
        h2Username.className = "user";
        h2Username.innerHTML = userData.name;
        divUserBio.appendChild(h2Username);

        let pUserBio = document.createElement("p");
        pUserBio.id = "pUserBio";
        pUserBio.innerHTML = userData.bio;
        divUserBio.appendChild(pUserBio);

        let btnShowUserPhotos = document.createElement("button");
        btnShowUserPhotos.innerHTML = "Show user's photos";
        btnShowUserPhotos.onclick = function() {getUserPhotos(username)};
        uData.appendChild(btnShowUserPhotos); 

        let btnShowUserLikes = document.createElement("button");
        btnShowUserLikes.innerHTML = "Show user's likes";
        btnShowUserLikes.onclick = function() {getUserLikes(username)};
        uData.appendChild(btnShowUserLikes);

        let btnShowUserColletions = document.createElement("button");
        btnShowUserColletions.innerHTML = "Show user's collections";
        btnShowUserColletions.onclick = function() {getUserColletions(username)};
        uData.appendChild(btnShowUserColletions);

        let btnShowUserStats = document.createElement("button");
        btnShowUserStats.innerHTML = "Show user's stats";
        btnShowUserStats.onclick = function() {getUserStats(username)};
        uData.appendChild(btnShowUserStats);
    }
}

const showUserPhotos = (userPhotos) => {
    divUserContent.innerHTML = "";

    userPhotos.forEach(element => {
        let photo = document.createElement("img");
        photo.class = "userPhoto";
        photo.src = element.urls.small;
        divUserContent.appendChild(photo);
    });
}

const showUserLikes = (userLikes) => {
    divUserContent.innerHTML = "";

    userLikes.forEach(element => {
        let photo = document.createElement("img");
        photo.class = "userPhoto";
        photo.src = element.urls.small;
        divUserContent.appendChild(photo);
    });
}

const showUserStats = (userStats) => {
    divUserContent.innerHTML = "";
    
    createStatsTable(userStats.downloads, "Pobrania");
    createStatsTable(userStats.views, "Wyświetlenia");
}

const createStatsTable = (stats, tableName) => {
    const statsTable = document.createElement("table");

    const tableHead = document.createElement("th");
    tableHead.innerHTML = tableName;
    tableHead.setAttribute("colspan", "3");
    statsTable.appendChild(tableHead);

    for (const [id, element] of stats.historical.values.entries()) {
        var tableRow = statsTable.insertRow();
    
        var cell = tableRow.insertCell();
        cell.innerHTML = id+1;

        cell = tableRow.insertCell();
        cell.innerHTML = element.date;
            
        cell = tableRow.insertCell();
        cell.innerHTML = element.value;
    }

    tableRow = statsTable.insertRow();
    cell = tableRow.insertCell();

    cell = tableRow.insertCell();
    cell.innerHTML = "Średnie "+ tableName.toLocaleLowerCase() +" w miesiącu";

    cell = tableRow.insertCell();
    cell.innerHTML = stats.historical.average;
    
    tableRow = statsTable.insertRow();
    cell = tableRow.insertCell();

    cell = tableRow.insertCell();
    cell.innerHTML = "Łączne "+ tableName.toLocaleLowerCase() +" w miesiącu";

    cell = tableRow.insertCell();
    cell.innerHTML = stats.historical.change;

    tableRow = statsTable.insertRow();
    cell = tableRow.insertCell();

    cell = tableRow.insertCell();
    cell.innerHTML = "Łączne "+ tableName.toLocaleLowerCase();

    cell = tableRow.insertCell();
    cell.innerHTML = stats.total;
    
    divUserContent.appendChild(statsTable);
    statsTable.setAttribute("border", "2");
}