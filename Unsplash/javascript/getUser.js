/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) polubione zdjęcia
o    (2 pkt) kolekcje
o    (2 pkt) statystyki
o    (2 pkt) wstawione zdjęcia
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

var userUrl = "robpotte";

const compose = (...fns) => (userUrl) => fns.forEach((fn) => fn(userUrl));

const getUserData = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL, {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        checkResponse(response);
	})
    .then((userData) => console.log(userData))
    .catch((error) => alert(error))
}

const getUserLikes = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL + "/likes", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        checkResponse(response);
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserColletions = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL + "/collections", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        checkResponse(response);
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserStats = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL + "/statistics", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        checkResponse(response);
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserPhotos = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL + "/photos", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        checkResponse(response);
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
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

const getUser = compose(getUserData, getUserLikes, getUserColletions, getUserStats, getUserPhotos);

getUser(userUrl);