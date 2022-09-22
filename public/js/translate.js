function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,ru,pt,fr,de,zh-CN,ja,it,en,ko', autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    document.getElementsByClassName('goog-te-gadget-icon')[0].style.visibility = 'hidden';
}


let parent = document.querySelectorAll('.goog-te-menu-value > span')[0]
parent.addEventListener('DOMSubtreeModified', () => start())
start()

function start(){
    let lang = document.querySelectorAll('.goog-te-menu-value > span')[0]
    let consult = document.querySelectorAll('.goog-te-menu-value > p')[0]
    if(consult==undefined){
        insertLg(lang.innerText)
    }else{
        insertLg(lang.innerText,1)
    }
}

function insertLg(lg, status=0){
    if(status == 0){
        let el = document.querySelectorAll('.goog-te-menu-value > span')[0]
        const newEl = document.createElement('p')
        newEl.classList.add('text-white')
        newEl.setAttribute("id", "language")
        newEl.innerText = validation(lg)
        el.parentNode.insertBefore(newEl, el)
    }else{
        let element = document.getElementById('language')
        element.textContent = validation(lg)
    }
}

function validation(lg){
    if(lg == 'español'){
        lg='ES'
    }else if(lg == 'alemán'){
        lg='DE'
    }else if(lg == 'chino (simplificado)'){
        lg='zh-CH'
    }else if(lg == 'coreano'){
        lg='KO'
    }else if(lg == 'francés'){
        lg='FR'
    }else if(lg == 'italiano'){
        lg='IT'
    }else if(lg == 'japonés'){
        lg='JA'
    }else if(lg == 'portugués'){
        lg='PT'
    }else if(lg == 'ruso'){
        lg='RU'
    }else{
        lg='EN'
    }
    return lg
}