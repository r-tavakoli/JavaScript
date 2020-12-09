// Select the elements
const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')
const weekday = document.getElementById('weekday')
const imgHeader = document.querySelector('.header')

// Classes names
const check = "fa-check-circle"
const uncheck = "fa-circle-thin"
const lineThrough = "lineThrough"

// today date
const options = {year:'numeric',month:'2-digit',day:'2-digit'}
const weekdayOptions = {weekday:'long'}
const today = new Date()
dateElement.innerHTML = today.toLocaleDateString("fa-IR",options).split('/').join('-')
const weekdayName = today.toLocaleDateString("fa-IR",weekdayOptions)

// change color of weekday if it is friday
if(weekdayName === 'جمعه'){
    weekday.innerHTML = weekdayName
    weekday.style.color = 'Brown'
}else{
    weekday.innerHTML = weekdayName    
}

// variables
let listArray=[],id=0

// get items from local storage
let data = localStorage.getItem('task')

// checking if localstorge is empty or not
if(data){
    listArray = JSON.parse(data)
    id = listArray.length
    loadList(listArray)
}else{
    listArray = []
    id=0
}

// load list from local storage
function loadList(array){
    array.forEach(function(item){
        addToDO(item.name,item.id,item.done,item.deleted)
    })
}


// add items + back quote
function addToDO(task,id,done,deleted){

    if(deleted){return}


    const isDone = done ? check : uncheck
    const line = done ? lineThrough : ''


    const item = ` 
    <li class="item">
    <i class="fa ${isDone} co" job="complete" id="${id}"></i>
    <p class="text ${line}">${task}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
    </li>`

    const position = 'beforeend'

    list.insertAdjacentHTML(position,item)
}

document.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){ //keyCode is depricated
        const task = input.value
        addToDO(task,id,false,false)

        listArray.push({
            name: task,
            id: id,
            done: false,
            done: false
        })
        // add to local storage
        localStorage.setItem('task',JSON.stringify(listArray))

        id++

        input.value = ''
    }
})

// tick or untick as complete
function completeTask(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)

    listArray[element.id].done = listArray[element.id].done ? false : true
}

// remove task
function removeTask(element){
    element.parentNode.parentNode.removeChild(element.parentNode)

    listArray[element.id].deleted = true
}

// remove or complete on click event call
list.addEventListener('click',function(event){
    const element = event.target //return the clicked element inside list
    const elementJob = element.attributes.job.value //return job

    if(elementJob === 'complete'){
        completeTask(element)
    }
    else if(elementJob === 'delete'){
        removeTask(element)
    }

    // add to local storage
    localStorage.setItem('task',JSON.stringify(listArray))
})


// changing the picture on reloading the page

document.addEventListener("DOMContentLoaded", function(event) { 
    if(window.location.hash == "#reload"){
        changePicture()
    }
})

function changePicture(){
   num = localStorage.getItem('counter')
   imgHeader.style.backgroundImage = 'url(./img/p'+num+'.png)'
}


// clear localstorage
clear.addEventListener('click',function(){
    // update counter for picture num
    var counter = JSON.parse(localStorage.getItem('counter'))
    // counter = counter===null ? 1 : 1
    counter = parseInt(counter)
    counter = counter>4 ? 1 : ++counter
    localStorage.setItem('counter',JSON.stringify(counter))

    // remove task key and reload the page
    localStorage.removeItem('task')
    location.hash = 'reload'
    location.reload()
})
