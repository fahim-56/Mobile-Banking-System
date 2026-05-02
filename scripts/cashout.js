
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Withdraw button clicked");
    const amount = parseFloat(document.getElementById("amount").value);
    const balance = parseFloat(document.getElementById("balance").innerText);
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (phone.length !== 11) {
        alert("Please enter correct agent number");
        return;
    }
    else if (password !== "1234") {
        alert("Incorrect PIN. Please try again.");
        return;
    }
    else {
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount to withdraw");
        }
        else if (amount <= balance) {
            document.getElementById("balance").innerText = (balance - amount).toFixed(2);
            alert(`You have withdrawn $${amount}
            Your new balance is $${(balance - amount).toFixed(2)}`);
        } else {
            alert("Insufficient balance");
        }
    }
});