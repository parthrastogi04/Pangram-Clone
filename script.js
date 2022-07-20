let slideIndex1 = 1;
showSlides(slideIndex1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}



const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav'); 
const nav2 = document.querySelector('.nav2');
const menu = document.querySelector('.menu');
const title = document.querySelector('.w-title');

hamburger.addEventListener('click', function(){
    this.classList.toggle('close');
    title.classList.toggle('yellow-pan');
    nav.classList.toggle('reveal-nav');
    nav2.classList.toggle('reveal-nav2')
    menu.classList.toggle('reveal-items');

})


  window.addEventListener("scroll",function(){
    var sc=window.scrollY;
    console.log(sc);

    document.getElementsByClassName('cards-card-circle-div')[0].style.transform = 'rotate(' + (sc/50 - 40) +'deg)';

    

     document.getElementsByClassName('cards-card-col-2')[0].style.marginBottom=(sc/6 -350 )+"px";
     document.getElementsByClassName('cards-card-col-2')[0].style.marginTop=(-sc/6 +350 )+"px";

     document.getElementsByClassName('cards-card-col-2')[1].style.marginBottom=(sc/6 - 350)+"px";
     document.getElementsByClassName('cards-card-col-2')[1].style.marginTop=(-sc/6 +350)+"px";

    
     document.getElementsByClassName('cards-card-col-2')[2].style.marginBottom=(sc/6 - 350)+"px";
     document.getElementsByClassName('cards-card-col-2')[2].style.marginTop=(-sc/6 + 350)+"px";


     document.getElementsByClassName('cards-card-col-3')[0].style.marginBottom=(sc/8 - 200)+"px";
    document.getElementsByClassName('cards-card-col-3')[0].style.marginTop=(-sc/8 + 200)+"px";

     document.getElementsByClassName('cards-card-col-3')[1].style.marginBottom=(sc/8 - 200)+"px";
     document.getElementsByClassName('cards-card-col-3')[1].style.marginTop=(-sc/8 + 200)+"px";

     document.getElementsByClassName('cards-card-col-3')[2].style.marginBottom=(sc/8 - 200)+"px";
     document.getElementsByClassName('cards-card-col-3')[2].style.marginTop=(-sc/8 + 200)+"px";

     

     document.getElementsByClassName('cards-card-col-4')[0].style.marginBottom=(sc/7.5 - 250)+"px";
     document.getElementsByClassName('cards-card-col-4')[0].style.marginTop=(-sc/7.5 +250)+"px";

     document.getElementsByClassName('cards-card-col-4')[1].style.marginBottom=(sc/7.5 - 250)+"px";
     document.getElementsByClassName('cards-card-col-4')[1].style.marginTop=(-sc/7.5 +250)+"px";

     document.getElementsByClassName('cards-card-col-4')[2].style.marginBottom=(sc/7.5 - 250)+"px";
     document.getElementsByClassName('cards-card-col-4')[2].style.marginTop=(-sc/7.5 +250)+"px";

     document.getElementById('section2').style.marginTop=(-sc/5 )+"px";

     if(sc>4000)
     document.getElementById('section2').style.marginBottom=(-sc/6 + 600)+"px";
     


})

    
    
     let font = document.querySelector('.font-change');
     let font_1_1 = document.querySelector('#font-col-1-1');
     let font_1_2 = document.querySelector('#font-col-1-2');
     let font_1_3 = document.querySelector('#font-col-1-3');
     let font_1_4 = document.querySelector('#font-col-1-4');
     let font_2_1 = document.querySelector('#font-col-2-1');
     let font_2_2 = document.querySelector('#font-col-2-2');
     let font_2_3 = document.querySelector('#font-col-2-3');
     let font_2_4 = document.querySelector('#font-col-2-4');
     let font_3_1 = document.querySelector('#font-col-3-1');
     let font_3_2 = document.querySelector('#font-col-3-2');
     let font_3_3 = document.querySelector('#font-col-3-3');
     let font_3_4 = document.querySelector('#font-col-3-4');
     let font_4_1 = document.querySelector('#font-col-4-1');
     let font_4_2 = document.querySelector('#font-col-4-2');
     let font_4_3 = document.querySelector('#font-col-4-3');
     let font_4_4 = document.querySelector('#font-col-4-4');
     
     font_1_1.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_neue_machinainktrapRg';
     })
     
     font_1_2.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_raderregular';
     })
     
     font_1_3.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_fraktion_monoregular';
     })
     
     font_1_4.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_supply_monoregular';
     })
     
     font_2_1.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_moriregular';
     })
     
     font_2_2.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_right_gothiclight';
     })
     
     font_2_3.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_neue_montrealmedium';;
     })
     
     font_2_4.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_pangram_sanscompactRg';
     })
     
     font_3_1.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_right_sanslight';
     })
     
     font_3_2.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_eikomedium';
     })
     
     font_3_3.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_neue_worldregular';
     })
     
     font_3_4.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_radio_groteskregular';
     })
     
     font_4_1.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_formulalight';;
     })
     
     font_4_2.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_editorial_newregular';
     })
     
     font_4_3.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_object_sansregular';
     })
     
     font_4_4.addEventListener('mouseover', () => {
         font.style.color = 'black';
         font.style.fontFamily = 'pp_cirkalight';
     })



  
