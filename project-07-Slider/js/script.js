// Slide Show


(function (){
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  
  const imgContainer = document.getElementById('img-container')
  const imgBtn = Array.from(document.getElementsByTagName('a'))
  const imgBtn2 = document.querySelectorAll('.btn')


  var counter = 0

  imgBtn.forEach(function(element){
    element.addEventListener('click',function(){
      if(element.classList.contains('btn-left')){
        counter--
        if(counter<0){counter = pictures.length-1}
        imgContainer.style.backgroundImage = 'url(./img/'+pictures[counter]+'.jpeg)'
      }
      else if(element.classList.contains('btn-right')){
        counter++
        if(counter> pictures.length -1){counter = 0}
        imgContainer.style.backgroundImage = 'url(./img/'+pictures[counter]+'.jpeg)'
      }
    })

  })

})()