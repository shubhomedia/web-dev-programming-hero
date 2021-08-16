function getInputValue(inputID){
    const inpputField = document.getElementById(inputID);
    const inputAmountText = inpputField.value;
    const amountValue = parseFloat(inputAmountText);

    inpputField.value = '';
    return amountValue
}




// Deposit Button Event Handle 
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-field');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    const newDepositAmount = getInputValue('deposit-field');


    // update deposit total
    const depositTotal = document.getElementById('deposit-amount');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    // clear the Input Field 
    // depositInput.value = '';

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
})

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    const newWithdrawAmount = getInputValue('withdraw-input');


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    // withdrawInput.value = '';
})