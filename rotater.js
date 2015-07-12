
//Desc
//1.provide the img list, display area.
//2.call init

//Dependense
//1. jQuery
////<script src="http://common.cnblogs.com/script/jquery.js" type="text/javascript"></script>

//Demo
//ImgRotater(div_id, img_list);

//con_selector, con_width, con_height, img_list
function ImgRotater(obj) {
	//crate the rotater element 
	var target=$(obj.con_selector);
	var imglist=obj.img_list;

	//for circulation to add all img
	var html="";
	html+='<div class="ir_div" style="border:1px solid gray;width:con_width;height:con_height;overflow:hidden;z-index:0;position:relative;">';
	html+='    <ul class="ir_ul" style="list-style:none;display:block;padding:0px;width:con_width;height:con_height;margin:0px;">';
	html2='        <li style="display:none;"><img src="img_url" style="width:con_width;height:con_height;"/></li>';
	html+='    </ul>';
	html+='    <div class="ir_span" style="z-index:10;position:relative;top:-25px;left:span_left">';
	html4='        <span onclick="SwitchImg(img_index)" style="display:inline-block;background:#DDD;width:15px;height:15px;text-align:center;cursor:pointer;">img_index_1</span>';
	html+='    </div>';
	html+='</div>';

	var span_left=(parseInt(obj.con_width.replace('px',''))-22*obj.img_list.length)+'px';
	html=html.replace('con_width',obj.con_width).replace('con_height',obj.con_height).replace('span_left',span_left);
	var temp=$("<div></div></div>").append(html);

	for(var i=0; i<obj.img_list.length; i++)
	{
		temp.find("ul").append(html2.replace('img_url',obj.img_list[i]));
		temp.find(".ir_span").append(html4.replace('img_index',i).replace('img_index_1',i+1));
	}

	$(obj.con_selector).append(temp);
	SwitchImg(0);
}


//annimation on screen
function SwitchImg(img_id)
{

    var img_id=img_id || ($(".ir_ul li").index($(".ir_ul li:visible"))==$(".ir_ul li").length-1 ? 0: $(".ir_ul li").index($(".ir_ul li:visible"))+1);
    $(".ir_ul li").hide();
    $(".ir_span span").css("background","#EEE");

    $(".ir_ul li ddd").each(function(){
        $(this).hide();
        $(".ir_span span").eq($(".ir_ul li").index($(this))).css("background","#EEE");
    });       

    $(".ir_ul li").eq(img_id).show();
    $(".ir_span span").eq(img_id).css("background","#AAA");

}

$(function(){
    setInterval(function(){SwitchImg()},3000);
});

//TODO: git commit code


