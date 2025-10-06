/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 

secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





*/


// variable declaration
const rate_km = 0.21;
const discount_u18 = 20;
const discount_o65 = 40;
const eta = prompt("inserire etá passeggero");
const km_togo = prompt("inserire quanti km vuoi percorrere");
//price calculation with km
const price = km_togo * rate_km;

//condition in case of age < 18
if(eta < 18){
    // if age < 18 apply discount u18 (under 18) 
    const price_final = price * (1 - discount_u18 / 100);
    // view on screen the alert with price discounted
    alert(`il prezzo scontato é di: € ${price_final.toFixed(2)} ` )
//condition in case of age >= 65
}else if(eta >= 65) {
     // if age >= 65 apply discount o65 (over 65)
    const price_final = price * (1 - discount_o65 / 100); 
     // view on screen the alert with price discounted
     alert(`il prezzo scontato é di: € ${price_final.toFixed(2)} `)
}else{
     alert(`il prezzo  é di: € ${price.toFixed(2)} ` )
}






