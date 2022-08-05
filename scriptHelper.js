// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
            let target = document.getElementById("missionTarget");
            target.innerHTML = 
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                   <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                    <img src="${imageUrl}"></img>
    `            
}

function validateInput(testInput) {
   if(testInput ===''){
        return 'Empty';
   }else if(isNaN(testInput)){
        return 'Not a Number';
    }else {
        return 'Is a Number';
     }//endifstatement
}//eof

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let userInput = [pilot,copilot,fuelLevel,cargoLevel];
    let validInputResponse = [];
    let formStatus ='Yes';
    let launchStatus = document.getElementById('launchStatus');
    let listItem1 = document.getElementById('pilotStatus');
    let listItem2 = document.getElementById('copilotStatus');
    let listItem3 = document.getElementById('fuelStatus');
    let listItem4 = document.getElementById("cargoStatus");

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

    let pilotReady = `Pilot ${pilot} is ready for launch.`;
    let copilotReady = `Copilot ${copilot} is ready for launch.`;
    listItem1.innerHTML = pilotReady;
    listItem2.innerHTML = copilotReady;



    if(fuelLevel < 10000 && cargoLevel > 10000){
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color = 'red';
        list.style.visibility = 'visible';
        alert("Fuel to Low && Cargo to Heavy!");  
        listItem3.innerHTML = "Not enough fuel for the journey."
        listItem4.innerHTML = "There is to much mass for the shuttle to take off."
        formStatus = 'Abort';
        return formStatus;
    }//endif

    if(fuelLevel < 10000){
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color = 'red';
        list.style.visibility = 'visible';
        alert("Fuel Level to Low");
        listItem3.innerHTML = "Not enough fuel for the journey."
        formStatus = 'Abort';
        return formStatus;
    }else{
        listItem3.innerHTML = "Fuel level high enough for launch.";
    }//endif

    if(cargoLevel > 10000){
        launchStatus.innerHTML = 'Shuttle not ready for launch.';
        launchStatus.style.color = 'red';
        list.style.visibility = 'visible';
        alert("Cargo Mass to High");
        listItem4.innerHTML = "There is to much mass for the shuttle to take off."
        formStatus = 'Abort';
        return formStatus;
    }else{
        listItem4.innerHTML = "Cargo mass low enough for launch.";
    }//endif
    

    if(formStatus === 'Yes'){
        launchStatus.innerHTML = 'Shuttle is ready for launch.';
        launchStatus.style.color = 'green';
        list.style.visibility = 'visible';
        formStatus = 'Yes';
        return formStatus;
    }//endif
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();     
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.round((Math.random() *5));
    return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
