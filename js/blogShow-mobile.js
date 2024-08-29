const relatedProduct = new Swiper('.relatedProduct', {

    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextRelatePro',
      prevEl: '.prevRelatePro',
    },
  
  
  });
  const relatedProject = new Swiper('.relatedProject', {
  
    loop: false,
    spaceBetween: 10,
  
  
  
  
  });



  
gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 60%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
