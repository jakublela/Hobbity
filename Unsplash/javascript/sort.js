let select = document.getElementById("sortOpt").value;
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

function sortPhotos(){
    switch(select){
        case "latest":
            sortedPhotos("photos/order_by/latest?", 8);
            break;
        case "oldest":
            sortedPhotos("photos/order_by/oldest?", 8);
            break;
        case "popular":
            sortedPhotos("photos/order_by/popular?", 8);
            break;
    }
}

sortedPhotos = (urlEnd, num) => {
    console.log(num);
    fetch("https://api.unsplash.com/" + urlEnd,{
        method: "GET",
        headers: authorization,
        params: {
            count: num
        }
    })
    .then((response) => response.json())
    .then((photos) => {
        console.log(photos);
        
    })
    .catch((error) => console.log(error));  
}