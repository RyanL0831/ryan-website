const image = ["0.jpeg","1.jpeg","2.jpeg"]

const chosenImage = image[Math.floor(Math.random()*image.length)];

const bgImage = document.createElement("img");
bgImage.src = `${chosenImage}`

console.log(bgImage);
document.body.appendChild(bgImage);