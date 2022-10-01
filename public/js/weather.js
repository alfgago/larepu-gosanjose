let getJSON = function(e, t) {
	let n = new XMLHttpRequest();
	n.open("GET", e, !0), n.responseType = "json", n.onload = function() {
		var e = n.status;
		200 == e ? t(null, n.response) : t(e)
	}, n.send()
};

function insertAfter(e, t) {
	e.parentNode.insertBefore(t, e.nextSibling)
}
setTimeout(() => {
	getJSON("https://api.open-meteo.com/v1/forecast?latitude=9.9325&longitude=-84.08&hourly=temperature_2m&current_weather=true", function(e, t) {
		null !== e ? console.error(e) : (t = Math.trunc(t.current_weather.temperature), document.querySelectorAll(".temp")[0].innerHTML = t);
	})
}, "500");