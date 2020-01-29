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

const $input = $('input');
console.log($input);
// $input.on('keyup', ()=> {
//     $input.addClass('filled');
// })

//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 2000;  //time in ms, 5 second for example
// var $input = $('#myInput');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
    $input.css('background-color','white');
}


// $(window).resize(()=> {
//     const $fullbox = $('body > div');
//     const $upperbox = $('.full-box > div').eq(0);
//     const $lowerbox = $('.full-box > div').eq(1);
//     const $windowWidth = window.innerWidth;
//     console.log($windowWidth);
//     if ($windowWidth < 768) {
//     $upperbox.removeClass();
//     $lowerbox.removeClass();
//     $fullbox.addClass();
// }
// })