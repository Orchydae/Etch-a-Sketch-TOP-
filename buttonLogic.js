document.addEventListener('DOMContentLoaded', () => {
    const penButton = document.querySelector('#pen');
    const eraserButton = document.querySelector('#eraser');
    const clearButton = document.querySelector('#clear');
    const fillButton = document.querySelector('#fill');
    const shadeButton = document.querySelector('#shade');

    const color = document.querySelector('#color');
    const activeButtonColor = '#B0B5ED';

    const resetButtons = () => {
        [penButton, eraserButton, clearButton, fillButton, shadeButton].forEach(button => {
            button.style.backgroundColor = '';
        });
    };

    penButton.addEventListener('click', () => {
        resetButtons();
        penButton.style.backgroundColor = activeButtonColor;
        console.log("Pen button clicked");
    });

    eraserButton.addEventListener('click', () => {
        resetButtons();
        eraserButton.style.backgroundColor = activeButtonColor;
        console.log("Eraser button clicked");
    });

    shadeButton.addEventListener('click', () => {
        resetButtons();
        shadeButton.style.backgroundColor = activeButtonColor;
        console.log("Shade button clicked");
    });

    fillButton.addEventListener('click', () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(gridItem => gridItem.style.backgroundColor = color.value);
        console.log("Fill button clicked");
    });

    clearButton.addEventListener('click', () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(gridItem => gridItem.style.backgroundColor = '#FFF0F1');
    });
});