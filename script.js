function annualIncome() {
  let income =document.getElementById("income").value.trim().toLowerCase();
  let status = " ";
  if (income = 0<=19999) {
    status ="NOt a good position";
  }
  else if (income= 19999<=999999) {
    status="good position";
  }
  else if (income= 999999<10000000) {
    status ="wonderful position";
  }
  document.getElementById("result").innerText = status;
}

     
  
