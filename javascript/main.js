$(function(){
	var $tabspans 	= $(".tabs_title span");
	var $tabsitems 	= $(".tabs_items .tabs_item");
	//设置第一个span标签的class
	$tabspans.eq(0).addClass('cursor');
	//设置显示第一个的内容区块.tabs_item
	$tabsitems.eq(0).css('display', 'block');
	//span切换事件
	$tabspans.click(function(event) {
		$(this).addClass('cursor').siblings().removeClass('cursor');
		$tabsitems.css('display', 'none').eq($(this).index()).css('display', 'block');
	});
	
});