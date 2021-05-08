//=============== SPRINT 3 ==================

const commentsListContainer = document.querySelector(".comments__list-container") 

const BANDSITE_API_KEY = 'afa006d1-abfd-4b8d-8f19-619e185a7684'
const BANDSITE_API_URL = "https://project-1-api.herokuapp.com"
const BANDSITE_COMMENTS_API = `https://project-1-api.herokuapp.com/comments?api_key=${BANDSITE_API_KEY}`

//get auth keys
axios
    .get(BANDSITE_API_URL+"/register")
    .then(bandsiteAPIKey => console.log("Bandsite API Key: " + bandsiteAPIKey.data.api_key))
    .catch(err => console.log(err))

//get comments from API
const getAPIComments = () => {
    return axios.get(`${BANDSITE_COMMENTS_API}`)
}

const diplayAPIDefaultComments = () => {
    return getAPIComments()
    .then( res => {
        diplayAPIComments(res.data)
    })
}      
diplayAPIDefaultComments()

//display API Comments
const diplayAPIComments = (APIdata) => {
    APIdata.sort( (a, b) => {
        if(a.timestamp < b.timestamp) {
            return 1
        }else return -1
    })
    APIdata.forEach((person) => {   
        addComment(person)
    });
}

const addComment = (comment) => {
    const date = new Date()

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
    listDate.innerText = unixToRelative(date, comment.timestamp)
    listComment.innerText = comment.comment
}

const clearElements = () => {
    commentsListContainer.innerHTML = ''         
}

//add comments using POST in axios
const form = () => {
    const commentForm = document.querySelector(".comments__form")
    const formInput = document.querySelector(".comments__form-input")
    const formComment = document.querySelector(".comments__form-textarea")

    commentForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const formInputValue = formInput.value
        const formCommentValue = formComment.value
        
        newComment = {
            name: formInputValue,
            comment: formCommentValue
        }

        axios({
            method: "post",
            url: BANDSITE_COMMENTS_API,
            data: newComment,
            header: {
                "Content-Type": "application/json",
            },
        })
        .then( () => {
            getAPIComments()
            .then( res => {
                clearElements()
                diplayAPIComments(res.data)
                console.log(res.data)
            });
        })
        .catch( err => console.log(err))
        
        commentForm.reset();
    })
}
form()

//convert unix time to relative 
const unixToRelative = (current, stamp) => {
    let msPerMinute = 60* 1000
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    let elapsed = current - stamp

    if ( elapsed < msPerMinute) {
        return Math.round((elapsed/1000) + 1) + " seconds ago"
    }
    else if ( elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + " minutes ago"
    }
    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }
    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }
    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
   }
}

