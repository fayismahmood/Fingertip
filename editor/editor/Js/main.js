///Arrays
var fonts="AnjaliOldLipi,Chilanka,Dyuthi-Regular,Gayathri-Bold,Karumbi-Regular,Keraleeyam-Regular,Lohit-Malayalam,Manjari-Bold,Manjari-Regular,Meera-Regular,Rachana-Bold,Rachana-Regular,RaghuMalayalamSans-Regular,Samyak-Malayalam,Suruma,Uroob-Regular,NotoSansMalayalam-Bold,NotoSansMalayalam-Regular,NotoSerifMalayalam-Bold,NotoSerifMalayalam-Regular,Aarcha4Blog,Azeez GIST-MLOTKarthika,BalooChettan_0,Deshabhimani_0,EGGIndulekha_0,GEETHANJALI_0,ML-NILA01_NewLipi,ML-NILA02_0,ML-NILA03_NewLipi,ML-NILA07_0,ML-NILA07_NewLipi,PanchariUniN_0, SakalBharati_Malayalam"
var Eldata={
	h1:"<h1>Heading1</h1>",
	img:"<img src='set' />",
	div:"<div>EnterAnu</div>",
	p:"<p>pargaraph here</p>",
	rectangle:"<div style='border:solid #0966ca 4px; width:150px; height:150px;'></div>",
	circle:"<div style='border:solid #0966ca 4px;border-radius:50%; width:150px; height:150px;'></div>"

}
var num="px,%";
var border="solid,dashed"
var Shadow=" ,inset"
$(document).ready(f=>{
	/*dia('<div class="opdiv">'+
	'<h1 class="cl1">WELCOME</h1>'+
	'<center><div class="linkico"><i class="icofont-link-alt"></i></div><center>'+
	'<div class="cl1">link css to access unicode fonts</div>'+
	'<center>'+
	'<div class="cl2">http://127.0.0.1:5500/editor.html</div></center>'+
	'</div>')*/

	$(".Eladder").click(function(){
		var data=$(this).attr("data");
		$(".selected").append(Eldata[data])
	})



function wrap(x,y,left,top){
	$(".focus").css('left',left)
	$(".focus").css('top',top)


	$(".focus").css('height',x)
	$(".focus").css('width',y)

	$(".focus .hor").css("left",'calc('+y/2+'px - 4px)');
	$(".focus .ver").css("bottom",'calc('+x/2+'px - 4px)');

}
	$(document).on("click","#conte *",function(e){
		e.stopPropagation();




	
			
		



		if($(this).attr("class")=="selected"){}else{
			
			var paddingleft=Number($(this).css("padding-left").replace("px",""))
			var paddingtop=Number($(this).css("padding-top").replace("px",""))

			var cont=$(this)

			$(".focus").remove();
			$("#conte *").removeClass("selected")
			$(".node").each(function (a,b){
				$(b).remove()
			})

			$("body").append("<div class='focus'></div>")
			$(this).addClass("selected")

			$(".focus").css('left',$(this).offset().left+paddingleft)
			$(".focus").css('top',$(this).offset().top+paddingtop)

			wrap($(this).height(),$(this).width(),$(this).offset().left+paddingleft,$(this).offset().top+paddingtop)
			
			$(".focus").append("<div style='bottom:calc(0px - 4px); left:calc("+$(this).width()/2+"px - 4px);' class='node hor'></div>")
			$(".focus").append("<div style='right:calc(0px - 4px); bottom:calc("+$(this).height()/2+"px - 4px);' class='node ver'></div>")

			$(".focus").append("<div class='possitioner'><button data='absolute'><i class='icofont-drag'></i></button><button data='unset'><i class='icofont-box'></i></button><button data='relative'>R</button></div>")
			$(".focus").append("<div class='borderer_div'><button id='borderer' data=''><i class='icofont-rounded-expand'></i></button></div>")

			$(".focus #borderer").click(function(){
				var br;
				br=$(".selected").css("border-radius").split(" ");
				if(br.length==1){
					br=[br[0],br[0],br[0],br[0]]
				}
				console.log(br)
					$(".focus").append("<div data-h='left' data-ver='top' style='left:"+br[0]+";top:"+br[0]+";' class='borderer_radi'></div>"+
										"<div data-h='right' data-ver='top' style='right:"+br[1]+";top:"+br[1]+";' class='borderer_radi'></div>"+
										"<div data-h='right' data-ver='bottom' style='right:"+br[2]+";bottom:"+br[2]+";' class='borderer_radi'></div>"+
										"<div data-h='left' data-ver='bottom' style='left:"+br[3]+";bottom:"+br[3]+";' class='borderer_radi'></div>"
					)	
			})


			$(".focus .possitioner>*").click(function(){
				var pos=$(this).attr("data");
				$(".selected").css("position",pos);
				if(pos=="absolute"){
					$(".focus").append("<div style='left:calc(50%); top:calc(50%)' class='dragger'><i class='icofont-2x icofont-drag'></i></div>")
				}
			})


			var click="a";
			var clickWid=0;
			var x=0;
			var el;





			$(document).on("mousedown touchstart",".borderer_radi",function(e){
				
				click="e";
				el=$(this);
				clickWid=$(".selected").css("width")
				x=e.clientY;
		   })

		   
		   $(document).on("mousedown touchstart",".dragger",function(e){
				
			click="d";
			clickWid=$(".selected").css("width")
			x=e.clientX;
	   })
				
		 



			$(document).on("mousedown touchstart",".node.ver",function(e){
				
				 click="b";
				 clickWid=$(".selected").css("width")
				 x=e.clientX;
			})
			$(document).on("mousedown touchstart",".node.hor",function(e){
				click="c";
				clickWid=$(".selected").css("width")
				x=e.clientX;
		   })

			$(document).on("mouseup touchend","body",function(){
				click="a";

		   })
			$(document).on("mousemove","body",((e)=>{
				if(click=="b"){
					
					var fCon=$(".selected");
					var thex=e.clientX;
					
					var paddingh=Number(fCon.css("padding-right").replace("px",""))+Number(fCon.css("padding-left").replace("px",""))
					var w=thex-document.querySelector(".focus").getBoundingClientRect().x-paddingh;
					
					$("[data=width]").val(w)	
					$("[data=width]").change()
					wrap(fCon.height(),fCon.width())
				}

				if(click=="d"){
					
					var fCon=$(".selected");
					var thex=e.clientX;
					
					var paddingh=Number(fCon.css("padding-right").replace("px",""))+Number(fCon.css("padding-left").replace("px",""))
					var left=thex-document.querySelector(".focus").getBoundingClientRect().x-paddingh-Number($(".selected").width()/2);
					var they=e.clientY;
					var paddingv=Number(fCon.css("padding-top").replace("px",""))+Number(fCon.css("padding-bottom").replace("px",""))
					var top=they-document.querySelector(".focus").getBoundingClientRect().y-paddingv-Number($(".selected").height()/2);
				
					$(".selected").css("left",left);
					$(".selected").css("top",top);

					wrap($(this).height(),$(this).width(),$(this).offset().left+paddingleft,$(this).offset().top+paddingtop)

				}




				if(click=="e"){
					
					var fCon=$(".selected");
					var theY=e.clientY;
					
					if(theY>x){
						var radi=theY-x;
					}else{
						var radi=x-theY;
					}
					
					var hor=el.attr("data-h");
					var ver=el.attr("data-ver");

					
					el.css(hor,radi);
					el.css(ver,radi);

					var bRaData=[];
					var i=0;
					$(".borderer_radi").each(function(a,b){
						var hor=$(b).attr("data-h");
						
						bRaData[i]=$(b).css(hor);
						i++;
					})
					
					$(".selected").css("border-radius",bRaData[0]+" "+bRaData[1]+" "+bRaData[2]+" "+bRaData[3])

				}


				if(click=="c"){
					var fCon=$(".selected");
					var they=e.clientY;
					var paddingv=Number(fCon.css("padding-top").replace("px",""))+Number(fCon.css("padding-bottom").replace("px",""))
					var w=they-document.querySelector(".focus").getBoundingClientRect().y-paddingv;;
					
					$("[data=height]").val(w)	
					$("[data=height]").change()
					wrap(fCon.height(),fCon.width())
				}
				
			}))

			$(document).on("touchmove","body",((e)=>{
				if(click=="b"){
					var fCon=$(".selected");
					var thex=e.touches[0].clientX;
					
					var paddingh=Number(fCon.css("padding-right").replace("px",""))+Number(fCon.css("padding-left").replace("px",""))
					var w=thex-document.querySelector(".focus").getBoundingClientRect().x-paddingh;
					
					$("[data=width]").val(w)	
					$("[data=width]").change()
					wrap(fCon.outerHeight(true),fCon.outerWidth(true))
				}

				if(click=="c"){
					var fCon=$(".selected");
					var they=e.touches[0].clientY;
					var paddingv=Number(fCon.css("padding-top").replace("px",""))+Number(fCon.css("padding-bottom").replace("px",""))
					var w=they-document.querySelector(".focus").getBoundingClientRect().y-paddingv;;
					
					$("[data=height]").val(w)	
					$("[data=height]").change()
					wrap(fCon.outerHeight(true),fCon.outerWidth(true))
				}
				
			}))

		}
		
		$(".Texter").click((e)=>{
			if($(".Texter").hasClass("cl")){

				$("#conte *").each(function(a,b){
				$(b).attr("contenteditable","true")})

			}else{
				
				$("#conte *").each(function(a,b){
				$(b).removeAttr("contenteditable")})
					
		}
		})


		$("input").on("keyup change",function(){
			wrap($('[data=height]').val(),$('[data=width]').val())
		})
		var th=$(this);

        var texdata=["font-family","font-weight","src"]
		texdata.forEach(e=>{
			$("[data="+e+"]").val(th.css(e))
		})

		

		var numdata=["height","width","font-size","padding","margin","line-height","border-radius"]
		numdata.forEach(e=>{
			var val=th.css(e);
			
			$("[data="+e+"]").val(val.match(/\d*/)[0])
			$("[data="+e+"]").parent().find("button").html("px")
		})

		var txtcmdata=["margin","border","box-shadow","text-shadow"]
		txtcmdata.forEach(e=>{		
			var val=th.css(e);
			col=val.match(new RegExp(/rgb(.*?)\)/));
			var rr;
			if(col==null){
				rr=val.split(" ")
			}else{
				rr=val.replace(col[0],RGBToHex(col[0])).replace(/px/g,"").split(" ");
				}
				//console.log(col)	
			$("[data="+e+"] input").each(function (a,b){
				//console.log(b+' mmmm  '+rr[a])
					$(b).val(rr[a])
				
			})

		})

		var texAttrdata=["src"]
		texdata.forEach(e=>{
			$("[Attrdata="+e+"]").val(th.attr(e))
		})

		var coldata=["color","background-color"]
		coldata.forEach(e=>{
			var HexCol=RGBToHex(th.css(e));
			$("[data="+e+"]").css("background-color",HexCol)	
		})

		var coludata=["text-align","float"]
		coludata.forEach(e=>{
			th.css(e);
			$("[datatype="+e+"]").removeClass("ed")
			$("[data="+th.css(e)+"]").addClass("ed")	
		})
	})








	$("[mod=attr]").change(function(){
		var val=$(this).val();
		var item=$(this).attr("Attrdata");
		$(".selected").attr(item,val);
	
	})

	$(document).on("change keyup","[mod=txtWSuf]",function(){
		var val=$(this).val();
		val=$(this).attr("suf").replace("Suf",val)
		var item=$(this).attr("data");
		$(".selected").css(item,val);
	
	})
	
	$("[mod=txtcm] *").on("keyup change",function(){
		var val="";
		var item=$(this).attr("cdata");
		var vald=$(this).parent().find("*");

		vald.each(function(e,u){
			if($(u).attr("type")=="range"){
				val=val+' '+$(u).val()+"px";
			}else{
			if($(u).val()){
				val=val+' '+$(u).val()
			}
			if($(u).html()){
				val=val+' '+$(u).html()
			}}
		})
		$(".selected").css(item,val);
	
			$(this).parent().find("[sel=sel]").click(function(){
					var sel_data=$(this).attr("cdata");
					var Arr=eval(sel_data).split(",");
					var slWidth=$(this).css("width");
					$(this).after('<div style="" class="slb"></div>')
					
					var slbd=""
					Arr.forEach(e=>{
						slbd=slbd+'<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>'
					})
					$(".slb").html(slbd)

					var btn=$(this)
					$(".opt").click(function(){
						var html=$(this).find("span").html();
						btn.val(html)
					})
					outerClick($(this))
					})
	})

	$("[mod=txtcm]").each(function(e,u){

		var pickere = new CP(document.querySelector('[data='+$(u).attr("data")+']').querySelector('[mod=Ccol]'));
		
		pickere.on("change", function(color) {
			$('[data='+$(u).attr("data")+'] [mod=Ccol]').val('#' + color) 
			$('[data='+$(u).attr("data")+'] [mod=Ccol]').change() 
		});
	})

	$(document).on("change keyup","[mod=txt][type=number]",(function(){
		var val=$(this).val()+$(this).parent().find("button").html();
		var item=$(this).attr("data");
		$(".selected").css(item,val)
	}))
    $(".small button").click(function(){
		Arr=num.split(",")
		var slWidth=$(this).css("width");
		$(this).after('<div style="" class="slb"></div>')
		
		Arr.forEach(e=>{
			$(".slb").append('<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>')
		})
		var btn=$(this)
		$(".opt").click(function(){
			var html=$(this).find("span").html();
			btn.html(html)
		})
		outerClick($(this))
	})

	$(document).on("change keyup","[mod=txt][type=text]",(function(){
		var val=$(this).val();
		var item=$(this).attr("data");
		$(".selected").css(item,val)
	}))
    
	$(document).on("change keyup","[mod=txt][type=range]",(function(){
		var val=$(this).val();
		var item=$(this).attr("data");
		$(".selected").css(item,val)
	}))


	$("[mod=tgB]").click(function(){
		var datatype=$(this).attr("datatype");
		var data=$(this).attr("data");
		$(".ed").removeClass("ed")
		$(this).addClass("ed");
		$(".selected").css(datatype,data)
	
	})


    $("[mod=sel]").click(function(){
		var val=$(this).val();
		var sel_data=$(this).attr("sel-data");

		var Arr=eval(sel_data).split(",");
		var slWidth=$(this).css("width");
		$(this).after('<div style="width:calc('+slWidth+' +17px);"  class="slb"></div>')
		
		Arr.forEach(e=>{
			$(".slb").append('<div style="width:'+slWidth+';" class="opt"><span>'+e+'</span></div>')
		})

		var item=$(this).attr("data");

		$(".opt").click(function(){
			var html=$(this).html();

			var html=$(this).find("span").html();
			$("[data="+item+"]").val(html)
			$(".selected").css(item,html)
			$(".slb").remove();
		})
		
	/*	var th=$(this)
		$(document).on("click",".opt",function(){
			
		})
		*/

		outerClick($(this))
		
	})

	$("[mod=col]").click(function(){
		var da=$(this).attr("data");
		var th=$(this)

	var picker = new CP(document.querySelector('[data='+da+']'));

	picker.on("change", function(color) {
		th.css("background-color",'#' + color)  
		$(".selected").css(da, '#' + color)
	});

	})
	
	
})


///RemoveDigWhenClickAtDoc////
function outerClick(select){
    $(document).on("click",(e)=>{
        var container = $(select).parent();
        
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
               container.find(".slb").remove();
               
			}
			
        })

}







function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function conte(){
	$(".node").each(function (a,b){
		$(b).remove()
	})
	//$(".selected").unwrap()
	
	$(".selected").wrap("<div id='contt'></div>")
	var cont=$("#contt").html();
	$(".code>textarea").text(cont)
	$(".selected").unwrap()
}


function dia(cont){
	$("body").append('<div id="dia">'+cont+'<button style="float:right;" onclick="diaClose()"><i class="icofont-ui-close"></i></button></div>')
	$("body").css("overflow","hidden")

}
function diaClose(){
	$("#dia").remove();
	$("body").css("overflow","auto")
}

function txtafter(c,e){
	c.next().attr("type","text")
	c.next().val(e);
	c.next().keyup()
	c.next().attr("type","number");

	var val=$(".selected").css(c.next().attr("data"));
	c.next().val(val.match(/\d*/)[0])
	
}
function toolb(t,b){
	
	if(b.hasClass("cli")){
		$(t+".hi").removeClass("vi")
		b.removeClass("cli")
	}else{
		$(".hi").removeClass("vi");
		$(t+".hi").toggleClass("vi")

		$(".header div").removeClass("cli")
		b.addClass("cli")

	}

	$(".codeS").click(function(){
		conte()
	})
	
	
}