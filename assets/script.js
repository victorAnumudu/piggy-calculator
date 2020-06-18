




let myDuration = document.getElementById("Duration");
let myInterest = document.getElementById("interest");
let payBackDate = document.getElementById("pay-back-date");
let myCalculator = document.getElementById("calculate")



let selectedDuration = () => {
    payBackDate.innerHTML = [];
    
    let durationSelected = myDuration.value;
    switch(durationSelected) {
        case "null":
            myInterest.value = "Please select valid duration";
        break;

        case "30":
            for(let i = durationSelected - 20; i <= durationSelected; i++){
                let createDuration = document.createElement("option");
                createDuration.classList.add("my-option");
                createDuration.setAttribute("value", i);
                createDuration.innerHTML = i + " Days";
                payBackDate.appendChild(createDuration);
            }
        break;

        case "60":
            for(let i = durationSelected - 29; i <= durationSelected; i++){
                let createDuration = document.createElement("option");
                createDuration.classList.add("my-option");
                createDuration.setAttribute("value", i);
                createDuration.innerHTML = i + " Days";
                payBackDate.appendChild(createDuration);
            }
        break;

        case "90":
            for(let i = durationSelected - 29; i <= durationSelected; i++){
                let createDuration = document.createElement("option");
                createDuration.classList.add("my-option");
                createDuration.setAttribute("value", i);
                createDuration.innerHTML = i + " Days";
                payBackDate.appendChild(createDuration);
            }
        break;

        case "91":
            for(let i = durationSelected; i <= 729; i++){
                let createDuration = document.createElement("option");
                createDuration.classList.add("my-option");
                createDuration.setAttribute("value", i);
                createDuration.innerHTML = i + " Days";
                payBackDate.appendChild(createDuration);
            }
        break;

        case "2 years+":
            for(let i = 731; i <= 999; i++){
                let createDuration = document.createElement("option");
                createDuration.classList.add("my-option");
                createDuration.setAttribute("value", i);
                createDuration.innerHTML = i + " Days";
                payBackDate.appendChild(createDuration);
            }
        break;
            
        default:
            alert("yet to implement for that");
            myInterest.value = "Please select valid duration";
      }
}

myDuration.addEventListener("change", selectedDuration)






let getInterest = () => {
    let myAmount = document.getElementById("amount");

    let durationSelected = myDuration.value;

    if((myAmount.value == "" || myAmount.value == "0") && payBackDate.value == ""){
        alert("please put an amount and select pay back date");
    } else if(myAmount.value == "" || myAmount.value == "0"){
        alert("please put an amount");
    } else if(payBackDate.value == "") {
        alert("please duration and pay back date");
    } else{
        switch(durationSelected) {
            case "null":
                myInterest.value = "Please select valid duration";
            break;
    
            case "30":
                myRate = 6/100;
                MyDays = payBackDate.value/365;
                myInterestRate = myRate * MyDays;
                myInterest.value = Number(myAmount.value) + (Number(myAmount.value) * myInterestRate);
            break;
    
            case "60":
                myRate = 8/100;
                MyDays = payBackDate.value/365;
                myInterestRate = myRate * MyDays;
                myInterest.value = Number(myAmount.value) + (Number(myAmount.value) * myInterestRate);
            break;
    
            case "90":
                myRate = 10/100;
                MyDays = payBackDate.value/365;
                myInterestRate = myRate * MyDays;
                myInterest.value = Number(myAmount.value) + (Number(myAmount.value) * myInterestRate);
            break;
    
            case "91":
                myRate = 13/100;
                MyDays = payBackDate.value/365;
                myInterestRate = myRate * MyDays;
                myInterest.value = Number(myAmount.value) + (Number(myAmount.value) * myInterestRate);
            break;
    
            case "2 years+":
                myRate = 40/100;
                MyDays = payBackDate.value/365;
                myInterestRate = myRate * MyDays;
                myInterest.value = Number(myAmount.value) + (Number(myAmount.value) * myInterestRate);
            break;
                
            default:
                alert("yet to implement for that");
                myInterest.value = "Please select valid duration";
          }
    }
            
}

myCalculator.addEventListener("click", getInterest)