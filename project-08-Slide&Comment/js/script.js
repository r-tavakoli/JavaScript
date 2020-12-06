//Slide&Comments 
(function(){

const text = document.querySelector('#customer-text')
const img = document.querySelector('#customer-img')
const name = document.querySelector('#customer-name')
const buttons = document.querySelectorAll('.btn')
const customers = []
let index = 0

function Customer(img,name,txt){
    this.img = img
    this.name = name
    this.txt = txt
}


function createCustomer(imgIndex,name,txt){
    let imgPath = '/img/customer-'+imgIndex+'.jpg'
    let customerInfo = new Customer(imgPath,name,txt)

    customers.push(customerInfo)
}

createCustomer(0, 'Customer-0', 'this is a message received from this customer. nice...!')
createCustomer(1, 'Customer-1', 'this is a message received from this customer. nice...!')
createCustomer(2, 'Customer-2', 'this is a message received from this customer. nice...!')
createCustomer(3, 'Customer-3', 'this is a message received from this customer. nice...!')
createCustomer(4, 'Customer-4', 'this is a message received from this customer. nice...!')


buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if(button.classList.contains('prevBtn')){
            if(index===0){index = customers.length}
            index--
            img.src = customers[index].img
            text.textContent = customers[index].txt
            name.textContent = customers[index].name
        }
        else if (button.classList.contains('nextBtn')){
            index++
            if(index===customers.length-1){index = 0}
            img.src = customers[index].img
            text.textContent = customers[index].txt
            name.textContent = customers[index].name
        }
        
    })
})

})()
