document.addEventListener('DOMContentLoaded', () => {
    let isMousePressed = false;
    const gridContainer = document.querySelector('.grid-container');
    const gridSizeInput = document.querySelector('#grid-size');
    const gridValueTxt = document.querySelector('#grid-size-value');
    const colorValue = document.querySelector('#color');

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
        if (isMousePressed && e.target.classList.contains('grid-item'))
            e.target.style.backgroundColor = colorValue.value;
    }

    function handleMouseUp() {
        isMousePressed = false;
    }

    function handleMouseDown(e) {
        isMousePressed = true;
        changeColor(e);
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
