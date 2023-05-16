const box = document.getElementById("box");
const myBtn = document.getElementById("myBtn");

box.addEventListener("click", function(){
    this.style.backgroundColor = "green";
});

myBtn.addEventListener("click", function(e){
    e.stopPropagation();
})