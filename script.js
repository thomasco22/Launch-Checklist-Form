window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      const pilotOne = document.querySelector("input[name=pilotName]");
      const pilotTwo = document.querySelector("input[name=copilotName]");
      let letters = /^[A-Za-z]+$/;
      let faultyThings = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let mainPilot = document.getElementById("pilotName").value;
      let copilot = document.getElementById("copilotName").value;
      let launchStatusHeader = document.getElementById("launchStatus");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");

      if (pilotOne.value === "" || !isNaN(pilotOne.value) || pilotTwo.value === "" || !isNaN(pilotTwo.value || fuelLevel.value === "" || cargoMass.value === "")) {
         alert("All fields are required");
         faultyThings.style.visibility = "hidden";
      }
      if (fuelLevel.value < 10000) {
         faultyThings.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${mainPilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         launchStatusHeader.innerHTML = "Shuttle not ready for launch";
         launchStatusHeader.style.color = "red";
         fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
      }
      if (cargoMass.value > 10000) {
         console.log("branch taken");
         faultyThings.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${mainPilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         launchStatusHeader.innerHTML = "Shuttle not ready for launch";
         launchStatusHeader.style.color = "red";
         cargoStatus.innerHTML = `There is too much mass for the shuttel to take off.`;
      } 
      if (cargoMass.value > 10000 && fuelLevel.value > 10000) {
         console.log("branch taken");
         faultyThings.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${mainPilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         launchStatusHeader.innerHTML = "Shuttle not ready for launch";
         launchStatusHeader.style.color = "red";
         cargoStatus.innerHTML = `There is too much mass for the shuttel to take off.`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
      } 
      if (cargoMass.value < 10000 && fuelLevel.value < 10000) {
         console.log("branch taken");
         faultyThings.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${mainPilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         launchStatusHeader.innerHTML = "Shuttle not ready for launch";
         launchStatusHeader.style.color = "red";
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
      } 
      if (pilotOne.value === "" || copilot.value === "" && cargoMass.value < 10000 && fuelLevel.value > 10000) {
         faultyThings.style.visibility = "hidden";
         launchStatusHeader.innerHTML = "Shuttle not ready for launch";
         launchStatusHeader.style.color = "red";
      }
      else if (cargoMass.value < 10000 && fuelLevel.value > 10000) {
         faultyThings.style.visibility = "visible";
         launchStatusHeader.innerHTML = "Shuttle is ready for launch";
         launchStatusHeader.style.color = "green";
         pilotStatus.innerHTML = `Pilot ${mainPilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      } 
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
            div.innerHTML = `
            
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
               <img src="${json[0].image}"></img>
              
            `
      });
   });
});