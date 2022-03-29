function loadXMLFile(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType('application/xml');
    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    // Wait the response
    xmlhttp.onreadystatechange = function() {
        // if everything is ok
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            // Show the text in div
            //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            var xmlDoc = xmlhttp.responseXML;

            var quotes = xmlDoc.getElementsByTagName("quote");
            var authors = xmlDoc.getElementsByTagName("author");

            var txt = "<table border='1'>";
			for(i = 0; i < quotes.length; i++) {
				txt += "<tr><td>" + quotes[i].childNodes[0].nodeValue + "</td>"+
                   "<td>"    +authors[i].childNodes[0].nodeValue +  "</td></tr>";
                    // console.log(txt);
			}
			txt += "</table>";
			// Finally we place the contents in a div
			document.getElementById("myDiv").innerHTML = txt;

        }
    }
}

function loadJSONFile(){
    var xmlhttp = new XMLHttpRequest();
    // Specify the data / url to be fetched
    xmlhttp.open("GET", "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // find myDiv and insert results there
		    var jsonDoc = xmlhttp.responseText;
            // Once again we find some tags from our variable containing XML
            var jsData = JSON.parse(jsonDoc);
		    var txt = "<table border=1>";
            for(i = 0; i < jsData.Search.length; i++) {
                txt += "<tr><td>" + jsData.Search[i].Title + "</td>"+
                "<td> <img src= '"    + jsData.Search[i].Poster +  " '></td></tr>";
            }
            txt += "</table>";
            // Finally we place the contents in a div
            document.getElementById("myDiv").innerHTML = txt;
        }
    }
}