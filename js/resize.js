$(function () { /////// jQB ///////////////////////
    $(window).resize(function () {
        // width값을 가져오기
        var width_size = window.outerWidth;
        //var width_size = window.width;

        // 1400 이하인지 if문으로 확인
        if (width_size <= 1400) {
            console.log('현재 브라우저 크기가 1400px 이하');

            $(".popup_design").draggable("option", "disabled", true);

            $(".my_document").click(function () {

                console.log($(window).height() / 2 + $(this).height() / 2);
                $(this).css({
                    backgroundColor: "transparent"
                }); /// css /////
                let selm = $("h2", this).text();
                //console.log(selm);

            }); ////// dbclick //////////////////////////

            $(".my_computer").click(function () {

                $(this).css({
                    backgroundColor: "transparent"
                }); /// css /////
                $(".funti_bar").show();

                let selm = $("h2", this).text();
                //console.log(selm);

            }); ////// dbclick //////////////////////////

            $(".trash_can").click(function () {

                $(this).css({
                    backgroundColor: "transparent"
                }); /// css /////

                $(".trash_bar").show();

                let selm = $("h2", this).text();
                //console.log(selm);

            }); ////// dbclick //////////////////////////

            // 4. 포트폴리오
            $(".porfol").click(function () {

                $(this).css({
                    backgroundColor: "transparent"
                }); /// css /////

                $(".porfol_bar").show();

                let selm = $("h2", this).text();
                //console.log(selm);

            }); ////// dbclick //////////////////////////

            // 탭메뉴 잉여 기능 지우기 //
            var mini = $(".popup_design").find(".mini_btn");
            var maxy = $(".popup_design").find(".maxy_btn");

            mini.hide();
            maxy.hide();
            
            
            $(".st_left").removeClass("import");
            $(".st_left").show();
            
            $(".st_left").click(function () {
                $(this).fadeOut(200);
            }); ///// click //////
            $(".st_token").click(function () {
                $(".st_left").fadeIn(200);
            });


        }
        //////////////////////////// 1400 이상일 경우 //////////////////////////////
        else {
            console.log('현재 브라우저 크기가 1400px 초과');

            //드래거블 재활성화
            var windowtop = 1;

            $(".popup_design").draggable("option", "disabled", false);

            // 탭메뉴 잉여 기능 지우기 //
            var mini = $(".popup_design").find(".mini_btn");
            var maxy = $(".popup_design").find(".maxy_btn");

            mini.show();
            maxy.show();
            
            $(".st_left").addClass("import");

            //            if ($(".st_top").css({display: "block"})) {
            //                $(".st_left").show();
            //            } /////////

        } ///// else /////////////////////////////////////////////////////////


    }); /// resize //////////


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
