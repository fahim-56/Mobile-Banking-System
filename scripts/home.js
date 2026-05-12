document.getElementById("addMoneyId").style.display = "none";
document.getElementById("cashOutId").style.display = "none";
document.getElementById("transferId").style.display = "none";
document.getElementById("getBonusId").style.display = "none";
document.getElementById("payBillId").style.display = "none";
document.getElementById("transactionHistoryTitle").style.display = "none";


const allTransactions = document.getElementById("history-container");
if (allTransactions.children.length === 0) {
    allTransactions.innerHTML = `<div class="bg-white w-11/12 mx-auto p-3 rounded-2xl mb-40">
                <p class="text-gray-500">No transactions yet.</p>
            </div>`;
}
