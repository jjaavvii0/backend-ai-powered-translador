export function generatePrompt(texto, sourceLang, targetLang) {
    return `Traduce de ${sourceLang} a ${targetLang}: ${texto}`;
}