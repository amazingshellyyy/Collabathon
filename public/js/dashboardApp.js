console.log('connected!');
const BASE = 'http://localhost:4000';

const $form = $('#form');

  // create Object to send to server
// RENDER TEMPLATE FOR MAIN FUNCTION. 
const render = (json) => {
    console.log("hello")
	json.forEach((elem) => {
        $(".subscriberList").append(`<li>First Name: ${elem.firstName}</li><li>Last Name: ${elem.lastName}</li><li>email: ${elem.email}</li>`)
		//console.log(elem)
    })
}


// get server info
fetch(`${BASE}/api/v1/users`, {
    method: 'GET',
})
  .then((response) => response.json())
  .then((data) => render(data))
  .catch((err) => console.log(err));


