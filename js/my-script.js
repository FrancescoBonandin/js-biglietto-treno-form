

document.getElementById("generate").addEventListener("click",

        function(){
            
            let username = document.getElementById("username").value;

            let distance = document.getElementById("km").value;

            let age = document.getElementById("anni").value;

            let selectedOffer;

            let discount;
            
            const pricingPerKm = 0.21;
           
            let ticketPrice = pricingPerKm * distance ;
            
            distance = distance.replace(",",".")

            distance = parseFloat(distance);

            console.log("distance", distance, typeof distance);

            distance = distance.toFixed(2);

            console.log("distance", distance, typeof distance);

            distance = parseFloat(distance);

            console.log("distance", distance, typeof distance);

            age = parseInt(age);

            console.log("distance", distance, typeof distance);

                        
            if(isNaN(distance) ){

                alert("Mi dispiace non accettiamo valori testuali o campi vuoti");
            

            }

            else if(distance >= +Infinity || distance <= -Infinity || distance == undefined ){

                alert("Non si accettano valori non definiti")

            }

            else if(distance < 0){

                alert("Scusa eh, ma che significa" + distance + "?");


            }

            else if(distance == 0 ){

                alert("Cosa prendi a fare il treno?");


            }


            else{

                if(isNaN(age)){

                    alert("Mi dispiace non accettiamo valori testuali o campi vuoti");

                }
                
                else if(age < 0){
                
                    alert("Scusa eh, ma che significa" + age + "?");
                
                }
                
                else if(age == 0 ){

                    alert("Crescono così in fretta, burlone correggi!");

                }

                else if( age >= +Infinity || age == undefined || age <= -Infinity ){

                    alert("Non si accettano valori non definiti")
                }


                else if(age < 18  && age > 0){

                    alert ("Hai diritto al 20% di sconto!");

                    selectedOffer= "Biglietto Ridotto under-18";
                    
                    discount = ticketPrice * 0.2;

                    // console.log("discount", discount, typeof discount);

                   

                }

                else if(age >= 65 && age < +Infinity){

                    alert ("Hai diritto al 40% di sconto!");

                    selectedOffer= "Biglietto Ridotto Over-65";
                    
                    discount = ticketPrice * 0.4;
                
                    // console.log("discount", discount, typeof discount);

                }

                else{

                    alert ("Purtroppo non hai diritto ad alcun tipo di sconto");

                    selectedOffer="Biglietto standard";
              
                    
                    discount = ticketPrice * 0;

                    // console.log("discount", discount, typeof discount);


                }
                
                
                ticketPrice = ticketPrice - discount;

                ticketPrice = ticketPrice.toFixed(2);

                ticketPrice = String(ticketPrice).replace(".",",");

                // console.log('ticketPrice', ticketPrice, typeof ticketPrice);

                document.querySelector("#passenger-name").innerHTML = username;

                document.querySelector("#car-number").innerHTML = String(Math.round(Math.random() * 9 + 1));

                let cpCode =  String(Math.round(Math.random() * 9999 + 1));

                if(cpCode.length==1){
                    cpCode = "0000" + cpCode
                }

                else if(cpCode.length==2){
                    cpCode = "000" + cpCode
                }

                else if(cpCode.length==3){
                    cpCode = "00" + cpCode
                }

                else if(cpCode.length==4){
                    cpCode = "0" + cpCode
                }

      
               
                document.querySelector("#cp-code").innerHTML = cpCode

                document.querySelector("#selected-offer").innerHTML = selectedOffer;

                document.querySelector("#ticket-cost").innerHTML = ticketPrice + "€";

            }


        }
)

