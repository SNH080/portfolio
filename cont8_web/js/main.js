$(document).ready(function(){
    
    $('#wrap .cont').on('mousewheel',function(e,d){

        if(d>0){ //d>0 : 휠을 올렸을 때

            var prv = $(this).prev().offset().top;

            $('html,body').stop().animate({
                scrollTop : prv 
            })
        }else if(d<0){ //d<0 : 휠을 내렸을 때

            var nxt = $(this).next().offset().top;

            $('html,body').stop().animate({
                scrollTop : nxt 
            })

        } // if

    }); // mousewheel function

    $(window).on('scroll', function(){
        var scr = $(window).scrollTop();
        if(scr > 0){
            $('.header').removeClass('on')
        }else{
            $('.header').addClass('on')
        }
    });

    $(window).on('scroll', function(){
        var scr = $(window).scrollTop();
        if(scr > 3240){
            $('.header').removeClass('color')
        }else{
            $('.header').addClass('color')
        }
    });

    $('.cont2 .right .content').slick({
        arrows : false, //화살표
        dots : false, //페이저
        speed : 1500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 2000, //자동재생 시 넘어가는 시간 
        pauseOnHover : false, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 3, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수
    });

    $('.cont3 .left ul').slick({
        arrows : false, //화살표
        dots : false, //페이저
        speed : 1500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 2000, //자동재생 시 넘어가는 시간 
        pauseOnHover : false, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 5, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수
    });

    $('.cont4 .tag div').on('click',function(e){
        e.preventDefault();

        var i = $(this).index();
        $('.cont4 .tab').eq(i).show().siblings().hide();

        $(this).addClass('on').siblings().removeClass('on');
    });



    

   

    
   

    

    




















    


















})