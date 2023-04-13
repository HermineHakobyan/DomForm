function showInfo() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let  location = document.getElementById("location").value;
    let city = document.getElementById("city").value;
    let resultField = document.getElementById("result");
    resultField.value = "Անուն: " + name + " \nԱզգանուն: " + surname + " \nՄարզ: " + location + ", " + city;
  }



//   let names = [];
//       let surnames = [];

//       // Function to add name and surname inputs
//       function addName() {
//         let nameInput = document.createElement("input");
//         nameInput.type = "text";
//         nameInput.className = "name";
//         nameInput.placeholder = "Name";
//         document.getElementById("name-section").appendChild(nameInput);

//         let surnameInput = document.createElement("input");
//         surnameInput.type = "text";
//         surnameInput.className = "surname";
//         surnameInput.placeholder = "Surname";
//         document.getElementById("name-section").appendChild(surnameInput);

//         let addButton = document.createElement("button");
//         addButton.innerHTML = "Add Name";
//         addButton.onclick = addName;
//         document.getElementById("name-section").appendChild(addButton);

//         names.push(nameInput);
//         surnames.push(surnameInput);
//       }

//       // Function to display name, surname, location and city in new window
//       function showInfo() {
//         let country = document.getElementById("country").value;
//         let city = document.getElementById("city").value;
//         let namesAndSurnames = "";

//         for (var i = 0; i < names.length; i++) {
//           let name = names[i].value;
//           let surname = surnames[i].value;
//           let fullName = name + " " + surname;
//           namesAndSurnames += "<p>Name: " + name + "</p><p>Surname: " + surname + "</p>";
//         }

//         window.open("", "_blank").document.write("<h1>Your information:</h1>" + namesAndSurnames + "<p>Location: " + city + ", " + country + "</p>");
    
//       }