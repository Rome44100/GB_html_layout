function ShowElems(ElemClick_selector, HiddenBlock_selector, opacity) {
    let _elem = document.querySelector(HiddenBlock_selector);
    document.querySelector(ElemClick_selector).addEventListener('click', function () {
        if('visible' != _elem.style.visibility){
            _elem.style.opacity = opacity;
            _elem.style.visibility = 'visible';
        } else {
            _elem.style.opacity = 0;
            _elem.style.visibility = 'hidden';
        }
    });
}
window.addEventListener('load', function() {
    ShowElems('#search_display', '#search_elems', 1);
    ShowElems('.button_menu', '.main_menu', 1);
    ShowElems('.button_menu', '.banner_bg', 1);
});