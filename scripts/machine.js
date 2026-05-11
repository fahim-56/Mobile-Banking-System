function visual(id) {
    let element = document.getElementById(id);
    const addMoney = document.getElementById("addMoneyId");
    const cashOut = document.getElementById("cashOutId");
    const transfer = document.getElementById("transferId");
    const history = document.getElementById("transactionID");
    const pageTitle = document.getElementById("pageTitle");

    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    history.style.display = "none";

 
    if (id === "addMoneyId") {
        addMoney.style.display = "block";
        pageTitle.innerText = "Payoo || Add Money";
    }
    else if (id === "cashOutId") {
        cashOut.style.display = "block";
        pageTitle.innerText = "Payoo || Cash Out";
    }
    else if (id === "transferId") {
        document.getElementById("transferId").style.display = "block";
        pageTitle.innerText = "Payoo || Transfer Money";
    }
    else if (id === "transactionID") {
        document.getElementById("transactionID").style.display = "block";
        pageTitle.innerText = "Payoo || Transaction History";
    }
}