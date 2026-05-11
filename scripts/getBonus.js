
document.getElementById("getBonusBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission  
    const bonusCode = document.getElementById("bonusCoupon").value;
    if (!bonusCode) {
        alert("Please enter a bonus code.");
        return;
    }
    else if (bonusCode === "PAYOO100") {
        const bonusAmount = 100;
        document.getElementById("balance").innerText = ((document.getElementById("balance").innerText) + bonusAmount);
        alert(`Congratulations! You've received a bonus of ${bonusAmount} Taka. Your new balance is $${document.getElementById("balance").innerText}.`);
        const allTransactions = document.getElementById("history-container");
        if (allTransactions.children[0].textContent.trim() === "No transactions yet.") {
            allTransactions.innerHTML = ""; // Clear the "No transactions yet" message
        }
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `<div class="bg-white w-11/12 mx-auto p-3 rounded-2xl mb-4">
        Bonus Received: $${bonusAmount} 
        with code ${bonusCode} at ${new Date().toLocaleString()} </div>`;
        allTransactions.appendChild(newHistory);
    }
    else {
        alert("Invalid bonus code. Please try again.");
    }
});    