//Changing Background Color

const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#16697a','#db6400','#ffa62b','#f8f1f1']

body.style.backgroundColor = '#f1f6f9'
button.addEventListener('click',changeBackground)

var colorIndex = 0
function changeBackground(){
    if (colorIndex==parseInt(colors.length)){
        colorIndex = 0
    }
    else{
        body.style.backgroundColor=colors[colorIndex]
        colorIndex++
    }
}

