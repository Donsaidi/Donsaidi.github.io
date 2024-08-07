function generateEmailLink() {
    var user = "jihad.saidi";
    var domain = "alumni.epfl.ch";
    var element = document.getElementById("email-link");
    var email = user + "@" + domain;
    element.setAttribute("href", "mailto:" + email);
    // element.innerHTML = email;
}
