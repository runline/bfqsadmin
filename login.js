$("button#submitlogin").click( function() {
	 if( $("#username").val() == "" || $("#password").val() == "" ){
	 	$("div#acklogin").html("Please enter both username and password");
	 }
	 else{
	 	$.post( $("#loginform").attr("action"), 
		        $("#loginform :input").serializeArray(), 
				function(data) {
					var xmlhttp = new XMLHttpRequest();
					var url = "http://bfqualitysolutions.pixub.com/login.php?username="+$("#username").val()+"&password="+$("#password").val()+"";

					xmlhttp.onreadystatechange=function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							myFunction(xmlhttp.responseText);
						}
					}
					xmlhttp.open("GET", url, true);
					xmlhttp.send();
					
					function myFunction(response) {
						var arr = JSON.parse(response);
						var i;
						for(i = 0; i < arr.length; i++) {
							if( $("#username").val() == arr[i].username && CryptoJS.MD5($("#password").val()) == arr[i].password){
								//$("div#acklogin").html(data);
								window.location = "index.html#admin";
							}else{
								$("div#acklogin").html("Username/Password combination does not match!");
							}
						}
					}
					//window.location = "index.html#admin";
					} );
	 }
	 $("#loginform").submit( function() {
		 return false;
	 });
});