let flip = document.getElementById("flip");
let result = document.getElementById("result");

let choice = () => {
	let choice = Math.floor(Math.random() * 2);
	return choice;
};

flip.onclick = () => {
	let x = choice();
	if (x === 0) {
		result.innerHTML = "Heads";
	} else {
		result.innerHTML = "Tails";
	}
};
