document.addEventListener('DOMContentLoaded', () => {
    const penButton = document.querySelector('#pen');
    const eraserButton = document.querySelector('#eraser');
    const clearButton = document.querySelector('#clear');
    const fillButton = document.querySelector('#fill');
    const shadeButton = document.querySelector('#shade');

    const gridItems = document.querySelectorAll('.grid-item');
    const color = document.querySelector('#color');

    const resetButtons = () => {
        [penButton, eraserButton, clearButton, fillButton, shadeButton].forEach(button => {
            button.style.backgroundColor = '';
        });
    };

    penButton.addEventListener('click', () => {
        resetButtons();
        penButton.style.backgroundColor = 'blue';
        console.log("Pen button clicked");
    });

    eraserButton.addEventListener('click', () => {
        resetButtons();
        eraserButton.style.backgroundColor = 'blue';
        console.log("Eraser button clicked");
    });

    shadeButton.addEventListener('click', () => {
        resetButtons();
        shadeButton.style.backgroundColor = 'blue';
        console.log("Shade button clicked");
    });

    fillButton.addEventListener('click', () => {
        gridItems.forEach(gridItem => gridItem.style.backgroundColor = color.value);
    });

    clearButton.addEventListener('click', () => {
        gridItems.forEach(gridItem => gridItem.style.backgroundColor = 'white');
    });
});