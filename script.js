
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const phoneError = document.getElementById('numbererror'); 
const doberror = document.getElementById("doberror");

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("Lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;
        const phonenumber = document.getElementById("phonenumber").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender");
        
        

        console.log("Firstname : ",name);
        console.log("Lastname : ",lastname);
        console.log("Date of birth : ",dob);
        console.log("gender is :",gender);
        console.log("email : ",email);
        console.log("phone number : ",phonenumber);
        console.log("password : ",password);
        console.log("confirm passowrd : ",confirmpassword);
        alert("Form Submitted Successfully");
    }
});


function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == ""){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(name.length < 2){
        nameError.innerHTML = "Write full Name";
        return false;
    }
    return true;
}

function validatelastname(){
    let lastname = document.getElementById("lastname").value;

    if(lastname.length == ""){
        lastnameerror.innerHTML = "last name is required";
        return false;
    }
    return true;
}

function validatedob(){
    let dob = document.getElementById("dob");

    doberror.innerHTML = "";
    if (dob = ""){
        doberror.innerHTML = "date of birth is required";
        return false;
    }
    return true;
}

function validateGender() {
    let genderOptions = document.getElementsByName("gender");
    let genderError = document.getElementById("genderError");

    genderError.innerHTML = "";
    let isSelected = false;

    for (let gender of genderOptions) {
        if (gender.checked) {
            isSelected = true;
            break;
        }
    }

    if (!isSelected) {
        genderError.innerHTML = "Please select your gender.";
        return false;
    }

    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phonenumber').value;
    

    
    phoneError.innerHTML = "";
    // phoneError.previousElementSibling.classList.remove('fa-xmark', 'fa-check'); 

    
    if (phoneNumber.trim() === "") {
        phoneError.innerHTML = "Phone number is required";
        // phoneError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    // Validate phone number format (only digits, length 10)
    if (phoneNumber.length == 10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        // phoneError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    // If validation passes
    // phoneError.previousElementSibling.classList.add('fa-check');
    return true;
}


function validatePassword(){
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    if(password.length == ""){
        document.getElementById("passError").innerHTML = "please fill password"
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 special character";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if (password != confirmpassword) {
        document.getElementById("confirmpasserror").innerHTML = "password are not same"
        return false;
    }
    
    return true;
}