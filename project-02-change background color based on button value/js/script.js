//Changing background color based on button's color

const body = document.querySelector('body')
body.style.backgroundColor = 'white'


$('.btn').click(function(){
    let color = this.style.backgroundColor;
    body.style.backgroundColor = color;
})

