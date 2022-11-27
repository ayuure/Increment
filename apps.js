

incrementEl = document.getElementById('btn')
saveEl = document.getElementById('btn1')
num= document.getElementById('num')
pEl = document.getElementById('enteries')
let count = 0
incrementEl.addEventListener("click", function(){

num.textContent = count+=1
})
saveEl.addEventListener("click", function(){
  
    let counter=0
    counter =count +'-'
    pEl.textContent +=counter
    counter= 0
    count =0

})
