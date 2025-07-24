document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    const nameInput = document.getElementById('name');
    const salaryInput = document.getElementById('salary');
    const birthdayInput = document.getElementById('birthday');
    const phoneInput = document.getElementById('phone');
    const errorContainer = document.getElementById('error-messages');
    const successContainer = document.getElementById('success-message');
    const formTitle = document.getElementById('form-title');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        errorContainer.innerHTML = '';
        successContainer.innerHTML = '';
        const errors = [];

        if (nameInput.value.length <= 2) {
            errors.push("Name must be longer than 2 characters.");
        }

        const salary = parseInt(salaryInput.value);
        if (salary <= 10000 || salary >= 16000) {
            errors.push("Salary must be between 10,000 and 16,000.");
        }

        if (birthdayInput.value === '') {
            errors.push("Birthday cannot be empty.");
        }

        if (phoneInput.value.length !== 10) {
            errors.push("Phone number must be 10 digits long.");
        }
 
        if (errors.length > 0) {
            errors.forEach(function(error) {
                const errorElement = document.createElement('div');
                errorElement.className = 'error';
                errorElement.textContent = error; 
                errorContainer.appendChild(errorElement); 
            });
        } else {
            success()
        }
    }

    function success(){
        form.style.display = "none";
        formTitle.style.display = "none";
        //successContainer.textContent = 'Form submitted successfully!';
        successContainer.textContent = `Welcome ${nameInput.value} !` ;
    }
});
