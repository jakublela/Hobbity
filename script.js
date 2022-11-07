function validation() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var birthDate = document.getElementById("birthDate").value;
    var email = document.getElementById("email").value;
    var genders = document.getElementsByName("gender");
    for (var i=0; i<genders.length; i++) {
        if (genders[i].checked) {
            var gender = genders[i].value;
            break;
        }
        
    }
    var color = document.getElementById("favColor").value;


    var namePattern = /[A-Z]+[a-z]*/;
    var lastnamePattern = /[A-Z]+[a-z]*[-]?[A-Za-z]*/;
    var datePattern = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    var emailPattern = /[A-Za-z0-9.]+@[A-Za-z0-9.]+.[a-z]+/i;
    var colorPattern = /\w+/

    
    var error = false;
    var errorMessage = "Błąd w:";
    if (!namePattern.test(name)) {
        errorMessage += " imieniu,";
        error = true;
    }
    if (!lastnamePattern.test(lastname)) {
        errorMessage += " nazwisku,";
        error = true;
    }
    if (!datePattern.test(birthDate)) {
        errorMessage += " dacie urodzenia,";
        error = true;
    }
    if (!emailPattern.test(email)) {
        errorMessage += " emailu,";
        error = true;
    }
    if (!gender) {
        errorMessage +=" płci,";
        error = true;
    }
    if (!colorPattern.test(color)) {
        errorMessage += " kolorze,";
        error = true;
    }
    if (error) {
        return alert(errorMessage.slice(0, -1));
    }

    return alert("Dane poprawne");
}

var count = 0;
function counter() {
    document.getElementById("counter").innerHTML = count++;
}