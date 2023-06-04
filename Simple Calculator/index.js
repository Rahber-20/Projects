let string = "";
let buttons = document.querySelectorAll('button')
let inp = document.querySelector('input[type="text"]')
// let delBtn1 = document.querySelector('input[type="button"]')

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault()
        if(e.target.innerHTML == " ="){
            string = eval(string)
           inp.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            inp.value = string;
        }  else if(e.target.innerHTML == "DE"){
       string = string.substring(0,string.length - 1)
       inp.value = string
        }
        else{
            string = string + e.target.innerHTML
            inp.value = string;
        }
    })
})

// function delVal(){
//     // for(let i = 0;i <= inp.value.length;i++){
//     //     var del = inp.value.toString().slice()
//     // }
//     let del = inp.value.toString().slice(0,-1);
//     string = "";
//     let newVal = del + string;
//     inp.value = newVal;
// }
