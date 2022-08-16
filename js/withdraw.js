//step-1//
document.getElementById('withdraw-button').addEventListener('click', function () {
    //step-2//
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString =withdrawField.value ;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    // step-3//
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4//
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmmount;
    //step-5//
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step-6//
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-7//
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    //step-8//
    balanceTotalElement.innerText = newBalanceTotal;
    // step-8//
    withdrawField.value ='';

    
})