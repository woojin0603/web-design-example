$(function(){

    // 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    }, 2500)

    // 메뉴
    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")

        let idx = $(this).index()
        $(".tab_contents>ul").removeClass("on")
        $(".tab_contents>ul").eq(idx).addClass("on")
    })

    // 팝업
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

})