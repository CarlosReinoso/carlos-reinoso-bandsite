const commentsListContainer = document.querySelector(".comments__list-container") 

const clearElements = () => {
    commentsListContainer.innerHTML = ''         
}


//user access page then axios retrieves comments
    //default
    //other users comments
//display all comments using DOM
//user add new comment 
//do axios post
//add new comment visually with dom, 
//  you dont need to retirve everytime


//to get comment first, put it in an array and then use unshift

//=============== SPRINT 3 ==================
const BANDSITE_API_KEY = '61bde53c-a163-42df-a179-4a3ee68c3cf0'
const BANDSITE_API_URL = "https://project-1-api.herokuapp.com"

//type in the url you want, key goes at the end
const BANDSITE_COMMENTS_API = `https://project-1-api.herokuapp.com/comments?api_key=${BANDSITE_API_KEY}`

//get auth keys
const getKey = axios.get(BANDSITE_API_URL+"/register")
getKey
    .then(bandsiteAPIKey => console.log("Bandsite API Key: " + bandsiteAPIKey.data.api_key))
    .catch(err => console.log(err))

//get comments from API
const getComments = axios.get(`${BANDSITE_COMMENTS_API}`)
getComments
    .then( bandsiteAPIData => {
        diplayAPIComments(bandsiteAPIData.data)
    })
    .catch(err => console.log(err))

//add comments using POST in axios using header

const addAPIComments = () => {
    const commentForm = document.querySelector(".comments__form")
    const formInput = document.querySelector(".comments__form-input")
    const formComment = document.querySelector(".comments__form-textarea")

    commentForm.addEventListener('submit', event => {
        event.preventDefault();
        
        
        // let newComment = {
        //     name: "",
        //     comment: ""
        // }
       
        // clearElements()
        
        //input values from user
        const formInputValue = formInput.value
        const formCommentValue = formComment.value
        
        // const newCommentData = {
        //     name: formInputValue,
        //     timestamp: formatedDate,
        //     comment: formCommentValue
        // }
        // defaultComments.unshift(newCommentData)

        // if (firstComment) {
        //     clearElements()
        //     firstComment = false
        // }

        newComment = {
            name: formInputValue,
            comment: formCommentValue
        }
        console.log(newComment)



        axios({
            method: "post",
            url: BANDSITE_COMMENTS_API,
            data: newComment,
            header: {
                "Content-Type": "application/json",
            },
        }).then((response)=> {

            console.log(response);
        })
        
        // console.log(addAPIComments(newComment))
        commentForm.reset();
        addCommentToDOM(newComment)
    })




    // let newComment = {
    //     name : "testName",
    //     comment: "testcomment"
    // }
    
    // axios({
    //     method: "post",
    //     url: BANDSITE_COMMENTS_API,
    //     data: newComment,
    //     header: {
    //         "Content-Type": "application/json",
    //     },
    // }).then((response)=> console.log(response))
}

addAPIComments()



// axios.post(`${BANDSITE_COMMENTS_API}`, {
//     name : formInputValue,
//     comment: formCommentValue
//     })
//     .then((response)=> console.log(response))
//     .catch(err => console.log(err))


//display API Comments
const diplayAPIComments = (APIdata) => {
    APIdata.forEach((person) => {
        addCommentToDOM(person)
    });
}

const addCommentToDOM = (comment) => {
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
        listName.innerText = comment.name
        listDate.innerText = comment.timestamp
        listComment.innerText = comment.comment
}
