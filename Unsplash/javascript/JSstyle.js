const imgDiv = document.getElementById("divImg");
const img = document.getElementsByName("img");
const overlay = document.createElement("div");
//const authorization = new Headers();
//authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

/*fetch("https://api.unsplash.com/photos/random", {
    method: "GET",
    headers: authorization
})
    .then((Response) => Response.json())
    .then((json) => {
        
    })*/

    //let h2Username = document.createElement("h2");
    //h2Username.id = "user";
    //h2Username.className = "user";
    //h2Username.innerHTML = userData.name;
    //divUserBio.appendChild(h2Username);

const mouseOver = () => {
    overlay.setAttribute("id", "overlay");
    overlay.innerHTML = 
    '<div class="container">' + 
      '<img src="img/indeks.png" class="image">' + 
        '<div class="overlay">' + 
          '<button id="likebtn"><img src="img/unlike.png" id="imgLike" onclick="like()" style="transform: translateY(3px);"></button>' +
          '<span class="author">[Author]</span>'+
        '</div>'
    '</div>';
    overlay.style.position = "relative";
    overlay.appendChild(document.createTextNode("Hello there!"));
    imgDiv.appendChild(overlay);
    console.log("Działa");
}

const mouseOut = () => {
    overlay.innerHTML = "";
    document.getElementById("overlay").remove();
    console.log("zeszła");
}
/*
let isMouseHover = false
let test = document.getElementById("baseImage");
test.addEventListener("mouseleave", function (event) {
  isMouseHover = false
  event.target.textContent = "mouse out"
  console.log(isMouseHover)
}, false);
test.addEventListener("mouseover", function (event) {
  isMouseHover = true
  event.target.textContent = "mouse in"
  console.log(isMouseHover)
}, false);
*/

