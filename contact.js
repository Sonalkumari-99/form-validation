// function sendmail(event) {
//     event.preventDefault();
//     let params = {
//         name :  document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value,
//     }

//     emailjs.send("service_fgs18q4", "template_kncc1ne", params).then(alert("email sent successfully"));
    
//    }
   
// document.getElementById('contactform').addEventListener('submit', sendmail);

function sendmail(event) {
    event.preventDefault(); // Prevent the default form submission
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_fgs18q4", "template_kncc1ne", params)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.log("FAILED...", error);
        });
}

document.getElementById('contactform').addEventListener('submit', sendmail);