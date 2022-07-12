$(document).ready(function () {
  //html 태그의 lang 을 알아보자

  // header를 저장한다.
  let header = $('.header');
  let gnb = $('.gnb');
  // 펼쳤을 때 높이값
  let gnbMaxHeight = gnb.outerHeight();
  // 닫혔을 때의 높이값
  let gnbMinHeight = header.outerHeight();
  // 기본 header의 높이값
  header.css('height', gnbMinHeight);


  gnb.mouseenter(function () {
    header.css('height', gnbMaxHeight);
    // header.addClass('header-open')
  });
  gnb.mouseleave(function () {
    header.css('height', gnbMinHeight);
    // header.removeClass('header-open');
    // depth_1_Li.eq(1).find('>a').addClass('depth1-focus')
  })
  //주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');
  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      depth_1_Li.find('>a').removeClass('depth1-focus')
      //li 의 > a 를 찾는다.
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function () {
      //li 의 > a 를 찾는다.
      $(this).find('>a').removeClass('depth1-focus');
    });
  });

  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  // part 영역인 
  // html 상단 (top)으로 부터
  // 어느만큼 떨어진 위치 px 값
  let partY = $('.part').offset().top;
  visualBt.click(function(){
    $('html').stop().animate({
      scrollTop: partY
    });
  });

  //part 배경 배치
  let partListLi = $('.part-list > li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    $(this).css('background-position-x', -tgX);

  });

});

window.onload = function () {

}