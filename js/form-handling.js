// Never trust user input

// It is vital to validate user input before sedning it to a server(and again once it arrives there, but lets take things one step at a time!).

// Validation can be as simples as making sure that the type of data is correct (numver vs. string, valid email address, etc.); It can also be more complex-checking for password strength, for example, or parsing a comment to make sure it contains no URLs.

// During input

const password = document.getElementById('password-input');
const submit = document.getElementById('submit-button');
const confirm = document.getElementById('confirm-password');

password.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', 'true');
    }
});

// the input event is triggered whenever the user enters data into a given < input > element. We can use this to check data as it is entered.

// After input

//     Add a blur event listener to the confirmPassword element.

//     Compare the value properties of both inputs.

//         If they are the same, set the border styles to thin solid green and set the display style of errorMsg so that it disappears.

//         If they are different, set the border styles to thin solid red and set the display style errorMsg so that it appears.
        
const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value ) {
        passwordInput.style.border = "solid green";
        confirmPassword.style.border = "solid green";
        errorMsg.style.display = "none";
    } else {
        passwordInput.style.border = "solid red";
        confirmPassword.style.border = "solid red";
        errorMsg.style.display = "inline";
    }
});

function checkPass()
{
    var password = document.getElementById('password-input');
    var password2 = document.getElementById('confirm-password');
    var message = document.getElementById('error');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
 	
    if(password.value.length > 5)
    {
        password.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Password length okay!"
    }
    else {
        password.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password must contain 6 characters"
        return;
    }
  
    if(password.value == password2.value)
    {
        password2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords match!"
        alert('Passwords Match!')
    }
	else {
        password2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
    any = /[0-9]/;
    if(!any.test(password.value)) {
        message.innerHTML = " Error: password must contain at least number (0-9)!"
        return false;
    }
    any = /[a-z]/;
    if(!any.test(password.value)) {
        message.innerHTML = " Error: password must contain at least one lowercase letter (a-z)!"
        return false;
    }
    any = /[A-Z]/;
    if(!any.test(password.value)) {
        message.innerHTML = " Error: password must contain at least one uppercase letter (A-Z)!"
        return false;
    }
    any = /[@&!]/;
	if(!any.test(password.value)) {
	    message.innerHTML = " Error: password must contain at least one special character (@-!)!"
	    return false;
	} 
} 