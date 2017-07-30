$(document).ready(function(){

	var values = ['CODE','INVENT','QUESTION','MAKE','DESIGN'];
	var $shekit = $("#shekit");
	var i = 0;
	// var done = 0;
	setInterval(function(){
		$shekit.text(values[i]);
		// var word = values[i];

		// if (done === 0){
		// 	var a = 0;
		// 	for(var j = 0;j<=1000000;j++){
		// 		var tmp = $shekit.text();
		// 		$shekit.text(tmp+word.charAt(a));
		// 		a=1;

		// 	}
		// }




		if(i===5)
			i = 0;
		else 
			i+=1;

	},800);

});