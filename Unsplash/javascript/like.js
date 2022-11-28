let likinStat = 0;
const like = () => {
    console.log("xd")
    if(likinStat == 0){
        document.getElementById("imgLike").src = "img/like.png";
        likinStat = 1;
    } else {
        document.getElementById("imgLike").src = "img/unlike.png";
        likinStat = 0;
    }
}