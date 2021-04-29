const comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]


//you can have two array in a for arrayOne[i] = arrrayTwo[i]
//loop though object using for in or map

const displayComment = (comment) => {
    const nameNodeList = document.querySelectorAll(".comments__list-name")
    const dateNodeList = document.querySelectorAll(".comments__list-date")
    const commentNodeList = document.querySelectorAll(".comments__list-comment")
    // console.log(nameNodeList) 
    // console.log(nameNodeList[0])
    // console.log(nameNodeList[0].innerText)
    // console.log(comment)
    // console.log(comment[0])
    // console.log(comment[0].name)

    // for (let i = 0; i < comment.length; i++) {
        //     nameNodeList[i].innerText = comment[i].name
        // }
    // comment.forEach( item => console.log(item.name, item.timestamp))
    nameNodeList.forEach((item, index) => {
        // console.log(comment[index].name)
        item.innerText = comment[index].name
    } ) 

    dateNodeList.forEach((item, index) => {
        item.innerText = comment[index].timestamp
    } ) 
    commentNodeList.forEach((item, index) => {
        item.innerText = comment[index].comment
    } )
}

// const addComments = () => {
//     const commentForm = document.querySelector(".comments__form")
//     const formInput = document.querySelector(".comments__form-input")
//     const formComment = document.querySelector(".comments__form-textarea")
//     const commentListContainer = document.querySelector(".comments__list-info-container")

//     commentForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const formInputValue = formInput.value
//         const formCommentValue = formComment.value

//         const commentNameElement = document.createElement("div")
//         commentNameElement.classList.add("comments__list-name")
//         commentNameElement.innerText = formInputValue
//         commentListContainer.appendChild(commentNameElement)
        
//         const commentNameElement = document.createElement("div")
//         commentNameElement.classList.add("comments__list-name")
//         commentNameElement.innerText = formInputValue
//         commentListContainer.appendChild(commentNameElement)

//     })
// }

displayComment(comments)
// addComments()
















// //geeting name from object
// let name = comments[0].name
// console.log(name)
// const main = document.querySelector("main")
// const section = document.createElement("section")
// const header = document.createElement("h2")
// const div = document.createElement("div")


// main.append(section)

// section.append(header)
// section.append(div)
// section.append(div)

// console.log(main)