function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
}

function changeCookieValue(){
    let langCookie = getCookie('googtrans'); // ----> /en/es
    if(langCookie){
        langCookie = langCookie.replace('/', '');// ----> en/es
        langCookie = langCookie.replace('/', '|');// ----> en|es
    }
    return langCookie;
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    if(valueToSelect){
        element.value = valueToSelect;
    }else{
        element.value = 'en|en'
    }
}

selectElement('translate', changeCookieValue());