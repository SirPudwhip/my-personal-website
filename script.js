function makeNumber() {
    const whole = [];
    for (var i=0; i <6; i++) {
        const num = Math.floor(Math.random() * 9);
        whole.push(num);
    }
    return whole.join("");
}

//Get all uhhh the target HTML elements 
const columns = document.getElementsByClassName("target");

const results = document.getElementsByClassName("result");

//set all of the target values 
for (let i=0; i<columns.length; i++) {
    columns[i].innerHTML = makeNumber();
}

//get all of the input HTML elements 
const inputs = document.getElementsByTagName("input");

function checkMe() {
    for (let i=0; i<inputs.length; i++) {
        if (columns[i].textContent === inputs[i].value) {
            results[i].innerHTML = "You are a juicy boy!";
            results[i].classList.remove('wrong');
        }
        else {
            results[i].innerHTML = "You will NEVER be a juicy boy";
            results[i].classList.add('wrong');
        }
    }
}