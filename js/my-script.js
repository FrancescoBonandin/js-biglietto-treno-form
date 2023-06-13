
let distance = prompt("Quanti km devi percorrere?(scrivi in numeri per favore)");

const pricingPerKm = 0.21;

const refresh = "Ricarica la pagina, per favore"

distance = distance.replace(",",".")

distance = parseFloat(distance);

// console.log("distance", distance, typeof distance);

distance = distance.toFixed(2);

// console.log("distance", distance, typeof distance);

distance = parseFloat(distance);

// console.log("distance", distance, typeof distance);


if(isNaN(distance) ){
    alert("Mi dispiace non accettiamo valori testuali o campi vuoti, ricomincia");
 
    document.querySelector("#price").innerHTML = refresh;

}

else if(distance >= +Infinity || distance <= -Infinity || distance == undefined ){

    alert("Non si accettano valori non definiti")

}

else if(distance < 0){

    alert("Scusa eh, ma che significa" + distance + ", ricomincia va!");

    document.querySelector("#price").innerHTML = refresh;


}

else if(distance == 0 ){

    alert("Cosa prendi a fare il treno?");

    document.querySelector("#price").innerHTML = refresh;

}


else{

    let age = prompt("Quanti anni hai?(scrivi in numeri per favore)");
    
    age = parseInt(age);
    
    // console.log("age", age, typeof age);

    if(isNaN(age)){
        alert("Mi dispiace non accettiamo valori testuali o campi vuoti, ricomincia");

        document.querySelector("#price").innerHTML = refresh;
     
    }
    
    else if(age < 0){
    
        alert("Scusa eh, ma che significa" + age + ", ricomincia va!");

        document.querySelector("#price").innerHTML = refresh;
    
    }
    
    else if(age == 0 ){

        alert("Crescono così in fretta...Ricomincia, burlone");

        document.querySelector("#price").innerHTML = refresh;

    }

    else if( age >= +Infinity || age == undefined || age <= -Infinity ){

        alert("Non si accettano valori non definiti")
    }


    else if(age < 18  && age > 0){

        alert ("Hai diritto al 20% di sconto!");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 20;

        // console.log("discount", discount, typeof discount);

        ticketPrice = ticketPrice - discount;
 
        ticketPrice = ticketPrice.toFixed(2);

        ticketPrice = String(ticketPrice).replace(".",",");

        // console.log('ticketPrice', ticketPrice, typeof ticketPrice);

        document.querySelector("#price").innerHTML = ticketPrice + "€";

    }

    else if(age >= 65 && age < +Infinity){

        alert ("Hai diritto al 40% di sconto!");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 40;
    
        // console.log("discount", discount, typeof discount);

        ticketPrice = ticketPrice - discount;
        
        ticketPrice = ticketPrice.toFixed(2);

        ticketPrice = String(ticketPrice).replace(".",",");

        // console.log('ticketPrice', ticketPrice, typeof ticketPrice);

        document.querySelector("#price").innerHTML = ticketPrice + "€";

    }

    else{

        alert ("Purtroppo non hai diritto ad alcun tipo di sconto");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 0;

        // console.log("discount", discount, typeof discount);

        ticketPrice = ticketPrice - discount;

        ticketPrice = ticketPrice.toFixed(2);

        ticketPrice = String(ticketPrice).replace(".",",");

        // console.log('ticketPrice', ticketPrice, typeof ticketPrice);

        document.querySelector("#price").innerHTML = ticketPrice + "€";

    }
    
    
}

// ----------------NON FUNZIONA COME VORREI------------

    // console.log(typeof parseInt(document.querySelector("#price").innerHTML));
    
    // if(typeof parseInt(document.querySelector("#price").innerHTML) == "number" ){
        
    //    let buy = prompt("Vuoi procedere all'acquisto? (si/no)");
    
    //    if(buy === "si"){
    //     alert("Attendere, prego")
    //    }
       
    //    else if(buy === "no"){
    //     alert("Ricaricare la pagina per ulteriori biglietti oppure chiudere la pagina ")
    //    }
    
    //    else{
    //     alert("input non riconosciuto, prego ricominciare DA CAPO")
    //    }
    // }

       
    // else {
    //     alert("Ricaricare la pagina per ulteriori biglietti oppure chiudere la pagina ")
    // }

