document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.querySelector('#color');
    const recentColorsList = document.querySelector('.recent-colors ul');

    colorInput.addEventListener('change', (event) => {
        const selectedColor = event.target.value;

        // Create a new li element
        const newLi = document.createElement('li');

        // Create a new button element
        const newButton = document.createElement('button');
        newButton.classList.add('recent-color');
        newButton.style.backgroundColor = selectedColor;
        newButton.style.width = '40px';
        newButton.style.height = '40px';
        newButton.addEventListener('click', () => {
            colorInput.value = selectedColor;
        });

        newLi.appendChild(newButton);
        recentColorsList.appendChild(newLi);
    });

});