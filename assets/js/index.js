$(function(){


  mainVis = gsap.timeline({
    scrollTrigger:{
      trigger:".main-visual .video-area",
      start:"0% 10%",
      end : "100% 0%",
      scrub : 1
    },
  })

    mainVis
    .addLabel('a')
    .to('.main-visual .video-area',{y:100},'a')
    .to('.main-visual .text-area > *',{
      y: -100, opacity : 0,
      stagger:0.1
    },'a')
 
    // * main-card
    $('.main-card .group-card').each(function(index,element){
      op = (index == 2)? 1 : 0.5;
 
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:"0% 10%",
          end : "100% 0%",
          scrub : 1
        },
        opacity: op,
        scale : 0.97
    })
    })

    // main-overview
    overview = gsap.timeline({
      defaults:{
        ease: "none", // <-- 이걸넣어야 횡스크롤 좌표가 안밀림!
      },
      scrollTrigger:{
        trigger:".main-overview .group-contents",
        start:"0% 0%",
        end : "300%",
        scrub : 1,
        invalidateOnRefresh: true,
        pin : true,
      },
    })
    overview
    .addLabel('a')
    //  .to('.main-overview .container-area',{
    //    xPercent:-100,
    //   // x:-window.innerWidth
    //   // x:-700,
    //   // yPercent:-25
    // },'a')


    .to('.main-overview .container-area .left-wrap',{
      xPercent:-100,
      yPercent:-50
    },'a')
    .to('.main-overview .container-area .right-wrap',{
      x:-$('.main-overview .container-area .left-wrap').outerWidth()
      // // xPercent:-100,
      // // x:-700,
      // // yPercent:-25
    },'a')
    .to('.main-overview .container-area .slide-box',{
      xPercent: -100,
      x:function(){
        return window.innerWidth;
      },
      // delay : 1,
    })
      


    
    // .to('.main-overview',{
    //   background : '#444'
    // },'a')
    // .to('.main-overview .left-wrap, .main-overview .desc-box',{
    //   opacity : 0
    // },'a')
    // .to('.main-overview .name strong',{ color : '#fff' },'a')
    // .to('.main-overview .name p',{ color : '#888' },'a')
  
    // .addLabel('b')
    // .to('.main-overview',{
    //   background : '#fff'
    // },'b')
    // .to('.main-overview .name strong',{
    //   color : '#000'
    // },'b')
    // .to('.main-overview .name p',{
    //   color : '#000'
    // },'b')
   


    // main-floating
    $('.main-floating .group-icon .icon').each(function(index,element){
      gsap.to(element,{
        scrollTrigger:{
          trigger:'.main-floating',
          start : "0% 100%",
          end : "100% 0%",
          scrub : 1,
          // markers:true,
        },
        y:element.dataset.y
      })
    })



}); //end 
