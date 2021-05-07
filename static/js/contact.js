function sendMail(contactForm) {
  emailjs.send("service_vj63ygg","WomenInTech", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Email sent!")
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}