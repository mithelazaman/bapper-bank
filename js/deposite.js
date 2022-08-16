//step-1//
document.getElementById('btn-deposite').addEventListener('click', function () {
    //step----2///
    const depositeField = document.getElementById('deposite-field');
    const previousDepositeAmmountString = depositeField.value;
    const previousDepositeTotal= parseFloat(previousDepositeAmmountString);
    
    // step-3////
    const depositeElement =document.getElementById('deposite-total');
    const newDepositeAmmountString = depositeElement.innerText;
    const newDepositeTotal =parseFloat(newDepositeAmmountString);
    const currentDepositeTotal =previousDepositeTotal+newDepositeTotal;
    depositeElement.innerText=currentDepositeTotal;
    // step-4//
    const balanceElement= document.getElementById('balance-total');
    const previousBalanceAmmountString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceAmmountString);
    //step-5//
    const currentBalanceTotal=previousBalanceTotal+newDepositeTotal;
    //step-6//
    balanceElement.innerText=currentBalanceTotal




    // step-7///
    depositeField.value = '';
})