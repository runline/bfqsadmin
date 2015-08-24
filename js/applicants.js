var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bfquality/applicants.php";

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
    var out = "<div>";

    for(i = 0; i < arr.length; i++) {
		out += "<a href='#applicant' onClick="+showApplicant(arr[i].id)+"><p>" +
			arr[i].firstname +
			"&nbsp;&nbsp;-&nbsp;&nbsp;" +
			arr[i].lastname +
			"&nbsp;&nbsp;-&nbsp;&nbsp;" +
			arr[i].company +
		"</p></a>";
    }
    out += "</div>"
    document.getElementById("applicantsT").innerHTML = out;
}
/*
function showApplicants() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","http://bfqualitysolutions.pixub.com/applicants.php",true);
        xmlhttp.send();
}*/