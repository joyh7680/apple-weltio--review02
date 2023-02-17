$(function(){
    // featureSwiper
    var swiper = new Swiper(".featureSwiper", {
        // @ 오류남 
    // direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".featureSwiper .swiper-pagination",
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
    },
    });


    // var swiper = new Swiper(".mySwiper", {
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //       renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //       },
    //     },
    //   });


}); //end