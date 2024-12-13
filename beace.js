
console.log("hi");

let interval = null;
let intervalRepeatCount = 1000;
interval = window.setInterval(() => {
	console.log("check");
	intervalRepeatCount -= 1;
	let els = document.getElementsByClassName("css-1jxf684");
	for(let i = 0; i < els.length; i++) {
		if (els[i].innerText=="followers") {
			console.log("!!!!");
			console.log("!!!!");
			console.log("!!!!");
			console.log("!!!!");
			console.log(els[i].parentElement.parentElement);
			console.log("!!!!");
			console.log("!!!!");
			console.log("!!!!");
			console.log("!!!!");
			intervalRepeatCount = 0;
		}
	}
	if (intervalRepeatCount <= 0) {
		window.clearInterval(interval);
	}
}, 1);