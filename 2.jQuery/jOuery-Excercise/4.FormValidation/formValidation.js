function validate() {
    let username = $("#username");
    let password = $("#password");
    let confirmPassword = $("#confirm-password");
    let email = $("#email");
    let companyCheckbox = $("#company");
    let companyNumber = $("#companyNumber");
    let companyInfo = $("#companyInfo");
    let submitBtn = $("#submit");
    let div = $("#valid");
    let allIsValid = true;

    companyCheckbox.on('change', function () {
        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        }
        else {
            companyInfo.css('display', 'none')
        }
    });

    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateForm();
        if (allIsValid === false){
            div.css('display','none');
        }
        else {
            div.css('display', 'block');
        }
        allIsValid = true;
    });

    function validateForm() {
        validateInput(username, /^[A-Za-z0-9]{3,20}$/);
        validateInput(email, /[\w\W]+@([\w\W]+)*\.[\w\W]+/);
        validateInput(password, /^[A-Za-z0-9_]{5,15}$/);
        if (confirmPassword.val() === password.val()) {
            validateInput(confirmPassword, /^[A-Za-z0-9_]{5,15}$/);
        }
        else {
            password.css('border','2px solid red');
            confirmPassword.css('border','solid red');
            allIsValid=false;
        }
        if (companyCheckbox.is(':checked')) {
            if((Number(companyNumber.val())>=1000)&&(Number(companyNumber.val()<=9999))){
                companyNumber.css('border','none');
            }
            else {
                companyNumber.css('border','solid red');
                allIsValid=false;
            }
        }
    }

    function validateInput(input, pattern) {
        let inputStr = `${input.val()}`;
        if (pattern.test(inputStr)) {
            input.css('border','none');
        }
        else {
            input.css('border','solid red');
            allIsValid = false;
        }
    }
}