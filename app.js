// document.body.style.backgroundColor = 'red'

// let check = document.querySelectorAll('.btn')[1]

// check.addEventListener('click', function onClick() {
//     document.body.style.backgroundColor = 'green'

// });

// // function butt(){
// //     document.body.style.backgroundColor = 'green'
// // }
// // check.addEventListener('click',butt)

// // let question = document.querySelector('.number')

// // question.textContent=que

// // function quest(){
  
// // }

// // question.addEventListener('click', quest)



// let mess = document.querySelector('.message')

// mess.style.color = 'blue'

// // document.querySelector('.guess').value = 30

// //NB - For input field use value and not text content.

// let head = document.querySelector('h1')

// head.textContent = 'Step out'





// //HOW TO GENERATE THE NUMBER
let numberGenerator = Math.floor(Math.random() * 9 + 1);
let score = 20;
let highScore = 0;
let msg = document.querySelector('.message')
let num = document.querySelector('.number')
let btn = document.querySelector('.check')
let scores = document.querySelector ('.score')
let hscore = document.querySelector ('.highscore')

function chat(message){
    msg.textContent = message
}

function cheq(){
    let data = Number(document.querySelector('.guess').value)

    if(!data){
        chat('type a number')
        document.body.style.backgroundColor = 'black'
        num.textContent = '?'
    } else if (data === numberGenerator){
        chat('correct')
        num.textContent = numberGenerator
        document.body.style.backgroundColor = 'green'
        hscore.textContent = score
        scores.textContent = score
    } else{
        chat('try again')
        document.body.style.backgroundColor = 'red'
        num.textContent = '?'
        if(score<1){
            num.textContent = 'Game Over'
        }
        score--

        scores.textContent = score
    }
}

btn.addEventListener('click', cheq)

let again = document.querySelector('.btn')

// function change(){
//     document.body.style.backgroundColor = 'violet'
//     refresh()
// }

again.addEventListener('click', refresh)


function refresh(){
  location.reload()
}


//if highScore = score (remain score)