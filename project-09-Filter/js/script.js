const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.store-item')


// filter by buttons
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        e.preventDefault()
        const filter = e.target.dataset.filter
        
        storeItems.forEach(function(item){
            if(filter === 'all'){
                item.style.display = 'block'
            }
            else if(item.classList.contains(filter)){
                item.style.display = 'block'
            }
            else{
                item.style.display = 'none'
            }
        })
    })
}); //important to put ; for executing next part


// filter by search box

(function(){
    const storeItems = document.querySelectorAll('.store-item')
    const searchBox = document.querySelector('#search-item')

    searchBox.addEventListener('keyup',function(e){
        const filter = e.target.value.toLowerCase().trim()
        storeItems.forEach(function(item){
            if(item.textContent.includes(filter)){
                item.style.display = 'block'
            }
            else{
                item.style.display = 'none'
            }
        })
    })

})();