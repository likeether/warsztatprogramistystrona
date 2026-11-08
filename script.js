document.addEventListener('DOMContentLoaded', () => {
const div1  = document.querySelector('.div1');
const ciekawostkaButton = document.querySelector('.ciekawostka');

     if (!div1 || !ciekawostkaButton) return;

    ciekawostkaButton.addEventListener('click', () => {
        div1.textContent = '2 + 2 = 4';
});
});