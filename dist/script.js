const diceImgOne = document.querySelector(".diceOne .face img");
const diceImgTwo = document.querySelector(".diceTwo .face img");
const rollBtn = document.querySelector(".roll");
const winner = document.querySelector(".success")
const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const faceImg = document.querySelectorAll('.face img')

const alertOne = document.querySelector(".alertOne");
const alertTwo = document.querySelector(".alertTwo");
const renameBtnPlayerOne = document.querySelector('.renamePlayerOne');
const renameBtnPlayerTwo = document.querySelector('.renamePlayerTwo');
const nameChangeOne = document.querySelector(".nameChangeOne");
const nameChangeTwo = document.querySelector(".nameChangeTwo");
const submitOne = document.querySelector(".submitOne");
const submitTwo = document.querySelector(".submitTwo");


const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let randomNumTWo = Math.floor(Math.random() * 6) + 1;
   diceImgOne.setAttribute("src", `./images/dice${randomNum}.png`);
   diceImgTwo.setAttribute("src",`./images/dice${randomNumTWo}.png`)

   if(randomNum > randomNumTWo) {
    winner.textContent = `${playerOne.innerHTML} Won!`
    winner.classList.add("appear")

   }else if ( randomNum < randomNumTWo ) {
    winner.textContent = `${playerTwo.innerHTML} Won!`
    winner.classList.add("appear")

   }else if(randomNum == randomNumTWo) {
    winner.textContent = "It's a draw."
    winner.classList.add("appear")
   }
}



rollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    faceImg.forEach(img => {
        img.style.transform = "scale(1.05)";
     
        setTimeout(() => {
            img.style.transition = "all .3s ease";
            img.style.transform = "scale(1)";
            
        }, 500)
      
    })
    rollDice();
});

const rename = (player, nameChange) => {
  
    player.innerHTML = nameChange.value
    
}


    submitOne.addEventListener("click", (e) => {
        e.preventDefault();
        rename(playerOne, nameChangeOne);
        alertOne.classList.remove("active");
        
    });
    submitTwo.addEventListener("click", (e) => {
        e.preventDefault();
        rename(playerTwo, nameChangeTwo);
        alertTwo.classList.remove("active");
        
    });
   


renameBtnPlayerOne.addEventListener("click", () => {
    alertOne.classList.add("active");
    
})

renameBtnPlayerTwo.addEventListener("click", () => {
    alertTwo.classList.add("active");   
 
})

