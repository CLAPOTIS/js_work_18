var btns=document.getElementsByClassName("btns");
var show=document.getElementsByClassName("show")[0];
var title=document.getElementsByClassName("title")[0];
var price=document.getElementsByClassName("price")[0];
var goods=[
	{
		"name":"连衣裙",
		"price":118
	},
	{
		"name":"雪纺衬衫",
		"price":46
	},
	{
		"name":"经典条纹T恤",
		"price":67
	},
	{
		"name":"热卖铅笔裤",
		"price":90
	},
	{
		"name":"旗袍礼服",
		"price":45
	},
	{
		"name":"新款外套",
		"price":66
	},
	{
		"name":"时尚连体裤",
		"price":57
	},
	{
		"name":"夏日女包",
		"price":87
	},
	{
		"name":"夏日凉鞋",
		"price":90
	},
	{
		"name":"新款女士单鞋",
		"price":45
	},
	{
		"name":"酷炫太阳镜",
		"price":66
	},
	{
		"name":"防脱长款丝袜",
		"price":7
	},
	{
		"name":"经典帆布鞋",
		"price":87
	},
	{
		"name":"爆款情侣装",
		"price":87
	}
]
var index=0;
timeID=setTimeout("changeGoods()",1000);
for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	btns[i].onmouseover=function(){
		clearTimeout(groop1);
		
		var index=parseInt(this.index);
		for(var j=0;j<btns.length;j++){
			btns[j].className="btns";
		}
		addClass(this,"btns_selected");
		show.src="images/img_"+(index+1)+".jpg";
		title.firstChild.nodeValue=goods[index].name;
		price.firstChild.nodeValue=goods[index].price+'元起';

	}
	btns[i].onmouseout=function(){
		this.className="btns";
		groop1=setTimeout("changeGoods()",1000);
	}
}
function changeGoods(){
	if(index<13){
		btns[index].className="btns";
		addClass(btns[index+1],"btns_selected");
		show.src="images/img_"+(index+2)+".jpg";
		title.firstChild.nodeValue=goods[index+1].name;
		price.firstChild.nodeValue=goods[index+1].price+'元起';
		index++;	
	}else{
		btns[index].className="btns";
		index=0;
		addClass(btns[index],"btns_selected");
		show.src="images/img_1.jpg";
		title.firstChild.nodeValue=goods[index+1].name;
		price.firstChild.nodeValue=goods[index+1].price+'元起';
	}		
	groop1=setTimeout("changeGoods()",1000);
}
function addClass(elem,value){
	if(!elem.className){
		elem.className=value;
	}else{
		elem.className=elem.className.concat(" ",value);
	}
}