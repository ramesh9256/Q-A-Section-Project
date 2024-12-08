const btn = document.querySelectorAll("button");
const hide = document.querySelector(".para");
console.log("Hello");


btn.forEach(element => {
    element.addEventListener("click" , () =>{
        if(element.innerText == '+'){
            element.innerText = '-';
        }
       else{
            element.innerText = '+';
        }
         
        
        element.parentElement.nextElementSibling.classList.toggle("hidden");
         
        
    })
})