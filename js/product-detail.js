$(function () {
    $('.comment_title>a').click(function (e) {
        $(this).addClass('book_current').siblings().removeClass('book_current')
        if ($(this).text()==='商品介绍'){
            $('.shangpi').css({display:'block'})
            $('.pinjia').css({display: 'none'})
        }else {
            $('.pinjia').css({display: 'block'})
            $('.shangpi').css({display:'none'})
        }
        e.stopPropagation();
    })
})