console.log("Adding money to all accounts...");

document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission  
    const bank = document.getElementById("bankName").value;
    const accountNumber = document.getElementById("bankAccount").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const pin = document.getElementById("password").value;

    if(!bank || !accountNumber || isNaN(amount) || !pin) {
        alert("Please fill in all fields correctly.");
        return;
    }
    else if (bank === "Select a Bank") {
        alert("Please select a valid bank.");
        return;
    }
    else if (accountNumber.length !== 13) {
        alert("Please enter a valid account number.");
        return;
    }
    else if (amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    else if (pin == "1234") {
        document.getElementById("balance").innerText = (parseFloat(document.getElementById("balance").innerText) + amount).toFixed(2);

        alert(`Successfully added ${amount.toFixed(2)} Taka to your account! 
        From: ${bank} Account: ${accountNumber} 
        at ${new Date().toLocaleString()}`);
    }
    else {
        alert("Invalid PIN. Please try again.");
    }
});
