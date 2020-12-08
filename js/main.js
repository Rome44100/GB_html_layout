function ShowElems(ElemClick_selector, HiddenBlock_selector, opacity) {
    let _elem = document.querySelector(HiddenBlock_selector);
    document.querySelector(ElemClick_selector).addEventListener('click', function () {
        if('visible' != _elem.style.visibility){
            _elem.style.opacity = opacity;
            _elem.style.visibility = 'visible';
            if('.button_menu' == ElemClick_selector && 
                'visible' == document.querySelector('.access_form_wrap').style.visibility) {
                document.querySelector('.access_form_wrap').style.opacity = 0;
                document.querySelector('.access_form_wrap').style.visibility = 'hidden';
                document.querySelector('.banner_bg').style.opacity = 0;
                document.querySelector('.banner_bg').style.visibility = 'hidden';
            }
            if('.header__account' == ElemClick_selector && 
                'visible' == document.querySelector('.main_menu').style.visibility) {
                document.querySelector('.main_menu').style.opacity = 0;
                document.querySelector('.main_menu').style.visibility = 'hidden';
                document.querySelector('.banner_bg').style.opacity = 0;
                document.querySelector('.banner_bg').style.visibility = 'hidden';
            }
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
    ShowElems('.header__account', '.access_form_wrap', 1);
    ShowElems('.header__account', '.banner_bg', 1);
});