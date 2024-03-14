document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Gundumani" && password === "iloveyou") {
        document.getElementById("message").innerText = "I love you Gundumani";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
});
