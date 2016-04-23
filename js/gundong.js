

	$(function() {
		//左侧导航随屏滚
		var clienthight=document.body.clientHeight;//获取浏览器的高度
		var winheight=$(window).height() ;
		if (winheight> 100&&winheight<700) {
			$(window).on('scroll', function() {
				var start = 115; //临界点，大于此值时为fixed状态，小于此值时为absolute;
				var $elem = $('.slider');
				var curL = $('.wrap').offset().left;
				var curT = $(window).scrollTop();
				if (curT > start&&(curT-504)>0) {//判断滑动高度是否大于页底高度
					$elem.find('.set-btn').hide()
					$elem.find('.img').addClass('suimg')
					$elem.find('.user-pic-bg').addClass('su-user-pic-bg')
					$elem.find('.friend').addClass('r30')
					$elem.css('position', 'fixed').css('left', curL + 'px').css('top','-350px');
				}
			else if (curT<start&&(curT-504)<0) {
					$elem.find('.set-btn').hide()
					$elem.find('.img').addClass('suimg')
					$elem.find('.user-pic-bg').addClass('su-user-pic-bg')
					$elem.find('.friend').addClass('r30')
					$elem.css('position', 'fixed').css('left', curL + 'px').css('top','100px');
				}
			else if (curT<start) {
					$elem.find('.set-btn').hide()
					$elem.find('.img').addClass('suimg')
					$elem.find('.user-pic-bg').addClass('su-user-pic-bg')
					$elem.find('.friend').addClass('r30')
					$elem.css('position', 'fixed').css('left', curL + 'px').css('top','50px');
				}
				else {
					$elem.find('.set-btn').show()
					$elem.find('.img').removeClass('suimg')
					$elem.find('.user-pic-bg').removeClass('su-user-pic-bg')
					$elem.find('.friend').removeClass('r30')
					$elem.css('position', 'absolute').css('left', '0').css('top', '-70px'); //-175声明在css中
				}
			});
		}
			if (winheight >= 3000) {
			$(window).on('scroll', function() {
				var start = 115; //临界点，大于此值时为fixed状态，小于此值时为absolute;
				var $elem = $('.slider');
				var curL = $('.wrap').offset().left;
				var curT = $(window).scrollTop();
				if (curT > start) {
					$elem.find('.set-btn').hide()
					$elem.find('.img').addClass('suimg')
					$elem.find('.user-pic-bg').addClass('su-user-pic-bg')
					$elem.find('.friend').addClass('r30')
					$elem.css('position', 'fixed').css('left', curL + 'px').css('top','-210px');
				} else {
					$elem.find('.set-btn').show()
					$elem.find('.img').removeClass('suimg')
					$elem.find('.user-pic-bg').removeClass('su-user-pic-bg')
					$elem.find('.friend').removeClass('r30')
					$elem.css('position', 'absolute').css('left', '0').css('top', '-175px'); //-175声明在css中
				}
			});
		}
				if (winheight > 900) {
			$(window).on('scroll', function() {
				var start = 115; //临界点，大于此值时为fixed状态，小于此值时为absolute;
				var $elem = $('.slider');
				var curL = $('.wrap').offset().left;
				var curT = $(window).scrollTop();
				if (curT > start) {
					$elem.find('.set-btn').hide()
					$elem.find('.img').addClass('suimg')
					$elem.find('.user-pic-bg').addClass('su-user-pic-bg')
					$elem.find('.friend').addClass('r30')
					$elem.css('position', 'fixed').css('left', curL + 'px').css('top','-50px');
				} else {
					$elem.find('.set-btn').show()
					$elem.find('.img').removeClass('suimg')
					$elem.find('.user-pic-bg').removeClass('su-user-pic-bg')
					$elem.find('.friend').removeClass('r30')
					$elem.css('position', 'absolute').css('left', '0').css('top', '-155px'); //-175声明在css中
				}
			});
		}

		$('.signicon').hover(function() {
			$(this).find("span").show()
		}, function() {
			$(this).find("span").hide()
		})
	});

