function diagonalDifference(arr) {
    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
      for (let i = 0; i < n; i++ ) {
          primaryDiagonalSum += arr[i][i];
          secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    
    let diference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
    return diference
  
}

const matrizExemplo = [
    [1,2,4],
    [5,6,7],
    [8,9,10]
]

const diferenca = diagonalDifference(matrizExemplo);
console.log(diferenca)
