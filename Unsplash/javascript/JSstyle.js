const imgDiv = document.getElementById("divImg");
const img = document.getElementsByName("img");
const overlay = document.createElement("div");

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