const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const nameInput = document.getElementById('reservationInput');
const checkButton = document.getElementById('checkButton');
const resultArea = document.getElementById('result');

const checkReservation = function() {
  const name = nameInput.value;
  const reservation = reservations[name]; 

  if (reservation) {
    if (reservation.claimed === false) {
      resultArea.textContent = `Welcome, ${name}`;
    } else {
      resultArea.textContent = "Hmm, someone already claimed this reservation";
    }
  } else {
    resultArea.textContent = "You have no reservation";
  }
};

checkButton.addEventListener('click', checkReservation);