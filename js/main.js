$(function(){
      //화면 scroll에 따른 header 위치 변경
    //윈도우 객체에 스크롤 이벤트 설정
  $(window).scroll(function(){
    let winTop = $(this).scrollTop();
    if (winTop >= 100){
        $("header").addClass("sticky");
    }else{
        $("header").removeClass("sticky");
    }
});

    //s1 scrollTrigger
    var swiper = new Swiper(".mainSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".main .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main .swiper-button-next",
          prevEl: ".main .swiper-button-prev",
        },
    });
s
});