$(document).ready(function(){

    var winHeight = $(window).height();

    $(window).on('resize', function(){
        winHeight = $(window).height();
    });

    $('.gnb ul li').on('click', function(){

        var i = $(this).index();
            
        if(i == 0){
            $('html,body').animate({
                'scrollTop' : winHeight * 0
            });
        }else if(i == 1){
            $('html,body').animate({
                'scrollTop' : winHeight * 2
            });
        }else if(i == 2){
            $('html,body').animate({
                'scrollTop' : winHeight * 3
            });
        }else if(i == 3){
            $('html,body').animate({
                'scrollTop' : winHeight * 4
            });
        }else if(i == 4){
            $('html,body').animate({
                'scrollTop' : winHeight * 8
            });
        }else if(i == 5){
            $('html,body').animate({
                'scrollTop' : winHeight * 9
            });
        }else if(i == 6){
            $('html,body').animate({
                'scrollTop' : winHeight * 10
            });
        };
    }); //gnb>li click

    $('.cont1 a').on('click',function(){
        $('html,body').animate({
            'scrollTop' : winHeight * 1
        });
    }) //cont1 착륙하기 버튼

    $('.cont3_1').on('click',function(){
        $('html,body').animate({
            'scrollTop' : winHeight * 3
        });
    })
    $('.cont3_2').on('click',function(){
        $('html,body').animate({
            'scrollTop' : winHeight * 4
        });
    })
    $('.cont3_3').on('click',function(){
        $('html,body').animate({
            'scrollTop' : winHeight * 8
        });
    })
    $('.cont3_4').on('click',function(){
        $('html,body').animate({
            'scrollTop' : winHeight * 9
        });
    })

    function scrollPage(){

        var scr = $(window).scrollTop();
        for(i=0; i<$('.gnb ul li').length; i++){
            
            if(scr >= winHeight*0 && scr < winHeight*2){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(0).addClass('on');
            };
            if(scr >= winHeight*2){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(1).addClass('on');
            };
            if(scr >= winHeight*3){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(2).addClass('on');
            };
            if(scr >= winHeight*4 && scr < winHeight*8){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(3).addClass('on');
            };
            if(scr >= winHeight*8){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(4).addClass('on');
            };
            if(scr >= winHeight*9){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(5).addClass('on');
            };
            if(scr >= winHeight*10){
                $('.gnb ul li').removeClass('on');
                $('.gnb ul li').eq(6).addClass('on');
            };
        };
    };//scrollPage function

    $(window).on('scroll',scrollPage);
    scrollPage();

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

    $('.cont5 .cont5_btn .proBtn').on('click', function(e){
        e.preventDefault();
        
        $('.proBox1').show();
        $('.processPopup1').show();
    });
    $('.proBox1').on('click', function(e){
        e.preventDefault();

        $('.proBox1').hide();
        $('.processPopup1').hide();
    });

    $('.cont6 .cont6_btn .proBtn').on('click', function(e){
        e.preventDefault();
        
        $('.proBox2').show();
        $('.processPopup2').show();
    });
    $('.proBox2').on('click', function(e){
        e.preventDefault();

        $('.proBox2').hide();
        $('.processPopup2').hide();
    });
    
    var chart = $('.chart');
    var chartOST = chart.offset().top - 700;
    var excuted = false;
    
    
    
    $(window).scroll(function(){
       var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(excuted == false){
                chart.each(function(){
               var item = $(this);
               var title = item.find('h2');
               var targetNum = title.attr('data-num');
               var circle = item.find('circle');
                
                
               $({rate:0}).animate({rate:targetNum},
                         {
                   
                   duration:1500,
                   progress:function(){
                       var now = this.rate;
                       var amount = 395 - (395*now/100);
                       /*console.log(now);*/
                       title.text(Math.floor(now));
                       circle.css({strokeDashoffset:amount});
                   }
               });
            }); //chart each
            excuted = true;
         }
        }
    });//cont4 스킬그래프























    


















})