$(function(){
    //결제내역확인 약관동의 하단팝업 
    $('.fooT .fooI').css('display','none')
    $('.fooT .payalert .up').click(function(){
        $('.fooT .fooI').slideToggle()
        console.log('click');
        $(this).text( $(this).text() == '닫기' ? "보기" : "닫기");
    })
    // 약관동의
    $("#checkall").click(function(){
        //클릭되었으면
        if($("#checkall").prop("checked")){
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
            $("input[name=chk]").prop("checked",true);
            //클릭이 안되있으면
        }else{
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
            $("input[name=chk]").prop("checked",false);
        }
    })
    // 사이드 슬라이드 메뉴
     $('.header .nav').click(function(){
        $('.sideBackground').animate({marginLeft: 0},400)
        $('.sideMenu').animate({marginLeft: '30%'},400)
        $('.sideBackground .dim').animate({marginLeft: 0},400)
        $('.sideMenu .sideMenu_header .close').css('display','block')
    })
    $('.sideMenu .sideMenu_header .close').click(function(){
        $('.sideBackground').animate({marginLeft: '100%'},400)
        $('.sideMenu').animate({marginLeft: '100%'},400)
        $('.sideBackground .dim').animate({marginLeft: '100%'},400)
        $(this).css('display','none')
    })
    // 주사용카드 하단팝업 disable설정
    $('.mcPopup .mcContent .mcBottom .rdBox .rd').click(function(){
        $('.mcFooter .btn').attr('disabled',false)
        $('.mcFooter .btn').css('background-color','#b42427')
    })
    // 주사용카드 하단팝업 event
    $('.listBox .card').click(function(){
        var index = $( ".listBox .card" ).index( this );
        console.log(index);
        $('.mcBackground').animate({marginBottom:0})
        $('.mcPopup').animate({marginBottom:0})
        $('.mcBackground .dim').animate({marginBottom:0})
    })
    $('.mcPopup .mcHeader .close').click(function(){
        $('.mcBackground').animate({marginBottom:'-100vh'})
        $('.mcPopup').animate({marginBottom:'-100vh'})
        $('.mcBackground .dim').animate({marginBottom:'-100vh'})
    })
    //카드리스트 down버튼
    $('.listBox .card .down').click(function(){
        $(this).toggleClass("up")
        $('.slide').toggleClass("opacity")
        console.log('listBox')
        $('.contentInner').toggleClass('qr')
        $('.contentInner.bar').toggleClass('bars')
    })
    $('.payBox .first .down').click(function(){
        $(this).toggleClass("up")
        $('.slide').toggleClass("opacity")
        console.log('payBox')
        $('.contentInner').toggleClass('payI')
    })
    
    //비밀번호 자동이동
    function autofocus(formSelector, nextFocus) {
    function validCheck(rulename, val) {
    var isValid = true;
    switch(rulename) {
        case 'number':
            var re = /[^0-9]/g;
            isValid = !re.test(val);
            break;
        }
        return isValid;
    }
    var $inputs = $(formSelector);
    // var $inputs = $('.serial > input, .pin > input');
    $inputs.each(function(idx) {
        var $input = $(this);
        $input.on('keyup', function(e) {
            var val = $input.val();
            if(!validCheck($input.data('valid'), val)) {
                $input.val(val.substring(0, val.length - 1));
                return;
        }
        if(parseInt($input.attr('maxlength')) == val.length) {
            $input.off('keyup'); //이벤트 삭제
            if(idx + 1 < $inputs.length) {
                $inputs[idx + 1].focus(); //다음 요소에 포커스
                $('.passwordNum .secret-card .row .serial input').eq(idx).css('background-color','#b42427')
                $('.passwordNum .secret-card .row .serial input').eq(idx).css('color','#b42427')
            }
            else {
                if(nextFocus)
                $(nextFocus).focus();
                $('.passwordNum .secret-card .row .serial input').eq(idx).css('background-color','#b42427')
                $('.passwordNum .secret-card .row .serial input').eq(idx).css('color','#b42427')
                }
            }
        });
    }).on('focus', function(e) {
        $(this).val(''); //포커스 들어갈때 초기화
        });
    }
    autofocus('.secret-card input[type="password"]', '#btnNext'); //화면에서 호출
})

