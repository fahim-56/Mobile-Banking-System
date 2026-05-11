
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Withdraw button clicked");
    const cashoutAmount = document.getElementById("cashoutAmount").value;
    const balance = document.getElementById("balance").innerText;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("cashoutPassword").value;
    // console.log("Amount entered:", cashoutAmount);
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
        if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
            alert("Please enter a valid amount to withdraw");
            return;
        }
        // else if (cashoutAmount > balance) {
        //     alert("Insufficient balance");
        //     return;
        // }
        else if (Number(cashoutAmount) <= Number(balance)) {
            // console.log("balance before withdrawal:", balance);
            document.getElementById("balance").innerText = (Number(balance) - Number(cashoutAmount)).toFixed(2);
            alert(`You have withdrawn $${cashoutAmount} 
            to agent number ${phone} at ${new Date().toLocaleString()}.
            Your new balance is $${(Number(balance) - Number(cashoutAmount)).toFixed(2)}`);
            // console.log("balance after withdrawal:", document.getElementById("balance").innerText);
            const allTransactions = document.getElementById("history-container");
            if(allTransactions.children.length === 1 && allTransactions.children[0].innerText === "No transactions yet.") {
                allTransactions.innerHTML = ""; // Clear the "No transactions yet" message
            }
            const newHistory = document.createElement("div");
            newHistory.innerHTML = `<div class="bg-white w-11/12 mx-auto p-3 rounded-2xl mb-4">
        Cash Out: $${cashoutAmount} Taka to ${phone} 
        at ${new Date().toLocaleString()}.
        </div>`;
            allTransactions.appendChild(newHistory);
        }
        else {
            alert("Insufficient balance");
        }
    }
});