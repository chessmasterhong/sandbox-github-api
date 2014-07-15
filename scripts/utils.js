function httpGet(url) {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}
