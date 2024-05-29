var selectedGender = null;
const submitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById("nameError");
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passError = document.getElementById('passError');
const lastError = document.getElementById("lastError");
const dobError = document.getElementById("dobError");

submitbtn.addEventListener('click',(e) =>{
e.preventDefault();


if(validateName()  && validatelastName() && validateEmail() &&  validatephone() && validatedob() 
&& getgender() && validatePassword()){

  const name =document.getElementById("name").value;
  const lastname =document.getElementById("lastname").value;
  const email =document.getElementById("email").value;
  const phonenumber =document.getElementById("phonenumber").value;
  const password =document.getElementById("password").value;
  const confirmpassword=document.getElementById("confirmpassword").value;
  const dob =document.getElementById("dob").value;
  const gender = selectedGender;

console.log("name :",name);
console.log("lastname :",lastname);
console.log("email :",email);
console.log("phonenumber :",phonenumber);
console.log("password :",password);
console.log("confirmpassword :",confirmpassword);
console.log("dob :",dob);
console.log("gender :",gender);

   let finalData = {
    "name": name,
    "lastname": lastname,
    "email": email,
    "gender": gender,
    "password": password,
    "confirmpassword": confirmpassword,
    "phonenumber": phonenumber,
    "dob": dob
};
localStorage.setItem("finalData", JSON.stringify(finalData));
console.log(JSON.parse(localStorage.getItem("finalData")));
  alert("form submitted successfully");
}

});

function validateName(){
    let name = document.getElementById('name').value ;

    if(name.length == ""){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(name.length < 2){
        nameError.innerHTML = "Write full name ";
        return false;
    }
        return true;
}
function validatelastName(){
    let lastname = document.getElementById('lastname').value ;

    if(lastname.length == ""){
        lastError.innerHTML = " last Name is required";
        return false;
    }
        return true;
}

function validateEmail(){
    let email = document.getElementById('email').value ;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email ";
        return false;
    }
    emailError.innerHTML = "";
        return true;
}
function validatephone(){
    let phone = document.getElementById('phonenumber').value ;

    if(phone === ""){
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }

    if(phone.length != 10 ){
       phoneError.innerHTML = "phone no. should be 10 digit";
        return false;
    }
      return true;
}
function getgender(){
    const gender = document.getElementsByName('gender');
    
    for(var i = 0;i< gender.length; i++){
        if(gender[i].checked){
            selectedGender = gender[i].value;
            break;
        }
    }

    if(!selectedGender){
        genderError.innerHTML = "no gender selected";
        return false;
    }
    else{
     return true;   
    }
}
function validatedob(){
    let dob = document.getElementById("dob");
    dobError.innerHTML = "";
    if(dob.length === ""){
        dobError.innerHTML ="date of birth is required";
        return false;
    }
    return true;
}

function validatePassword(){
    let password = document.getElementById('password').value ;
    let confirmpassword = document.getElementById('confirmpassword').value ;
    if(password.length == ""){
            document.getElementById("passError").innerHTML ="please fill password"
            return false;
    }
    if(password != confirmpassword){
        document.getElementById("confirmpassError").innerHTML ="password are not same"
        return false;
    }
    return true;
}