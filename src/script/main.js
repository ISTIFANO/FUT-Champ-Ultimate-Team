async function fetchData() {
  const response = await fetch("./players.json");

  try {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    displaGk(data.players);
  } catch (error) {
    console.log("fetch API error", error);
  }
}

function displaGk(data) {
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
fetchData();
