let btn = document.querySelector(".btn");

function flip(){
    let coin = Math.round(Math.random());
    let img = document.querySelector("img");
    coin === 1 ? (img.src = "heads.png") : (img.src = "tails.png");
}

btn.addEventListener("click", flip);