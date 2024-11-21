let container = document.querySelector('.container')
let heading = document.querySelector('.heading')
let plyOneInput = document.querySelector('.ply_One_input')
let btnOne = document.querySelector('.btn_one')
let plyTwoInput = document.querySelector('.ply_two_input')
let btnTwo = document.querySelector('.btn_two')
let plyThreeInput = document.querySelector('.ply_three_input')
let btnThree = document.querySelector('.btn_three')
let plyFourInput = document.querySelector('.ply_four_input')
let btnFour = document.querySelector('.btn_four')
let plyFiveInput = document.querySelector('.ply_five_input')
let btnFive = document.querySelector('.btn_five')
let plySixInput = document.querySelector('.ply_six_input')
let btnSix = document.querySelector('.btn_six')
let plySevenInput = document.querySelector('.ply_seven_input')
let btnSeven = document.querySelector('.btn_seven')
let plyEightInput = document.querySelector('.ply_eight_input')
let btnEight = document.querySelector('.btn_eight')
let plyNineInput = document.querySelector('.ply_nine_input')
let btnNine = document.querySelector('.btn_nine')
let plyTenInput = document.querySelector('.ply_ten_input')
let btnTen = document.querySelector('.btn_ten')

let error = document.querySelector('.error')
let chance = document.querySelector('.chances')
let count = document.querySelector('span')
let winners = document.querySelector('.Winners')
let plyOneVlu;
let plyTwoVlo;
let plyThreeVlo;
let plyFourVlo;
let plyFiveVlo;
let plySixVlo;
let plySevenVlo;
let plyNineVlo;
let plyTenVlo
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
            displayControll('p1np2b')
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
                    plyTwoVlo =  "P1 VS P2 = P2 Winner"
                    heading.innerHTML = "Player-3"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p2np3b')
                }
                else{
                    if(c == 0){
                    plyTwoVlo = "P1 VS P2 = P1 Winner"
                    heading.innerHTML = "Player-3" 
                    c = "5"
                    count.innerHTML = c
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

    if( c >= 1 ) {

        if(plyThreeInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyThreeInput.value)){
                
           if(plyThreeInput.value > 0 && plyThreeInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyThreeInput.value) {
                    plyThreeVlo =  "P1 VS P3 = P3 Winner"
                    c = "5"
                    count.innerHTML = c
                    heading.innerHTML = "Player-4"
                    displayControll('p3np4b')
                }
                else{
                    if(c == 0){
                    plyThreeVlo = "P1 VS P3 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
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

    if( c >= 1 ) {

        if(plyFourInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyFourInput.value)){
                
           if(plyFourInput.value > 0 && plyFourInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyFourInput.value) {
                    heading.innerHTML = "Player-5"
                    plyFourVlo = "P1 VS P4 = P4 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p4np5b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-5"
                    plyFourVlo = "P1 VS P4 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p4np5b')
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

btnFive.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plyFiveInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyFiveInput.value)){
                
           if(plyFiveInput.value > 0 && plyFiveInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyFiveInput.value) {
                    heading.innerHTML = "Player-6"
                    plyFiveVlo = "P1 VS P5 = P5 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p5np6b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-6"
                    plyFiveVlo = "P1 VS P5 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p5np6b')
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

btnSix.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plySixInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plySixInput.value)){
                
           if(plySixInput.value > 0 && plySixInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plySixInput.value) {
                    heading.innerHTML = "Player-7"
                    plySixVlo = "P1 VS P6 = P6 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p6np7b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-7"
                    plySixVlo = "P1 VS P6 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p6np7b')
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

btnSeven.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plySevenInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plySevenInput.value)){
                
           if(plySevenInput.value > 0 && plySevenInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plySevenInput.value) {
                    heading.innerHTML = "Player-8"
                    plySevenVlo = "P1 VS P7 = P7 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p7np8b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-8"
                    plySevenVlo = "P1 VS P7 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p7np8b')
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

btnEight.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plyEightInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyEightInput.value)){
                
           if(plyEightInput.value > 0 && plyEightInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyEightInput.value) {
                    heading.innerHTML = "Player-9"
                    plyEightVlo = "P1 VS P8 = P8 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p8np9b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-9"
                    plyEightVlo = "P1 VS P8 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p8np9b')
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

btnNine.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plyNineInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyNineInput.value)){
                
           if(plyNineInput.value > 0 && plyNineInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyNineInput.value) {
                    heading.innerHTML = "Player-10"
                    plyNineVlo = "P1 VS P9 = P9 Winner"
                    c = "5"
                    count.innerHTML = c    
                    displayControll('p9np10b')
                  
                    
                }
                else{
                    if(c == 0){
                    heading.innerHTML = "Player-10"
                    plyNineVlo = "P1 VS P9 = P1 Winner"
                    c = "5"
                    count.innerHTML = c
                    displayControll('p9np10b')
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

btnTen.addEventListener('click', () => {

    if( c >= 1 ) {

        if(plyTenInput.value == "") {
            error.innerHTML = "please give a number"
            }
        else {
            
           if(Number(plyTenInput.value)){
                
           if(plyTenInput.value > 0 && plyTenInput.value <= 10) {
                error.innerHTML = ""
                c--
                count.innerHTML = c
                
                if(plyOneVlu == plyTenInput.value) {
                    plyTenVlo = "P1 VS P10 = P10 Winner"
                    heading.innerHTML = "Game Over"
                    heading.style.marginBottom = "0px"
                    displayControll('all')
                    chance.innerHTML = "Congratulations"
                    winners.innerHTML = `
                    
                    1. ${plyTwoVlo} <br>
                    2. ${plyThreeVlo} <br>
                    3. ${plyFourVlo} <br>
                    4. ${plyFiveVlo} <br>
                    5. ${plySixVlo} <br>
                    6. ${plySevenVlo} <br>
                    7. ${plyEightVlo} <br>
                    8. ${plyNineVlo} <br>
                    9. ${plyTenVlo} <br>
                    `
                   
                    
                }
                else{
                    if(c == 0){
                    plyTenVlo = "P1 VS P10 = P10 Winner"
                    heading.innerHTML = "Game Over"
                    heading.style.marginBottom = "0px"
                    displayControll('all')
                    chance.innerHTML = "Congratulations"
                    winners.innerHTML = `
                    
                    1. ${plyTwoVlo} <br>
                    2. ${plyThreeVlo} <br>
                    3. ${plyFourVlo} <br>
                    4. ${plyFiveVlo} <br>
                    5. ${plySixVlo} <br>
                    6. ${plySevenVlo} <br>
                    7. ${plyEightVlo} <br>
                    8. ${plyNineVlo} <br>
                    9. ${plyTenVlo} <br>
                    `
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

        if(type == "p1np2b") {
            plyTwoInput.style.display = "inline-block"
            btnTwo.style.display = "inline-block"
            plyOneInput.style.display = "none"
            btnOne.style.display = "none"
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
        else if(type == "p4np5b") {
            plyFourInput.style.display = "none"
            btnFour.style.display = "none"
            plyFiveInput.style.display = "inline-block"
            btnFive.style.display = "inline-block"
        }
        else if(type == "p5np6b") {
            plyFiveInput.style.display = "none"
            btnFive.style.display = "none"
            plySixInput.style.display = "inline-block"
            btnSix.style.display = "inline-block"
        }
        else if(type == "p6np7b") {
            plySixInput.style.display = "none"
            btnSix.style.display = "none"
            plySevenInput.style.display = "inline-block"
            btnSeven.style.display = "inline-block"
        }
        else if(type == "p7np8b") {
            plySevenInput.style.display = "none"
            btnSeven.style.display = "none"
            plyEightInput.style.display = "inline-block"
            btnEight.style.display = "inline-block"
        }
        else if(type == "p8np9b") {
            plyEightInput.style.display = "none"
            btnEight.style.display = "none"
            plyNineInput.style.display = "inline-block"
            btnNine.style.display = "inline-block"
        }
        else if(type == "p9np10b") {
            plyNineInput.style.display = "none"
            btnNine.style.display = "none"
            plyTenInput.style.display = "inline-block"
            btnTen.style.display = "inline-block"
        }

        else if(type == "all") {
            plyTenInput.style.display = "none"
            btnTen.style.display = "none"
        }
    }