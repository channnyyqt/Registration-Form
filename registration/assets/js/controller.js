var regForm = document.getElementById('regForm');
var inputs = regForm.getElementsByTagName('input');
var course = document.getElementById('course');
var suffix = document.getElementById('suffix');

function showError(input, message) {
    var errorSpan = input.parentNode.getElementsByClassName('error')[0];
    errorSpan.innerHTML = message;
    input.className = 'invalid';
}

function clearError(input) {
    var errorSpan = input.parentNode.getElementsByClassName('error')[0];
    errorSpan.innerHTML = '';
    input.className = 'valid';
}

function isLettersOnly(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if ((char < 'a' || char > 'z') && char != ' ') return false;
    }
    return true;
}

function validateInput(input) {
    var value = input.value.trim();

    if (input.id == 'firstname' || input.id == 'lastname') {
        if (value == '' || !isLettersOnly(value)) { 
            showError(input, 'Letters only'); 
            return false; 
        } else { 
            clearError(input); 
            return true; 
        }
    }
    else if (input.id == 'middlename') {
        if (value != '' && !isLettersOnly(value)) { 
            showError(input, 'Letters only'); 
            return false; 
        } else { 
            clearError(input); 
            return true; 
        }
    }
    else if (input.id == 'contact') {
        if (value == '' || isNaN(value)) { 
            showError(input, 'Numbers only'); 
            return false; 
        } else { 
            clearError(input); 
            return true; 
        }
    }
    else if (input.id == 'email') {
        if (value == '' || value.indexOf('@') == -1 || value.indexOf('.') == -1) { 
            showError(input, 'Invalid email'); 
            return false; 
        } else { 
            clearError(input); 
            return true; 
        }
    }
    else if (input.id == 'id') {
        if (value == '' || isNaN(value)) { 
            showError(input, 'Numbers only'); 
            return false; 
        } else { 
            clearError(input); 
            return true; 
        }
    }
    else if (input.id == 'batch') {
    if (value == '' || isNaN(value)) {
        showError(input, 'Numbers only');
        return false;
    }
    else { clearError(input); return true; }
    }
    return true;
}

regForm.onsubmit = function(e) {
    e.preventDefault();
    var valid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (!validateInput(inputs[i])) valid = false;
    }

    if (course.value == '') {
        showError(course, 'Required');
        valid = false;
    } else {
        clearError(course);
    }

    clearError(suffix);

    if (valid) {
        var student = {
            firstname: document.getElementById('firstname').value.trim(),
            middlename: document.getElementById('middlename').value.trim(),
            lastname: document.getElementById('lastname').value.trim(),
            suffix: document.getElementById('suffix').value.trim(),
            contact: document.getElementById('contact').value.trim(),
            email: document.getElementById('email').value.trim(),
            course: course.value,
            id: document.getElementById('id').value.trim(),
            batch: document.getElementById('batch').value.trim()
        };

        document.querySelector('.form-container h2').innerHTML = 'Registration Successfully!';
        regForm.style.display = 'none';
        var successContainer = document.getElementById('successContainer');
        var successDetails = document.getElementById('successDetails');
        successDetails.innerHTML = 
            '<p><strong>First Name:</strong> ' + student.firstname + '</p>' +
            '<p><strong>Middle Name:</strong> ' + student.middlename + '</p>' +
            '<p><strong>Last Name:</strong> ' + student.lastname + '</p>' +
            '<p><strong>Suffix:</strong> ' + student.suffix + '</p>' +
            '<p><strong>Contact:</strong> ' + student.contact + '</p>' +
            '<p><strong>Email:</strong> ' + student.email + '</p>' +
            '<p><strong>Course:</strong> ' + student.course + '</p>' +
            '<p><strong>Batch Year:</strong> ' + student.batch + '</p>' +
            '<p><strong>ID:</strong> ' + student.id + '</p>';
        successContainer.style.display = 'block';
    }
};
