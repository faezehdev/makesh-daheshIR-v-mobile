let filterBtn = document.querySelectorAll(".newsList nav ul li")

filterBtn[0].classList.add("newactiveList")
filterBtn.forEach(element => {
    element.addEventListener("click" , function (params) {
        $(".newsList nav ul li").removeClass("newactiveList")
        element.classList.add("newactiveList")
    })
});

$(document).ready(function () {
  $(".filterBtn").click(function (e) {
      var url4 = $(this).attr("data-project");
      $(".gridNews").load(url4);
  });
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
