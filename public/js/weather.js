let getJSON = function(url, callback) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        let status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

setTimeout(() => {
    getJSON('https://api.open-meteo.com/v1/forecast?latitude=9.9325&longitude=-84.08&hourly=temperature_2m&current_weather=true',  function(err, data) {
        if (err != null) {
            console.error(err);
        } else {
            let temp = Math.trunc(data.current_weather.temperature);
            document.querySelectorAll(".temp")[0].innerHTML = temp;
        }
    });
  }, "500")

