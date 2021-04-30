//shows header
//array: dates, venue, location
//button: console location

//make section in main
const main = document.querySelector("main")
const section = document.createElement("section")
section.classList.add("shows")
main.appendChild(section)

//add header
const header = document.createElement("h2")
header.classList.add("shows__header")
header.innerText = "Shows"
section.appendChild(header)

//tablet shows tabel header
const displayHeader = () => {
    const tabelHeader = ["DATES", "VENUE", "LOCATION"]

    const showsTabelHeader = document.createElement("div")
    showsTabelHeader.classList.add("shows__tabel-header")
    section.appendChild(showsTabelHeader)

    tabelHeader.forEach( header => {
        const showsTabelHeading = document.createElement("div")
        showsTabelHeading.classList.add("shows__tabel-heading")
        showsTabelHeading.innerText = header
        showsTabelHeader.appendChild(showsTabelHeading)
    })
}
displayHeader()

//display shows
const showsDetails = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021 ",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
]

//add shows html and css via loop
//shows container
const showsContainer = document.createElement("div")
showsContainer.classList.add("shows__container")
section.appendChild(showsContainer)

const displayShows = () => {
    showsDetails.forEach( show => {
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
        showDate.innerText = show.date
        showsItem.appendChild(showDate)
        
        //show venue label
        const showVenueLabel = document.createElement("label")
        showVenueLabel.classList.add("shows__label", "show__item", "show__item-label")
        showVenueLabel.innerText = "VENUE"
        showsItem.appendChild(showVenueLabel)

        //show venue
        const showVenue = document.createElement("div")
        showVenue.classList.add("shows__item-venue", "show__item")
        showVenue.innerText = show.venue
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
displayShows()