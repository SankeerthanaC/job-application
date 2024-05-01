var FormValidator = /** @class */ (function () {
    function FormValidator() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.gender = '';
        this.language = '';
        this.state = '';
        this.phone = '';
        this.errorMessage = document.getElementById('error-message');
    }
    FormValidator.prototype.validateForm = function () {
        this.name = document.getElementById('name').value;
        this.email = document.getElementById('email').value;
        this.password = document.getElementById('password').value;
        this.gender = document.getElementById('gender').value;
        this.language = document.getElementById('language').value;
        this.state = document.getElementById('state').value;
        this.phone = document.getElementById('phone').value;
        if (!this.errorMessage) {
            console.error("Error message element not found.");
            return;
        }
        // name
        if (/^\d/.test(this.name)) {
            this.errorMessage.textContent = "Name should not start with a number";
            return;
        }
        // email 
        if (!/^[^\d]\w*@\w+\.\w+$/.test(this.email)) {
            this.errorMessage.textContent = "Please enter a valid email address";
            return;
        }
        // password
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(this.password)) {
            this.errorMessage.textContent = "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
            return;
        }
    };
    return FormValidator;
}());
