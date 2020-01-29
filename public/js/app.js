console.log('hii');
const BASE = 'http://localhost:4000';

const form = $('form');
form.addEventListener('submit', ()=>{
  event.preventDefault();
  //stop page refresh
  //get Input Values
  const firstNameInput = $('#firstName');
  const lastNameInput = $('#lastName');
  const emailInput = $('#email');
  

  // create Object to send to server
  const newUser = {
      firstName: firstNameInput.value,
      lastnName: firstNameInput.value,
      email: emailInput.value,
      
  }
 
  //send info to the server

  fetch(`${BASE}/api/v1/cities`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCity),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

});