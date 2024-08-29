// PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:1,
    spaceBetween: 10,
      speed:1000
      ,  navigation: {
        nextEl: ".swiper-products .swiper-button-next",
        prevEl: ".swiper-products .swiper-button-prev",
      },
  });  
  // PROJECT SLIDER
let swiperProject= new Swiper(".swiper-projects", {
    slidesPerView:1.1,
    spaceBetween: 10,
   speed:800
  });  

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
// GALLERY SLIDER
let swiperGallery= new Swiper(".swiper-gallery", {
    slidesPerView:1,
    spaceBetween: 30,
   speed:800,
    navigation: {
    nextEl: " .gallery-Container .swiper-button-next",
    prevEl: " .gallery-Container .swiper-button-prev",
  },
  });  