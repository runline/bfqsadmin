function Message(mID) {
	 $(document).ready(function() {

    //$("#display").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://bfqualitysolutions.pixub.com/messages.php?mid="+mID,  		
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#msgT").html(response); 
            //alert(response);
        }

    });
//});
});
			/*
			var xmlhttp = new XMLHttpRequest();
			var url = "http://localhost/bfquality/messages.php?mid="+mID;

			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					one(xmlhttp.responseText);
				}
			}		
			xmlhttp.open("GET", url, true);
			xmlhttp.send();

			function one(response) {
			var zinto = JSON.parse(response);
			var i;
			var ot = "<div>";

			for(i = 0; i < zinto.length; i++) {
				ot += "<p>Email:<br />" +
				zinto[i].email +
				"</p><p>Phone:<br />+27" +
				zinto[i].phone +
				"</p><p>Subject:<br />" +
				zinto[i].subject +
				"</p><p>Message:<br />" +
				zinto[i].message +
				"</p><p>Date Received:<br />" +
				zinto[i].date +
				"</p>";
			}
			ot += "</div>";
			document.getElementById("msgT").innerHTML = ot;
			}
}

/*function showMessage(id) {
    if (id == "") {
        document.getElementById("msgtxt").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("msgtxt").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","http://bfqualitysolutions.pixub.com/messages.php?id="+id,true);
        xmlhttp.send();
    }*/
}