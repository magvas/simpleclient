function getDataFromService(vintner) {
    var xmlHttp = new XMLHttpRequest();
    var output = document.getElementById('lblOutput');
    if (xmlHttp) {
        xmlHttp.open('POST', 'http://localhost:10000/',true);
        var params = vintner;
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === XMLHttpRequest.DONE) {
                if (xmlHttp.status === 200) {
                    var wines = JSON.parse(xmlHttp.responseText);
                    var winesLength = wines.length;
                    var index = 0;
                    output.innerHTML = '';                    
                    
                    for (index; index < winesLength; index++) {
                        var element = wines[index];
                        output.innerHTML += element.name + '<br/>';
                    }
                }

            };
        };
        xmlHttp.send(params);
    };
};