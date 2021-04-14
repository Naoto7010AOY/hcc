$(function(){
	$("section").html("");
	var items = "";
	$.getJSON("csvjson.json", function(data){
		$(data).each(function(){
			items +='<div>';
			if(this.num==""){
				items +='<div class="ent">'+this.ent+'</div>';
			}else{
				items +='<div class="num';
				if(this.pass!=""){items +=' pass';}
				items +='">'+this.num+'</div>';
			}
			items +='<div class="copy">'+this.copy+'</div>';
			items +='<div class="adv">'+this.adv+'</div>';
			items +='<div class="type">'+this.type+'</div>';
			items +='<div class="media">'+this.media+'</div>';
			items +='<div class="url">'+this.url+'</div>';
			items +='<a href="'+this.url+'" target="_blank" class="link"></a>';
			items +='</div>';
		})
		$('section').html(items);
	})
})
