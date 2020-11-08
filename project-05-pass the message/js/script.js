// Submit Message

    
(function(){
    const form = document.querySelector('#message-form')
    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')

        if (message.value === ''){
            feedback.classList.add('show')
        }
        else {
            feedback.classList.remove('show')
            messageContent.textContent = message.value
            message.value = ''
        }
    })
})()
    
    