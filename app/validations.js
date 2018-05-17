const successText = document.createTextNode("Valid password!"); 
const successNode = document.createElement('div');
successNode.id = 'success';
successNode.className = 'success';

successNode.appendChild(successText);

const validateUncommonPassword = input => {
    if (passwords.includes(input.value)) {
        input.setCustomValidity('Please choose a less common password.');
    } else {
        input.setCustomValidity('');
    }
}

const validateAscii = input => {
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
    if (!!input.value) {
        input.className = "active";
    } else {
        input.className = "";
    }
    if (document.contains(successNode)) {
        successNode.remove();
    }

    validateUncommonPassword(input);
    validateAscii(input);
    console.log(form.checkValidity());
}
const input = document.getElementById('password-input');
const form = document.getElementById('password-form');
input.oninput = validateInput;
form.onsubmit = onSubmit;
