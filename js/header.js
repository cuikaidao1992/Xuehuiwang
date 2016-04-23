//点击切换
$(function(){
	var 
		 index = 0 ;
		Swidth = 970 ;
		 timer = null ;	
		function NextPage()
		{	
			if(index>2)
			{
				index = 0 ;
			}
			$(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		//下一页
		$(".Div1_next").click(function(){
			 index++ ;
			 NextPage();
		});
		//自动滚动
		var timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);		
});

//换一换，猜你喜欢
$(function(){	
	var 
		 index1 = 0 ;
		Swidth1 = 1200 ;
		 timer1 = null ;	
		function NextPage1()
		{	
			if(index1>1)
			{
				index1 = 0 ;
			}
			$(".px_left_change").stop(true, false).animate({left: -index1*Swidth1+"px"},600)		
		}
		//下一页
		$(".Div1_next_1").click(function(){
			 index1++ ;
			 NextPage1();
		});
		//自动滚动
		//var timer1 = setInterval(function(){
		//		index1++ ;
		//		NextPage1();
		//	},4000);		
});

//产品详情页，鼠标移上展开
function fn(obj){
	
	if($(obj).closest(".pro_js_r_nr").find(".pro_js_r_nr_t0").css("display")=="block"){
		$(obj).closest(".pro_js_r_nr").find(".pro_js_r_nr_t0").slideUp("slow");
		$(obj).html('共2项<img src="images/j_s.png" />');
	}else{
		$(obj).closest(".pro_js_r_nr").find(".pro_js_r_nr_t0").slideDown("slow");
		$(obj).html('共2项<img src="images/j_x.png" />');
	}
}
//课程大纲，鼠标移上展开
function fn0(obj){
	
	if($(obj).closest(".kcdg").find(".kcdg_con").css("display")=="block"){
		$(obj).closest(".kcdg").find(".kcdg_con").slideUp("slow");
		$(obj).text('<img src="images/j_s.png" />');
		$(obj).html('<img src="images/j_s.png" />');
	}else{
		$(obj).closest(".kcdg").find(".kcdg_con").slideDown("slow");
		$(obj).html('<img src="images/j_x.png" />');
	}
}



//导航鼠标移上二维码
$(document).ready(function(){
	
$('.n-app-ewm').hover(function(){
    $('.n-ewm-img').show();
},function(){
    $('.n-ewm-img').hide();
});
//学习流程特效
$(function() {
                $('.n-round-center').hover(function() {
                    $('.n-fc-round').addClass('open');
                    $(this).removeClass('viphover');
                });
                $('.n-fc-round').hover(function() {
                }, function() {
                    $(this).removeClass('open');
                    $('.n-round-center').addClass('viphover');
                })
            });
});
//tab
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}
$('[data-pull]').hover(function() {
    $(this).addClass('active');
    $(this).find('.' + $(this).attr('data-pull')).show();
}, function() {
    $(this).removeClass('active');
    $(this).find('.' + $(this).attr('data-pull')).hide();
});
/*头部屏幕适应*/
$(window).resize(function() {
    var ww = parseInt($(window).width());
    if (ww <= 1000) {
        $('.navbox').addClass('w-content');
    } else if ($('.header').hasClass('n-all-header')) {
        $('.navbox').removeClass('w-content');
    }
})

var timeout         = 100;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 
// -->

//轮播
function getStyle(obj,attr){
	if( obj.currentStyle ){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
function doMove(obj,attr,target,speed,callBack){
	var cur = parseInt( getStyle(obj,attr) );
	speed = cur < target ? Math.abs(speed) : -Math.abs(speed);
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		cur += speed;
		if(  cur >= target && speed > 0 ||  cur <= target && speed < 0){
			clearInterval(obj.timer);
			cur = target;
			obj.style[attr] = cur + "PX";
			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";
		}
	},30);
}
window.onload=function(){
	var pic_width=$(window).width();
	var picList=document.getElementById("picList");
	var pic_height=600;
	setTimeout(function(){
		pic_height=$("#picList li").height();
		$("#Carousel").css("height",pic_height);
	},10);
	var point=document.getElementById("point");
	var aSpan=point.getElementsByTagName("span");
	var aImg=picList.getElementsByTagName("img");
	var num=0;
	var aPic=["images/banner1.jpg","images/tu1.jpg","images/ban2.jpg"];
	$("#picList li").css("width",pic_width );
    $("#picList img").css("width",pic_width );
	$("#Carousel").css("height",pic_height);
	window.onresize=function(){
		pic_width=$(window).width();
		pic_height=$("#picList li").height();
        $("#picList li").css({
			"width":pic_width
		});
        $("#picList img").css({
			"width":pic_width
		});
		$("#Carousel").css("height",pic_height)
	}
	function play(){
		timer=setInterval(function(){
			num++;
			if(num>aPic.length-1){
				num=0;
			}
			aImg[1].src=aPic[num];
			for (var j = 0; j < aSpan.length; j++) {
				aSpan[j].className=""
			}
			$("#point span").removeClass("swiper-active-switch");
			$("#point span").eq(num).addClass("swiper-active-switch");
			doMove(picList,"left",-pic_width,100,function(){
				picList.style.left=0;
				aImg[0].src=aImg[1].src;
			})
		},3000);
	}
	play();
	$("#point span").mouseover(function(){
		clearInterval( timer );
		aImg[0].src=aPic[$(this).index()];
		$("#point span").removeClass("swiper-active-switch");
		$("#point span").eq($(this).index()).addClass("swiper-active-switch");
		num=$(this).index();
	}).mouseout(function(){
		play()
	})
	$(".playback_list li").mouseover(function(){
		$(".video_content").eq($(this).index()).css("opacity",1)
        startMove($(".video_mask")[$(this).index()],'opacity',250,60,'linear');
		$(".video_title").eq($(this).index()).css("display","none");
	})
	$(".playback_list li").mouseout(function(){
		$(".video_content").eq($(this).index()).css("opacity",0)
        startMove($(".video_mask")[$(this).index()],'opacity',250,0,'linear');
		$(".video_title").eq($(this).index()).css("display","block");
	})
	//透明度渐变//
    // JavaScript Document
    var Tween = {
        linear: function (t, b, c, d){
            return c*t/d + b;
        }
    };
    //callBack 回调函数，动画结束之后，执行的函数
    function startMove(obj,attr,time,target,type,callBack,ConBack)
    {
        var t = 0;
        var b =  css(obj,attr);
        var c =  target - b;
        var d = time / 20;
        clearInterval(obj.timer);
        obj.timer = setInterval(
            function (){
                t++;
                var nub = Tween[type](t,b,c,d);
                if(attr == "opacity"){
                    obj.style[attr] = nub/100;
                    obj.style.filter ="alpha(opacity="+ nub +")";
                } else {
                    obj.style[attr] = nub + "px";
                }
                ConBack&&ConBack();
                if(t >= d){
                    clearInterval(obj.timer);
                    /*if(callBack){
                     callBack();
                     }(*/
                    callBack&&callBack();
                }
            },
            20
        );
    }
    function css(obj,attr){
        var nub = 0;
        if(obj.currentStyle){
            nub = parseFloat(obj.currentStyle[attr]);
        } else {
            nub = parseFloat(getComputedStyle(obj)[attr]);
        }
        if(attr == "opacity"){
            return Math.round(nub*100);
        }
        return nub;
    }
/*导航二级菜单*/
	$("#sub_nav_list").hover(function(){
		$("#sub_nav").css("zIndex",1000);
		startMove($("#sub_nav")[0],'opacity',200,100,'linear');
	},function(){
		$("#sub_nav").css("zIndex",-1);
		startMove($("#sub_nav")[0],'opacity',200,0,'linear');
	});
	$("#sub_nav li").hover(function(){
		$("#sub_nav").css("zIndex",1000);
		$(this).css({
			"background":"#46c37b"
		})
		$("#sub_nav li a").eq($(this).index()).css("color","#fff")
	},function(){
		$(this).css({
			"background":"#fff"
		})
		$("#sub_nav li a").eq($(this).index()).css("color","#616161")
	})
	/*更多*/
	$(".nav-more").hover(function(){
		$("#nav-more_back").css("zIndex",1000);
		startMove($("#nav-more_back")[0],'opacity',200,100,'linear');
	},function(){
		$("#sub_nav").css("zIndex",-1);
		startMove($("#nav-more_back")[0],'opacity',200,0,'linear');
	});
	$("#nav-more_back li").hover(function(){
		$("#nav-more_back").css("zIndex",1000);
		$(this).css({
			"background":"#46c37b"
		})
		$("#nav-more_back li a").eq($(this).index()).css("color","#fff")
	},function(){
		$("#nav-more_back").css("zIndex",-1);
		$(this).css({
			"background":"#fff"
		})
		$("#nav-more_back li a").eq($(this).index()).css("color","#616161")
	})
	/*输入框*/
	$("#search_text").focus(function(){
		$(this)[0].value="";
		$(this).animate({
			width:150
		},100)
	})
	/*超小平登陆框*/
	$(".log_in_reg li").hover(function(){
		$(this).css({
			"background":"#46c37b"
		})
		$(".log_in_reg li a").eq($(this).index()).css("color","#fff")
	},function(){
		$(this).css({
			"background":"#fff"
		})
		$(".log_in_reg li a").eq($(this).index()).css("color","#616161")
	})
	/*超小平登陆框*/
	$(".user_ico").hover(function(){
		$(".log_in_reg").css({
			"display":"block"
		})
	},function(){
		$(".log_in_reg").css({
			"display":"none"
		})
	})
}



