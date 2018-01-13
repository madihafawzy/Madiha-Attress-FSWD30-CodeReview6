
$(document).ready(function(){
	$(".button-show-info").click(function(){
		$("div.Info-show").slideToggle();	
	})
	$(".items").on("mouseover",function(){
		$(this).animate({"width":"+=100"},200,function(){
			$(this).css({"box-shadow":"1px 5px 20px gray"})
		});
	})
	$(".items").on("mouseout",function(){
		$(this).animate({"width":"-=100"},200,function(){
			$(this).css({"box-shadow":"0px 0px 0px black"})
		})
	})
})

