/*pari o dispari: 
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata el computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispadri.
*/

const even_odd = prompt("SFIDAMI!  Scegli... Pari o dispari");
const player = prompt("BRAVO!  Ora scegli un numero tra 1 e 9");
const cpu = Math.floor(Math.random() * 10) + 1; 

const sum = player + cpu;

if(sum%2==0){
    if(even_odd===pari){
        alert("AAA MI HAI BATTUTO")
    }
}
