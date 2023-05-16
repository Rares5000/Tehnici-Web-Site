nr = 1;
function clearInput(){
    var getValue= document.getElementById("nume");
    console.log(getValue);
        if (getValue.value !="") {
            localStorage.setItem(nr, getValue.value);
            console.log(getValue.value);
            h1 = document.createElement("h1");
            h1.innerHTML = localStorage.getItem(nr);
            console.log(h1);
            nr += 1;
            getValue.value = "";
            
            document.getElementById("vizitatori").appendChild(h1);
        }
}

const text = document.getElementById("text");
const buttonText = document.getElementById("buton");

text.classList.add('modificator');

const textCS = window.getComputedStyle(text);
console.log(textCS);

