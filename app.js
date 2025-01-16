let btn = document.querySelector("button");
let h3 = document.querySelector("h1");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    document.querySelector("div").style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}