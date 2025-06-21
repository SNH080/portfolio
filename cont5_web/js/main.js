$(document).ready(function(){
    //
    var winHeight = $(window).height();

    $(window).on('resize', function(){
        winHeight = $(window).height();
    });

    $('.scroll li').on('click', function(){

        var i = $(this).index();
        $('hight * html,body').animate({
            'scrollTop' : winHeight
        });

    }); //scroll>li click

    $('.scroll li').on('click', function(){

        var i = $(this).index();
            
        if(i == 0){
            $('html,body').animate({
                'scrollTop' : winHeight * 0
            });
        }else if(i == 1){
            $('html,body').animate({
                'scrollTop' : winHeight * 1
            });
        }else if(i == 2){
            $('html,body').animate({
                'scrollTop' : winHeight * 2
            });
        }else if(i == 3){
            $('html,body').animate({
                'scrollTop' : winHeight * 3
            });
        }else if(i == 4){
            $('html,body').animate({
                'scrollTop' : winHeight * 4
            });
        }else if(i == 5){
            $('html,body').animate({
                'scrollTop' : winHeight * 5
            });
        }else if(i == 6){
            $('html,body').animate({
                'scrollTop' : winHeight * 6
            });
        }else if(i == 7){
            $('html,body').animate({
                'scrollTop' : winHeight * 7
            });
        }else if(i == 8){
            $('html,body').animate({
                'scrollTop' : winHeight * 8
            });
        };
    }); //gnb>li click

    function scrollPage(){

        var scr = $(window).scrollTop();
        for(i=0; i<$('.scroll li').length; i++){
            
            if(scr >= winHeight*i && scr < winHeight*(i+1)){
                $('.scroll li').removeClass('on');
                $('.scroll li').eq(i).addClass('on');
            };

        };
    };//scrollPage function

    $(window).on('scroll',scrollPage);
    scrollPage();

    $('.wrap .cont').on('mousewheel',function(e,d){

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
    //

    $('.side .top').on('click', function(){
        $('html,body').animate({
            'scrollTop':0
        }, 500);
    }); //scrollTop

    $('.side .down').on('click', function(){
        $('html,body').animate({
            'scrollTop' : winHeight*8
        }, 500);
    }); //scrollDown

    $('.slider').slick({
        arrows : false, //화살표
        dots : true, //페이저
        speed : 1500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 2000, //자동재생 시 넘어가는 시간 
        pauseOnHover : false, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수 
        //vertical : true //세로 슬라이드
        // centerMode: true,
        // centerPadding: '17%'
    });
    $('.cont5_slide').slick({
        arrows : true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll:1,
        variableWidth: true,
        autoplay:true,
        autoplaySpeed:1500,
    });

    $('.cont4_slide').slick({
        arrows : false, //화살표
        dots : false, //페이저
        speed : 1500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 2000, //자동재생 시 넘어가는 시간 
        pauseOnHover : false, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 2, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수 
    });

    $('.cont4Text').slick({
        arrows : false, //화살표
        dots : false, //페이저
        speed : 1500, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생 
        autoplaySpeed : 2000, //자동재생 시 넘어가는 시간 
        pauseOnHover : false, //마우스 하버 시 자동재생 멈춤
        infinite : true, //맨끝 이미지에서 다시 맨앞으로 이동
        slidesToShow : 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤 시 이동할 이미지 개수
        fade:true,
    });




















    


















})