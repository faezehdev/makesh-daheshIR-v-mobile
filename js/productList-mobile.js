let schTitle = document.querySelectorAll(".schTitle")
schTitle.forEach(element => {
  element.addEventListener("click" , function (params) {
    
    element.nextElementSibling.classList.toggle("activeSchema")
    console.log(element.nextElementSibling);
      
  })
});



let dropdown = document.querySelectorAll(".dropdown")
dropdown.forEach(e => {

var buttonPos = parseInt(e.clientLeft) - parseInt($(".outer").scrollLeft());
// Apply button position to dropdown
$(this).find(".dropdown-menu").css("left", buttonPos);
// Store buttons offset position to be used to calculate the dropdowns position when .outer is scrolled
console.log();
e.querySelector(".dropdown-menu").setAttribute("data-leftPos", e.clientLeft)
// $(this).find(".dropdown-menu").attr("data-leftPos", e.clientLeft);
console.log(buttonPos);

});
// Detect dropdown event
$(".dropdown").on("show.bs.dropdown", function(event){
// get offset position of selected button and subtract scroll .outer scroll position
var buttonPos = parseInt(event.currentTarget.offsetLeft) - parseInt($(".outer").scrollLeft());
// Apply button position to dropdown
$(this).find(".dropdown-menu").css("left", buttonPos);
// Store buttons offset position to be used to calculate the dropdowns position when .outer is scrolled
$(this).find(".dropdown-menu").attr("data-leftPos", event.currentTarget.offsetLeft);
console.log(event.currentTarget.offsetLeft);

});
// Detect when .outer is scrolled
$(".outer").on("scroll", function() {
var activeDropdown = $('.dropdown.open').find('.dropdown-menu');
// subtract scroll position from buttons offset position
var pos = parseInt(activeDropdown.attr('data-leftPos')) - parseInt($(this).scrollLeft());
// appply updated position to dropdown
activeDropdown.css("left", pos);
console.log(activeDropdown.attr('data-leftPos'));

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




$(document).ready(function () {
$(".filterBtn").click(function (e) {
    var url4 = $(this).attr("data-project");
    $(".listContainer").load(url4);
});
});