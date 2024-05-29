var selectedGender = null;
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const lastnameerror = document.getElementById('lastnameerror');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confirmpasserror = document.getElementById('confirmpasserror');
const phoneError = document.getElementById('numbererror');
const doberror = document.getElementById("doberror");
const gendererror = document.getElementById("gendererror");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validatelastname() && validatedob() && getGender() && validateEmail() && validatePhoneNumber() && validatePassword()) {

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("Lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;
        const phonenumber = document.getElementById("phonenumber").value;
        const dob = document.getElementById("dob").value;
        const gender = selectedGender;
        let data ={
            "name" : name,
            "lastname": lastname,
            "email" : email,
            "gender": gender,
            "password": password,
            "confirmpassword":confirmpassword,
            "phonenumber": phonenumber,
            "dob": dob
        }
        let alldata = JSON.parse(localStorage.getItem("alldata"))
        if (!alldata ) {
            localStorage.setItem("alldata",JSON.stringify([data]));
        }else{
            alldata.push(data);
            localStorage.setItem("alldata",JSON.stringify(alldata));
        }
        //store data in local storage
        
        console.log(JSON.parse(localStorage.getItem("alldata")));
        alert("Form Submitted Successfully");


        console.log("Firstname : ", name);
        console.log("Lastname : ", lastname);
        console.log("Date of birth : ", dob);
        console.log("gender is : ", gender);
        console.log("email : ", email);
        console.log("phone number : ", phonenumber);
        console.log("password : ", password);
        console.log("confirm passowrd : ", confirmpassword);
        clearForm();
    }
});


function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == "") {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (name.length < 2) {
        nameError.innerHTML = "Write full Name";
        return false;
    }
    return true;
}

function validatelastname() {
    let lastname = document.getElementById("Lastname").value;

    if (lastname.length == "") {
        lastnameerror.innerHTML = "last name is required";
        return false;
    }
    return true;
}

function validatedob() {
    let dob = document.getElementById("dob");
    // console.log(dob);
    // doberror.innerHTML = "";
    if (dob.length = "") {
        doberror.innerHTML = "date of birth is required";
        return false;
    }
    return true;
}

function getGender() {
    const genders = document.getElementsByName("gender");
    
    
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectedGender = genders[i].value;
            break;
        }
    }
    if (!selectedGender) {
        gendererror.innerHTML = "No gender selected";
        return false;
    } else {
        return true;
    }
}


function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phonenumber').value;

    if (phoneNumber === "") {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    // Validate phone number format (only digits, length 10)
    if (phoneNumber.length != 10 ) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    return true;
}


function validatePassword() {
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    if (password.length == "") {
        document.getElementById("passError").innerHTML = "please fill password"
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
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

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("dob").value = "";
    selectedGender = null;

    const genders = document.getElementsByName("gender");
    for (var i = 0; i < genders.length; i++) {
        genders[i].checked = false;
    }

    nameError.innerHTML = "";
    lastnameerror.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";
    confirmpasserror.innerHTML = "";
    phoneError.innerHTML = "";
    doberror.innerHTML = "";
    gendererror.innerHTML = "";
}