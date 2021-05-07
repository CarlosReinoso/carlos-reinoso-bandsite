//make section element in main
const main = document.querySelector("main")
const section = document.createElement("section")
section.classList.add("shows")
main.appendChild(section)

//add header
const header = document.createElement("h2")
header.classList.add("shows__header")
header.innerText = "Shows"
section.appendChild(header)

//shows container
const showsContainer = document.createElement("div")
showsContainer.classList.add("shows__container")
section.appendChild(showsContainer)

//tablet shows tabel header
const displayHeader = () => {
    const tabelHeader = ["DATES", "VENUE", "LOCATION"]

    const showsTabelHeader = document.createElement("div")
    showsTabelHeader.classList.add("shows__tabel-header")
    showsContainer.appendChild(showsTabelHeader)

    tabelHeader.forEach( header => {
        const showsTabelHeading = document.createElement("div")
        showsTabelHeading.classList.add("shows__tabel-heading")
        showsTabelHeading.innerText = header
        showsTabelHeader.appendChild(showsTabelHeading)
    })
}
displayHeader()



//console location on buy button click
const consoleVenue = () => {
    const buyButtons = document.querySelectorAll(".shows__item-button")
    buyButtons.forEach( (button, index) => {
        button.addEventListener('click', () => {
            const venues = document.querySelectorAll(".shows__item-venue")
            console.log(venues[index].innerText)
        })
    })
}
consoleVenue()


//================== SPRINT 3 ====================

const BANDSITE_API_KEY = '076e5480-f5ec-4ec2-a1d9-112f1b6fbc03'
const BANDSITE_API_URL = "https://project-1-api.herokuapp.com"

const BANDSITE_SHOWDATES_API = `https://project-1-api.herokuapp.com/showdates?api_key=${BANDSITE_API_KEY}`

//get showdates from API
const getShowDates = axios.get(`${BANDSITE_SHOWDATES_API}`)
getShowDates
    .then( bandsiteAPIData => {
        diplayAPIShowdates(bandsiteAPIData.data)
    })
    .catch(err => console.log(err))

//display shows from API
const diplayAPIShowdates = (APIdata) => {
    APIdata.forEach( show => {
        //shows item
        const showsItem = document.createElement("div")
        showsItem.classList.add("shows__item")
        showsContainer.appendChild(showsItem)

        //show date label
        const showDateLabel = document.createElement("label")
        showDateLabel.classList.add("shows__label", "show__item", "show__item-label")
        showDateLabel.innerText = "DATE"
        showsItem.appendChild(showDateLabel)

        //show date
        const showDate = document.createElement("div")
        showDate.classList.add("shows__item-date", "show__item")
        showDate.innerText = unixToDate(show.date)
        showsItem.appendChild(showDate)
        
        //show venue label
        const showVenueLabel = document.createElement("label")
        showVenueLabel.classList.add("shows__label", "show__item", "show__item-label")
        showVenueLabel.innerText = "VENUE"
        showsItem.appendChild(showVenueLabel)

        //show venue
        const showVenue = document.createElement("div")
        showVenue.classList.add("shows__item-venue", "show__item")
        showVenue.innerText = show.place
        showsItem.appendChild(showVenue)
        
        //show location label
        const showLocationLabel = document.createElement("label")
        showLocationLabel.classList.add("shows__label", "show__item", "show__item-label")
        showLocationLabel.innerText = "LOCATION"
        showsItem.appendChild(showLocationLabel)

        //show location
        const showLocation = document.createElement("div")
        showLocation.classList.add("shows__item-location", "show__item")
        showLocation.innerText = show.location
        showsItem.appendChild(showLocation)

        //button
        const showButton = document.createElement("button")
        showButton.classList.add("shows__item-button", "show__item")
        showButton.innerText = "BUY TICKETS"
        showsItem.appendChild(showButton)
        
        //divider
        const showDivider = document.createElement("hr")
        showDivider.classList.add("shows__divider")
        showsItem.appendChild(showDivider)
    })
}

//unix time to date
const unixToDate = (timestamp) => {
    let a = new Date(timestamp*1000);

    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let day = days[a.getDay()]
    let date = a.getDate();
    let month = months[a.getMonth()];

    let time = `${day} ${month} ${date} ${2021}`
    return time;
}


