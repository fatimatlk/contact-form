
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var queryType = document.querySelector('input[name="query"]:checked') ? document.querySelector('input[name="query"]:checked').nextElementSibling.innerText : 'No Query Selected';

   
    alert("Name: " + name + "\n" +
          "Last Name: " + lastName + "\n" +
          "Email: " + email + "\n" +
          "Query Type: " + queryType + "\n" +
          "Message: " + message);
});
