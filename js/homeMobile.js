
var BannerSlider = new Swiper(".Section-1 .swiper-banner", {
    slidesPerView: 1,
    effect: 'fade',

    speed:1000,
    allowTouchMove:true,
    loop: true,
    autoplay:true,
    pagination: {
        el: '.Section-1 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
 })

 //  PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:1,
    spaceBetween: 10,
      speed:1000
      ,  navigation: {
        nextEl: ".swiper-products .swiper-button-next",
        prevEl: ".swiper-products .swiper-button-prev",
      },
  });  
let sections =document.querySelectorAll('.sec')
sections.forEach(s=>{
    gsap.to('.fadein p',{
        opacity:1,
        y:0,
        scrollTrigger:{
            trigger:s,
            start:"top 60%",
            end:"bottom bottom"
        }
      })
})
//  BRAND SLIDER
let swiperBrand= new Swiper(".swiper-brands", {
    slidesPerView:1,
    spaceBetween: 0,
      speed:1000,
      pagination: {
        el: '.Section-4 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
          },
      },
  });  

// PROJECT SLIDER
let swiperProject = new Swiper('.swiper-projects',{
    slidesPerView:1.1,
    spaceBetween: 10,
    grabCursor: true,
    speed:5000,
    effect:'slide' 
})

// // SERVICE DROP

//DROPDOWN NAV
$(document).ready(function() {
  $('.Service .Bottom-S').slideUp();
  $(document.querySelector('.Service .Bottom-S')).slideDown();
  let navss = [...document.querySelectorAll('.Service')]
  navss.map((elem,index)=>{
   console.log(index);
   if(index == 0){
    elem.children[0].children[1].classList.add('showR')
   }
   else{
    elem.children[0].children[1].classList.add('showL')
   }
   
  })
let navBtns = document.querySelectorAll('.Service')
for(let i=0 ; i<navBtns.length ; i++){
  navBtns[i].setAttribute('IS-OP',false)
}
navBtns[0].setAttribute('IS-OP',true)
navBtns[0].classList.add('active')
navBtns.forEach(nav=>{
  let IsOpen = false;
nav.addEventListener('click',(e)=>{
  IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
 console.log(e.currentTarget.getAttribute('IS-OP'));
if(e.currentTarget.getAttribute('IS-OP') == 'false'){
  console.log(e.currentTarget);
  e.currentTarget.classList.add('active')
 $(e.currentTarget.children[1]).slideDown();
  e.currentTarget.children[0].children[1].classList.add('showR')
  e.currentTarget.children[0].children[1].classList.remove('showL')
  IsOpen =false;
  e.currentTarget.setAttribute('IS-OP',true)
}
else{
  e.currentTarget.children[0].children[1].classList.remove('showR')
  e.currentTarget.children[0].children[1].classList.add('showL')
  console.log(e.currentTarget);
  e.currentTarget.classList.remove('active')
  $(e.currentTarget.children[1]).slideUp();
  e.currentTarget.setAttribute('IS-OP',false)
  IsOpen =true;
}
    })
})

})
  //  BLOG SLIDER
let swiperBlog= new Swiper(".swiper-blogs", {
    slidesPerView:1,
    spaceBetween:30,
      speed:1000
      ,  navigation: {
        nextEl: ".Blogs .swiper-button-next",
        prevEl: ".Blogs .swiper-button-prev",
      },
  });  
  let SlidesLength = [...document.querySelectorAll('.swiper-gallery .swiper-slide')]
        console.log(SlidesLength);
        document.querySelector('.Gallery-Container .Total').innerHTML = SlidesLength.length
        let slides= document.querySelectorAll('.swiper-gallery .swiper-slide')
        let i =1
        slides.forEach((s)=>{
        s.setAttribute('data-num',i)
        i++
        if(i>=SlidesLength){
        return
         }
        })
//  GALLERY SLIDER
let swiperGallery= new Swiper(".swiper-gallery", {
    slidesPerView:1.1,
    spaceBetween: 10,
      speed:1000,
      navigation: {
        nextEl: ".navigationBTN .swiper-button-next",
        prevEl: ".navigationBTN .swiper-button-prev",
      },
  }); 
  swiperGallery.on('slideChange', (e) => {  
    console.log(e.realIndex);
      var num = e.realIndex+1
      document.querySelector('.Current').textContent = num
  })
  if( document.querySelectorAll('.swiper-gallery .swiper-slide')){
    var count =1
    document.querySelector('.Current').textContent = count
  }
  
  gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let faders = document.querySelectorAll('.fadeIN')
faders.forEach(fade=>{
    gsap.to(fade.querySelectorAll('p'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('a'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('span'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h1'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h2'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h3'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h4'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h5'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
})


 