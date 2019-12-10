// Write your JavaScript here
var change = [];

function calculateChange(amountDue, amountReceived) {
    var change = amountReceived - amountDue
    var changeRemaining = (change % 1);
    var dollars = change - changeRemaining;
    var easierMath = changeRemaining * 100;
    var changeAfterQuarters = Math.round(easierMath % 25);
    var quarters = (changeRemaining - (changeRemaining %.25)) * 4;
    var dimes = Math.floor((changeAfterQuarters / 10));
    var changeAfterDimes = Math.round(changeAfterQuarters % 10);
    var nickels = Math.floor((changeAfterDimes / 5));
    var pennies = Math.round((changeAfterDimes % 5));
    var change =[
        dollars,
        quarters,
        dimes,
        nickels,
        pennies
    ];
    return change;
}

function handleClickEvent() {
    var amountReceived = document.getElementById("amount-received").value;
    var amountDue = document.getElementById("amount-due").value;
    var calculatedChange = calculateChange(amountDue, amountReceived);
    document.getElementById("dollars-output").innerHTML = calculatedChange[0];
    document.getElementById("quarters-output").innerHTML = calculatedChange[1];
    document.getElementById("dimes-output").innerHTML = calculatedChange[2];
    document.getElementById("nickels-output").innerHTML = calculatedChange[3];
    document.getElementById("pennies-output").innerHTML = calculatedChange[4];
    console.log(calculatedChange);
}
