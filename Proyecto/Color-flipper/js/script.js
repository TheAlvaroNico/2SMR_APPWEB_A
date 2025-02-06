const btn = document.getElementById('btn');
const colorCode = document.getElementById('color-code');

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink'];

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor;
    colorCode.textContent = `Background color: ${selectedColor}`;
});