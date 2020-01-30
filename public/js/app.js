console.log('hii');
const BASE = 'http://localhost:4000';

const $form = $('#form');

const checkbox = $('.form-check-input');
console.log(checkbox);






const clearAlertMessage = ()=> {
  document.querySelectorAll('.alert').forEach(ele => {
    ele.remove();
  })
  document.querySelectorAll('.input').forEach(ele => {
    ele.removeClass();
  })
}

$form.on('submit', () => {
    event.preventDefault();
    //stop page refresh
    //get Input Values
    const $firstName = $('#firstName');
    const $lastName = $('#lastName');
    const $email = $('#email');
    const firstNameInput = $('#firstName').val();
    const lastNameInput = $('#lastName').val();
    const emailInput = $('#email').val();
    // create Object to send to server
    const newUser = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
    }
    // console.log(newUser);
    //check valid before page change
    //   const formInput = [firstNameInput, lastNameInput, emailInput];
    let formIsValid = true;
    let regex = /[^\sA-Za-z]+/;
    let regex2 =/^((?![@.]).)*$/;
    let atSign = 0;
    let dotSign = 0;
    clearAlertMessage();
    if (firstNameInput === '' || firstNameInput.length < 2) {
        formIsValid = false;
        $firstName.addClass('input-error');
        $firstName.parent().append(`<div class="alert">Please enter your first name</div>`)
    } else if (firstNameInput.match(regex)) {
        formIsValid = false;
        $firstName.addClass('input-error');
        $firstName.parent().append(`<div class="alert">Invalid first name</div>`)
    } 
    if (lastNameInput === '' || lastNameInput.length < 2) {
        formIsValid = false;
        $lastName.addClass('input-error');
        $lastName.parent().append(`<div class="alert">Please enter your last name</div>`)
    } else if (lastNameInput.match(regex)) {
        formIsValid = false;
        $lastName.addClass('input-error');
        $lastName.parent().append(`<div class="alert">Invalid last name</div>`)
    }

    if (emailInput === '') {
        formIsValid = false;
        $email.addClass('input-error');
        $email.parent().append(`<div class="alert">Please enter your email</div>`)
    } else if (emailInput !== ''){
        
        for (let i = 0; i < emailInput.length; i++) {
            if (emailInput[i] == '@') {
               atSign ++;
            } else if (emailInput[i] == '.') {
               dotSign ++;
            }
        }
        if (atSign !== 1 || dotSign !== 1) {
            formIsValid = false;
                $email.addClass('input-error');
                $email.parent().append(`<div class="alert">Invalid email</div>`)
        }
        
    }
    // console.log(checkbox.val());
    // console.log(checkbox);
    // if (checkbox.attr('checked') !== false) {
    //     formIsValid = false;
    //     checkbox.addClass('input-error');
    //     checkbox.parent().append(`<div class="alert">Please check.</div>`)
    // }


const showErr = (err) => {
    if (err.firstName) {
        $firstName.addClass('input-error');
        $firstName.parent().append(`<div class="alert">${err.firstName.message}</div>`)
        console.log(err.firstName.message);
    }
}

    if (formIsValid) {
        //send data to server
        //send info to the server
        fetch(`${BASE}/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location = "/confirm";
            })
            .catch((err) => {
                console.log(err);
                showErr(err);
            });

    }
});










const $input = $('input');
console.log($input);
// $input.on('keyup', ()=> {
//     $input.addClass('filled');
// })

//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
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
function doneTyping() {
    $input.css('background-color', 'white');
}

