const container = document.getElementById('container')

// document.create approach
// const header = document.createElement('H1')
// header.innerText="elevatorGram"
// container.appendChild(header)
// images.forEach( imgSrcStr => {
//     // 1. create img element
//     const img = document.createElement('IMG')
//     // 2. update element to point src attribute to imgSrcStr
//     img.src = imgSrcStr
//     // 3. append img element to page
//     container.appendChild(img)
// } )

// strings approach
const header = '<h1>elevatorGram</h1>'
container.innerHTML += header
images.forEach( imgSrcStr => {
    // 1. create img element
    const img = `<img src='${imgSrcStr}'>`
    // 3. append img element to page
    container.innerHTML += img
} )