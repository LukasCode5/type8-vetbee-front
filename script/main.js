const baseUrl = 'http://localhost:8080';

async function getData() {
  const reach = await fetch(`${baseUrl}/api/pets`);
  const data = await reach.json();
  return data;
}

function addElementToCardsContainer(data, card) {
  const container = document.querySelector('.cards-container');
  data.forEach((element) => {
    container.innerHTML += card(element);
  });
}

const petsObjShape = {
  id: 1,
  name: 'Bella',
  dob: '2014-12-31T22:00:00.000Z',
  client_email: 'bellaowner@email.com',
  archived: 0,
};

function createCard(petObj) {
  const year = new Date(petObj.dob).getFullYear();
  const month = new Date(petObj.dob).getMonth() + 1;
  const day = new Date(petObj.dob).getDate();

  const dob = `${year}-${month <= 9 ? '0' + month : month}-${
    day <= 9 ? '0' + day : day
  }`;

  const content = `<div class="card">
      <h3>${petObj.name}</h3>
      <div class="card-text">
        <p>${dob}</p>
        <p>${petObj.client_email}</p>
      </div>
      <div>
        <button class="main-btn">View Log</button>
        <button class="main-btn main-btn-inverse">Delete</button>
      </div>
    </div>`;
  return content;
}

getData().then((data) => {
  addElementToCardsContainer(data, createCard);
});
