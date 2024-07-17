function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

const words = ["student", "frontend developer", "leader"];
let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeWord(word, index) {
    if (index < word.length) {
        dynamicText.textContent += word.charAt(index);
        setTimeout(() => typeWord(word, index + 1), 100);
    } else {
        setTimeout(deleteWord, 2000);
    }
}

function deleteWord() {
    const word = dynamicText.textContent;
    if (word.length > 0) {
        dynamicText.textContent = word.substring(0, word.length - 1);
        setTimeout(deleteWord, 100);
    } else {
        currentIndex = (currentIndex + 1) % words.length;
        typeWord(words[currentIndex], 0);
    }
}

typeWord(words[currentIndex], 0);