function aVeryBigSum(ar) {
    // Calculate the sum of all elements in the array
    let sum = ar.reduce((acc, val) => acc + BigInt(val), BigInt(0));
    return sum;
}