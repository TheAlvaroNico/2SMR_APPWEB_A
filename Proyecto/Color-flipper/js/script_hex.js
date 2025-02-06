const btn = document.getElementById('btn');
const colorCode = document.getElementById('color-code');

btn.addEventListener('click', () => {
    const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = randomHex;
    colorCode.textContent = `Background color: ${randomHex}`;
});
