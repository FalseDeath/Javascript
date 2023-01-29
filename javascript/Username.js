let username = "";
let password = "";

document.getElementById("signIn").onclick = function() {
    username = document.getElementById("myUsername").value;
    password = document.getElementById("myPassword").value;
    let test1 = Boolean(username);
    let test2 = Boolean(password);
    if (test1 == false || test2 == false){
        console.log("One of the fields is missing.");
        document.getElementById("noInput").innerHTML = "One of the feilds is missing!";
    }
    else{
        document.getElementById("noInput").innerHTML = "";
        console.log(username);
        console.log(password);
    }
}