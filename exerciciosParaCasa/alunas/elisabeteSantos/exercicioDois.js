/*2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, e uma declaração sobre quantos anos Chris terá daqui a 20 anos. Como você pode corrigir o problema e corrigir a saída?*

const myName = 'Default';    
myName = 'Chris';

let myAge = '42';

console.log(myName);    
console.log(\`In 20 years, I will be ${myAge + 20}`);*/


// mudar o tipo da variavel de const para let
let myName = 'Default' ;
myName = 'Chris' ;

// tirar as aspas pois assim a variavel seria uma string
let myAge = 42 ;

console.log(myName);
console.log(`In 20 years, I will be ${myAge + 20}`);
