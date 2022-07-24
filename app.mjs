function startApp() {
  const phoneNumber = document.getElementById("phonenumber").value;
  const output = document.getElementById("output");
  if (
    phoneNumber.substring(0, 4) == "0802" ||
    phoneNumber.substring(0, 4) == "0808" ||
    phoneNumber.substring(0, 4) == "0812" ||
    phoneNumber.substring(0, 4) == "0708" ||
    phoneNumber.substring(0, 4) == "0901" ||
    phoneNumber.substring(0, 4) == "0902" ||
    phoneNumber.substring(0, 4) == "0904" ||
    phoneNumber.substring(0, 4) == "0907" ||
    phoneNumber.substring(0, 4) == "0701"
  ) {
    console.log("phone number is airtel!");
    output.style.visibility = "visible";
    output.innerHTML = "phone number is airtel";
  } else if (
    phoneNumber.substring(0, 4) == "0803" ||
    phoneNumber.substring(0, 4) == "0816" ||
    phoneNumber.substring(0, 4) == "0703" ||
    phoneNumber.substring(0, 4) == "0706" ||
    phoneNumber.substring(0, 4) == "0813" ||
    phoneNumber.substring(0, 4) == "0810" ||
    phoneNumber.substring(0, 4) == "0814" ||
    phoneNumber.substring(0, 4) == "0903" ||
    phoneNumber.substring(0, 4) == "0906"
  ) {
    console.log("phone number is mtn!");
    output.style.visibility = "visible";
    output.innerHTML = "phone number is mtn";
  } else if (
    phoneNumber.substring(0, 4) == "0805" ||
    phoneNumber.substring(0, 4) == "0905" ||
    phoneNumber.substring(0, 4) == "0807" ||
    phoneNumber.substring(0, 4) == "0811" ||
    phoneNumber.substring(0, 4) == "0705" ||
    phoneNumber.substring(0, 4) == "0815"
  ) {
    console.log("phone number is glo!");
    output.style.visibility = "visible";
    output.innerHTML = "phone number is glo";
  } else if (
    phoneNumber.substring(0, 4) == "0909" ||
    phoneNumber.substring(0, 4) == "0908" ||
    phoneNumber.substring(0, 4) == "0818" ||
    phoneNumber.substring(0, 4) == "0809" ||
    phoneNumber.substring(0, 4) == "0817"
  ) {
    console.log("phone number is 9mobile!");
    output.style.visibility = "visible";
    output.innerHTML = "phone number is 9mobile";
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
