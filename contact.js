function sendmail(event){
    event.preventDefault();

    let params = {
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_7k7qy2z", "template_kofkeht", params)
                .then(function(response) {
                    alert("Email has been sent successfully!");
                }, function(error) {
                    alert("Failed to send email. Please try again.");
                });
}
document.querySelector('form').addEventListener('submit', sendmail);
