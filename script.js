// Write your JavaScript code 

window.addEventListener("load", function() {
    let form = document.querySelector('form');
    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]");
        pilotName = pilotName.value;
        let copilotName = document.querySelector("input[name=copilotName]");
        copilotName = copilotName.value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        fuelLevel = fuelLevel.value;
        let cargoMass = document.querySelector("input[name=cargoMass]");
        cargoMass = cargoMass.value;
        let doc1 = document.documentElement;
        let formList = document.getElementById('faultyItems');
        let formSubResponse = formSubmission(doc1,formList,pilotName,copilotName,fuelLevel,cargoMass);
        if(formSubResponse === 'Abort'){
            event.preventDefault();
            alert("Form Submission Aborted!");
        }//end if
        
        if(formStatus !=="Abort"){
            let div1 = document.getElementById('faultyItems');
            
            let list1 = document.getElementById('pilotStatus');
            list1.style.visibility = 'visible';
            list1.innerHTML += `Pilot Name:${pilotName.value}`;
            let list2 = document.getElementById('copilotStatus');
            list2.style.visibility = 'visible';
            list2.innerHTML += `Pilot Name:${copilotName.value}`;
        }
    });    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
});