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
var lightMode_subittile = document.querySelectorAll('#df1-text-subtittle-3');
var lightMode_btn = document.querySelectorAll('.df1-btn');
var lightMode_bigCard = document.querySelectorAll('.df1-big-card-gray');
var lightMode_setaWhite = document.querySelectorAll('.df1-image-setinha-white');
var lightMode_setaBlack = document.querySelectorAll('.df1-image-setinha-black');
var lightMode_socialLight = document.querySelectorAll('.df1-icons-footer-light');
var lightMode_socialDark = document.querySelectorAll('.df1-icons-footer-dark');
var lightMode_footerLogoLight = document.querySelectorAll('.df1-cadena-footer-light');
var lightMode_footerLogoDark = document.querySelectorAll('.df1-cadena-footer-dark');
var lightMode_textFooter = document.querySelectorAll('.df1-text-footer');
var lightMode_Footer = document.querySelectorAll('.df1-footer');
var lightMode_menuHambDark = document.querySelectorAll('.df1-menu-hamb-dark');


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

                lightMode_subittile[i].style.color = "#797B89";

                lightMode_btn[i].style.color = "#FFFFFF";
                lightMode_btn[i].style.background = "#000000";

                lightMode_bigCard[i].style.background = "#FAF8F5";

                lightMode_textFooter[i].style.color = "#797B89";

                lightMode_Footer[i].style.background = "#FFFFFF";

                document.getElementById("df1-image-hamb").src = "Images/Menu (1).png";

                lightMode_footerLogoDark[i].style.display = 'none';
                lightMode_footerLogoLight[i].style.display = 'block';

                lightMode_socialLight[i].style.display = 'block';
                lightMode_socialDark[i].style.display = 'none';

                lightMode_setaBlack[i].style.display = 'block';
                lightMode_setaWhite[i].style.display = 'none';

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

                lightMode_subittile[i].style.color = "#B8B8B8";

                lightMode_bigCard[i].style.background = "#1B1C20";

                lightMode_btn[i].style.color = "#1B1C20";
                lightMode_btn[i].style.background = "#FFFFFF";

                lightMode_textFooter[i].style.color = "#B8B8B8";

                lightMode_Footer[i].style.background = "#060809";

                lightMode_menuHambDark[i].src = "Images/Menu (1).png"

                lightMode_socialLight[i].style.display = 'none';
                lightMode_socialDark[i].style.display = 'block';

                lightMode_footerLogoLight[i].style.display = 'none';
                lightMode_footerLogoDark[i].style.display = 'block';

                lightMode_setaBlack[i].style.display = 'none';
                lightMode_setaWhite[i].style.display = 'block';

                lightMode_logoWhite[i].style.display = 'block';
                lightMode_logoBlack[i].style.display = 'none';
             
            }

            document.getElementById("df1-image-hamb").src = "Images/Menu.svg";

            }
          });

    

    }


 