// console.log("Login page script loaded");

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone");
    console.log("Phone Number entered:", phoneNumber.value);
    const pin = document.getElementById("password");
    console.log("PIN entered:", pin.value);
    if (phoneNumber.value == "01712345678") {
        if (pin.value == "1234") {
            console.log("Login successful");
            alert("Login successful! Redirecting to home page...");
            window.location.assign("../home.html");
            // window.location.replace("home.html");

        } else {
            alert("Invalid PIN. Please try again.");
        }
    } else {
        alert("Invalid phone number. Please try again.");
    }
});