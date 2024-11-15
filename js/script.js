let container = document.querySelector('.container')
let heading = document.querySelector('.heading')
let plyOneInput = document.querySelector('.ply_One_input')
let plyTwoInput = document.querySelector('.ply_two_input')
let plyThreeInput = document.querySelector('.ply_three_input')
let plyFourInput = document.querySelector('.ply_four_input')
let btnOne = document.querySelector('.btn_one')
let btnTwo = document.querySelector('.btn_two')
let btnThree = document.querySelector('.btn_three')
let btnFour = document.querySelector('.btn_four')
let error = document.querySelector('.error')
let chance = document.querySelector('.chances')
let count = document.querySelector('span')
let winner1 = document.querySelector('.winner1')
let winner2 = document.querySelector('.winner2')
let winner3 = document.querySelector('.winner3')
let plyOneVlu;
let plyTwoVlo;
let plyThreeVlo;
let c = "5";
let c2 = "5"
let c3 = "5"
let c4 = "5"


btnOne.addEventListener('click', () => {
    
    if(plyOneInput.value == ""){
    error.innerHTML = "please give a number"
    }

    else {
        
    if(Number(plyOneInput.value)){

     
       if(plyOneInput.value > 0 && plyOneInput.value <= 10) {

            heading.innerHTML = "Player-2"
            chance.style.display = "block"
            count.innerHTML = c
            plyOneVlu = plyOneInput.value
            error.innerHTML = ""
            displayControll('p2bp1n')
        }

        else{
             error.innerHTML = "give a number between 1 to 10"
        }
    }

    else{
        error.innerHTML = "please give a number"
    }    
    }
    
})
    

btnTwo.addEventListener('click', () =>{
    
    if( c >= 1 ) {

        if(plyTwoInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
            if(Number(plyTwoInput.value)){
                
           if(plyTwoInput.value > 0 && plyTwoInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyTwoInput.value) {
                    plyTwoVlo =  "Player-2 Winner"
                    heading.innerHTML = "Player-3"
                    count.innerHTML = c2
                    displayControll('p2np3b')
                }
                else{
                    if(c == 0){
                    plyTwoVlo = "Player-2 Loser"
                    heading.innerHTML = "Player-3" 
                    count.innerHTML = c2
                    displayControll('p2np3b')
                } 
            }
           }
           else{
            error.innerHTML = "give a number between 1 to 10"
       }
            }
            else{
            error.innerHTML = "please give a number"
            } }
    }

})




btnThree.addEventListener('click', () => {

    if( c2 >= 1 ) {

        if(plyThreeInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyThreeInput.value)){
                
           if(plyThreeInput.value > 0 && plyThreeInput.value <= 10) {
                error.innerHTML = ""
                c2--
                count.innerHTML = c2
                
                if(plyOneVlu == plyThreeInput.value) {
                    plyThreeVlo =  "Player-3 Winner"
                    count.innerHTML = c3
                    heading.innerHTML = "Player-4"
                    displayControll('p3np4b')
                }
                else{
                    if(c2 == 0){
                    plyThreeVlo = "Player-3 Loser"
                    count.innerHTML = c3
                    heading.innerHTML = "Player-4"          
                    displayControll('p3np4b')
                } 
            }
           }
           else{
            error.innerHTML = "give a number between 1 to 10"
         }
            }
            else{
            error.innerHTML = "please give a number"
            } }
    }

})



btnFour.addEventListener('click', () => {

    if( c4 >= 1 ) {

        if(plyFourInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyFourInput.value)){
                
           if(plyFourInput.value > 0 && plyFourInput.value <= 10) {
                error.innerHTML = ""
                c4--
                count.innerHTML = c4
                
                if(plyOneVlu == plyFourInput.value) {
                    heading.innerHTML = "Game Over"
                    chance.innerHTML = "Congratulations"
                    chance.style.fontSize = '25px'
                    displayControll('all')
                    winner1.innerHTML = plyTwoVlo
                    winner2.innerHTML = plyThreeVlo
                    winner3.innerHTML = "Player-4 Winner"
                    winner1.style.color = "#03a9f0"
                    winner2.style.color = "#03a9f0"
                    winner3.style.color = "#03a9f0"
                  
                    
                }
                else{
                    if(c4 == 0){
                    heading.innerHTML = "Game Over"
                    chance.innerHTML = "Congratulations"
                    chance.style.fontSize = '25px'
                    displayControll('all')
                    winner1.innerHTML = plyTwoVlo
                    winner2.innerHTML = plyThreeVlo
                    winner3.innerHTML = "Player-4 Loser"
                    winner1.style.color = "#03a9f0"
                    winner2.style.color = "#03a9f0"
                    winner3.style.color = "#03a9f0"
                   
                } 
            }
           }
           else{
            error.innerHTML = "give a number between 1 to 10"
         }
            }
            else{
            error.innerHTML = "please give a number"
            } }
    }


})









    function displayControll(type){

        if(type == "p2bp1n") {
            plyTwoInput.style.display = "inline-block"
            btnTwo.style.display = "inline-block"
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
        }
        else if(type == "p1bp2n") {
            plyTwoInput.style.display = "none"
            btnTwo.style.display = "none"
            plyOneInput.style.display = "inline-block"
            btnOne.style.display = "inline-block"
        }
       else if(type == "p1b") {
            plyOneInput.style.display = "inline-block"
            btnOne.style.display = "inline-block"
        }
        else if(type == "p2b") {
            plyTwoInput.style.display = "inline-block"
            btnTwo.style.display = "inline-block"
        }
       else if(type == "p1n") {
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
        }
       else if(type == "p2n") {
            plyTwoInput.style.display = "none"
            btnTwo.style.display = "none"
        }

        else if(type == "p2np3b") {
            plyTwoInput.style.display = "none"
            btnTwo.style.display = "none"
            plyThreeInput.style.display = "inline-block"
            btnThree.style.display = "inline-block"
        }

        else if(type == "p3np4b") {
            plyThreeInput.style.display = "none"
            btnThree.style.display = "none"
            plyFourInput.style.display = "inline-block"
            btnFour.style.display = "inline-block"
        }

        else if(type == "all") {
            plyFourInput.style.display = "none"
            btnFour.style.display = "none"
        }
    }