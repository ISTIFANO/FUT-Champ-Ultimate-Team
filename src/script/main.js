async function fetchData() {
  const response = await fetch("./players.json");

  try {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    displayGk(data.players);
    DisplayAttaquant(data.players);
    DisplayArriereCentral(data.players);
    DisplayAilierdroit(data.players);
    DisplayAiliergauche(data.players);
    DisplayMilieuCentral(data.players);

  } catch (error) {
    console.log("fetch API error", error);
  }
}

function displayGk(data) {
  const Goalkeepers = document.getElementById("Goalkeepers");
  const Filters = data.filter(member => member.position == "GK");

  Goalkeepers.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}

function DisplayAttaquant(data) {
  const Attaquant = document.getElementById("Attaquant");
  const Filters = data.filter(member => member.position == "ST");

  Attaquant.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}

function DisplayArriereCentral(data) {
  const ArriereCentral = document.getElementById("ArriereCentral");
  const Filters = data.filter(member => member.position == "CB");

  ArriereCentral.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}

function DisplayAilierdroit(data) {
  const Ailierdroit = document.getElementById("Ailierdroit");
  const Filters = data.filter(member => member.position == "RW");

  Ailierdroit.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}
function DisplayAiliergauche(data) {
  const Ailiergauche = document.getElementById("Ailiergauche");
  const Filters = data.filter(member => member.position == "LW");

  Ailiergauche.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}
function DisplayMilieuCentral(data) {
  const MilieuCentral = document.getElementById("MilieuCentral");
  const Filters = data.filter(member => member.position == "CM");

  MilieuCentral.innerHTML = Filters.map((items) => {
      return `
          <div class="flex justify-items-center  flex-col justify-start p-4 ">
            <div class="flex items-center">
              <div class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
                          <img src=${items.photo} class="h-auto w-auto" alt="" srcset="">

              </div>
       
              <div class="ml-4">
                <div class="font-bold text-gray-800">${items.name}</div>
                <div class="text-sm text-gray-500">${items.club} <span class="text-green"> ${items.nationality}</span> </div>
              </div>
            </div>
           
            <div class="flex items-center space-x-4">
              <div class="text-gray-800 font-semibold">${items.position}</div>
              <div class="text-gray-800 font-semibold">${items.rating}</div>
        </div>
                </div>

        `;
    })
    .join("");
}




function displayAll(data) {
  const Ailiergauche = document.getElementById("Ailiergauche");
  const MilieuCentral = document.getElementById("MilieuCentral");

}

















fetchData();