const selectElement = function (element) {
    return document.querySelector(element);
};

let menu_toggle = selectElement('.menu-toggle');
let body = selectElement('body')

menu_toggle.addEventListener('click', function(){
    body.classList.toggle('open')
})