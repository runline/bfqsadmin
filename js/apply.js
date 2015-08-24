$("button#submitapplication").click( function() {
	 
	 
	 /*if( $("#name").val() == "" || $("#surname").val() == "" || $("#company").val() == "" || $("#address").val() == "" || $("#paddress").val() == "" || $("#tel").val() == "" || $("#cell").val() == "" || $("#fax").val() == "" || $("#email").val() == "" || $("#program").val() == "" || $("#for").val() == "" || $("#learners").val() == "" || $("#startdate").val() == "" || $("#designation").val() == "" || $("#paydate").val() == "" ){
	 	$("div#ackapply").html("Please fill in everything");
	 }
	 if( $("#startdate").val() == "" || $("#designation").val() == "" || $("#paydate").val() == "" ){
	 	$("div#ackapply").html("Please fill in everything");
	 }
	 else{*/
	 	$.post( $("#applyform").attr("action"), 
		        $("#applyform :input").serializeArray(), 
				function(data) {
					$("div#ackapply").html(data);
						window.location = "index.html#successful";
					} );
	 //}
	 $("#applyform").submit( function() {
		 return false;
	 });
});