function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
}

function submitted(){
  alert("Thank you. Your form has been successfully submitted,");
}
