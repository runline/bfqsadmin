$(document).ready(function() {

    //$("#display").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://bfqualitysolutions.pixub.com/message.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#Tmsgs").html(response); 
            //alert(response);
        }

    });
//});
});
/*var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bfquality/message.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        msg(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function msg(response) {
    var arr = JSON.parse(response);
    var i;
	var mid;
    var t = "<div>";

    for(i = 0; i < arr.length; i++) {
		mid = arr[i].id;
		t += "<a href='#message' onClick="+Message(mid)+"><p>" +
        arr[i].email +
        "&nbsp;&nbsp;-&nbsp;&nbsp;" +
        arr[i].subject +
        "</p></a>";
    }
    t += "</div>";
    document.getElementById("Tmsgs").innerHTML = t;
}

/*

$.getJSON('http://localhost/bfquality/message.php','contact=123',processContacts);
	function processContacts(data) {
		var infoHTML='<p>Contact: ' + 
		data.email;
		infoHTML+=' ' + 
		data.subject
		+ '<br>';
		+ '</p>';
		$('#Tmsgs').html(infoHTML);
	}



        //t += "<a href='#message' onClick="+Message(mid)+"><p>" + 
*/