let container = document.querySelector('.container')
let heading = document.querySelector('.heading')
let plyOneInput = document.querySelector('.ply_One_input')
let plyTwoInput = document.querySelector('.ply_two_input')
let btnOne = document.querySelector('.btn_one')
let btnTwo = document.querySelector('.btn_two')
let error = document.querySelector('.error')
let chance = document.querySelector('.chances')
let count = document.querySelector('span')
let winner = document.querySelector('.winner')
let plyOneVlu;
let c = "5";


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
                    chance.innerHTML = "Player-2 Win"
                    chance.style.color = "#03a9f0"
                    heading.innerHTML = "Game Over"
                    heading.style.color = "#03a9f0"
                    winner.innerHTML = "Congratulations"
                    winner.style.color = "#03a9f0"
                    displayControll("all")
                    
                }
                else{
                    if(c == 0){
                    chance.innerHTML = "Player-1 Win"
                    chance.style.color = "#03a9f0"
                    heading.innerHTML = "Game Over"
                    heading.style.color = "#03a9f0"
                    winner.innerHTML = "Congratulations"
                    winner.style.color = "#03a9f0"
                    displayControll("all")
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
    // else {
    //      chance.innerHTML = "Player-1 Win"
    //      heading.innerHTML = "Game Over"
    // }

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
            plyOneInput.style.display = "inline-block"
            btnOne.style.display = "inline-block"
        }
       else if(type == "p1n") {
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
        }
       else if(type == "p2n") {
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
        }

        else if(type == "all") {
            plyTwoInput.style.display = "none"
            btnTwo.style.display = "none"
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
        }
    }