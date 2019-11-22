$(function () {
    $(window).resize(function () {
        move()
    })
    function move() {
        var maskWidth = $(window).width()
        var maskHeight = $(window).height()
        var maskWhiteWidth = $('.mask-white').width()
        var maskWhiteHeight = $('.mask-white').height()
        var maskWhiteLeft = maskWidth/2 - maskWhiteWidth/2
        var maskWhiteTop = maskHeight/2 - maskWhiteHeight/2

        $('.mask').css({width:maskWidth,height:maskHeight})
        $('.mask-white').css({left:maskWhiteLeft,top:maskWhiteTop})
    }
    move()
    //点击提交按钮
    $('.add>button').click(function () {
        $('.mask').css({display:'block'})
    })
    //关闭和取消
    $('.mask-title>img').click(function () {
        $('.mask').css({display: 'none'})
    })
    $('.button-container>button:first-of-type').click(function () {
        $('.mask').css({display: 'none'})
    })
    $('.button-container>button:last-of-type').click(function () {
        alert('b')
    })
})