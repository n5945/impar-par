const numeros = [11, 6, 4, 15, 21, 3, 8];
const parArray = [];
const imparArray = [];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
if (numero % 2 === 0) {
    parArray.push(numero)
} else {
    imparArray.push(numero)
}    
}
console.log(parArray);
console.log(imparArray);
