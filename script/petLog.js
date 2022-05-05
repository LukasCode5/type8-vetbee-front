const baseURL = 'http://127.0.0.1:3000';
const paramsId = window.location.search.split('=')[1];
console.log('paramsId ===', paramsId);

async function getLogs() {
  const response = await fetch(`${baseURL}/api/logs/${paramsId}`);
  const logsData = await response.json();
  console.log('logsData ===', logsData);
}

async function getPrescriptions() {
  const response = await fetch(`${baseURL}/api/prescriptions/1`);
  const prescriptionData = await response.json();
  console.log('prescriptionData ===', prescriptionData);
}

const log = {
  archived: 0,
  client_email: 'lunaowner@email.com',
  description: 'Medical records of pet',
  dob: '2014-12-31T22:00:00.000Z',
  id: 2,
  name: 'Luna',
  pet_id: 2,
  status: 'Healthy',
};

getLogs();
getPrescriptions();
