function diagonalDifference(arr) {
    let somaDiagonalPrincipal = 0;
    let somaDiagonalSecundaria = 0;

    for (let i = 0; i < arr.length; i++) {
        somaDiagonalPrincipal += arr[i][i];
        somaDiagonalSecundaria += arr[i][arr.length - 1 - i];
    }

    return Math.abs(somaDiagonalPrincipal - somaDiagonalSecundaria);
}
