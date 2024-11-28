async function fetchData() {
  const response = await fetch("./players.json");

  // const boxP = document.getElementById("item1")

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
      case "CM":
      case "CB":
      case "RW":
      case "LW":
      case "RB":
      case "LB":
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
    <div style="cursor: all-scroll;" draggable="true" class="PlayersCard flex justify-items-center flex-col border justify-start p-4 col-resize">
      <div class="flex items-center">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
          <img src="${player.photo}" class="h-auto w-auto" alt="${player.name}">
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


  let DragE = null;

  document.querySelectorAll(".PlayersCard").forEach(playerCard => {
    playerCard.addEventListener('dragstart', (e) => {
      DragE = e.currentTarget;
      // console.log(e.currentTarget);
      // console.log(DragE);
 DragE.classList.add('is-dragging');
    });

    const dropZones = document.querySelectorAll(".item");   
    dropZones.forEach(boxP => {
      boxP.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
    });

    dropZones.forEach(boxP => {
      boxP.addEventListener('drop', (e) => {
        e.preventDefault();
        if (DragE) {
          boxP.appendChild(DragE);
          DragE.classList.remove('is-dragging');
          DragE = null;
        }
      });
    });

    playerCard.addEventListener('dragend', () => {
      DragE.classList.remove('is-dragging');
      DragE = null;
    });

  });


}


fetchData();
