function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,ru,pt,fr,de,zh-CN,ja,it,en,ko', flags:true, autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    document.getElementsByClassName('goog-te-gadget-icon')[0].style.visibility = 'hidden';
}

function insertLg(){
    let el = document.querySelectorAll('.goog-te-menu-value > span')[0]
    const newEl = document.createElement('p')
    newEl.innerText = 'EN'
    el.parentNode.insertBefore(newEl, el)
}