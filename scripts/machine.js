function visual(id) {
    let element = document.getElementById(id);
    const addMoney = document.getElementById("addMoneyId");
    const cashOut = document.getElementById("cashOutId");
    const transfer = document.getElementById("transferId");
    const history = document.getElementById("transactionID");
    const getBonus = document.getElementById("getBonusId");
    const payBill = document.getElementById("payBillId");
    const transactionHistoryTitle = document.getElementById("transactionHistoryTitle");
    const recentTransactionsTitle = document.getElementById("recentTransactionsTitle");
    const pageTitle = document.getElementById("pageTitle");


    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    history.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    transactionHistoryTitle.style.display = "none";
    recentTransactionsTitle.style.display = "none";



    if (id === "addMoneyId") {
        addMoney.style.display = "block";
        pageTitle.innerText = "PayCash || Add Money";
    }
    else if (id === "cashOutId") {
        cashOut.style.display = "block";
        pageTitle.innerText = "PayCash || Cash Out";
    }
    else if (id === "transferId") {
        document.getElementById("transferId").style.display = "block";
        pageTitle.innerText = "PayCash || Transfer Money";
    }
    else if (id === "transactionID") {

        transactionHistoryTitle.style.display = "block";
        document.getElementById("transactionID").style.display = "block";
        pageTitle.innerText = "PayCash || Transaction History";
    }
    else if (id === "getBonusId") {
        document.getElementById("getBonusId").style.display = "block";
        pageTitle.innerText = "PayCash || Get Bonus";
    }
    else if (id === "payBillId") {
        payBill.style.display = "block";
        pageTitle.innerText = "PayCash || Pay Bill";
    }
    else if (id === "recentTransactionsTitle") {
        recentTransactionsTitle.style.display = "block";
        document.getElementById("transactionID").style.display = "block";
        pageTitle.innerText = "PayCash || Home";
    }
}