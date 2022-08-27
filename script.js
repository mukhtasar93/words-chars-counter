const textEl = document.getElementById("text");
const wordsEl = document.getElementById("words");
const charsEl = document.getElementById("characters");
const resetEl = document.getElementById("reset");

textEl.addEventListener("input", () => {
	charsEl.textContent = textEl.value.length;
	const txt = textEl.value.trim();
	wordsEl.textContent = txt.split(/\s+/).filter((item) => item).length;
});

resetEl.addEventListener("click", (e) => {
	textEl.value = "";
	wordsEl.innerText = 0;
	charsEl.innerText = 0;
});
