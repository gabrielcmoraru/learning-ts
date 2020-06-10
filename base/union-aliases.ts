type Combinable = number | string; // ALIAS in types for any type
type ConversionDescriptor = 'as-number' | 'as-string'; // ALIAS in types for any type this case a UNION type('|') that uses LITERAL type

function combine(
    input1: Combinable,
    input2: number | string,
    resultConversion: 'as-number' | 'as-string', // LITERAL type
    conversion: ConversionDescriptor // LITERAL type using an ALIAS type
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Bob', 'Adri', 'as-string');
console.log(combinedNames);
