/*
(8 pkt) Aplikacja powinna mieć możliwość wyświetlić danego użytkownika:
o    (2 pkt) polubione zdjęcia
o    (2 pkt) kolekcje
o    (2 pkt) statystyki
o    (2 pkt) wstawione zdjęcia
*/
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

var userUrl = "robpotter";

const compose = (...fns) => (username) => fns.forEach((fn) => fn(username))

const getUserData = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL, {
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
    .then((userData) => {
        console.log(userData);
        let divUserData = document.createElement("div");
        let imgProfilePic = document.createElement("img");
        let h2Username = document.createElement("h2");
        let pUserBio = document.createElement("p");

        imgProfilePic.src = userData.profile_image.large;
        h2Username.innerHTML = userData.name;
        pUserBio.innerHTML = userData.bio;

        document.body.appendChild(divUserData);
        divUserData.appendChild(imgProfilePic);
        divUserData.appendChild(h2Username);
        divUserData.appendChild(pUserBio);
    })
    .catch((error) => console.log(error))
}

const getUserLikes = (userURL) => {
    fetch("https://api.unsplash.com/users/"+userURL + "/likes", {
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
    fetch("https://api.unsplash.com/users/"+userURL + "/collections", {
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
    fetch("https://api.unsplash.com/users/"+userURL + "/statistics", {
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
    fetch("https://api.unsplash.com/users/"+userURL + "/photos", {
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

getUser(userUrl);