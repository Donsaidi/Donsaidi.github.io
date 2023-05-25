function generateEmailLink() {
    var user = "jihad-s";
    var domain = "live.it";
    var element = document.getElementById("email-link");
    var email = user + "@" + domain;
    element.setAttribute("href", "mailto:" + email);
    // element.innerHTML = email;
}