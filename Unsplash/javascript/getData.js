/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) kolekcje
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keydown", function (key) {
    if (key.code !== "Enter") return;
    
    let search = searchbar.value;

    if (search.startsWith("u/")) {
        let username = search.slice(2).toLowerCase().replaceAll(" ", "");
        getUserData("https://api.unsplash.com/users/" + username);
    } else {
        
    }
    
})

const getSearchbarValue = () => {
    let searchbarValue = searchbar.value;
    searchbarValue = searchbarValue.toLowerCase();
    searchbarValue = searchbarValue.replaceAll(" ", "");
    console.log(searchbarValue);
    return searchBarValue;
}

const getUserData = (userUrl) => {
    fetch(userUrl, {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((userData) => {
        console.log(userData);
        showUserData(userData, userUrl);
    })
    .catch((error) => alert(error))
}

const getUserPhotos = (userUrl) => {
    fetch(userUrl + "/photos", {
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

const getUserLikes = (userUrl) => {
    fetch(userUrl + "/likes", {
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

const getUserColletions = (userUrl) => {
    fetch(userUrl + "/collections", {
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

const getUserStats = (userUrl) => {
    fetch(userUrl + "/statistics", {
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