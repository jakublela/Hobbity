window.addEventListener("scroll",function(){
    let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
    if(document.documentElement.scrollTop == limitBottom){
    let keyword = document.getElementById("photoKeyWord").value;
    generatePhotoTemplate("photos/random?" + new URLSearchParams({ count: 8, query: keyword}));
    setTimeout(1000);
  }
})
generatePhotoTemplate("photos/random?" + new URLSearchParams({ count: 8 }));


/*window.addEventListener("scroll",function(){
    let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
    if(document.documentElement.scrollTop == limitBottom){
    scrollLoad(urlPhoto);
    let keyword = document.getElementById("photoKeyWord").value;
    generatePhotoTemplate("photos/random?" + new URLSearchParams({ count: 8, query: keyword}));
    setTimeout(1000);
  }
})



const scrollLoad = (urlPhoto) => {
    if()
    generatePhotoTemplate(urlPhoto + new URLSearchParams({ page: number, per_page: 8}))
}*/


function generateRandomPhotos(){
    let amount = document.getElementById("searchRandomNumber").value;
    let keyword = document.getElementById("searchRandomTag").value;
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
        displayPhotos(photos, false);
        /*photos.forEach(photo => {
            let newDiv = document.createElement("div");
            let newPhoto = document.createElement("img");
            newPhoto.id = "photo";
            newPhoto.src = photoUrl(photo, 150);
            let currentDiv = document.getElementById("ender");
            newDiv.id = "photo_template";
            newDiv.appendChild(newPhoto);
            document.body.insertBefore(newDiv, currentDiv);
        });*/
    })
    .catch((error) => console.log(error));  
}

const photoUrl = (photo, width = null, dpr = null, height = null) => {
    let parameters = "";
    if(width != null){
        parameters += "&w=" + width;
    }
    if(dpr != null){
    parameters += "&dpr=" + dpr;
    }
    if(height != null){
         parameters += "&h=" + height;
    }
    return photo.urls.raw + parameters;
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