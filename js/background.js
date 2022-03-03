const imgArr = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImage = imgArr[Math.floor(Math.random() * imgArr.length)];

//img 요소 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);
