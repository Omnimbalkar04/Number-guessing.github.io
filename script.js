
let input = document.querySelector('.no')
let btn= document.querySelector('.btn')


let random = Math.floor(Math.random()*10 + 1)
console.log(random)


let ans = document.querySelector('#ans')


 btn.addEventListener('click', check)
function check(e) {
    
    let num = input.value;

   
    if(num==random){
        ans.textContent = 'yes you made it'
        ans.style.color = '#0cff30'


    }

  

    else if(num<random){
        ans.textContent = 'number is small ,take larger than '+ num ;
        ans.style.color = 'red'

    } 

  

    else if(num>random){
        ans.textContent = 'number is big, take smaller than '+ num ;
        ans.style.color = 'red'

    }


}


