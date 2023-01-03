


$(function(){
    $(".nav>li").mouseenter(function(){
         $(this).children(".sub").stop().slideDown();
     });
     $(".nav>li").mouseleave(function(){
         $(this).children(".sub").stop().slideUp();
     });
 });

 (function(){

	
	$.fn.smint = function( options ) {

		// 사용자 div에 클래스 추가
		$(this).addClass('smint')

		var settings = $.extend({
            'scrollSpeed '  : 500
            }, options);


		return $('.smint a').each( function() {

            
			if ( settings.scrollSpeed ) {

				var scrollSpeed = settings.scrollSpeed

			}
       	$(this).on('click', function(e){


				// 사용자 div의 높이를 가져옵니다. 이것은 스크롤을 해제하는 데 사용되므로 emenu가 처음 스크롤 한 div의 내용과 겹치지 않습니다.
				var selectorHeight = $('.smint').height();   

        		// 클릭하면 페이지 점프를 만드는 빈 hrefs 중지
				e.preventDefault();

				// 방금 클릭 한 버튼의 ID를 가져옵니다.
		 		var id = $(this).attr('id');
				
				// 버튼 ID에서 탐색 메뉴의 높이를 뺀 것과 일치하는 div 클래스의 상단에서 거리를 가져옵니다. 이것은 탐색이 처음에 내용과 겹치지 않음을 의미합니다.
				var goTo =  $('div.'+ id).offset().top -selectorHeight;
				
				// 페이지를 원하는 위치로 스크롤하십시오!
				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);
			});	          
		});
	}
})();



$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top_icon').fadeIn();
    } else {
        $('.top_icon').fadeOut();
    }
});
