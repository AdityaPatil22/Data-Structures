/**
 *  | Function / Method | Use Case                                                                 |
    | ----------------- | ------------------------------------------------------------------------ |
    | `test()`          | Returns `true/false` → check if a string matches regex.                  |
    | `exec()`          | Returns first match object (with groups, index, etc.) → advanced search. |
    | `match()`         | Returns array of matches (`null` if none).                               |
    | `matchAll()`      | Returns **all matches** with groups (ES2020).                            |
    | `search()`        | Returns index of first match (`-1` if not found).                        |
    | `replace()`       | Replace first/all occurrences with something.                            |
    | `replaceAll()`    | Replace all matches (without needing `/g`).                              |
    | `split()`         | Split string by regex pattern.                                           |
 */


// Character Matching

// . → Any single character (except newline).
// [abc] → One of a, b, or c.
// [^abc] → Not a, b, or c.
// [a-z] → Lowercase letters.
// [A-Z] → Uppercase letters.
// [0-9] or \d → Digit.
// \D → Not a digit.
// \w → Word char (letters, digits, _).
// \W → Non-word char.
// \s → Whitespace.
// \S → Non-whitespace.


// Quantifiers

// a* → Zero or more a.
// a+ → One or more a.
// a? → Zero or one a.
// a{n} → Exactly n times.
// a{n,} → At least n times.
// a{n,m} → Between n and m times.
// Anchors
// ^ → Start of string.
// $ → End of string.
// \b → Word boundary.
// \B → Not a word boundary.


// Groups

// (abc) → Grouping.
// (a|b) → a or b.
// (?:abc) → Non-capturing group.
// (?<name>abc) → Named group.
// Lookarounds (advanced, but very useful in DSA)
// (?=...) → Positive lookahead.
// (?!...) → Negative lookahead.
// (?<=...) → Positive lookbehind.
// (?<!...) → Negative lookbehind.



// Check if string is alphanumeric
/^[a-zA-Z0-9]+$/.test("abc123")  // true


// Split license key string
"2-4A0r7-4k".split(/-/) // ["2", "4A0r7", "4k"]


// Validate binary string
// /^[01]+$/.test("101010")  // true


// Extract numbers
"abc123def456".match(/\d+/g) // ["123", "456"]


// Remove all spaces
"  hello world  ".replace(/\s+/g, "") // "helloworld"


// Check palindrome with regex help
let str = "A man, a plan, a canal: Panama";
str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
// "amanaplanacanalpanama"


