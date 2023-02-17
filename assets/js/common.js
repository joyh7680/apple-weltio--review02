// header footer btn popup 


$(function(){

    lastScroll = 0;

    $(window).scroll(function(){
        curr = $(window).scrollTop();
        if(curr > lastScroll){
            $('.header').addClass('hide')
        }  else{
            $('.header').removeClass('hide')
        }
        lastScroll = curr;
    })

    // close-box js 
    // @ 맞게 한건지 
    $('.header .search-area button').click(function(e){
        e.preventDefault();
        $('.group-popUp').addClass('on');
    });
    $('.group-popUp .box-area .close-box, .group-popUp .bg-area').click(function(e){
        e.preventDefault();
        $('.group-popUp').removeClass('on');
    });



    // $('html').click(function(e) {   
    //     console.log(e.target);
    //     // if(!$(e.target).hasClass(".box-area")) {
    //     //     alert('영역 밖입니다.');
    //     // }
    // });    






  }); //end