let form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	let output = document.querySelector('output');
	let firstNum = document.querySelector('#first-num').value;
	let secondNum = document.querySelector('#second-num').value;
	let operator = document.querySelector('#operator').value;
	output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
errorBtns[0].onclick = () => {
	console.log("Console log");
};
errorBtns[1].onclick = () => {
	console.error("Console error");
};
errorBtns[2].onclick = () => {
	console.count("Console button count is");
};
errorBtns[3].onclick = () => {
	console.warn("Console warning");
};
errorBtns[4].onclick = () => {
	console.assert(2 === 1 + 1, "2 = 1 + 1");
	console.assert(3 === 1 + 1, "3 = 1 + 1");
};
errorBtns[5].onclick = () => {
	console.clear();
};
errorBtns[6].onclick = () => {
	console.log("Documentation location information");
	console.dir(document.location);
};
errorBtns[7].onclick = () => {
	console.log("Documentation body information");
	console.dirxml(document.getElementById("error-btns"));
};
errorBtns[8].onclick = () => {
	console.group("Console Group Start");
};
errorBtns[9].onclick = () => {
	console.groupEnd();
};
errorBtns[10].onclick = () => {
	const dataObject = {
		name: "Manu",
		age: 19
	}
	console.table(dataObject);
};
errorBtns[11].onclick = () => {
	console.time("timer example");
}
errorBtns[12].onclick = () => {
	console.timeEnd("timer example");
}
errorBtns[13].onclick = () => {
	function funcExample() {
		console.trace("Stack trace");
	}

	funcExample();
}

errorBtns[14].onclick = () => {
	console.log("First we'll gracefully catch an error");
	try {
		errorBtns[15].onclick = () => {
			console.log("15th button clicked???");
		}
	}
	catch (err) {
		console.error("Oh no, this button does not exist! We gracefully caught this error though.", err);
	}
	finally {
		console.log("Making first button red irrespective of previous error in finally clause");
		errorBtns[0].style = "color: red";	
	}

	class UnsupportedOperationError {
		constructor(message) {
			this.message = message;
			this.name = "Custom Unsupported Operation Error"; 
		}
	}

	// meant to fail
	console.log("Now we'll throw a custom error that won't be caught");
	function testWindow() {
		if ("non_existent_method" in window) {
			window.non_existent_method("");
		}
		else {
			throw new UnsupportedOperationError("The window does not have the method that was requested");
		}
	}

	testWindow();
}

old = window.onerror || (() => {
});
window.onerror = () => {
	old();
	console.warn("Oh no, a global error occured!");
};

TrackJS.track('Testing TrackJS!');

