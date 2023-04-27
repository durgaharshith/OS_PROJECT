// JavaScript code
var carTypeDropdown = document.getElementById('carType');
var carCompanyDropdown = document.getElementById('carCompany');

// Define car companies for each car type
var carCompanies = {
    sedan: ['Indigo', 'Ethios', 'Verna'],
    suv: ['Fortuner', 'Innova', 'Scorpio'],
    hatchback: ['Figo', 'Ritz', 'Brio']
};

// Populate car company dropdown based on selected car type
carTypeDropdown.addEventListener('change', function () {
    var selectedCarType = carTypeDropdown.value;
    carCompanyDropdown.disabled = false; // enable car company dropdown
    carCompanyDropdown.innerHTML = ''; // clear car company dropdown

    // Populate car company dropdown with options for selected car type
    for (var i = 0; i < carCompanies[selectedCarType].length; i++) {
        var option = document.createElement('option');
        option.value = carCompanies[selectedCarType][i];
        option.textContent = carCompanies[selectedCarType][i];
        carCompanyDropdown.appendChild(option);
    }
});

// Submit form data
document.getElementById('carRentalForm').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission

    // Get form data
    var name = document.getElementById('name').value;
    var aadhar = document.getElementById('aadhar').value;
    var purpose = document.getElementById('purpose').value;
    var carType = document.getElementById('carType').value;
    var carCompany = document.getElementById('carCompany').value;
    var days = document.getElementById('days').value;

    // Save form data to backend or perform other actions
    // You can send the data to a server using AJAX or perform any other desired action with the data

    // Display submitted data to user
    alert('Thank you for submitting the form!\n\n' +
        'Name: ' + name + '\n' +
        'Aadhar Number: ' + aadhar + '\n' +
        'Purpose: ' + purpose + '\n' +
        'Car Type: ' + carType + '\n' +
        'Car Company: ' + carCompany + '\n' +
        'Number of Days: ' + days);
});