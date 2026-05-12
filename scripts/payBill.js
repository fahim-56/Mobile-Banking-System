document.getElementById("payBillBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission  

    const payType = document.getElementById("payType").value.trim();
    const billAccount = document.getElementById("billAccount").value;
    const billAmount = document.getElementById("billAmount").value;
    const balance = document.getElementById("balance").innerText;
    const password = document.getElementById("payBillPassword").value;



    if (!payType || !billAccount || isNaN(billAmount) || !password) {
        alert("Please fill in all fields correctly.");
        return;
    }
    else if (payType === "Select Bill Type") {
        alert("Please select a valid bill type.");
        return;
    }
    else if (billAccount.length > 13 || billAccount.length < 8 || isNaN(billAccount)) {
        alert("Please enter a valid bill account number.");
        return;
    }
    else if (password !== "1234") {
        alert("Incorrect PIN. Please try again.");
        return;
    }
    else {
        if (isNaN(billAccount) || billAmount <= 0) {
            alert("Please enter a valid amount to pay.");
            return;
        }
        else if (Number(billAmount) <= Number(balance)) {
            document.getElementById("balance").innerText = (Number(balance) - Number(billAmount));
            alert(`You have paid $${billAmount} for ${payType} bill.
            Your new balance is $${(Number(balance) - Number(billAmount))} at ${new Date().toLocaleString()}.`);
           
            const allTransactions = document.getElementById("history-container");
            if (allTransactions.children.length === 1 && allTransactions.children[0].textContent.trim() === "No transactions yet.") {
                allTransactions.innerHTML = ""; 
            }
            const newHistory = document.createElement("div");
            newHistory.innerHTML = `<div class="bg-white w-11/12 mx-auto p-3 rounded-2xl mb-4">
        Bill Payment: $${billAmount} for ${payType}
        at ${new Date().toLocaleString()}.
        </div>`;
            allTransactions.appendChild(newHistory);
        }
        else {
            alert("Insufficient balance");
        }
    }
});
