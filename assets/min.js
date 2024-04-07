// Comments box
$(document).ready(function(){  
    $('.Imgslider-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        rtl: true,
        cssEase: 'linear',
        infinite: true,
      });

      $('.carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        rtl: true,
        cssEase: 'linear',
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
        ]
      });


 });

//  Menu Items
 const itemsMenu = document.querySelectorAll(".itemsmenu");

 for (let i = 0; i < itemsMenu.length; i++) {
   itemsMenu[i].addEventListener("click", function () {
     // حذف کلاس active از تمام تگ های itemsmenu
     for (let j = 0; j < itemsMenu.length; j++) {
       itemsMenu[j].classList.remove("active");
     }
     // اضافه کردن کلاس active به تگ کلیک شده
     this.classList.add("active");
   });
 }
 

//  Menu Right


$(document).ready(function(){
  $('#mobileMenuIcon').click(function(){

      $('.mobileMenuParent').addClass('mobMenuContainerDisplayer');
      $('.mobileMenuOverlay').addClass('mobileMenuOverlayDisplayer');
  });
  $('.mobileMenuOverlay').click(function(){
      $('.mobileMenuParent').removeClass('mobMenuContainerDisplayer');
      $('.mobileMenuOverlay').removeClass('mobileMenuOverlayDisplayer');
      $('.mobileMenuIcon span:nth-child(1)').removeClass('mobileFirstSpan');
      $('.mobileMenuIcon span:nth-child(2)').removeClass('mobileSecondSpan');
      $('.mobileMenuIcon span:nth-child(3)').removeClass('mobileThirdSpan');
      $('.menu-mobile-container .menu-item-has-children>ul').removeClass('mobSubMenuDisplayer');
  });
  $('.menu-mobile-container .menu-item-has-children').click(function(){
      $(this).find('>ul').toggleClass('mobSubMenuDisplayer');
      $(this).toggleClass('openMobileListMenu');
      $(this).siblings().find('>ul').removeClass('mobSubMenuDisplayer');
      $(this).siblings('.openMobileListMenu').toggleClass('openMobileListMenu');
      $(".menu-mobile-container .menu-item-has-children>ul").click(function(e) {
          e.stopPropagation();
      });
      $(this).children('a').click(function(e) {
          e.stopPropagation();
      });
  });
});