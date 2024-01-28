document.addEventListener('DOMContentLoaded', () => {
    let isMousePressed = false;
    let selectedButton = 'pen';
    const activeButtonColor = 'blue';
    const gridContainer = document.querySelector('.grid-container');
    const gridSizeInput = document.querySelector('#grid-size');
    const gridValueTxt = document.querySelector('#grid-size-value');
    const colorValue = document.querySelector('#color');

    const penButton = document.querySelector('#pen');
    penButton.style.backgroundColor = activeButtonColor;
    const eraserButton = document.querySelector('#eraser');
    const shadeButton = document.querySelector('#shade');

    function createGrid(size) {
        gridContainer.innerHTML = ''; // Clear grid
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridValueTxt.textContent = `${size} x ${size}`;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }

        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', handleMouseMove));
    }

    function changeColor(e) {
        if (isMousePressed && e.target.classList.contains('grid-item')) {
            if (selectedButton === 'pen')
                e.target.style.backgroundColor = colorValue.value;
            else if (selectedButton === 'eraser')
                e.target.style.backgroundColor = 'white';
            else if (selectedButton === 'shade') {
                const currentColor = e.target.style.backgroundColor;
                const currentColorRGB = currentColor.substring(4, currentColor.length - 1)
                    .replace(/ /g, '')
                    .split(',');
                const newColor = `rgb(${currentColorRGB[0] - 25}, ${currentColorRGB[1] - 25}, ${currentColorRGB[2] - 25})`;
                e.target.style.backgroundColor = newColor;
            }
        }
    }

    function handleMouseUp() {
        isMousePressed = false;
    }

    function handleMouseDown(e) {
        isMousePressed = true;
        const button = e.target.closest('button');
        if (button && button.closest('.header')) {
            selectedButton = button.id;
        }
        console.log(selectedButton);
    }

    function handleMouseMove(e) {
        if (isMousePressed)
            changeColor(e);
    }

    gridSizeInput.addEventListener('input', () => {
        const size = gridSizeInput.value;
        createGrid(size);
    });

    createGrid(gridSizeInput.value);

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
});
