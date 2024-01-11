document.addEventListener('DOMContentLoaded', () => {
    let isMousePressed = false;
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
    }

    function changeColor(e) {
        if (isMousePressed)
            e.target.style.backgroundColor = 'black';
    }

    function handleMouseUp() {
        isMousePressed = false;
    }

    function handleMouseDown() {
        isMousePressed = true;
    }

    function handleMouseMove(e) {
        if (isMousePressed)
            changeColor(e);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', handleMouseMove));

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
});
