    /*=======헤더 영역========*/
    $(function(){
    $(".toolkit").hide();
    $(".buyers").bind("click focusin",function(){
        $(this).children(".toolkit").stop().slideDown();
        $(this).css({"backgroundColor":"#ccc"});
        $(".buyers ul li a").css({"color":"#333"});
    }).bind("unclick focusout",function(){
        $(this).children(".toolkit").stop().slideUp();
        $(this).css({"backgroundColor":"green"});
    });

    /* 슬라이드시 헤더 변경 */

    $(window).scroll(function(){
        var nowScroll = $(window).scrollTop();
        var nowWidth = $(window).width();
        if(nowScroll > 100 && nowWidth > 768){
            $(function(){
                $("#gnb").hide();
                $("#header").css({"height":"69px"});
                $("#logo").css({"height":"69px"});
                $("#logo h1").css({"height":"59px"});
                $("#logo h1 a").css({"height":"59px","width":"70px"});
                $("#logo img").css({"margin-top":"15px"});
                $(".windows").css({"top":"69px"});
                $(".searchIcon").css({"top":"0"}).show();
                $("#searchbox").css({"top":"0"});
            });
        }

        else if(nowWidth < 768){
            $(function(){
                $("#gnb").hide();
            });
        }

        else{
            $("#mobileNavIcon").hide();
            $("#gnb").slideDown(400);
            $("#header").css({"height":"105px"});
            $("#logo").css({"height":"105px"});
            $("#logo h1").css({"height":"105px"});
            $("#logo h1 a").css({"height":"105px","width":"110px"});
            $("#logo img").css({"margin-top":"20px"});
            $(".windows").css({"top":"105px"})
            $(".searchIcon").css({"top":"35px"});
            $("#searchbox").css({"top":"35px"});
        }
    });

    /* 네비 윈도우 창 제이쿼리-----> 모바일과 공통으로 적용하기 위해 클래스속성 적용 */
    var clicked = false;
    $(".windows").hide();
    $(".windows div").hide();
    $(".vehicles").click(function(){
        if(clicked == false){
            $(".windows").show().css({"width":"100%"});
            $(".range_rover").fadeIn(250,function(event){
                $(".range_rover_sport").fadeIn(250,function(event){
                    $(".range_rover_evoque").fadeIn(250,function(event){
                        $(".new_discovery_sport").fadeIn(250,function(event){
                            $(".discovery").fadeIn(250,function(event){
                                $(".freelander2").fadeIn(250,function(event){
                                    $(".special").fadeIn(250,function(event){
                                        $(".lineup").fadeIn(250);
                                    });
                                });
                            });
                        });
                    });
                });  
            });
            clicked = true;
        }
        else{
            $(".windows").hide();
            $(".windows div").hide();
            clicked = false;
        }
    });

    /* 검색영역 클릭이벤트 */
    $("#searchbox").hide();
    $(".searchIcon").click(function(){
        $("#gnb").slideDown(300);
        $("#header").css({"height":"105px"});
        $("#logo").css({"height":"105px"});
        $("#logo h1").css({"height":"105px"});
        $("#logo h1 a").css({"height":"105px","width":"110px"});
        $("#logo img").css({"margin-top":"22px"});
        $(".windows").css({"top":"105px"});
        $(".searchIcon").css({"top":"36px"});
        $("#searchbox").css({"top":"36px"});
        $(".mobileGnb #searchbox img").hide();

        if(clicked == false){
            $("#searchbox").show('slide', {direction: 'right'}, 300);
            $("#searchbox form").children("input").focus();
            $(".searchIcon img").attr("src","img/close.png");
            clicked = true;

        }
        else{
            $("#searchbox").hide('slide', {direction: 'right'}, 300);
            $(".searchIcon img").attr("src","img/search_icon.png");
            clicked = false;
        }
    });


    // 모바일 영역
    $("#mnav a img").click(function(){
        if(clicked == false){
            $("#mnav").css({"left":"30%"}).animate(1000,"swing");
            clicked = true;
        }
        else{
            $("#mnav").css({"left":"100%"});
            clicked = false;
        }
    });

    var navclick1 = false;
    $(".mgnb ul li").hide();
    $(".mvehicles").click(function(){
        if(navclick1 == false){
            $(".mvehicles ul li").slideDown();
            navclick1 = true;
        }else{
            $(".mvehicles ul li").slideUp();
            navclick1 = false;
        }
    });
    var navclick2 = false;
    $(".ownership").click(function(){
        if(navclick2 == false){
            $(".ownership ul li").slideDown();
            navclick2 = true;
        }else{
            $(".ownership ul li").slideUp();
            navclick2 = false;
        }
    });
    var navclick3 = false;
    $(".experiences").click(function(){
        if(navclick3 == false){
            $(".experiences ul li").slideDown();
            navclick3 = true;
        }else{
            $(".experiences ul li").slideUp();
            navclick3 = false;
        }
    });
    var navclick4 = false;
    $(".aboveAndBeyond").click(function(){
        if(navclick4 == false){
            $(".aboveAndBeyond ul li").slideDown();
            navclick4 = true;
        }else{
            $(".aboveAndBeyond ul li").slideUp();
            navclick4 = false;
        }
    });

    });


/*=======컨텐츠 영역========*/

//----------로그인 영역---------//

$(function(){
    $("#loginbox, #full").hide();
    $("#login").click(function(){
        $("#loginbox, #full").show();
        $("#loginbox form input:eq(0)").focus();
    });
    $("#loginbox img").click(function(){
        $("#loginbox, #full").hide();
    });
});

//----------비디오 영역 슬라이드---------//
$(function(){
    $("#video").prepend($(".videos:last"));
    $("#video").css({"marginLeft":"-100%"});
    $(".ctrNext").click(function(){
        $("#video").animate({"marginLeft":"-=100%"},1000,"swing",function(){
            $("#video").append($(".videos:first"));
            $("#video").css({"marginLeft":"-100%"});
        });
    });
    $(".ctrPrev").click(function(){
        $("#video").animate({"marginLeft":"+=100%"},1000,"swing",function(){
            $("#video").prepend($(".videos:last"));
            $("#video").css({"marginLeft":"-100%"});
        });
    });
});
//======== 재생관련 버튼 컨트롤 =======//

//----------자동슬라이드 영역 ---------//
function vidend1(){
    $(".ctrNext").click();
    var video2 = document.getElementById('vid2');
    video2.play();
    $("#heading h2").html("뉴 레인지로버 이보크 컨버터블");
    $("#heading span").html("사계절용 컨버터블");
}

function vidend2(){
    $(".ctrNext").click();
    var video3 = document.getElementById('vid3');
    video3.play();
    $("#heading h2").html("NEW DISCOVERY SPORT");
    $("#heading span").html("디스커버리 패밀리의 새로운 컴팩트 SUV");
}   

function vidend3(){
    $(".ctrNext").click();
    var video4 = document.getElementById('vid4');
    video4.play();
    $("#heading h2").html("45년간 지켜온 디자인 철학");
    $("#heading span").html("최고의 전통과 명성을 이어온 레인지로버");
}

function vidend4(){
    $(".ctrNext").click();
    var video5 = document.getElementById('vid5');
    video5.play();
    $("#heading h2").html("THE RANGE ROVER");
    $("#heading span").html("정제된 성능의 정점");
}

function vidend5(){
    $(".ctrNext").click();
    var video1 = document.getElementById('vid1');
    video1.play();
    $("#heading h2").html("액션, 본드 카 메이킹 필름");
    $("#heading span").html("스펙터의 비하인드 스토리와 독점 인터뷰");
}

//----------자동슬라이드 끝 ---------//

//----------슬라이드 버튼 컨트롤 영역 ---------//

$(function(){
    var video1 = document.getElementById('vid1');
    var video2 = document.getElementById('vid2');
    var video3 = document.getElementById('vid3');
    var video4 = document.getElementById('vid4');
    var video5 = document.getElementById('vid5');
    $(".ctrNext").bind("mouseover focusin", function(){

        if(video1.play){
            video1.pause();
        }
        if(video2.play){
            video2.pause();
        }
        if(video3.play){
            video3.pause();
        }
        if(video4.play){
            video4.pause();
        }
        if(video5.play){
            video5.pause();
        }
    });

    $(".ctrPrev").bind("mouseover focusin", function(){
        
        if(video1.play){
            video1.pause();
        }
        if(video2.play){
            video2.pause();
        }
        if(video3.play){
            video3.pause();
        }
        if(video4.play){
            video4.pause();
        }
        if(video5.play){
            video5.pause();
        }
    });

    //--------- 키보드 사용시 이벤트 ---------//
    $(document).keydown(function(){
        if(event.keyCode == '27'){
            video1.pause();
            video2.parse();
            video3.parse();
            video4.parse();
            video5.parse();
        }
    });
});
