const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");


window.addEventListener("scroll",function(){
    let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
    if(document.documentElement.scrollTop == limitBottom){
    generateRandomPhotos();
  }
})


function generateRandomPhotos(){
    let amount = document.getElementById("photoAmount").value;
    let keyword = document.getElementById("photoKeyWord").value;
    generatePhotoTemplate("photos/random?" + new URLSearchParams({ count: amount, query: keyword}));
}

function generatePhotoTemplate(urlEnd){

    fetch("https://api.unsplash.com/" + urlEnd,{
        method: "GET",
        headers: authorization,
    })
    .then((response) => response.json())
    .then((photos) => {
        console.log(photos);
        photos.forEach(photo => {
            let newDiv = document.createElement("div");
            let newPhoto = document.createElement("img");
            newPhoto.id = "photo";
            newPhoto.src = photo.urls.raw + "&w=250&dpr=2";
            let currentDiv = document.getElementById("ender");
            newDiv.id = "photo_template";
            newDiv.appendChild(newPhoto);
            document.body.insertBefore(newDiv, currentDiv);
        });
    })
    .catch((error) => console.log(error));  
}



/*fetch("https://api.unsplash.com/photos/random", {
        method: "GET",
        headers: authorization
    })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));*/

/*fetch("https://api.unsplash.com/photos/random",{
        method: "GET",
        headers: authorization
    })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));*/

/*let photoPhoto = document.createElement("img");
        imgProfilePic.id = "imgProfilePic";
        imgProfilePic.src = photo.urls.raw + "&w=1500&dpr=2";
        divUserData.appendChild(imgProfilePic);*/