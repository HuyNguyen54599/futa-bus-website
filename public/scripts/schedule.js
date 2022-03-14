// handle double search filter
let departureField = document.querySelector('.search-departure');
let destinationField = document.querySelector('.search-destination');
let bodyTable = document.querySelector('.schedule-body');
let schedules = [...bodyTable.querySelectorAll('.schedule-item')];
let noneData = document.querySelector('.schedule-none-value');

let combineFilter = {
    departure: '',
    destination: ''
};

departureField.onkeyup = function () {
    combineFilter.departure = this.value;
    letSearch();
}
destinationField.onkeyup = function () {
    combineFilter.destination = this.value;
    letSearch();
}

function letSearch() {
    if (combineFilter.departure === '' && combineFilter.destination === '') {
        noneSearchData();
    }
    let start = findMatchDeparture(combineFilter);
    let end = findMatchDestination(combineFilter);
    reBuildScheduleAfterMatch(start, end);
}

function cleanString(str, last = -1) {
    if (last === -1) return str.slice(0, last).trim().toUpperCase();
    else return str.slice(0).trim().toUpperCase();
}

function noneSearchData() {
    bodyTable.classList.remove('schedule-none');
    schedules.forEach(element => {
        element.style.display = "block";
    })
}

function noneResult() {
    schedules.forEach(element => {
        element.style.display = "none";
    })
    bodyTable.classList.add('schedule-none');
}

function findMatchDeparture(combineFilter) {
    let match = schedules.filter(current => {
        let currentText = current.querySelector('.schedule-d-departure').innerHTML;
        let checkFilter = cleanString(currentText).indexOf(cleanString(combineFilter.departure, 0));
        console.log(currentText, checkFilter);
        return (cleanString(combineFilter.departure, 0) != '' && checkFilter >= 0);
    });
    return match;
}

function findMatchDestination(combineFilter) {
    let match = schedules.filter(current => {
        let destGroupArr = [...current.querySelectorAll('.schedule-item-d-destination')];
        let findInItem = destGroupArr.filter(item => {
            let currentText = item.innerHTML;
            let checkFilter = cleanString(currentText, 0).indexOf(cleanString(combineFilter.destination, 0));
            return (cleanString(combineFilter.destination, 0) != '' && checkFilter >= 0);
        });
        console.log(findInItem);
        return findInItem.length;
    });
    return match;
}

function reBuildScheduleAfterMatch(start, end) {
    console.log(start, end);
    if (start.length === 0 && end.length === 0 && (combineFilter.departure !== '' || combineFilter.destination !== '')) {
        noneResult();
    } else if (combineFilter.departure === '' && combineFilter.destination === '') {
        noneSearchData();
    }
    start.forEach(element => {
        element.style.backgroundColor = "red";
    });
    end.forEach(element => {
        element.style.backgroundColor = "red";
    });
}

function combineResult(start, end) {

}