
document.getElementById("transfer-btn").addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Transfer button clicked");
    const transferAmount = document.getElementById("transferAmount").value;
    const balance = document.getElementById("balance").innerText;
    const phone = document.getElementById("transferPhone").value;
    const password = document.getElementById("transferPassword").value;
    // console.log("Amount entered:", transferAmount);
    // console.log("Phone entered:", phone);
    // console.log("Password entered:", password);
    if (phone.length !== 11) {
        alert("Please enter correct agent number");
        return;
    }
    else if (password !== "1234") {
        alert("Incorrect PIN. Please try again.");
        return;
    }
    else {
        if (isNaN(transferAmount) || transferAmount <= 0) {
            alert("Please enter a valid amount to transfer");
            return;
        }
        // else if (transferAmount > balance) {
        //     alert("Insufficient balance");
        //     return;
        // }
        else if (Number(transferAmount) <= Number(balance)) {
            // console.log("balance before transfer:", balance);
            document.getElementById("balance").innerText = (Number(balance) - Number(transferAmount)).toFixed(2);
            alert(`You have transferred $${transferAmount} 
            to agent number ${phone} at ${new Date().toLocaleString()}.
            Your new balance is $${(Number(balance) - Number(transferAmount)).toFixed(2)}`);
            // console.log("balance after transfer:", document.getElementById("balance").innerText);
            const allTransactions = document.getElementById("history-container");
            console.log(allTransactions.children[0].textContent.trim() === "No transactions yet.");
            if(allTransactions.children.length === 1 && allTransactions.children[0].textContent.trim() === "No transactions yet.") {
                allTransactions.innerHTML = ""; // Clear the "No transactions yet" message
                console.log("Cleared 'No transactions yet' message");
            }
            const newHistory = document.createElement("div");
            newHistory.innerHTML = `<div class="bg-white w-11/12 mx-auto p-3 rounded-2xl mb-4">
        Transfer Money: ${transferAmount} Taka
        To: ${phone}
        at ${new Date().toLocaleString()}
        </div>`;
            allTransactions.appendChild(newHistory);
        } else {
            alert("Insufficient balance");
        }
    }
});