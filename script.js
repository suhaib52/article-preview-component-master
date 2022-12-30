'use strict';
const button = document.querySelector('button');
const tooltip = document.querySelector('.tooltipContainer');

button.addEventListener('click', () => {
    tooltip.style.display = 'block';
});

tooltip.addEventListener('click', () => {
    tooltip.style.display = 'none';
});