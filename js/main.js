//jQuery是一个js库，它为我们封装了许多繁琐而常用的功能，
//只需要调用它内部的方法就能轻松实现炫酷的效果
//jQuery基本语法：$(select).action();
// 1、使用$定义jqury函数
//2、select为选择器，完全兼容css选择器
//sction()为要执行的函数


//当前页面
var nowpage = 0;
$(document).ready(function(){
	// 获取屏幕宽高
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	//计算最外层大盒子宽和高
	$(".content").width(width);
	$(".content").height(height*6);
	
	//计算每个页面的宽高
	$(".page").width(width);
	$(".page").height(height);
	
	//触控监听
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage=nowpage+1;
			}else if(direction=="down"){
				nowpage=nowpage-1;
			}
			if(nowpage<0){
				nowpage=0;
			}
			if(nowpage>5){
				nowpage=5;
			}
			//移动content盒子的位置
			$(".content").animate({top:nowpage*(-100)+"%"},{duration:500,complete:animations()});
		}
	});
	//第一页动画
	//1\楼房淡入
	$(".page1-building").fadeIn(2000,function(){
		//2.飞机变大
		$(".page1-avatar").animate({width:"70%"},{duration:1000});
	});
	//第二页动画
	
});
function animations(){
	//第二个页面
	if(nowpage==1){
		$(".page2-bg").fadeIn(2000,function(){
			$(".page2-farm").animate({width:"50%"},{duration:1000});
			//$(".page2-farm").fadeIn(1000,functino(){
			//	$(".page2-it").fadeIn(1000);
			//})
			$(".page2-it").animate({width:"50%"},{duration:1000});
		}); 
	}
	//第三个页面
	if(nowpage==2){
		$(".page3-bus").animate({left:"-100%"},{duration:2000});
		//人追车
		$(".page3-avatar").animate({right:"50%"},{duration:3000,complete:function(){
			//字体淡出
			$(".page3-title,.page3-lastTitle").fadeOut("slow");
			//人和车站淡出
			$(".page3-avatar,.page3-station").fadeOut("slow",function(){
				$(".page3-wall").fadeIn("slow",function(){
					$(".page3-myAvatar").fadeIn("slow",function(){
						$(".page3-space").animate({width:"30%"},{duration:1000,complete:function(){
							$(".page3-where").animate({width:"40%"},{duration:1000});
						}})
					});
				});
			});
		}});
		$(".page3-title").fadeIn(1000,function(){
			$(".page3-lastTitle").fadeIn(2000);
		});	
	}
	
	
	if(nowpage==4){
		$(".page5-favatar").animate({bottom:"30%",right:"30%"},{duration:2000,complete:function(){
			$(".page5-ta").fadeIn("slow",function(){
			$(".page5-tx").fadeIn(1000);
		})
		}});
		
	}
	if(nowpage==5){
		$(".page6-saBg,.page6-savatar").animate({top:"20%"},{duration:2000,complete:function(){
			$(".page6-saBg,.page6-savatar").fadeOut();
		}});
		$(".page6-cloudy").fadeIn(3000,function(){
				$(".page6-saTa").fadeIn(1000,function(){
					$(".page6-saTxt").fadeIn(500);
				});
		})
	}
}
function start(img){
	img.src="img/lightOn.png";
	$(".page4-off,.page4-guide,.page4-title").fadeOut("slow",function(){
		$(".page4-onbg").fadeIn(2000,function(){
			$(".page4-we").fadeIn(1000);
		})
	});
}
function startMusic(){
	var mp=document.getElementById("mp3");
	if(mp.paused){
		mp.play();
		$(".music")[0].src = 'img/musicBtn.png';
	}else{
		mp.pause();
		$(".music")[0].src = 'img/musicBtnOff.png';
	}
}
//第5个页面
//function 