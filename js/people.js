$(function () {
    $('.tabber>a').click(function () {
        $(this).addClass('book_current').siblings().removeClass('book_current')

        if ($(this).text()==='首页'){
            $('.people-home').css({display:'block'})
            $('.myOrder').css({display: 'none'})
        }else {
            $('.people-home').css({display:'none'})
            $('.myOrder').css({display: 'block'})
        }
    })
})