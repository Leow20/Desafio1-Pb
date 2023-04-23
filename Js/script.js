var btnSwitch = document.querySelector('input[name=checkbox]');
var text = document.querySelectorAll('.df1-text-white');
var box1 = document.querySelectorAll('.df1-box1');
var tittleGrid = document.querySelectorAll('.df1-tittle-grid');
var textGrid = document.querySelectorAll('.df1-text-grid');
var textSoftGray = document.querySelectorAll('.df1-text-softgray');
var pageWrapper1 = document.querySelectorAll('.df1-page-wrapper1');
var pageWrapper2 = document.querySelectorAll('.df1-page-wrapper2');
var topbar = document.querySelectorAll('.df1-topbar');
var singUp = document.querySelectorAll('.df1-btn-singup');
var boxNew = document.querySelectorAll('.df1-box-new');
var logoWhite = document.querySelectorAll('.df1-logo-white');
var logoBlack = document.querySelectorAll('.df1-logo-black');
var centerText = document.querySelectorAll('.df1-center-text');
var box2 = document.querySelectorAll('.df1-box2');
var subittile = document.querySelectorAll('#df1-text-subtittle-3');
var btn = document.querySelectorAll('.df1-btn');
var bigCard = document.querySelectorAll('.df1-big-card-gray');
var setaWhite = document.querySelectorAll('.df1-image-setinha-white');
var setaBlack = document.querySelectorAll('.df1-image-setinha-black');
var socialLight = document.querySelectorAll('.df1-icons-footer-light');
var socialDark = document.querySelectorAll('.df1-icons-footer-dark');
var footerLogoLight = document.querySelectorAll('.df1-cadena-footer-light');
var footerLogoDark = document.querySelectorAll('.df1-cadena-footer-dark');
var textFooter = document.querySelectorAll('.df1-text-footer');
var Footer = document.querySelectorAll('.df1-footer');
var menuHambDark = document.querySelectorAll('.df1-menu-hamb-dark');





function turnMode(){
    var i = 0;

        btnSwitch.addEventListener('change', function() {
            if (this.checked) {
            
            //LIGTH
                //Texto 
                   for(i = 0; text.length > i; i++){
                    text[i].style.color = "#1B1C20";
                  }

                  for(i = 0; textGrid.length > i; i++){
                    textGrid[i].style.color = "#797B89";
                  }

                  for(i = 0; box1.length > i; i++){
                    box1[i].style.background = "#FFFFFF";
                  }

                  for(i = 0; tittleGrid.length > i; i++){
                     tittleGrid[i].style.color = "#1B1C20";
                  }



            
            //TopBar - Section 1
            for(i = 0; pageWrapper1.length > i; i++){
                pageWrapper1[i].style.background  = "#FAF8F5";
                pageWrapper2[i].style.background = "#FFFFFF";
                
                topbar[i].style.background  = "#FAF8F5";
               
                singUp[i].style.background  = "#0F0F14";
                singUp[i].style.color  = "#FFFFFF";
                
                boxNew[i].style.background  = "#FFFFFF";
                
                boxNew[i].style.color = "#6941C6"; 

                textSoftGray[i].style.color = "#383A47";

                centerText[i].style.color = "#797B89";

                box2[i].style.background = "#FFFFFF";

                subittile[i].style.color = "#797B89";

                btn[i].style.color = "#FFFFFF";
                btn[i].style.background = "#000000";

                bigCard[i].style.background = "#FAF8F5";

                textFooter[i].style.color = "#797B89";

                Footer[i].style.background = "#FFFFFF";

                footerLogoDark[i].style.display = 'none';
                footerLogoLight[i].style.display = 'block';

                socialLight[i].style.display = 'block';
                socialDark[i].style.display = 'none';

                setaBlack[i].style.display = 'block';
                setaWhite[i].style.display = 'none';

                logoWhite[i].style.display = 'none';
                logoBlack[i].style.display = 'block';
            }

            document.getElementById("df1-image-hamb").src = "Images/Menu (1).png";
        } 
        
        else {

            //DARK

            //Texto
            for(i = 0; text.length > i; i++){
                   text[i].style.color = "#FFFFFF";
            }

            for(i = 0; textGrid.length > i; i++){
                textGrid[i].style.color = "#E7E7E7";
              }

              for(i = 0; box1.length > i; i++){
                box1[i].style.background = "#1B1C20";
              }
              
               for(i = 0; tittleGrid.length > i; i++){
                 tittleGrid[i].style.color = "#FFFFFF";
               }


            
            //PageWrapper   
            for(i = 0; pageWrapper1.length > i; i++){
                pageWrapper1[i].style.background = "#060809";
                pageWrapper2[i].style.background = "#060809";
                
                topbar[i].style.background  = "#060809";
                
                singUp[i].style.background  = "#FFFFFF";
                singUp[i].style.color  = "#383A47";
                
                boxNew[i].style.background  = "#7f56d9";

                centerText[i].style.color = "#797B89";

                box2[i].style.background = "#1B1C20";

                subittile[i].style.color = "#B8B8B8";

                bigCard[i].style.background = "#1B1C20";

                btn[i].style.color = "#1B1C20";
                btn[i].style.background = "#FFFFFF";

                textFooter[i].style.color = "#B8B8B8";

                Footer[i].style.background = "#060809";

                textSoftGray[i].style.color = "#E7E7E7";

                menuHambDark[i].src = "Images/Menu (1).png"

                socialLight[i].style.display = 'none';
                socialDark[i].style.display = 'block';

                footerLogoLight[i].style.display = 'none';
                footerLogoDark[i].style.display = 'block';

                setaBlack[i].style.display = 'none';
                setaWhite[i].style.display = 'block';

                logoWhite[i].style.display = 'block';
                logoBlack[i].style.display = 'none';
             
            }

            document.getElementById("df1-image-hamb").src = "Images/Menu.svg";

            }
          });

    

    }


