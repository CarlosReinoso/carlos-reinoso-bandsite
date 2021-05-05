const defaultComments = [
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

const addedComments = [];
let firstComment = true;

const commentsListContainer = document.querySelector(".comments__list-container") 


const displayComment = (arr) => {
    arr.forEach((person) => {
        //create divs with classes
        const commentsListContainer = document.querySelector(".comments__list-container") 

        const listItem = document.createElement("div")
        listItem.classList.add("comments__list-item")

        const listAvatarContainer = document.createElement("div")
        listAvatarContainer.classList.add("comments__list-avatar-container")

        const listUserAvatar = document.createElement("div")
        listUserAvatar.classList.add("comments__list-user-avatar")

        const listInfoContainer = document.createElement("div")
        listInfoContainer.classList.add("comments__list-info-container")

        const listInfo = document.createElement("div")
        listInfo.classList.add("comments__list-info")

        const listName = document.createElement("div")
        listName.classList.add("comments__list-name")

        const listDate = document.createElement("div")
        listDate.classList.add("comments__list-date")

        const listComment = document.createElement("div")
        listComment.classList.add("comments__list-comment")

        //append layers of divs
        commentsListContainer.appendChild(listItem)
            listItem.appendChild(listAvatarContainer)
                listAvatarContainer.appendChild(listUserAvatar)
            listItem.appendChild(listInfoContainer)
                listInfoContainer.appendChild(listInfo)
                    listInfo.appendChild(listName)
                    listInfo.appendChild(listDate)
            listInfoContainer.appendChild(listComment)
               
        //add array data to div      
        listName.innerText = person.name
        listDate.innerText = person.timestamp
        listComment.innerText = person.comment
    });
}

const addComments = () => {
    const commentForm = document.querySelector(".comments__form")
    const formInput = document.querySelector(".comments__form-input")
    const formComment = document.querySelector(".comments__form-textarea")


    commentForm.addEventListener('submit', event => {
        //input values from user
        const formInputValue = formInput.value
        const date = new Date()
        const formatedDate = new Intl.DateTimeFormat('en-US').format(date)
        const formCommentValue = formComment.value
        
        const newCommentData = {
            name: formInputValue,
            timestamp: formatedDate,
            comment: formCommentValue
        }
        addedComments.unshift(newCommentData)

        if (firstComment) {
            clearElements()
            firstComment = false
        }
        
        event.preventDefault();
        commentForm.reset();
        displayNewComments();
    })
}


const displayNewComments = () => {
        clearElements()

        //create divs with classes
        addedComments.forEach((person) => {
            const commentsListContainer = document.querySelector(".comments__list-container") 

            const listItem = document.createElement("div")
            listItem.classList.add("comments__list-item")

            const listAvatarContainer = document.createElement("div")
            listAvatarContainer.classList.add("comments__list-avatar-container")

            const listUserAvatar = document.createElement("div")
            listUserAvatar.classList.add("comments__list-user-avatar")

            const listInfoContainer = document.createElement("div")
            listInfoContainer.classList.add("comments__list-info-container")

            const listInfo = document.createElement("div")
            listInfo.classList.add("comments__list-info")

            const listName = document.createElement("div")
            listName.classList.add("comments__list-name")

            const listDate = document.createElement("div")
            listDate.classList.add("comments__list-date")

            const listComment = document.createElement("div")
            listComment.classList.add("comments__list-comment")

            //append layers of divs
            commentsListContainer.appendChild(listItem)
                listItem.appendChild(listAvatarContainer)
                    listAvatarContainer.appendChild(listUserAvatar)
                listItem.appendChild(listInfoContainer)
                    listInfoContainer.appendChild(listInfo)
                        listInfo.appendChild(listName)
                        listInfo.appendChild(listDate)
                listInfoContainer.appendChild(listComment)
                
                
            //add array data to div      
            listName.innerText = person.name
            listDate.innerText = person.timestamp
            listComment.innerText = person.comment
        });
}

const clearElements = () => {
    commentsListContainer.innerHTML = ''         
}

//call functions
displayComment(defaultComments)
addComments()
