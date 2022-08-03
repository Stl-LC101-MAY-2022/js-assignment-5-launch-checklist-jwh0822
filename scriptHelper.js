// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput ===''){
        let inputResponse = "Empty";
        return inputResponse;
   }else if(isNaN(testInput)){
        let inputResponse = 'Not a Number';
        return inputResponse;
    }else {
        let inputResponse = 'Is a Number';
        return inputResponse;
     }//endifstatement
}//eof

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let userInput = [pilot,copilot,fuelLevel,cargoLevel];
    let validInputResponse = [];
    let formStatus ='Yes';

    for(let i = 0; i<=3; i++){
        validInputResponse.push(validateInput(userInput[i]));
    }//endforloop

    if(validInputResponse.includes("Empty")){
        alert("All fields must be filled!")
        list.style.visibility = 'hidden';
        formStatus = "Abort";
        return formStatus;
    }//endif

    if(validInputResponse[0] === 'Is a Number' || validInputResponse[1] === 'Is a Number'){
        alert("Pilot & Copilot Fields Must Be A Name!");
        list.style.visibility = 'hidden';
        formStatus = "Abort";
        return formStatus;
    }//endif

    if(validInputResponse[2] === 'Not a Number' || validInputResponse[3] === 'Not a Number'){
        alert("Fuel Level & Cargo Mass fields Must be a Number!");
        list.style.visibility = 'hidden';
        formStatus = 'Abort';
        return formStatus;
    }//endif

    if(fuelLevel < 10000){
        list.style.visibility = 'visible';
        alert("Fuel to Low");
        formStatus = 'Abort';
        return formStatus;
    }//endif

    if(cargoLevel > 10000){
        list.style.visibility = 'visible';
        alert("Cargo Mass to High");
        formStatus = 'Abort';
        return formStatus;
    }//endif

    if(formStatus === 'Yes'){
        list.style.visibility = 'visible';
        alert("Form Good!");
        formStatus = 'Yes';
        return formStatus;
    }//endif
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
