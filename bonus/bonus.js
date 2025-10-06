/*pari o dispari: 
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata el computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispadri.
*/
//declaration variable
const even_odd = prompt("SFIDAMI!  Scegli... Pari o dispari");
const player = prompt("BRAVO!  Ora scegli un numero tra 1 e 9");
const numInt = parseInt(player);
const cpu = Math.floor(Math.random() * 10) + 1; 

//sum the number cpu a player
const somma = numInt + cpu;


//condition in case sum/2===0 
if(somma%2===0){
    // and if player choose even
    if (even_odd=== "pari"){
        //player win
        alert("AAA MI HAI BATTUTO");
    }else{
        //else player lost , win cpu
        alert("Hai perso AHAHAHAHA RITENTA");
    }
}
