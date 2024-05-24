let clickCount = 0;

const counter = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    clickCount++;
    counter.textContent = `Количество кликов: ${clickCount}`;
});
