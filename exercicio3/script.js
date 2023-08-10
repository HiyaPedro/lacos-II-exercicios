//------------Exercício 3---------//
/*
(1) Crie um array com 5 strings. 
(2) Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:
(3) Utilize o for...of para resolver

    /*entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
    //saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
*/

const pais=()=>{
    let maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
    let i = 1;
        for (let paises of maioresPaises) {
            
            console.log(`Pais número ${i} é: ${paises}`);
            i++
    }
}
pais()






/*
const stringZ=()=>{
    let arrayZ = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

    for(let i = 0; i <= arrayZ.length -1; i++){
        console.log(`${i+1} é ${arrayZ[i]}`)
    }
}
stringZ()
*/