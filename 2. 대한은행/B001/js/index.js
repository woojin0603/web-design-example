$(function(){

    // 팝업
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    
    // 탭메뉴
    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()   // 0,1
        $(".tab_contents>ul").removeClass("on")
        $(".tab_contents>ul").eq(idx).addClass("on")
    })

    // 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform", `translateX(${-33.333*count}%)`)
    }, 2500)

})