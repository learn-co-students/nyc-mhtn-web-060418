// Free flowing functions
// const apiUrl = 'http://localhost:3000/gelati'
// const parseJson = function(response) {return response.json()}
// const generateJSONHeaders = function() {return {'Content-Type':'application/json'}}

// function index() {
//   fetch(apiUrl).then(parseJson).then(console.log)
// }

// function create(body) {
//   const postConfig = {
//     method:'POST',
//     headers: generateJSONHeaders(),
//     body:JSON.stringify(body)
//   }

//   fetch(apiUrl, postConfig).then(parseJson).then(console.log)
// }

// function update(id, body) {
//   const patchConfig = {
//     method: 'PATCH',
//     headers: generateJSONHeaders(),
//     body: JSON.stringify(body)
//   }

//   fetch(`${apiUrl}/${id}`, patchConfig).then(parseJson).then(console.log)
// }

// function nonReserveredDelete(id) {
//   fetch(`${apiUrl}/${id}`, { method: 'DELETE' }).then(parseJson).then(console.log)
// }

// function show(id) {
//   fetch(`${apiUrl}/${id}`).then(parseJson).then(console.log)
// }
//createIceCream({name:"IFEE Vanilla"})

// Object hard coded for restful API
// const networkAdapter = {
//   apiUrl:'http://localhost:3000/gelati',
//   parseJson: function (response) { return response.json() },
//   generateJSONHeaders: function () { return { 'Content-Type': 'application/json' } },

//   index: function index() {
//         fetch(this.apiUrl).then(this.parseJson).then(console.log)
//   },

//   create: function create(body) {
//     const postConfig = {
//       method: 'POST',
//       headers: generateJSONHeaders(),
//       body: JSON.stringify(body)
//     }

//       fetch(this.apiUrl, postConfig).then(this.parseJson).then(console.log)
//     },

//     update: function update(id, body) {
//       const patchConfig = {
//         method: 'PATCH',
//         headers: generateJSONHeaders(),
//         body: JSON.stringify(body)
//       }

//       fetch(`${this.apiUrl}/${id}`, patchConfig).then(this.parseJson).then(console.log)
//     },

//   nonReserveredDelete: function nonReserveredDelete(id) {
//     fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' }).then(this.parseJson).then(console.log)
//   },

//   show: function show(id) {
//     fetch(`${this.apiUrl}/${id}`).then(this.parseJson).then(console.log)
//   }
// }

function generateAdapter(apiUrl) {
  return {
    parseJson: function (response) { return response.json() },
    generateJSONHeaders: function () { return { 'Content-Type': 'application/json' } },

    index: function index() {
      fetch(apiUrl).then(this.parseJson).then(console.log)
    },

    create: function create(body) {
      const postConfig = {
        method: 'POST',
        headers: generateJSONHeaders(),
        body: JSON.stringify(body)
      }

      fetch(apiUrl, postConfig).then(this.parseJson).then(console.log)
    },

    update: function update(id, body) {
      const patchConfig = {
        method: 'PATCH',
        headers: generateJSONHeaders(),
        body: JSON.stringify(body)
      }

      fetch(`${apiUrl}/${id}`, patchConfig).then(this.parseJson).then(console.log)
    },

    nonReserveredDelete: function nonReserveredDelete(id) {
      fetch(`${apiUrl}/${id}`, { method: 'DELETE' }).then(this.parseJson).then(console.log)
    },

    show: function show(id) {
      fetch(`${apiUrl}/${id}`).then(this.parseJson).then(console.log)
    }
  }
}