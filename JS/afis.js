var element = document.getElementById("invisible")
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")

function invisible(){
    element.style.visibility = "hidden";
}

function visible(){
    element.style.visibility = "visible";
}

async function replay(){
    invisible()
    await sleep(2000);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.color = "#" + randomColor;
    visible();
    await sleep(2000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(replay, 4000)

function checkKeyPressed(evt)
{
    if(evt.keyCode == "13")
    {
        item1.style.visibility = "visible";
        item3.style.visibility = "visible";
    }
}

window.addEventListener("keydown", checkKeyPressed);
item2.addEventListener('mouseover', function handleMouseOver() {item1.style.visibility = "visible"; item3.style.visibility = "visible";});
item2.addEventListener('mouseout', function handleMouseOut() {item1.style.visibility = "hidden"; item3.style.visibility = "hidden";});
