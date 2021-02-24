function changeWordsOrder(str) {
	return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}

const str = "Hello World my dear friends";
const res = changeWordsOrder(str);
console.log(res);