	var list =[
	{
		"name":"HTML5开发工程师",
		"time": "08：00" ,
		"gongzi" : "8k-15k",
		"jingyan":"经验3-5年/本科",
	},	
	{
		"name":"java",
		"time": "09：00 ",
		"gongzi" : "10k-15k",
		"jingyan":"经验4-6年/本科",
	},	
	{
		"name":"c#",
		"time": "10：00" ,
		"gongzi" : "8k-18k",
		"jingyan":"经验3-8s年/本科",
	},	   
	{
		"name":"pathyn",
		"time": "07：00" ,
		"gongzi" : "6k-12k",
		"jingyan":"经验1-5s年/本科",
	},	   
	{
		"name":"css",
		"time": "10：00" ,
		"gongzi" : "8k-18k",
		"jingyan":"经验3-8s年/本科",
	},	   
	{
		"name":"ios",
		"time": "10：00" ,
		"gongzi" : "8k-18k",
		"jingyan":"经验3-8s年/本科",
	},	   
]
var str ="";
var kuai = document.getElementsByClassName("kuai")[0];
for (var i = 0; i<list.length; i++){
	str+='<div class="kuai1"><div class="name">'+list[i].name+'<span class="time">'+list[i].time+'</span><span><img src="./img/icon_chat2.png"></span><span class="gongzi">'+list[i].gongzi+'</span></div><div class="jingyan">'+list[i].jingyan+'</div><div class="kuaili"><ul><li>移动互联网</li><li>企业服务</li><li>内容</li></ul></div><div><div class="person"><img src="./img/4476.png"></div><div>斑马星空电子商务，生活服务</div></div>	</div>'
}
kuai.innerHTML = str;

$(".go-top").click(function(){
		 $("html").animate({
				 "scrollTop": 0
		 },1000)
		 $(window).scroll(function(){
				 var a = $("html").scrollTop();
				//  console.log(a);
				//  console.log($("html").height());
		 })
		 $("html").scrollTop(0);
})
