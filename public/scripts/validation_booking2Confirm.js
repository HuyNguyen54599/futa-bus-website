let allEmptySeats = [...document.querySelectorAll('.route-seat-item')];

let allRealSeats = removeNoneSeat(allEmptySeats);

let seatDisplay = document.querySelector('.confirm-seat-list');

let seatCollection = document.querySelector('.route-result-name');

let seatCost = document.querySelector('.route-result-cost-value');

async function activeCurrentSeats() {
    let currentSeats = await findCurrentSeatsChoosing(allRealSeats);
    let dataBooking = JSON.parse(window.localStorage.getItem('dataBooking'));

    // display all seat
    seatDisplay.innerHTML = currentSeats.map(seat => {
        seat.classList.add('seat-active');
        return `<span class="confirm-seat-item">${seat.querySelector('text').innerHTML}</span>`
    });

    // display all seat and total cost
    seatCollection.innerHTML = currentSeats.map(seat => {
        seatCost.innerHTML = `${dataBooking.totalCost}.000 <span>&#8363;</span>`;
        return `<span class="route-result-name-ticket">${seat.querySelector('text').innerHTML}</span>`
    });
}

activeCurrentSeats();

function removeNoneSeat(allSeats) {
    realSeats = allSeats.filter(seat => {
        return seat.querySelector('svg').style.display !== 'none';
    })

    return realSeats;
}

function findCurrentSeatsChoosing(seats) {
    let seatsChoosing = JSON.parse(window.localStorage.getItem('dataBooking')).seats;

    let attachSeats = seats.filter(seat => {
        if (isSeatsMatchData(seat, seatsChoosing)) return seat;
    });

    return attachSeats;
}

function isSeatsMatchData(seat, seatsData) {
    let seatMatch = undefined;

    for (let i = 0; i < seatsData.length; i++) {
        if (seat.querySelector('text').innerHTML === seatsData[i]) {
            seatMatch = seat;
            break;
        }
    }

    return seatMatch;
}