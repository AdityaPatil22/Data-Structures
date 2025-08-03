
/**
 * Each string is stored as an array of characters under the hood.
 * Strings are immutable, meaning any operation creates a new string.
 * String indexing is like array indexing.
 */

let str = "hello world";

// Basic properties
str.length         // 11

// Accessing characters
str[0]             // 'h'
str.charAt(1)      // 'e'

// String manipulation
str.toUpperCase()     // "HELLO WORLD"
str.toLowerCase()     // "hello world"
str.trim()            // removes whitespace from both ends
str.slice(0, 5);      // "hello"
str.substring(0, 5);  // "hello"
str.substr(6, 5);     // "world" (deprecated)

// Searching
str.indexOf("o");     // 4
str.lastIndexOf("o"); // 7
str.includes("world") // true
str.startsWith("hel") // true
str.endsWith("ld")    // true

// Replace
str.replace("world", "JS");       // "hello JS"
str.replaceAll("l", "X");         // "heXXo worXd"

// Split & Join
str.split(" ");       // ["hello", "world"]
["hello", "JS"].join(" ") // "hello JS"

// Reversal
str.split("").reverse().join(""); // "dlrow olleh"

