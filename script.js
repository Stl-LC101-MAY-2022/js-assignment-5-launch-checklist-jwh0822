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
        let formList = document.getElementById('faultyItems');
        let div1 = formList.parentNode;
        let body1 = div1.parentNode;
        let html1 = body1.parentNode;
        let doc1 = html1.parentNode;
        let formSubResponse = formSubmission(doc1,formList,pilotName,copilotName,fuelLevel,cargoMass);
        if(formSubResponse === 'Abort'){
            alert("Form Submission Aborted!");
            event.preventDefault();
        }else if(formSubResponse === 'Yes'){
            alert("Form is good. Ready for Launch!");
        }//end if
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
   });
});