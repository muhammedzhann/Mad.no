'use strick'
const images = [
    'Image.svg',
    'fourth_home.svg',
    'second_home.svg',
    'three_home.svg',
];

function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('image');
    imageElement.src = images[randomIndex];
}
window.onload = changeImage;

const words = ['landscape', 'architecture', 'interior architecture', 'product design'];
let index = 0;
const animatedTextElement = document.getElementById('animated-text');

function changeText() {
    animatedTextElement.style.opacity = 0;
    setTimeout(() => {
        index = (index + 1) % words.length; 
        animatedTextElement.textContent = words[index]; 
        animatedTextElement.style.opacity = 1; 
    }, 1000); 
}
setInterval(changeText, 2000);

