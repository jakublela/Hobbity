const mainDiv = document.getElementById("main");
//const uData = document.getElementById("uData");
const divUserContent = document.getElementById("userContent");
let isRandom = true;
let imgNum = 0;

//Wyświetlenie danych użytkownika
const showUserData = (userData, userUrl) => {
    //Stworzenie elementów potrzebnych do wyświetlenia użytkownika 
    if(!document.getElementById("uBio")) {

        createUData();
        let uData = document.getElementById("uData");

        let divUserBio = document.createElement("div");
        divUserBio.id = "uBio";
        divUserBio.className = "uBio";
        uData.appendChild(divUserBio);

        let imgProfilePic = document.createElement("img");
        imgProfilePic.id = "imgPfp"
        imgProfilePic.className = "imgPfp";
        divUserBio.appendChild(imgProfilePic);

        let h2Username = document.createElement("h2");
        h2Username.id = "user";
        h2Username.className = "user";
        divUserBio.appendChild(h2Username);

        let pUserBio = document.createElement("p");
        pUserBio.id = "pUserBio";
        divUserBio.appendChild(pUserBio);

        let btnShowUserPhotos = document.createElement("button");
        btnShowUserPhotos.id = "userInfoBtn";
        btnShowUserPhotos.innerHTML = "photos";
        btnShowUserPhotos.onclick = function() {getUserPhotos(userUrl)};
        uData.appendChild(btnShowUserPhotos); 

        let btnShowUserLikes = document.createElement("button");
        btnShowUserLikes.id = "userInfoBtn";
        btnShowUserLikes.innerHTML = "liked";
        btnShowUserLikes.onclick = function() {getUserLikes(userUrl)};
        uData.appendChild(btnShowUserLikes);

        let btnShowUserColletions = document.createElement("button");
        btnShowUserColletions.id = "userInfoBtn";
        btnShowUserColletions.innerHTML = "collections";
        btnShowUserColletions.onclick = function() {getUserColletions(userUrl)};
        uData.appendChild(btnShowUserColletions);

        let btnShowUserStats = document.createElement("button");
        btnShowUserStats.id = "userInfoBtn";
        btnShowUserStats.innerHTML = "statistics";
        btnShowUserStats.onclick = function() {getUserStats(userUrl)};
        uData.appendChild(btnShowUserStats);

        isRandom = false;
    }
    //Zamienienie danych użytkownika jeżeli istnieją potrzebne elemnty
    let imgProfilePic = document.getElementById("imgPfp");
    imgProfilePic.src = userData.profile_image.large;

    let h2Username = document.getElementById("user");
    h2Username.innerHTML = userData.name;

    let pUserBio = document.getElementById("pUserBio");
    pUserBio.innerHTML = userData.bio;

    clearColumns();
}

let columnNumber = 1;

//Wyświetlanie zdjęć
const displayPhotos = (photos, clearDiv = true) => {
    if (clearDiv) clearColumns();

    photos.forEach(photo => {
        let photoImgDiv = document.createElement("div");
        let photoImg = document.createElement("img");
        let photoColumn = document.getElementById("column" + columnNumber);
        photoImg.class = "userPhoto";
        photoImg.src = photoUrl(photo, 200);

        photoImgDiv.appendChild(photoImg);
        

        photoColumn.appendChild(photoImgDiv);
        //divUserContent.appendChild(photoImgDiv);
        photoImgDiv.className = "photoDiv";
        photoImg.className = "photoItself";
        addOverlay(photo.user.username, photoImgDiv);
        columnNumber++;
        if(columnNumber > 5) columnNumber = 1;
    });
}

//Przycisk do ładowania kolejnej strony zdjęć
const loadMorePhotos = (link, type, pageNum) => {
    deleteLoadMore();
    let btnLoadMore = document.createElement("button");
    btnLoadMore.innerHTML = "load more...";
    btnLoadMore.id = "loadMoreBtn";
    btnLoadMore.onclick = function () {
        switch (type) {
            case 1:
                getUserPhotos(link, ++pageNum);
                break;

            case 2:
                getUserLikes(link, ++pageNum)
                break;

            case 3:
                openCollection(link, ++pageNum)
                break;
        }
        btnLoadMore.remove();
    }
    document.getElementById("main").appendChild(btnLoadMore) ;
}

//Wyświetlanie kolekcji
const showUserCollections = (userColletions) => {
    deleteLoadMore();
    clearColumns();
    userColletions.forEach((collection) => {
        let photoColumn = document.getElementById("column" + columnNumber);
        let collectionMain = document.createElement("div");
        collectionMain.id = "colMain";
        collectionMain.onclick = function() {openCollection(collection.links.photos)}
        photoColumn.appendChild(collectionMain);

        let collectionImages = document.createElement("div");
        collectionImages.id = "colImages";
        collectionMain.appendChild(collectionImages);

        if (collection.total_photos > 0) {
            for (const [id, photo] of collection.preview_photos.entries()) {
                if (id > 2) break;
                let collectionImg = document.createElement("img");
                if (id == 0) {
                    collectionImg.src = photoUrl(photo, 200);
                } else {
                    collectionImg.src = photoUrl(photo, 100);
                }
                collectionImg.id = "colImg";
                collectionImages.appendChild(collectionImg);
            }
        }

        let missingImages = 3 - collectionImages.childElementCount;
        if (missingImages) {
            for (let i = 0; i < missingImages; i++) {
                let collectionImg = document.createElement("img");
                collectionImg.src = "./img/emptyPhoto.png";
                if (i == 0 && missingImages === 3) collectionImg.style.width = "200px";
                collectionImg.id = "colImg";
                collectionImages.appendChild(collectionImg);
            }
        }

        let collectionTitle = document.createElement("h3");
        collectionTitle.id = "colTitle";
        collectionTitle.innerHTML = collection.title;
        collectionMain.appendChild(collectionTitle);

        let collectionDescription = document.createElement("p");
        collectionDescription.id = "colDescription";
        collectionDescription.innerHTML = collection.description;
        collectionMain.appendChild(collectionDescription);

        let collectionInfo = document.createElement("span");
        collectionInfo.id = "colInfo";
        collectionInfo.innerHTML = "made by <i>"+ collection.user.username +"</i>,<br>"+ collection.total_photos + " photos";
        collectionMain.appendChild(collectionInfo)

        columnNumber++;
        if(columnNumber > 5) columnNumber = 1;
        
    })
}

//Wyświetlanie statystyk użytkownika
const showUserStats = (userStats) => {
    clearColumns();
    deleteLoadMore();
    createStatsTable(userStats.downloads, "Pobrania");
    createStatsTable(userStats.views, "Wyświetlenia");
}

//Stworzenie tabeli na statystyki
const createStatsTable = (stats, tableName) => {
    
    let photoColumn = document.getElementById("column" + columnNumber);


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
    
    photoColumn.appendChild(statsTable);
    statsTable.setAttribute("border", "2");

    columnNumber++;
    if(columnNumber > 5) columnNumber = 1;
}

const addOverlay = (author, parentDiv) => {
    let imgId = imgNum++;
    let divOverlay = document.createElement("div");
    divOverlay.className = "overlay";
    
    let likeBtn = document.createElement("button");
    likeBtn.id = "likebtn" + imgId;
    likeBtn.className = "likebtn";
    likeBtn.onclick = function() {like(imgId)};

    let likeImg = document.createElement("img")
    likeImg.src = "img/unlike.png";
    likeImg.className = "imgLike";
    likeImg.id = "imgLike" + imgId;
    likeImg.style.transform = "translateY(3px)";
    likeBtn.appendChild(likeImg);

    let span = document.createElement("span");
    span.className = "author";
    span.innerHTML = author;

    divOverlay.appendChild(likeBtn);
    divOverlay.appendChild(span);
    parentDiv.appendChild(divOverlay);
}

const like = (idImg) => {
    let likeBtnId = document.getElementById("likebtn" + idImg);
    let likeImg = document.getElementById("imgLike" + idImg);
    
    if(likeImg.getAttribute("src") != "img/like.png"){
        likeImg.src = "img/like.png";
    } else {
        likeImg.src = "img/unlike.png";
    }
}