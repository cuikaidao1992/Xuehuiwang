$(document).ready(function() {
	$('img[data-src]').lazyload({
		failure_limit: 10
	});
	var index = 0;
	timer = null;
	len = $(".scrollul li").length;

	function NextPage() {
		if (index > len - 1)
			index = 0;
		$(".scrollul li").stop(true, false).filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
		$('.scrollBtn em').removeClass('aHover');
		$('.scrollBtn em').eq(index).addClass('aHover');
		bgColor();
	}

	function PrevPage() {
		if (index < 0)
			index = len - 1;
		$(".scrollul li").stop(true, false).filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
		$('.scrollBtn em').removeClass('aHover');
		$('.scrollBtn em').eq(index).addClass('aHover');
		bgColor();
	}

	function bgColor() {
		var yanse = $(".scrollul li").eq(index).attr('yanse');
		$('.n-index-banner').css({
			"background-color": yanse
		})
	}
	var timer = setInterval(function() {
		index++;
		NextPage();
	}, 5000)
	$(".scrollul,#ep-arrow-left,#ep-arrow-right").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			index++;
			NextPage();
		}, 5000)
	})
	$("#ep-arrow-right").click(function() {
		index++;
		NextPage();
	});
	$("#ep-arrow-left").click(function() {
		index--;
		PrevPage();
	});
	$('.scrollBtn em').click(function() {
		index = $(this).index();
		NextPage();
	});
	var courseIndex = 0;

	function coursePage() {
		if (courseIndex > 1)
			courseIndex = 0;
		$('.n-screen-tit2 li').removeClass('active');
		$('.n-screen-tit2 li').eq(courseIndex).addClass('active');
		$('.n-index-course .n-course-box').hide();
		$('.n-index-course .n-course-box').eq(courseIndex).show();
		if (!$('.n-screen-tit2 li').eq(courseIndex).attr('lazy')) {
			$('img[data-src]').lazyload({
				failure_limit: 0
			});
			$('.n-screen-tit2 li').eq(courseIndex).attr('lazy', true);
		}
	}
	var courseTimer = setInterval(function() {
		courseIndex++;
		coursePage();
	}, 5000);
	$(".n-index-course").hover(function() {
		clearInterval(courseTimer);
	}, function() {
		courseTimer = setInterval(function() {
			courseIndex++;
			coursePage();
		}, 5000);
	})
	$(function() {
		bgColor();
		$('.n-screen-tit2 li').hover(function() {
			$('.n-screen-tit2 li').removeClass('active');
			$(this).addClass('active');
			$('.n-index-course .n-course-box').hide();
			$('.n-index-course .n-course-box').eq($(this).index()).show();
			if (!$(this).attr('lazy')) {
				$('img[data-src]').lazyload({
					failure_limit: 0
				});
				$(this).attr('lazy', true);
			}
		});


		$('.n-video-list li').click(function() {
			var url = $(this).find('img').attr('video');
			var tourl = '';
			var videoimg = $(this).find('img').attr('src');
			var configs = {
				sharing: {
					link: $(this).find('img').attr('data-href')
				}
			};
			popVideoShow(url, videoimg, tourl, configs);
		});
		$('.n-video-list li').hover(function() {
			$(this).addClass('active');
		}, function() {
			$(this).removeClass('active');
		});
		$('.n-screen-tit3 li').hover(function() {
			$('.n-screen-tit3 li').removeClass('active');
			$(this).addClass('active');
			$('.n-index-students .n-students-con').hide();
			$('.n-index-students .n-students-con').eq($(this).index()).show();
			if (!$(this).attr('lazy')) {
				$('img[data-src]').lazyload({
					failure_limit: 0
				});
				$(this).attr('lazy', true);
			}
		});
		$('.course-time .n-collect').click(function() {
			if (_MID_ == 0) {
				Login(location.href);
				return false;
			}
			var id = $(this).attr("treeid");
			var status = $(this).attr("status");
			var type = "tree";
			if (status == 0) {
				var url = U('ask/Index/doFavorite');
			} else {
				var url = U('course/Public/doDelFavorite');
			}
			var self = $(this);
			$.post(url, {
				id: id,
				type: type
			}, function(data) {
				if (data.status == '1') {
					ui.success(data.info);
					if (status == 0) {
						self.addClass("n-collect-ok");
						self.attr("status", "1");
					} else {
						self.removeClass("n-collect-ok");
						self.attr("status", "0");
					}
				} else {
					ui.error(data.info);
				}
			}, 'json');
		});
	});
});