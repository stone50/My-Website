const date = new Date();

let myAge = date.getFullYear() - 2001;

let month = date.getMonth();
if(month < 2){
    myAge--;
} else if(month == 2 && date.getDay() < 30){
    myAge--;
}

document.getElementById("basic-info-my-age").innerText = `Age: ${myAge}`;