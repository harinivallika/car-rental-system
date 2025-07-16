let users = [];
let cars = [
  { id: 1, brand: "Toyota", model: "Corolla", rate: 50 },
  { id: 2, brand: "Honda", model: "Civic", rate: 60 },
  { id: 3, brand: "Ford", model: "Mustang", rate: 100 }
];

function register() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  users.push({ name, email, password });
  alert("Registration Successful!");
  window.location.href = "index2.html"; // go to login page
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert("Login Successful!");
    window.location.href = "index3.html"; // go to car listing page
  }else {
    alert("login sucessfull,click on book option to book a car");
  }
}

function displayCars() {
  const carList = document.getElementById("carList");
  carList.innerHTML = "";

  cars.forEach(car => {
    const li = document.createElement("li");
    li.textContent = `${car.id}: ${car.brand} ${car.model} - $${car.rate}/day`;
    carList.appendChild(li);
  });
}

function rentCar() {
  const carId = document.getElementById("carId").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (carId && startDate && endDate) {
    alert(`Car ${carId} booked from ${startDate} to ${endDate}`);
  } else {
    alert("Please fill all fields.");
  }
}

// Display cars automatically if on index3.html
window.onload = () => {
  if (document.getElementById("carList")) {
    displayCars();
  }
};