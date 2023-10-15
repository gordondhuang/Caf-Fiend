const T = require("tesseract.js")

T.recognize('./redBullLogo.jpg', 'eng', {})
    .then(out => {
        console.log((out.data.text).replace("\n", " "))
    })