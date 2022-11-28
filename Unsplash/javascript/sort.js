let select = document.getElementById("sortOpt").value;
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

function sortPhotos(){
    sortedPhotos("photos/order_by?");
}

sortedPhotos = (urlEnd) => {
    console.log(num);
    fetch("https://api.unsplash.com/" + urlEnd,{
        method: "GET",
        headers: authorization
    })
    .then((response) => response.json())
    .then((photos) => {
        console.log(photos);
        displayPhotos(photos, false);
        photos.forEach(photo => {
            let newDiv = document.createElement("div");
            let newPhoto = document.createElement("img");
            newPhoto.id = "photo";
            newPhoto.src = photoUrl(photo, 250, 2);
            let currentDiv = document.getElementById("ender");
            newDiv.id = "photo_template";
            newDiv.appendChild(newPhoto);
            document.body.insertBefore(newDiv, currentDiv);
        });
        
    })
    .catch((error) => console.log(error));  
}