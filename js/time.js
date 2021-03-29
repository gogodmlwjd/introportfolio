window.addEventListener("DOMContentLoaded", function () {
    console.log("타이머용 js")

    showTime(); // 최초호출!



}); //// 로드구역 //////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

/*//////////////////////////////////////////////////
            함수명: showTime
            날짜표기
*/ ///////////////////////////////////////////////////

// 난수용변수 (전역변수)

var num = 0; //처음에 통과할 수를 할당!

function showTime() {

    var today = new Date();


    var H = today.getHours();
    var M = today.getMinutes();

    console.log("현재시간" + H + ":" + M);



    // 오전/오후넣기
    var noon;
    // 비? 집:놀이동산;
    H >= 12 ? noon = "오후" : noon = "오전";
    //1번째 noon = if /2번째 noon은 else와 같은것

    document.querySelector(".noon").innerText = noon;


    //시간넣기(오후일 경우 12를 뺀다! - 24시간제로 표시되기때문)
    if (H > 12) H = H - 12;


    // 한자리 숫자이면 앞에 "0"넣기
    if (H < 10) H = "0" + H;
    document.querySelector(".hour").innerText = H;

    // 분 넣기
    // 한자리 숫자이면 앞에 "0"넣기
    if (M < 10) M = "0" + M;
    document.querySelector(".min").innerText = M;

    // 초 넣기
    // 한자리 숫자이면 앞에 "0"넣기



    //적용하기 innerText


    document.querySelector(".hour").innerText = H;

    document.querySelector(".min").innerText = M;

}
