async function fetchData() {
  const response = await fetch("./players.json");

  try {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    displayAll(data.players);

  } catch (error) {
    console.log("fetch API error", error);
  }
}



function displayAll(data) {
  const displayAllplayers = document.getElementById("displayAllplayers");
  displayAllplayers.innerHTML = "";

  data.forEach((items) => {


    switch (items.position) {

      case "ST": 
        displayPlayer(displayAllplayers, items);

        console.log(items);
        break;
      case "CM": 
        displayPlayer(displayAllplayers, items);
        break;
      case "CB": 
        displayPlayer(displayAllplayers, items);
        break;
      case "RW": 
        displayPlayer(displayAllplayers, items);
        break;
      case "LW": 
        displayPlayer(displayAllplayers, items);
        break;
      // case "GK":
      //   displayGk(displayAllplayers, items); 
      //   break;
      case "RB": 
        displayPlayer(displayAllplayers, items);
     break;
      case "LB": 
        displayPlayer(displayAllplayers, items);
        break;
      case "CDM": 
        displayPlayer(displayAllplayers, items);
        break;
      default:
        break;
    }
  });
}

function displayPlayer(container, player) {
  container.innerHTML += `
  
    <div class="flex justify-items-center flex-col justify-start p-4">
      <div class="flex items-center">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
          <img src=${player.photo} class="h-auto w-auto" alt="" srcset="">
        </div>
        <div class="ml-4">
          <div class="font-bold text-gray-800">${player.name}</div>
          <div class="text-sm text-gray-500">${player.club} <span class="text-green">${player.nationality}</span></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-gray-800 font-semibold">${player.position}</div>
        <div class="text-gray-800 font-semibold">${player.rating}</div>
      </div>
    </div>
  `;
}

fetchData();
