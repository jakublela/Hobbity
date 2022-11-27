/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) kolekcje
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

const searchbar = document.getElementById("searchbar");
var username;

searchbar.addEventListener("keydown", function (key) {
    if (key.code === "Enter") {
        username = getUsername();
        getUserData(username);
    }
})

const getUsername = () => {
    let username = searchbar.value;
    username = username.toLowerCase();
    username = username.replaceAll(" ", "");
    return username;
}

const getUserData = (username) => {
    fetch("https://api.unsplash.com/users/"+username, {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userData) => {
        console.log(userData);
        showUserData(userData);
    })
    .catch((error) => alert(error))
}

const getUserPhotos = () => {
    fetch("https://api.unsplash.com/users/"+username + "/photos", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userPhotos) => {
        console.log(userPhotos);
        displayPhotos(userPhotos);
    })
    .catch((error) => console.log(error))
}

const getUserLikes = () => {
    fetch("https://api.unsplash.com/users/"+username + "/likes", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userLikes) => {
        console.log(userLikes);
        displayPhotos(userLikes);
    })
    .catch((error) => console.log(error))
}

const getUserColletions = () => {
    fetch("https://api.unsplash.com/users/"+username + "/collections", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userColletions) => {
        console.log(userColletions);
        showUserCollections(userColletions);
    })
    .catch((error) => console.log(error))
}

const getUserStats = () => {
    fetch("https://api.unsplash.com/users/"+username + "/statistics", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userStats) => {
        console.log(userStats)
        showUserStats(userStats)
    })
    .catch((error) => console.log(error))
}

const openCollection = (collectionPhotosLink) => {
    console.log(collectionPhotosLink);
    fetch(collectionPhotosLink, {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((collectionPhotos) => {
        console.log(collectionPhotos);
        displayPhotos(collectionPhotos);
    })
}

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