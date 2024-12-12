/**
 * Module de manipulation de chaînes de caractères
 * @module string-toolkit
 */

/**
 * Inverse une chaîne de caractères
 * @param {string} str - La chaîne à inverser
 * @returns {string} La chaîne inversée
 */
function reverse(str) {
  return str.split('').reverse().join('');
}

/**
 * Capitalise chaque mot dans une chaîne
 * @param {string} str - La chaîne à capitaliser
 * @returns {string} La chaîne avec chaque mot capitalisé
 */
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Compte le nombre d'occurrences d'un caractère dans une chaîne
 * @param {string} str - La chaîne à analyser
 * @param {string} char - Le caractère à compter
 * @returns {number} Le nombre d'occurrences
 */
function countChar(str, char) {
  return str.split(char).length - 1;
}

module.exports = {
  reverse,
  capitalizeWords,
  countChar
};