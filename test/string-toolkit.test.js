const assert = require('assert');
const toolkit = require('../src/string-toolkit');

// Test reverse
assert.strictEqual(toolkit.reverse('hello'), 'olleh');
assert.strictEqual(toolkit.reverse('Node.js'), 'sj.edoN');

// Test capitalizeWords
assert.strictEqual(toolkit.capitalizeWords('hello world'), 'Hello World');
assert.strictEqual(toolkit.capitalizeWords('node.js est génial'), 'Node.js Est Génial');

// Test countChar
assert.strictEqual(toolkit.countChar('hello', 'l'), 2);
assert.strictEqual(toolkit.countChar('Node.js', '.'), 1);

console.log('Tous les tests ont réussi! ✨');