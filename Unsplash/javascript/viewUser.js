/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) polubione zdjęcia
o    (2 pkt) kolekcje
o    (2 pkt) statystyki
o    (2 pkt) wstawione zdjęcia
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

var userUrlMain = "https://api.unsplash.com/users/robpotter"

const compose = (...fns) => (username) => fns.forEach((fn) => fn(username))

const getUserData = (userURL) => {
    fetch(userURL, {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        console.log(response.status);
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserLikes = (userURL) => {
    fetch(userURL + "/likes", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        console.log(response.status);
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserColletions = (userURL) => {
    fetch(userURL + "/collections", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        console.log(response.status);
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserStats = (userURL) => {
    fetch(userURL + "/statistics", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        console.log(response.status);
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUserPhotos = (userURL) => {
    fetch(userURL + "/photos", {
        method: "GET",
        headers: authorization
    })
    .then((response) => {
        console.log(response.status);
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

const getUser = compose(getUserData, getUserLikes, getUserColletions, getUserStats, getUserPhotos);

getUser(userUrlMain);