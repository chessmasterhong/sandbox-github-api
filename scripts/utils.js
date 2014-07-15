function httpGet(url, json_output) {
    if(typeof json_output === 'undefined') {
        json_output = true;
    }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();

    return json_output === false ? xmlHttp.responseText : JSON.parse(xmlHttp.responseText);
}
