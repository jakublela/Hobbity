const mainDiv = document.getElementById("main");
const uData = document.getElementById("uData");
const divUserContent = document.getElementById("userContent");

const showUserData = (userData, userUrl) => {
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
        btnShowUserPhotos.onclick = function() {getUserPhotos(userUrl)};
        uData.appendChild(btnShowUserPhotos); 

        let btnShowUserLikes = document.createElement("button");
        btnShowUserLikes.innerHTML = "Show user's likes";
        btnShowUserLikes.onclick = function() {getUserLikes(userUrl)};
        uData.appendChild(btnShowUserLikes);

        let btnShowUserColletions = document.createElement("button");
        btnShowUserColletions.innerHTML = "Show user's collections";
        btnShowUserColletions.onclick = function() {getUserColletions(userUrl)};
        uData.appendChild(btnShowUserColletions);

        let btnShowUserStats = document.createElement("button");
        btnShowUserStats.innerHTML = "Show user's stats";
        btnShowUserStats.onclick = function() {getUserStats(userUrl)};
        uData.appendChild(btnShowUserStats);

        divUserContent.innerHTML = "";
    }   
}

const displayPhotos = (photos, clearDiv = true) => {
    if (clearDiv) divUserContent.innerHTML = "";

    photos.forEach(photo => {
        let photoImgDiv = document.createElement("div");
        let photoImg = document.createElement("img");
        photoImg.class = "userPhoto";
        photoImg.src = photo.urls.small;
        photoImgDiv.appendChild(photoImg);
        divUserContent.appendChild(photoImgDiv);
    });
}

const showUserCollections = (userColletions) => {
    divUserContent.innerHTML = "";
    userColletions.forEach((collection) => {
        let collectionMain = document.createElement("div");
        collectionMain.onclick = function() {openCollection(collection.links.photos)}
        divUserContent.appendChild(collectionMain);

        let collectionImages = document.createElement("div");
        collectionMain.appendChild(collectionImages);

        if (collection.total_photos > 0) {
            for (const [id, photo] of collection.preview_photos.entries()) {
                if (id > 2) break;
                let collectionImg = document.createElement("img");
                if (id == 0) {
                    collectionImg.src = photo.urls.small;
                } else {
                    collectionImg.src = photo.urls.thumb;
                }
                collectionImages.appendChild(collectionImg);
            }
        }

        let missingImages = 3 - collectionImages.childElementCount;
        if (missingImages) {
            for (let i = 0; i < missingImages; i++) {
                let collectionImg = document.createElement("img");
                collectionImg.src = "./img/emptyPhoto.png";
                if (i == 0 && missingImages === 3) {
                    collectionImg.style.width = "400px";
                    collectionImg.style.height = "400px";
                }
                collectionImages.appendChild(collectionImg);
            }
        }

        let collectionTitle = document.createElement("h3");
        collectionTitle.innerHTML = collection.title;
        collectionMain.appendChild(collectionTitle);

        let collectionDescription = document.createElement("p");
        collectionDescription.innerHTML = collection.description;
        collectionMain.appendChild(collectionDescription);

        let collectionInfo = document.createElement("span");
        collectionInfo.innerHTML = "Autor: "+ collection.user.username +", Ilość zdjęć: "+ collection.total_photos;
        collectionMain.appendChild(collectionInfo)
        
    })
}

const showUserStats = (userStats) => {
    divUserContent.innerHTML = "";
    
    createStatsTable(userStats.downloads, "Pobrania");
    createStatsTable(userStats.views, "Wyświetlenia");
}

const createStatsTable = (stats, tableName) => {
    let statsTable = document.createElement("table");

    let tableHead = document.createElement("th");
    tableHead.innerHTML = tableName;
    tableHead.setAttribute("colspan", "3");
    statsTable.appendChild(tableHead);

    for (const [id, element] of stats.historical.values.entries()) {
        let tableRow = statsTable.insertRow();
    
        let cell = tableRow.insertCell();
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