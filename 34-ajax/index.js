document.addEventListener('DOMContentLoaded',function(event) {
    const tweetsContainer = document.getElementById('tweets-container')
    const newTweetForm = document.getElementById('new-tweet-form')
    const newTweetBodyInput = document.getElementById('tweet-input')
    const apiUrl = 'http://localhost:3000/tweets'
    function index() {
        return fetch(apiUrl).then(response => response.json())
    }

    function postNewTweet(body) {
        const postConfig = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        }
        return fetch(apiUrl, postConfig).then(response => response.json())
    }

    function deleteTweet(id) {
        const deleteRequestUrl = `${apiUrl}/${id}`
        const deleteConfig = { method: 'DELETE' }
        return fetch(deleteRequestUrl, deleteConfig).then(response => response.json()).then(data => console.log(data))
    }

    // Show tweets when page loads
    // 1. fetch all tweets
    // 2. handle the response
    // 3. Iterate over the array of tweets and generate an LI for each tweet + append to page
    let data = 'Initial data'
    index().then(responseData => {renderTweets(responseData)})

    function renderTweets(tweetsObjs) {
        // const tweetsHTML = tweetsObjs.map(tweetObj => `<li>${tweetObj.body}</li>` ).join('')
        // tweetsContainer.innerHTML = tweetsHTML
        // Now that we have a function to add a single tweets we can leverage this function here
        const tweetsHTML = tweetsObjs.map(data => addTweetToPage(data) )


    }

    // Create new tweet
    // 1. Form to collect the information we need for the payload
    // 2. A way to know when all the information is available
    // 2a. Collect all the information
    // 3. A way to generate a post request
    // 4. Handle the request (using the data returned from the server to manipulate the dom)
    newTweetForm.addEventListener('submit',function(event) {
        event.preventDefault()
        const tweetBody = newTweetBodyInput.value
        const tweetPostBody = { body: tweetBody}
        postNewTweet(tweetPostBody).then(addTweetToPage)
    })

    function addTweetToPage(tweetObj) {
        const tweetHTML = `<li data-tweet-id="${tweetObj.id}">${tweetObj.body}</li>`
        tweetsContainer.innerHTML += tweetHTML
    }

    // Delete tweet
    // 1. Know when and what tweet to delete
    // 2. generate the request
    // 3. handle the response
    tweetsContainer.addEventListener('click',function(event) {
        if (event.target.tagName === 'LI') {
            const idOfTweetToDelete = event.target.dataset.tweetId
            // pessimist version
            // deleteTweet(idOfTweetToDelete).then(() => event.target.remove())
            // optimistic version
            event.target.remove()
            deleteTweet(idOfTweetToDelete)
        }
    })
})