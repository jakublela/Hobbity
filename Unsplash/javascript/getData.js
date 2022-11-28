const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

//Szukanie użytkownika po kliknięciu enter
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keydown", function (key) {
    if (key.code !== "Enter") return;
    
    let search = searchUser.value;
    let username = search.toLowerCase().replaceAll(" ", "");
    getUserData("https://api.unsplash.com/users/" + username);
})

//Pobranie danych użytkownika
const getUserData = (userUrl) => {
    fetch(userUrl, {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userData) => {
        showUserData(userData, userUrl);
    })
    .catch((error) => alert(error))
}

//Pobranie zdjęć wstawionych przez użytkownika
const getUserPhotos = (userUrl, pageNum = 1) => {
    fetch(userUrl + "/photos?" + new URLSearchParams({ per_page: 10, page: pageNum}), {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userPhotos) => {
        displayPhotos(userPhotos, !(pageNum-1));
        if (userPhotos.length > 7) loadMorePhotos(userUrl, 1, pageNum);
    })
    .catch((error) => console.log(error))
}

//Pobranie zdjęć polubionych przez użytkownika
const getUserLikes = (userUrl, pageNum = 1) => {
    fetch(userUrl + "/likes?" + new URLSearchParams({ per_page: 10, page: pageNum}), {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userLikes) => {
        displayPhotos(userLikes, !(pageNum-1));
        if (userLikes.length > 7) loadMorePhotos(userUrl, 2, pageNum);
    })
    .catch((error) => console.log(error))
}

//Pobranie kolekcji użytkownika
const getUserColletions = (userUrl) => {
    fetch(userUrl + "/collections?" + new URLSearchParams({ per_page: 30}), {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userColletions) => {
        showUserCollections(userColletions);
    })
    .catch((error) => console.log(error))
}

//Pobranie statystyk użytkownika
const getUserStats = (userUrl) => {
    fetch(userUrl + "/statistics", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userStats) => {
        showUserStats(userStats);
    })
    .catch((error) => console.log(error))
}

//Pobranie zdjęć z kolekcji
const openCollection = (collectionPhotosLink, pageNum = 1) => {
    fetch(collectionPhotosLink + "?" + new URLSearchParams({ per_page: 10, page: pageNum}), {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((collectionPhotos) => {
        displayPhotos(collectionPhotos, !(pageNum-1));
        if (collectionPhotos.length > 7) loadMorePhotos(collectionPhotosLink, 3, pageNum);
    })
    .catch((error) => console.log(error))
}

//Sprawdzanie statusu odpowiedzi z unsplash
const checkResponse = (response) => {
    switch (response.status) {
        case 200:
            return response.json();
    
        case 400:
            throw new Error("There was a problem with request");

        case 401:
            throw new Error("Invalid Access Token");

        case 403:
            throw new Error("Missing permissions to perform request");
        
        case 404:
            throw new Error("User doesn't exist");

        default:
            throw new Error("Something went wrong on our end");
    }
}