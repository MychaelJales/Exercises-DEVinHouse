// exercicio 5
export const somaTudo = (...array) => array.reduce((acc, cur) => acc + cur, 0);

// exercicio 6

export const novoArray = (array1, array2) => [...array1, ...array2];