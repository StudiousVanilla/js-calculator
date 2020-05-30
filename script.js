
const addFunc = (x,y) =>{
    if((x+y)/1===0){
        return x+y
    }
    else{
        return (x+y).toFixed(2)
    }
}

const subtractFunc = (x,y) =>{
    if((x-y)/1 === 0){
        return (x-y)
    }
    else{
        return (x-y.toFixed(2))
    }
}


const multiplyFunc = (x,y) =>{
    if((x*y)/1 === 0){
        return (x*y)
    }
    else{
        return (x*y).toFixed(2)
    }
}


const divideFunc = (x,y) =>{
    if (y === 0){
        return "Breaks Maths"
    }
    else{
         if((x/y)%1 === 0){
            return (x/y);
        }
        else{
            return (x/y).toFixed(2)
        }
    }
};

const operateFunc = (x,y,operator) =>{
    if (operator === '+'){
        return addFunc(x,y);
    }
    if (operator  === '-'){
        return subtractFunc(x,y);
    }
    if (operator === '*'){
        return multiplyFunc(x,y);
    }
    if (operator === '/'){
        return divideFunc(x,y);
    }
};
expression = "";
expArray = [];


const screenDisplay = document.querySelector('.display');
screenDisplay.textContent = "";

let operatorCheck = function(x){
    if (x.includes('/')){
        return true;
    }

    else if (x.includes('*')){
        return true;
    }

    else if (x.includes('-')){
        return true;
    }

    else if (x.includes('+')){
        return true;
    }
    else{
        return false;
    }
}

let chooseFunc = function(){
    expression = screenDisplay.textContent;
    
    if(expression.includes('NaN')){
        clearDisplay();
    }

    else if(expression.includes('/')){
        expArray = expression.split('/');
        screenDisplay.textContent = 
                operateFunc(parseFloat(expArray[0]),parseFloat(expArray[1]),'/')
    }
    else if(expression.includes('*')){
        expArray = expression.split('*');
        screenDisplay.textContent = 
                operateFunc(parseFloat(expArray[0]),parseFloat(expArray[1]),'*')
    }
    else if(expression.includes('-')){
        expArray = expression.split('-');
        screenDisplay.textContent = 
                operateFunc(parseFloat(expArray[0]),parseFloat(expArray[1]),'-')
    }
    else if(expression.includes('+')){
        expArray = expression.split('+');
        screenDisplay.textContent = 
                operateFunc(parseFloat(expArray[0]),parseFloat(expArray[1]),'+')
    };

}

let addToDisplay = (x) => screenDisplay.textContent += x;
let clearDisplay = () => screenDisplay.textContent = "";

const number1 = document.querySelector('#one');
number1.addEventListener("click",function(){addToDisplay('1')})

const number2 = document.querySelector('#two');
number2.addEventListener("click",function(){addToDisplay('2')})

const number3 = document.querySelector('#three');
number3.addEventListener("click",function(){addToDisplay('3')})

const number4 = document.querySelector('#four');
number4.addEventListener("click",function(){addToDisplay('4')})

const number5 = document.querySelector('#five');
number5.addEventListener("click",function(){addToDisplay('5')})

const number6 = document.querySelector('#six');
number6.addEventListener("click",function(){addToDisplay('6')})

const number7 = document.querySelector('#seven');
number7.addEventListener("click",function(){addToDisplay('7')})

const number8 = document.querySelector('#eight');
number8.addEventListener("click",function(){addToDisplay('8')})

const number9 = document.querySelector('#nine');
number9.addEventListener("click",function(){addToDisplay('9')})

const number0 = document.querySelector('#zero');
number0.addEventListener("click",function(){addToDisplay('0')})

const divide = document.querySelector('#divide');
divide.addEventListener("click",function(){
    if (operatorCheck(screenDisplay.textContent)){
        chooseFunc()
        addToDisplay('/')
    }
    else{
        addToDisplay('/')
    }
})

const multiply = document.querySelector('#multiply');
multiply.addEventListener("click",function(){
    if (operatorCheck(screenDisplay.textContent)){
        chooseFunc()
        addToDisplay('*')
    }
    else{
        addToDisplay('*')
    }
})

const subtract = document.querySelector('#subtract');
subtract.addEventListener("click",function(){
    if (operatorCheck(screenDisplay.textContent)){
        chooseFunc()
        addToDisplay('-')
    }
    else{
        addToDisplay('-')
    }
})

const add = document.querySelector('#add');
add.addEventListener("click",function(){
    if (operatorCheck(screenDisplay.textContent)){
        chooseFunc()
        addToDisplay('+')
    }
    else{
        addToDisplay('+')
    }
})

const point = document.querySelector('#point');
point.addEventListener("click",function(){addToDisplay('.')})

const clear = document.querySelector('.clear');
clear.addEventListener("click",clearDisplay);



const operate = document.querySelector('#operate');
operate.addEventListener("click",function(){
    chooseFunc();
});







    

