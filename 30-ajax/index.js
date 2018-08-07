// XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function reqListener() {
  //debugger;
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET",
  "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages/"
);
oReq.send();

// `get` request using `fetch`
fetch("https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages/") //will execute an asynchronous request and return the request object wrapped in a promise
  .then(request => request.json()) //parse the json data from the response object. request.json() will return a promise
  .then(jsonData => console.log(jsonData)); // now that we have access to the actual json data we can console log the json response

// `post` request using `fetch`
// let's build the config object
const url =
  "https://fetch-message-in-the-bottle.herokuapp.com/api/v1/messages/";
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: {
      real_name: "AJAX Readme",
      message: "Just a test message"
    }
  })
};

fetch(url, config)
  .then(request => request.json()) //parse the json data from the response object. request.json() will return a promise
  .then(jsonData => console.log(jsonData)); // now that we have access to the actual json data we can console log the json response

// your `get` to anything
// paste your `get` fetch here

// your `post` to our message in the bottle
// paste your `post` fetch here
