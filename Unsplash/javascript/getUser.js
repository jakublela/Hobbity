/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) polubione zdjęcia
o    (2 pkt) kolekcje
o    (2 pkt) statystyki
o    (2 pkt) wstawione zdjęcia
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

const getUserData = () => {
    username = getUsername();
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
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserLikes = () => {
    fetch("https://api.unsplash.com/users/"+username + "/likes", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserColletions = () => {
    fetch("https://api.unsplash.com/users/"+username + "/collections", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserStats = () => {
    fetch("https://api.unsplash.com/users/"+username + "/statistics", {
        method: "GET",
        headers: authorization
    })
    .then((response) => checkResponse(response))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUsername = () => {
    username = document.getElementById("username").value;
    username = username.toLowerCase();
    return username = username.replaceAll(" ", "");
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