console.log('hii');
const BASE = 'http://localhost:4000';

const $form = $('#form');


$form.on('submit', ()=>{
  event.preventDefault();
  //stop page refresh
  //get Input Values
  const firstNameInput = $('#firstName').val();
  const lastNameInput = $('#lastName').val();
  const emailInput = $('#email').val();



  // create Object to send to server
  const newUser = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      
  }
  console.log(newUser);
  //send info to the server

  fetch(`${BASE}/api/v1/users`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


});