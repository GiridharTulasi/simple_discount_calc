let disValue = document.getElementById("disAmount");
let totalScore = document.getElementById("totalAmount");

function calculate() {
    let billAmount = document.getElementById("billAmount");
    let percentage = document.getElementById("percentageDis");
    if (billAmount.value==="" || percentage.value==="" ) {
        document.getElementById("errorMessage").textContent = "Please enter a Valid Input";
        document.getElementById("errorMessage").color = "red";
    }
    else{ 
        billAmount = parseFloat(billAmount.value);
        let percentageDis = parseFloat(percentage.value);
        if ((typeof(billAmount) !== typeof(0)) || percentageDis > 100 ||typeof(percentageDis) !== typeof(0) ) {
            document.getElementById("errorMessage").textContent = "Please enter a Valid Input";
            document.getElementById("errorMessage").color = "red";
        }
        else{
            let dis = parseFloat(billAmount * (percentageDis/100));
            console.log(disValue.value = dis);
            let total = parseFloat( billAmount - dis) ;
            console.log(totalScore.value = (total));
            document.getElementById("calculateButton").style.backgroundColor = "green";
            document.getElementById("errorMessage").textContent = "";
        }
    }
}

function reset() {
    let billAmount = document.getElementById("billAmount");
    let percentage = document.getElementById("percentageDis");
    billAmount.value = "";
    percentage.value = "";
    disValue.value = "";
    totalScore.value = "";
    console.log(billAmount);
    console.log(percentage);
    console.log(disValue);
    console.log(totalScore);
}