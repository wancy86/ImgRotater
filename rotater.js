
//Desc
//1.provide the img list, display area.
//2.call init

//Dependense
//1. jQuery


function ImgRotater()
{
	this.
}

ImgRotater.prototype.width=420;
ImgRotater.prototype.height=250;

ImgRotater.prototype.img_len=3;
ImgRotater.prototype.width=420;

ImgRotater.prototype.init=function(){
	//crate the rotater element 
	var target=this.target;

}

var rotater= new ImgRotater({
	width: 420,
	height: 250,
	img_list: ['http://localhost:8888/QiuBoAi/images/rotater1.jpg',
				'http://localhost:8888/QiuBoAi/images/rotater1.jpg',
				'http://localhost:8888/QiuBoAi/images/rotater1.jpg',
				'http://localhost:8888/QiuBoAi/images/rotater1.jpg'],
	target: $('#top_rotater1')
});

rotater.init();



