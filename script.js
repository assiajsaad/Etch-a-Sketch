function createDiv(input){
 let nbSquares = input*input;

    for (let index = 0; index < nbSquares; index++) {
        
        let newDiv = document.createElement('div');
        newDiv.className = 'item';
        // newDiv.style.cssText= `--num-squares: ${nbSquares}`;
        container.appendChild(newDiv)       
    }
}
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }


function showResponse(resp){
    let inp = document.querySelector('input');
    let response = document.createElement('div');
    response.textContent = 'resp';
    // inp.removeChild(inp.lastChild);
    inp.appendChild(response);
}
let container = document.querySelector('.container');

container.addEventListener('mouseover',(event)=>{
    if (event.target.classList.contains('item')) {
        // event.target.classList.add('hover-effect');
        event.target.style.backgroundColor = getRandomHexColor();
      }
})

container.addEventListener('mouseout',(event)=>{
    if (event.target.classList.contains('item')) {
        setTimeout(() => {
        event.target.classList.remove('hover-effect');
        event.target.style.backgroundColor = 'white';
        }, 300);
    }
})
createDiv(16);


let btn = document.querySelector('.btn');
let userInput = document.querySelector('.userInput');


btn.addEventListener('click',()=>{
    let res = ''

    if (userInput.value == null) {
        res= 'Input cannot be empty';
        showResponse(res);
    } else if(isNaN(userInput.value)) {
        res = 'Input must be a number';
        showResponse(res);
    }else if (userInput.value > 100){
        res=  "Number Cannot be bigger than 100";
        showResponse(res);
    }else{

    }
    createDiv(userInput.value)

    userInput.value = '';
})

