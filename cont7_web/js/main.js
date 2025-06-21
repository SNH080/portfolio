$(document).ready(function(){
    $('.open_btn').on('click',function(e){

        e.preventDefault();

        //toggleClass('클래스명') : class명이 없으면 넣어주고 있으면 빼준다.
        $(this).toggleClass('active');
        $('.over').fadeToggle();

    });

    $('.cont1menu li').on('click', function(e){
        e.preventDefault();
        var i = $(this).index();

        /* $(this).children('img').css({
            opacity: 1
        }),parent(),siblings().children('img').css({
            opacity: 0
        }); */
        $('.cont1video video').eq(i).show().siblings().hide();
        $('.cont1imgBg img').eq(i).show().siblings().hide();
        $('.cont1txtBox div').eq(i).addClass('block').siblings().removeClass('block');
    })


    $('.cont1videoM').slick({
        arrows : true, //화살표
        dots : false, //페이저
        speed : 500, //다음 페이지로 넘어가는 시간
        autoplay : false, //자동재생
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1 //스크롤 시 이동할 이미지 개수
    });

    $('.cont4MS').slick({
        arrows : true, //화살표
        dots : false, //페이저
        speed : 500, //다음 페이지로 넘어가는 시간
        autoplay : false, //자동재생
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1,
        centerMode:true,
    });



















});