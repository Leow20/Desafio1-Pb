var btnSwitch = document.querySelector('input[name=checkbox]');
var lightMode_text = document.querySelectorAll('.df1-text-white');
var lightMode_textSoftGray = document.querySelectorAll('.df1-text-softgray');
var lightMode_pageWrapper1 = document.querySelectorAll('.df1-page-wrapper1');
var lightMode_pageWrapper2 = document.querySelectorAll('.df1-page-wrapper2');
var lightMode_topbar = document.querySelectorAll('.df1-topbar');
var lightMode_singUp = document.querySelectorAll('.df1-btn-singup');
var lightMode_boxNew = document.querySelectorAll('.df1-box-new');
var lightMode_logoWhite = document.querySelectorAll('.df1-logo-white');
var lightMode_logoBlack = document.querySelectorAll('.df1-logo-black');
var lightMode_textGrid = document.querySelectorAll('.df1-text-grid');
var lightMode_centerText = document.querySelectorAll('.df1-center-text');
var lightMode_box1 = document.querySelectorAll('.df1-box1');
var lightMode_box2 = document.querySelectorAll('.df1-box2');




function turnMode(){
    var i = 0;

        btnSwitch.addEventListener('change', function() {
            if (this.checked) {
            
            //LIGTH
            
                //Texto 
                   for(i = 0; lightMode_text.length > i; i++){
                    lightMode_text[i].style.color = "#1B1C20";
                  }

                  for(i = 0; lightMode_textGrid.length > i; i++){
                    lightMode_textGrid[i].style.color = "#797B89";
                  }

                  for(i = 0; lightMode_box1.length > i; i++){
                    lightMode_box1[i].style.background = "#FFFFFF";
                  }


            
            //TopBar - Section 1
            for(i = 0; lightMode_pageWrapper1.length > i; i++){
                lightMode_pageWrapper1[i].style.background  = "#FAF8F5";
                lightMode_pageWrapper2[i].style.background = "#FFFFFF";
                
                lightMode_topbar[i].style.background  = "#FAF8F5";
               
                lightMode_singUp[i].style.background  = "#0F0F14";
                lightMode_singUp[i].style.color  = "#FFFFFF";
                
                lightMode_boxNew[i].style.background  = "#FFFFFF";
                
                lightMode_boxNew[i].style.color = "#6941C6"; 

                lightMode_textSoftGray[i].style.color = "#797B89";

                lightMode_centerText[i].style.color = "#797B89";

                lightMode_box2[i].style.background = "#FFFFFF";

                lightMode_logoWhite[i].style.display = 'none';
                lightMode_logoBlack[i].style.display = 'block';
            }
        } 
        
        else {

            //DARK

            //Texto
            for(i = 0; lightMode_text.length > i; i++){
                   lightMode_text[i].style.color = "#FFFFFF";
            }

            for(i = 0; lightMode_textGrid.length > i; i++){
                lightMode_textGrid[i].style.color = "#E7E7E7";
              }

              for(i = 0; lightMode_box1.length > i; i++){
                lightMode_box1[i].style.background = "#1B1C20";
              }
            
            //PageWrapper   
            for(i = 0; lightMode_pageWrapper1.length > i; i++){
                lightMode_pageWrapper1[i].style.background = "#060809";
                lightMode_pageWrapper2[i].style.background = "#060809";
                
                lightMode_topbar[i].style.background  = "#060809";
                
                lightMode_singUp[i].style.background  = "#FFFFFF";
                lightMode_singUp[i].style.color  = "#383A47";
                
                lightMode_boxNew[i].style.background  = "#7f56d9";

                lightMode_centerText[i].style.color = "#797B89";

                lightMode_box2[i].style.background = "#1B1C20";

                lightMode_logoWhite[i].style.display = 'block';
                lightMode_logoBlack[i].style.display = 'none';
             
            }

            }
          });

    

    }


   
   
/*var btnSwitch = document.querySelector('input[name=checkbox]');
var lightMode_text = document.querySelectorAll('.df1-text-white');
var lightMode_pageWrapper = document.querySelectorAll('.df1-page-wrapper');
var lightMode_topbar = document.querySelectorAll('.df1-topbar');
var lightMode_singUp = document.querySelectorAll('.df1-btn-singup');

function turnMode(){
    var i = 0;

        btnSwitch.addEventListener('change', function() {
            if (this.checked) {
               //Texto 
               for(i = 0; lightMode_text.length > i; i++){
                   lightMode_text[i].classList.add('df1-text-black');
                   lightMode_text[i].classList.remove('df1-text-white');
            }
            
            //TopBar - Section 1
            for(i = 0; lightMode_pageWrapper.length > i; i++){
                
                lightMode_text[i].classList.add('df1-text-black');
                lightMode_pageWrapper[i].classList.add('df1-backg');FAF8F5
                
                lightMode_topbar[i].style.background  = "#FAF8F5";
               
                lightMode_singUp[i].style.background  = "#0F0F14";
                lightMode_singUp[i].style.color  = "#FFFFFF";
            }
        }        
        
        else {
            //Texto
            for(i = 0; lightMode_text.length > i; i++){
                lightMode_text[i].classList.remove('df1-text-black');
                lightMode_text[i].classList.add('df1-text-white');
            }
            
            //PageWrapper   
            for(i = 0; lightMode_pageWrapper.length > i; i++){
                lightMode_pageWrapper[i].style.background = "#060809";
                lightMode_topbar[i].style.background  = "#060809";
                lightMode_singUp[i].style.background  = "#FFFFFF";
                lightMode_singUp[i].style.color  = "#383A47";
            }
            
        }
        
    });

    

    }

    
   
*/
    
   
