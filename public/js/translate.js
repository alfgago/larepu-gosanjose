function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,ru,pt,fr,de,zh-CN,ja,it,en,ko', autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    document.getElementsByClassName('goog-te-gadget-icon')[0].style.visibility = 'hidden';
}

function start(){
    let el = document.querySelectorAll('.goog-te-menu-value')[0]
    el.addEventListener("click", function(){insertLg(el.innerText)})
}

function insertLg(lg){
    let el = document.querySelectorAll('.goog-te-menu-value > span')[0]
    const newEl = document.createElement('p')
    newEl.classList.add('uppercase')
    newEl.innerText = lg
    el.parentNode.insertBefore(newEl, el)
}