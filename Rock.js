let userScore=0
let computerScore=0

function Game(userInput){
    let Choices=['rock','paper','scissor']
    let computerInput=Choices[Math.floor(Math.random()*Choices.length)]

    let res=""
    if(userInput==computerInput){
        res="Tie"

    }
    else if((userInput=='rock'&&computerInput=='scissor')||(userInput=='scissor'&&computerInput=='paper')||(userInput=='paper'&&computerInput=='rock')){
        res='You won rey'  
        userScore++
        

    }
    else{
        res='computer wins'
        computerScore++
    }

    document.getElementById('res').innerText=` ${userInput} : ${computerInput} :: ${res}`

    let x=document.getElementById('dis')
    let y=document.getElementById('disp')
    x.textContent=`Users win:  ${userScore}` 
    y.textContent=`Computer Win:  ${computerScore}`
    
    if(userScore===3){
        alert("you Won Game")
        playAgain()

    }
    else if(computerScore===3){
        alert("computer wins")
        playAgain()
    }




}
function playAgain(){
    userScore=0
    computerScore=0
    document.getElementById('res').innerText=""
    document.getElementById('score').innerText=""
}