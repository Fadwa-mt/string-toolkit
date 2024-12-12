const stringToolkit = require('./src/string-toolkit');

// Exemples d'utilisation
const phrase = "bonjour le monde";
console.log('Phrase originale:', phrase);
console.log('Phrase inversée:', stringToolkit.reverse(phrase));
console.log('Mots capitalisés:', stringToolkit.capitalizeWords(phrase));
console.log("Nombre de 'o' dans la phrase:", stringToolkit.countChar(phrase, 'o'));