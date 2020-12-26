// getting elements

const result = document.querySelector('.result')
const buttons = document.querySelectorAll('.button')
const decimal = document.getElementById('decimal')
const mode = document.getElementById('mode') 
const calcultor = document.querySelector('.calculator')


console.log(result.style)

mode.addEventListener('click',function(){
    if(mode.checked){
        calcultor.style.backgroundColor = 'wheat'
        result.style.color = 'black'
    }
    else{
        calcultor.style.backgroundColor = 'black'
        result.style.color = 'white'
    }


})

function checkLastChar(value){
    lastChar = value.slice(-1)
    return Number.isNaN(parseInt(lastChar))
}



//on click events
buttons.forEach(function(button){
    button.addEventListener('click',function(){

        if(result.textContent.length>8){
            return location.reload()
        }

        // numbers
        if(button.classList.contains('number')){
            if(result.textContent==='0'){
                result.textContent = button.textContent
            }
            else{
                result.textContent += button.textContent               
            }
        }

        // clear
        else if(button.classList.contains('clear')){
            result.textContent = 0
            decimal.style.pointerEvents = 'auto'
        }

        // operators
        else if(button.classList.contains('operator') && !(button.classList.contains('equal'))){
            if(result.textContent==='0' || checkLastChar(result.textContent)){
                return 
            }
            result.textContent += button.textContent
            decimal.style.pointerEvents = 'auto'
        }

        // dot
        else if(button.classList.contains('decimal')){
            if(result.textContent==='0' || checkLastChar(result.textContent)){
                return
            }
            result.textContent += button.textContent
            decimal.style.pointerEvents = 'none'
        }
        
        else if(button.classList.contains('equal')){
            let chars = {'÷':'/','×':'*','−':'-'}
            ans = result.textContent.replace(/[÷×−]/g,m=>chars[m])
            result.textContent = Math.round((eval(ans) + Number.EPSILON) * 100) / 100
            !Number.isInteger(ans) ? decimal.style.pointerEvents = 'none' : false //check if is decimal or not
        }
    })

})





