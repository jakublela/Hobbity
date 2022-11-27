let select = document.getElementById("sortOpt").value;
const authorization = new Headers();
authorization.append('Authorization', "Client-ID zrpNTzftIorJiuJScfImsSR-K4dUG1ZPC9GDDzjBvao");

function sortPhotos(){
    sortedPhotos("photos/order_by/", 8);
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