function googleTranslateElementInit() {
new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'en,fr,it,pt,ru,zh-TW', // Añadido chino tradicional
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
}, 'google_translate_element');
}