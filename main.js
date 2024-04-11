function calculateTax () {
    
    let income = document.getElementById('grossIncome').value;
    let extraIncome = document.getElementById('extraIncome').value;
    let age = document.getElementById('age').value;
    let deductions = document.getElementById('deductions').value;
    let hasError = false;
    let finalIncome;

   
    let errorIcons = document.querySelectorAll('.errorIcon');
    errorIcons.forEach(function(icon) {
      icon.style.visibility = 'visible';
    });

    
    if (!income) {
      document.getElementById('grossIncomeErrorText').style.visibility = 'visible';
      hasError = true;
    }
    if (!extraIncome) {
      document.getElementById('extraIncomeErrorText').style.visibility = 'visible';
      hasError = true;
    }
    if (!deductions) {
      document.getElementById('deductionsErrorText').style.visibility = 'visible';
      hasError = true;
    }
    if (!hasError) {
    if(( parseInt(income,10) + parseInt(extraIncome,10) ) - parseInt(deductions,10) <= 800000 ){
        finalIncome = ( parseInt(income,10) + parseInt(extraIncome,10) ) - parseInt(deductions,10);
    }
    else{
        if(age === "<40"){
        var taxRate = 0.3;
        }
        else if (age === "≥40 & <60") {
          taxRate = 0.4;
        } else if (age === "≥60") {
          taxRate = 0.1;
        }
    }

      let taxableIncome = ( parseInt(income,10) + parseInt(extraIncome,10) ) - parseInt(deductions,10)
      let taxAmount = taxRate * taxableIncome;
      finalIncome = taxableIncome - taxAmount


      document.getElementById("finalIncome").innerText = finalIncome;

      document.getElementById("resultContainer").style.visibility = "visible"
    }
  };

  function returnToForm (){
    document.getElementById("resultContainer").style.visibility = "hidden"
  }