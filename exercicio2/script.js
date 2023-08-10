//-----------Exercício 2-----------//
/*
(1) Crie um programa que peça um input de número para o usuário. 
(2) Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
(3) Utilize o for...in para resolver**
Exemplo com entrada **`7`**:
7
14
21
28
35
42
49
56
63
70
*/

const peçaInput=()=>{
    let num = +prompt("Insirir um número aqui");
    for (let index = 1; index <= 10; index++) {
        const multiplica = num*index;
        console.log(multiplica)
        
    }
}
peçaInput()