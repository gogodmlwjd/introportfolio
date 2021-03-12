$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    ///// 창 숨기기 //////
    $(".intro_window").hide();

    $(".my_info_window").hide();
    $(".my_function_window").hide();
    //$(".trash_can_window").hide();

    $(".portfolio_window").hide();


    // 로딩 동작 구현
    var loading = $(".grap_list");

    setInterval(function () {
        loading.animate({
            left: "300px"
        }, 1800, function () {
            loading.css({
                left: "-100px"
            }); /// css ////
        }); /// animate ///////
    }, 800); //// 로딩화면 움직임 //////////

    ///// 시작화면 꺼지게 하기.
    $(".intro_window").delay(4000).fadeOut(2000);

    ////////////////창 클릭 모음/////////////////



    //    var winsize = $("html");
    //    /////////////////////////////////////////////////////////////////
    //    ///////////////// pc 버전 화면 레이아웃 ///////////////////////////
    //    /////////////////////////////////////////////////////////////////
    //    if ($(window).width() > 1400) {
    //        
    //    }; //// if //////////////////////////////
    //    /////////////////////////////////////////////////////////////////
    //    ///////////////// 모바일 버전 화면 레이아웃 ///////////////////////////
    //    /////////////////////////////////////////////////////////////////
    //    else{
    //        
    //    }; //// else ////////////////////////////


    //HELP1 .pop_tab의 마우스를 누르고 있는 동안, popup_design이 움직이게 만들고 싶어요
    // 이게 어렵다면 그냥 움직임이 부자연스럽지 않게만..!(중요)
    // + 중심축? 움직임이 부자연스럽지 않게

    //$(".pop_tab").onmousedown(function () {

    //}); //////////////////////////////////////////




    var infobar = $('<li><div></div><span>내 정보</span></li>')

    //    var funbar = $('<li><div></div><span>내 기능</span></li>')
    //
    //    var trashbar = $('<li><div></div><span>휴지통</span></li>')
    //
    //    var porfolbar = $('<li><div></div><span>포트폴리오</span></li>')
    //    
    //    var bartit = document.createTextNode('A');








    let minfo = {
        "내 정보": '<li class="info_bar"><img src="images/my_document.png" alt="내정보 아이콘" class="tit_icon">내 정보</li>',
        "내 기능": '<li class="funti_bar"><img src="images/my_computer.png" alt="내컴퓨터 아이콘" class="tit_icon">내 기능</li>',
        "휴지통": '<li class="trash_bar"><img src="images/trash_can_clean.png" alt="휴지통 비우기" class="tit_icon">휴지통</li>',
        "포트폴리오": '<li class="porfol_bar"><img src="images/code.png" alt="포트폴리오" class="tit_icon">포트폴리오</li>',
    }; //////// minfo /////////

    var showMenu = function (txt) {

        //넣기전 검사하기
        let stop = 1;
        $(".windows_bar li").each(function (idx, ele) {
            let nowTxt = $(ele).text();
            console.log("있나?" + nowTxt);
            console.log("비교?" + txt);

            if (txt === nowTxt) stop = 0;

        }); //////// each //////////////

        if (stop)
            $(".windows_bar").append(minfo[txt]);
    }; /////////// showMenu 함수 ///////////



    ////////////////////////////////////////////////////

    //// 토글 기능 //
    $(".st_left").click(function () {
        if ($(".start_menu").hasClass("on")) {
            $(".start_menu").removeClass("on");
            $(".start_menu").fadeOut(700);
        } else {
            $(".start_menu").addClass("on");
            $(".start_menu").fadeIn(500);
        }
    }); ////////////// click /////////





    ////////////////// 탭메뉴 기능 적용하기 ///////////////////////

    ////// HELP 전부 일괄적용이 되서 개별적으로 적용하고 싶어요!!/////////////////////
    //1. 최소화 버튼
    $(".mini_btn").click(function () {
        $(".popup_design").css({
            top: "auto"
        }); /// css /////
        $(".popup_design").animate({
            left: 0,
            bottom: 0,
            height: 0,
            opacity: 0
        }, 400); /// animate //////
    }); ///////// click //////////////////



    // 2. 최대화 버튼(토글기능)
    ///////HELP 최대화 버튼 기능은 구현했으나, 드래거블 기능 사용 후 크기확대를 하면 화면에 맞지않습니다.ㅠㅠㅠㅠㅠ
    $(".maxy_btn").click(function () {
        if ($(".popup_design").hasClass("active")) {
            $(".popup_design").removeClass("active");
        } else {
            $(".popup_design").addClass("active");
        }
    }); ////////////// click ////////////////

    //3. 닫기버튼
    $(".close_btn").click(function () {
        $(this).parents(".popup_design").hide();

        let nowTxt = $(this).parent().prev().text().trim();
        console.log("닫기이름:" + nowTxt);


        //  현재메뉴 표시 바에서 li지우기
        $(".windows_bar li").each(function (idx, ele) {
            let delTxt = $(ele).text().trim();
            console.log("있나2?" + delTxt);
            console.log("비교2?" + nowTxt);

            if (nowTxt === delTxt) $(ele).remove();

        }); //////// each //////////////


    }); //////// click ///////////////////////









    //휴지통 비우기
    $(".clean_work h3").click(function () {
        $(".trashcan_txt ul").hide();
    }); ///// click ///////////////////////////




    /////// 포트폴리오창 기능 구현 //////

    var charimg = $(".charact_img");


    //포트폴리오 창 클릭시 넘어가기
    $(".portfolio_intro_wrap").click(function () {
        $(".portfolio_intro_wrap").fadeOut(600);
        $(".finsh_wrap").fadeIn(1200).find(".spani1").css({
            left: "0"
        });
        $(".character_select_wrap").fadeIn(1200);
    }); ////// click /////////////////////////


    //캐틱터 다음 버튼 넘어가기
    $(".charac_select_btn").click(function () {
        $(".character_select_wrap").delay(1600).fadeOut(600);
        charimg.attr("src", "images/character_bk.png");
        $(".map_select_wrap").fadeIn(1200);
    }); ////// click /////////////////////////

    //맵 이전 버튼 넘어가기
    $(".prev_btn").click(function () {
        $(".map_select_wrap").fadeOut(600);

        charimg.attr("src", "images/character.png");
        $(".character_select_wrap").fadeIn(1200);

    }); ////// click /////////////////////////

    //맵 다음 버튼 넘어가기
    $(".map_select_btn").click(function () {
        $(".map_select_wrap").fadeOut(600);
        $(".finsh_wrap").fadeIn(1200).find(".spani1").animate({
            left: "100%"
        }, 6000); /// animate ////

    }); ////// click /////////////////////////

    $(".go_fir").click(function () {
        $(".finsh_wrap").fadeOut(600);
        charimg.attr("src", "images/character.png");
        $(".portfolio_intro_wrap").fadeIn(600);
    }); ///// click //////////////////////




    /////////////// 이펙트 효과 모음 ////////////////
    setInterval(function () {
        $(".porfol_intro_area > h3").animate({
            opacity: 0
        }, 500, function () {
            $(this).animate({
                opacity: 1
            }, 500); ////// animate ///////////////
        }); ////////////////// animate ////////////
    }, 1000); ////////// setInterval //////////////
    ///////////////////////////////////////////////


    //////걷는 애니메이션 효과 /////







    //////////////////// 아이콘 클릭시 창 열기////////////////////////////////////////




    // 2. 내 기능
    $(".my_computer").click(function () {
        $(this).css({
            backgroundColor: "rgba(0, 0, 130, 0.7)"
        }); /// css ////
        $(this).siblings().css({
            backgroundColor: "transparent"
        }); // css ////
    }); ////// click

    $(".my_computer").dblclick(function () {
        var newT = $(window).height() / 2 - $(".my_info_window").height() / 2;
        var newL = $(window).width() / 2 - $(".my_info_window").width() / 2;

        $(this).css({
            backgroundColor: "transparent"
        }); /// css /////
        $(".my_function_window").fadeIn().css({
            zIndex: windowtop++,
            top: newT + "px",
            left: newL + "px"
        }); /// css /////
        $(".funti_bar").show();

        var selm = $("h2", this).text();
        //console.log(selm);

        showMenu(selm);

    }); ////// dbclick //////////////////////////

    // 3. 휴지통
    $(".trash_can").click(function () {
        $(this).css({
            backgroundColor: "rgba(0, 0, 130, 0.7)"
        }); /// css ////
        $(this).siblings().css({
            backgroundColor: "transparent"
        }); // css ////
    }); ////// click

    $(".trash_can").dblclick(function () {
        var newT = $(window).height() / 2 - $(".my_info_window").height() / 2;
        var newL = $(window).width() / 2 - $(".my_info_window").width() / 2;

        $(this).css({
            backgroundColor: "transparent"
        }); /// css /////

        $(".trash_can_window").fadeIn().css({
            zIndex: windowtop++,
            top: newT + "px",
            left: newL + "px"
        }); /// css /////
        $(".trash_bar").show();

        var selm = $("h2", this).text();
        //console.log(selm);
        showMenu(selm);

    }); ////// dbclick //////////////////////////


    // 4. 포트폴리오
    $(".porfol").click(function () {
        $(this).css({
            backgroundColor: "rgba(0, 0, 130, 0.7)"
        }); /// css ////
        $(this).siblings().css({
            backgroundColor: "transparent"
        }); // css ////
    }); ////// click

    $(".porfol").dblclick(function () {
        var newT = $(window).height() / 2 - $(".my_info_window").height() / 2;
        var newL = $(window).width() / 2 - $(".my_info_window").width() / 2;

        $(this).css({
            backgroundColor: "transparent"
        }); /// css /////
        $(".portfolio_window").fadeIn().css({
            zIndex: windowtop++,
            top: newT + "px",
            left: newL + "px"
        }); /// css /////
        $(".porfol_bar").show();

        var selm = $("h2", this).text();
        //console.log(selm);
        showMenu(selm);

    }); ////// dbclick //////////////////////////



    //////////////////////////////////////////////////////////////////////////////

    $(".my_document").click(function () {
        $(this).css({
            backgroundColor: "rgba(0, 0, 130, 0.7)"
        }); /// css ////
        $(this).siblings().css({
            backgroundColor: "transparent"
        }); // css ////
        //        $(".windows_bar").appendChild(bartit);

    }); ////// click


    ////////////////////////// 윈도우 사이즈 조정 //////////////////////////////////

    $(window).resize(function () {
        // width값을 가져오기
        var width_size = window.outerWidth;

        // 1400 이하인지 if문으로 확인
        if (width_size <= 1400) {
            console.log('현재 브라우저 크기가 1400px 이하');

            $(".popup_design").css({
                width: "100%",
                height: "100%",
                left: 0,
                top: 0
            }); /// css //////////
        }
        //////////////////////////// 1400 이상일 경우 //////////////////////////////
        else {
            console.log('현재 브라우저 크기가 1400px 보다 큼');

            var windowtop = 1;

            //        $(".popup_design").draggable().mousedown(function () {
            //            $(this).css({
            //                zIndex: popupWindow
            //            }); // css //////
            //            popupWindow++;
            //        }); /// draggable ////////////

            $(".popup_design").draggable().mousedown(function () {
                $(this).css({
                    zIndex: +windowtop
                }); // css //////
                windowtop++;
            }); /// draggable /////////////

            var newT = $(window).height() / 2 - $(".popup_design").height() / 2;
            var newL = $(window).width() / 2 - $(".popup_design").width() / 2;

            /////////////// 1. 내 정보
            $(".my_document").dblclick(function () {
                console.log($(window).height() / 2 + $(this).height() / 2);
                $(this).css({
                    backgroundColor: "transparent"
                }); /// css /////
                $(".my_info_window").fadeIn().css({
                    zIndex: windowtop++,
                    top: newT + "px",
                    left: newL + "px"
                }); /// css /////

                var selm = $("h2", this).text();
                //console.log(selm);
                showMenu(selm);
            }); ////// dbclick //////////////////////////
            
            
        } ///// else /////////////////////////////////////////////////////////


    });

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
