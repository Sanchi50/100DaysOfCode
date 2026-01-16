/**For the given HTML and CSS for the website implement your Javascript to build a working Seat Booking App.



Requirements:


1- Using the given MovieList Array update the dropdown menu and append it to the select element with class "selectMovie".



2- Each option created should have an event attached to it.



3- The event should do the following operation:-

update the movie name and movie Price on the elements with the id "movieName" and "moviePrice" respectively

change the total Price of the element with the id "totalPrice" according to the price of the Movie.



4- There should be a default Movie name as "Flash" and a movie Price as "7" which should be updated on selecting other options.



5- For the Seats:-

You can access all seats using "#seatCont .seat" in the querySelectorAll.
Some seats are already occupied and have class "seat occupied".
Add event listeners to seats other than the occupied ones.


6- The event listener should add the following functionalities:-

If the seat is not already selected select the seat and add "selected" to the classList of the seat.
If the seat is selected deselect the seat and remove the "selected" from the classList.

-The price should be updated based on each selection of seat.

-The seat selected should be added to the element with Id "selectedSeatsHolder" to show how many seats have been selected.



7- The continue button should have an event listener which should be able to perform:-

If there is no seat selected then the alert the user "Oops no seat Selected".
If there are some selected seats then alert the user "Yayy! Your Seats have been booked".
For all the seats that are selected remove "Selected" from the classList and add "occupied" to it.
Update the Price and set it to 0.
Update the seatHolderSection to its default value which is a span with textContent "No seat Selected".


8- For the cancel button add the event listener which should be able to perform the following operation:-

should be able to remove the "selected" from the classList of the selected seats.
Update the Price and set it to 0.
Update the seatHolderSection to its default value which is a span with textContent "No seat Selected".


Expected Output:



Test Cases:-


1- Check the seat Event listener-

Add event listener 'click' to all the seats with class 'seat' that comes under class 'seatCont'. By clicking on seats, add "selected" to the classList of the seat. Also, store all the added classes in a separate empty array. Inside this array do all the operations.

The seats with class 'seat occupied' should not add "selected" to the classList of the selected seats. Should remove class 'selected' from the classList of selected seats on deselecting the seats.



2- Check the Price Section-

Update the price of the selected seats under the id 'totalPrice'. The initial price should be 0. The price should be equal to no. of seats * movie price. For Example: - For the movie Flash, if we select one seat then the price should be 7 and if we select a second seat then the price should be 14.


3- Check the SelectedSeat Section-

Create a function that checks on the array that we used earlier for adding and removing the class 'selected' in the first test case. With every click of the seats the number of seats should be updated in the section with id 'selectedSeatsHolder'. If the array is empty means there is no class 'selected' in the ArrayList then the message 'NO SEAT SELECTED' should display.
<html>
  <head>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <section id="section">
      <div class="container">
        <!-- leftCont -->
        <div class="leftCont">
          <div class="leftMainCont">

* {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .leftCont {
    width: 100%;
    background-color: aliceblue;
  }

//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
 */
//Create you project here from scratch

// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

// DOM
const selectMovie = document.getElementById("selectMovie");
const movieNameEl = document.getElementById("movieName");
const moviePriceEl = document.getElementById("moviePrice");
const totalPriceEl = document.getElementById("totalPrice");
const seats = document.querySelectorAll("#seatCont .seat");
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
const numberOfSeatEl = document.getElementById("numberOfSeat");
const continueBtn = document.getElementById("proceedBtn");
const cancelBtn = document.getElementById("cancelBtn");

let selectedSeats = [];
let currentMoviePrice = 7;

// Populate dropdown
moviesList.forEach((movie, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = movie.movieName;
  selectMovie.appendChild(option);

  // individual event (as per spec)
  option.addEventListener("click", () => {
    movieNameEl.textContent = movie.movieName;
    moviePriceEl.textContent = `$ ${movie.price}`;
    currentMoviePrice = movie.price;
    updateTotalPrice();
  });
});

// Defaults
movieNameEl.textContent = "Flash";
moviePriceEl.textContent = "$ 7";
totalPriceEl.textContent = "$ 0";
numberOfSeatEl.textContent = "0";
selectedSeatsHolder.innerHTML = `<span class="noSelected">NO SEAT SELECTED</span>`;

// Seat click
seats.forEach((seat) => {
  if (!seat.classList.contains("occupied")) {
    seat.addEventListener("click", () => {
      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter((s) => s !== seat);
      } else {
        seat.classList.add("selected");
        selectedSeats.push(seat);
      }

      updateSelectedSeatsUI();
      updateTotalPrice();
    });
  }
});

function updateTotalPrice() {
  const total = selectedSeats.length * currentMoviePrice;
  totalPriceEl.textContent = `$ ${total}`;
  numberOfSeatEl.textContent = selectedSeats.length;
}

function updateSelectedSeatsUI() {
  selectedSeatsHolder.innerHTML = "";

  if (selectedSeats.length === 0) {
    selectedSeatsHolder.innerHTML = `<span class="noSelected">NO SEAT SELECTED</span>`;
  } else {
    selectedSeats.forEach(() => {
      const div = document.createElement("div");
      div.className = "selectedSeat";
      div.textContent = "Seat";
      selectedSeatsHolder.appendChild(div);
    });
  }
}

// Continue
continueBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Oops no seat Selected");
    return;
  }

  alert("Yayy! Your Seats have been booked");

  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("occupied");
  });

  selectedSeats = [];
  totalPriceEl.textContent = "$ 0";
  numberOfSeatEl.textContent = "0";
  selectedSeatsHolder.innerHTML = `<span class="noSelected">NO SEAT SELECTED</span>`;
});

// Cancel
cancelBtn.addEventListener("click", () => {
  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
  });

  selectedSeats = [];
  totalPriceEl.textContent = "$ 0";
  numberOfSeatEl.textContent = "0";
  selectedSeatsHolder.innerHTML = `<span class="noSelected">NO SEAT SELECTED</span>`;
});
