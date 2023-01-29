let names = [];
let temp;
let counter = 0;


document.getElementById("submit").onclick = function(){
    names[counter] = document.getElementById("input").value;
    document.getElementById("input").value = null;         
    counter++;
    console.log(names[counter - 1]);
    document.getElementById("names").innerHTML = `Names : ${names}`
}

document.getElementById("random").onclick = function() {
    let index = names.length;
    let randomIndex = Math.round(Math.random() * (index - 1));
    console.log(randomIndex);
    let name = names[randomIndex];
    document.getElementById("name").innerHTML = `The random name is ${name}`;
}

