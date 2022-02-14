let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.textContent = count;
}

function save(){
    let savedValue = count + " - ";
    saveEl.textContent += savedValue;

}