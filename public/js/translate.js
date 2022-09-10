function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,ru,pt,fr,de,zh-CN,ja,it,en', autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    document.getElementsByClassName('goog-te-gadget-icon')[0].style.visibility = 'hidden';
}