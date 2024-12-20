function AutoPlayers(data) {
  // console.log(data);

  data.length = 11;
  console.log(data);


  const Cards = document.querySelectorAll(".item");

  Cards.forEach((card, index) => {


    card.innerHTML = `
        <div style="cursor: all-scroll;" class="flex justify-items-center flex-col border justify-start p-4 col-resize">
          <div class="flex items-center">
            <div id="imgDiv" class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
              <img src="${data[index].photo}" class="h-auto w-auto" alt="${data[index].name}">
            </div>
            <div class="ml-4">
              <div class="font-bold text-gray-800">${data[index].name}</div>
              <div class="text-sm text-gray-500">${data[index].club} <span class="text-green">${data[index].nationality}</span></div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-gray-800 font-semibold">${data[index].position}</div>
            <div  class="itemsRating text-gray-800 font-semibold">${data[index].rating}</div>
          </div>
        </div>
      `;
  });
};


async function fetchData() {
  const response = await fetch("./players.json");

  // const boxP = document.getElementById("item1")

  try {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    displayAll(data.players);
    document.getElementById("autocard").addEventListener("click", () => {
      AutoPlayers(data.players);
      displayteam(data.players);
    });
    // changeFormation();

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
        case "GK":
          displayGoalkeeper(displayAllplayers, items);
      default:
        break;
    }
  });
}
function PopUp() {
  const modal = document.getElementById("popupModal");
  modal.classList.toggle("hidden");
}

function displayPlayer(container, player) {

  container.innerHTML += `
    <div style="cursor: all-scroll;" draggable="true" class="PlayersCard flex justify-items-center flex-col border justify-start p-4 col-resize">
      <div class="flex items-center">
        <div id="imgDiv" class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
          <img src="${player.photo}" class="h-auto w-auto" alt="${player.name}">
        </div>
        <div class="ml-4">
          <div class="font-bold text-gray-800">${player.name}</div>
          <div class="text-sm text-gray-500">${player.club} <span class="text-green">${player.nationality}</span></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div id="photoPlayer" class="text-gray-800 font-semibold">${player.position}</div>
        <div  class=" itemsRating text-gray-800 font-semibold">${player.rating}</div>
      </div>
    </div>
  `;


  DragAndDrop();

}
function displayGoalkeeper(container, player) {
  container.innerHTML += `
    <div style="cursor: all-scroll;" draggable="true" class="PlayersCard flex justify-items-center flex-col border justify-start p-4 col-resize">
      <div class="flex items-center">
        <div id="imgDiv" class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
          <img src="${player.photo}" id="photoPlayer" class="h-auto w-auto" alt="${player.name}">
        </div>
        <div class="ml-4">
          <div class="font-bold text-gray-800">${player.name}</div>
          <div class="text-sm text-gray-500">${player.club} <span class="text-green">${player.nationality}</span></div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-gray-800 font-semibold">${player.position}</div>
        <div class="itemsRating text-gray-800 font-semibold">${player.rating}</div>
      </div>
  
    </div>
  `;
  DragAndDrop();
}



function DragAndDrop() {
  let DragE = null;
  const Cardplayers = document.querySelectorAll(".PlayersCard");

  const imgDiv = document.getElementById("imgDiv");
  const photoPlayer = document.getElementById("photoPlayer");

  Cardplayers.forEach(playerCard => {
    playerCard.addEventListener('dragstart', (e) => {

      DragE = e.currentTarget;
      // console.log(e.currentTarget);
      console.log(DragE);
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
        // e.preventDefault();

        // console.log(DragE);
        photoPlayer.classList.remove("h-auto", "w-auto");
        photoPlayer.classList.add("h-24", "w-auto");
        imgDiv.classList.remove("rounded-full");
        // console.log(photoPlayer);
        if (DragE) {
          boxP.appendChild(DragE);
          DragE.classList.remove('is-dragging');
          DragE.classList.add("cardTerain", "w-32");
          // photoPlayer.style.height = '730px';
          // console.log(DragE);
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

function ValidationInput() {
  const name = document.getElementById("name");
  const position = document.getElementById("position");
  const rating = document.getElementById("rating");
  const pace = document.getElementById("pace");
  const shooting = document.getElementById("shooting");
  const passing = document.getElementById("passing");
  const dribbling = document.getElementById("dribbling");
  const defending = document.getElementById("defending");
  const physical = document.getElementById("physical");
  const photo = document.getElementById("Photo");
  const flag = document.getElementById("Flag");
  const logo = document.getElementById("logo");
  const nationality = document.getElementById("nationality");
  const club = document.getElementById("club");

  // Regular
  let nameRegex = /^[A-Za-z\s]/;
  let positionRegex = /^(GK|CB|CM|CDM|CF|ST|RW|LW|RM|LM)$/;
  let numberRegex = /^[0-9]{2}$/;
  let valid = true;

  // Validate name
  if (!nameRegex.test(name.value)) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Invalid Name',
      text: 'Name should only contain letters.',
    });
  }

  // Validate position 
  if (!positionRegex.test(position.value)) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Invalid Position',
      text: 'Position should only contain letters.',
    });
  }

  // // Validate rating 
  // if (!numberRegex.test(rating.value)) {
  //   valid = false;
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Invalid Rating',
  //     text: 'Rating should be a number between 1 and 100.',
  //   });
  // }

  const stats = [pace, shooting, passing, dribbling, defending, physical];
  stats.forEach((input) => {
    // console.log(input.value + " ::: regex " + numberRegex);

    if (!numberRegex.test(input.value)) {
      valid = false;
      Swal.fire({
        icon: 'error',
        title: `Invalid `,
        text: `should be a number between 1 and 100.`,
      });
    }
  });
  if (photo.files.length === 0) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Photo Required',
      text: 'Please upload a photo.',
    });
  }

  if (flag.files.length === 0) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Flag Required',
      text: 'Please upload a flag.',
    });
  }

  if (logo.files.length === 0) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Logo Required',
      text: 'Please upload a club logo.',
    });
  }
  if (!nameRegex.test(nationality.value)) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Invalid Nationality',
      text: 'Nationality should only contain letters.',
    });
  }

  if (!nameRegex.test(club.value)) {
    valid = false;
    Swal.fire({
      icon: 'error',
      title: 'Invalid Club Name',
      text: 'Club name should only contain letters.',
    });
  }
  if (valid) {
    Swal.fire({
      icon: 'success',
      title: 'All inputs are valid!',
      text: 'You can now submit the form.',
    });
  }

  return valid;
}

fetchData();

const frLocalstorage = JSON.parse(localStorage.getItem('formationSelect'));


switch (frLocalstorage) {
  case '433':

    container.style.gridTemplateAreas =
      '". . gk . ." ' +
      '". cb1 . cb2 ." ' +
      '"lb . . . rb" ' +
      '". . dm . ." ' +
      '"cml . . . cmr" ' +
      '"lw . cf . rw"';
    break;
  case '442':
    console.log("formationAZ");

    container.style.gridTemplateAreas =
      '". . gk . ." ' +
      '". cb1 . cb2 ." ' +
      '"lb . . . rb" ' +
      '"lw cml . dm cmr" ' +
      '". . . . . " ' +
      '". cf . rw ."';
    break;
  case '352':

    container.style.gridTemplateAreas =
      '". . gk . ." ' +
      '" lb .cb1 . cb2" ' +
      '" . . . . . " ' +
      '"lw cml dm cmr rb" ' +
      '" . . . . ." ' +
      '" . cf . rw ."';
    break;
}
document.getElementById('formation').querySelectorAll('option').forEach(element => {

  if (element.value == frLocalstorage) {
    element.selected = true;
  } else {
    element.selected = false;
  }
});

function changeFormation() {
  console.log("formation1A");

  const formation = document.getElementById('formation').value;
  const container = document.getElementById('container');
  if (localStorage.setItem('formationSelect', JSON.stringify(formation)) !== formation) {

    localStorage.setItem('formationSelect', JSON.stringify(formation));
  }


  const frLocalstorage = JSON.parse(localStorage.getItem('formationSelect'))


  switch (frLocalstorage) {
    case '433':
      container.style.gridTemplateAreas =
        '". . gk . ." ' +
        '". cb1 . cb2 ." ' +
        '"lb . . . rb" ' +
        '". . dm . ." ' +
        '"cml . . . cmr" ' +
        '"lw . cf . rw"';
      break;
    case '442':
      console.log("formationAZ");

      container.style.gridTemplateAreas =
        '". . gk . ." ' +
        '". cb1 . cb2 ." ' +
        '"lb . . . rb" ' +
        '"lw cml . dm cmr" ' +
        '". . . . . " ' +
        '". cf . rw ."';
      break;
    case '352':

      container.style.gridTemplateAreas =
        '". . gk . ." ' +
        '" lb .cb1 . cb2" ' +
        '" . . . . . " ' +
        '"lw cml dm cmr rb" ' +
        '" . . . . ." ' +
        '" . cf . rw ."';
      break;
  }
}

function addPlayerToCard(event) {
  event.preventDefault();

  const player = {
    name: document.getElementById('name').value,
    position: document.getElementById('position').value,
    rating: document.getElementById('rating').value,
    nationality: document.getElementById('nationality').value,
    club: document.getElementById('club').value,
    pace: document.getElementById('pace').value,
    shooting: document.getElementById('shooting').value,
    passing: document.getElementById('passing').value,
    dribbling: document.getElementById('dribbling').value,
    defending: document.getElementById('defending').value,
    physical: document.getElementById('physical').value,
    photo: URL.createObjectURL(document.getElementById('Photo').files[0]),
    flag: URL.createObjectURL(document.getElementById('Flag').files[0]),
    clubLogo: URL.createObjectURL(document.getElementById('logo').files[0])
  };

  // Create player card
  const container = document.getElementById('displayAllplayers');
  const playerCard = document.createElement('div');
  playerCard.setAttribute('id', player.name);
  playerCard.setAttribute('class', 'PlayersCard flex justify-items-center flex-col border justify-start p-4 col-resize');
  playerCard.setAttribute('draggable', 'true');

  playerCard.innerHTML = `
    <div class="flex items-center">
      <div id="imgDiv" class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-purple-600 font-bold">
        <img src="${player.photo}" id="photoPlayer" class="h-auto w-auto" alt="${player.name}">
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
  `;

  // Add remove button
  const removeButton = document.createElement('button');
  removeButton.setAttribute('type', 'button');
  removeButton.innerHTML = `<svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`;

  removeButton.addEventListener('click', function () {
    RemovePlayers(playerCard);
  });

  playerCard.appendChild(removeButton);
  container.appendChild(playerCard);

  // document.querySelector('form').reset();
}

// Remove player function
function RemovePlayers(playerCard) {
  playerCard.remove();
}




const bntReset = document.getElementById("Resetformation");

bntReset.addEventListener('click', function () {
  // console.log("aamir");

  const cardTerain = Array.from(document.querySelectorAll(".cardTerain"));
  cardTerain.forEach(element => {

    element.remove();
  });
});




document.querySelector('form').addEventListener('submit', addPlayerToCard);
