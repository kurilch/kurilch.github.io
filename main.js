// const accordionButtons = document.querySelectorAll('.accordion-button');

// for (let i = 0; i < accordionButtons.length; i++) {
//     accordionButtons[i].addEventListener('click', () => {
//         accordionButtons[i].classList.toggle('is-open');

//         let content = accordionButtons[i].nextElementSibling;
//         if (content.style.maxHeight) {

//             content.style.maxHeight = null;
//         } else {

//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     })
// };
const accordionBlock = document.querySelector('.accordion');

accordionBlock.addEventListener('click', (evt) => {
    evt.target.classList.toggle('is-open');
    let content = evt.target.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
});
