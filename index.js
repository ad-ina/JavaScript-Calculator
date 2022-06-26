let n1,n2,opt
let display = document.querySelector('#display')

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')

let plus = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')

let decimal = document.querySelector('#decimal')
let clear = document.querySelector('#clear')
let del = document.querySelector('#del')
let percent = document.querySelector('#percent')

let equals = document.querySelector('#equals')

one.addEventListener('click',()=> display.value += one.innerText )

two.addEventListener('click',()=> display.value += two.innerText )

three.addEventListener('click',()=> display.value += three.innerText )

four.addEventListener('click',()=> display.value += four.innerText )

five.addEventListener('click',()=> display.value += five.innerText )

six.addEventListener('click',()=> display.value += six.innerText )

seven.addEventListener('click',()=> display.value += seven.innerText )

eight.addEventListener('click',()=> display.value += eight.innerText )

nine.addEventListener('click',()=> display.value += nine.innerText )

zero.addEventListener('click',()=> display.value += zero.innerText )

decimal.addEventListener('click', ()=>{
    display.value += decimal.innerText
    decimal.disabled = true
})

// clear All
clear.addEventListener('click', ()=>{
    display.value = '0'
    n1 = 0
    n2 = 0
    opt = '0'
    decimal.disabled = false
})

del.addEventListener('click',()=>{
    let v = display.value
    let newstr = ''
    for(let i = 0; i < v.length - 1; i++){
        newstr += v[i]
    }
    display.value = newstr
})

percent.addEventListener('click', () => {
    n1 = display.value
    display.value = '%'
    opt = percent.innerText
})

plus.addEventListener('click', () => {
    n1 = parseFloat(display.value)
    opt = plus.innerText
    display.value = '+'
    decimal.disabled = false
})

subtract.addEventListener('click', () => {
    n1 = parseFloat(display.value)
    opt = subtract.innerText
    display.value = '-'
    decimal.disabled = false
})

multiply.addEventListener('click', () => {
    n1 = parseFloat(display.value)
    opt = multiply.innerText
    display.value = 'x'
    decimal.disabled = false
})

divide.addEventListener('click', () => {
    n1 = parseFloat(display.value)
    opt = divide.innerText
    display.value = '/'
    decimal.disabled = false
})


const click = (symbol) => {
    setExpression(prev => prev + symbol);
    if(expression.expression.length-1 === "=") {
      if (/[1-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

equals.addEventListener('click', () => {
    n2 = parseFloat(display.value)
    switch(opt){
        case "+":
            display.value = n1 + n2
            break
        case "-":
            display.value = n1 - n2
            break
        case "*":
            display.value = n1 * n2
            break
        case "/":
            display.value = n1 / n2
            break
        case "%":
            display.value = (n1/100) * n2 
            break
    }
})