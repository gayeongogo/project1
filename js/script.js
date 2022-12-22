//메뉴
$(".dep1").on({"mouseover focusin":function(){
    $(this).next(".bg").stop().slideDown(300)
},"mouseout":function(){
    $(this).next(".bg").stop().slideUp(500)
}});

//화면크기조정
let base=100;
let mybody=$('body');
$('.zoom a').on('click', function(){
    let zNum=$('.zoom a').index(this);
    
    if(zNum==0){
        base += 1
    }else{
        base -= 1
    }

    mybody
    .css('overflow-y', 'auto')
    .css('transform', 'origin', '50% 0%')
    .css('transform','scale('+base/100+')')
    .css('zoom', base+'%')
    return false;
})

// 메인슬라이드배너
$(function(){
    let slideLists=$('.slideList li');
    let prevbtn=$('.btnSlidePrev');
    let nextbtn=$('.btnSlideNext');
    let btnSlidepp=$('.btnSlidepp');
    let current=0;
    let setIntervalId=undefined;
    let ppbtn=true;
    
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prve=slideLists.eq(current);
            move(prve, 0, '-100%');
            current++;
            if(current==4){current=0}
            let next=slideLists.eq(current);
            move(next, '100%', 0)
        },2000);
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end});
    }

    $('.slideList li, .btnSlidePrev, .btnSlideNext').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });

    nextbtn.click(function(){
        let prve=slideLists.eq(current);
        move(prve, 0, '-100%');
        current++;
        if(current==4){current=0}
        let next=slideLists.eq(current);
        move(next, '100%', 0)
    })

    prevbtn.click(function(){
        let prve=slideLists.eq(current);
        move(prve, 0, '100%');
        current--;
        if(current==-4){current=0}
        let next=slideLists.eq(current);
        move(next, '-100%', 0)
    })

    btnSlidepp.click(function(){
        if(ppbtn==true){
            $(this).addClass('add');
            clearInterval(setIntervalId);
            ppbtn=false;
        }else{
            $(this).removeClass('add');
            timer();
            ppbtn=true;
        }
    })


});



//맞춤서비스 탭
$('.main_cont1 .inner').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('.mainTap li a');
    let tapConts=tabDiv.find('.tapCont')
    let lastAnchor;
    let lastTapCont;

    lastAnchor=anchors.filter('.on')
    lastTapCont=$(lastAnchor.attr('href'));

    tapConts.hide()
    lastTapCont.show()

    anchors.click(function(e){
        e.preventDefault();
        currentAnchor=$(this);
        currentTapCont=$(currentAnchor.attr('href'));

        currentAnchor.addClass('on')
        lastAnchor.removeClass('on')

        lastTapCont.hide();
        currentTapCont.show();

        lastAnchor=currentAnchor;
        lastTapCont=currentTapCont;
    })
});


// 알림 탭

$('.main_cont2 .inner').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('.mainTap li a');
    let tapConts=tabDiv.find('.tapCont')
    let lastAnchor;
    let lastTapCont;

    lastAnchor=anchors.filter('.on')
    lastTapCont=$(lastAnchor.attr('href'));

    tapConts.hide()
    lastTapCont.show()

    anchors.click(function(e){
        e.preventDefault();
        currentAnchor=$(this);
        currentTapCont=$(currentAnchor.attr('href'));

        currentAnchor.addClass('on')
        lastAnchor.removeClass('on')

        lastTapCont.hide();
        currentTapCont.show();

        lastAnchor=currentAnchor;
        lastTapCont=currentTapCont;
    })
});



/* 유관기관 배너 */

//버튼
let $rlNext=$('.rlNext');
let $rlPre=$('.rlPre');
let $rlpp=$('.rlpp');
let ppbtn=true;

let $moving=$('.rolling>ul');
let startSlide;

//다음
$rlNext.click(function(){
    $moving.stop().animate({left:230*-1},500,function(){
        $(this).children("li:first").insertAfter($(this).children("li:last"));
        $(this).css({left: 0})
    });
});
//이전
$rlPre.click(function(){
    $moving.children("li:last").insertBefore($moving.children("li:first"));
    $moving.css({left:230*-1})
    $moving.stop().animate({left:0},500);
});
//재생/정지
$rlpp.click(function(){
    if(ppbtn==true){
        $(this).addClass('add');
        clearInterval(startSlide);
        ppbtn=false
    }else{
        $(this).removeClass('add');
        startSlide=setInterval(function(){
            $moving.stop().animate({left:230*-1},500,function(){
                $(this).children("li:first").insertAfter($(this).children("li:last"));
                $(this).css({left: 0})
            });
        },2000);
        ppbtn=true
    }
})



//자동롤링(setinterval)
slideBn();
function slideBn(){
    startSlide=setInterval(function(){
        $moving.stop().animate({left:230*-1},500,function(){
            $(this).children("li:first").insertAfter($(this).children("li:last"));
            $(this).css({left: 0})
        });
    },2000);
}

//자동롤링제어(clearInterval)(버튼을 누를 때는 자동롤링이 겹쳐 움직이지 않게 하기 위함)
$('.rolling>ul, .rlPre, .rlNext').hover(function(){
    clearInterval(startSlide);
},function(){
    slideBn();
})


//전국검찰청 바로가기
/* let siteBtn= */



    

