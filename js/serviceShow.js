


  const serviceSlider = new Swiper('.serviceSlider', {

    // Navigation arrows
    navigation: {
      nextEl: '.serNext',
      prevEl: '.serPrev',
    },
  
  });


  gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 70%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
