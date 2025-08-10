/**
 * A bit is either 0 or 1. Numbers in computers are stored in binary form, and bitwise operations
 * In JavaScript:
 *      Numbers are stored as 64-bit floating point (IEEE 754)
 *      But bitwise operations convert them internally to 32-bit signed integers
 *          This means if you do a bitwise op, only the lowest 32 bits matter.  
 *          Numbers wrap around at 2^31 because of signed int representation.
 * Bitwise Operators in JS
    Operator	            Symbol	
    AND                     &	    
    OR	                    |   	    
    XOR	                    ^	    
    NOT	                    ~	   
    Left Shift	            <<	
    Right Shift (signed)	>>	
    Right Shift (unsigned)	>>>	

    Common Number Systems for Programming

    System	    Base	Digits used	  Example
    Binary	    2	    0, 1	      1011₂ = 11₁₀
    Octal	    8	    0–7	          17₈ = 15₁₀
    Decimal	    10	    0–9	          59₁₀
    Hexadecimal	16	    0–9, A–       2A₁₆ = 42₁₀
 */

console.log(5 & 3);   // 1  (0101 & 0011 = 0001)
console.log(5 | 3);   // 7  (0101 | 0011 = 0111)
console.log(5 ^ 3);   // 6  (0101 ^ 0011 = 0110)
console.log(~5);      // -6 (~0101 = 1010 + sign flip)
console.log(5 << 1);  // 10
console.log(5 >> 1);  // 2
console.log(-5 >> 1); // -3
console.log(-5 >>> 1);// 2147483645


// 3.1 Check if a number is even/odd
if (n & 1) console.log("odd");
else console.log("even");


// 3.2 Multiply/Divide by powers of 2
n << k // multiply by 2^k
n >> k // divide by 2^k (signed)


// 3.3 Swap two numbers without temp
a = a ^ b;
b = a ^ b;
a = a ^ b;


// 3.4 Check if k-th bit is set
if (n & (1 << k)) console.log("bit is 1");


// 3.5 Set k-th bit
n = n | (1 << k);


// 3.6 Clear k-th bit
n = n & ~(1 << k);


// 3.7 Toggle k-th bit
n = n ^ (1 << k);


// 3.8 Count set bits (Brian Kernighan’s algo)
let count = 0;
while (n > 0) {
    n &= (n - 1);
    count++;
}


// 3.9 Check power of two
(n > 0) && ((n & (n - 1)) === 0);


// 3.10 XOR for finding unique element If every element appears twice except one:
let res = 0;
for (let x of arr) res ^= x;