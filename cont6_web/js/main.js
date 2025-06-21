$(document).ready(function(){

    $('#mainSlide').slick({
        arrows : true, //화살표
        dots : true, //페이저
        speed : 500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 1500, //자동재생 시 넘어가는 시간 
        pauseOnHover : true, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수
    });

    $('.gnbMenu li').on('click',function(){
        $('.subMenuG').show();
        $('.gnbCls').show();
    });
    $('.gnbCls').on('click',function(){
        $('.subMenuG').hide();
        $('.gnbCls').hide();
    });

    $('.view li').on('click',function(e){
        e.preventDefault();

        var i = $(this).index();
        $('.cont1 .cont1A').eq(i).show().siblings().hide();

        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.open_btn').on('click',function(e){

        e.preventDefault();

        //toggleClass('클래스명') : class명이 없으면 넣어주고 있으면 빼준다.
        $(this).toggleClass('active');
        $('.over').fadeToggle()

    });

    $('.header_pc .gnb>li').mouseover(function(){
        $(this).addClass('enter')
    }).mouseleave(function(){
        $(this).removeClass('enter')
    })

















})