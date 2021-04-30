let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var billAmount = document.getElementById('bill_amount').value;
    var tipPercentage = document.getElementById('tip_percentage').value;

    var tipAmount = billAmount / tipPercentage;
    console.log(tipAmount)
    document.getElementById('total_amount').value = tipAmount
    document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})
