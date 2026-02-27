// create the user userdata array
let userdata =[{
    "firstname" :"shubham",
    "lastname":"kumar",
    "email" : "shubham1605dj@gmail.com",
    "gender": "male",
    "password": "Shubham5061@",
    "confirmpassword":"Shubham5061@",
    "phonenumber":"7464049679",
    "dob": "2-3-2004",
    "address" : "kolkata",
    },
    {
    "firstname" :"sonal",
    "lastname":"kumari",
    "email" : "shubham1605dj@gmail.com",
    "gender": "female",
    "password": "Shubham5061@",
    "confirmpassword":"Shubham5061@",
    "phonenumber":"7464049679",
    "dob": "2-3-2005",
    "address" : "kolkata",
}];

//store the userdata array in the localstorage
localStorage.setItem('userdata',JSON.stringify(userdata));

document.addEventListener('DOMContentLoaded', () => {
    
    // Step 3: Retrieve the userdata array from localStorage
    const storedData = localStorage.getItem('userdata');
    // conditional (ternary operator) 
    const data = storedData ? JSON.parse(storedData) : [];

    // Step 4: Generate the table rows dynamically
    const tableBody = document.querySelector('table tbody');

    data.forEach(user => {
        const row = document.createElement('tr');

        // generating table row by creating element and giving it a textcontent and appen it.
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = user.firstname;
        row.appendChild(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = user.lastname;
        row.appendChild(lastNameCell);

        const dobCell = document.createElement('td');
        dobCell.textContent = user.dob;
        row.appendChild(dobCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = user.gender;
        row.appendChild(genderCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phonenumber;
        row.appendChild(phoneCell);

        const passwordCell = document.createElement('td');
        passwordCell.textContent = user.password;
        row.appendChild(passwordCell);

        const confirmPasswordCell = document.createElement('td');
        confirmPasswordCell.textContent = user.confirmpassword;
        row.appendChild(confirmPasswordCell);

        const  addresscell = document.createElement("td");
        addresscell.textContent = user.address;
        row.appendChild(addresscell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
});