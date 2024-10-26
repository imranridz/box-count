let count = 0;

const clickBox = document.getElementById('clickBox');
const counterDisplay = document.getElementById('counter');

clickBox.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = `Click count: ${count}`;
});
