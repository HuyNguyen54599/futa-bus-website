// active route schedule
let routeScheduleTitles = [...document.querySelectorAll('.route-schedule-title')];
let routeScheduleLists = [...document.querySelectorAll('.route-schedule-list')];

routeScheduleTitles.forEach((item, index) => {
    item.onclick = () => {
        routeScheduleLists[index].classList.toggle('route-schedule-active');
    }
})

// active route choose
let routeItems = [...document.querySelectorAll('.route-item')];
let routeButtons = [...document.querySelectorAll('.route-button input[type="checkbox"]')];

routeButtons.forEach((item, index) => {
    item.onclick = (e) => {
        onlyOneCheckedActive(routeButtons, item);
        if (item.checked) {
            routeItems[index].classList.add('route-choosing')
        } else {
            routeItems[index].classList.remove('route-choosing')
        }
    }
})

function onlyOneCheckedActive(allCheckBox, checkbox) {
    allCheckBox.forEach((item, index) => {
        if (item !== checkbox) {
            item.checked = false;
            routeItems[index].classList.remove('route-choosing');
        }
        routeScheduleLists[index].classList.remove('route-schedule-active');
    })
}