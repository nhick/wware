launchApp = function(){
	window.open( "app.html" , "WorkWare - App" , "height=800 , width=320 , location=0 , resizeable=0 , statusbar=0 , scrollbars=0" );
}

launchItem = function(item){
	window.open( "item.html?id="+item , "WorkWare - Item" , "height=420 , width=680 , location=0 , resizeable=0 , statusbar=0 , scrollbars=0")
}

$(".diaryEntry").click(function(){

	launchItem(this.id);

});