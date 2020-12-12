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
                if(null != document.querySelector('.banner_bg')) {
                    document.querySelector('.banner_bg').style.opacity = 0;
                    document.querySelector('.banner_bg').style.visibility = 'hidden';
                }
            }
            if('.header__account' == ElemClick_selector && 
                'visible' == document.querySelector('.main_menu').style.visibility) {
                document.querySelector('.main_menu').style.opacity = 0;
                document.querySelector('.main_menu').style.visibility = 'hidden';
                if(null != document.querySelector('.banner_bg')) {
                    document.querySelector('.banner_bg').style.opacity = 0;
                    document.querySelector('.banner_bg').style.visibility = 'hidden';
                }
            }
        } else {
            _elem.style.opacity = 0;
            _elem.style.visibility = 'hidden';
        }
    });
}