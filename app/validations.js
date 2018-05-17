const successText = document.createTextNode("Valid password!"); 
const successNode = document.createElement('span');
successNode.appendChild(successText);

const validateUncommonPassword = input => {
    if (passwords.includes(input.value)) {
        input.setCustomValidity('Please choose a less common password.');
    } else {
        input.setCustomValidity('');
    }
}

const validateAscii = input => {
    if (document.contains(successNode)) {
        successNode.remove();
    }

    if (!/^[\x00-\x7F]*$/.test(input.value)) {
        input.setCustomValidity('Please use only ASCII characters.');
    };
}

const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (!form.contains(successNode)) {
        form.appendChild(successNode)
    }
}

const invalid = () => {
    if (document.contains(successNode)) {
        successNode.remove();
    }
}

const validateInput = event => {
    const input = event.target;
    validateUncommonPassword(input);
    validateAscii(input);
}
const input = document.getElementById('password-input');
const form = document.getElementById('password-form');
input.oninput = validateInput;
form.onsubmit = onSubmit;
