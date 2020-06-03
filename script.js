$(() => {

    $('.login').click(function(){
        $('.signup-modal-wrapper').fadeIn(300);
    });

    $('.fa-window-close').click(function(){
        $('.signup-modal-wrapper').fadeOut(300);
    })

    $('#top').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },'slow')
    });

    $('#next').click(function(){
        $('.n').show();
    });
    $('#more').click(function(){
        $('.nn').fadeIn();
    });

    /*ギャラリー*/
    function animation(){
        $('.fadeInUp').each(function(){
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
            
            /*コンソール確認*/
            console.log(target + 'ターゲットまでの高さ');
            console.log(scroll + 'スクロール量');
            console.log(windowHeight + 'ウィンドウの高さ');
            

        });
    }

    animation();

    $(window).scroll(function (){
        animation();
        
    });

    $('.menu-trigger').click(function(){
        $(this).toggleClass('active');
    });

    $('.menu-trigger').click(function(){
        if($('.taburetto-modal-wrapper').hasClass('open'))
        {
            $('.taburetto-modal-wrapper').removeClass('open').slideUp();
        }else{
            $('.taburetto-modal-wrapper').addClass('open').slideDown();
        }
    });
    
})