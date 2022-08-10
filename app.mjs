function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  const form = document.querySelector('form');
  const input = document.getElementById("input");
  const phoneNumber = input.value;
  const output = document.getElementById("output");

form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

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
    const logo = document.createElement("img");
    logo.src = "img/airtel.png";
    logo.height = 50;
    logo.width = 50;
    logo.style.backgroundColor = "#c8d8e4";
    output.replaceChildren(logo);
    output.style.visibility = "visible";
  } else if (
    phoneNumber.substring(0, 4) == "0803" ||
    phoneNumber.substring(0, 4) == "0816" ||
    phoneNumber.substring(0, 4) == "0703" ||
    phoneNumber.substring(0, 4) == "0706" ||
    phoneNumber.substring(0, 4) == "0813" ||
    phoneNumber.substring(0, 4) == "0810" ||
    phoneNumber.substring(0, 4) == "0814" ||
    phoneNumber.substring(0, 4) == "0903" ||
    phoneNumber.substring(0, 4) == "0806" ||
    phoneNumber.substring(0, 4) == "0906"
  ) {
    const logo = document.createElement("img");
    logo.src = "img/mtn.png";
    logo.height = 50;
    logo.width = 50;
    logo.style.backgroundColor = "#c8d8e4";
    output.replaceChildren(logo);
    output.style.visibility = "visible";
  } else if (
    phoneNumber.substring(0, 4) == "0805" ||
    phoneNumber.substring(0, 4) == "0905" ||
    phoneNumber.substring(0, 4) == "0807" ||
    phoneNumber.substring(0, 4) == "0811" ||
    phoneNumber.substring(0, 4) == "0705" ||
    phoneNumber.substring(0, 4) == "0815"
  ) {
    const logo = document.createElement("img");
    logo.src = "img/glo.png";
    logo.height = 50;
    logo.width = 50;
    logo.style.backgroundColor = "#c8d8e4";
    output.replaceChildren(logo);
    output.style.visibility = "visible";
  } else if (
    phoneNumber.substring(0, 4) == "0909" ||
    phoneNumber.substring(0, 4) == "0908" ||
    phoneNumber.substring(0, 4) == "0818" ||
    phoneNumber.substring(0, 4) == "0809" ||
    phoneNumber.substring(0, 4) == "0817"
  ) {
    const logo = document.createElement("img");
    logo.src = "img/etisalat.png";
    logo.height = 50;
    logo.width = 50;
    logo.style.backgroundColor = "#c8d8e4";
    output.replaceChildren(logo);
    output.style.visibility = "visible";
  }

  const numbers = [
    "0802",
    "0808",
    "0812",
    "0708",
    "0901",
    "0902",
    "0904",
    "0907",
    "0701",
    "0803",
    "0816",
    "0703",
    "0706",
    "0813",
    "0810",
    "0814",
    "0903",
    "0906",
    "0805",
    "0905",
    "0807",
    "0811",
    "0705",
    "0815",
    "0909",
    "0908",
    "0818",
    "0809",
    "0817",
    "0806",
  ];
  const numberList = document.getElementById("list");

  //sort numbers in ascending order
  numbers.sort();

  function loadNumber(data, element) {
    if (data) {
      element.innerHTML = "";
      let innerElement = "";
      data.forEach((number) => {
        innerElement += `<li>${number}</li>`;
      });

      element.innerHTML = innerElement;
      element.style.visibility = "visible";
    }
  }

  function filterNumber(data, searchText) {
    return data.filter((x) => x.startsWith(searchText));
  }

  input.addEventListener("input", function () {
    
    const filteredNumber = filterNumber(numbers, phoneNumber);
    loadNumber(filteredNumber, numberList);
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
