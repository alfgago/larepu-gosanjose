function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,ru,pt,fr,de,zh-CN,ja,it,en', autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    document.getElementsByClassName('goog-te-gadget-icon')[0].style.visibility = 'hidden';
}

/*
setTimeout(() => {
    console.log('entrada');
    $('.goog-te-gadget-icon').remove();
    $('.goog-te-menu-value span').first().remove();
    $('.goog-te-menu-value img').remove();
    $('.goog-te-menu-value span').first().remove();
    console.log($('.goog-te-menu-value span'));   
    $('.goog-te-menu-value').prepend('<img class="h-2 w-2" src="/assets/site/world.svg"></img>');         
    console.log('bandera3');
}, "500")

*/