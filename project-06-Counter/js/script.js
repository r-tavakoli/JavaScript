// Counter

(function(){
  
  const button = document.querySelectorAll('.counterBtn')
  counter = 0

  button.forEach(function(element){
    element.addEventListener('click',function () {
      if(element.classList.contains('nextBtn')){
        counter++
      }
      else if(element.classList.contains('prevBtn')){
        counter--
      }
      const cntValue = document.querySelector('#counter')
      cntValue.textContent = counter

      if(counter>0){
        cntValue.style.color = 'green'
      }
      else if(counter<0){
        cntValue.style.color = 'red'
      }
      else{
        cntValue.style.color = 'black'        
      }

    })
  })

})()


// cnt = 0
// const counter = document.getElementById('counter')
// $('.btn').click(function(){
//   if(this.classList.contains('prevBtn')){
//     cnt--
//   }
//   else if (this.classList.contains('nextBtn')){
//     cnt++
//   }

//   counter.textContent = cnt

//       if(cnt>0){
//         counter.style.color = 'green'
//       }
//       else if(cnt<0){
//         counter.style.color = 'red'
//       }
//       else{
//         counter.style.color = 'black'        
//       }
// })


    


